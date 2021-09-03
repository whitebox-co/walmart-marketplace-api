import * as env from '../../environment';
import walmartApi, { ReturnsRefundsApi, defaultParams } from '../../../src/index';

describe('returns', () => {
	let returnsRefundsApi: ReturnsRefundsApi;

	beforeAll(async () => {
		returnsRefundsApi = await walmartApi.getConfiguredApi(ReturnsRefundsApi, {
			clientId: env.CLIENT_ID,
			clientSecret: env.CLIENT_SECRET,
			consumerChannelType: env.CONSUMER_CHANNEL_TYPE,
		});
	});

	describe('#bulkItemOverrideFeed', () => {});

	describe('#getReturns', () => {});

	describe('#issueRefund', () => {});
});
