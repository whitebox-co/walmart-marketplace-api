import * as env from '../../environment';
import { Configuration } from '../../../src/apis/configuration';
import { SettingsApi, FSettingsApiFactory } from '../../../src/apis/settings';
import { AuthenticationApi } from '../../../src/apis/auth';
import { v4 as uuidv4 } from 'uuid';

const authorization = 'Basic ' + Buffer.from(env.CLIENT_ID + ':' + env.CLIENT_SECRET).toString('base64');
const wMSVCNAME = '@whitebox-co/walmart-marketplace-api';
const wMCONSUMERCHANNELTYPE = env.CONSUMER_CHANNEL_TYPE;

describe('settings', () => {
	let settingsConfiguration: Configuration;
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
		settingsConfiguration = new Configuration({ accessToken });
	});

	describe('#create3PFulfillmentCenter', () => {});

	describe('#createFulfillmentCenter', () => {});

	describe('#createShippingTemplates', () => {});

	describe('#deleteShippingTemplateDetails', () => {});

	describe('#get3PFulfillmentProviders', () => {});

	describe('#getAllFulfillmentCenters', () => {});

	describe('#getAllShippingTemplates', () => {});

	describe('#getCarrierMethods', () => {});

	describe('#getCoverageForFulfillmentCenters', () => {});

	describe('#getPartnerConfigurations', () => {});

	describe('#getShippingConfigurations', () => {});

	describe('#getShippingTemplateActivationStatus', () => {});

	describe('#getShippingTemplateDetails', () => {});

	describe('#updateFulfillmentCenter', () => {});

	describe('#updateShippingTemplates', () => {});
});
