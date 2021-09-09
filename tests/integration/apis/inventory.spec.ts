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

	it('should instantiate the api', () => {
		expect(defaultParams).toBeDefined();
		expect(inventoryApi).toBeDefined();
	});

	describe('#getInventory', () => {
		// TODO: Implement ME!!
	});

	describe('#getMultiNodeInventoryForAllSkuAndAllShipNodes', () => {
		// TODO: Implement ME!!
	});

	describe('#getMultiNodeInventoryForSkuAndAllShipnodes', () => {
		// TODO: Implement ME!!
	});

	describe('#getWFSInventory', () => {
		// TODO: Implement ME!!
	});

	describe('#updateBulkInventory', () => {
		// TODO: Implement ME!!
	});

	describe('#updateInventoryForAnItem', () => {
		// TODO: Implement ME!!
	});

	describe('#updateMultiNodeInventory', () => {
		// TODO: Implement ME!!
	});
});
