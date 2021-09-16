import { v4 as uuidv4 } from 'uuid';
import * as env from '../../environment';
import { Configuration } from '../../../src/index';
import { AuthenticationApi } from '../../../src/apis/auth';
import { addInterceptor, removeInterceptor } from '../../../utils/payload-interceptors';

describe(`${AuthenticationApi.name}`, () => {
	let interceptor: any;
	let authorization: string;
	let authApi: AuthenticationApi;

	beforeAll(() => {
		authorization = 'Basic ' + Buffer.from(env.CLIENT_ID + ':' + env.CLIENT_SECRET).toString('base64');

		const configuration = new Configuration();
		authApi = new AuthenticationApi(configuration);
	});

	beforeEach(() => {
		const testName = expect.getState().currentTestName;
		interceptor = addInterceptor(testName);
	});

	afterEach(() => {
		removeInterceptor(interceptor);
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

	describe('solution-provider-use-cases', () => {
		// Scenario 1 - Enter Credentials - Application should error on the same page when invalid client id is provided
		it('should pass Scenario 1', async () => {
			const authorization = 'Basic ' + Buffer.from('LetMeIn!' + ':' + env.CLIENT_SECRET).toString('base64');

			await expect(
				authApi.tokenAPI({
					authorization,
					wMQOSCORRELATIONID: uuidv4(),
					wMSVCNAME: '@whitebox-co/walmart-marketplace-api',
					grantType: 'client_credentials',
					wMCONSUMERCHANNELTYPE: env.CONSUMER_CHANNEL_TYPE,
				})
			).rejects.toThrow();
		});
	});
});
