import { v4 as uuidv4 } from 'uuid';

import {
	FeedsApi,
	FulfillmentApi,
	InsightApi,
	InventoryApi,
	ItemsApi,
	LagTimeApi,
	NotificationsApi,
	OnRequestReportApi,
	OrdersApi,
	PricesApi,
	PromotionsApi,
	ReportsApi,
	ReturnsRefundsApi,
	RulesApi,
	SettingsApi,
	UtilitiesApi,
} from './apis';

export declare type WalmartMarketplaceApi =
	| FeedsApi
	| FulfillmentApi
	| InsightApi
	| InventoryApi
	| ItemsApi
	| LagTimeApi
	| NotificationsApi
	| OnRequestReportApi
	| OrdersApi
	| PricesApi
	| PromotionsApi
	| ReportsApi
	| ReportsApi
	| ReturnsRefundsApi
	| RulesApi
	| SettingsApi
	| UtilitiesApi;

export interface Schema {
	name: string;
	apiName: string;
}

/**
 * The version value is automatically replaced during builds.
 */
export const USER_AGENT = '@whitebox-co/walmart-marketplace-api/0.0.0';
export const PRODUCTION_API_BASE_PATH = 'https://marketplace.walmartapis.com';
export const SANDBOX_API_BASE_PATH = 'https://sandbox.walmartapis.com';

export const SCHEMAS: Schema[] = [
	{ name: 'Authentication', apiName: 'auth' },
	{ name: 'Feeds', apiName: 'feeds' },
	{ name: 'Items', apiName: 'items' },
	{ name: 'Prices', apiName: 'price' },
	{ name: 'Promotions', apiName: 'promotion' },
	{ name: 'Orders', apiName: 'orders' },
	{ name: 'Returns', apiName: 'returns' },
	{ name: 'Inventory', apiName: 'inventory' },
	{ name: 'Lag Time', apiName: 'lagtime' },
	{ name: 'Settings', apiName: 'settings' },
	{ name: 'Rules', apiName: 'rules' },
	{ name: 'Reports', apiName: 'reports' },
	{ name: 'On-Request Reports', apiName: 'onrequestreports' },
	{ name: 'Walmart Fulfillment Services', apiName: 'fulfillment' },
	{ name: 'Notifications', apiName: 'notifications' },
	{ name: 'Utilities', apiName: 'utilities' },
	{ name: 'Insights', apiName: 'insights' },
];

export const defaultParams = {
	authorization: '',
	wMSECACCESSTOKEN: '',
	wMQOSCORRELATIONID: uuidv4(),
	wMSVCNAME: '@whitebox-co/walmart-marketplace-api',
	wMCONSUMERCHANNELTYPE: '',
};
