import * as env from '../../environment';
import walmartApi, { PricesApi, defaultParams } from '../../../src/index';
import { addInterceptor, removeInterceptor } from '../../../utils/payload-interceptors';

describe('price', () => {
	let interceptor: any;
	let pricesApi: PricesApi;

	beforeAll(async () => {
		pricesApi = await walmartApi.getConfiguredApi(PricesApi, {
			clientId: env.CLIENT_ID,
			clientSecret: env.CLIENT_SECRET,
			consumerChannelType: env.CONSUMER_CHANNEL_TYPE,
		});
	});

	beforeEach(() => {
		const testName = expect.getState().currentTestName;
		interceptor = addInterceptor(testName);
	});

	afterEach(() => {
		removeInterceptor(interceptor);
	});

	it('should instantiate the api', () => {
		expect(defaultParams).toBeDefined();
		expect(pricesApi).toBeDefined();
	});

	describe('#optCapProgramInPrice', () => {
		// TODO: Implement ME!!
	});

	describe('#priceBulkUploads', () => {
		// TODO: Implement ME!!
	});

	describe('#updatePrice', () => {
		// TODO: Implement ME!!
	});

	describe('solution-provider-use-cases', () => {
		// Scenario 1 - Bulk Update price - Update price in bulk - minimum of 10 items in a single feed
		it('should pass Scenario 1', () => {
			// TODO: Implement ME!!

			expect(true).toEqual(false);
		});
	});
});
