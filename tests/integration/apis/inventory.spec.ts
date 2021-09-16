import * as env from '../../environment';
import walmartApi, { InventoryApi, defaultParams } from '../../../src/index';
import { addInterceptor, removeInterceptor } from '../../../utils/payload-interceptors';

import { InventoryFeed } from '../../../src/models/inventory/v1/inventoryFeed';

describe(`${InventoryApi.name}`, () => {
	let interceptor: any;
	let inventoryApi: InventoryApi;

	beforeAll(async () => {
		inventoryApi = await walmartApi.getConfiguredApi(InventoryApi, {
			clientId: env.CLIENT_ID,
			clientSecret: env.CLIENT_SECRET,
			consumerChannelType: env.CONSUMER_CHANNEL_TYPE,
		});
	});

	beforeEach(() => {
		const testName = expect.getState().currentTestName;
		interceptor = Object.values(addInterceptor(testName));
	});

	afterEach(() => {
		removeInterceptor(interceptor);
	});

	it('should instantiate the api', () => {
		expect(defaultParams).toBeDefined();
		expect(inventoryApi).toBeDefined();
	});

	describe('#getInventory', () => {
		// TODO: Implement ME!!
	});

	describe('#getMultiNodeInventoryForAllSkuAndAllShipNodes', () => {
		it('should return a listing of inventory elements', async () => {
			const inventoriesResponse = await inventoryApi.getMultiNodeInventoryForAllSkuAndAllShipNodes({
				...defaultParams,
			});

			expect(inventoriesResponse.data).toBeDefined();
			expect(inventoriesResponse.data.elements).toBeDefined();
			expect(inventoriesResponse.data.elements).toBeInstanceOf(Object);
			expect(inventoriesResponse.data.elements.inventories).toBeDefined();
			expect(inventoriesResponse.data.elements.inventories).toBeInstanceOf(Array);
		});
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

	describe('solution-provider-use-cases', () => {
		// Scenario 1 - Bulk Inventory Update - Update inventory in bulk - minimum of 10 items in a single feed
		it('should pass Scenario 1', async () => {
			// get the first 10 inventory elements
			const inventoriesResponse = await inventoryApi.getMultiNodeInventoryForAllSkuAndAllShipNodes({
				...defaultParams,
			});

			// get individual inventory items
			const inventoryPromises = inventoriesResponse.data?.elements?.inventories.map((element) => {
				return inventoryApi.getInventory({
					...defaultParams,
					sku: element.sku,
				});
			});

			const promises = await Promise.allSettled(inventoryPromises);

			// get original inventory element and increase by 1.
			const inventoryElements = [];
			promises.forEach((result: any) => {
				if (result.status === 'fulfilled') {
					inventoryElements.push(result.value.data);
				}
			});

			// submit original quantities inventory feed (so that we show we can do it without actually updating anything)
			const inventoryFeed: InventoryFeed = {
				InventoryHeader: {
					version: '1.4',
				},
				Inventory: inventoryElements,
			};

			const inventoryUpdateResponse = await inventoryApi.updateBulkInventory({
				...defaultParams,
				feedType: 'inventory',
				file: Buffer.from(JSON.stringify(inventoryFeed)),
			});

			// assert inventory feed response
			expect(inventoryUpdateResponse).toBeDefined();
			expect(inventoryUpdateResponse.data).toBeDefined();
			expect(inventoryUpdateResponse.data.errors).toBeUndefined();
			expect(inventoryUpdateResponse.data.feedId).toBeDefined();
		}, 20000);
	});
});
