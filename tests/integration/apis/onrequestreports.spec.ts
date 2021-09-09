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

	it('should instantiate the api', () => {
		expect(defaultParams).toBeDefined();
		expect(onRequestReportApi).toBeDefined();
	});

	describe('#downloadReport', () => {
		// TODO: Implement ME!!
	});

	describe('#generateReport', () => {
		// TODO: Implement ME!!
	});

	describe('#getRequestsStatus', () => {
		// TODO: Implement ME!!
	});

	describe('#getSingleRequestStatus', () => {
		// TODO: Implement ME!!
	});
});
