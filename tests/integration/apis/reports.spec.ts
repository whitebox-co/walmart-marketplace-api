import * as env from '../../environment';
import walmartApi, { ReportsApi, defaultParams } from '../../../src/index';

describe('reports', () => {
	let reportsApi: ReportsApi;

	beforeAll(async () => {
		reportsApi = await walmartApi.getConfiguredApi(ReportsApi, {
			clientId: env.CLIENT_ID,
			clientSecret: env.CLIENT_SECRET,
			consumerChannelType: env.CONSUMER_CHANNEL_TYPE,
		});
	});

	describe('#getAvailableReconReportDates', () => {});

	describe('#getItemReport', () => {});

	describe('#getReconReport', () => {});
});
