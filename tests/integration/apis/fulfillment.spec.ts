import * as env from '../../environment';
import walmartApi, { FulfillmentApi, defaultParams } from '../../../src/index';

describe('fulfillment', () => {
	let fulfillmentApi: FulfillmentApi;

	beforeAll(async () => {
		fulfillmentApi = await walmartApi.getConfiguredApi(FulfillmentApi, {
			clientId: env.CLIENT_ID,
			clientSecret: env.CLIENT_SECRET,
			consumerChannelType: env.CONSUMER_CHANNEL_TYPE,
		});
	});

	it('should instantiate the api', () => {
		expect(defaultParams).toBeDefined();
		expect(fulfillmentApi).toBeDefined();
	});

	describe('#cancelShipment', () => {
		// TODO: Implement ME!!
	});

	describe('#convertItemForWfs', () => {
		// TODO: Implement ME!!
	});

	describe('#createInboundShipmentLabel', () => {
		// TODO: Implement ME!!
	});

	describe('#createShipment', () => {
		// TODO: Implement ME!!
	});

	describe('#getInboundOrderErrors', () => {
		// TODO: Implement ME!!
	});

	describe('#getInboundShipmentItems', () => {
		// TODO: Implement ME!!
	});

	describe('#getInboundShipments', () => {
		// TODO: Implement ME!!
	});

	describe('#updateShipmentQuantity', () => {
		// TODO: Implement ME!!
	});

	describe('#updateShipmentTrackingDetails', () => {
		// TODO: Implement ME!!
	});
});
