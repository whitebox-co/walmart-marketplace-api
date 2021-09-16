/* tslint:disable */
/* eslint-disable */

// To parse this data:
//
//   import { Convert, MpItemMatch4 } from "./file";
//
//   const mpItemMatch4 = Convert.toMpItemMatch4(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface MpItemMatch4 {
	MPItem: MPItem[];
	MPItemFeedHeader: MPItemFeedHeader;
}

export interface MPItem {
	Item: Item;
}

export interface Item {
	additionalOfferAttributes?: AdditionalOfferAttribute[];
	additionalProductAttributes?: AdditionalProductAttribute[];
	asin?: string;
	price: number;
	productCategory?: ProductCategory;
	productIdentifiers: ProductIdentifiers;
	ShippingWeight: number;
	sku: string;
}

export interface AdditionalOfferAttribute {
	additionalOfferAttributeName: string;
	additionalOfferAttributeValue: string;
}

export interface AdditionalProductAttribute {
	productAttributeName: string;
	productAttributeValue: string;
}

export enum ProductCategory {
	AnimalAccessories = 'Animal Accessories',
	AnimalFood = 'Animal Food',
	AnimalHealthGrooming = 'Animal Health & Grooming',
	AnimalOther = 'Animal Other',
	ArtCraft = 'Art & Craft',
	BabyClothing = 'Baby Clothing',
	BabyDiaperingCareOther = 'Baby Diapering, Care, & Other',
	BabyFood = 'Baby Food',
	BabyFurniture = 'Baby Furniture',
	BabyToys = 'Baby Toys',
	BabyTransport = 'Baby Transport',
	BeautyPersonalCareHygiene = 'Beauty, Personal Care, & Hygiene',
	Bedding = 'Bedding',
	BooksMagazines = 'Books & Magazines',
	BuildingSupply = 'Building Supply',
	CamerasLenses = 'Cameras & Lenses',
	CarriersAccessories = 'Carriers & Accessories',
	CasesBags = 'Cases & Bags',
	CeremonialClothingAccessories = 'Ceremonial Clothing & Accessories',
	Clothing = 'Clothing',
	ComputerComponents = 'Computer Components',
	Computers = 'Computers',
	Costumes = 'Costumes',
	Cycling = 'Cycling',
	DecorationsFavors = 'Decorations & Favors',
	Electrical = 'Electrical',
	ElectronicsAccessories = 'Electronics Accessories',
	ElectronicsCables = 'Electronics Cables',
	ElectronicsOther = 'Electronics Other',
	FoodBeverage = 'Food & Beverage',
	Footwear = 'Footwear',
	FuelsLubricants = 'Fuels & Lubricants',
	Funeral = 'Funeral',
	Furniture = 'Furniture',
	GardenPatio = 'Garden & Patio',
	GiftSupplyAwards = 'Gift Supply & Awards',
	GrillsOutdoorCooking = 'Grills & Outdoor Cooking',
	Hardware = 'Hardware',
	HealthBeautyElectronics = 'Health & Beauty Electronics',
	HomeDecorKitchenOther = 'Home Decor, Kitchen, & Other',
	HouseholdCleaningProductsSupplies = 'Household Cleaning Products & Supplies',
	InstrumentAccessories = 'Instrument Accessories',
	Jewelry = 'Jewelry',
	LandVehicles = 'Land Vehicles',
	LargeAppliances = 'Large Appliances',
	MedicalAidsEquipment = 'Medical Aids & Equipment',
	MedicineSupplements = 'Medicine & Supplements',
	Movies = 'Movies',
	Music = 'Music',
	MusicCasesBags = 'Music Cases & Bags',
	MusicalInstruments = 'Musical Instruments',
	Office = 'Office',
	Optical = 'Optical',
	Optics = 'Optics',
	Other = 'Other',
	PhotoAccessories = 'Photo Accessories',
	PlumbingHVAC = 'Plumbing & HVAC',
	PrintersScannersImaging = 'Printers, Scanners, & Imaging',
	SafetyEmergency = 'Safety & Emergency',
	Software = 'Software',
	SoundRecording = 'Sound & Recording',
	SportsRecreationOther = 'Sports & Recreation Other',
	Storage = 'Storage',
	TVShows = 'TV Shows',
	TVsVideoDisplays = 'TVs & Video Displays',
	Tires = 'Tires',
	Tools = 'Tools',
	ToolsHardwareOther = 'Tools & Hardware Other',
	Toys = 'Toys',
	VehicleOther = 'Vehicle Other',
	VehiclePartsAccessories = 'Vehicle Parts & Accessories',
	VideoGames = 'Video Games',
	VideoProjectors = 'Video Projectors',
	Watches = 'Watches',
	Watercraft = 'Watercraft',
	WheelsWheelComponents = 'Wheels & Wheel Components',
}

export interface ProductIdentifiers {
	productId: string;
	productIdType: ProductIDType;
}

export enum ProductIDType {
	Ean = 'EAN',
	Gtin = 'GTIN',
	Isbn = 'ISBN',
	Upc = 'UPC',
}

export interface MPItemFeedHeader {
	feedDate?: Date;
	locale: Locale;
	Mart?: Mart;
	processMode?: ProcessMode;
	requestBatchId?: string;
	requestId?: string;
	sellingChannel: SellingChannel;
	subset?: string;
	version: SpecVersion;
}

export enum Mart {
	AsdaGm = 'ASDA_GM',
	WalmartCA = 'WALMART_CA',
	WalmartUs = 'WALMART_US',
}

export enum Locale {
	En = 'en',
}

export enum ProcessMode {
	Merge = 'MERGE',
	Replace = 'REPLACE',
}

export enum SellingChannel {
	Mpsetupbymatch = 'mpsetupbymatch',
}

export enum SpecVersion {
	The10 = '1.0',
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
	public static toMpItemMatch4(json: string): MpItemMatch4 {
		return cast(JSON.parse(json), r('MpItemMatch4'));
	}

	public static mpItemMatch4ToJson(value: MpItemMatch4): string {
		return JSON.stringify(uncast(value, r('MpItemMatch4')), null, 2);
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
	MpItemMatch4: o(
		[
			{ json: 'MPItem', js: 'MPItem', typ: a(r('MPItem')) },
			{ json: 'MPItemFeedHeader', js: 'MPItemFeedHeader', typ: r('MPItemFeedHeader') },
		],
		false
	),
	MPItem: o([{ json: 'Item', js: 'Item', typ: r('Item') }], false),
	Item: o(
		[
			{
				json: 'additionalOfferAttributes',
				js: 'additionalOfferAttributes',
				typ: u(undefined, a(r('AdditionalOfferAttribute'))),
			},
			{
				json: 'additionalProductAttributes',
				js: 'additionalProductAttributes',
				typ: u(undefined, a(r('AdditionalProductAttribute'))),
			},
			{ json: 'asin', js: 'asin', typ: u(undefined, '') },
			{ json: 'price', js: 'price', typ: 3.14 },
			{ json: 'productCategory', js: 'productCategory', typ: u(undefined, r('ProductCategory')) },
			{ json: 'productIdentifiers', js: 'productIdentifiers', typ: r('ProductIdentifiers') },
			{ json: 'ShippingWeight', js: 'ShippingWeight', typ: 3.14 },
			{ json: 'sku', js: 'sku', typ: '' },
		],
		false
	),
	AdditionalOfferAttribute: o(
		[
			{ json: 'additionalOfferAttributeName', js: 'additionalOfferAttributeName', typ: '' },
			{ json: 'additionalOfferAttributeValue', js: 'additionalOfferAttributeValue', typ: '' },
		],
		false
	),
	AdditionalProductAttribute: o(
		[
			{ json: 'productAttributeName', js: 'productAttributeName', typ: '' },
			{ json: 'productAttributeValue', js: 'productAttributeValue', typ: '' },
		],
		false
	),
	ProductIdentifiers: o(
		[
			{ json: 'productId', js: 'productId', typ: '' },
			{ json: 'productIdType', js: 'productIdType', typ: r('ProductIDType') },
		],
		false
	),
	MPItemFeedHeader: o(
		[
			{ json: 'feedDate', js: 'feedDate', typ: u(undefined, Date) },
			{ json: 'locale', js: 'locale', typ: r('Locale') },
			{ json: 'Mart', js: 'Mart', typ: u(undefined, r('Mart')) },
			{ json: 'processMode', js: 'processMode', typ: u(undefined, r('ProcessMode')) },
			{ json: 'requestBatchId', js: 'requestBatchId', typ: u(undefined, '') },
			{ json: 'requestId', js: 'requestId', typ: u(undefined, '') },
			{ json: 'sellingChannel', js: 'sellingChannel', typ: r('SellingChannel') },
			{ json: 'subset', js: 'subset', typ: u(undefined, '') },
			{ json: 'version', js: 'version', typ: r('SpecVersion') },
		],
		false
	),
	ProductCategory: [
		'Animal Accessories',
		'Animal Food',
		'Animal Health & Grooming',
		'Animal Other',
		'Art & Craft',
		'Baby Clothing',
		'Baby Diapering, Care, & Other',
		'Baby Food',
		'Baby Furniture',
		'Baby Toys',
		'Baby Transport',
		'Beauty, Personal Care, & Hygiene',
		'Bedding',
		'Books & Magazines',
		'Building Supply',
		'Cameras & Lenses',
		'Carriers & Accessories',
		'Cases & Bags',
		'Ceremonial Clothing & Accessories',
		'Clothing',
		'Computer Components',
		'Computers',
		'Costumes',
		'Cycling',
		'Decorations & Favors',
		'Electrical',
		'Electronics Accessories',
		'Electronics Cables',
		'Electronics Other',
		'Food & Beverage',
		'Footwear',
		'Fuels & Lubricants',
		'Funeral',
		'Furniture',
		'Garden & Patio',
		'Gift Supply & Awards',
		'Grills & Outdoor Cooking',
		'Hardware',
		'Health & Beauty Electronics',
		'Home Decor, Kitchen, & Other',
		'Household Cleaning Products & Supplies',
		'Instrument Accessories',
		'Jewelry',
		'Land Vehicles',
		'Large Appliances',
		'Medical Aids & Equipment',
		'Medicine & Supplements',
		'Movies',
		'Music',
		'Music Cases & Bags',
		'Musical Instruments',
		'Office',
		'Optical',
		'Optics',
		'Other',
		'Photo Accessories',
		'Plumbing & HVAC',
		'Printers, Scanners, & Imaging',
		'Safety & Emergency',
		'Software',
		'Sound & Recording',
		'Sports & Recreation Other',
		'Storage',
		'TV Shows',
		'TVs & Video Displays',
		'Tires',
		'Tools',
		'Tools & Hardware Other',
		'Toys',
		'Vehicle Other',
		'Vehicle Parts & Accessories',
		'Video Games',
		'Video Projectors',
		'Watches',
		'Watercraft',
		'Wheels & Wheel Components',
	],
	ProductIDType: ['EAN', 'GTIN', 'ISBN', 'UPC'],
	Mart: ['ASDA_GM', 'WALMART_CA', 'WALMART_US'],
	Locale: ['en'],
	ProcessMode: ['MERGE', 'REPLACE'],
	SellingChannel: ['mpsetupbymatch'],
	SpecVersion: ['1.0'],
};
