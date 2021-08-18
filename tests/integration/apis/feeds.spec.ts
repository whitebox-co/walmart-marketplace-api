import * as env from '../../environment';
import { Configuration } from '../../../src/apis/configuration';
import { FeedsApi, FeedsApiFactory } from '../../../src/apis/feeds';
import { AuthenticationApi } from '../../../src/apis/auth';
import { v4 as uuidv4 } from 'uuid';

const authorization = 'Basic ' + Buffer.from(env.CLIENT_ID + ':' + env.CLIENT_SECRET).toString('base64');
const wMSVCNAME = '@whitebox-co/walmart-marketplace-api';
const wMCONSUMERCHANNELTYPE = env.CONSUMER_CHANNEL_TYPE;

describe('feeds', () => {
	let feedsConfiguration: Configuration;
	let accessToken: string;

	beforeAll(async () => {
		const configuration = new Configuration();
		const authApi = new AuthenticationApi(configuration);

		const tokenResponse = await authApi.tokenAPI({
			authorization,
			wMSVCNAME,
			wMQOSCORRELATIONID: uuidv4(),
			grantType: 'client_credentials',
			wMCONSUMERCHANNELTYPE,
		});

		const tokenData = tokenResponse as any;

		accessToken = tokenData.data.access_token;
		feedsConfiguration = new Configuration({ accessToken });
	});

	describe(`${FeedsApi.name}`, () => {
		let feedsApi: FeedsApi;

		beforeAll(() => {
			feedsApi = new FeedsApi(feedsConfiguration);
		});

		it('#getAllFeedStatuses', async () => {
			const feedStatuses = await feedsApi.getAllFeedStatuses({
				authorization,
				wMSECACCESSTOKEN: accessToken,
				wMQOSCORRELATIONID: uuidv4(),
				wMSVCNAME,
				wMCONSUMERCHANNELTYPE,
			});

			expect(feedStatuses).toBeDefined();
			expect(feedStatuses.data).toBeDefined();
			expect(feedStatuses.data.errors).toBeUndefined();
			expect(feedStatuses.data.results).toBeDefined();
			expect(feedStatuses.data.totalResults).toBeDefined();
			expect(feedStatuses.data.totalResults).toBeGreaterThanOrEqual(0);

			// TODO: Why is the API different than the expected results?
			// results should be an array not an object with feed.
			const results = feedStatuses.data.results as any;

			expect(results.feed).toBeDefined();
			expect(results.feed.length).toBeGreaterThanOrEqual(0);
		});

		it('#getFeedItemStatus', async () => {
			const feedStatuses = await feedsApi.getAllFeedStatuses({
				authorization,
				wMSECACCESSTOKEN: accessToken,
				wMQOSCORRELATIONID: uuidv4(),
				wMSVCNAME,
				wMCONSUMERCHANNELTYPE,
			});

			expect(feedStatuses).toBeDefined();
			expect(feedStatuses.data).toBeDefined();
			expect(feedStatuses.data.errors).toBeUndefined();
			expect(feedStatuses.data.results).toBeDefined();
			// TODO: Why is the API different than the expected results?
			// results should be an array not an object with feed.
			const results = feedStatuses.data.results as any;

			expect(results.feed).toBeDefined();
			expect(results.feed.length).toBeGreaterThanOrEqual(1);

			const feedStatus = await feedsApi.getFeedItemStatus({
				feedId: results.feed[0].feedId,
				authorization,
				wMSECACCESSTOKEN: accessToken,
				wMQOSCORRELATIONID: uuidv4(),
				wMSVCNAME,
				wMCONSUMERCHANNELTYPE,
			});

			expect(feedStatus).toBeDefined();
			expect(feedStatus.data).toBeDefined();
			expect(feedStatus.data).not.toStrictEqual(results.feed[0]);
		});
	});

	describe(`${FeedsApiFactory.name}`, () => {
		let feedsApi: { getAllFeedStatuses: any; getFeedItemStatus: any };

		beforeAll(() => {
			feedsApi = FeedsApiFactory(feedsConfiguration);
		});

		it('#getAllFeedStatuses', async () => {
			const feedStatuses = await feedsApi.getAllFeedStatuses(
				authorization,
				accessToken,
				uuidv4(),
				wMSVCNAME,
				undefined,
				undefined,
				undefined,
				wMCONSUMERCHANNELTYPE
			);

			expect(feedStatuses).toBeDefined();
			expect(feedStatuses.data).toBeDefined();
			expect(feedStatuses.data.errors).toBeUndefined();
			expect(feedStatuses.data.results).toBeDefined();
			expect(feedStatuses.data.totalResults).toBeDefined();
			expect(feedStatuses.data.totalResults).toBeGreaterThanOrEqual(0);

			// TODO: Why is the API different than the expected results?
			// results should be an array not an object with feed.
			const results = feedStatuses.data.results as any;

			expect(results.feed).toBeDefined();
			expect(results.feed.length).toBeGreaterThanOrEqual(0);
		});

		it('#getFeedItemStatus', async () => {
			const feedStatuses = await feedsApi.getAllFeedStatuses(
				authorization,
				accessToken,
				uuidv4(),
				wMSVCNAME,
				undefined,
				undefined,
				undefined,
				wMCONSUMERCHANNELTYPE
			);

			expect(feedStatuses).toBeDefined();
			expect(feedStatuses.data).toBeDefined();
			expect(feedStatuses.data.errors).toBeUndefined();
			expect(feedStatuses.data.results).toBeDefined();
			// TODO: Why is the API different than the expected results?
			// results should be an array not an object with feed.
			const results = feedStatuses.data.results as any;

			expect(results.feed).toBeDefined();
			expect(results.feed.length).toBeGreaterThanOrEqual(1);

			const feedStatus = await feedsApi.getFeedItemStatus(
				results.feed[0].feedId,
				authorization,
				accessToken,
				uuidv4(),
				wMSVCNAME,
				undefined,
				undefined,
				undefined,
				wMCONSUMERCHANNELTYPE
			);

			expect(feedStatus).toBeDefined();
			expect(feedStatus.data).toBeDefined();
			expect(feedStatus.data).not.toStrictEqual(results.feed[0]);
		});
	});
});
