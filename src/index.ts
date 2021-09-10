import { Configuration } from './apis/configuration';
import { AuthenticationApi, InlineResponse200 } from './apis/auth';
import { v4 as uuidv4 } from 'uuid';
import { AxiosResponse } from 'axios';
import { apiInterceptor } from './util/interceptors';
import { defaultParams, WalmartMarketplaceApi } from './constants';

export interface WalmartApiCredentials {
	clientId: string;
	clientSecret: string;
	consumerChannelType?: string;
	serviceName?: string;
	accessToken?: {
		token: string;
		expiration?: Date;
		type?: string;
	};
}

interface DefaultParams {
	authorization: string;
	wMSECACCESSTOKEN: string;
	wMQOSCORRELATIONID: string;
	wMSVCNAME: string;
	wMCONSUMERCHANNELTYPE: string;
}

interface CredentialsCache {
	[key: string]: WalmartApiCredentials;
}

const credentialsCache: CredentialsCache = {};

/**
 * Converts a credential into a defaultParam object used in all api calls.
 *
 * @param {WalmartApiCredentials} credentials The credentials to transform into a DefaultParam.
 * @returns {DefaultParams} The default parameters with information from credentials object.
 */
const getDefaultParams = (credentials: WalmartApiCredentials): DefaultParams => {
	const { accessToken, clientId, clientSecret, serviceName, consumerChannelType } = credentials;

	return {
		...defaultParams,
		authorization: 'Basic ' + Buffer.from(clientId + ':' + clientSecret).toString('base64'),
		wMSECACCESSTOKEN: accessToken?.token,
		wMQOSCORRELATIONID: uuidv4(),
		wMSVCNAME: serviceName ? serviceName : '@whitebox-co/walmart-marketplace-api',
		wMCONSUMERCHANNELTYPE: consumerChannelType,
	};
};

/**
 * Uses the clientId and clientSecret to get an access token from Walmart's Token API.
 *
 * Checks for cached credentials and against Walmart's tokenDetail endpoint to see if
 * the found cached token is valid.
 *
 * @param {WalmartApiCredentials} credentials credentials without authorized token.
 * @returns {Promise<WalmartApiCredentials>} cached or new credentials.
 */
const authorize = async (credentials: WalmartApiCredentials): Promise<WalmartApiCredentials> => {
	const { clientId } = credentials;
	const authApi = new AuthenticationApi();

	// lets first check if credentials are cached and make sure the expiration has not been hit.
	let cachedCredentials: WalmartApiCredentials = credentialsCache[clientId];
	const isValid = credentials && credentials.accessToken && new Date() < credentials.accessToken.expiration;

	// Even though the cached credentials are valid lets double check with walmart
	// to make sure the token is still active.
	let tokenDetailResponse: AxiosResponse<InlineResponse200>;
	if (isValid) {
		const defaultParams = getDefaultParams(cachedCredentials);
		tokenDetailResponse = await authApi.getTokenDetail(defaultParams);
	}

	// get new token if cached credentials were invalid or walmart tell us it's not valid.
	if (!isValid || !tokenDetailResponse?.data?.is_valid) {
		const defaultParams = getDefaultParams(credentials);
		const tokenResponse = await authApi.tokenAPI({
			...defaultParams,
			grantType: 'client_credentials',
		});

		if (tokenResponse.status !== 200) {
			throw new Error(`Walmart Marketplace API Authorization failed for clientId ${clientId}`);
		}

		// TODO: remove when the auto generated interface type is correct.
		const tokenData = tokenResponse as any;

		cachedCredentials = {
			...credentials,
			accessToken: tokenData && {
				token: tokenData.data?.access_token,
				expiration: tokenData.data?.expires_in,
				type: tokenData.data?.token_type,
			},
		};
	}

	// cache credentials.
	credentialsCache[clientId] = cachedCredentials;

	// return cached or new credentials
	return cachedCredentials;
};

/**
 * Authorizes against the Walmart token endpoint and returns a configured Configuration object.
 *
 * This is the main object passed in to all api's and must have a valid token.
 *
 * @example
 * import marketplaceApi, {InventoryApi} from '@whitebox-co/walmart-marketplace-api';
 *
 * const credentials: WalmartApiCredentials = {clientID: 'abcd', clientSecret: 'efg', consumerChannelType: 'channelId'};
 * const defaultParams = marketplaceApi.getDefaultParams(credentials);
 * const authorizedCredentials = marketplaceApi.getAuthorizedConfiguration(credentials);
 * const inventoryApi = new InventoryApi(authorizedCredentials);
 * const inventory = inventoryApi.getInventory({...defaultParams, sku: 'abcd'})
 *
 * @param {WalmartApiCredentials} credentials input params, some are optional.
 * @returns {Promise<Configuration>} A Configuration object with an authorized and valid access_token.
 */
const getAuthorizedConfiguration = async (credentials: WalmartApiCredentials): Promise<Configuration> => {
	const authorizedCredentials = await authorize(credentials);

	return new Configuration({
		accessToken: authorizedCredentials.accessToken.token,
	});
};

/**
 * Generates a fully instantiated and configured Walmart Marketplace Api.
 *
 * @example
 * import marketplaceApi, {InventoryApi} from '@whitebox-co/walmart-marketplace-api';
 *
 * const credentials: WalmartApiCredentials = {clientID: 'abcd', clientSecret: 'efg', consumerChannelType: 'channelId'};
 * const defaultParams = marketplaceApi.getDefaultParams(credentials);
 * const inventoryApi = marketplaceApi.getConfiguredApi(InventoryApi, credentials);
 * const inventory = inventoryApi.getInventory({...defaultParams, sku: 'abcd'})
 *
 * @param {T} Api WalmartMarketplaceApi
 * - Should be one of the many Apis from the './api' exports.
 * - This should be the Class itself and not an instance.
 *
 * @param {WalmartApiCredentials} credentials input params, some are optional.
 *
 * @returns {Promise<T>} A fully instantiated Api from the './api' exports.
 */
const getConfiguredApi = async <T extends WalmartMarketplaceApi>(
	Api: new (config: Configuration) => T,
	credentials: WalmartApiCredentials
): Promise<T> => {
	const authorizedConfiguration = await getAuthorizedConfiguration(credentials);
	const api = new Api(authorizedConfiguration);

	// run an apiInterceptor in order to fill in defaultParams necessary for each call.
	return apiInterceptor(api, (fnName: string, fnArgs: any) => {
		const defaultParams = getDefaultParams(credentialsCache[credentials.clientId]);

		// apply default params to first arg which is always a request object.
		fnArgs[0] = { ...fnArgs[0], ...defaultParams };

		// run function with args.
		api[fnName](...fnArgs);
	});
};

export * from './apis';
export * from './apis/configuration';
export * from './constants';

export default {
	getConfiguredApi,
};
