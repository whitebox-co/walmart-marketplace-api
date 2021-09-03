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

	describe('#getAllItems', () => {});

	describe('#getAnItem', () => {});

	describe('#getCatalogSearch', () => {});

	describe('#getCountByStatus', () => {});

	describe('#getItemAssociations', () => {});

	describe('#getSearchResult', () => {});

	describe('#getTaxonomyResponse', () => {});

	describe('#itemBulkUploads', () => {});

	describe('#retireAnItem', () => {});
});
