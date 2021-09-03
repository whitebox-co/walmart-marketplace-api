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

	describe('#getCategoriesList', () => {});

	describe('#getListingQualityScore', () => {});

	describe('#getTrendingResult', () => {});

	describe('#getUnpublishedItemCount', () => {});

	describe('#getUnpublishedItems', () => {});

	describe('#itemsDetailsForListing', () => {});
});
