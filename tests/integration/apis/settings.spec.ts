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

	it('should instantiate the api', () => {
		expect(defaultParams).toBeDefined();
		expect(settingsApi).toBeDefined();
	});

	describe('#create3PFulfillmentCenter', () => {
		// TODO: Implement ME!!
	});

	describe('#createFulfillmentCenter', () => {
		// TODO: Implement ME!!
	});

	describe('#createShippingTemplates', () => {
		// TODO: Implement ME!!
	});

	describe('#deleteShippingTemplateDetails', () => {
		// TODO: Implement ME!!
	});

	describe('#get3PFulfillmentProviders', () => {
		// TODO: Implement ME!!
	});

	describe('#getAllFulfillmentCenters', () => {
		// TODO: Implement ME!!
	});

	describe('#getAllShippingTemplates', () => {
		// TODO: Implement ME!!
	});

	describe('#getCarrierMethods', () => {
		// TODO: Implement ME!!
	});

	describe('#getCoverageForFulfillmentCenters', () => {
		// TODO: Implement ME!!
	});

	describe('#getPartnerConfigurations', () => {
		// TODO: Implement ME!!
	});

	describe('#getShippingConfigurations', () => {
		// TODO: Implement ME!!
	});

	describe('#getShippingTemplateActivationStatus', () => {
		// TODO: Implement ME!!
	});

	describe('#getShippingTemplateDetails', () => {
		// TODO: Implement ME!!
	});

	describe('#updateFulfillmentCenter', () => {
		// TODO: Implement ME!!
	});

	describe('#updateShippingTemplates', () => {
		// TODO: Implement ME!!
	});
});
