# Walmart Marketplace API SDK

![GitHub](https://img.shields.io/github/license/whitebox-co/walmart-marketplace-api)
![GitHub branch checks state](https://img.shields.io/github/checks-status/whitebox-co/walmart-marketplace-api/main?label=checks)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/whitebox-co/walmart-marketplace-api/generate-apis?label=api-generation)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/whitebox-co/walmart-marketplace-api/release)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/whitebox-co/walmart-marketplace-api/test?label=tests)

A fully typed and auto generated TypeScript and Node.js API library for the Walmart Marketplace API.

## Why?

Because Walmart does not provide an easy way to download swagger/openapi docs to generate projects, nor do they provide
a Typescript Library to access their endpoints.

## How it works

-   An OpenAPI schema is downloaded from Walmart for each section of a the Walmart Marketplace API.
-   Models are generated based off of each api using openapi generator.
-   Clients are generated based off of each api and the models using custom typescript generators.
-   Integration Test Stubs are auto generated for every api function.
-   Documentation is generated or updated based on the latest openapi schemas.

## Installation

Note: We will eventually have builds automated, tagged properly, and published to npm. Until that point only local
installs will work.

```sh
npm install
```

## Usage

Due to how Walmart has structured its OpenApi schema, the auto API generation requires the passing of
authorization details on each API method call. This can become quite tedious and can create a lot of
repetitive and duplicated code.

To try and resolve this issue, our approach was to create convenience methods that will configure every API
and return a fully configured instance of the API with token caching built-in. These convenience methods
intercept all API methods to prevent the user from having to input the same auth credentials for each call.

Until Walmart changes their OpenApi schema so that auto-generation does not require these parameters, this
the approach will greatly simplify making API calls.

```typescript
import walmartMarketplaceApi, { OrdersApi, defaultParams } from '@whitebox-co/walmart-marketplace-api';

/**
 * Init the marketplace api with client credentials and get back a fully
 * configured instance of the api with token caching built in.
 *
 * Any subsequent call using the same credentials but a different api
 * will use cached credentials until they expire.
 */
const ordersApi = await walmartMarketplaceApi.getConfiguredApi(OrdersApi, {
	clientId,
	clientSecret,
	consumerChannelType,
});

/**
 * defaultParams are necessary due to ts typing. When using the convenience methods,
 * the method calls are intercepted and the default params are automatically filled
 * out. These can effectively be ignored if using js or by using es-lint ignore
 * statements if you so choose.
 *
 * customParams in this example are anything part of the getAnOrder
 * request that is required but not part of the defaultParams walmart
 * requires for authorization. See each api's individual documentation
 * for all acceptable params.
 */
const exampleOrder = await ordersApi.getAnOrder({
	...defaultParams,
	...customParams,
});
```

### Alternative Usage (using Api's Directly)

```typescript
import { Configuration, AuthenticationApi, OrdersApi } from '@whitebox-co/walmart-marketplace-api';

// configure authorization api
const configuration = new Configuration();
const authApi = new AuthenticationApi(configuration);
const authorization = 'Basic ' + Buffer.from(env.CLIENT_ID + ':' + env.CLIENT_SECRET).toString('base64');

// get response token
const tokenResponse = await authApi.tokenAPI({
	authorization,
	wMQOSCORRELATIONID: uuidv4(),
	wMSVCNAME: '@whitebox-co/walmart-marketplace-api',
	grantType: 'client_credentials',
	wMCONSUMERCHANNELTYPE: env.CONSUMER_CHANNEL_TYPE,
});

// configure orders api
const ordersApi = new OrdersApi(configuration);

// make subsequent order calls
const orderResponse = await ordersApi.getAnOrder({
	authorization,
	wMSECACCESSTOKEN: tokenResponse.data?.access_token,
	wMQOSCORRELATIONID: uuidv4(),
	wMSVCNAME: '@whitebox-co/walmart-marketplace-api',
	wMCONSUMERCHANNELTYPE: env.CONSUMER_CHANNEL_TYPE,
	id: 1,
});
```

## Docs

There are three different types of documentation included for this repo.

1. **Redoc** - Used as an alternative to visiting the walmart developer site (which is based off of redoc).
2. **SwaggerUI** - Used as an alternative to visiting the walmart sandbox documentation. (which is based of of swaggerui).
3. **TypeDoc** - Typescript type and class documentation of the main library.

Redoc and SwaggerUI are included as an alternative to having to visit Walmart's developer website, which we have
found often times become unresponsive in certain browsers.

### Viewing Docs

We have packaged live-server as a way to quickly view the docs. Issue any one of the following commands to build and
view any of the docs.

```sh
npm run docs # or `npm run docs:typedoc`
npm run docs:redoc
npm run docs:swaggerui
```

## Development

### Commands

```sh
npm run build       # build the project (output to ./lib)
npm run dev         # run ts-node-dev to watch and rebuild project while in development.
npm run start       # runs ts-node to compile project.
npm run lint        # runs eslint linter
```

### API Generation

API Generation is handled automatically by github actions. We perform a task daily to check if the Walmart API has
been updated and if it has we perform the schema downloads and subsequent API Generation. From there we automatically
generate the new docs and a new version of the library is built and deployed to npm.

If you wish to manually perform those steps see the sections below.

#### Manual Schema Download

Walmart exposes and endpoint that allows for the download of the openapi json. To pull down all of those models simply
run the following:

```sh
npm run download-schemas
```

If any changed have occurred to the api the new updates will overwrite the existing schemas in the `./docs/schemas`
directory.

#### Manual API Generation

Once you have the schemas downloaded you can run the api generation by running the following:

```sh
npm run generate-apis
```

Which will start the generation and processing of all of the schemas and eventually finish with all api's created in
the `src/apis` directory.

## Token Authorization and Caching

Tokens are retrieved from walmart during the authorization process and then get cached until they expire. When they
expire another call to the getToken endpoint is sent to walmart.

Any time you request a new api from the walmartMarketplaceApi using the same clientID, the cached credential token
will be used to authorize the request.

## Issues

Please report any issues you find in the github issues section. We will do our best to address any issue in a timely
manner.

### Known Issues

These need to be moved over to github issues.

-   Generation is only including the first schema response example. In some cases that is the xml response only.
-   There are some differences in received responses vs expected response. These are documented as TODO in the code.
-   There is currently no internal throttle controller and Walmart does have different throttling limits per api.

## Contributing

Feel free to open PR's. Whitebox is currently using this in our production code and we will evaluate changes
on a case by case basis.

## License

This project is licensed under the MIT License.
