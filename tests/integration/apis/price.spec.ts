import * as env from '../../environment';
import { WalmartApi, PricesApi, ItemsApi, defaultParams } from '../../../src/index';
import { addInterceptor, removeInterceptor } from '../../../utils/payload-interceptors';

import { PriceFeed } from '../../../src/models/price/v1/priceFeed';

describe(`${PricesApi.name}`, () => {
	let interceptor: any;
	let pricesApi: PricesApi;
	let itemsApi: ItemsApi;

	beforeAll(async () => {
		const walmartApi = new WalmartApi({
			clientId: env.CLIENT_ID,
			clientSecret: env.CLIENT_SECRET,
			consumerChannelType: env.CONSUMER_CHANNEL_TYPE,
		});

		pricesApi = await walmartApi.getConfiguredApi(PricesApi);
		itemsApi = await walmartApi.getConfiguredApi(ItemsApi);
	});

	beforeEach(() => {
		const testName = expect.getState().currentTestName;
		interceptor = addInterceptor(testName);
	});

	afterEach(() => {
		removeInterceptor(interceptor);
	});

	it('should instantiate the api', () => {
		expect(defaultParams).toBeDefined();
		expect(pricesApi).toBeDefined();
	});

	describe('#optCapProgramInPrice', () => {
		// TODO: Implement ME!!
	});

	describe('#priceBulkUploads', () => {
		// TODO: Implement ME!!
	});

	describe('#updatePrice', () => {
		// TODO: Implement ME!!
	});

	describe('solution-provider-use-cases', () => {
		// Scenario 1 - Bulk Update price - Update price in bulk - minimum of 10 items in a single feed
		it('should pass Scenario 1', async () => {
			// get the first 10 inventory elements
			const itemsResponse = await itemsApi.getAllItems({
				...defaultParams,
			});

			// convert items into pricing
			const pricingElements = itemsResponse.data?.ItemResponse?.map((item) => {
				return {
					sku: item.sku,
					pricing: {
						currentPrice: item.price,
					},
				};
			});

			// submit original pricing so that we show we can do it without actually updating any pricing
			const priceFeed: PriceFeed = {
				PriceHeader: {
					version: '1.4',
				},
				Price: pricingElements as any,
			};

			const priceUpdateResponse = await pricesApi.priceBulkUploads({
				...defaultParams,
				feedType: 'price',
				file: Buffer.from(JSON.stringify(priceFeed)),
			});

			// assert inventory feed response
			expect(priceUpdateResponse).toBeDefined();
			expect(priceUpdateResponse.data).toBeDefined();
			expect(priceUpdateResponse.data.errors).toBeUndefined();
			expect(priceUpdateResponse.data.feedId).toBeDefined();
		});
	});
});
