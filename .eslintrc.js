'use strict';

module.exports = {
	parser: '@typescript-eslint/parser',
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx'],
		},
		'import/resolver': {
			typescript: {},
		},
	},
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
	},
	extends: [
		'eslint:recommended',
		'plugin:prettier/recommended',
		'plugin:sonarjs/recommended',
		'plugin:jest/recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:json/recommended',
	],
	plugins: ['prettier', 'sonarjs', 'jest', '@typescript-eslint'],
	env: {
		es6: true,
		node: true,
	},
	rules: {
		'sonarjs/no-duplicate-string': 'off',
		'sonarjs/cognitive-complexity': 'warn',
		'no-extra-boolean-cast': 'off',
		'no-console': ['error'],
		'no-unused-vars': ['error', { args: 'none', ignoreRestSiblings: true }],
		semi: 'error',
		'no-warning-comments': 'warn',
		'spaced-comment': 'error',
		'brace-style': ['error', '1tbs', { allowSingleLine: true }],
		curly: ['error', 'multi-line'],
		camelcase: ['error', { properties: 'never' }],
		'no-multiple-empty-lines': ['error', { max: 1 }],
		'no-unexpected-multiline': 'error',
		eqeqeq: 'error',
		'no-var': 'error',
		'require-await': 'error',
		'prefer-const': 'error',
		'prettier/prettier': [
			'error',
			{
				printWidth: 120,
				arrowParens: 'always',
				singleQuote: true,
				tabWidth: 4,
				useTabs: true,
			},
		],
		'@typescript-eslint/no-unused-vars': ['error'],
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/semi': [2],
		'@typescript-eslint/no-use-before-define': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/naming-convention': [
			'error',
			{
				format: ['PascalCase'],
				selector: ['class', 'interface', 'typeAlias'],
			},
		],
	},
};
