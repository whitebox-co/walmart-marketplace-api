import * as env from '../../environment';
import walmartApi, { ItemsApi, defaultParams } from '../../../src/index';
import { addInterceptor, removeInterceptor } from '../../../utils/payload-interceptors';

import {
	MpItem43,
	MPItem,
	Locale,
	ProcessMode,
	SellingChannel,
	SubCategory,
	Subset,
	SpecVersion,
	ProductIDType,
} from '../../../src/models/v4/mpItem4.3';

describe(`${ItemsApi.name}`, () => {
	let interceptor: any;
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
		interceptor = addInterceptor(testName);
	});

	afterEach(() => {
		removeInterceptor(interceptor);
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
		// Scenario 1a - Create Items - Add new items in at least 2 categories
		it('should pass Scenario 1a', async () => {
			// Create and Submit a piece of Baby Clothing
			const hoodie: MPItem = {
				Orderable: {
					brand: 'Whitebox',
					price: 10000000000000,
					productName: `Whitebox Baby Hoodie`,
					productIdentifiers: {
						productIdType: ProductIDType.Upc,
						productId: `wb-abcd`,
					},
					ShippingWeight: 10000,
					sku: `wb-abcd-1234`,
				},
				Visible: {
					'Baby Clothing': {
						shortDescription: `Whitebox Baby Hoodie`,
						mainImageUrl:
							'https://i5-qa.walmartimages.com/asr/5a3e719f-3bca-4281-8333-030c5a2756bf.62d73c2f61f929ef580fe375e3597c13.jpeg',
					},
				},
			};

			const hoodieFeed: MpItem43 = {
				MPItemFeedHeader: {
					locale: Locale.En,
					processMode: ProcessMode.Merge,
					sellingChannel: SellingChannel.Marketplace,
					subCategory: SubCategory.BabyFood,
					subset: Subset.External,
					version: SpecVersion.The13,
				},
				MPItem: [hoodie],
			};

			const hoodieUploadResponse = await itemsApi.itemBulkUploads({
				...defaultParams,
				feedType: 'MP_ITEM',
				file: Buffer.from(JSON.stringify(hoodieFeed)),
			});

			expect(hoodieUploadResponse).toBeDefined();
			expect(hoodieUploadResponse.data).toBeDefined();
			expect(hoodieUploadResponse.data.errors).toBeNull();
			expect(hoodieUploadResponse.data.feedId).not.toBeUndefined();

			// Create and Submit some baby food
			const babySpinach: MPItem = {
				Orderable: {
					brand: 'Whitebox',
					price: 10000000000000,
					productName: `Whitebox Baby Spinach`,
					productIdentifiers: {
						productIdType: ProductIDType.Upc,
						productId: `wb-ghij`,
					},
					ShippingWeight: 10000,
					sku: `wb-ghij-1234`,
				},
				Visible: {
					'Baby Food': {
						shortDescription: `Whitebox Baby Spinach`,
						mainImageUrl: '',
					},
				},
			};

			const babySpinachFeed: MpItem43 = {
				MPItemFeedHeader: {
					locale: Locale.En,
					processMode: ProcessMode.Merge,
					sellingChannel: SellingChannel.Marketplace,
					subCategory: SubCategory.BabyFood,
					subset: Subset.External,
					version: SpecVersion.The13,
				},
				MPItem: [babySpinach],
			};

			const babySpinachUploadResponse = await itemsApi.itemBulkUploads({
				...defaultParams,
				feedType: 'MP_ITEM',
				file: Buffer.from(JSON.stringify(babySpinachFeed)),
			});

			expect(babySpinachUploadResponse).toBeDefined();
			expect(babySpinachUploadResponse.data).toBeDefined();
			expect(babySpinachUploadResponse.data.errors).toBeNull();
			expect(babySpinachUploadResponse.data.feedId).not.toBeUndefined();
		});

		// Scenario 1b - Create Items - Add minimum of 10 items in a single feed
		it('should pass Scenario 1b', async () => {
			// Create and Submit 10 Items in a single feed
			const hoodies: MPItem[] = [];

			for (let index = 0; index < 10; index++) {
				const hoodie: MPItem = {
					Orderable: {
						brand: 'Whitebox',
						price: 10000000000000,
						productName: `Whitebox Baby Hoodie #${index}`,
						productIdentifiers: {
							productIdType: ProductIDType.Upc,
							productId: `wb-abcd-${index}`,
						},
						ShippingWeight: 10000,
						sku: `wb-abcd-${index}-1234`,
					},
					Visible: {
						'Baby Clothing': {
							shortDescription: `Whitebox Baby Hoodie #${index}`,
							mainImageUrl:
								'https://i5-qa.walmartimages.com/asr/5a3e719f-3bca-4281-8333-030c5a2756bf.62d73c2f61f929ef580fe375e3597c13.jpeg',
						},
					},
				};

				hoodies.push(hoodie);
			}

			const hoodieFeed: MpItem43 = {
				MPItemFeedHeader: {
					locale: Locale.En,
					processMode: ProcessMode.Merge,
					sellingChannel: SellingChannel.Marketplace,
					subCategory: SubCategory.BabyClothing,
					subset: Subset.External,
					version: SpecVersion.The13,
				},
				MPItem: hoodies,
			};

			const hoodieUploadResponse = await itemsApi.itemBulkUploads({
				...defaultParams,
				feedType: 'MP_ITEM',
				file: Buffer.from(JSON.stringify(hoodieFeed)),
			});

			expect(hoodieUploadResponse).toBeDefined();
			expect(hoodieUploadResponse.data).toBeDefined();
			expect(hoodieUploadResponse.data.errors).toBeNull();
			expect(hoodieUploadResponse.data.feedId).not.toBeUndefined();
		});

		// Scenario 9 - Secondary Image - Add items with secondary images
		it('should pass Scenario 9', async () => {
			const hoodie: MPItem = {
				Orderable: {
					brand: 'Google',
					price: 10000000000000,
					productName: `Google Hoodie`,
					productIdentifiers: {
						productIdType: ProductIDType.Upc,
						productId: `wb-google-abcd`,
					},
					ShippingWeight: 10000,
					sku: `wb-google-1234`,
				},
				Visible: {
					Clothing: {
						shortDescription: `Google Hoodie`,
						mainImageUrl: 'https://teesover.com/wp-content/uploads/2020/03/Google-Logo-Hoodie.jpg',
						productSecondaryImageURL: [
							'https://bigboze.com/wp-content/uploads/2018/10/Google-Logo-Hoodie.jpg',
						],
					},
				},
			};

			const hoodieFeed: MpItem43 = {
				MPItemFeedHeader: {
					locale: Locale.En,
					processMode: ProcessMode.Merge,
					sellingChannel: SellingChannel.Marketplace,
					subCategory: SubCategory.ClothingOther,
					subset: Subset.External,
					version: SpecVersion.The13,
				},
				MPItem: [hoodie],
			};

			const hoodieUploadResponse = await itemsApi.itemBulkUploads({
				...defaultParams,
				feedType: 'MP_ITEM',
				file: Buffer.from(JSON.stringify(hoodieFeed)),
			});

			expect(hoodieUploadResponse).toBeDefined();
			expect(hoodieUploadResponse.data).toBeDefined();
			expect(hoodieUploadResponse.data.errors).toBeNull();
			expect(hoodieUploadResponse.data.feedId).not.toBeUndefined();
		});
	});
});
