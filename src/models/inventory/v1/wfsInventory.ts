/* tslint:disable */
/* eslint-disable */

// To parse this data:
//
//   import { Convert, WfsInventory } from "./file";
//
//   const wfsInventory = Convert.toWfsInventory(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

/**
 * The root schema comprises the entire JSON document.
 */
export interface WfsInventory {
	/**
	 * An explanation about the purpose of this instance.
	 */
	headers: TheHeadersSchema;
	/**
	 * An explanation about the purpose of this instance.
	 */
	payload: ThePayloadSchema;
}

/**
 * An explanation about the purpose of this instance.
 */
export interface TheHeadersSchema {
	/**
	 * An explanation about the purpose of this instance.
	 */
	limit: number;
	/**
	 * An explanation about the purpose of this instance.
	 */
	offset: number;
	/**
	 * An explanation about the purpose of this instance.
	 */
	totalCount: number;
}

/**
 * An explanation about the purpose of this instance.
 */
export interface ThePayloadSchema {
	/**
	 * An explanation about the purpose of this instance.
	 */
	inventory: InventoryElement[];
}

/**
 * An explanation about the purpose of this instance.
 */
export interface InventoryElement {
	/**
	 * An explanation about the purpose of this instance.
	 */
	shipNodes: ShipNodeElement[];
	/**
	 * An explanation about the purpose of this instance.
	 */
	sku: string;
}

/**
 * An explanation about the purpose of this instance.
 */
export interface ShipNodeElement {
	/**
	 * An explanation about the purpose of this instance.
	 */
	availToSellQty: number;
	/**
	 * An explanation about the purpose of this instance.
	 */
	modifiedDate: string;
	/**
	 * An explanation about the purpose of this instance.
	 */
	onHandQty: number;
	/**
	 * An explanation about the purpose of this instance.
	 */
	shipNodeType: string;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
	public static toWfsInventory(json: string): WfsInventory {
		return cast(JSON.parse(json), r('WfsInventory'));
	}

	public static wfsInventoryToJson(value: WfsInventory): string {
		return JSON.stringify(uncast(value, r('WfsInventory')), null, 2);
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
	WfsInventory: o(
		[
			{ json: 'headers', js: 'headers', typ: r('TheHeadersSchema') },
			{ json: 'payload', js: 'payload', typ: r('ThePayloadSchema') },
		],
		'any'
	),
	TheHeadersSchema: o(
		[
			{ json: 'limit', js: 'limit', typ: 0 },
			{ json: 'offset', js: 'offset', typ: 0 },
			{ json: 'totalCount', js: 'totalCount', typ: 0 },
		],
		'any'
	),
	ThePayloadSchema: o([{ json: 'inventory', js: 'inventory', typ: a(r('InventoryElement')) }], 'any'),
	InventoryElement: o(
		[
			{ json: 'shipNodes', js: 'shipNodes', typ: a(r('ShipNodeElement')) },
			{ json: 'sku', js: 'sku', typ: '' },
		],
		'any'
	),
	ShipNodeElement: o(
		[
			{ json: 'availToSellQty', js: 'availToSellQty', typ: 0 },
			{ json: 'modifiedDate', js: 'modifiedDate', typ: '' },
			{ json: 'onHandQty', js: 'onHandQty', typ: 0 },
			{ json: 'shipNodeType', js: 'shipNodeType', typ: '' },
		],
		'any'
	),
};
