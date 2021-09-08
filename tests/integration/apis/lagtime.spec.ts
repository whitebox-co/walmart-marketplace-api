import * as env from '../../environment';
import walmartApi, { LagTimeApi, defaultParams } from '../../../src/index';

describe('lagtime', () => {
	let lagTimeApi: LagTimeApi;

	beforeAll(async () => {
		lagTimeApi = await walmartApi.getConfiguredApi(LagTimeApi, {
			clientId: env.CLIENT_ID,
			clientSecret: env.CLIENT_SECRET,
			consumerChannelType: env.CONSUMER_CHANNEL_TYPE,
		});
	});

	it('should instantiate the api', () => {
		expect(defaultParams).toBeDefined();
		expect(lagTimeApi).toBeDefined();
	});

	describe('#getLagTime', () => {
		// TODO: Implement ME!!
	});

	describe('#updateLagTimeBulk', () => {
		// TODO: Implement ME!!
	});
});
