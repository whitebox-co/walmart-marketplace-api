import { writeFileSync } from 'fs';
import { SCHEMAS } from '../src/constants';
import log from '../src/util/log';

const schemasRootPath = './schemas';
const schemasMappingPath = `./docs/schemas.js`;

/**
 * Generates a mapping of MarketplaceApi names to schema urls and saves
 * the mapping to a file in the ./docs folder for document consumption.
 */
const mapSchemas = (): void => {
	const schemasMap = SCHEMAS.map((schema) => {
		return {
			name: schema.name,
			url: `${schemasRootPath}/${schema.apiName}.json`,
		};
	});

	try {
		const stringifiedApiData = `const schemaMappings = ${JSON.stringify(schemasMap)}`;
		writeFileSync(schemasMappingPath, stringifiedApiData);
	} catch (error) {
		log.error('Failed to write schema mapping file', error);
	}
};

export { mapSchemas };
