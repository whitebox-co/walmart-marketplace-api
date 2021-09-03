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

	describe('#cancelShipment', () => {});

	describe('#convertItemForWfs', () => {});

	describe('#createInboundShipmentLabel', () => {});

	describe('#createShipment', () => {});

	describe('#getInboundOrderErrors', () => {});

	describe('#getInboundShipmentItems', () => {});

	describe('#getInboundShipments', () => {});

	describe('#updateShipmentQuantity', () => {});

	describe('#updateShipmentTrackingDetails', () => {});
});
