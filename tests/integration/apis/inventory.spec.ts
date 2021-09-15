import * as env from '../../environment';
import walmartApi, { InventoryApi, defaultParams } from '../../../src/index';
import { addInterceptor, removeInterceptor } from '../../../utils/payload-interceptors';

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

	describe('solution-provider-use-cases', () => {
		// Scenario 1 - Bulk Inventory Update - Update inventory in bulk - minimum of 10 items in a single feed
		it('should pass Scenario 1', () => {
			// TODO: Implement ME!!

			expect(true).toEqual(false);
		});
	});
});
