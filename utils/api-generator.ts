import { execSync } from 'child_process';
import { template } from 'lodash';
import { Project } from 'ts-morph';
import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import log from '../src/util/log';
import { integrationTestTemplate } from './integration-test-template';

const commonApiFiles: string[] = ['base.ts', 'common.ts', 'configuration.ts'];
const schemaBasePath = './docs/schemas/';
const apisOutputPath = './src/apis/';
const tsConfigFilePath = 'tsconfig.json';
const tsLibFolderPath = 'node_modules/typescript/lib';
const prettierBinPath = './node_modules/.bin/prettier';
const esLintBinPath = './node_modules/.bin/eslint';
const integrationTestPath = './tests/integration/apis';

/**
 * Executes the openapi generator for an individual api.
 *
 * @param {string} schemaFileName
 * @param {string} schemaName
 * @returns
 */
const executeOpenAPIGenerator = (schemaFileName: string, schemaName: string): void => {
	const schemaPath = path.join(schemaBasePath, schemaFileName);
	const outputFolder = path.join(apisOutputPath, schemaName);

	const command = `openapi-generator-cli generate -g typescript-axios  --enable-post-process-file --additional-properties=supportsES6=true,useSingleRequestParameter=true --type-mappings=set=Array --skip-validate-spec -o ${outputFolder} -i ${schemaPath}`;

	process.env.TS_POST_PROCESS_FILE = `${prettierBinPath} --write`;

	if (process.env.VERBOSE_GENERATION) {
		execSync(command, {
			stdio: 'inherit',
		});
	} else {
		execSync(command);
	}

	log.info(`Generated apis for ${schemaFileName}`);
};

/**
 * Generates a fully formed export statement for the passed in schema.
 *
 * This looks complex at first but really all we are doing is using ts-morph
 * to get class, enum, and interface definitions so that we can generate
 * unique export names for duplicated declarations.
 *
 * classes maintain their names while enums an interfaces get appended with
 * the schema name to make them unique.
 *
 * @param {string} schemaName
 * @returns {string} a fully formed export statement for the particular api.
 */
const generateExportStatement = (schemaName: string): string => {
	const sourceFile = new Project({
		tsConfigFilePath,
		libFolderPath: tsLibFolderPath,
	}).getSourceFileOrThrow(`${apisOutputPath}/${schemaName}.ts`);

	if (!sourceFile) {
		throw new Error('Can not generate api export statement. Source file not found!');
	}

	const classes = sourceFile.getClasses();
	const mappedClasses = [...classes].map((declaration) => `${declaration.getName()}`).join(', ');

	const enumsAndInterfaces = [...sourceFile.getEnums(), ...sourceFile.getInterfaces()]
		.map((declaration) => {
			// check to see if this declaration includes any class names
			const classesInName = classes.filter((value) => {
				return declaration.getName().includes(value.getName());
			});

			if (classesInName.length) {
				return declaration.getName();
			}

			// get name of first class to use as prefix value or use schemaName if no class found.
			const nameToPrefix = classes[0]?.getName() ?? schemaName;

			// "_" is added in case there are already declarations that contain the full class name and declaration
			// name. This is possible in a bunch of locations. The Walmart openapi is not great at sticking to naming
			// conventions and also uses a bunch of inline schemas as opposed to linking.
			return `${declaration.getName()} as ${_.upperFirst(_.camelCase(nameToPrefix))}_${declaration.getName()}`;
		})
		.join(', ');

	const declarations = [mappedClasses, enumsAndInterfaces];

	return `export { ${declarations} } from './${schemaName}';\n`;
};

/**
 * Generate an index file with all exports in the apis output path.
 *
 * @param {string[]} schemaNames
 */
const generateIndexFile = (schemaNames: string[]): void => {
	const exportStatements = schemaNames.map(generateExportStatement);
	const outputFilePath = `${apisOutputPath}/index.ts`;

	// some exports will be snake cased due to how the declarations are conflicted,
	// so we disable eslint for camelcase on this file otherwise we get errors.
	exportStatements.unshift('/* eslint-disable camelcase */');

	fs.writeFileSync(outputFilePath, exportStatements.join('\n'));

	// prettify the newly generated index.ts so it's not so hard to read.
	execSync(`${prettierBinPath} --write ${outputFilePath}`);

	// run eslint to fix any issues.
	execSync(`${esLintBinPath} --fix ${outputFilePath}`);
};

/**
 * Copies all of the common files (see commonApiFiles) as these are all
 * duplicate files that can be referenced only once.
 *
 * @param {string} schemaName
 */
const copyCommonFiles = (schemaName: string) => {
	commonApiFiles.forEach((duplicateFile) => {
		const oldPath = path.join(apisOutputPath, schemaName, duplicateFile);
		const newPath = path.join(apisOutputPath, duplicateFile);
		fs.renameSync(oldPath, newPath);
	});
};

/**
 * Move's all the api files out of the generated folders to the root apis folder and
 * renames them from api to their actual name.
 *
 * @param {string} schemaName
 */
const moveApiFiles = (schemaName: string) => {
	const oldPath = path.join(apisOutputPath, schemaName, 'api.ts');
	const newPath = path.join(apisOutputPath, `${schemaName}.ts`);
	fs.renameSync(oldPath, newPath);
};

/**
 * Deletes all of the temporary directories generated by the generator.
 *
 * @param {string} schemaName
 */
const deleteGeneratedDirectories = (schemaName: string) => {
	const fullPath = path.join(apisOutputPath, schemaName);

	fs.rmSync(fullPath, {
		maxRetries: 3,
		force: true,
		recursive: true,
	});
};

/**
 * Generates Integration test stubs based on API function names.
 *
 * @param {string} schemaName
 */
const generateIntegrationTests = (schemaName: string) => {
	const sourceFile = new Project({
		tsConfigFilePath,
		libFolderPath: tsLibFolderPath,
	}).getSourceFileOrThrow(`${apisOutputPath}/${schemaName}.ts`);

	if (!sourceFile) {
		throw new Error('Can not generate integration test. Source file not found!');
	}

	const integrationTestFilePath = `${integrationTestPath}/${schemaName}.spec.ts`;

	// skip stubbing if there is already an existing integration test file // TODO: figure out a way to update the existing test file with any new methods.
	if (fs.existsSync(integrationTestFilePath)) {
		log.warn(`Skipping integration test stubbing for ${schemaName}. Test file already exists.`);
	} else {
		const classes = sourceFile.getClasses();

		// get method names mapped to class names.
		[...classes].forEach((declaration) => {
			const className = declaration.getName();
			const instanceMethods = declaration.getInstanceMethods();

			const formattedMethodNames = [...instanceMethods].map((declaration) => {
				return `#${declaration.getName()}`;
			});

			// create a ts project to output our compiled template.
			const integrationTestProject = new Project({
				tsConfigFilePath,
				libFolderPath: tsLibFolderPath,
			});

			// use lodash template to get a template executor so we can compile the test file
			const templateExecuter = template(integrationTestTemplate);

			// run the templateExecuter to compile the file with the parameters injected.
			const compiledFile = templateExecuter({
				apiInstanceName: _.lowerFirst(className),
				apiClassName: className,
				formattedMethodNames,
			});

			// write the file to disk.
			integrationTestProject.createSourceFile(integrationTestFilePath, compiledFile, {
				overwrite: false,
			});
		});
	}
};

/**
 * Uses OpenApi Generator to generate the api files and then process all
 * files and directories into usable structure and removes unnecessary files.
 *
 * @param {string} schemaFileName
 * @param {number} index
 * @returns
 */
const processSchema = (schemaFileName: string, index: number) => {
	// get actual name from filename
	const schemaName = path.parse(schemaFileName).name;

	// execute generator
	executeOpenAPIGenerator(schemaFileName, schemaName);

	// Copy common files out to apis folder.
	if (index === 0) {
		copyCommonFiles(schemaName);
	}

	// mv individual api.ts files from individual folders to root apis folder.
	moveApiFiles(schemaName);

	// remove all the generated files and folders.
	deleteGeneratedDirectories(schemaName);

	// generate integration test stubs
	generateIntegrationTests(schemaName);

	return schemaName;
};

/**
 * Iterates over all openapi schemas in a directory and executes the
 * openapi generator against each schema.
 */
const generateApisFromSchemas = (): void => {
	// Get all schemas in base directory.
	const schemaFileNames: string[] = fs.readdirSync(schemaBasePath);

	if (schemaFileNames?.length) {
		// iterate over all schemas and do all processing.
		const schemaNames = schemaFileNames.map(processSchema);

		// Write all generated apis to index file.
		generateIndexFile(schemaNames);
	} else {
		log.error(`Generation can not proceed as there are no Schemas found in ${schemaBasePath}`);
	}
};

// Immediately generate if told to do so (used in package scripts mostly)
if (process.env.RUN_API_GENERATOR) {
	generateApisFromSchemas();
}

export default { generateApisFromSchemas };
