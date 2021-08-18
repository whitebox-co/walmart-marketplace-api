import * as fs from 'fs';
import axios from 'axios';
import log from '../../../src/util/log';
import schemaDownloader from '../../../utils/schema-downloader';

jest.mock('fs');

describe('schema-downloader', () => {
	it('should run downloadSchemas on init when node env var RUN_SCHEMA_DOWNLOADER is set', () => {
		jest.resetModules();

		process.env.RUN_SCHEMA_DOWNLOADER = 'true';

		expect(() => {
			require('../../../utils/schema-downloader');
		}).not.toThrow();
	});

	describe('#downloadSchemas', () => {
		it('should throw an error if an api post failed to fetch a schema', async () => {
			const error = new Error('Failed to retrieve api data');

			jest.spyOn<any, any>(axios, 'post').mockImplementationOnce(() => {
				throw error;
			});

			await expect(schemaDownloader.downloadSchemas()).rejects.toEqual(error);
		});

		it('should log an error if an api post response was rejected', async () => {
			jest.spyOn<any, any>(axios, 'post').mockRejectedValue('');

			jest.spyOn<any, any>(log, 'error').mockResolvedValueOnce('Failed to retrieve api data:');

			await schemaDownloader.downloadSchemas();

			expect(log.error).toHaveBeenCalled();
		});

		it('should download all schemas without error', async () => {
			jest.spyOn<any, any>(axios, 'post')
				.mockReset()
				.mockResolvedValue({ config: { data: '{ "params": { "apiName": "" } }' } });

			await expect(schemaDownloader.downloadSchemas()).resolves.not.toThrow();
		});
	});

	describe('#generateFile', () => {
		it('should log an error if the file failed to write to the filesystem', async () => {
			jest.spyOn<any, any>(fs, 'writeFileSync').mockImplementationOnce(() => {
				throw new Error('mocked writeFileSync error');
			});

			jest.spyOn<any, any>(log, 'error').mockResolvedValueOnce('');

			await schemaDownloader.downloadSchemas();

			expect(log.error).toHaveBeenCalled();
		});
	});

	describe('#preprocessData', () => {
		it('should remove Configuration from the settings.components.schemas object if it exists', async () => {
			jest.spyOn<any, any>(axios, 'post')
				.mockReset()
				.mockResolvedValue({
					data: { components: { schemas: { Configuration: 'test' } } },
					config: { data: '{ "params": { "apiName": "settings" } }' },
				});

			await expect(schemaDownloader.downloadSchemas()).resolves.not.toThrow();
		});

		it('should return an unprocessed responseData if conditions are not met for preprocessing', async () => {
			// if no data and apiName !== settings
			jest.spyOn<any, any>(axios, 'post')
				.mockReset()
				.mockResolvedValue({
					data: {},
					config: { data: '{ "params": { "apiName": "auth" } }' },
				});

			await expect(schemaDownloader.downloadSchemas()).resolves.not.toThrow();

			// if no data and apiName === settings.
			jest.spyOn<any, any>(axios, 'post')
				.mockReset()
				.mockResolvedValue({
					data: {},
					config: { data: '{ "params": { "apiName": "settings" } }' },
				});

			await expect(schemaDownloader.downloadSchemas()).resolves.not.toThrow();
		});
	});
});
