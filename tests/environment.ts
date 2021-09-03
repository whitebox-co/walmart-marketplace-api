import env from 'env-var';

/**
 * Reads environment variables.
 *
 * Set either via CLI or in the `.env` file.
 *
 * @example
 *
 * `CLIENT_ID=xyz npm start`
 */

export const CLIENT_ID = env.get('CLIENT_ID').required().asString();
export const CLIENT_SECRET = env.get('CLIENT_SECRET').required().asString();
export const CONSUMER_CHANNEL_TYPE = env.get('CONSUMER_CHANNEL_TYPE').required().asString();
