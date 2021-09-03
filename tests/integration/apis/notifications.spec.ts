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

	describe('#createSubscription', () => {});

	describe('#deleteSubscription', () => {});

	describe('#getAllSubscriptions', () => {});

	describe('#getEventTypes', () => {});

	describe('#testNotification', () => {});

	describe('#updateSubscription', () => {});
});
