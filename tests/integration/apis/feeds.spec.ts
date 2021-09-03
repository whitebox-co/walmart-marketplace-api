import * as env from '../../environment';
import walmartApi, { FeedsApi, defaultParams } from '../../../src/index';

describe('feeds', () => {
	let feedsApi: FeedsApi;

	beforeAll(async () => {
		feedsApi = await walmartApi.getConfiguredApi(FeedsApi, {
			clientId: env.CLIENT_ID,
			clientSecret: env.CLIENT_SECRET,
			consumerChannelType: env.CONSUMER_CHANNEL_TYPE,
		});
	});

	describe('#getAllFeedStatuses', () => {
		it('should successfully return a list of all feed statuses', async () => {
			const feedStatuses = await feedsApi.getAllFeedStatuses(defaultParams);

			expect(feedStatuses).toBeDefined();
			expect(feedStatuses.data).toBeDefined();
			expect(feedStatuses.data.errors).toBeUndefined();
			expect(feedStatuses.data.results).toBeDefined();
			expect(feedStatuses.data.totalResults).toBeDefined();
			expect(feedStatuses.data.totalResults).toBeGreaterThanOrEqual(0);

			// TODO: Why is the API different than the expected results from the generated model?
			// results should be an array not an object with feed.
			const results = feedStatuses.data.results as any;

			expect(results.feed).toBeDefined();
			expect(results.feed.length).toBeGreaterThanOrEqual(0);
		});
	});

	describe('#getFeedItemStatus', () => {
		it('should successfully return a a feed item', async () => {
			const feedStatuses = await feedsApi.getAllFeedStatuses(defaultParams);

			expect(feedStatuses).toBeDefined();
			expect(feedStatuses.data).toBeDefined();
			expect(feedStatuses.data.errors).toBeUndefined();
			expect(feedStatuses.data.results).toBeDefined();
			// TODO: Why is the API different than the expected results from the generated model?
			// results should be an array not an object with feed.
			const results = feedStatuses.data.results as any;

			expect(results.feed).toBeDefined();
			expect(results.feed.length).toBeGreaterThanOrEqual(1);

			const feedStatus = await feedsApi.getFeedItemStatus({
				...defaultParams,
				feedId: results.feed[0].feedId,
			});

			expect(feedStatus).toBeDefined();
			expect(feedStatus.data).toBeDefined();
			expect(feedStatus.data).not.toStrictEqual(results.feed[0]);
		});
	});
});
