import * as env from '../../environment';
import walmartApi, { PricesApi, defaultParams } from '../../../src/index';
import { addInterceptors, removeInterceptors } from '../../../utils/payload-interceptors';

describe('price', () => {
	let interceptors: any;
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
		interceptors = Object.values(addInterceptors(testName));
	});

	afterEach(() => {
		removeInterceptors(interceptors);
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
