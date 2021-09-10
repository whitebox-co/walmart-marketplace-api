export const integrationTestTemplate = `
import * as env from '../../environment';
import walmartApi, { <%= apiClassName %> , defaultParams } from '../../../src/index';
import { addInterceptors, removeInterceptors } from '../../../utils/payload-interceptors';

describe('<%= apiClassName %>', () => {
	let interceptors: any;
	let <%= apiInstanceName %>: <%= apiClassName %>;

	beforeAll(async () => {
		<%= apiInstanceName %> = await walmartApi.getConfiguredApi(<%= apiClassName %>, {
			clientId: env.CLIENT_ID,
			clientSecret: env.CLIENT_SECRET,
			consumerChannelType: env.CONSUMER_CHANNEL_TYPE,
		});
	});

	beforeEach(() => {
		const testName = expect.getState().currentTestName;
		interceptors = Object.values(addInterceptors(testName));
	});

	afterEach(() => {
		removeInterceptors(interceptors);
	});
	
	it('should instantiate the api', () => {
		expect(defaultParams).toBeDefined();
		expect(<%= apiInstanceName %>).toBeDefined();
	});

    <% _(formattedMethodNames).each(function(formattedMethodName) { %>
        describe('<%= formattedMethodName %>', () => {
            // TODO: Implement Me!!
        })
    <% }) %>

	describe('solution-provider-use-cases', () => {
		// Scenario #n - Use Case - Use Case Description
		it('should pass Scenario N', () => {
			// TODO: Implement ME!!

			expect(true).toEqual(false);
		});
	});
});
`;
