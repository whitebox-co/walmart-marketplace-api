const path = require('path');
const { existsSync } = require('fs');

const tasks = (commands) => commands.join(' && ');

const lockfileLint = [];

const packageLock = path.join(directory, 'package-lock.json');
if (existsSync(packageLock)) {
	lockfileLint.push(`lockfile-lint --path ${packageLock}`);
}

const npmInstall = 'npm install';

const configuration = {
	hooks: {
		'post-merge': tasks([...lockfileLint, npmInstall]),
		'post-rewrite': tasks([...lockfileLint, npmInstall]),
		'pre-commit': tasks(['lint-staged']),
		'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
	},
};

module.exports = configuration;
