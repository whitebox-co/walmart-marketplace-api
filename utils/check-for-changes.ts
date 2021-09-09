import fs from 'fs';
import axios from 'axios';
import log from '../src/util/log';
import { SCHEMAS } from '../src/constants';

const apiDetailUrl = 'https://developer.walmart.com/api/detail';
const category = 'mp';
const country = 'us';
const schemasPath = './docs/schemas';

const checkForChanges = async () => {
	let hasChanges = false;

	for (const schema of SCHEMAS) {
		log.info(`Downloading schema ${schema.name}`);

		const response = await axios.post(apiDetailUrl, {
			params: {
				category,
				country,
				apiName: schema.apiName,
			},
		});

		const schemaName = JSON.parse(response.config.data).params.apiName;

		if (schemaName === 'settings' && response.data.components?.schemas?.Configuration) {
			delete response.data.components.schemas.Configuration;
		}

		const formattedJSON = JSON.stringify(response.data, null, 2);
		const existingSchema = Buffer.from(formattedJSON);
		const tempSchema = fs.readFileSync(`${schemasPath}/${schemaName}.json`);
		hasChanges = !tempSchema.equals(existingSchema);

		if (hasChanges) {
			log.info(`${schemasPath}/${schemaName}.json`);
			break;
		}
	}

	fs.writeFileSync('hasChanges.txt', (hasChanges ? 1 : 0).toString());
};

// Immediately run if told to do so (used in package scripts mostly)
if (process.env.RUN_CHECK_FOR_CHANGES) {
	checkForChanges();
}

export default { checkForChanges };
