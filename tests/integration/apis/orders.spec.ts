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

	it('should instantiate the api', () => {
		expect(defaultParams).toBeDefined();
		expect(ordersApi).toBeDefined();
	});

	describe('#acknowledgeOrders', () => {
		// TODO: Implement ME!!
	});

	describe('#cancelOrderLines', () => {
		// TODO: Implement ME!!
	});

	describe('#getAllOrders', () => {
		// TODO: Implement ME!!
	});

	describe('#getAllReleasedOrders', () => {
		// TODO: Implement ME!!
	});

	describe('#getAnOrder', () => {
		// TODO: Implement ME!!
	});

	describe('#refundOrderLines', () => {
		// TODO: Implement ME!!
	});

	describe('#shippingUpdates', () => {
		// TODO: Implement ME!!
	});
});
