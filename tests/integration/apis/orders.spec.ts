import * as env from '../../environment';
import walmartApi, { OrdersApi, defaultParams } from '../../../src/index';
import { addInterceptor, removeInterceptor } from '../../../utils/payload-interceptors';

describe('orders', () => {
	let interceptor: any;
	let ordersApi: OrdersApi;

	beforeAll(async () => {
		ordersApi = await walmartApi.getConfiguredApi(OrdersApi, {
			clientId: env.CLIENT_ID,
			clientSecret: env.CLIENT_SECRET,
			consumerChannelType: env.CONSUMER_CHANNEL_TYPE,
		});
	});

	beforeEach(() => {
		const testName = expect.getState().currentTestName;
		interceptor = addInterceptor(testName);
	});

	afterEach(() => {
		removeInterceptor(interceptor);
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

	describe('solution-provider-use-cases', () => {
		// Scenario 1 - Acknowledge - Acknowledge an order
		it('should pass Scenario 1', () => {
			// TODO: Implement ME!!

			expect(true).toEqual(false);
		});

		// Scenario 4 - Ship entire order - Ship an order with multi lines
		it('should pass Scenario 4', () => {
			// TODO: Implement ME!!

			expect(true).toEqual(false);
		});

		// Scenario 5 - Ship order line - Ship one order line at a time in a multi line order
		it('should pass Scenario 5', () => {
			// TODO: Implement ME!!

			expect(true).toEqual(false);
		});
	});
});
