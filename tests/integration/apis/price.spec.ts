import * as env from '../../environment';
import walmartApi, { PricesApi, defaultParams } from '../../../src/index';

describe('price', () => {
	let pricesApi: PricesApi;

	beforeAll(async () => {
		pricesApi = await walmartApi.getConfiguredApi(PricesApi, {
			clientId: env.CLIENT_ID,
			clientSecret: env.CLIENT_SECRET,
			consumerChannelType: env.CONSUMER_CHANNEL_TYPE,
		});
	});

	describe('#optCapProgramInPrice', () => {});

	describe('#priceBulkUploads', () => {});

	describe('#updatePrice', () => {});
});
