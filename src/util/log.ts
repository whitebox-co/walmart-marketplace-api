import bunyan from 'bunyan';

const log = bunyan.createLogger({ name: '@whitebox-co/walmart-marketplace-api' });

// effectively disables bunyan for testing purposes
if (process.env.NODE_ENV === 'test') {
	log.level(bunyan.FATAL + 1);
}

export default log;
