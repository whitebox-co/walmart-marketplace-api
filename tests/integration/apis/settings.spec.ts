import * as env from '../../environment';
import walmartApi, { SettingsApi, defaultParams } from '../../../src/index';

describe('settings', () => {
	let settingsApi: SettingsApi;

	beforeAll(async () => {
		settingsApi = await walmartApi.getConfiguredApi(SettingsApi, {
			clientId: env.CLIENT_ID,
			clientSecret: env.CLIENT_SECRET,
			consumerChannelType: env.CONSUMER_CHANNEL_TYPE,
		});
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
