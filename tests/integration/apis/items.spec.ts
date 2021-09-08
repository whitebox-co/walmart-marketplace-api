import * as env from '../../environment';
import walmartApi, { ItemsApi, defaultParams } from '../../../src/index';

describe('items', () => {
	let itemsApi: ItemsApi;

	beforeAll(async () => {
		itemsApi = await walmartApi.getConfiguredApi(ItemsApi, {
			clientId: env.CLIENT_ID,
			clientSecret: env.CLIENT_SECRET,
			consumerChannelType: env.CONSUMER_CHANNEL_TYPE,
		});
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
});
