import * as env from '../../environment';
import { Configuration } from '../../../src/apis/configuration';
import { AuthenticationApi, AuthenticationApiFactory } from '../../../src/apis/auth';
import { v4 as uuidv4 } from 'uuid';

describe('auth', () => {
	describe(`${AuthenticationApi.name}`, () => {
		let authorization: string;
		let authApi: AuthenticationApi;

		beforeAll(() => {
			authorization = 'Basic ' + Buffer.from(env.CLIENT_ID + ':' + env.CLIENT_SECRET).toString('base64');

			const configuration = new Configuration();
			authApi = new AuthenticationApi(configuration);
		});

		describe('#tokenAPI', () => {
			it('should return a valid token if valid credentials are provided', async () => {
				const tokenResponse = await authApi.tokenAPI({
					authorization,
					wMQOSCORRELATIONID: uuidv4(),
					wMSVCNAME: '@whitebox-co/walmart-marketplace-api',
					grantType: 'client_credentials',
					wMCONSUMERCHANNELTYPE: env.CONSUMER_CHANNEL_TYPE,
				});

				expect(tokenResponse).toBeDefined();
				expect(tokenResponse.data).toBeDefined();

				// TODO: figure out why api generation has different schema than what is returned.
				const tokenData = tokenResponse.data as any;

				expect(tokenData.access_token).toBeDefined();
				expect(tokenData.expires_in).toBeDefined();
				expect(tokenData.token_type).toBeDefined();
			});
		});

		describe('#getTokenDetail', () => {
			it('should return information on a valid token given proper credentials', async () => {
				const tokenResponse = await authApi.tokenAPI({
					authorization,
					wMQOSCORRELATIONID: uuidv4(),
					wMSVCNAME: '@whitebox-co/walmart-marketplace-api',
					grantType: 'client_credentials',
					wMCONSUMERCHANNELTYPE: env.CONSUMER_CHANNEL_TYPE,
				});

				expect(tokenResponse).toBeDefined();
				expect(tokenResponse.data).toBeDefined();

				const tokenData = tokenResponse.data as any;

				const tokenDetailResponse = await authApi.getTokenDetail({
					wMSECACCESSTOKEN: tokenData.access_token,
					authorization,
					wMQOSCORRELATIONID: uuidv4(),
					wMSVCNAME: '@whitebox-co/walmart-marketplace-api',
					wMCONSUMERCHANNELTYPE: env.CONSUMER_CHANNEL_TYPE,
				});

				expect(tokenDetailResponse).toBeDefined();
				expect(tokenDetailResponse.data).toBeDefined();

				expect(tokenDetailResponse.data.is_valid).toBeTruthy();
			});
		});
	});

	describe(`${AuthenticationApiFactory.name}`, () => {
		let authorization: string;
		let authApi: { tokenAPI: any; getTokenDetail: any };

		beforeAll(() => {
			authorization = 'Basic ' + Buffer.from(env.CLIENT_ID + ':' + env.CLIENT_SECRET).toString('base64');

			const configuration = new Configuration();
			authApi = AuthenticationApiFactory(configuration);
		});

		describe('#tokenAPI', () => {
			it('should return a valid token if valid credentials are provided', async () => {
				const tokenResponse = await authApi.tokenAPI(
					authorization,
					uuidv4(),
					'@whitebox-co/walmart-marketplace-api',
					'client_credentials',
					env.CONSUMER_CHANNEL_TYPE
				);

				expect(tokenResponse).toBeDefined();
				expect(tokenResponse.data).toBeDefined();

				// TODO: figure out why api generation has different schema than what is returned.
				const tokenData = tokenResponse.data as any;

				expect(tokenData.access_token).toBeDefined();
				expect(tokenData.expires_in).toBeDefined();
				expect(tokenData.token_type).toBeDefined();
			});
		});

		describe('#getTokenDetail', () => {
			it('should return information on a valid token given proper credentials', async () => {
				const tokenResponse = await authApi.tokenAPI(
					authorization,
					uuidv4(),
					'@whitebox-co/walmart-marketplace-api',
					'client_credentials',
					env.CONSUMER_CHANNEL_TYPE
				);

				expect(tokenResponse).toBeDefined();
				expect(tokenResponse.data).toBeDefined();

				const tokenData = tokenResponse.data as any;

				const tokenDetailResponse = await authApi.getTokenDetail(
					tokenData.access_token,
					authorization,
					uuidv4(),
					'@whitebox-co/walmart-marketplace-api',
					env.CONSUMER_CHANNEL_TYPE
				);

				expect(tokenDetailResponse).toBeDefined();
				expect(tokenDetailResponse.data).toBeDefined();

				expect(tokenDetailResponse.data.is_valid).toBeTruthy();
			});
		});
	});
});
