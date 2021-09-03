import * as env from '../../environment';
import walmartApi, { RulesApi, defaultParams } from '../../../src/index';

describe('rules', () => {
	let RulesApi: RulesApi;

	beforeAll(async () => {
		rulesApi = await walmartApi.getConfiguredApi(RulesApi, {
			clientId: env.CLIENT_ID,
			clientSecret: env.CLIENT_SECRET,
			consumerChannelType: env.CONSUMER_CHANNEL_TYPE,
		});
	});

	describe('#activateRule', () => {});

	describe('#changeAssortmentType', () => {});

	describe('#createItemRule', () => {});

	describe('#createOverrideExceptions', () => {});

	describe('#deleteExceptions', () => {});

	describe('#deleteRule', () => {});

	describe('#downloadExceptions', () => {});

	describe('#downloadSimulationResult', () => {});

	describe('#getARule', () => {});

	describe('#getAllAreas', () => {});

	describe('#getAllExceptions', () => {});

	describe('#getAllRules', () => {});

	describe('#getAllSubCategories', () => {});

	describe('#getSimulationResult', () => {});

	describe('#inactivateRule', () => {});

	describe('#updateRule', () => {});

	describe('#updateShippingAreaToRule', () => {});
});
