import * as env from '../../environment';
import walmartApi, { PromotionsApi, defaultParams } from '../../../src/index';

describe('promotion', () => {
	let promotionsApi: PromotionsApi;

	beforeAll(async () => {
		promotionsApi = await walmartApi.getConfiguredApi(PromotionsApi, {
			clientId: env.CLIENT_ID,
			clientSecret: env.CLIENT_SECRET,
			consumerChannelType: env.CONSUMER_CHANNEL_TYPE,
		});
	});

	it('should instantiate the api', () => {
		expect(defaultParams).toBeDefined();
		expect(promotionsApi).toBeDefined();
	});

	describe('#getPromotionalPrices', () => {
		// TODO: Implement ME!!
	});

	describe('#updateBulkPromotionalPrice', () => {
		// TODO: Implement ME!!
	});

	describe('#updatePromotionalPrices', () => {
		// TODO: Implement ME!!
	});
});
