import * as env from '../../environment';
import walmartApi, { OnRequestReportApi, defaultParams } from '../../../src/index';

describe('onrequestreports', () => {
	let onRequestReportApi: OnRequestReportApi;

	beforeAll(async () => {
		onRequestReportApi = await walmartApi.getConfiguredApi(OnRequestReportApi, {
			clientId: env.CLIENT_ID,
			clientSecret: env.CLIENT_SECRET,
			consumerChannelType: env.CONSUMER_CHANNEL_TYPE,
		});
	});

	describe('#downloadReport', () => {});

	describe('#generateReport', () => {});

	describe('#getRequestsStatus', () => {});

	describe('#getSingleRequestStatus', () => {});
});
