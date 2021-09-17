# Walmart Marketplace API SDK

![GitHub](https://img.shields.io/github/license/whitebox-co/walmart-marketplace-api)
![GitHub](https://img.shields.io/github/package-json/v/whitebox-co/walmart-marketplace-api)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/whitebox-co/walmart-marketplace-api/Release?label=main)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/whitebox-co/walmart-marketplace-api/Develop?label=develop)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/whitebox-co/walmart-marketplace-api/Generate%20API?label=api-generator)
![GitHub Workflow Status](https://img.shields.io/snyk/vulnerabilities/github/whitebox-co/walmart-marketplace-api?label=snyk%20vulnerbilities)
![GitHub Workflow Status](https://img.shields.io/maintenance/yes/2021)

A fully typed and auto generated [TypeScript](https://www.typescriptlang.org) library for the
[Walmart Marketplace Rest API](https://developer.walmart.com/doc/us/mp/us-mp-intro/).

This library automatically generates typescript types, classes, interfaces, integration tests, and UI documentation
based directly off of the Walmart Marketplace OpenAPI specification.

## Why?

TLDR: It did not exist and we really needed it!

-   [Walmart](https://github.com/walmartlabs) does not provide an easy way to download their swagger and openapi docs to
    generate projects.
-   They do not provide a [Typescript library](https://github.com/orgs/walmartlabs/repositories?q=&type=&language=typescript&sort=)
    to access their endpoints
-   Their [javascript library](https://github.com/walmartlabs/walmart-api) is deprecated.
-   Existing implementations did not include full walmart REST implementation and did not meet our needs.

## How it works

-   An [OpenAPI Schema](https://spec.openapis.org/oas/latest.html) is downloaded from Walmart for each section of a
    the Walmart Marketplace API.
-   API Classes are generated using the amazing [openapi-generator](https://github.com/OpenAPITools/openapi-generator)
    against each schema.
-   Integration Test stubs are auto generated for every generated api class and function.
-   Documentation is auto generated and updated based on the latest openapi schemas changes.

## Installation

Packages are maintained on both [Github](https://github.com/whitebox-co/walmart-marketplace-api/packages) and
[NPM](https://www.npmjs.com/package/@whitebox-co/walmart-marketplace-api).

```sh
npm install @whitebox-co/walmart-marketplace-api
```

For development assuming all prerequisites are met.

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

### Preferred Usage

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

### Class Based Alternative

```typescript
import { WalmartApi, OrdersApi, defaultParams } from '@whitebox-co/walmart-marketplace-api';

const walmartApi = new WalmartApi({
	clientId,
	clientSecret,
	consumerChannelType,
});

const ordersApi = await walmartApi.getConfiguredApi(OrdersApi);

const exampleOrder = await ordersApi.getAnOrder({
	...defaultParams,
	...customParams,
});
```

### Direct API Usage

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

## Helpers

Some parts of the Walmart REST endpoint require helpers in order to achieve proper usage above what the auto-generated
library provides. These helpers will generally be available in the [util](./src/utils/) folder.

### Request Helpers

`requestHelper` Can be found in the [util](.src/utils/) folder.

```typescript
// getAllRecursively usage
import { getAllRecursively } from '../../../src/util/requestHelpers';

const walmartApi = new WalmartApi(...);
const ordersApi = await walmartApi.getConfiguredApi(...);
const orders = await getAllRecursively(ordersApi, ordersApi.getAllOrders.name);
```

## Docs

There are three different types of documentation included for this repo.

1. **Redoc** - Used as an alternative to visiting the walmart developer site (which is based off of redoc).
2. **SwaggerUI** - Used as an alternative to visiting the walmart sandbox documentation. (which is based of of swaggerui).
3. **TypeDoc** - Typescript type and class documentation of the main library.

Redoc and SwaggerUI are included as an alternative to having to visit Walmart's developer website, which we have
found often times become unresponsive in certain browsers.

### Viewing Docs

We have packaged [http-server](https://github.com/http-party/http-server) as a dev dependency as a way to quickly view the docs. Issue any one of the following commands to build and view any of the docs.

```sh
npm run docs # or `npm run docs:typedoc`
npm run docs:redoc
npm run docs:swaggerui
```

**Note:** `http-server` will try and serve the docs on port `8080` and will auto launch your browser to the
specified documentation.

## Development

### Prerequisites

-   [Java Runtime](https://www.java.com/en/download/manual.jsp) - Necessary to run the openapi-generator
-   [Node](https://nodejs.org/en/) - To install and build the library.
-   [Walmart Marketplace API Experience](https://developer.walmart.com/doc/us/mp/us-mp-intro/) - Helpful to have
    experience with the Walmart Marketplace REST API.

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

## Model Generation

Walmart uses a bunch of JSON Schema files that define how data should be formatted for bulk creations and updates.
These all use JSON schemas specific to each operation. These schemas are available on Walmart's Developer site but we also download and keep them in the `./docs/` directory.

Each schema is generated into types using `quicktype` and saved in their respective `src/model` folders.

### Item Model Generation

Item Models
[(MP_ITEM_MATCH, MP_ITEM, MP_MAINTENANCE, MP_WFS_ITEM)](https://developer.walmart.com/doc/us/us-mp/us-mp-items/#1232)
are saved to the [docs/item-schemas](docs/items-schemas) directory.

These schemas are generated manually using [quicktype](https://github.com/quicktype/quicktype) into the
`src/models/items` directory.

If you wish to generate these for some reason, install `quicktype` globally and issue the following commands:

```sh
quicktype -s schema ./docs/item-schemas/MP_ITEM_MATCH_v4.json -o ./src/models/item/v4/mpItemMatch4.ts
quicktype -s schema ./docs/item-schemas/MP_ITEM_SPEC_4.3.json -o ./src/models/item/v4/mpItem4.3.ts
quicktype -s schema ./docs/item-schemas/MP_MAINTENANCE_SPEC_4.3.json -o ./src/models/item/v4/mpMaintenance4.3.ts
quicktype -s schema ./docs/item-schemas/MP_WFS_ITEM_SPEC_4.2.json -o ./src/models/item/v4/mpWfsItem4.2.ts

quicktype -s schema ./docs/item-schemas/V3-Spec-Marketplace-Items-3.2-JSON/ -o ./src/models/item/v3/mpItems3.2.ts
```

[MP_MAINTENANCE_SPEC_4.3.json](./docs/item-schemas/MP_MAINTENANCE_SPEC_4.3.json) will fail to generate as
is not a complete schema. It is missing at the end of the file. Complain to walmart!

### Inventory Model Generation

Inventory Model
[InventoryJSONSchemaV1](https://developer.walmart.com/doc/us/us-mp/us-mp-inventory/) is saved to the
[docs/inventory-schemas](docs/inventory-schemas) directory.

These schemas are generated manually using [quicktype](https://github.com/quicktype/quicktype) into the
`src/models/inventory` directory.

If you wish to generate these for some reason, install `quicktype` globally and issue the following commands:

```sh
quicktype -s schema ./docs/inventory-schemas/Inventory.json -o ./src/models/inventory/v1/inventory.ts
quicktype -s schema ./docs/inventory-schemas/InventoryFeed.json -o ./src/models/inventory/v1/inventoryFeed.ts
quicktype -s schema ./docs/inventory-schemas/InventoryHeader.json -o ./src/models/inventory/v1/inventoryHeader.ts
quicktype -s schema ./docs/inventory-schemas/WfsInventory.json -o ./src/models/inventory/v1/wfsInventory.ts
```

### Price Model Generation

Price Model
[PriceJSONSchemaV1](https://developer.walmart.com/doc/us/us-mp/us-mp-price/) is saved to the
[docs/price-schemas](docs/price-schemas) directory.

These schemas are generated manually using [quicktype](https://github.com/quicktype/quicktype) into the
`src/models/price` directory.

If you wish to generate these for some reason, install `quicktype` globally and issue the following commands:

```sh
quicktype -s schema ./docs/price-schemas/Price.json -o ./src/models/price/v1/price.ts
quicktype -s schema ./docs/price-schemas/PriceFeed.json -o ./src/models/price/v1/priceFeed.ts
quicktype -s schema ./docs/price-schemas/PriceHeader.json -o ./src/models/price/v1/priceHeader.ts
```

The `Price.json` schema is not able to be used with `quicktype` for typescript generation without modification.

The currency definition:

```json
	"currency": {
		"type": "object",
		"additionalProperties": false,
		"enum": ["USD", "CAD"]
	}
```

should be:

```json
	"currency": {
		"enum": ["USD", "CAD"]
	}
```

This seems like a bug with the schema but will leave that up to Walmart to decide.

We have changed this in our downloaded schema doc but you should be aware if you download the schema from walmart
directly.

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
-   Walmart provides [Item specs](https://developer.walmart.com/doc/us/us-mp/us-mp-items/#1232) in the form of JSON
    Schemas on their Developer Site. Unfortunately, these item schemas are in RTF format. We had to convert them to
    plaintext and back to JSON in order to get typescript generation working.
-   [MP_MAINTENANCE_SPEC_4.3.json](./docs/item-schemas/MP_MAINTENANCE_SPEC_4.3.json) provided from walmart
    is not a complete schema. Upon downloading this file you will notice that a bunch of json is missing at the end of
    the file. For this reason we were not able to generate types for this spec.

## Contributing

Feel free to open PR's. [Whitebox](https://whitebox.com/) is currently using this in our production code and we will
evaluate changes on a case by case basis.

See the [Contributing](CONTRIBUTING.md) documentation for further details.

## Code of Conduct

This project has adopted the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/).

See the [Code Of Conduct](CODE_OF_CONDUCT.md) documentation for further details.

## License

![GitHub](https://img.shields.io/github/license/whitebox-co/walmart-marketplace-api)

A copy of the license is provided in the root directory under [LICENSE](LICENSE)
