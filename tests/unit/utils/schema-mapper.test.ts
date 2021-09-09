import * as fs from 'fs';
import log from '../../../src/util/log';
import schemaMapper from '../../../utils/schema-mapper';

jest.mock('fs');

describe('schema-mapper', () => {
	describe('#mapSchemas', () => {
		it('should log an error if there was a failure writing the schema mapping to the fs.', () => {
			jest.spyOn<any, any>(fs, 'writeFileSync').mockImplementationOnce(() => {
				throw new Error('mocked writeFileSync error');
			});

			jest.spyOn<any, any>(log, 'error').mockResolvedValueOnce('');

			schemaMapper.mapSchemas();

			expect(log.error).toHaveBeenCalledTimes(1);
		});

		it('should generate a schemas.js file with schema mapping information.', () => {
			schemaMapper.mapSchemas();

			expect(fs.writeFileSync).toHaveBeenCalledTimes(1);
		});
	});
});
