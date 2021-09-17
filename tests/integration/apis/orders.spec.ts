import * as env from '../../environment';
import walmartApi, { OrdersApi, defaultParams } from '../../../src/index';
import { addInterceptor, removeInterceptor } from '../../../utils/payload-interceptors';
import { InlineResponse200ListElementsOrderLinesOrderLineStatusesOrderLineStatusStatusEnum } from '../../../src/apis/orders';
import { getAllRecursively } from '../../../src/util/requestHelpers';

/**
 * Convert order orderLines to shipping order order lines (because of course they are slightly different)
 *
 * @param multiLineOrders
 * @returns
 */
const convertOrderLines = (multiLineOrder) => {
	return multiLineOrder.orderLines.orderLine.map((orderLine) => {
		return {
			lineNumber: orderLine.lineNumber,
			orderLineStatuses: {
				orderLineStatus: orderLine.orderLineStatuses.orderLineStatus.map((orderLineStatus) => {
					const duplicateOrderLineStatus = { ...orderLineStatus };
					duplicateOrderLineStatus.status =
						InlineResponse200ListElementsOrderLinesOrderLineStatusesOrderLineStatusStatusEnum.Shipped;
					delete duplicateOrderLineStatus.cancellationReason;
					return duplicateOrderLineStatus;
				}),
			},
		};
	});
};

describe(`${OrdersApi.name}`, () => {
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
		it('should return a listing of orders', async () => {
			const ordersResponse = await ordersApi.getAllOrders({
				...defaultParams,
				limit: '100',
			});

			expect(ordersResponse).toBeDefined();
			expect(ordersResponse.data).toBeDefined();
			expect(ordersResponse.data.list.errors).toBeUndefined();
			expect(ordersResponse.data.list.elements).toBeDefined();
			expect(ordersResponse.data.list.elements.order).toBeDefined();
			expect(ordersResponse.data.list.elements.order).toBeInstanceOf(Array);
		});

		it('should recursively get all orders', async () => {
			const orders = await getAllRecursively(ordersApi, ordersApi.getAllOrders.name, '100');

			expect(orders).toBeDefined();
			expect(orders.length).toBeGreaterThan(0);
		}, 20000);
	});

	describe('#getAllReleasedOrders', () => {
		// TODO: Implement ME!!
	});

	describe('#getAnOrder', () => {
		it('should retrieve a single order', async () => {
			const ordersResponse = await ordersApi.getAllOrders({
				...defaultParams,
				limit: '1',
			});

			const order = ordersResponse.data.list.elements.order[0];

			const orderResponse = (await ordersApi.getAnOrder({
				...defaultParams,
				purchaseOrderId: order.purchaseOrderId,
			})) as any;

			expect(orderResponse).toBeDefined();
			expect(orderResponse).toBeDefined();
			expect(orderResponse.data).toBeDefined();
			expect(orderResponse.data.order).toBeDefined();
			expect(orderResponse.data.order.purchaseOrderId).toEqual(order.purchaseOrderId);
		});
	});

	describe('#refundOrderLines', () => {
		// TODO: Implement ME!!
	});

	describe('#shippingUpdates', () => {
		// TODO: Implement ME!!
	});

	describe('solution-provider-use-cases', () => {
		// Scenario 1 - Acknowledge - Acknowledge an order
		it('should pass Scenario 1', async () => {
			// get an already Acknowledged order
			const ordersResponse = await ordersApi.getAllOrders({
				...defaultParams,
				limit: '1',
				status: 'Acknowledged',
			});

			expect(ordersResponse.data.list.elements.order.length).toBeGreaterThan(0);

			const order = ordersResponse.data.list.elements.order[0];

			// re acknowledge an order so we comply with request but do not mess up any other orders
			const acknowledgeOrderResponse = await ordersApi.acknowledgeOrders({
				...defaultParams,
				purchaseOrderId: order.purchaseOrderId,
			});

			expect(acknowledgeOrderResponse).toBeDefined();
			expect(acknowledgeOrderResponse.data).toBeDefined();
			expect(acknowledgeOrderResponse.data.order).toBeDefined();
			expect(acknowledgeOrderResponse.data.order.purchaseOrderId).toBeDefined();
			expect(acknowledgeOrderResponse.data.order.purchaseOrderId).toEqual(order.purchaseOrderId);
		});

		// Scenario 4 - Ship entire order - Ship an order with multi lines
		it('should pass Scenario 4', async () => {
			// get an already delivered order
			const ordersResponse = await ordersApi.getAllOrders({
				...defaultParams,
				limit: '100',
				status: 'Delivered',
				shipNodeType: 'SellerFulfilled',
			});

			// find orders with multi lines
			const multiLineOrders = ordersResponse.data.list.elements.order.filter((order) => {
				return order.orderLines?.orderLine?.length > 1;
			});

			expect(multiLineOrders.length).toBeGreaterThan(0);

			// convert order orderLines to shipping order order lines (because of course they are slightly different)
			const shippingOrderOrderLines = convertOrderLines(multiLineOrders[0]);

			// response should throw 400 because this order was already delivered
			const shipOrderResponse = await ordersApi.shippingUpdates({
				...defaultParams,
				purchaseOrderId: multiLineOrders[0]?.purchaseOrderId,
				inlineObject: {
					orderShipment: {
						orderLines: {
							orderLine: shippingOrderOrderLines as any,
						},
					},
				},
			});

			expect(shipOrderResponse).toBeDefined();
			expect(shipOrderResponse.data).toBeDefined();
			expect(shipOrderResponse.data.order).toBeDefined();
			expect(shipOrderResponse.data.order.purchaseOrderId).toBeDefined();
			expect(shipOrderResponse.data.order.purchaseOrderId).toEqual(multiLineOrders[0]?.purchaseOrderId);
		});

		// Scenario 5 - Ship order line - Ship one order line at a time in a multi line order
		it('should pass Scenario 5', async () => {
			// get an already delivered order
			const ordersResponse = await ordersApi.getAllOrders({
				...defaultParams,
				limit: '100',
				status: 'Delivered',
				shipNodeType: 'SellerFulfilled',
			});

			// find orders with multi lines
			const multiLineOrders = ordersResponse.data.list.elements.order.filter((order) => {
				return order.orderLines?.orderLine?.length > 1;
			});

			expect(multiLineOrders.length).toBeGreaterThan(0);

			const shippingOrderOrderLines = convertOrderLines(multiLineOrders[0]);

			// response should throw 400 because this order was already delivered
			const shipOrderResponse = await ordersApi.shippingUpdates({
				...defaultParams,
				purchaseOrderId: multiLineOrders[0]?.purchaseOrderId,
				inlineObject: {
					orderShipment: {
						orderLines: {
							orderLine: [shippingOrderOrderLines[0]] as any,
						},
					},
				},
			});

			expect(shipOrderResponse).toBeDefined();
			expect(shipOrderResponse.data).toBeDefined();
			expect(shipOrderResponse.data.order).toBeDefined();
			expect(shipOrderResponse.data.order.purchaseOrderId).toBeDefined();
			expect(shipOrderResponse.data.order.purchaseOrderId).toEqual(multiLineOrders[0]?.purchaseOrderId);
		});
	});
});
