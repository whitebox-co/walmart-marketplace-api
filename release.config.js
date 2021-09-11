const TARBALL_DIRECTORY = 'pack';

const configuration = {
	branches: ['main', 'next', 'next-major', 'beta', 'alpha'],

	plugins: [
		'@semantic-release/commit-analyzer',
		'@semantic-release/release-notes-generator',

		[
			'@semantic-release/changelog',
			{
				changelogTitle: `# Change Log

				All notable changes to this project will be documented in this file.
				See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.
				`.trim(),
				changelogFile: 'CHANGELOG.md',
			},
		],

		[
			'@semantic-release/npm',
			{
				tarballDir: TARBALL_DIRECTORY,
			},
		],

		[
			'@semantic-release/github',
			{
				assets: `${TARBALL_DIRECTORY}/*.tgz`,
			},
		],

		[
			'@semantic-release/git',
			{
				assets: ['CHANGELOG.md', 'package.json', 'package-lock.json'],
				message: 'chore(release): ${nextRelease.version} [skip ci]',
			},
		],
	],
};

module.exports = configuration;
