import axios from 'axios';
import fs from 'fs';

import { requestInterceptor, responseInterceptor } from '../src/util/interceptors';

const writeDataToFile = (outputPath: string, data: any) => {
	const stringifiedConfig = JSON.stringify(data, null, 2);
	fs.writeFileSync(outputPath, stringifiedConfig);
};

/**
 * Add request and response interceptors.
 *
 * @param {string} outputFileName The name of the file to output
 * @returns {object} {requestInterceptor: any, responseInterceptor: any}
 */
const addInterceptors = (outputFileName: string): any => {
	const baseOutputPath = 'docs/testing/integration/payloads/';
	const isSolutionProvider = outputFileName.includes('solution-provider-use-case');
	const subFolder = isSolutionProvider ? 'solution-provider-use-cases' : 'methods';

	if (outputFileName.includes('solution-provider-use-cases')) {
		outputFileName = outputFileName
			.replace('solution-provider-use-cases', '')
			.replace(' should pass ', '')
			.replace(' ', '_')
			.replace(/\s/g, '')
			.trim();
	} else {
		outputFileName = outputFileName.replace(/\s/g, '_');
	}

	const outputPath = `${baseOutputPath}/${subFolder}/${outputFileName}`;

	return {
		/**
		 * Custom request interceptor for solution-provider-use-cases. Used to output all
		 * requests to an output file for use in Verification by Walmart Solution Provider
		 * team.
		 */
		requestInterceptor: requestInterceptor(
			(config: any) => {
				writeDataToFile(`${outputPath}_Request.json`, config);
				return config;
			},
			(error: any) => {
				writeDataToFile(`${outputPath}_Request.json`, error.toJSON());
				return Promise.reject(error);
			}
		),

		/**
		 * Custom response interceptor for solution-provider-use-cases. Used to output all
		 * responses to an output file for use in Verification by Walmart Solution Provider
		 * team.
		 */
		responseInterceptor: responseInterceptor(
			(response: any) => {
				// create new object and remove request data as it contains circular data.
				const outputData = {
					...response,
				};
				delete outputData.request;

				writeDataToFile(`${outputPath}_Response.json`, outputData);
				return response;
			},
			(error: any) => {
				writeDataToFile(`${outputPath}_Response.json`, error.toJSON());
				return Promise.reject(error);
			}
		),
	};
};

/**
 * remove initialized request and response interceptors
 */
const removeInterceptors = (interceptors = []) => {
	interceptors.forEach((interceptor) => {
		axios.interceptors.request.eject(interceptor);
	});
};

export { addInterceptors, removeInterceptors };
