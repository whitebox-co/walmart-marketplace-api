import * as env from '../../environment';
import walmartApi, { UtilitiesApi, defaultParams } from '../../../src/index';

describe('utilities', () => {
	let utilitiesApi: UtilitiesApi;

	beforeAll(async () => {
		utilitiesApi = await walmartApi.getConfiguredApi(UtilitiesApi, {
			clientId: env.CLIENT_ID,
			clientSecret: env.CLIENT_SECRET,
			consumerChannelType: env.CONSUMER_CHANNEL_TYPE,
		});
	});

	it('should instantiate the api', () => {
		expect(defaultParams).toBeDefined();
		expect(utilitiesApi).toBeDefined();
	});

	describe('#getCategories', () => {
		// TODO: Implement ME!!
	});

	describe('#getDepartmentList', () => {
		// TODO: Implement ME!!
	});

	describe('#getTaxonomyResponse', () => {
		// TODO: Implement ME!!
	});
});
