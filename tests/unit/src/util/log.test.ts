import bunyan from 'bunyan';

describe('log', () => {
	beforeEach(() => {
		jest.resetModules();
	});

	it('should disable logging if NODE_ENV is "test"', () => {
		process.env.NODE_ENV = 'test';

		// eslint-disable-next-line @typescript-eslint/no-var-requires
		const log = require('../../../../src/util/log').default;

		expect(log.level()).toEqual(bunyan.FATAL + 1);
	});

	it('should not disable logging if NODE_ENV is NOT "test"', () => {
		process.env.NODE_ENV = 'prod';

		// eslint-disable-next-line @typescript-eslint/no-var-requires
		const log = require('../../../../src/util/log').default;

		expect(log.level()).toEqual(30);
	});
});
