import * as env from '../../environment';
import { Configuration } from '../../../src/apis/configuration';
import { FulfillmentApi, FulfillmentApiFactory } from '../../../src/apis/fulfillment';
import { AuthenticationApi } from '../../../src/apis/auth';
import { v4 as uuidv4 } from 'uuid';

const authorization = 'Basic ' + Buffer.from(env.CLIENT_ID + ':' + env.CLIENT_SECRET).toString('base64');
const wMSVCNAME = '@whitebox-co/walmart-marketplace-api';
const wMCONSUMERCHANNELTYPE = env.CONSUMER_CHANNEL_TYPE;

describe('feeds', () => {
	let fulfillmentConfiguration: Configuration;
	let accessToken: string;

	beforeAll(async () => {
		const configuration = new Configuration();
		const authApi = new AuthenticationApi(configuration);

		const tokenResponse = await authApi.tokenAPI({
			authorization,
			wMSVCNAME,
			wMQOSCORRELATIONID: uuidv4(),
			grantType: 'client_credentials',
			wMCONSUMERCHANNELTYPE,
		});

		const tokenData = tokenResponse as any;

		accessToken = tokenData.data.access_token;
		fulfillmentConfiguration = new Configuration({ accessToken });
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
