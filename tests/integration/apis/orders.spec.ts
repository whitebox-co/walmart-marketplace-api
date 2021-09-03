import * as env from '../../environment';
import walmartApi, { OrdersApi, defaultParams } from '../../../src/index';

describe('orders', () => {
	let ordersApi: OrdersApi;

	beforeAll(async () => {
		ordersApi = await walmartApi.getConfiguredApi(OrdersApi, {
			clientId: env.CLIENT_ID,
			clientSecret: env.CLIENT_SECRET,
			consumerChannelType: env.CONSUMER_CHANNEL_TYPE,
		});
	});

	describe('#acknowledgeOrders', () => {});

	describe('#cancelOrderLines', () => {});

	describe('#getAllOrders', () => {});

	describe('#getAllReleasedOrders', () => {});

	describe('#getAnOrder', () => {});

	describe('#refundOrderLines', () => {});

	describe('#shippingUpdates', () => {});
});
