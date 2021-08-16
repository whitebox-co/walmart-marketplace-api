# Walmart Marketplace API SDK

A fully typed and auto generated TypeScript and Node.js API library for the Walmart Marketplace API

_**This library is not yet ready for production and is still in development stages. Feel free to open PR's to address
any outstanding issues.**_

## Why?

Because Walmart does not provide an easy way to download swagger/openapi docs to generate projects, nor do they provide
a Typescript Library to access their endpoints.

## How it works

-   An OpenAPI schema is downloaded from Walmart for each section of a the Walmart Marketplace API.
-   Models are generated based off of each api using openapi generator.
-   Clients are generated based off of each api and the models using custom typescript generators.
-   Documentation is generated or updated based on the latest openapi schemas.

## Installation

Note: We will eventually have builds automated, tagged properly, and published to npm. Until that point only local
installs will work.

```sh
npm install
```

## Usage

```typescript
// See Library and API Docs for parameter specifics.
const configuration = new Configuration(configurationParameters);
const ordersApi = new OrdersApi(configuration);
const exampleOrder = await ordersApi.getAnOrder(orderParameters);
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
