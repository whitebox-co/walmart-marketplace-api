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

	describe('#getLagTime', () => {});

	describe('#updateLagTimeBulk', () => {});
});
