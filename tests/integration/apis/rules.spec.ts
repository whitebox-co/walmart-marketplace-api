import * as env from '../../environment';
import walmartApi, { RulesApi, defaultParams } from '../../../src/index';

describe('rules', () => {
	let rulesApi: RulesApi;

	beforeAll(async () => {
		rulesApi = await walmartApi.getConfiguredApi(RulesApi, {
			clientId: env.CLIENT_ID,
			clientSecret: env.CLIENT_SECRET,
			consumerChannelType: env.CONSUMER_CHANNEL_TYPE,
		});
	});

	it('should instantiate the api', () => {
		expect(defaultParams).toBeDefined();
		expect(rulesApi).toBeDefined();
	});

	describe('#activateRule', () => {
		// TODO: Implement ME!!
	});

	describe('#changeAssortmentType', () => {
		// TODO: Implement ME!!
	});

	describe('#createItemRule', () => {
		// TODO: Implement ME!!
	});

	describe('#createOverrideExceptions', () => {
		// TODO: Implement ME!!
	});

	describe('#deleteExceptions', () => {
		// TODO: Implement ME!!
	});

	describe('#deleteRule', () => {
		// TODO: Implement ME!!
	});

	describe('#downloadExceptions', () => {
		// TODO: Implement ME!!
	});

	describe('#downloadSimulationResult', () => {
		// TODO: Implement ME!!
	});

	describe('#getARule', () => {
		// TODO: Implement ME!!
	});

	describe('#getAllAreas', () => {
		// TODO: Implement ME!!
	});

	describe('#getAllExceptions', () => {
		// TODO: Implement ME!!
	});

	describe('#getAllRules', () => {
		// TODO: Implement ME!!
	});

	describe('#getAllSubCategories', () => {
		// TODO: Implement ME!!
	});

	describe('#getSimulationResult', () => {
		// TODO: Implement ME!!
	});

	describe('#inactivateRule', () => {
		// TODO: Implement ME!!
	});

	describe('#updateRule', () => {
		// TODO: Implement ME!!
	});

	describe('#updateShippingAreaToRule', () => {
		// TODO: Implement ME!!
	});
});
