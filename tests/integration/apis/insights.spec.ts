import * as env from '../../environment';
import walmartApi, { InsightApi, defaultParams } from '../../../src/index';

describe('insights', () => {
	let insightApi: InsightApi;

	beforeAll(async () => {
		insightApi = await walmartApi.getConfiguredApi(InsightApi, {
			clientId: env.CLIENT_ID,
			clientSecret: env.CLIENT_SECRET,
			consumerChannelType: env.CONSUMER_CHANNEL_TYPE,
		});
	});

	it('should instantiate the api', () => {
		expect(defaultParams).toBeDefined();
		expect(insightApi).toBeDefined();
	});

	describe('#getCategoriesList', () => {
		// TODO: Implement ME!!
	});

	describe('#getListingQualityScore', () => {
		// TODO: Implement ME!!
	});

	describe('#getTrendingResult', () => {
		// TODO: Implement ME!!
	});

	describe('#getUnpublishedItemCount', () => {
		// TODO: Implement ME!!
	});

	describe('#getUnpublishedItems', () => {
		// TODO: Implement ME!!
	});

	describe('#itemsDetailsForListing', () => {
		// TODO: Implement ME!!
	});
});
