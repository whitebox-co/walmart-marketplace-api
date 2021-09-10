const TARBALL_DIRECTORY = 'pack';

const configuration = {
	branches: ['main', 'next', 'next-major', 'beta', 'alpha'],

	plugins: [
		'@semantic-release/commit-analyzer',
		'@semantic-release/release-notes-generator',

		[
			'@semantic-release/changelog',
			{
				changelogTitle: '# Change Log',
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
				assets: ['CHANGELOG.md'],
			},
		],
	],
};

module.exports = configuration;
