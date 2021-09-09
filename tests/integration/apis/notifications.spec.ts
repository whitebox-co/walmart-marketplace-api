import * as env from '../../environment';
import walmartApi, { NotificationsApi, defaultParams } from '../../../src/index';

describe('notifications', () => {
	let notificationsApi: NotificationsApi;

	beforeAll(async () => {
		notificationsApi = await walmartApi.getConfiguredApi(NotificationsApi, {
			clientId: env.CLIENT_ID,
			clientSecret: env.CLIENT_SECRET,
			consumerChannelType: env.CONSUMER_CHANNEL_TYPE,
		});
	});

	it('should instantiate the api', () => {
		expect(defaultParams).toBeDefined();
		expect(notificationsApi).toBeDefined();
	});

	describe('#createSubscription', () => {
		// TODO: Implement ME!!
	});

	describe('#deleteSubscription', () => {
		// TODO: Implement ME!!
	});

	describe('#getAllSubscriptions', () => {
		// TODO: Implement ME!!
	});

	describe('#getEventTypes', () => {
		// TODO: Implement ME!!
	});

	describe('#testNotification', () => {
		// TODO: Implement ME!!
	});

	describe('#updateSubscription', () => {
		// TODO: Implement ME!!
	});
});
