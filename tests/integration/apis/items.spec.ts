import * as env from '../../environment';
import walmartApi, { ItemsApi, defaultParams } from '../../../src/index';
import { addInterceptors, removeInterceptors } from '../../../utils/payload-interceptors';

describe('items', () => {
	let interceptors: any;
	let itemsApi: ItemsApi;

	beforeAll(async () => {
		itemsApi = await walmartApi.getConfiguredApi(ItemsApi, {
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
		expect(itemsApi).toBeDefined();
	});

	describe('#getAllItems', () => {
		// TODO: Implement ME!!
	});

	describe('#getAnItem', () => {
		// TODO: Implement ME!!
	});

	describe('#getCatalogSearch', () => {
		// TODO: Implement ME!!
	});

	describe('#getCountByStatus', () => {
		// TODO: Implement ME!!
	});

	describe('#getItemAssociations', () => {
		// TODO: Implement ME!!
	});

	describe('#getSearchResult', () => {
		// TODO: Implement ME!!
	});

	describe('#getTaxonomyResponse', () => {
		// TODO: Implement ME!!
	});

	describe('#itemBulkUploads', () => {
		// TODO: Implement ME!!
	});

	describe('#retireAnItem', () => {
		// TODO: Implement ME!!
	});

	describe('solution-provider-use-cases', () => {
		// Scenario 1 - Create Items - Add new items in at least 2 categories - minimum of 10 items in a single feed
		it('should pass Scenario 1', () => {
			// TODO: Implement ME!!

			expect(true).toEqual(false);
		});

		// Scenario 9 - Secondary Image - Add items with secondary images
		it('should pass Scenario 9', () => {
			// TODO: Implement ME!!

			expect(true).toEqual(false);
		});
	});
});
