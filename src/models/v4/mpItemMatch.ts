/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by quicktype (https://github.com/quicktype/quicktype).
 * Do not edit the class manually.
 */

// To parse this data:
//
//   import { Convert, MpItemMatch } from "./file";
//
//   const mpItemMatch = Convert.toMpItemMatch(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface MpItemMatch {
	$schema: string;
	type: string;
	title: string;
	properties: MpItemMatchProperties;
	required: string[];
	additionalProperties: boolean;
}

export interface MpItemMatchProperties {
	MPItemFeedHeader: MPItemFeedHeader;
	MPItem: MPItem;
}

export interface MPItem {
	$schema: string;
	type: string;
	title: string;
	items: MPItemItems;
	minItems: number;
}

export interface MPItemItems {
	$schema: string;
	type: string;
	properties: PurpleProperties;
	required: string[];
	additionalProperties: boolean;
}

export interface PurpleProperties {
	Item: Item;
}

export interface Item {
	$schema: string;
	type: string;
	properties: ItemProperties;
	required: string[];
	additionalProperties: boolean;
}

export interface ItemProperties {
	sku: RequestBatchID;
	productIdentifiers: ProductIdentifiers;
	price: ShippingWeight;
	ShippingWeight: ShippingWeight;
	productCategory: Mart;
	asin: RequestBatchID;
	additionalProductAttributes: AdditionalProductAttributes;
	additionalOfferAttributes: AdditionalOfferAttributes;
}

export interface ShippingWeight {
	type: string;
	title: string;
	minimum: number;
	maximum: number;
	exclusiveMaximum: boolean;
	multipleOf: number;
}

export interface AdditionalOfferAttributes {
	$schema: string;
	type: string;
	title: string;
	items: AdditionalOfferAttributesItems;
	minItems: number;
}

export interface AdditionalOfferAttributesItems {
	$schema: string;
	type: string;
	properties: FluffyProperties;
	required: string[];
	additionalProperties: boolean;
}

export interface FluffyProperties {
	additionalOfferAttributeName: RequestBatchID;
	additionalOfferAttributeValue: RequestBatchID;
}

export interface RequestBatchID {
	type: Type;
	title: string;
	minLength: number;
	maxLength: number;
}

export enum Type {
	String = 'string',
}

export interface AdditionalProductAttributes {
	$schema: string;
	type: string;
	title: string;
	items: AdditionalProductAttributesItems;
	minItems: number;
}

export interface AdditionalProductAttributesItems {
	$schema: string;
	type: string;
	properties: TentacledProperties;
	required: string[];
	additionalProperties: boolean;
}

export interface TentacledProperties {
	productAttributeName: RequestBatchID;
	productAttributeValue: RequestBatchID;
}

export interface Mart {
	type: Type;
	title: string;
	enum: string[];
}

export interface ProductIdentifiers {
	$schema: string;
	type: string;
	properties: ProductIdentifiersProperties;
	required: string[];
	additionalProperties: boolean;
}

export interface ProductIdentifiersProperties {
	productIdType: Mart;
	productId: RequestBatchID;
}

export interface MPItemFeedHeader {
	$schema: string;
	type: string;
	properties: MPItemFeedHeaderProperties;
	required: string[];
	additionalProperties: boolean;
}

export interface MPItemFeedHeaderProperties {
	requestId: RequestBatchID;
	requestBatchId: RequestBatchID;
	feedDate: FeedDate;
	processMode: Mart;
	subset: RequestBatchID;
	Mart: Mart;
	sellingChannel: Mart;
	version: Mart;
	locale: Mart;
}

export interface FeedDate {
	type: Type;
	title: string;
	format: string;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
	public static toMpItemMatch(json: string): MpItemMatch {
		return cast(JSON.parse(json), r('MpItemMatch'));
	}

	public static mpItemMatchToJson(value: MpItemMatch): string {
		return JSON.stringify(uncast(value, r('MpItemMatch')), null, 2);
	}
}

function invalidValue(typ: any, val: any, key: any = ''): never {
	if (key) {
		throw Error(
			`Invalid value for key "${key}". Expected type ${JSON.stringify(typ)} but got ${JSON.stringify(val)}`
		);
	}
	throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`);
}

function jsonToJSProps(typ: any): any {
	if (typ.jsonToJS === undefined) {
		const map: any = {};
		typ.props.forEach((p: any) => (map[p.json] = { key: p.js, typ: p.typ }));
		typ.jsonToJS = map;
	}
	return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
	if (typ.jsToJSON === undefined) {
		const map: any = {};
		typ.props.forEach((p: any) => (map[p.js] = { key: p.json, typ: p.typ }));
		typ.jsToJSON = map;
	}
	return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = ''): any {
	function transformPrimitive(typ: string, val: any): any {
		if (typeof typ === typeof val) return val;
		return invalidValue(typ, val, key);
	}

	function transformUnion(typs: any[], val: any): any {
		// val must validate against one typ in typs
		const l = typs.length;
		for (let i = 0; i < l; i++) {
			const typ = typs[i];
			try {
				return transform(val, typ, getProps);
			} catch (_) {}
		}
		return invalidValue(typs, val);
	}

	function transformEnum(cases: string[], val: any): any {
		if (cases.indexOf(val) !== -1) return val;
		return invalidValue(cases, val);
	}

	function transformArray(typ: any, val: any): any {
		// val must be an array with no invalid elements
		if (!Array.isArray(val)) return invalidValue('array', val);
		return val.map((el) => transform(el, typ, getProps));
	}

	function transformDate(val: any): any {
		if (val === null) {
			return null;
		}
		const d = new Date(val);
		if (isNaN(d.valueOf())) {
			return invalidValue('Date', val);
		}
		return d;
	}

	function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
		if (val === null || typeof val !== 'object' || Array.isArray(val)) {
			return invalidValue('object', val);
		}
		const result: any = {};
		Object.getOwnPropertyNames(props).forEach((key) => {
			const prop = props[key];
			const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
			result[prop.key] = transform(v, prop.typ, getProps, prop.key);
		});
		Object.getOwnPropertyNames(val).forEach((key) => {
			if (!Object.prototype.hasOwnProperty.call(props, key)) {
				result[key] = transform(val[key], additional, getProps, key);
			}
		});
		return result;
	}

	if (typ === 'any') return val;
	if (typ === null) {
		if (val === null) return val;
		return invalidValue(typ, val);
	}
	if (typ === false) return invalidValue(typ, val);
	while (typeof typ === 'object' && typ.ref !== undefined) {
		typ = typeMap[typ.ref];
	}
	if (Array.isArray(typ)) return transformEnum(typ, val);
	if (typeof typ === 'object') {
		return typ.hasOwnProperty('unionMembers')
			? transformUnion(typ.unionMembers, val)
			: typ.hasOwnProperty('arrayItems')
			? transformArray(typ.arrayItems, val)
			: typ.hasOwnProperty('props')
			? transformObject(getProps(typ), typ.additional, val)
			: invalidValue(typ, val);
	}
	// Numbers can be parsed by Date but shouldn't be.
	if (typ === Date && typeof val !== 'number') return transformDate(val);
	return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
	return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
	return transform(val, typ, jsToJSONProps);
}

function a(typ: any) {
	return { arrayItems: typ };
}

function u(...typs: any[]) {
	return { unionMembers: typs };
}

function o(props: any[], additional: any) {
	return { props, additional };
}

function m(additional: any) {
	return { props: [], additional };
}

function r(name: string) {
	return { ref: name };
}

const typeMap: any = {
	MpItemMatch: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: '' },
			{ json: 'title', js: 'title', typ: '' },
			{ json: 'properties', js: 'properties', typ: r('MpItemMatchProperties') },
			{ json: 'required', js: 'required', typ: a('') },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	MpItemMatchProperties: o(
		[
			{ json: 'MPItemFeedHeader', js: 'MPItemFeedHeader', typ: r('MPItemFeedHeader') },
			{ json: 'MPItem', js: 'MPItem', typ: r('MPItem') },
		],
		false
	),
	MPItem: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: '' },
			{ json: 'title', js: 'title', typ: '' },
			{ json: 'items', js: 'items', typ: r('MPItemItems') },
			{ json: 'minItems', js: 'minItems', typ: 0 },
		],
		false
	),
	MPItemItems: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: '' },
			{ json: 'properties', js: 'properties', typ: r('PurpleProperties') },
			{ json: 'required', js: 'required', typ: a('') },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	PurpleProperties: o([{ json: 'Item', js: 'Item', typ: r('Item') }], false),
	Item: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: '' },
			{ json: 'properties', js: 'properties', typ: r('ItemProperties') },
			{ json: 'required', js: 'required', typ: a('') },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	ItemProperties: o(
		[
			{ json: 'sku', js: 'sku', typ: r('RequestBatchID') },
			{ json: 'productIdentifiers', js: 'productIdentifiers', typ: r('ProductIdentifiers') },
			{ json: 'price', js: 'price', typ: r('ShippingWeight') },
			{ json: 'ShippingWeight', js: 'ShippingWeight', typ: r('ShippingWeight') },
			{ json: 'productCategory', js: 'productCategory', typ: r('Mart') },
			{ json: 'asin', js: 'asin', typ: r('RequestBatchID') },
			{
				json: 'additionalProductAttributes',
				js: 'additionalProductAttributes',
				typ: r('AdditionalProductAttributes'),
			},
			{ json: 'additionalOfferAttributes', js: 'additionalOfferAttributes', typ: r('AdditionalOfferAttributes') },
		],
		false
	),
	ShippingWeight: o(
		[
			{ json: 'type', js: 'type', typ: '' },
			{ json: 'title', js: 'title', typ: '' },
			{ json: 'minimum', js: 'minimum', typ: 0 },
			{ json: 'maximum', js: 'maximum', typ: 0 },
			{ json: 'exclusiveMaximum', js: 'exclusiveMaximum', typ: true },
			{ json: 'multipleOf', js: 'multipleOf', typ: 3.14 },
		],
		false
	),
	AdditionalOfferAttributes: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: '' },
			{ json: 'title', js: 'title', typ: '' },
			{ json: 'items', js: 'items', typ: r('AdditionalOfferAttributesItems') },
			{ json: 'minItems', js: 'minItems', typ: 0 },
		],
		false
	),
	AdditionalOfferAttributesItems: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: '' },
			{ json: 'properties', js: 'properties', typ: r('FluffyProperties') },
			{ json: 'required', js: 'required', typ: a('') },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	FluffyProperties: o(
		[
			{ json: 'additionalOfferAttributeName', js: 'additionalOfferAttributeName', typ: r('RequestBatchID') },
			{ json: 'additionalOfferAttributeValue', js: 'additionalOfferAttributeValue', typ: r('RequestBatchID') },
		],
		false
	),
	RequestBatchID: o(
		[
			{ json: 'type', js: 'type', typ: r('Type') },
			{ json: 'title', js: 'title', typ: '' },
			{ json: 'minLength', js: 'minLength', typ: 0 },
			{ json: 'maxLength', js: 'maxLength', typ: 0 },
		],
		false
	),
	AdditionalProductAttributes: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: '' },
			{ json: 'title', js: 'title', typ: '' },
			{ json: 'items', js: 'items', typ: r('AdditionalProductAttributesItems') },
			{ json: 'minItems', js: 'minItems', typ: 0 },
		],
		false
	),
	AdditionalProductAttributesItems: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: '' },
			{ json: 'properties', js: 'properties', typ: r('TentacledProperties') },
			{ json: 'required', js: 'required', typ: a('') },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	TentacledProperties: o(
		[
			{ json: 'productAttributeName', js: 'productAttributeName', typ: r('RequestBatchID') },
			{ json: 'productAttributeValue', js: 'productAttributeValue', typ: r('RequestBatchID') },
		],
		false
	),
	Mart: o(
		[
			{ json: 'type', js: 'type', typ: r('Type') },
			{ json: 'title', js: 'title', typ: '' },
			{ json: 'enum', js: 'enum', typ: a('') },
		],
		false
	),
	ProductIdentifiers: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: '' },
			{ json: 'properties', js: 'properties', typ: r('ProductIdentifiersProperties') },
			{ json: 'required', js: 'required', typ: a('') },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	ProductIdentifiersProperties: o(
		[
			{ json: 'productIdType', js: 'productIdType', typ: r('Mart') },
			{ json: 'productId', js: 'productId', typ: r('RequestBatchID') },
		],
		false
	),
	MPItemFeedHeader: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: '' },
			{ json: 'properties', js: 'properties', typ: r('MPItemFeedHeaderProperties') },
			{ json: 'required', js: 'required', typ: a('') },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	MPItemFeedHeaderProperties: o(
		[
			{ json: 'requestId', js: 'requestId', typ: r('RequestBatchID') },
			{ json: 'requestBatchId', js: 'requestBatchId', typ: r('RequestBatchID') },
			{ json: 'feedDate', js: 'feedDate', typ: r('FeedDate') },
			{ json: 'processMode', js: 'processMode', typ: r('Mart') },
			{ json: 'subset', js: 'subset', typ: r('RequestBatchID') },
			{ json: 'Mart', js: 'Mart', typ: r('Mart') },
			{ json: 'sellingChannel', js: 'sellingChannel', typ: r('Mart') },
			{ json: 'version', js: 'version', typ: r('Mart') },
			{ json: 'locale', js: 'locale', typ: r('Mart') },
		],
		false
	),
	FeedDate: o(
		[
			{ json: 'type', js: 'type', typ: r('Type') },
			{ json: 'title', js: 'title', typ: '' },
			{ json: 'format', js: 'format', typ: '' },
		],
		false
	),
	Type: ['string'],
};