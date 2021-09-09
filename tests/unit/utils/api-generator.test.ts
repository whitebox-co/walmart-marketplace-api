import * as fs from 'fs';
import childProcess from 'child_process';
import tsMorph from 'ts-morph';
import log from '../../../src/util/log';
import apiGenerator from '../../../utils/api-generator';

jest.mock('fs');
jest.mock('child_process');
jest.mock('ts-morph');

const schemaFileNames = ['testSchemaOne.json', 'testSchemaTwo.json'];

jest.mock('ts-morph', () => {
	return {
		Project: jest.fn().mockImplementation(() => {
			return {
				getSourceFileOrThrow: jest.fn().mockImplementation(() => {
					return {
						getClasses: jest.fn().mockReturnValue([]),
						getEnums: jest.fn().mockReturnValue([]),
						getInterfaces: jest.fn().mockReturnValue([]),
					};
				}),
				createSourceFile: jest.fn(),
			};
		}),
	};
});

describe('api-generator', () => {
	it('should run generateApisFromSchemas on init when node env var RUN_API_GENERATOR is set', () => {
		jest.resetModules();

		process.env.RUN_API_GENERATOR = 'true';

		expect(() => {
			require('../../../utils/api-generator');
		}).not.toThrow();
	});

	beforeEach(() => {
		jest.spyOn<any, any>(fs, 'readdirSync').mockReturnValue(schemaFileNames);
	});

	describe('#generateApisFromSchemas', () => {
		it('should log error if there are not schemas found in directory', () => {
			jest.spyOn<any, any>(fs, 'readdirSync').mockReset();
			jest.spyOn<any, any>(log, 'error').mockResolvedValueOnce('');

			apiGenerator.generateApisFromSchemas();

			expect(log.error).toHaveBeenCalled();
		});

		it('should generate apis from schemas without any errors', () => {
			expect(() => {
				apiGenerator.generateApisFromSchemas();
			}).not.toThrow();
		});
	});

	describe('#deleteGeneratedDirectories', () => {
		it('should remove the generated schema directories without error', () => {
			jest.spyOn<any, any>(fs, 'rmSync');

			apiGenerator.generateApisFromSchemas();

			expect(fs.rmSync).nthCalledWith(1, 'src/apis/testSchemaOne', {
				force: true,
				maxRetries: 3,
				recursive: true,
			});

			expect(fs.rmSync).nthCalledWith(2, 'src/apis/testSchemaTwo', {
				force: true,
				maxRetries: 3,
				recursive: true,
			});
		});
	});

	describe('#moveApiFiles', () => {
		it('should rename the generated api files without error', () => {
			jest.spyOn<any, any>(fs, 'rmSync');

			apiGenerator.generateApisFromSchemas();

			expect(fs.renameSync).nthCalledWith(4, 'src/apis/testSchemaOne/api.ts', 'src/apis/testSchemaOne.ts');
			expect(fs.renameSync).nthCalledWith(5, 'src/apis/testSchemaTwo/api.ts', 'src/apis/testSchemaTwo.ts');
		});
	});

	describe('#copyCommonFiles', () => {
		it('should copy the first generated api common files without error', () => {
			jest.spyOn<any, any>(fs, 'rmSync');

			apiGenerator.generateApisFromSchemas();

			expect(fs.renameSync).nthCalledWith(1, 'src/apis/testSchemaOne/base.ts', 'src/apis/base.ts');
			expect(fs.renameSync).nthCalledWith(2, 'src/apis/testSchemaOne/common.ts', 'src/apis/common.ts');
			expect(fs.renameSync).nthCalledWith(
				3,
				'src/apis/testSchemaOne/configuration.ts',
				'src/apis/configuration.ts'
			);
		});
	});

	describe('#generateIndexFile', () => {
		it('should generate the index file and process the file with prettier and eslint', () => {
			jest.spyOn<any, any>(fs, 'writeFileSync');
			jest.spyOn<any, any>(childProcess, 'execSync');

			apiGenerator.generateApisFromSchemas();

			expect(fs.writeFileSync).toHaveBeenCalledTimes(1);

			expect(childProcess.execSync).nthCalledWith(3, './node_modules/.bin/prettier --write ./src/apis//index.ts');
			expect(childProcess.execSync).nthCalledWith(4, './node_modules/.bin/eslint --fix ./src/apis//index.ts');
		});
	});

	describe('#generateExportStatement', () => {
		const mockDeclaration = (name: string) => {
			return {
				getName: () => {
					return name;
				},
				getInstanceMethods: () => {
					return [
						{
							getName: () => {
								name;
							},
						},
					];
				},
			};
		};

		it('should throw error if sourceFile is not found or initialized', () => {
			jest.spyOn<any, any>(tsMorph, 'Project').mockImplementationOnce(() => {
				return {
					getSourceFileOrThrow: jest.fn().mockRejectedValueOnce(''),
				};
			});

			expect(() => {
				apiGenerator.generateApisFromSchemas();
			}).toThrow('');
		});

		it('should throw error if sourceFile is returned as undefined', () => {
			jest.spyOn<any, any>(tsMorph, 'Project').mockImplementationOnce(() => {
				return {
					getSourceFileOrThrow: jest.fn(),
				};
			});

			expect(() => {
				apiGenerator.generateApisFromSchemas();
			}).toThrow('');
		});

		it('should generate exports with default declaration name if the name already contains the class name', () => {
			jest.spyOn<any, any>(tsMorph, 'Project').mockImplementationOnce(() => {
				return {
					getSourceFileOrThrow: jest.fn().mockImplementation(() => {
						return {
							getClasses: jest.fn().mockReturnValue([mockDeclaration('SchemaOneAPI')]),
							getEnums: jest.fn().mockReturnValue([mockDeclaration('SchemaOneAPIEnum')]),
							getInterfaces: jest.fn().mockReturnValue([]),
						};
					}),
				};
			});

			expect(() => {
				apiGenerator.generateApisFromSchemas();
			}).not.toThrow('');
		});

		it('should generate exports using schemaName if class name is not found', () => {
			jest.spyOn<any, any>(tsMorph, 'Project').mockImplementationOnce(() => {
				return {
					getSourceFileOrThrow: jest.fn().mockImplementation(() => {
						return {
							getClasses: jest.fn().mockReturnValue([mockDeclaration('SchemaOneAPI')]),
							getEnums: jest.fn().mockReturnValue([mockDeclaration('MyEnum')]),
							getInterfaces: jest.fn().mockReturnValue([mockDeclaration('MyInterface')]),
						};
					}),
				};
			});

			expect(() => {
				apiGenerator.generateApisFromSchemas();
			}).not.toThrow('');
		});

		it('should generate exports using schemaName if there are no classes found', () => {
			jest.spyOn<any, any>(tsMorph, 'Project').mockImplementationOnce(() => {
				return {
					getSourceFileOrThrow: jest.fn().mockImplementation(() => {
						return {
							getClasses: jest.fn().mockReturnValue([]),
							getEnums: jest.fn().mockReturnValue([mockDeclaration('MyEnum')]),
							getInterfaces: jest.fn().mockReturnValue([mockDeclaration('MyInterface')]),
						};
					}),
				};
			});

			expect(() => {
				apiGenerator.generateApisFromSchemas();
			}).not.toThrow('');
		});
	});

	describe('#executeOpenAPIGenerator', () => {
		it('should execute the open api generator without error in non verbose mode', () => {
			jest.spyOn<any, any>(fs, 'writeFileSync');
			jest.spyOn<any, any>(childProcess, 'execSync');

			apiGenerator.generateApisFromSchemas();

			expect(childProcess.execSync).nthCalledWith(
				1,
				'openapi-generator-cli generate -g typescript-axios  --enable-post-process-file --additional-properties=supportsES6=true,useSingleRequestParameter=true --type-mappings=set=Array --skip-validate-spec -o src/apis/testSchemaOne -i docs/schemas/testSchemaOne.json'
			);

			expect(childProcess.execSync).nthCalledWith(
				2,
				'openapi-generator-cli generate -g typescript-axios  --enable-post-process-file --additional-properties=supportsES6=true,useSingleRequestParameter=true --type-mappings=set=Array --skip-validate-spec -o src/apis/testSchemaTwo -i docs/schemas/testSchemaTwo.json'
			);
		});

		it('should execute the open api generator without error in verbose mode', () => {
			process.env.VERBOSE_GENERATION = 'true';

			jest.spyOn<any, any>(fs, 'writeFileSync');
			jest.spyOn<any, any>(childProcess, 'execSync');

			apiGenerator.generateApisFromSchemas();

			expect(childProcess.execSync).nthCalledWith(
				1,
				'openapi-generator-cli generate -g typescript-axios  --enable-post-process-file --additional-properties=supportsES6=true,useSingleRequestParameter=true --type-mappings=set=Array --skip-validate-spec -o src/apis/testSchemaOne -i docs/schemas/testSchemaOne.json',
				{ stdio: 'inherit' }
			);

			expect(childProcess.execSync).nthCalledWith(
				2,
				'openapi-generator-cli generate -g typescript-axios  --enable-post-process-file --additional-properties=supportsES6=true,useSingleRequestParameter=true --type-mappings=set=Array --skip-validate-spec -o src/apis/testSchemaTwo -i docs/schemas/testSchemaTwo.json',
				{ stdio: 'inherit' }
			);
		});
	});
});
