import axios, { AxiosResponse } from 'axios';
import { writeFileSync } from 'fs';
import log from '../src/util/log';
import { SCHEMAS } from '../src/constants';

const apiDetailUrl = 'https://developer.walmart.com/api/detail';
const category = 'mp';
const country = 'us';
const schemasPath = './docs/schemas';

/**
 * Modifies the response data json before writing to file. This should only be used
 * in situations where the json needs to be modified because of issues and/or
 * conflicts in the openapi generation.
 *
 * @param {string} schemaName The name of the schema being processed.
 * @param {any} responseData The original response json data.
 * @returns {any} preprocessed response data
 */
const preprocessData = (schemaName: string, responseData: any): void => {
	if (schemaName === 'settings' && responseData.components?.schemas?.Configuration) {
		// The Configuration schema conflicts with the Configuration Object and it is
		// not even being used as a properly linked schema so it is okay to remove.
		delete responseData.components.schemas.Configuration;
	}
	return responseData;
};

/**
 * Save a json file to the filesystem based on a response value from api/detail endpoint.
 *
 * @param {AxiosResponse<any>} responseValue The response from the api.
 */
const generateFile = (responseValue: AxiosResponse<any>): void => {
	const schemaName = JSON.parse(responseValue.config?.data).params?.apiName;
	const preprocessedData = preprocessData(schemaName, responseValue.data);
	const schemaData = JSON.stringify(preprocessedData, null, 2);
	const path = `${schemasPath}/${schemaName}.json`;

	try {
		writeFileSync(path, schemaData);

		log.info(`Writing ${schemaName} schema to ${path}`);
	} catch (error) {
		log.error('Failed to write schema data to file', error);
	}
};

/**
 * Downloads all of the openapi schemas from walmart's api/detail endpoint and
 * generates json schema files in the docs/schemas folder.
 */
const downloadSchemas = async (): Promise<void> => {
	const postPromises = SCHEMAS.map((schema) => {
		log.info(`Downloading schema ${schema.name}`);

		return axios.post(apiDetailUrl, {
			params: {
				category,
				country,
				apiName: schema.apiName,
			},
		});
	});

	const responses = await Promise.allSettled(postPromises);

	responses.forEach((response) => {
		if (response.status === 'fulfilled') {
			generateFile(response.value);
		} else {
			log.error('Failed to retrieve api data: ', response.reason);
		}
	});
};

// Immediately download if told to do so (used in package scripts mostly)
if (process.env.RUN_SCHEMA_DOWNLOADER) {
	downloadSchemas();
}

export { downloadSchemas };
