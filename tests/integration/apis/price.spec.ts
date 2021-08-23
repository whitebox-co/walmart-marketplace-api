import * as env from '../../environment';
import { Configuration } from '../../../src/apis/configuration';
import { PricesApi, PricesApiactory } from '../../../src/apis/price';
import { AuthenticationApi } from '../../../src/apis/auth';
import { v4 as uuidv4 } from 'uuid';

const authorization = 'Basic ' + Buffer.from(env.CLIENT_ID + ':' + env.CLIENT_SECRET).toString('base64');
const wMSVCNAME = '@whitebox-co/walmart-marketplace-api';
const wMCONSUMERCHANNELTYPE = env.CONSUMER_CHANNEL_TYPE;

describe('price', () => {
	let pricesConfiguration: Configuration;
	let accessToken: string;

	beforeAll(async () => {
		const configuration = new Configuration();
		const authApi = new AuthenticationApi(configuration);

		const tokenResponse = await authApi.tokenAPI({
			authorization,
			wMSVCNAME,
			wMQOSCORRELATIONID: uuidv4(),
			grantType: 'client_credentials',
			wMCONSUMERCHANNELTYPE,
		});

		const tokenData = tokenResponse as any;

		accessToken = tokenData.data.access_token;
		pricesConfiguration = new Configuration({ accessToken });
	});

	describe('#optCapProgramInPrice', () => {});

	describe('#priceBulkUploads', () => {});

	describe('#updatePrice', () => {});
});
