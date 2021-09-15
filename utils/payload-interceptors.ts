import fs from 'fs';
import axios from 'axios';

const writeDataToFile = (outputPath: string, data: any) => {
	const stringifiedConfig = JSON.stringify(data, null, 2);
	fs.writeFileSync(outputPath, stringifiedConfig);
};

const getOutputPath = (outputFileName: string) => {
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

	return `${baseOutputPath}/${subFolder}/${outputFileName}`;
};

/**
 * Add request and response interceptors.
 *
 * @param {string} outputFileName The name of the file to output
 * @returns {number} interceptor id
 */
const addInterceptor = (outputFileName: string): any => {
	const outputPath = getOutputPath(outputFileName);

	return axios.interceptors.response.use(
		(response: any) => {
			const outputData = {
				...response,
			};
			delete outputData.request;

			writeDataToFile(`${outputPath}.json`, outputData);
			return response;
		},
		(error: any) => {
			writeDataToFile(`${outputPath}.json`, error);

			return Promise.reject(error);
		}
	);
};

/**
 * remove initialized request and response interceptors
 */
const removeInterceptor = (interceptor) => {
	axios.interceptors.response.eject(interceptor);
};

export { addInterceptor, removeInterceptor };
