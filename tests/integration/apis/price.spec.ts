import * as env from '../../environment';
import walmartApi, { PricesApi, defaultParams } from '../../../src/index';

describe('price', () => {
	let pricesApi: PricesApi;

	beforeAll(async () => {
		pricesApi = await walmartApi.getConfiguredApi(PricesApi, {
			clientId: env.CLIENT_ID,
			clientSecret: env.CLIENT_SECRET,
			consumerChannelType: env.CONSUMER_CHANNEL_TYPE,
		});
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
});
