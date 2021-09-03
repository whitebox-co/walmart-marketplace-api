import * as env from '../../environment';
import walmartApi, { InventoryApi, defaultParams } from '../../../src/index';

describe('inventory', () => {
	let inventoryApi: InventoryApi;

	beforeAll(async () => {
		inventoryApi = await walmartApi.getConfiguredApi(InventoryApi, {
			clientId: env.CLIENT_ID,
			clientSecret: env.CLIENT_SECRET,
			consumerChannelType: env.CONSUMER_CHANNEL_TYPE,
		});
	});

	describe('#getInventory', () => {});

	describe('#getMultiNodeInventoryForAllSkuAndAllShipNodes', () => {});

	describe('#getMultiNodeInventoryForSkuAndAllShipnodes', () => {});

	describe('#getWFSInventory', () => {});

	describe('#updateBulkInventory', () => {});

	describe('#updateInventoryForAnItem', () => {});

	describe('#updateMultiNodeInventory', () => {});
});
