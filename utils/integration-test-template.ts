export const integrationTestTemplate = `
import * as env from '../../environment';
import walmartApi, { <%= apiClassName %> , defaultParams } from '../../../src/index';

describe('<%= apiClassName %>', () => {
	let <%= apiInstanceName %>: <%= apiClassName %>;

	beforeAll(async () => {
		<%= apiInstanceName %> = await walmartApi.getConfiguredApi(<%= apiClassName %>, {
			clientId: env.CLIENT_ID,
			clientSecret: env.CLIENT_SECRET,
			consumerChannelType: env.CONSUMER_CHANNEL_TYPE,
		});
	});

    <% _(formattedMethodNames).each(function(formattedMethodName) { %>
        describe('<%= formattedMethodName %>', () => {
            // TODO: Implement Me! (Stubbed from generate-apis script).
            expect(true).toEqual(false);
        })
    <% }) %>
});
`;
