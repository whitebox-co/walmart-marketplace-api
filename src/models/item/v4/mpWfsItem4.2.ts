/* tslint:disable */
/* eslint-disable */

// To parse this data:
//
//   import { Convert, MpWfsItem42 } from "./file";
//
//   const mpWfsItem42 = Convert.toMpWfsItem42(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface MpWfsItem42 {
	MPItem: MPItem[];
	MPItemFeedHeader: MPItemFeedHeader;
}

export interface MPItem {
	Orderable: Orderable;
	TradeItem: TradeItem;
	Visible: Visible;
}

export interface Orderable {
	batterySize?: string;
	batteryTechnologyType: ContainedBatteryType;
	brand: string;
	chemicalAerosolPesticide: MustShipAlone;
	electronicsIndicator: MustShipAlone;
	endDate?: Date;
	hasBatteries?: MustShipAlone;
	lithiumIonBatteries?: LithiumIonBatteries;
	lithiumMetalBatteries?: LithiumMetalBatteries;
	MustShipAlone?: MustShipAlone;
	netContent?: NetContent;
	numberOfHazardousComponents?: number;
	price: number;
	productIdentifiers: ProductIdentifiers;
	productName: string;
	safetyDataSheet?: string[];
	shipsInOriginalPackaging?: MustShipAlone;
	sku: string;
	SkuUpdate?: MustShipAlone;
	startDate?: Date;
	stateRestrictions: SaleRestriction[];
}

export enum MustShipAlone {
	No = 'No',
	Yes = 'Yes',
}

export enum ContainedBatteryType {
	Alkaline = 'Alkaline',
	CarbonZinc = 'Carbon Zinc',
	DoesNotContainABattery = 'Does Not Contain a Battery',
	LeadAcid = 'Lead Acid',
	LeadAcidNonSpillable = 'Lead Acid (Non-Spillable)',
	LithiumIon = 'Lithium Ion',
	LithiumPrimaryLithiumMetal = 'Lithium Primary (Lithium Metal)',
	Magnesium = 'Magnesium',
	Mercury = 'Mercury',
	MultipleTypes = 'Multiple Types',
	NickelCadmium = 'Nickel Cadmium',
	NickelMetalHydride = 'Nickel Metal Hydride',
	Other = 'Other',
	Silver = 'Silver',
	Thermal = 'Thermal',
}

export interface LithiumIonBatteries {
	batteryFormFactor: BatteryFormFactor;
	batteryModel: string;
	batteryWattHour: number;
	batteryWeight: number;
	includedBatteryPackaging: IncludedBatteryPackaging;
	numberOfBatteries: number;
	numberOfBatteryCells: number;
}

export enum BatteryFormFactor {
	Battery = 'Battery',
	ButtonCell = 'Button Cell',
	Cell = 'Cell',
}

export enum IncludedBatteryPackaging {
	ContainedIn = 'Contained In',
	Loose = 'Loose',
	PackedWith = 'Packed With',
}

export interface LithiumMetalBatteries {
	batteryFormFactor: BatteryFormFactor;
	batteryModel: string;
	batteryWeight: number;
	includedBatteryPackaging: IncludedBatteryPackaging;
	lithiumMetalContentWeight: number;
	numberOfBatteries: number;
	numberOfBatteryCells: number;
}

export interface NetContent {
	productNetContentMeasure?: number;
	productNetContentUnit?: ProductNetContentUnitEnum;
}

export enum ProductNetContentUnitEnum {
	Case = 'Case',
	Centiliter = 'Centiliter',
	Centimeter = 'Centimeter',
	CubicFoot = 'Cubic Foot',
	Each = 'Each',
	FluidOunces = 'Fluid Ounces',
	Foot = 'Foot',
	Gallon = 'Gallon',
	Gram = 'Gram',
	Inch = 'Inch',
	Kilogram = 'Kilogram',
	Liter = 'Liter',
	Meter = 'Meter',
	Milliliter = 'Milliliter',
	Ounce = 'Ounce',
	PalletUnitLoad = 'Pallet/Unit Load',
	Pint = 'Pint',
	Pound = 'Pound',
	Quart = 'Quart',
	QuartDry = 'Quart Dry',
	SquareFoot = 'Square Foot',
	Yard = 'Yard',
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

export interface SaleRestriction {
	stateRestrictionsText: RestrictionType;
	states?: string;
	zipCodes?: string;
}

export enum RestrictionType {
	Commercial = 'Commercial',
	IllegalForSale = 'Illegal for Sale',
	None = 'None',
}

export interface TradeItem {
	case?: Case;
	countryOfOriginAssembly: CountryOfOrigin[];
	each?: Each;
	innerPack?: InnerPack;
	orderableGTIN: string;
	pallet?: Pallet;
	sku: string;
}

export interface Case {
	caseDepth: number;
	caseGTIN: string;
	caseHeight: number;
	caseWeight: number;
	caseWidth: number;
	qtySellableItemsCase: number;
}

export enum CountryOfOrigin {
	ADAndorra = 'AD - Andorra',
	AEUnitedArabEmirates = 'AE - United Arab Emirates',
	AFAfghanistan = 'AF - Afghanistan',
	AGAntiguaAndBarbuda = 'AG - Antigua and Barbuda',
	AIAnguilla = 'AI - Anguilla',
	ALAlbania = 'AL - Albania',
	AMArmenia = 'AM - Armenia',
	ANNetherlandsAntilles = 'AN - Netherlands Antilles',
	AOAngola = 'AO - Angola',
	AQAntarctica = 'AQ - Antarctica',
	ARArgentina = 'AR - Argentina',
	ASAmericanSamoa = 'AS - American Samoa',
	ATAustria = 'AT - Austria',
	AUAustralia = 'AU - Australia',
	AWAruba = 'AW - Aruba',
	AXAlandIslands = 'AX - Aland Islands',
	AZAzerbaijan = 'AZ - Azerbaijan',
	BABosniaAndHerzegovina = 'BA - Bosnia and Herzegovina',
	BBBarbados = 'BB - Barbados',
	BDBangladesh = 'BD - Bangladesh',
	BEBelgium = 'BE - Belgium',
	BFBurkinaFaso = 'BF - Burkina Faso',
	BGBulgaria = 'BG - Bulgaria',
	BHBahrain = 'BH - Bahrain',
	BIBurundi = 'BI - Burundi',
	BJBenin = 'BJ - Benin',
	BMBermuda = 'BM - Bermuda',
	BNBruneiDarussalam = 'BN - Brunei Darussalam',
	BOBolivia = 'BO - Bolivia',
	BRBrazil = 'BR - Brazil',
	BSBahamas = 'BS - Bahamas',
	BTBhutan = 'BT - Bhutan',
	BVBouvetIsland = 'BV - Bouvet Island',
	BWBotswana = 'BW - Botswana',
	BYBelarus = 'BY - Belarus',
	BZBelize = 'BZ - Belize',
	CACanada = 'CA - Canada',
	CCCocosKeelingIslands = 'CC - Cocos (Keeling) Islands',
	CDRepublicOfCongo = 'CD - Republic of Congo',
	CFCentralAfricanRepublic = 'CF - Central African Republic',
	CGCongo = 'CG - Congo',
	CHSwitzerland = 'CH - Switzerland',
	CICoteDIvoire = 'CI - Cote d Ivoire',
	CKCookIslands = 'CK - Cook Islands',
	CLChile = 'CL - Chile',
	CMCameroon = 'CM - Cameroon',
	CNChina = 'CN - China',
	COColombia = 'CO - Colombia',
	CRCostaRica = 'CR - Costa Rica',
	CSSerbiaAndMontenegro = 'CS - Serbia and Montenegro',
	CUCuba = 'CU - Cuba',
	CVCapeVerde = 'CV - Cape Verde',
	CXChristmasIsland = 'CX - Christmas Island',
	CYCyprus = 'CY - Cyprus',
	CZCzechRepublic = 'CZ - Czech Republic',
	DEGermany = 'DE - Germany',
	DJDjibouti = 'DJ - Djibouti',
	DKDenmark = 'DK - Denmark',
	DMDominica = 'DM - Dominica',
	DODominicanRepublic = 'DO - Dominican Republic',
	DZAlgeria = 'DZ - Algeria',
	ECEcuador = 'EC - Ecuador',
	EEEstonia = 'EE - Estonia',
	EGEgypt = 'EG - Egypt',
	EHWesternSahara = 'EH - Western Sahara',
	EREritrea = 'ER - Eritrea',
	ESSpain = 'ES - Spain',
	ETEthiopia = 'ET - Ethiopia',
	FIFinland = 'FI - Finland',
	FJFiji = 'FJ - Fiji',
	FKFalklandIslandsMalvinas = 'FK - Falkland Islands (Malvinas)',
	FMMicronesia = 'FM - Micronesia',
	FOFaroeIslands = 'FO - Faroe Islands',
	FRFrance = 'FR - France',
	FXFranceMetropolitan = 'FX - France, Metropolitan',
	GAGabon = 'GA - Gabon',
	GBUnitedKingdom = 'GB - United Kingdom',
	GDGrenada = 'GD - Grenada',
	GEGeorgia = 'GE - Georgia',
	GFFrenchGuiana = 'GF - French Guiana',
	GHGhana = 'GH - Ghana',
	GIGibraltar = 'GI - Gibraltar',
	GLGreenland = 'GL - Greenland',
	GMGambia = 'GM - Gambia',
	GNGuinea = 'GN - Guinea',
	GPGuadeloupe = 'GP - Guadeloupe',
	GQEquatorialGuinea = 'GQ - Equatorial Guinea',
	GRGreece = 'GR - Greece',
	GSSouthGeorgiaSoSandwichIsl = 'GS - South Georgia/So Sandwich Isl',
	GTGuatemala = 'GT - Guatemala',
	GUGuam = 'GU - Guam',
	GWGuineaBissau = 'GW - Guinea-Bissau',
	GYGuyana = 'GY - Guyana',
	HKHongKong = 'HK - Hong Kong',
	HMHeardIslandMcDonaldIsl = 'HM - Heard Island & McDonald Isl',
	HNHonduras = 'HN - Honduras',
	HRCroatia = 'HR - Croatia',
	HTHaiti = 'HT - Haiti',
	HUHungary = 'HU - Hungary',
	IDIndonesia = 'ID - Indonesia',
	IEIreland = 'IE - Ireland',
	ILIsrael = 'IL - Israel',
	IMIsleOfMan = 'IM - Isle of Man',
	INIndia = 'IN - India',
	IOBritishIndianOceanTerritory = 'IO - British Indian Ocean Territory',
	IQIraq = 'IQ - Iraq',
	IRIran = 'IR - Iran',
	ISIceland = 'IS - Iceland',
	ITItaly = 'IT - Italy',
	JEJersey = 'JE - Jersey',
	JMJamaica = 'JM - Jamaica',
	JOJordan = 'JO - Jordan',
	JPJapan = 'JP - Japan',
	KEKenya = 'KE - Kenya',
	KGKyrgyzstan = 'KG - Kyrgyzstan',
	KHCambodia = 'KH - Cambodia',
	KIKiribati = 'KI - Kiribati',
	KMComoros = 'KM - Comoros',
	KNSaintKittsAndNevis = 'KN - Saint Kitts And Nevis',
	KPKoreaNorth = 'KP - Korea, North',
	KRKoreaSouth = 'KR - Korea, South',
	KWKuwait = 'KW - Kuwait',
	KYCaymanIslands = 'KY - Cayman Islands',
	KZKazakhstan = 'KZ - Kazakhstan',
	LALaoPeopleSDemocraticRepublic = "LA - Lao People's Democratic Republic",
	LBLebanon = 'LB - Lebanon',
	LCSaintLucia = 'LC - Saint Lucia',
	LILiechtenstein = 'LI - Liechtenstein',
	LKSriLanka = 'LK - Sri Lanka',
	LRLiberia = 'LR - Liberia',
	LSLesotho = 'LS - Lesotho',
	LTLithuania = 'LT - Lithuania',
	LULuxembourg = 'LU - Luxembourg',
	LVLatvia = 'LV - Latvia',
	LYLibyanArabJamahiriya = 'LY - Libyan Arab Jamahiriya',
	MAMorocco = 'MA - Morocco',
	MCMonaco = 'MC - Monaco',
	MDRepublicOfMoldova = 'MD - Republic of Moldova',
	MGMadagascar = 'MG - Madagascar',
	MHMarshallIslands = 'MH - Marshall Islands',
	MKMacedonia = 'MK - Macedonia',
	MLMali = 'ML - Mali',
	MMMyanmar = 'MM - Myanmar',
	MNMongolia = 'MN - Mongolia',
	MOMacaoSpecialAdministrativeRegionOfThePeopleSRepublicOfChina = "MO - Macao Special Administrative Region of the People's Republic of China",
	MPNorthernMarianaIslands = 'MP - Northern Mariana Islands',
	MQMartinique = 'MQ - Martinique',
	MRMauritania = 'MR - Mauritania',
	MSMontserrat = 'MS - Montserrat',
	MTMalta = 'MT - Malta',
	MUMauritius = 'MU - Mauritius',
	MVMaldives = 'MV - Maldives',
	MWMalawi = 'MW - Malawi',
	MXMexico = 'MX - Mexico',
	MYMalaysia = 'MY - Malaysia',
	MZMozambique = 'MZ - Mozambique',
	NANamibia = 'NA - Namibia',
	NCNewCaledonia = 'NC - New Caledonia',
	NENiger = 'NE - Niger',
	NFNorfolkIsland = 'NF - Norfolk Island',
	NGNigeria = 'NG - Nigeria',
	NINicaragua = 'NI - Nicaragua',
	NLNetherlands = 'NL - Netherlands',
	NONorway = 'NO - Norway',
	NPNepal = 'NP - Nepal',
	NRNauru = 'NR - Nauru',
	NUNiue = 'NU - Niue',
	NZNewZealand = 'NZ - New Zealand',
	OMOman = 'OM - Oman',
	PAPanama = 'PA - Panama',
	PEPeru = 'PE - Peru',
	PFFrenchPolynesia = 'PF - French Polynesia',
	PGPapuaNewGuinea = 'PG - Papua New Guinea',
	PHPhilippines = 'PH - Philippines',
	PKPakistan = 'PK - Pakistan',
	PLPoland = 'PL - Poland',
	PMSaintPierreAndMiquelon = 'PM - Saint Pierre And Miquelon',
	PNPitcairn = 'PN - Pitcairn',
	PRPuertoRico = 'PR - Puerto Rico',
	PSStateOfPalestine = 'PS - State of Palestine',
	PTPortugal = 'PT - Portugal',
	PWPalau = 'PW - Palau',
	PYParaguay = 'PY - Paraguay',
	QAQatar = 'QA - Qatar',
	REReunion = 'RE - Reunion',
	RORomania = 'RO - Romania',
	RURussianFederation = 'RU - Russian Federation',
	RWRwanda = 'RW - Rwanda',
	SASaudiArabia = 'SA - Saudi Arabia',
	SBSolomonIslands = 'SB - Solomon Islands',
	SCSeychelles = 'SC - Seychelles',
	SDSudan = 'SD - Sudan',
	SESweden = 'SE - Sweden',
	SGSingapore = 'SG - Singapore',
	SHSaintHelena = 'SH - Saint Helena',
	SISlovenia = 'SI - Slovenia',
	SJSvalbardAndJanMayen = 'SJ - Svalbard and Jan Mayen',
	SKSlovakia = 'SK - Slovakia',
	SLSierraLeone = 'SL - Sierra Leone',
	SMSANMarino = 'SM - San Marino',
	SNSenegal = 'SN - Senegal',
	SOSomalia = 'SO - Somalia',
	SRSuriname = 'SR - Suriname',
	STSaoTomeAndPrincipe = 'ST - Sao Tome and Principe',
	SVElSalvador = 'SV - El Salvador',
	SYSyrianArabRepublic = 'SY - Syrian Arab Republic',
	SZSwaziland = 'SZ - Swaziland',
	TCTurksAndCaicosIslands = 'TC - Turks and Caicos Islands',
	TDChad = 'TD - Chad',
	TFFrenchSouthernTerritories = 'TF - French Southern Territories',
	TGTogo = 'TG - Togo',
	THThailand = 'TH - Thailand',
	TJTajikistan = 'TJ - Tajikistan',
	TKTokelau = 'TK - Tokelau',
	TLTimorLeste = 'TL - Timor-Leste',
	TMTurkmenistan = 'TM - Turkmenistan',
	TNTunisia = 'TN - Tunisia',
	TOTonga = 'TO - Tonga',
	TPEastTimor = 'TP - East Timor',
	TRTurkey = 'TR - Turkey',
	TTTrinidadAndTobago = 'TT - Trinidad and Tobago',
	TVTuvalu = 'TV - Tuvalu',
	TWTaiwan = 'TW - Taiwan',
	TZTanzania = 'TZ - Tanzania',
	UAUkraine = 'UA - Ukraine',
	UGUganda = 'UG - Uganda',
	UMUSMinorOutlyingIslands = 'UM - US Minor Outlying Islands',
	USUnitedStates = 'US - United States',
	UYUruguay = 'UY - Uruguay',
	UZUzbekistan = 'UZ - Uzbekistan',
	VAHolySee = 'VA - Holy See',
	VCSaintVincentTheGrenadines = 'VC - Saint Vincent & the Grenadines',
	VEVenezuela = 'VE - Venezuela',
	VGVirginIslandsBritish = 'VG - Virgin Islands (British)',
	VIVirginIslandsUS = 'VI - Virgin Islands (U.S.)',
	VNVietNam = 'VN - Viet Nam',
	VUVanuatu = 'VU - Vanuatu',
	WFWallisAndFutunaIslands = 'WF - Wallis and Futuna Islands',
	WSSamoa = 'WS - Samoa',
	YEYemen = 'YE - Yemen',
	YTMayotte = 'YT - Mayotte',
	YUYugoslavia = 'YU - Yugoslavia',
	ZASouthAfrica = 'ZA - South Africa',
	ZMZambia = 'ZM - Zambia',
	ZRZaire = 'ZR - Zaire',
	ZWZimbabwe = 'ZW - Zimbabwe',
}

export interface Each {
	eachDepth: number;
	eachGTIN: string;
	eachHeight: number;
	eachWeight: number;
	eachWidth: number;
}

export interface InnerPack {
	innerPackDepth: number;
	innerPackGTIN: string;
	innerPackHeight: number;
	innerPackWeight: number;
	innerPackWidth: number;
	qtySellableItemsInnerPack: number;
}

export interface Pallet {
	palletDepth: number;
	palletGTIN: string;
	palletHeight: number;
	palletWeight: number;
	palletWidth: number;
	qtySellableItemsPallet: number;
}

export interface Visible {
	'Animal Accessories'?: AnimalAccessories;
	'Animal Food'?: AnimalFood;
	'Animal Health & Grooming'?: AnimalHealthGrooming;
	'Animal Other'?: AnimalOther;
	'Art & Craft'?: ArtCraft;
	'Baby Clothing'?: BabyClothing;
	'Baby Diapering, Care, & Other'?: BabyDiaperingCareOther;
	'Baby Food'?: BabyFood;
	'Baby Furniture'?: BabyFurniture;
	'Baby Toys'?: BabyToys;
	'Baby Transport'?: BabyTransport;
	'Beauty, Personal Care, & Hygiene'?: BeautyPersonalCareHygiene;
	Bedding?: Bedding;
	'Building Supply'?: BuildingSupply;
	'Cameras & Lenses'?: CamerasLenses;
	'Carriers & Accessories'?: CarriersAccessories;
	'Cases & Bags'?: CasesBags;
	'Cell Phones'?: CellPhones;
	'Ceremonial Clothing & Accessories'?: CeremonialClothingAccessories;
	Clothing?: Clothing;
	'Computer Components'?: ComputerComponents;
	Computers?: Computers;
	Costumes?: Costumes;
	Cycling?: Cycling;
	'Decorations & Favors'?: DecorationsFavors;
	Electrical?: Electrical;
	'Electronics Accessories'?: ElectronicsAccessories;
	'Electronics Cables'?: ElectronicsCables;
	'Electronics Other'?: ElectronicsOther;
	'Food & Beverage'?: FoodBeverage;
	Footwear?: Footwear;
	'Fuels & Lubricants'?: FuelsLubricants;
	Funeral?: Funeral;
	Furniture?: Furniture;
	'Garden & Patio'?: GardenPatio;
	'Gift Supply & Awards'?: GiftSupplyAwards;
	'Grills & Outdoor Cooking'?: GrillsOutdoorCooking;
	Hardware?: Hardware;
	'Health & Beauty Electronics'?: HealthBeautyElectronics;
	'Home Decor, Kitchen, & Other'?: HomeDecorKitchenOther;
	'Household Cleaning Products & Supplies'?: HouseholdCleaningProductsSupplies;
	'Instrument Accessories'?: InstrumentAccessories;
	Jewelry?: Jewelry;
	'Land Vehicles'?: LandVehicles;
	'Large Appliances'?: LargeAppliances;
	'Medical Aids & Equipment'?: MedicalAidsEquipment;
	'Medicine & Supplements'?: MedicineSupplements;
	Movies?: Movies;
	Music?: Music;
	'Music Cases & Bags'?: MusicCasesBags;
	'Musical Instruments'?: MusicalInstruments;
	Office?: Office;
	Optical?: Optical;
	Optics?: Optics;
	Other?: Other;
	'Photo Accessories'?: PhotoAccessories;
	'Plumbing & HVAC'?: PlumbingHVAC;
	'Printers, Scanners, & Imaging'?: PrintersScannersImaging;
	'Safety & Emergency'?: SafetyEmergency;
	Software?: Software;
	'Sound & Recording'?: SoundRecording;
	'Sport & Recreation Other'?: SportRecreationOther;
	Storage?: Storage;
	Tools?: Tools;
	'Tools & Hardware Other'?: ToolsHardwareOther;
	Toys?: Toys;
	'TVs & Video Displays'?: TVsVideoDisplays;
	'Vehicle Other'?: VehicleOther;
	'Vehicle Parts & Accessories'?: VehiclePartsAccessories;
	'Video Games'?: VideoGames;
	'Video Projectors'?: VideoProjectors;
	Watches?: Watches;
	Watercraft?: Watercraft;
	'Wheels & Wheel Components'?: WheelsWheelComponents;
}

export interface AnimalAccessories {
	additionalProductAttributes?: AnimalAccessoriesAdditionalProductAttribute[];
	animalBreed?: string;
	animalLifestage?: string;
	animalType?: string;
	assembledProductHeight?: AnimalAccessoriesAssembledProductHeight;
	assembledProductLength?: AnimalAccessoriesAssembledProductLength;
	assembledProductWeight?: AnimalAccessoriesAssembledProductWeight;
	assembledProductWidth?: AnimalAccessoriesAssembledProductWidth;
	batteriesRequired?: MustShipAlone;
	capacity?: string;
	character?: string[];
	color?: string[];
	colorCategory?: ColorCategory[];
	count?: string;
	countPerPack?: number;
	countryOfOriginTextiles: CountryOfOriginTextiles;
	fabricCareInstructions?: string[];
	fabricContent?: AnimalAccessoriesFabricContent[];
	features?: string[];
	globalBrandLicense?: string[];
	instructions?: string;
	isFoldable?: MustShipAlone;
	isPrimaryVariant?: MustShipAlone;
	isReflective?: MustShipAlone;
	isRetractable?: MustShipAlone;
	keyFeatures?: string[];
	mainImageUrl: string;
	manufacturer: string;
	manufacturerPartNumber?: string;
	material?: string[];
	maximumTemperature?: AnimalAccessoriesMaximumTemperature;
	maximumWeight?: AnimalAccessoriesMaximumWeight;
	minimumTemperature?: AnimalAccessoriesMinimumTemperature;
	minimumWeight?: AnimalAccessoriesMinimumWeight;
	modelNumber?: string;
	msrp?: number;
	numberOfSteps?: number;
	pattern?: string[];
	petSize?: string;
	pieceCount?: number;
	productSecondaryImageURL?: string[];
	prop65WarningText: string;
	shape?: string;
	shortDescription: string;
	size?: string;
	sportsLeague?: string[];
	sportsTeam?: string[];
	swatchImages?: AnimalAccessoriesSwatchImage[];
	variantAttributeNames?: AnimalAccessoriesVariantAttributeName[];
	variantGroupId?: string;
	warrantyText?: string;
	warrantyURL?: string;
}

export interface AnimalAccessoriesAdditionalProductAttribute {
	productAttributeName: string;
	productAttributeValue: string;
}

export interface AnimalAccessoriesAssembledProductHeight {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export enum AssembledProductHeightUnit {
	Ft = 'ft',
	In = 'in',
}

export interface AnimalAccessoriesAssembledProductLength {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface AnimalAccessoriesAssembledProductWeight {
	measure?: number;
	unit?: AssembledProductWeightUnit;
}

export enum AssembledProductWeightUnit {
	G = 'g',
	Kg = 'kg',
	LB = 'lb',
	Oz = 'oz',
}

export interface AnimalAccessoriesAssembledProductWidth {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export enum ColorCategory {
	Beige = 'Beige',
	Black = 'Black',
	Blue = 'Blue',
	Bronze = 'Bronze',
	Brown = 'Brown',
	Clear = 'Clear',
	Gold = 'Gold',
	Gray = 'Gray',
	Green = 'Green',
	MultiColor = 'Multi-color',
	OffWhite = 'Off-White',
	Orange = 'Orange',
	Pink = 'Pink',
	Purple = 'Purple',
	Red = 'Red',
	Silver = 'Silver',
	White = 'White',
	Yellow = 'Yellow',
}

export enum CountryOfOriginTextiles {
	Imported = 'Imported',
	USAAndImported = 'USA and Imported',
	USAOrImported = 'USA or Imported',
	Usa = 'USA',
}

export interface AnimalAccessoriesFabricContent {
	materialName?: string;
	materialPercentage?: number;
}

export interface AnimalAccessoriesMaximumTemperature {
	measure?: number;
	unit?: MaximumTemperatureUnit;
}

export enum MaximumTemperatureUnit {
	ºC = 'ºC',
	ºF = 'ºF',
	ºK = 'ºK',
}

export interface AnimalAccessoriesMaximumWeight {
	measure?: number;
	unit?: PurpleUnit;
}

export enum PurpleUnit {
	G = 'g',
	Kg = 'kg',
	LB = 'lb',
	Mg = 'mg',
	Oz = 'oz',
}

export interface AnimalAccessoriesMinimumTemperature {
	measure?: number;
	unit?: MaximumTemperatureUnit;
}

export interface AnimalAccessoriesMinimumWeight {
	measure?: number;
	unit?: AssembledProductWeightUnit;
}

export interface AnimalAccessoriesSwatchImage {
	swatchImageUrl?: string;
	swatchVariantAttribute?: AnimalAccessoriesVariantAttributeName;
}

export enum AnimalAccessoriesVariantAttributeName {
	AssembledProductHeight = 'assembledProductHeight',
	AssembledProductLength = 'assembledProductLength',
	AssembledProductWidth = 'assembledProductWidth',
	Capacity = 'capacity',
	Character = 'character',
	Color = 'color',
	Count = 'count',
	CountPerPack = 'countPerPack',
	Shape = 'shape',
	Size = 'size',
	SportsTeam = 'sportsTeam',
}

export interface AnimalFood {
	additionalProductAttributes?: AnimalFoodAdditionalProductAttribute[];
	animalBreed?: string;
	animalHealthConcern?: string[];
	animalLifestage?: string;
	animalType?: string;
	assembledProductHeight?: AnimalFoodAssembledProductHeight;
	assembledProductLength?: AnimalFoodAssembledProductLength;
	assembledProductWeight?: AnimalFoodAssembledProductWeight;
	assembledProductWidth?: AnimalFoodAssembledProductWidth;
	count?: string;
	countPerPack?: number;
	features?: string[];
	feedingInstructions?: string;
	flavor?: string;
	globalBrandLicense?: string[];
	ingredients?: string;
	instructions?: string;
	isPrimaryVariant?: MustShipAlone;
	keyFeatures?: string[];
	labelImage: AnimalFoodLabelImage[];
	mainImageUrl: string;
	manufacturer: string;
	maximumWeight?: AnimalFoodMaximumWeight;
	minimumWeight?: AnimalFoodMinimumWeight;
	msrp?: number;
	petFoodForm?: string;
	petSize?: string;
	productSecondaryImageURL?: string[];
	prop65WarningText: string;
	shelfLife?: AnimalFoodShelfLife;
	shortDescription: string;
	size?: string;
	swatchImages?: AnimalFoodSwatchImage[];
	variantAttributeNames?: AnimalFoodVariantAttributeName[];
	variantGroupId?: string;
	warrantyText?: string;
	warrantyURL?: string;
}

export interface AnimalFoodAdditionalProductAttribute {
	productAttributeName: string;
	productAttributeValue: string;
}

export interface AnimalFoodAssembledProductHeight {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface AnimalFoodAssembledProductLength {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface AnimalFoodAssembledProductWeight {
	measure?: number;
	unit?: AssembledProductWeightUnit;
}

export interface AnimalFoodAssembledProductWidth {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface AnimalFoodLabelImage {
	labelImageContains: LabelImageContains;
	labelImageURL: string;
}

export enum LabelImageContains {
	DrugFacts = 'Drug Facts',
	IngredientList = 'Ingredient List',
	NoLabel = 'No Label',
	NutritionFacts = 'Nutrition Facts',
	SupplementFacts = 'Supplement Facts',
}

export interface AnimalFoodMaximumWeight {
	measure?: number;
	unit?: PurpleUnit;
}

export interface AnimalFoodMinimumWeight {
	measure?: number;
	unit?: AssembledProductWeightUnit;
}

export interface AnimalFoodShelfLife {
	measure?: number;
	unit?: ShelfLifeUnit;
}

export enum ShelfLifeUnit {
	Days = 'days',
}

export interface AnimalFoodSwatchImage {
	swatchImageUrl?: string;
	swatchVariantAttribute?: AnimalFoodVariantAttributeName;
}

export enum AnimalFoodVariantAttributeName {
	AssembledProductHeight = 'assembledProductHeight',
	AssembledProductLength = 'assembledProductLength',
	AssembledProductWidth = 'assembledProductWidth',
	Count = 'count',
	CountPerPack = 'countPerPack',
	Flavor = 'flavor',
	Size = 'size',
}

export interface AnimalHealthGrooming {
	activeIngredients?: AnimalHealthGroomingActiveIngredient[];
	additionalProductAttributes?: AnimalHealthGroomingAdditionalProductAttribute[];
	animalBreed?: string;
	animalHealthConcern?: string[];
	animalLifestage?: string;
	animalType?: string;
	assembledProductHeight?: AnimalHealthGroomingAssembledProductHeight;
	assembledProductLength?: AnimalHealthGroomingAssembledProductLength;
	assembledProductWeight?: AnimalHealthGroomingAssembledProductWeight;
	assembledProductWidth?: AnimalHealthGroomingAssembledProductWidth;
	color?: string[];
	count?: string;
	countPerPack?: number;
	dosage?: string;
	drugActiveInactiveIngredientsImage?: string;
	drugDosageInstructionsImage?: string;
	features?: string[];
	flavor?: string;
	form?: string;
	globalBrandLicense?: string[];
	hairLength?: string[];
	inactiveIngredients?: string[];
	ingredients?: string;
	instructions?: string;
	isDisposable?: MustShipAlone;
	isPrimaryVariant?: MustShipAlone;
	isRetractable?: MustShipAlone;
	keyFeatures?: string[];
	labelImage: AnimalHealthGroomingLabelImage[];
	mainImageUrl: string;
	manufacturer: string;
	manufacturerPartNumber?: string;
	maximumWeight?: AnimalHealthGroomingMaximumWeight;
	minimumWeight?: AnimalHealthGroomingMinimumWeight;
	modelNumber?: string;
	msrp?: number;
	petSize?: string;
	pieceCount?: number;
	powerType?: string;
	productSecondaryImageURL?: string[];
	prop65WarningText: string;
	scent?: string;
	shelfLife?: AnimalHealthGroomingShelfLife;
	shortDescription: string;
	size?: string;
	stopUseIndications?: string[];
	swatchImages?: AnimalHealthGroomingSwatchImage[];
	variantAttributeNames?: AnimalHealthGroomingVariantAttributeName[];
	variantGroupId?: string;
	warrantyText?: string;
	warrantyURL?: string;
}

export interface AnimalHealthGroomingActiveIngredient {
	activeIngredientName?: string;
	activeIngredientPercentage?: number;
}

export interface AnimalHealthGroomingAdditionalProductAttribute {
	productAttributeName: string;
	productAttributeValue: string;
}

export interface AnimalHealthGroomingAssembledProductHeight {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface AnimalHealthGroomingAssembledProductLength {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface AnimalHealthGroomingAssembledProductWeight {
	measure?: number;
	unit?: AssembledProductWeightUnit;
}

export interface AnimalHealthGroomingAssembledProductWidth {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface AnimalHealthGroomingLabelImage {
	labelImageContains: LabelImageContains;
	labelImageURL: string;
}

export interface AnimalHealthGroomingMaximumWeight {
	measure?: number;
	unit?: PurpleUnit;
}

export interface AnimalHealthGroomingMinimumWeight {
	measure?: number;
	unit?: AssembledProductWeightUnit;
}

export interface AnimalHealthGroomingShelfLife {
	measure?: number;
	unit?: ShelfLifeUnit;
}

export interface AnimalHealthGroomingSwatchImage {
	swatchImageUrl?: string;
	swatchVariantAttribute?: AnimalHealthGroomingVariantAttributeName;
}

export enum AnimalHealthGroomingVariantAttributeName {
	AssembledProductHeight = 'assembledProductHeight',
	AssembledProductLength = 'assembledProductLength',
	AssembledProductWidth = 'assembledProductWidth',
	Color = 'color',
	Count = 'count',
	CountPerPack = 'countPerPack',
	Scent = 'scent',
	Size = 'size',
}

export interface AnimalOther {
	additionalProductAttributes?: AnimalOtherAdditionalProductAttribute[];
	animalBreed?: string;
	animalLifestage?: string;
	animalType?: string;
	assembledProductHeight?: AnimalOtherAssembledProductHeight;
	assembledProductLength?: AnimalOtherAssembledProductLength;
	assembledProductWeight?: AnimalOtherAssembledProductWeight;
	assembledProductWidth?: AnimalOtherAssembledProductWidth;
	athlete?: string[];
	autographedBy?: string;
	color?: string[];
	colorCategory?: ColorCategory[];
	count?: string;
	countPerPack?: number;
	countryOfOriginTextiles: CountryOfOriginTextiles;
	fabricCareInstructions?: string[];
	fabricContent?: AnimalOtherFabricContent[];
	globalBrandLicense?: string[];
	inflexKitComponent?: MustShipAlone;
	instructions?: string;
	isFoldable?: MustShipAlone;
	isPortable?: MustShipAlone;
	isPrimaryVariant?: MustShipAlone;
	keyFeatures?: string[];
	mainImageUrl: string;
	manufacturer: string;
	manufacturerPartNumber?: string;
	material?: string[];
	maximumWeight?: AnimalOtherMaximumWeight;
	minimumWeight?: AnimalOtherMinimumWeight;
	modelNumber?: string;
	msrp?: number;
	pattern?: string[];
	petSize?: string;
	pieceCount?: number;
	productSecondaryImageURL?: string[];
	prop65WarningText: string;
	shortDescription: string;
	size?: string;
	sportsLeague?: string[];
	sportsTeam?: string[];
	swatchImages?: AnimalOtherSwatchImage[];
	variantAttributeNames?: AnimalOtherVariantAttributeName[];
	variantGroupId?: string;
	warrantyText?: string;
	warrantyURL?: string;
}

export interface AnimalOtherAdditionalProductAttribute {
	productAttributeName: string;
	productAttributeValue: string;
}

export interface AnimalOtherAssembledProductHeight {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface AnimalOtherAssembledProductLength {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface AnimalOtherAssembledProductWeight {
	measure?: number;
	unit?: AssembledProductWeightUnit;
}

export interface AnimalOtherAssembledProductWidth {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface AnimalOtherFabricContent {
	materialName?: string;
	materialPercentage?: number;
}

export interface AnimalOtherMaximumWeight {
	measure?: number;
	unit?: PurpleUnit;
}

export interface AnimalOtherMinimumWeight {
	measure?: number;
	unit?: AssembledProductWeightUnit;
}

export interface AnimalOtherSwatchImage {
	swatchImageUrl?: string;
	swatchVariantAttribute?: AnimalOtherVariantAttributeName;
}

export enum AnimalOtherVariantAttributeName {
	AssembledProductHeight = 'assembledProductHeight',
	AssembledProductLength = 'assembledProductLength',
	AssembledProductWidth = 'assembledProductWidth',
	Color = 'color',
	Count = 'count',
	CountPerPack = 'countPerPack',
	Size = 'size',
	SportsTeam = 'sportsTeam',
}

export interface ArtCraft {
	additionalProductAttributes?: ArtCraftAdditionalProductAttribute[];
	ageGroup?: ArtCraftAgeGroup[];
	artPaintType?: string;
	assembledProductHeight?: ArtCraftAssembledProductHeight;
	assembledProductLength?: ArtCraftAssembledProductLength;
	assembledProductWeight?: ArtCraftAssembledProductWeight;
	assembledProductWidth?: ArtCraftAssembledProductWidth;
	boltLengthYardage?: BoltLengthYardage;
	character?: string[];
	color?: string[];
	colorCategory?: ColorCategory[];
	compositeWoodCertificationCode: CompositeWoodCertificationCode;
	count?: string;
	countPerPack?: number;
	diameter?: ArtCraftDiameter;
	fabricCareInstructions?: string[];
	fabricContent?: ArtCraftFabricContent[];
	fabricPurchaseForm?: FabricPurchaseForm;
	features?: string[];
	finish?: string;
	gender?: ArtCraftGender;
	globalBrandLicense?: string[];
	inflexKitComponent?: MustShipAlone;
	ingredients?: string;
	isBulk?: MustShipAlone;
	isDisposable?: MustShipAlone;
	isPowered?: MustShipAlone;
	isPrimaryVariant?: MustShipAlone;
	isRecyclable?: MustShipAlone;
	isRefillable?: MustShipAlone;
	isSelfAdhesive?: MustShipAlone;
	keyFeatures?: string[];
	mainImageUrl: string;
	manufacturer: string;
	manufacturerPartNumber?: string;
	material?: string[];
	maximumRecommendedAge?: ArtCraftMaximumRecommendedAge;
	maximumTemperature?: ArtCraftMaximumTemperature;
	metal?: MetalType;
	minimumRecommendedAge?: ArtCraftMinimumRecommendedAge;
	modelNumber?: string;
	msrp?: number;
	occasion?: string[];
	pattern?: string[];
	pieceCount?: number;
	plating?: string;
	powerType?: string;
	precutFabricSpecialtySize?: PrecutFabricSpecialtySize;
	productLine?: string[];
	productSecondaryImageURL?: string[];
	prop65WarningText: string;
	recommendedSurfaces?: string[];
	recommendedUses?: string[];
	scent?: string;
	sewingKitType?: SewingKitType;
	shape?: string;
	shortDescription: string;
	size?: string;
	skillLevel?: string;
	smallPartsWarnings: SmallPartsWarningCode[];
	swatchImages?: ArtCraftSwatchImage[];
	sweingMachineType?: SewingMachineType;
	theme?: string[];
	variantAttributeNames?: ArtCraftVariantAttributeName[];
	variantGroupId?: string;
	warrantyText?: string;
	warrantyURL?: string;
}

export interface ArtCraftAdditionalProductAttribute {
	productAttributeName: string;
	productAttributeValue: string;
}

export enum ArtCraftAgeGroup {
	Adult = 'Adult',
	Child = 'Child',
	Infant = 'Infant',
	Newborn = 'Newborn',
	Preemie = 'Preemie',
	Senior = 'Senior',
	Teen = 'Teen',
	Toddler = 'Toddler',
	Tween = 'Tween',
}

export interface ArtCraftAssembledProductHeight {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface ArtCraftAssembledProductLength {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface ArtCraftAssembledProductWeight {
	measure?: number;
	unit?: AssembledProductWeightUnit;
}

export interface ArtCraftAssembledProductWidth {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface BoltLengthYardage {
	measure?: number;
	unit?: BoltLengthYardageUnit;
}

export enum BoltLengthYardageUnit {
	Yard = 'Yard',
	Yards = 'Yards',
}

export enum CompositeWoodCertificationCode {
	The1DoesNotContainCompositeWood = '1 - Does not contain composite wood',
	The7NotTSCACompliantAndCannotBeSoldInUS = '7 - Not TSCA compliant and cannot be sold in US',
	The8TSCACompliantAndOkayToBeSoldInUS = '8 - TSCA compliant and okay to be sold in US',
}

export interface ArtCraftDiameter {
	measure?: number;
	unit?: FluffyUnit;
}

export enum FluffyUnit {
	CM = 'cm',
	In = 'in',
	Mm = 'mm',
	Μm = 'µm',
}

export interface ArtCraftFabricContent {
	materialName?: string;
	materialPercentage?: number;
}

export enum FabricPurchaseForm {
	ByTheBolt = 'By the bolt',
	ByTheYard = 'By the yard',
	Precut = 'Precut',
}

export enum ArtCraftGender {
	Boys = 'Boys',
	Girls = 'Girls',
	Men = 'Men',
	Unisex = 'Unisex',
	Women = 'Women',
}

export interface ArtCraftMaximumRecommendedAge {
	measure?: number;
	unit?: MaximumRecommendedAgeUnit;
}

export enum MaximumRecommendedAgeUnit {
	Months = 'months',
	Years = 'years',
}

export interface ArtCraftMaximumTemperature {
	measure?: number;
	unit?: MaximumTemperatureUnit;
}

export enum MetalType {
	BlackGold = 'Black Gold',
	BlackGoldPlated = 'Black Gold-plated',
	Brass = 'Brass',
	Copper = 'Copper',
	Goldtone = 'Goldtone',
	Iron = 'Iron',
	Nickel = 'Nickel',
	NoMetal = 'No Metal',
	OtherMetal = 'Other Metal',
	Palladium = 'Palladium',
	Pewter = 'Pewter',
	Platinaire = 'Platinaire',
	Platinum = 'Platinum',
	Rhodium = 'Rhodium',
	RoseGold = 'Rose Gold',
	RoseGoldPlated = 'Rose Gold-plated',
	SilverPlated = 'Silver-plated',
	Slivertone = 'Slivertone',
	StainlessSteel = 'Stainless Steel',
	SterlingSilver = 'Sterling Silver',
	Titanium = 'Titanium',
	TriToneGold = 'Tri-Tone Gold',
	Tungsten = 'Tungsten',
	TwoToneGold = 'Two-Tone Gold',
	WhiteGold = 'White Gold',
	WhiteGoldPlated = 'White Gold-plated',
	YellowGold = 'Yellow Gold',
	YellowGoldPlated = 'Yellow Gold-plated',
}

export interface ArtCraftMinimumRecommendedAge {
	measure?: number;
	unit?: MaximumRecommendedAgeUnit;
}

export enum PrecutFabricSpecialtySize {
	The10SquaresLayerCakes = '10" Squares (Layer Cakes)',
	The15Yards = '1.5 Yards',
	The18X21FatQuarters = '18" X 21" (Fat Quarters)',
	The1Yard = '1 Yard',
	The25SquaresMiniCharms = '2.5" Squares (Mini Charms)',
	The25StripsJellyRolls = '2.5" Strips (Jelly Rolls)',
	The2Yards = '2 Yards',
	The3Yards = '3 Yards',
	The5SquaresCharmPacks = '5" Squares (Charm Packs)',
	The5X10JollyBars = '5" X 10" (Jolly Bars)',
	The5Yard = '.5 Yard',
	The9X21Fat8Ths = '9" X 21" (Fat 8ths)',
}

export enum SewingKitType {
	HandSewing = 'Hand Sewing',
	MachineSewing = 'Machine Sewing',
}

export enum SmallPartsWarningCode {
	The0NoWarningApplicable = '0 - No warning applicable',
	The1ChokingHazardIsASmallBall = '1 - Choking hazard is a small ball',
	The2ChokingHazardContainsSmallBall = '2 - Choking hazard contains small ball',
	The3ChokingHazardContainsSmallParts = '3 - Choking hazard contains small parts',
	The4ChokingHazardBalloon = '4 - Choking hazard balloon',
	The5ChokingHazardIsAMarble = '5 - Choking hazard is a marble',
	The6ChokingHazardContainsAMarble = '6 - Choking hazard contains a marble',
}

export interface ArtCraftSwatchImage {
	swatchImageUrl?: string;
	swatchVariantAttribute?: ArtCraftVariantAttributeName;
}

export enum ArtCraftVariantAttributeName {
	AssembledProductHeight = 'assembledProductHeight',
	AssembledProductLength = 'assembledProductLength',
	AssembledProductWidth = 'assembledProductWidth',
	Character = 'character',
	Color = 'color',
	Count = 'count',
	CountPerPack = 'countPerPack',
	Diameter = 'diameter',
	Finish = 'finish',
	Material = 'material',
	Scent = 'scent',
	Shape = 'shape',
	Size = 'size',
}

export enum SewingMachineType {
	Commercial = 'Commercial',
	Computerized = 'Computerized',
	Embroidery = 'Embroidery',
	Mechanical = 'Mechanical',
	Portable = 'Portable',
	Sergers = 'Sergers',
}

export interface BabyClothing {
	additionalProductAttributes?: BabyClothingAdditionalProductAttribute[];
	ageGroup?: BabyClothingAgeGroup[];
	assembledProductHeight?: BabyClothingAssembledProductHeight;
	assembledProductLength?: BabyClothingAssembledProductLength;
	assembledProductWeight?: BabyClothingAssembledProductWeight;
	assembledProductWidth?: BabyClothingAssembledProductWidth;
	athlete?: string[];
	character?: string[];
	clothingSize: string;
	clothingSizeGroup?: BabyClothingClothingSizeGroup;
	color: string[];
	colorCategory?: ColorCategory[];
	count?: string;
	countPerPack?: number;
	countryOfOriginTextiles: CountryOfOriginTextiles;
	fabricCareInstructions?: string[];
	fabricContent?: BabyClothingFabricContent[];
	features?: string[];
	gender?: BabyClothingGender;
	globalBrandLicense?: string[];
	isPrimaryVariant?: MustShipAlone;
	keyFeatures?: string[];
	mainImageUrl: string;
	manufacturer: string;
	manufacturerPartNumber?: string;
	maximumRecommendedAge?: BabyClothingMaximumRecommendedAge;
	maximumWeight?: BabyClothingMaximumWeight;
	minimumRecommendedAge?: BabyClothingMinimumRecommendedAge;
	minimumWeight?: BabyClothingMinimumWeight;
	modelNumber?: string;
	msrp?: number;
	outerwearCoatJacketAnVestType?: string;
	pajamaType?: string;
	pattern?: string[];
	pieceCount?: number;
	productSecondaryImageURL?: string[];
	prop65WarningText: string;
	scent?: string;
	season?: string[];
	seasonCode?: SeasonCode;
	seasonYear?: number;
	shoeCategory?: ShoeCategory;
	shoeClosure?: string;
	shoeSize?: string;
	shoeStyle?: string;
	shoeWidth?: string;
	shortDescription: string;
	size?: string;
	smallPartsWarnings: SmallPartsWarningCode[];
	sportsLeague?: string[];
	sportsTeam?: string[];
	swatchImages?: BabyClothingSwatchImage[];
	theme?: string[];
	tShirtType?: string[];
	variantAttributeNames?: BabyClothingVariantAttributeName[];
	variantGroupId?: string;
}

export interface BabyClothingAdditionalProductAttribute {
	productAttributeName: string;
	productAttributeValue: string;
}

export enum BabyClothingAgeGroup {
	Child = 'Child',
	Infant = 'Infant',
	Newborn = 'Newborn',
	Preemie = 'Preemie',
	Toddler = 'Toddler',
}

export interface BabyClothingAssembledProductHeight {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface BabyClothingAssembledProductLength {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface BabyClothingAssembledProductWeight {
	measure?: number;
	unit?: AssembledProductWeightUnit;
}

export interface BabyClothingAssembledProductWidth {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export enum BabyClothingClothingSizeGroup {
	Infant = 'Infant',
	Preemie = 'Preemie',
	Toddler = 'Toddler',
}

export interface BabyClothingFabricContent {
	materialName?: string;
	materialPercentage?: number;
}

export enum BabyClothingGender {
	Female = 'Female',
	Male = 'Male',
	Unisex = 'Unisex',
}

export interface BabyClothingMaximumRecommendedAge {
	measure?: number;
	unit?: MaximumRecommendedAgeUnit;
}

export interface BabyClothingMaximumWeight {
	measure?: number;
	unit?: PurpleUnit;
}

export interface BabyClothingMinimumRecommendedAge {
	measure?: number;
	unit?: MaximumRecommendedAgeUnit;
}

export interface BabyClothingMinimumWeight {
	measure?: number;
	unit?: AssembledProductWeightUnit;
}

export enum SeasonCode {
	The0Basic = '0- Basic',
	The1Spring = '1- Spring',
	The2Summer = '2- Summer',
	The3BTSFall = '3- BTS/Fall',
	The4Winter = '4- Winter',
}

export enum ShoeCategory {
	BabyBoyShoes = 'Baby Boy Shoes',
	BabyGirlShoes = 'Baby Girl Shoes',
	BoysShoes = "Boys' Shoes",
	GirlsShoes = "Girls' Shoes",
	MenSShoes = "Men's Shoes",
	ToddlerBoyShoes = 'Toddler Boy Shoes',
	ToddlerGirlShoes = 'Toddler Girl Shoes',
	WomenSShoes = "Women's Shoes",
}

export interface BabyClothingSwatchImage {
	swatchImageUrl?: string;
	swatchVariantAttribute?: PurpleSwatchVariantAttribute;
}

export enum PurpleSwatchVariantAttribute {
	BabyClothingSize = 'babyClothingSize',
	Character = 'character',
	Color = 'color',
	Count = 'count',
	CountPerPack = 'countPerPack',
	Pattern = 'pattern',
	Scent = 'scent',
	ShoeSize = 'shoeSize',
	Size = 'size',
	SportsTeam = 'sportsTeam',
}

export enum BabyClothingVariantAttributeName {
	Character = 'character',
	ClothingSize = 'clothingSize',
	Color = 'color',
	Count = 'count',
	CountPerPack = 'countPerPack',
	Pattern = 'pattern',
	Scent = 'scent',
	ShoeSize = 'shoeSize',
	Size = 'size',
	SportsTeam = 'sportsTeam',
}

export interface BabyDiaperingCareOther {
	additionalProductAttributes?: BabyDiaperingCareOtherAdditionalProductAttribute[];
	ageGroup?: BabyDiaperingCareOtherAgeGroup[];
	assembledProductHeight?: BabyDiaperingCareOtherAssembledProductHeight;
	assembledProductLength?: BabyDiaperingCareOtherAssembledProductLength;
	assembledProductWeight?: BabyDiaperingCareOtherAssembledProductWeight;
	assembledProductWidth?: BabyDiaperingCareOtherAssembledProductWidth;
	athlete?: string[];
	babyMonitorType?: string[];
	bedSize?: string;
	character?: string[];
	color?: string[];
	colorCategory?: ColorCategory[];
	count?: string;
	countPerPack?: number;
	diaperSize?: string;
	diaposableBabyDiaperType?: string[];
	fabricCareInstructions?: string[];
	fabricContent?: BabyDiaperingCareOtherFabricContent[];
	features?: string[];
	gender?: BabyClothingGender;
	globalBrandLicense?: string[];
	ingredients?: string;
	isPrimaryVariant?: MustShipAlone;
	keyFeatures?: string[];
	labelImage: BabyDiaperingCareOtherLabelImage[];
	mainImageUrl: string;
	manufacturer: string;
	manufacturerPartNumber?: string;
	material?: string[];
	maximumRecommendedAge?: BabyDiaperingCareOtherMaximumRecommendedAge;
	maximumWeight?: BabyDiaperingCareOtherMaximumWeight;
	minimumRecommendedAge?: BabyDiaperingCareOtherMinimumRecommendedAge;
	minimumWeight?: BabyDiaperingCareOtherMinimumWeight;
	modelNumber?: string;
	msrp?: number;
	pattern?: string[];
	productSecondaryImageURL?: string[];
	prop65WarningText: string;
	scent?: string;
	shelfLife?: BabyDiaperingCareOtherShelfLife;
	shortDescription: string;
	size?: string;
	sportsLeague?: string[];
	sportsTeam?: string[];
	swatchImages?: BabyDiaperingCareOtherSwatchImage[];
	variantAttributeNames?: BabyDiaperingCareOtherVariantAttributeName[];
	variantGroupId?: string;
	warrantyText?: string;
	warrantyURL?: string;
}

export interface BabyDiaperingCareOtherAdditionalProductAttribute {
	productAttributeName: string;
	productAttributeValue: string;
}

export enum BabyDiaperingCareOtherAgeGroup {
	Infant = 'Infant',
	Newborn = 'Newborn',
	Preemie = 'Preemie',
	Toddler = 'Toddler',
}

export interface BabyDiaperingCareOtherAssembledProductHeight {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface BabyDiaperingCareOtherAssembledProductLength {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface BabyDiaperingCareOtherAssembledProductWeight {
	measure?: number;
	unit?: AssembledProductWeightUnit;
}

export interface BabyDiaperingCareOtherAssembledProductWidth {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface BabyDiaperingCareOtherFabricContent {
	materialName?: string;
	materialPercentage?: number;
}

export interface BabyDiaperingCareOtherLabelImage {
	labelImageContains: LabelImageContains;
	labelImageURL: string;
}

export interface BabyDiaperingCareOtherMaximumRecommendedAge {
	measure?: number;
	unit?: MaximumRecommendedAgeUnit;
}

export interface BabyDiaperingCareOtherMaximumWeight {
	measure?: number;
	unit?: PurpleUnit;
}

export interface BabyDiaperingCareOtherMinimumRecommendedAge {
	measure?: number;
	unit?: MaximumRecommendedAgeUnit;
}

export interface BabyDiaperingCareOtherMinimumWeight {
	measure?: number;
	unit?: AssembledProductWeightUnit;
}

export interface BabyDiaperingCareOtherShelfLife {
	measure?: number;
	unit?: ShelfLifeUnit;
}

export interface BabyDiaperingCareOtherSwatchImage {
	swatchImageUrl?: string;
	swatchVariantAttribute?: BabyDiaperingCareOtherVariantAttributeName;
}

export enum BabyDiaperingCareOtherVariantAttributeName {
	Character = 'character',
	Color = 'color',
	Count = 'count',
	CountPerPack = 'countPerPack',
	DiaperSize = 'diaperSize',
	Pattern = 'pattern',
	Scent = 'scent',
	Size = 'size',
	SportsTeam = 'sportsTeam',
}

export interface BabyFood {
	additionalProductAttributes?: BabyFoodAdditionalProductAttribute[];
	ageGroup?: BabyDiaperingCareOtherAgeGroup[];
	babyFoodPackaging?: string;
	babyFoodStage?: string[];
	babyFormulaStage?: string[];
	calories?: BabyFoodCalories;
	caloriesFromFat?: BabyFoodCaloriesFromFat;
	character?: string[];
	containerType?: string[];
	count?: string;
	countPerPack?: number;
	cuisine?: string[];
	features?: string[];
	flavor?: string;
	fluidOuncesSupplying100Calories?: FluidOuncesSupplying100Calories;
	foodAllergenStatements?: string[];
	foodForm?: string;
	foodPreparationTips?: string[];
	globalBrandLicense?: string[];
	ingredients?: string;
	instructions?: string;
	isPrimaryVariant?: MustShipAlone;
	keyFeatures?: string[];
	labelImage: BabyFoodLabelImage[];
	mainImageUrl: string;
	manufacturer: string;
	maximumRecommendedAge?: BabyFoodMaximumRecommendedAge;
	meal?: string;
	minimumRecommendedAge?: BabyFoodMinimumRecommendedAge;
	msrp?: number;
	nutrientFootnote?: string;
	nutrients?: BabyFoodNutrient[];
	productSecondaryImageURL?: string[];
	prop65WarningText: string;
	safeHandlingInstructions?: string;
	servingSize?: string;
	servingsPerContainer?: number;
	shelfLife?: BabyFoodShelfLife;
	shortDescription: string;
	size?: string;
	swatchImages?: BabyFoodSwatchImage[];
	totalCarbohydrate?: BabyFoodTotalCarbohydrate;
	totalCarbohydratePercentageDailyValue?: number;
	totalFat?: BabyFoodTotalFat;
	totalFatPercentageDailyValue?: number;
	totalProtein?: BabyFoodTotalProtein;
	totalProteinPercentageDailyValue?: number;
	variantAttributeNames?: BabyFoodVariantAttributeName[];
	variantGroupId?: string;
}

export interface BabyFoodAdditionalProductAttribute {
	productAttributeName: string;
	productAttributeValue: string;
}

export interface BabyFoodCalories {
	measure?: number;
	unit?: CaloriesUnit;
}

export enum CaloriesUnit {
	Calories = 'Calories',
}

export interface BabyFoodCaloriesFromFat {
	measure?: number;
	unit?: CaloriesUnit;
}

export interface FluidOuncesSupplying100Calories {
	measure?: number;
	unit?: FluidOuncesSupplying100CaloriesUnit;
}

export enum FluidOuncesSupplying100CaloriesUnit {
	FLOz = 'fl oz',
}

export interface BabyFoodLabelImage {
	labelImageContains: LabelImageContains;
	labelImageURL: string;
}

export interface BabyFoodMaximumRecommendedAge {
	measure?: number;
	unit?: MaximumRecommendedAgeUnit;
}

export interface BabyFoodMinimumRecommendedAge {
	measure?: number;
	unit?: MaximumRecommendedAgeUnit;
}

export interface BabyFoodNutrient {
	nutrientAmount?: string;
	nutrientName?: string;
	nutrientPercentageDailyValue?: string;
}

export interface BabyFoodShelfLife {
	measure?: number;
	unit?: ShelfLifeUnit;
}

export interface BabyFoodSwatchImage {
	swatchImageUrl?: string;
	swatchVariantAttribute?: BabyFoodVariantAttributeName;
}

export enum BabyFoodVariantAttributeName {
	Character = 'character',
	Count = 'count',
	CountPerPack = 'countPerPack',
	Flavor = 'flavor',
	Size = 'size',
}

export interface BabyFoodTotalCarbohydrate {
	measure?: number;
	unit?: TotalCarbohydrateUnit;
}

export enum TotalCarbohydrateUnit {
	G = 'g',
}

export interface BabyFoodTotalFat {
	measure?: number;
	unit?: TotalCarbohydrateUnit;
}

export interface BabyFoodTotalProtein {
	measure?: number;
	unit?: TotalCarbohydrateUnit;
}

export interface BabyFurniture {
	additionalProductAttributes?: BabyFurnitureAdditionalProductAttribute[];
	ageGroup?: ArtCraftAgeGroup[];
	assembledProductHeight?: BabyFurnitureAssembledProductHeight;
	assembledProductLength?: BabyFurnitureAssembledProductLength;
	assembledProductWeight?: BabyFurnitureAssembledProductWeight;
	assembledProductWidth?: BabyFurnitureAssembledProductWidth;
	assemblyInstructions?: string;
	athlete?: string[];
	babyCribType?: BabyCribType;
	bedSize?: string;
	character?: string[];
	collection?: string;
	color?: string[];
	colorCategory?: ColorCategory[];
	compositeWoodCertificationCode: CompositeWoodCertificationCode;
	count?: string;
	countPerPack?: number;
	countryOfOriginTextiles: CountryOfOriginTextiles;
	fabricCareInstructions?: string[];
	fabricContent?: BabyFurnitureFabricContent[];
	features?: string[];
	fillMaterial?: string[];
	finish?: string;
	gender?: BabyClothingGender;
	globalBrandLicense?: string[];
	homeDecorStyle?: string;
	isAssemblyRequired?: MustShipAlone;
	isFoldable?: MustShipAlone;
	isPrimaryVariant?: MustShipAlone;
	isWheeled?: MustShipAlone;
	keyFeatures?: string[];
	mainImageUrl: string;
	manufacturer: string;
	manufacturerPartNumber?: string;
	material?: string[];
	mattressFirmness?: string;
	maximumRecommendedAge?: BabyFurnitureMaximumRecommendedAge;
	maximumWeight?: BabyFurnitureMaximumWeight;
	minimumRecommendedAge?: BabyFurnitureMinimumRecommendedAge;
	minimumWeight?: BabyFurnitureMinimumWeight;
	modelNumber?: string;
	msrp?: number;
	pattern?: string[];
	pieceCount?: number;
	productSecondaryImageURL?: string[];
	prop65WarningText: string;
	shape?: string;
	shortDescription: string;
	size?: string;
	sportsLeague?: string[];
	sportsTeam?: string[];
	swatchImages?: BabyFurnitureSwatchImage[];
	variantAttributeNames?: BabyFurnitureVariantAttributeName[];
	variantGroupId?: string;
	warrantyText?: string;
	warrantyURL?: string;
}

export interface BabyFurnitureAdditionalProductAttribute {
	productAttributeName: string;
	productAttributeValue: string;
}

export interface BabyFurnitureAssembledProductHeight {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface BabyFurnitureAssembledProductLength {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface BabyFurnitureAssembledProductWeight {
	measure?: number;
	unit?: AssembledProductWeightUnit;
}

export interface BabyFurnitureAssembledProductWidth {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export enum BabyCribType {
	ConvertibleCribs = 'Convertible Cribs',
	Cradles = 'Cradles',
	CribChangerCombos = 'Crib & Changer Combos',
	MiniCribs = 'Mini Cribs',
	NurserySets = 'Nursery Sets',
	PortableCribs = 'Portable Cribs',
	StandardCribs = 'Standard Cribs',
}

export interface BabyFurnitureFabricContent {
	materialName?: string;
	materialPercentage?: number;
}

export interface BabyFurnitureMaximumRecommendedAge {
	measure?: number;
	unit?: MaximumRecommendedAgeUnit;
}

export interface BabyFurnitureMaximumWeight {
	measure?: number;
	unit?: PurpleUnit;
}

export interface BabyFurnitureMinimumRecommendedAge {
	measure?: number;
	unit?: MaximumRecommendedAgeUnit;
}

export interface BabyFurnitureMinimumWeight {
	measure?: number;
	unit?: AssembledProductWeightUnit;
}

export interface BabyFurnitureSwatchImage {
	swatchImageUrl?: string;
	swatchVariantAttribute?: BabyFurnitureVariantAttributeName;
}

export enum BabyFurnitureVariantAttributeName {
	Character = 'character',
	Color = 'color',
	Count = 'count',
	CountPerPack = 'countPerPack',
	Finish = 'finish',
	Pattern = 'pattern',
	Size = 'size',
	SportsTeam = 'sportsTeam',
}

export interface BabyToys {
	additionalProductAttributes?: BabyToysAdditionalProductAttribute[];
	animalType?: string;
	assembledProductHeight?: BabyToysAssembledProductHeight;
	assembledProductLength?: BabyToysAssembledProductLength;
	assembledProductWeight?: BabyToysAssembledProductWeight;
	assembledProductWidth?: BabyToysAssembledProductWidth;
	assemblyInstructions?: string;
	athlete?: string[];
	awardsWon?: string[];
	character?: string[];
	color?: string[];
	colorCategory?: ColorCategory[];
	compositeWoodCertificationCode: CompositeWoodCertificationCode;
	count?: string;
	countPerPack?: number;
	educationalFocus?: string[];
	fabricCareInstructions?: string[];
	fabricContent?: BabyToysFabricContent[];
	features?: string[];
	gender?: BabyClothingGender;
	globalBrandLicense?: string[];
	isAssemblyRequired?: MustShipAlone;
	isPowered?: MustShipAlone;
	isPrimaryVariant?: MustShipAlone;
	keyFeatures?: string[];
	mainImageUrl: string;
	makesNoise?: MustShipAlone;
	manufacturer: string;
	manufacturerPartNumber?: string;
	material?: string[];
	maximumRecommendedAge?: BabyToysMaximumRecommendedAge;
	maximumWeight?: BabyToysMaximumWeight;
	minimumRecommendedAge?: BabyToysMinimumRecommendedAge;
	minimumWeight?: BabyToysMinimumWeight;
	modelNumber?: string;
	msrp?: number;
	pattern?: string[];
	pieceCount?: number;
	powerType?: string;
	productSecondaryImageURL?: string[];
	prop65WarningText: string;
	scent?: string;
	screenSize?: BabyToysScreenSize;
	season?: string[];
	shortDescription: string;
	size?: string;
	smallPartsWarnings: SmallPartsWarningCode[];
	sportsLeague?: string[];
	sportsTeam?: string[];
	swatchImages?: BabyToysSwatchImage[];
	theme?: string[];
	variantAttributeNames?: BabyToysVariantAttributeName[];
	variantGroupId?: string;
	warrantyText?: string;
	warrantyURL?: string;
}

export interface BabyToysAdditionalProductAttribute {
	productAttributeName: string;
	productAttributeValue: string;
}

export interface BabyToysAssembledProductHeight {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface BabyToysAssembledProductLength {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface BabyToysAssembledProductWeight {
	measure?: number;
	unit?: AssembledProductWeightUnit;
}

export interface BabyToysAssembledProductWidth {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface BabyToysFabricContent {
	materialName?: string;
	materialPercentage?: number;
}

export interface BabyToysMaximumRecommendedAge {
	measure?: number;
	unit?: MaximumRecommendedAgeUnit;
}

export interface BabyToysMaximumWeight {
	measure?: number;
	unit?: PurpleUnit;
}

export interface BabyToysMinimumRecommendedAge {
	measure?: number;
	unit?: MaximumRecommendedAgeUnit;
}

export interface BabyToysMinimumWeight {
	measure?: number;
	unit?: AssembledProductWeightUnit;
}

export interface BabyToysScreenSize {
	measure?: number;
	unit?: ScreenSizeUnit;
}

export enum ScreenSizeUnit {
	In = 'in',
}

export interface BabyToysSwatchImage {
	swatchImageUrl?: string;
	swatchVariantAttribute?: BabyToysVariantAttributeName;
}

export enum BabyToysVariantAttributeName {
	Character = 'character',
	Color = 'color',
	Count = 'count',
	CountPerPack = 'countPerPack',
	Pattern = 'pattern',
	Scent = 'scent',
	Size = 'size',
	SportsTeam = 'sportsTeam',
}

export interface BabyTransport {
	additionalProductAttributes?: BabyTransportAdditionalProductAttribute[];
	ageGroup?: ArtCraftAgeGroup[];
	assembledProductHeight?: BabyTransportAssembledProductHeight;
	assembledProductLength?: BabyTransportAssembledProductLength;
	assembledProductWeight?: BabyTransportAssembledProductWeight;
	assembledProductWidth?: BabyTransportAssembledProductWidth;
	assemblyInstructions?: string;
	athlete?: string[];
	babyCarrierPosition?: string[];
	babyCarrierStyle?: string[];
	carSeatBaseDepth?: CarSeatBaseDepth;
	carSeatBaseWidth?: CarSeatBaseWidth;
	carSeatMaxChildHeight?: CarSeatMaxChildHeight;
	character?: string[];
	childCarSeatType?: ChildCarSeatStyle;
	childWalkingHarnessStyle?: string;
	color?: string[];
	colorCategory?: ColorCategory[];
	count?: string;
	countPerPack?: number;
	countryOfOriginTextiles: CountryOfOriginTextiles;
	fabricCareInstructions?: string[];
	fabricContent?: BabyTransportFabricContent[];
	facingDirection?: string;
	features?: string[];
	forwardFacingMaximumWeight?: ForwardFacingMaximumWeight;
	forwardFacingMinimumWeight?: ForwardFacingMinimumWeight;
	gender?: BabyClothingGender;
	globalBrandLicense?: string[];
	hasLatchSystem?: MustShipAlone;
	isAssemblyRequired?: MustShipAlone;
	isFoldable?: MustShipAlone;
	isPrimaryVariant?: MustShipAlone;
	isWheeled?: MustShipAlone;
	keyFeatures?: string[];
	mainImageUrl: string;
	manufacturer: string;
	manufacturerPartNumber?: string;
	material?: string[];
	maximumRecommendedAge?: BabyTransportMaximumRecommendedAge;
	maximumWeight?: BabyTransportMaximumWeight;
	minimumRecommendedAge?: BabyTransportMinimumRecommendedAge;
	minimumWeight?: BabyTransportMinimumWeight;
	modelNumber?: string;
	msrp?: number;
	pattern?: string[];
	pieceCount?: number;
	productSecondaryImageURL?: string[];
	prop65WarningText: string;
	rearFacingMaximumWeight?: RearFacingMaximumWeight;
	rearFacingMinimumWeight?: RearFacingMinimumWeight;
	safetyHarnessStyle?: SafetyHarnessStyle;
	seatingCapacity?: number;
	shortDescription: string;
	size?: string;
	sportsLeague?: string[];
	sportsTeam?: string[];
	strollerType?: string[];
	swatchImages?: BabyTransportSwatchImage[];
	travelSystemCompatibility?: string;
	variantAttributeNames?: BabyTransportVariantAttributeName[];
	variantGroupId?: string;
	warrantyText?: string;
	warrantyURL?: string;
}

export interface BabyTransportAdditionalProductAttribute {
	productAttributeName: string;
	productAttributeValue: string;
}

export interface BabyTransportAssembledProductHeight {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface BabyTransportAssembledProductLength {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface BabyTransportAssembledProductWeight {
	measure?: number;
	unit?: AssembledProductWeightUnit;
}

export interface BabyTransportAssembledProductWidth {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface CarSeatBaseDepth {
	measure?: number;
	unit?: CarSeatBaseDepthUnit;
}

export enum CarSeatBaseDepthUnit {
	CM = 'cm',
	In = 'in',
}

export interface CarSeatBaseWidth {
	measure?: number;
	unit?: CarSeatBaseDepthUnit;
}

export interface CarSeatMaxChildHeight {
	measure?: number;
	unit?: CarSeatBaseDepthUnit;
}

export enum ChildCarSeatStyle {
	BacklessBooster = 'Backless Booster',
	CombinationSeat = 'Combination Seat',
	ConvertibleCarSeats = 'Convertible Car Seats',
	HighBackBooster = 'High-back Booster',
	InfantSeat = 'Infant Seat',
	OverheadShieldConvertible = 'Overhead Shield Convertible',
	The5PointConvertible = '5-Point Convertible',
}

export interface BabyTransportFabricContent {
	materialName?: string;
	materialPercentage?: number;
}

export interface ForwardFacingMaximumWeight {
	measure?: number;
	unit?: ForwardFacingMaximumWeightUnit;
}

export enum ForwardFacingMaximumWeightUnit {
	Kg = 'kg',
	LB = 'lb',
}

export interface ForwardFacingMinimumWeight {
	measure?: number;
	unit?: ForwardFacingMaximumWeightUnit;
}

export interface BabyTransportMaximumRecommendedAge {
	measure?: number;
	unit?: MaximumRecommendedAgeUnit;
}

export interface BabyTransportMaximumWeight {
	measure?: number;
	unit?: PurpleUnit;
}

export interface BabyTransportMinimumRecommendedAge {
	measure?: number;
	unit?: MaximumRecommendedAgeUnit;
}

export interface BabyTransportMinimumWeight {
	measure?: number;
	unit?: AssembledProductWeightUnit;
}

export interface RearFacingMaximumWeight {
	measure?: number;
	unit?: ForwardFacingMaximumWeightUnit;
}

export interface RearFacingMinimumWeight {
	measure?: number;
	unit?: ForwardFacingMaximumWeightUnit;
}

export enum SafetyHarnessStyle {
	NoHarness = 'no harness',
	The3PointHarness = '3-point harness',
	The5PointHarness = '5-point harness',
}

export interface BabyTransportSwatchImage {
	swatchImageUrl?: string;
	swatchVariantAttribute?: BabyTransportVariantAttributeName;
}

export enum BabyTransportVariantAttributeName {
	Character = 'character',
	Color = 'color',
	Count = 'count',
	CountPerPack = 'countPerPack',
	Pattern = 'pattern',
	Size = 'size',
	SportsTeam = 'sportsTeam',
}

export interface BeautyPersonalCareHygiene {
	absorbency?: string;
	activeIngredients?: BeautyPersonalCareHygieneActiveIngredient[];
	additionalProductAttributes?: BeautyPersonalCareHygieneAdditionalProductAttribute[];
	ageGroup?: ArtCraftAgeGroup[];
	assembledProductHeight?: BeautyPersonalCareHygieneAssembledProductHeight;
	assembledProductLength?: BeautyPersonalCareHygieneAssembledProductLength;
	assembledProductWeight?: BeautyPersonalCareHygieneAssembledProductWeight;
	assembledProductWidth?: BeautyPersonalCareHygieneAssembledProductWidth;
	athlete?: string[];
	batteriesRequired?: MustShipAlone;
	bodyParts?: string[];
	bodySprayType?: BodySprayType;
	cleaningCareAndMaintenance?: string;
	collection?: string;
	color?: string[];
	colorCategory?: ColorCategory[];
	compatibleBrands?: string[];
	count?: string;
	countPerPack?: number;
	drugActiveInactiveIngredientsImage?: string;
	drugDosageInstructionsImage?: string;
	features?: string[];
	flavor?: string;
	form?: string;
	gender?: BabyClothingGender;
	globalBrandLicense?: string[];
	hairCareKeyBenefit?: HairCareKeyBenefit[];
	hairColorCategory?: HairColorCategory;
	hairProductForm?: HairProductForm;
	hairType?: string;
	inactiveIngredients?: string[];
	ingredients?: string;
	instructions?: string;
	isAdultProduct?: MustShipAlone;
	isControlledSubstance?: MustShipAlone;
	isDisposable?: MustShipAlone;
	isHypoallergenic?: MustShipAlone;
	isNoncomodegenic?: MustShipAlone;
	isPortable?: MustShipAlone;
	isPowered?: MustShipAlone;
	isPrimaryVariant?: MustShipAlone;
	isReusable?: MustShipAlone;
	isSelfTanning?: MustShipAlone;
	isSet?: MustShipAlone;
	isTinted?: MustShipAlone;
	isTravelSize?: MustShipAlone;
	isUnscented?: MustShipAlone;
	isWaterproof?: MustShipAlone;
	keyFeatures?: string[];
	labelImage: BeautyPersonalCareHygieneLabelImage[];
	mainImageUrl: string;
	makeupForm?: MakeupForm[];
	manufacturer: string;
	manufacturerPartNumber?: string;
	material?: string[];
	medicineStrength?: string;
	modelNumber?: string;
	msrp?: number;
	perfumeCologneType?: PerfumeCologneType;
	pieceCount?: number;
	powerType?: string;
	productSecondaryImageURL?: string[];
	prop65WarningText: string;
	recommendedUses?: string[];
	resultTime?: ResultTime;
	scent?: string;
	shortDescription: string;
	size?: string;
	skinCareConcern?: string[];
	skinTone?: string;
	skinType?: string;
	spfValue?: number;
	sportsLeague?: string[];
	sportsTeam?: string[];
	stopUseIndications?: string[];
	swatchImages?: BeautyPersonalCareHygieneSwatchImage[];
	variantAttributeNames?: BeautyPersonalCareHygieneVariantAttributeName[];
	variantGroupId?: string;
	wigCapStyle?: WigCapStyle;
}

export interface BeautyPersonalCareHygieneActiveIngredient {
	activeIngredientName?: string;
	activeIngredientPercentage?: number;
}

export interface BeautyPersonalCareHygieneAdditionalProductAttribute {
	productAttributeName: string;
	productAttributeValue: string;
}

export interface BeautyPersonalCareHygieneAssembledProductHeight {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface BeautyPersonalCareHygieneAssembledProductLength {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface BeautyPersonalCareHygieneAssembledProductWeight {
	measure?: number;
	unit?: AssembledProductWeightUnit;
}

export interface BeautyPersonalCareHygieneAssembledProductWidth {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export enum BodySprayType {
	Mist = 'Mist',
	Spray = 'Spray',
}

export enum HairCareKeyBenefit {
	Clarifying = 'Clarifying',
	ColorProtection = 'Color Protection',
	CurlEnhancing = 'Curl Enhancing',
	DandruffRelief = 'Dandruff Relief',
	FrizzControl = 'Frizz Control',
	GrayReduction = 'Gray Reduction',
	HeatProtection = 'Heat Protection',
	Moisturizing = 'Moisturizing',
	StrengtheningSplitEndRepair = 'Strengthening & Split End Repair',
	Thickening = 'Thickening',
	Volumizing = 'Volumizing',
}

export enum HairColorCategory {
	Auburn = 'Auburn',
	Black = 'Black',
	Blonde = 'Blonde',
	Brown = 'Brown',
	Grey = 'Grey',
	NonNatural = 'Non-Natural',
	Red = 'Red',
	Silver = 'Silver',
	White = 'White',
}

export enum HairProductForm {
	Bars = 'Bars',
	Creams = 'Creams',
	Fibers = 'Fibers',
	Gels = 'Gels',
	Liquids = 'Liquids',
	Mousses = 'Mousses',
	Oils = 'Oils',
	Pomades = 'Pomades',
	Sprays = 'Sprays',
	Sticks = 'Sticks',
	Tablets = 'Tablets',
	Waxes = 'Waxes',
}

export interface BeautyPersonalCareHygieneLabelImage {
	labelImageContains: LabelImageContains;
	labelImageURL: string;
}

export enum MakeupForm {
	Balms = 'Balms',
	Crayons = 'Crayons',
	Creams = 'Creams',
	Cushions = 'Cushions',
	Gels = 'Gels',
	Glosses = 'Glosses',
	Liquids = 'Liquids',
	LoosePowders = 'Loose Powders',
	Mousses = 'Mousses',
	Pencils = 'Pencils',
	PressedPowdersOils = 'Pressed Powders: Oils',
	Sprays = 'Sprays',
	Sticks = 'Sticks',
	Tubes = 'Tubes',
	Wipes = 'Wipes',
}

export enum PerfumeCologneType {
	Colognes = 'Colognes',
	Perfumes = 'Perfumes',
}

export interface ResultTime {
	measure?: number;
	unit?: ResultTimeUnit;
}

export enum ResultTimeUnit {
	H = 'h',
	Min = 'min',
}

export interface BeautyPersonalCareHygieneSwatchImage {
	swatchImageUrl?: string;
	swatchVariantAttribute?: BeautyPersonalCareHygieneVariantAttributeName;
}

export enum BeautyPersonalCareHygieneVariantAttributeName {
	Color = 'color',
	Count = 'count',
	CountPerPack = 'countPerPack',
	Flavor = 'flavor',
	MedicineStrength = 'medicineStrength',
	Scent = 'scent',
	Size = 'size',
	SportsTeam = 'sportsTeam',
}

export enum WigCapStyle {
	FullLace = 'Full Lace',
	LaceFrontWigCaps = 'Lace Front Wig Caps',
	Monofiliment = 'Monofiliment',
	The100HandTied = '100% Hand-Tied',
	ThinSkinWigCaps = 'Thin Skin Wig Caps',
	WeftedWigCaps = 'Wefted Wig Caps',
}

export interface Bedding {
	additionalProductAttributes?: BeddingAdditionalProductAttribute[];
	ageGroup?: ArtCraftAgeGroup[];
	assembledProductHeight?: BeddingAssembledProductHeight;
	assembledProductLength?: BeddingAssembledProductLength;
	assembledProductWeight?: BeddingAssembledProductWeight;
	assembledProductWidth?: BeddingAssembledProductWidth;
	athlete?: string[];
	bedPillowSize?: string[];
	bedSize?: string;
	bedStyle?: string;
	character?: string[];
	collection?: string;
	color?: string[];
	colorCategory?: ColorCategory[];
	count?: string;
	countPerPack?: number;
	countryOfOriginTextiles: CountryOfOriginTextiles;
	fabricCareInstructions?: string[];
	fabricContent?: BeddingFabricContent[];
	features?: string[];
	fillMaterial?: string[];
	gender?: ArtCraftGender;
	globalBrandLicense?: string[];
	homeDecorStyle?: string;
	isPrimaryVariant?: MustShipAlone;
	isSet?: MustShipAlone;
	keyFeatures?: string[];
	mainImageUrl: string;
	manufacturer: string;
	manufacturerPartNumber?: string;
	material?: string[];
	mattressFirmness?: string;
	modelNumber?: string;
	monogramLetter?: string;
	msrp?: number;
	occasion?: string[];
	pattern?: string[];
	pieceCount?: number;
	productSecondaryImageURL?: string[];
	prop65WarningText: string;
	shape?: string;
	shortDescription: string;
	size?: string;
	smallPartsWarnings: SmallPartsWarningCode[];
	sportsLeague?: string[];
	sportsTeam?: string[];
	swatchImages?: BeddingSwatchImage[];
	theme?: string[];
	threadCount?: number;
	variantAttributeNames?: BeddingVariantAttributeName[];
	variantGroupId?: string;
	warrantyText?: string;
	warrantyURL?: string;
}

export interface BeddingAdditionalProductAttribute {
	productAttributeName: string;
	productAttributeValue: string;
}

export interface BeddingAssembledProductHeight {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface BeddingAssembledProductLength {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface BeddingAssembledProductWeight {
	measure?: number;
	unit?: AssembledProductWeightUnit;
}

export interface BeddingAssembledProductWidth {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface BeddingFabricContent {
	materialName?: string;
	materialPercentage?: number;
}

export interface BeddingSwatchImage {
	swatchImageUrl?: string;
	swatchVariantAttribute?: BeddingVariantAttributeName;
}

export enum BeddingVariantAttributeName {
	AssembledProductHeight = 'assembledProductHeight',
	AssembledProductLength = 'assembledProductLength',
	AssembledProductWidth = 'assembledProductWidth',
	BedSize = 'bedSize',
	Character = 'character',
	Color = 'color',
	Count = 'count',
	CountPerPack = 'countPerPack',
	FabricMaterialName = 'fabricMaterialName',
	Firmness = 'Firmness',
	HomeDecorStyle = 'homeDecorStyle',
	Material = 'material',
	Pattern = 'pattern',
	Shape = 'shape',
	Size = 'size',
	SportsTeam = 'sportsTeam',
}

export interface BuildingSupply {
	accessoriesIncluded?: string[];
	acRating?: ACRating;
	additionalProductAttributes?: BuildingSupplyAdditionalProductAttribute[];
	assembledProductHeight?: BuildingSupplyAssembledProductHeight;
	assembledProductLength?: BuildingSupplyAssembledProductLength;
	assembledProductWeight?: BuildingSupplyAssembledProductWeight;
	assembledProductWidth?: BuildingSupplyAssembledProductWidth;
	carpetStyle?: string;
	cleaningCareAndMaintenance?: string;
	color?: string[];
	colorCategory?: ColorCategory[];
	compositeWoodCertificationCode: CompositeWoodCertificationCode;
	count?: string;
	countPerPack?: number;
	coverageArea?: BuildingSupplyCoverageArea;
	doorOpeningStyle?: string;
	doorStyle?: string;
	dryTime?: DryTime;
	features?: string[];
	fineness?: string;
	form?: string;
	globalBrandLicense?: string[];
	grade?: string;
	hasLowEmissivity?: MustShipAlone;
	ingredients?: string;
	isBiodegradable?: MustShipAlone;
	isCombustible?: MustShipAlone;
	isEnergyStarCertified?: MustShipAlone;
	isFastSetting?: MustShipAlone;
	isFireResistant?: MustShipAlone;
	isFlammable?: MustShipAlone;
	isMadeFromReclaimedMaterials?: MustShipAlone;
	isMadeFromRecycledMaterial?: MustShipAlone;
	isMadeFromSustainableMaterials?: MustShipAlone;
	isMoldResistant?: MustShipAlone;
	isOdorless?: MustShipAlone;
	isPrefinished?: MustShipAlone;
	isPrimaryVariant?: MustShipAlone;
	isReadyToUse?: MustShipAlone;
	isWaterproof?: MustShipAlone;
	isWaterSoluble?: MustShipAlone;
	keyFeatures?: string[];
	mainImageUrl: string;
	manufacturer: string;
	manufacturerPartNumber?: string;
	material?: string[];
	modelNumber?: string;
	msrp?: number;
	paintFinish?: string;
	pattern?: string[];
	peiRating?: string;
	pieceCount?: number;
	pileHeight?: PileHeight;
	powerType?: string;
	productSecondaryImageURL?: string[];
	prop65WarningText: string;
	recommendedSurfaces?: string[];
	recommendedUses?: string[];
	recycledMaterialContent?: BuildingSupplyRecycledMaterialContent[];
	rollLength?: RollLength;
	shape?: string;
	shortDescription: string;
	size?: string;
	snowLoadRating?: SnowLoadRating;
	swatchImages?: BuildingSupplySwatchImage[];
	thickness?: Thickness;
	variantAttributeNames?: BuildingSupplyVariantAttributeName[];
	variantGroupId?: string;
	vocLevel?: string;
	warrantyText?: string;
	warrantyURL?: string;
}

export enum ACRating {
	Ac1 = 'AC1',
	Ac2 = 'AC2',
	Ac3 = 'AC3',
	Ac4 = 'AC4',
	Ac5 = 'AC5',
}

export interface BuildingSupplyAdditionalProductAttribute {
	productAttributeName: string;
	productAttributeValue: string;
}

export interface BuildingSupplyAssembledProductHeight {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface BuildingSupplyAssembledProductLength {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface BuildingSupplyAssembledProductWeight {
	measure?: number;
	unit?: AssembledProductWeightUnit;
}

export interface BuildingSupplyAssembledProductWidth {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface BuildingSupplyCoverageArea {
	measure?: number;
	unit?: CoverageAreaUnit;
}

export enum CoverageAreaUnit {
	SqFt = 'sq ft',
}

export interface DryTime {
	measure?: number;
	unit?: ResultTimeUnit;
}

export interface PileHeight {
	measure?: number;
	unit?: ScreenSizeUnit;
}

export interface BuildingSupplyRecycledMaterialContent {
	percentageOfRecycledMaterial?: number;
	recycledMaterial?: string;
}

export interface RollLength {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface SnowLoadRating {
	measure?: number;
	unit?: SnowLoadRatingUnit;
}

export enum SnowLoadRatingUnit {
	Psf = 'psf',
	Psi = 'psi',
}

export interface BuildingSupplySwatchImage {
	swatchImageUrl?: string;
	swatchVariantAttribute?: BuildingSupplyVariantAttributeName;
}

export enum BuildingSupplyVariantAttributeName {
	AssembledProductHeight = 'assembledProductHeight',
	AssembledProductLength = 'assembledProductLength',
	AssembledProductWidth = 'assembledProductWidth',
	Color = 'color',
	Count = 'count',
	CountPerPack = 'countPerPack',
	Finish = 'finish',
	Grade = 'grade',
	PaintFinish = 'paintFinish',
	Shape = 'shape',
	Size = 'size',
}

export interface Thickness {
	measure?: number;
	unit?: ThicknessUnit;
}

export enum ThicknessUnit {
	In = 'in',
	Mil = 'mil',
}

export interface CamerasLenses {
	accessoriesIncluded?: string[];
	additionalProductAttributes?: CamerasLensesAdditionalProductAttribute[];
	assembledProductHeight?: CamerasLensesAssembledProductHeight;
	assembledProductLength?: CamerasLensesAssembledProductLength;
	assembledProductWeight?: CamerasLensesAssembledProductWeight;
	assembledProductWidth?: CamerasLensesAssembledProductWidth;
	assemblyInstructions?: string;
	attachmentStyle?: string;
	cameraLensType?: string;
	capacity?: string;
	cleaningCareAndMaintenance?: string;
	color?: string[];
	colorCategory?: ColorCategory[];
	compatibleBrands?: string[];
	compatibleDevices?: string[];
	connections?: string[];
	count?: string;
	countPerPack?: number;
	diameter?: CamerasLensesDiameter;
	digitalZoom?: string;
	displayResolution?: string[];
	displayTechnology?: string;
	exposureModes?: string[];
	features?: string[];
	fieldOfView?: string;
	flashType?: string;
	focalLength?: FocalLength;
	focalRatio?: string;
	focusType?: string[];
	globalBrandLicense?: string[];
	hasFlash?: MustShipAlone;
	hasHandle?: MustShipAlone;
	hasMemoryCardSlot?: MustShipAlone;
	hasNightVision?: MustShipAlone;
	hasRedEyeReduction?: MustShipAlone;
	hasSelfTimer?: MustShipAlone;
	hasShoulderStrap?: MustShipAlone;
	hasTouchscreen?: MustShipAlone;
	isAssemblyRequired?: MustShipAlone;
	isFogResistant?: MustShipAlone;
	isMulticoated?: MustShipAlone;
	isParfocal?: MustShipAlone;
	isPortable?: MustShipAlone;
	isPrimaryVariant?: MustShipAlone;
	isWaterproof?: MustShipAlone;
	keyFeatures?: string[];
	lensCoating?: string;
	lensDiameter?: CamerasLensesLensDiameter;
	lensFilterType?: string;
	magnification?: string;
	mainImageUrl: string;
	manufacturer: string;
	manufacturerPartNumber?: string;
	material?: string[];
	maximumAperture?: string;
	maximumShutterSpeed?: MaximumShutterSpeed;
	memoryCardType?: string[];
	microphoneIncluded?: MustShipAlone;
	minimumAperture?: string;
	minimumShutterSpeed?: MinimumShutterSpeed;
	modelNumber?: string;
	msrp?: number;
	numberOfMegapixels?: NumberOfMegapixels;
	opticalZoom?: string;
	pieceCount?: number;
	productSecondaryImageURL?: string[];
	prop65WarningText: string;
	recordableMediaFormats?: string[];
	screenSize?: CamerasLensesScreenSize;
	selfTimerDelay?: string[];
	sensorResolution?: string;
	shootingMode?: string;
	shortDescription: string;
	standbyTime?: CamerasLensesStandbyTime;
	swatchImages?: CamerasLensesSwatchImage[];
	variantAttributeNames?: CamerasLensesVariantAttributeName[];
	variantGroupId?: string;
	warrantyText?: string;
	warrantyURL?: string;
	wirelessTechnologies?: string[];
}

export interface CamerasLensesAdditionalProductAttribute {
	productAttributeName: string;
	productAttributeValue: string;
}

export interface CamerasLensesAssembledProductHeight {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface CamerasLensesAssembledProductLength {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface CamerasLensesAssembledProductWeight {
	measure?: number;
	unit?: AssembledProductWeightUnit;
}

export interface CamerasLensesAssembledProductWidth {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface CamerasLensesDiameter {
	measure?: number;
	unit?: RoughInDistanceUnit;
}

export enum RoughInDistanceUnit {
	CM = 'cm',
	Ft = 'ft',
	In = 'in',
	Mm = 'mm',
}

export interface FocalLength {
	measure?: string;
	unit?: FocalLengthUnit;
}

export enum FocalLengthUnit {
	Mm = 'mm',
}

export interface CamerasLensesLensDiameter {
	measure?: number;
	unit?: FocalLengthUnit;
}

export interface MaximumShutterSpeed {
	measure?: string;
	unit?: MaximumShutterSpeedUnit;
}

export enum MaximumShutterSpeedUnit {
	S = 's',
}

export interface MinimumShutterSpeed {
	measure?: string;
	unit?: MaximumShutterSpeedUnit;
}

export interface NumberOfMegapixels {
	measure?: number;
	unit?: NumberOfMegapixelsUnit;
}

export enum NumberOfMegapixelsUnit {
	Mp = 'MP',
}

export interface CamerasLensesScreenSize {
	measure?: number;
	unit?: ScreenSizeUnit;
}

export interface CamerasLensesStandbyTime {
	measure?: number;
	unit?: StandbyTimeUnit;
}

export enum StandbyTimeUnit {
	H = 'h',
}

export interface CamerasLensesSwatchImage {
	swatchImageUrl?: string;
	swatchVariantAttribute?: CamerasLensesVariantAttributeName;
}

export enum CamerasLensesVariantAttributeName {
	Capacity = 'capacity',
	Color = 'color',
	Count = 'count',
	Diameter = 'diameter',
	DisplayResolution = 'displayResolution',
	FocalLength = 'focalLength',
	Material = 'material',
	Size = 'size',
}

export interface CarriersAccessories {
	additionalProductAttributes?: CarriersAccessoriesAdditionalProductAttribute[];
	ageGroup?: ArtCraftAgeGroup[];
	assembledProductHeight?: CarriersAccessoriesAssembledProductHeight;
	assembledProductLength?: CarriersAccessoriesAssembledProductLength;
	assembledProductWeight?: CarriersAccessoriesAssembledProductWeight;
	assembledProductWidth?: CarriersAccessoriesAssembledProductWidth;
	athlete?: string[];
	autographedBy?: string;
	bagCaseFeature?: string;
	bagStyle?: BagStyle[];
	capacity?: string;
	character?: string[];
	color?: string[];
	colorCategory?: ColorCategory[];
	count?: string;
	countPerPack?: number;
	countryOfOriginTextiles: CountryOfOriginTextiles;
	designer?: string;
	dimensions?: string;
	fabricCareInstructions?: string[];
	fabricContent?: CarriersAccessoriesFabricContent[];
	features?: string[];
	gender?: ArtCraftGender;
	globalBrandLicense?: string[];
	handleMaterial?: string[];
	handleType?: string;
	isFairTrade?: MustShipAlone;
	isLined?: MustShipAlone;
	isMadeFromRecycledMaterial?: MustShipAlone;
	isPrimaryVariant?: MustShipAlone;
	isWaterproof?: MustShipAlone;
	isWeatherResistant?: MustShipAlone;
	isWheeled?: MustShipAlone;
	keyFeatures?: string[];
	leatherGrade?: string;
	lockingMechanism?: string;
	luggageStyle?: string;
	luggageType?: string;
	mainImageUrl: string;
	manufacturer: string;
	manufacturerPartNumber?: string;
	material?: string[];
	modelNumber?: string;
	monogramLetter?: string;
	msrp?: number;
	numberOfWheels?: number;
	pattern?: string[];
	pieceCount?: number;
	productSecondaryImageURL?: string[];
	prop65WarningText: string;
	recycledMaterialContent?: CarriersAccessoriesRecycledMaterialContent[];
	scarfStyle?: string[];
	seasonCode?: SeasonCode;
	seasonYear?: number;
	shape?: string;
	shortDescription: string;
	size?: string;
	sportsLeague?: string[];
	sportsTeam?: string[];
	swatchImages?: CarriersAccessoriesSwatchImage[];
	variantAttributeNames?: CarriersAccessoriesVariantAttributeName[];
	variantGroupId?: string;
	warrantyText?: string;
	warrantyURL?: string;
	zipperMaterial?: string;
}

export interface CarriersAccessoriesAdditionalProductAttribute {
	productAttributeName: string;
	productAttributeValue: string;
}

export interface CarriersAccessoriesAssembledProductHeight {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface CarriersAccessoriesAssembledProductLength {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface CarriersAccessoriesAssembledProductWeight {
	measure?: number;
	unit?: AssembledProductWeightUnit;
}

export interface CarriersAccessoriesAssembledProductWidth {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export enum BagStyle {
	Backpack = 'Backpack',
	BeachBag = 'Beach Bag',
	BeltBagFannyPack = 'Belt Bag/Fanny Pack',
	Briefcase = 'Briefcase',
	ClutchEveningBag = 'Clutch/Evening Bag',
	CrossbodyBag = 'Crossbody Bag',
	GymBag = 'Gym Bag',
	HoboBag = 'Hobo Bag',
	Other = 'Other:',
	Satchel = 'Satchel',
	ShoulderBag = 'Shoulder Bag',
	ToteBag = 'Tote Bag',
	WalletCardCase = 'Wallet/Card Case',
	WeekenderDuffelBag = 'Weekender/Duffel Bag',
}

export interface CarriersAccessoriesFabricContent {
	materialName?: string;
	materialPercentage?: number;
}

export interface CarriersAccessoriesRecycledMaterialContent {
	percentageOfRecycledMaterial?: number;
	recycledMaterial?: string;
}

export interface CarriersAccessoriesSwatchImage {
	swatchImageUrl?: string;
	swatchVariantAttribute?: CarriersAccessoriesVariantAttributeName;
}

export enum CarriersAccessoriesVariantAttributeName {
	AssembledProductHeight = 'assembledProductHeight',
	AssembledProductLength = 'assembledProductLength',
	AssembledProductWidth = 'assembledProductWidth',
	BagStyle = 'bagStyle',
	Capacity = 'capacity',
	Character = 'character',
	Color = 'color',
	Count = 'count',
	CountPerPack = 'countPerPack',
	Material = 'material',
	MonogramLetter = 'monogramLetter',
	Pattern = 'pattern',
	Shape = 'shape',
	Size = 'size',
	SportsTeam = 'sportsTeam',
}

export interface CasesBags {
	additionalProductAttributes?: CasesBagsAdditionalProductAttribute[];
	ageGroup?: ArtCraftAgeGroup[];
	assembledProductHeight?: CasesBagsAssembledProductHeight;
	assembledProductLength?: CasesBagsAssembledProductLength;
	assembledProductWeight?: CasesBagsAssembledProductWeight;
	assembledProductWidth?: CasesBagsAssembledProductWidth;
	athlete?: string[];
	autographedBy?: string;
	capacity?: string;
	character?: string[];
	color?: string[];
	colorCategory?: ColorCategory[];
	compatibleBrands?: string[];
	compatibleDevices?: string[];
	count?: string;
	countPerPack?: number;
	countryOfOriginTextiles: CountryOfOriginTextiles;
	designer?: string;
	fabricCareInstructions?: string[];
	fabricContent?: CasesBagsFabricContent[];
	fastenerType?: string;
	features?: string[];
	finish?: string;
	gender?: ArtCraftGender;
	globalBrandLicense?: string[];
	handleMaterial?: string[];
	handleType?: string;
	hardOrSoftCase?: HardOrSoftCase;
	hasRemovableStrap?: MustShipAlone;
	isFoldable?: MustShipAlone;
	isLined?: MustShipAlone;
	isMadeFromRecycledMaterial?: MustShipAlone;
	isPrimaryVariant?: MustShipAlone;
	isReusable?: MustShipAlone;
	isWaterproof?: MustShipAlone;
	isWeatherResistant?: MustShipAlone;
	isWheeled?: MustShipAlone;
	keyFeatures?: string[];
	leatherGrade?: string;
	lockingMechanism?: string;
	mainImageUrl: string;
	manufacturer: string;
	manufacturerPartNumber?: string;
	material?: string[];
	maximumWeight?: CasesBagsMaximumWeight;
	modelNumber?: string;
	monogramLetter?: string;
	msrp?: number;
	numberOfCompartments?: number;
	numberOfWheels?: number;
	occasion?: string[];
	pattern?: string[];
	pieceCount?: number;
	productSecondaryImageURL?: string[];
	prop65WarningText: string;
	recommendedUses?: string[];
	recycledMaterialContent?: CasesBagsRecycledMaterialContent[];
	screenSize?: CasesBagsScreenSize;
	seasonCode?: SeasonCode;
	seasonYear?: number;
	shape?: string;
	shortDescription: string;
	size?: string;
	sport?: string[];
	sportsLeague?: string[];
	sportsTeam?: string[];
	swatchImages?: CasesBagsSwatchImage[];
	variantAttributeNames?: CarriersAccessoriesVariantAttributeName[];
	variantGroupId?: string;
	warrantyText?: string;
	warrantyURL?: string;
	zipperMaterial?: string;
}

export interface CasesBagsAdditionalProductAttribute {
	productAttributeName: string;
	productAttributeValue: string;
}

export interface CasesBagsAssembledProductHeight {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface CasesBagsAssembledProductLength {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface CasesBagsAssembledProductWeight {
	measure?: number;
	unit?: AssembledProductWeightUnit;
}

export interface CasesBagsAssembledProductWidth {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface CasesBagsFabricContent {
	materialName?: string;
	materialPercentage?: number;
}

export enum HardOrSoftCase {
	Hard = 'Hard',
	Soft = 'Soft',
}

export interface CasesBagsMaximumWeight {
	measure?: number;
	unit?: AssembledProductWeightUnit;
}

export interface CasesBagsRecycledMaterialContent {
	percentageOfRecycledMaterial?: number;
	recycledMaterial?: string;
}

export interface CasesBagsScreenSize {
	measure?: number;
	unit?: ScreenSizeUnit;
}

export interface CasesBagsSwatchImage {
	swatchImageUrl?: string;
	swatchVariantAttribute?: CarriersAccessoriesVariantAttributeName;
}

export interface CellPhones {
	additionalProductAttributes?: CellPhonesAdditionalProductAttribute[];
	batteryLife?: CellPhonesBatteryLife;
	cellPhoneServiceProvider?: string;
	cellPhoneType?: string;
	cellularNetworkTechnology?: string;
	color?: string[];
	compatibleModels?: string[];
	connections?: string[];
	count?: string;
	countPerPack?: number;
	edition?: string;
	features?: string[];
	frontFacingCameraMegapixels?: CellPhonesFrontFacingCameraMegapixels;
	hardDriveCapacity?: CellPhonesHardDriveCapacity;
	hasFlash?: MustShipAlone;
	hasSignalBooster?: MustShipAlone;
	isPrimaryVariant?: MustShipAlone;
	keyFeatures?: string[];
	mainImageUrl: string;
	manufacturer: string;
	manufacturerPartNumber?: string;
	memoryCardType?: string[];
	mobileOperatingSystem?: string[];
	modelName?: string;
	modelNumber?: string;
	msrp?: number;
	productSecondaryImageURL?: string[];
	prop65WarningText: string;
	ramMemory?: CellPhonesRAMMemory;
	rearCameraMegapixels?: CellPhonesRearCameraMegapixels;
	resolution?: string;
	screenSize?: CellPhonesScreenSize;
	shortDescription: string;
	standbyTime?: CellPhonesStandbyTime;
	swatchImages?: CellPhonesSwatchImage[];
	talkTime?: TalkTime;
	variantAttributeNames?: CellPhonesVariantAttributeName[];
	variantGroupId?: string;
	warrantyText?: string;
	warrantyURL?: string;
	wirelessTechnologies?: string[];
}

export interface CellPhonesAdditionalProductAttribute {
	productAttributeName: string;
	productAttributeValue: string;
}

export interface CellPhonesBatteryLife {
	measure?: number;
	unit?: StandbyTimeUnit;
}

export interface CellPhonesFrontFacingCameraMegapixels {
	measure?: number;
	unit?: NumberOfMegapixelsUnit;
}

export interface CellPhonesHardDriveCapacity {
	measure?: number;
	unit?: HardDriveCapacityUnit;
}

export enum HardDriveCapacityUnit {
	GB = 'GB',
	KB = 'KB',
	MB = 'MB',
	Pb = 'PB',
	TB = 'TB',
}

export interface CellPhonesRAMMemory {
	measure?: number;
	unit?: HardDriveCapacityUnit;
}

export interface CellPhonesRearCameraMegapixels {
	measure?: number;
	unit?: NumberOfMegapixelsUnit;
}

export interface CellPhonesScreenSize {
	measure?: number;
	unit?: ScreenSizeUnit;
}

export interface CellPhonesStandbyTime {
	measure?: number;
	unit?: StandbyTimeUnit;
}

export interface CellPhonesSwatchImage {
	swatchImageUrl?: string;
	swatchVariantAttribute?: FluffySwatchVariantAttribute;
}

export enum FluffySwatchVariantAttribute {
	CellPhoneServiceProvider = 'cellPhoneServiceProvider',
	Color = 'color',
	Count = 'count',
	CountPerPack = 'countPerPack',
	Edition = 'edition',
	HardDriveCapacity = 'hardDriveCapacity',
	RAMMemory = 'ramMemory',
	Resolution = 'resolution',
	ScreenSize = 'screenSize',
	Size = 'size',
}

export interface TalkTime {
	measure?: number;
	unit?: StandbyTimeUnit;
}

export enum CellPhonesVariantAttributeName {
	CellPhoneServiceProvider = 'cellPhoneServiceProvider',
	Color = 'color',
	Count = 'count',
	CountPerPack = 'countPerPack',
	Edition = 'edition',
	HardDriveCapacity = 'hardDriveCapacity',
	RAMMemory = 'ramMemory',
	Resolution = 'resolution',
	ScreenSize = 'screenSize',
}

export interface CeremonialClothingAccessories {
	additionalProductAttributes?: CeremonialClothingAccessoriesAdditionalProductAttribute[];
	assembledProductHeight?: CeremonialClothingAccessoriesAssembledProductHeight;
	assembledProductLength?: CeremonialClothingAccessoriesAssembledProductLength;
	assembledProductWeight?: CeremonialClothingAccessoriesAssembledProductWeight;
	assembledProductWidth?: CeremonialClothingAccessoriesAssembledProductWidth;
	clothingSize?: string;
	clothingSizeGroup?: CeremonialClothingAccessoriesClothingSizeGroup;
	color?: string[];
	colorCategory?: ColorCategory[];
	count?: string;
	countPerPack?: number;
	countryOfOriginTextiles: CountryOfOriginTextiles;
	fabricCareInstructions?: string[];
	fabricContent?: CeremonialClothingAccessoriesFabricContent[];
	features?: string[];
	gender?: BabyClothingGender;
	globalBrandLicense?: string[];
	isPrimaryVariant?: MustShipAlone;
	keyFeatures?: string[];
	mainImageUrl: string;
	manufacturer: string;
	manufacturerPartNumber?: string;
	material?: string[];
	modelNumber?: string;
	msrp?: number;
	occasion?: string[];
	pattern?: string[];
	pieceCount?: number;
	productSecondaryImageURL?: string[];
	prop65WarningText: string;
	recommendedUses?: string[];
	shortDescription: string;
	size?: string;
	smallPartsWarnings: SmallPartsWarningCode[];
	swatchImages?: CeremonialClothingAccessoriesSwatchImage[];
	theme?: string[];
	variantAttributeNames?: CeremonialClothingAccessoriesVariantAttributeName[];
	variantGroupId?: string;
}

export interface CeremonialClothingAccessoriesAdditionalProductAttribute {
	productAttributeName: string;
	productAttributeValue: string;
}

export interface CeremonialClothingAccessoriesAssembledProductHeight {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface CeremonialClothingAccessoriesAssembledProductLength {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface CeremonialClothingAccessoriesAssembledProductWeight {
	measure?: number;
	unit?: AssembledProductWeightUnit;
}

export interface CeremonialClothingAccessoriesAssembledProductWidth {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export enum CeremonialClothingAccessoriesClothingSizeGroup {
	BigBoys = 'Big Boys',
	BigBoysHusky = 'Big Boys Husky',
	BigBoysSlim = 'Big Boys Slim',
	BigGirls = 'Big Girls',
	BigGirlsPlus = 'Big Girls Plus',
	BigGirlsSlim = 'Big Girls Slim',
	BigTall = 'Big & Tall',
	Infant = 'Infant',
	Juniors = 'Juniors',
	LittleBoys = 'Little Boys',
	LittleBoysHusky = 'Little Boys Husky',
	LittleBoysSlim = 'Little Boys Slim',
	LittleGirls = 'Little Girls',
	LittleGirlsPlus = 'Little Girls Plus',
	LittleGirlsSlim = 'Little Girls Slim',
	Maternity = 'Maternity',
	MaternityPlus = 'Maternity Plus',
	Men = 'Men',
	Newborn = 'Newborn',
	Petite = 'Petite',
	PetitePlus = 'Petite Plus',
	Plus = 'Plus',
	Preemie = 'Preemie',
	Regular = 'Regular',
	Short = 'Short',
	Tall = 'Tall',
	Toddler = 'Toddler',
	Women = 'Women',
	WomenSPlus = "Women's Plus",
	YoungMenS = 'Young Men’s',
}

export interface CeremonialClothingAccessoriesFabricContent {
	materialName?: string;
	materialPercentage?: number;
}

export interface CeremonialClothingAccessoriesSwatchImage {
	swatchImageUrl?: string;
	swatchVariantAttribute?: CeremonialClothingAccessoriesVariantAttributeName;
}

export enum CeremonialClothingAccessoriesVariantAttributeName {
	ClothingSize = 'clothingSize',
	Color = 'color',
	Count = 'count',
	CountPerPack = 'countPerPack',
	Material = 'material',
	Occasion = 'occasion',
	Pattern = 'pattern',
	Size = 'size',
	Theme = 'theme',
}

export interface Clothing {
	academicInstitution?: string;
	accentColor?: string;
	activity?: string[];
	additionalProductAttributes?: ClothingAdditionalProductAttribute[];
	ageGroup: ArtCraftAgeGroup[];
	athlete?: string[];
	autographedBy?: string;
	beltBuckleStyle?: string;
	beltStyle?: string[];
	braBandSize?: BraBandSize;
	braCupSize?: string;
	braSize?: string;
	braStyle?: string[];
	character?: string[];
	chestSize?: ChestSize;
	clothingCut?: string[];
	clothingFit?: string;
	clothingLengthStyle?: string;
	clothingSize: string;
	clothingSizeGroup?: CeremonialClothingAccessoriesClothingSizeGroup;
	clothingStyle?: string[];
	clothingTopStyle?: string[];
	clothingWeight?: ClothingWeight;
	collarType?: string;
	color: string[];
	colorCategory: ColorCategory[];
	count?: string;
	countPerPack?: number;
	countryOfOriginTextiles: CountryOfOriginTextiles;
	dressShirtSize?: string;
	dressStyle?: string;
	fabricCareInstructions?: string[];
	fabricContent?: ClothingFabricContent[];
	fastenerType?: string;
	features?: string[];
	gender: BabyClothingGender;
	globalBrandLicense?: string[];
	gotsCertification?: MustShipAlone;
	hatSize?: HatSizeMeasurement;
	hatStyle?: string[];
	hosieryStyle?: string[];
	inseam?: Inseam;
	isMaternity?: MustShipAlone;
	isPrimaryVariant?: MustShipAlone;
	isSet?: MustShipAlone;
	jacketStyle?: string[];
	jeanFinish?: string[];
	jeanStyle?: string[];
	jeanWash?: string;
	keyFeatures?: string[];
	legOpeningCut?: LegOpeningCut;
	mainImageUrl: string;
	manufacturer: string;
	manufacturerPartNumber?: string;
	material?: string[];
	modelNumber?: string;
	msrp?: number;
	neckSize?: NeckSize;
	occasion?: string[];
	outerwearCoatJacketAnVestType?: string;
	pajamaType?: string;
	pantFit?: string[];
	pantLegCut?: PantLegCut;
	pantRise?: string;
	pantSize?: string;
	pantStyle?: string;
	pantySize?: PantySize;
	pantyStyle?: string;
	pattern?: string[];
	pieceCount?: number;
	productSecondaryImageURL?: string[];
	prop65WarningText: string;
	recycledMaterialContent?: ClothingRecycledMaterialContent[];
	scarfStyle?: string[];
	season?: string[];
	seasonCode?: SeasonCode;
	seasonYear?: number;
	shirtNeckStyle?: string;
	shoeSize?: string;
	shortDescription: string;
	shortsStyle?: string[];
	skirtAndDressCut?: string[];
	skirtLength?: SkirtLength;
	skirtLengthStyle?: string;
	sleeveLength?: SleeveLength;
	sleeveLengthStyle?: SleeveLengthStyle;
	sleeveStyle?: string;
	smallPartsWarnings: SmallPartsWarningCode[];
	sockRise?: SockRise;
	sockSize?: string;
	sockStyle?: string;
	sport?: string[];
	sportsLeague?: string[];
	sportsTeam?: string[];
	suitBreastingStyle?: SuitBreastingStyle;
	swatchImages?: ClothingSwatchImage[];
	sweaterStyle?: string[];
	swimsuitStyle?: string;
	theme?: string[];
	tightsSheerness?: Sheerness;
	tShirtType?: string[];
	underpantsType?: string;
	underwearStyle?: string[];
	upperBodyStrapConfiguration?: string[];
	variantAttributeNames?: ClothingVariantAttributeName[];
	variantGroupId?: string;
	waistSize?: WaistSize;
	waistStyle?: WaistStyle[];
	warrantyText?: string;
	warrantyURL?: string;
	weather?: string[];
}

export interface ClothingAdditionalProductAttribute {
	productAttributeName: string;
	productAttributeValue: string;
}

export interface BraBandSize {
	measure?: number;
	unit?: ScreenSizeUnit;
}

export interface ChestSize {
	measure?: number;
	unit?: CarSeatBaseDepthUnit;
}

export enum ClothingWeight {
	Heavyweight = 'Heavyweight',
	Lightweight = 'Lightweight',
	MidWeight = 'Mid-Weight',
}

export interface ClothingFabricContent {
	materialName?: string;
	materialPercentage?: number;
}

export enum HatSizeMeasurement {
	The612 = '6 1/2',
	The614 = '6 1/4',
	The634 = '6 3/4',
	The638 = '6 3/8',
	The658 = '6 5/8',
	The678 = '6 7/8',
	The7 = '7',
	The712 = '7 1/2',
	The714 = '7 1/4',
	The718 = '7 1/8',
	The734 = '7 3/4',
	The738 = '7 3/8',
	The758 = '7 5/8',
	The778 = '7 7/8',
	The8 = '8',
	The818 = '8 1/8',
}

export interface Inseam {
	measure?: number;
	unit?: ScreenSizeUnit;
}

export enum LegOpeningCut {
	AtHip = 'At Hip',
	BelowHip = 'Below Hip',
	HighCut = 'High-Cut',
	Regular = 'Regular',
}

export interface NeckSize {
	measure?: number;
	unit?: ScreenSizeUnit;
}

export enum PantLegCut {
	BootCut = 'Boot Cut',
	FlareLeg = 'Flare-Leg',
	SlimLeg = 'Slim-Leg',
	StraightLeg = 'Straight-Leg',
	Taper = 'Taper',
	WideLeg = 'Wide-Leg',
}

export enum PantySize {
	The0 = '0',
	The1 = '1',
	The10 = '10',
	The11 = '11',
	The12 = '12',
	The13 = '13',
	The14 = '14',
	The15 = '15',
	The16 = '16',
	The17 = '17',
	The18 = '18',
	The19 = '19',
	The2 = '2',
	The20 = '20',
	The21 = '21',
	The22 = '22',
	The23 = '23',
	The24 = '24',
	The25 = '25',
	The26 = '26',
	The27 = '27',
	The28 = '28',
	The29 = '29',
	The3 = '3',
	The30 = '30',
	The31 = '31',
	The32 = '32',
	The33 = '33',
	The34 = '34',
	The4 = '4',
	The5 = '5',
	The6 = '6',
	The7 = '7',
	The8 = '8',
	The9 = '9',
}

export interface ClothingRecycledMaterialContent {
	percentageOfRecycledMaterial?: number;
	recycledMaterial?: string;
}

export interface SkirtLength {
	measure?: number;
	unit?: CarSeatBaseDepthUnit;
}

export interface SleeveLength {
	measure?: number;
	unit?: ScreenSizeUnit;
}

export enum SleeveLengthStyle {
	ElbowLength = 'Elbow-Length',
	LongSleeve = 'Long Sleeve',
	ShortSleeve = 'Short Sleeve',
	Sleeveless = 'Sleeveless',
	The14Sleeve = '1/4 Sleeve',
	The34Sleeve = '3/4 Sleeve',
}

export enum SockRise {
	Crew = 'Crew',
	KneeHigh = 'Knee-High',
	LowCut = 'Low-Cut',
	NoShow = 'No-Show',
	Quarter = 'Quarter',
	ThighHigh = 'Thigh-High',
}

export enum SuitBreastingStyle {
	DoubleBreasted = 'Double-Breasted',
	SingleBreasted = 'Single-Breasted',
}

export interface ClothingSwatchImage {
	swatchImageUrl?: string;
	swatchVariantAttribute?: ClothingVariantAttributeName;
}

export enum ClothingVariantAttributeName {
	AcademicInstitution = 'academicInstitution',
	AccentColor = 'accentColor',
	BraBandSize = 'braBandSize',
	BraCupSize = 'braCupSize',
	BraSize = 'braSize',
	Character = 'character',
	ClothingFit = 'clothingFit',
	ClothingSize = 'clothingSize',
	ClothingSizeGroup = 'clothingSizeGroup',
	Color = 'color',
	Count = 'count',
	CountPerPack = 'countPerPack',
	HatSize = 'hatSize',
	Inseam = 'inseam',
	Material = 'material',
	NeckSize = 'neckSize',
	PantySize = 'pantySize',
	Pattern = 'pattern',
	ShoeSize = 'shoeSize',
	SockSize = 'sockSize',
	SportsTeam = 'sportsTeam',
	WaistSize = 'waistSize',
}

export enum Sheerness {
	Opaque = 'Opaque',
	SemiOpaque = 'Semi-Opaque',
	Sheer = 'Sheer',
	ThickOpaque = 'Thick Opaque',
	UltraSheer = 'Ultra-Sheer',
}

export interface WaistSize {
	measure?: number;
	unit?: ScreenSizeUnit;
}

export enum WaistStyle {
	BandedWaist = 'Banded Waist',
	ComfortWaist = 'Comfort Waist',
	DropWaist = 'Drop Waist',
	ElasticWaist = 'Elastic Waist',
	EmpireWaist = 'Empire Waist',
	ExpandableWaist = 'Expandable Waist',
	MaternityWaist = 'Maternity Waist',
	PaperBagWaist = 'Paper Bag Waist',
	RigidWaist = 'Rigid Waist',
	RoseWaist = 'Rose-Waist',
	SeamlessWaistband = 'Seamless Waistband',
}

export interface ComputerComponents {
	additionalProductAttributes?: ComputerComponentsAdditionalProductAttribute[];
	cableLength?: ComputerComponentsCableLength;
	color?: string[];
	connections?: string[];
	count?: string;
	countPerPack?: number;
	cpuSocketType?: string[];
	dataIntegrityCheck?: DataIntegrityCheck;
	edition?: string;
	features?: string[];
	hardDriveCapacity?: ComputerComponentsHardDriveCapacity;
	internalExternal?: InternalExternal;
	isCordless?: MustShipAlone;
	isPrimaryVariant?: MustShipAlone;
	keyFeatures?: string[];
	mainImageUrl: string;
	manufacturer: string;
	manufacturerPartNumber?: string;
	maximumRamSupported?: ComputerComponentsMaximumRAMSupported;
	memoryCardType?: string[];
	modelNumber?: string;
	motherboardFormFactor?: string[];
	mountType?: string[];
	msrp?: number;
	numberOfChannels?: string;
	numberOfKeys?: number;
	numberOfSpeakers?: number;
	pieceCount?: number;
	processorSpeed?: ComputerComponentsProcessorSpeed;
	processorType?: string[];
	productSecondaryImageURL?: string[];
	prop65WarningText: string;
	rackSize?: string;
	RAIDlevel?: RAIDLevel;
	ramMemory?: ComputerComponentsRAMMemory;
	RAMSpeed?: string;
	resolution?: string;
	screenSize?: ComputerComponentsScreenSize;
	shortDescription: string;
	swatchImages?: ComputerComponentsSwatchImage[];
	variantAttributeNames?: ComputerComponentsVariantAttributeName[];
	variantGroupId?: string;
	warrantyText?: string;
	warrantyURL?: string;
	wirelessTechnologies?: string[];
}

export enum RAIDLevel {
	RAID0 = 'RAID 0',
	RAID1 = 'RAID 1',
	RAID2 = 'RAID 2',
	RAID3 = 'RAID 3',
	RAID4 = 'RAID 4',
	RAID5 = 'RAID 5',
	RAID6 = 'RAID 6',
}

export interface ComputerComponentsAdditionalProductAttribute {
	productAttributeName: string;
	productAttributeValue: string;
}

export interface ComputerComponentsCableLength {
	measure?: number;
	unit?: CableLengthUnit;
}

export enum CableLengthUnit {
	CM = 'cm',
	Ft = 'ft',
	In = 'in',
	M = 'm',
}

export enum DataIntegrityCheck {
	ECC = 'ECC',
	NonECC = 'Non-ECC',
}

export interface ComputerComponentsHardDriveCapacity {
	measure?: number;
	unit?: HardDriveCapacityUnit;
}

export enum InternalExternal {
	External = 'External',
	Internal = 'Internal',
}

export interface ComputerComponentsMaximumRAMSupported {
	measure?: number;
	unit?: HardDriveCapacityUnit;
}

export interface ComputerComponentsProcessorSpeed {
	measure?: number;
	unit?: ProcessorSpeedUnit;
}

export enum ProcessorSpeedUnit {
	GHz = 'GHz',
	Hz = 'Hz',
	KHz = 'kHz',
	MHz = 'MHz',
}

export interface ComputerComponentsRAMMemory {
	measure?: number;
	unit?: HardDriveCapacityUnit;
}

export interface ComputerComponentsScreenSize {
	measure?: number;
	unit?: ScreenSizeUnit;
}

export interface ComputerComponentsSwatchImage {
	swatchImageUrl?: string;
	swatchVariantAttribute?: TentacledSwatchVariantAttribute;
}

export enum TentacledSwatchVariantAttribute {
	CableLength = 'cableLength',
	Color = 'color',
	Count = 'count',
	CountPerPack = 'countPerPack',
	Edition = 'edition',
	HardDriveCapacity = 'hardDriveCapacity',
	MountType = 'mountType',
	RAMMemory = 'ramMemory',
	Resolution = 'resolution',
	ScreenSize = 'screenSize',
	Size = 'size',
}

export enum ComputerComponentsVariantAttributeName {
	CableLength = 'cableLength',
	Color = 'color',
	Count = 'count',
	CountPerPack = 'countPerPack',
	Edition = 'edition',
	HardDriveCapacity = 'hardDriveCapacity',
	MountType = 'mountType',
	RAMMemory = 'ramMemory',
	Resolution = 'resolution',
	ScreenSize = 'screenSize',
}

export interface Computers {
	additionalProductAttributes?: ComputersAdditionalProductAttribute[];
	batteryLife?: ComputersBatteryLife;
	color?: string[];
	colorCategory?: ColorCategory[];
	computerStyle?: string;
	connections?: string[];
	count?: string;
	countPerPack?: number;
	dataIntegrityCheck?: DataIntegrityCheck;
	displayTechnology?: string;
	edition?: string;
	features?: string[];
	formFactor?: string;
	frontFacingCameraMegapixels?: ComputersFrontFacingCameraMegapixels;
	globalBrandLicense?: string[];
	graphicsInformation?: string;
	hardDriveCapacity?: ComputersHardDriveCapacity;
	hasSignalBooster?: MustShipAlone;
	hasTouchscreen?: MustShipAlone;
	internalExternal?: InternalExternal;
	isPortable?: MustShipAlone;
	isPrimaryVariant?: MustShipAlone;
	keyFeatures?: string[];
	mainImageUrl: string;
	manufacturer: string;
	manufacturerPartNumber?: string;
	maximumRamSupported?: ComputersMaximumRAMSupported;
	memoryCardType?: string[];
	modelNumber?: string;
	mountType?: string[];
	msrp?: number;
	numberOfChannels?: string;
	numberOfKeys?: number;
	operatingSystem?: string[];
	opticalDrive?: string;
	processorSpeed?: ComputersProcessorSpeed;
	processorType?: string[];
	productSecondaryImageURL?: string[];
	prop65WarningText: string;
	RAIDlevel?: RAIDLevel;
	ramMemory?: ComputersRAMMemory;
	RAMSpeed?: string;
	rearCameraMegapixels?: ComputersRearCameraMegapixels;
	resolution?: string;
	screenSize?: ComputersScreenSize;
	shortDescription: string;
	swatchImages?: ComputersSwatchImage[];
	variantAttributeNames?: ComputersVariantAttributeName[];
	variantGroupId?: string;
	warrantyText?: string;
	warrantyURL?: string;
	wirelessTechnologies?: string[];
}

export interface ComputersAdditionalProductAttribute {
	productAttributeName: string;
	productAttributeValue: string;
}

export interface ComputersBatteryLife {
	measure?: number;
	unit?: StandbyTimeUnit;
}

export interface ComputersFrontFacingCameraMegapixels {
	measure?: number;
	unit?: NumberOfMegapixelsUnit;
}

export interface ComputersHardDriveCapacity {
	measure?: number;
	unit?: HardDriveCapacityUnit;
}

export interface ComputersMaximumRAMSupported {
	measure?: number;
	unit?: HardDriveCapacityUnit;
}

export interface ComputersProcessorSpeed {
	measure?: number;
	unit?: ProcessorSpeedUnit;
}

export interface ComputersRAMMemory {
	measure?: number;
	unit?: HardDriveCapacityUnit;
}

export interface ComputersRearCameraMegapixels {
	measure?: number;
	unit?: NumberOfMegapixelsUnit;
}

export interface ComputersScreenSize {
	measure?: number;
	unit?: ScreenSizeUnit;
}

export interface ComputersSwatchImage {
	swatchImageUrl?: string;
	swatchVariantAttribute?: StickySwatchVariantAttribute;
}

export enum StickySwatchVariantAttribute {
	Color = 'color',
	Configuration = 'configuration',
	Count = 'count',
	CountPerPack = 'countPerPack',
	Edition = 'edition',
	HardDriveCapacity = 'hardDriveCapacity',
	OperatingSystem = 'operatingSystem',
	RAMMemory = 'ramMemory',
	Resolution = 'resolution',
	ScreenSize = 'screenSize',
	Size = 'size',
}

export enum ComputersVariantAttributeName {
	Color = 'color',
	Configuration = 'configuration',
	Count = 'count',
	CountPerPack = 'countPerPack',
	Edition = 'edition',
	HardDriveCapacity = 'hardDriveCapacity',
	OperatingSystem = 'operatingSystem',
	RAMMemory = 'ramMemory',
	Resolution = 'resolution',
	ScreenSize = 'screenSize',
}

export interface Costumes {
	additionalProductAttributes?: CostumesAdditionalProductAttribute[];
	animalType?: string;
	assembledProductHeight?: CostumesAssembledProductHeight;
	assembledProductLength?: CostumesAssembledProductLength;
	assembledProductWeight?: CostumesAssembledProductWeight;
	assembledProductWidth?: CostumesAssembledProductWidth;
	character?: string[];
	clothingSize?: string;
	clothingSizeGroup?: CeremonialClothingAccessoriesClothingSizeGroup;
	color?: string[];
	colorCategory?: ColorCategory[];
	count?: string;
	countPerPack?: number;
	countryOfOriginTextiles: CountryOfOriginTextiles;
	fabricCareInstructions?: string[];
	fabricContent?: CostumesFabricContent[];
	features?: string[];
	gender?: BabyClothingGender;
	globalBrandLicense?: string[];
	isPrimaryVariant?: MustShipAlone;
	keyFeatures?: string[];
	mainImageUrl: string;
	manufacturer: string;
	manufacturerPartNumber?: string;
	material?: string[];
	modelNumber?: string;
	msrp?: number;
	occasion?: string[];
	pattern?: string[];
	pieceCount?: number;
	productSecondaryImageURL?: string[];
	prop65WarningText: string;
	recommendedUses?: string[];
	shortDescription: string;
	size?: string;
	smallPartsWarnings: SmallPartsWarningCode[];
	swatchImages?: CostumesSwatchImage[];
	targetAudience?: string[];
	theme?: string[];
	variantAttributeNames?: CostumesVariantAttributeName[];
	variantGroupId?: string;
	wigStyles?: string[];
}

export interface CostumesAdditionalProductAttribute {
	productAttributeName: string;
	productAttributeValue: string;
}

export interface CostumesAssembledProductHeight {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface CostumesAssembledProductLength {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface CostumesAssembledProductWeight {
	measure?: number;
	unit?: AssembledProductWeightUnit;
}

export interface CostumesAssembledProductWidth {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface CostumesFabricContent {
	materialName?: string;
	materialPercentage?: number;
}

export interface CostumesSwatchImage {
	swatchImageUrl?: string;
	swatchVariantAttribute?: CostumesVariantAttributeName;
}

export enum CostumesVariantAttributeName {
	Character = 'character',
	ClothingSize = 'clothingSize',
	Color = 'color',
	Count = 'count',
	CountPerPack = 'countPerPack',
	Material = 'material',
	Occasion = 'occasion',
	Pattern = 'pattern',
	Size = 'size',
	Theme = 'theme',
}

export interface Cycling {
	additionalProductAttributes?: CyclingAdditionalProductAttribute[];
	ageGroup?: ArtCraftAgeGroup[];
	assembledProductHeight?: CyclingAssembledProductHeight;
	assembledProductLength?: CyclingAssembledProductLength;
	assembledProductWeight?: CyclingAssembledProductWeight;
	assembledProductWidth?: CyclingAssembledProductWidth;
	assemblyInstructions?: string;
	athlete?: string[];
	bicycleFrameSize?: BicycleFrameSize;
	bicycleTireSize?: string;
	bicycleWheelDiameter?: BicycleWheelDiameter;
	capacity?: string;
	character?: string[];
	cleaningCareAndMaintenance?: string;
	clothingSize?: string;
	color?: string[];
	colorCategory?: ColorCategory[];
	count?: string;
	countPerPack?: number;
	countryOfOriginTextiles: CountryOfOriginTextiles;
	dexterity?: string;
	fabricCareInstructions?: string[];
	fabricContent?: CyclingFabricContent[];
	features?: string[];
	finish?: string;
	gender?: BabyClothingGender;
	globalBrandLicense?: string[];
	horsepower?: CyclingHorsepower;
	isAssemblyRequired?: MustShipAlone;
	isFoldable?: MustShipAlone;
	isPortable?: MustShipAlone;
	isPowered?: MustShipAlone;
	isPrimaryVariant?: MustShipAlone;
	isWaterproof?: MustShipAlone;
	isWeatherResistant?: MustShipAlone;
	keyFeatures?: string[];
	lightBulbType?: string;
	lockingMechanism?: string;
	lockType?: string;
	mainImageUrl: string;
	manufacturer: string;
	manufacturerPartNumber?: string;
	material?: string[];
	maximumRecommendedAge?: CyclingMaximumRecommendedAge;
	maximumWeight?: CyclingMaximumWeight;
	minimumRecommendedAge?: CyclingMinimumRecommendedAge;
	modelNumber?: string;
	msrp?: number;
	numberOfSpeeds?: number;
	pattern?: string[];
	pieceCount?: number;
	powerType?: string;
	productSecondaryImageURL?: string[];
	prop65WarningText: string;
	recommendedLocations?: string[];
	recommendedUses?: string[];
	season?: string[];
	seatingCapacity?: number;
	shape?: string;
	shortDescription: string;
	size?: string;
	smallPartsWarnings: SmallPartsWarningCode[];
	sport?: string[];
	sportsLeague?: string[];
	sportsTeam?: string[];
	swatchImages?: CyclingSwatchImage[];
	tireDiameter?: CyclingTireDiameter;
	variantAttributeNames?: CyclingVariantAttributeName[];
	variantGroupId?: string;
	warrantyText?: string;
	warrantyURL?: string;
	wirelessTechnologies?: string[];
}

export interface CyclingAdditionalProductAttribute {
	productAttributeName: string;
	productAttributeValue: string;
}

export interface CyclingAssembledProductHeight {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface CyclingAssembledProductLength {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface CyclingAssembledProductWeight {
	measure?: number;
	unit?: AssembledProductWeightUnit;
}

export interface CyclingAssembledProductWidth {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface BicycleFrameSize {
	measure?: number;
	unit?: ScreenSizeUnit;
}

export interface BicycleWheelDiameter {
	measure?: number;
	unit?: ScreenSizeUnit;
}

export interface CyclingFabricContent {
	materialName?: string;
	materialPercentage?: number;
}

export interface CyclingHorsepower {
	measure?: number;
	unit?: HorsepowerUnit;
}

export enum HorsepowerUnit {
	HP = 'HP',
}

export interface CyclingMaximumRecommendedAge {
	measure?: number;
	unit?: MaximumRecommendedAgeUnit;
}

export interface CyclingMaximumWeight {
	measure?: number;
	unit?: PurpleUnit;
}

export interface CyclingMinimumRecommendedAge {
	measure?: number;
	unit?: MaximumRecommendedAgeUnit;
}

export interface CyclingSwatchImage {
	swatchImageUrl?: string;
	swatchVariantAttribute?: CyclingVariantAttributeName;
}

export enum CyclingVariantAttributeName {
	AssembledProductWeight = 'assembledProductWeight',
	Capacity = 'capacity',
	Color = 'color',
	Count = 'count',
	CountPerPack = 'countPerPack',
	Dexterity = 'dexterity',
	Material = 'material',
	Shape = 'shape',
	Size = 'size',
	SportsLeague = 'sportsLeague',
	SportsTeam = 'sportsTeam',
}

export interface CyclingTireDiameter {
	measure?: number;
	unit?: ScreenSizeUnit;
}

export interface DecorationsFavors {
	additionalProductAttributes?: DecorationsFavorsAdditionalProductAttribute[];
	ageGroup?: ArtCraftAgeGroup[];
	assembledProductHeight?: DecorationsFavorsAssembledProductHeight;
	assembledProductLength?: DecorationsFavorsAssembledProductLength;
	assembledProductWeight?: DecorationsFavorsAssembledProductWeight;
	assembledProductWidth?: DecorationsFavorsAssembledProductWidth;
	assemblyInstructions?: string;
	athlete?: string[];
	autographedBy?: string;
	character?: string[];
	color?: string[];
	colorCategory?: ColorCategory[];
	compositeWoodCertificationCode: CompositeWoodCertificationCode;
	count?: string;
	countPerPack?: number;
	diameter?: DecorationsFavorsDiameter;
	features?: string[];
	finish?: string;
	gender?: BabyClothingGender;
	globalBrandLicense?: string[];
	holidayLightingStyle?: string[];
	isAdultProduct?: MustShipAlone;
	isAnimated?: MustShipAlone;
	isAssemblyRequired?: MustShipAlone;
	isInflatable?: MustShipAlone;
	isPrimaryVariant?: MustShipAlone;
	keyFeatures?: string[];
	lightBulbColor?: string;
	lightBulbType?: string;
	mainImageUrl: string;
	manufacturer: string;
	manufacturerPartNumber?: string;
	material?: string[];
	modelNumber?: string;
	msrp?: number;
	numberOfLights?: number;
	occasion?: string[];
	pattern?: string[];
	pieceCount?: number;
	powerType?: string;
	productSecondaryImageURL?: string[];
	prop65WarningText: string;
	recommendedUses?: string[];
	shape?: string;
	shortDescription: string;
	size?: string;
	smallPartsWarnings: SmallPartsWarningCode[];
	sportsLeague?: string[];
	sportsTeam?: string[];
	swatchImages?: DecorationsFavorsSwatchImage[];
	theme?: string[];
	variantAttributeNames?: DecorationsFavorsVariantAttributeName[];
	variantGroupId?: string;
	watts?: DecorationsFavorsWatts;
}

export interface DecorationsFavorsAdditionalProductAttribute {
	productAttributeName: string;
	productAttributeValue: string;
}

export interface DecorationsFavorsAssembledProductHeight {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface DecorationsFavorsAssembledProductLength {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface DecorationsFavorsAssembledProductWeight {
	measure?: number;
	unit?: AssembledProductWeightUnit;
}

export interface DecorationsFavorsAssembledProductWidth {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface DecorationsFavorsDiameter {
	measure?: number;
	unit?: RoughInDistanceUnit;
}

export interface DecorationsFavorsSwatchImage {
	swatchImageUrl?: string;
	swatchVariantAttribute?: DecorationsFavorsVariantAttributeName;
}

export enum DecorationsFavorsVariantAttributeName {
	Character = 'character',
	Color = 'color',
	Count = 'count',
	CountPerPack = 'countPerPack',
	Diameter = 'diameter',
	LightBulbType = 'lightBulbType',
	Material = 'material',
	Occasion = 'occasion',
	Pattern = 'pattern',
	Shape = 'shape',
	Size = 'size',
	SportsTeam = 'sportsTeam',
	Theme = 'theme',
}

export interface DecorationsFavorsWatts {
	measure?: number;
	unit?: WattsUnit;
}

export enum WattsUnit {
	KW = 'kW',
	W = 'W',
}

export interface Electrical {
	accessoriesIncluded?: string[];
	additionalProductAttributes?: ElectricalAdditionalProductAttribute[];
	americanWireGauge?: number;
	amps?: ElectricalAmps;
	assembledProductHeight?: ElectricalAssembledProductHeight;
	assembledProductLength?: ElectricalAssembledProductLength;
	assembledProductWeight?: ElectricalAssembledProductWeight;
	assembledProductWidth?: ElectricalAssembledProductWidth;
	athlete?: string[];
	baseColor?: string;
	baseFinish?: string;
	beamAngle?: ElectricalBeamAngle;
	beamSpread?: ElectricalBeamSpread;
	brightness?: ElectricalBrightness;
	character?: string[];
	cleaningCareAndMaintenance?: string;
	color?: string[];
	colorCategory?: ColorCategory[];
	colorTemperature?: ColorTemperature;
	compatibleConduitSizes?: CompatibleConduitSize[];
	conductorMaterial?: string;
	count?: string;
	countPerPack?: number;
	decibelRating?: ElectricalDecibelRating;
	electricalBallastFactor?: number;
	estimatedEnergyCostPerYear?: EstimatedEnergyCostPerYear;
	features?: string[];
	finish?: string;
	globalBrandLicense?: string[];
	homeDecorStyle?: string;
	horsepower?: ElectricalHorsepower;
	impedance?: ElectricalImpedance;
	isDarkSkyCompliant?: MustShipAlone;
	isEnergyStarCertified?: MustShipAlone;
	isFireResistant?: MustShipAlone;
	isPrimaryVariant?: MustShipAlone;
	isRatedForOutdoorUse?: MustShipAlone;
	isWaterproof?: MustShipAlone;
	keyFeatures?: string[];
	lifespan?: string;
	lightBulbBaseType?: LightBulbBaseCode;
	lightBulbColor?: string;
	lightBulbShape?: LightBulbShape;
	lightBulbType?: string;
	mainImageUrl: string;
	manufacturer: string;
	manufacturerPartNumber?: string;
	material?: string[];
	maximumEnergySurgeRating?: string;
	maximumRange?: string;
	modelNumber?: string;
	mountType?: string[];
	msrp?: number;
	numberOfGangs?: number;
	numberOfLights?: number;
	numberOfPoles?: number;
	pattern?: string[];
	pieceCount?: number;
	powerType?: string;
	productSecondaryImageURL?: string[];
	prop65WarningText: string;
	recommendedUses?: string[];
	responseTime?: ElectricalResponseTime;
	shadeMaterial?: string;
	shadeStyle?: string;
	shape?: string;
	shortDescription: string;
	size?: string;
	sportsLeague?: string[];
	sportsTeam?: string[];
	swatchImages?: ElectricalSwatchImage[];
	variantAttributeNames?: ElectricalVariantAttributeName[];
	variantGroupId?: string;
	volts?: ElectricalVolt[];
	warrantyText?: string;
	warrantyURL?: string;
	watts?: ElectricalWatts;
}

export interface ElectricalAdditionalProductAttribute {
	productAttributeName: string;
	productAttributeValue: string;
}

export interface ElectricalAmps {
	measure?: number;
	unit?: AmpsUnit;
}

export enum AmpsUnit {
	A = 'A',
	MA = 'mA',
}

export interface ElectricalAssembledProductHeight {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface ElectricalAssembledProductLength {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface ElectricalAssembledProductWeight {
	measure?: number;
	unit?: AssembledProductWeightUnit;
}

export interface ElectricalAssembledProductWidth {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface ElectricalBeamAngle {
	measure?: number;
	unit?: BeamAngleUnit;
}

export enum BeamAngleUnit {
	º = 'º',
}

export interface ElectricalBeamSpread {
	measure?: number;
	unit?: BeamSpreadUnit;
}

export enum BeamSpreadUnit {
	Ft = 'ft',
}

export interface ElectricalBrightness {
	measure?: number;
	unit?: BrightnessUnit;
}

export enum BrightnessUnit {
	LM = 'lm',
}

export interface ColorTemperature {
	measure?: number;
	unit?: ColorTemperatureUnit;
}

export enum ColorTemperatureUnit {
	K = 'K',
}

export interface CompatibleConduitSize {
	measure?: number;
	unit?: ScreenSizeUnit;
}

export interface ElectricalDecibelRating {
	measure?: number;
	unit?: DecibelRatingUnit;
}

export enum DecibelRatingUnit {
	DB = 'dB',
}

export interface EstimatedEnergyCostPerYear {
	measure?: number;
	unit?: EstimatedEnergyCostPerYearUnit;
}

export enum EstimatedEnergyCostPerYearUnit {
	Usd = 'USD',
}

export interface ElectricalHorsepower {
	measure?: number;
	unit?: HorsepowerUnit;
}

export interface ElectricalImpedance {
	measure?: string;
	unit?: ImpedanceUnit;
}

export enum ImpedanceUnit {
	Kolms = 'kolms',
	Olms = 'olms',
}

export enum LightBulbBaseCode {
	BA15D = 'BA15d',
	BA15S = 'BA15s',
	E10 = 'E10',
	E11 = 'E11',
	E12 = 'E12',
	E14 = 'E14',
	E17 = 'E17',
	E26 = 'E26',
	E27 = 'E27',
	E39 = 'E39',
	E40 = 'E40',
	E5 = 'E5',
	Ex39 = 'EX39',
	G10Q = 'G10q',
	G12 = 'G12',
	G23 = 'G-23',
	G232 = 'G-23-2',
	G24D1 = 'G24d-1',
	G24D2 = 'G24d-2',
	G24D3 = 'G24d-3',
	G24Q1 = 'G24q-1',
	G24Q2 = 'G24q-2',
	G24Q3 = 'G24q-3',
	G24Q4 = 'G24q-4',
	G24Q5 = 'G24q-5',
	G4 = 'G4',
	G9 = 'G9',
	GX10Q4 = 'GX10q4',
	GX32D2 = 'GX32d-2',
	GX32D3 = 'GX32d-3',
	Gu10 = 'GU10',
	Gu24 = 'GU24',
	Gu4 = 'GU4',
	Gu53 = 'GU5.3',
	Gu635 = 'GU6.35',
	Gu8 = 'GU8',
	Gx232 = 'GX23-2',
	Gy635 = 'GY6.35',
	Gy86 = 'GY8.6',
	R7 = 'R7',
	R7S = 'R7s',
	S14S = 'S14s',
	Sc = 'SC',
	The2G11 = '2G11',
	The2G7 = '2G7',
	The2Gx13 = '2GX13',
	The2Gx7 = '2GX7',
}

export enum LightBulbShape {
	ALine = 'A-Line',
	ALineSpiral = 'A-Line Spiral',
	Bullet = 'Bullet',
	Candle = 'Candle',
	Circline = 'Circline',
	Flame = 'Flame',
	Flicker = 'Flicker',
	GlobeMini = 'Globe Mini',
	Linear = 'Linear',
	Reflector = 'Reflector',
	Spiral = 'Spiral',
	Tubular = 'Tubular',
	Twist = 'Twist',
	UShape = 'U-Shape',
}

export interface ElectricalResponseTime {
	measure?: number;
	unit?: MaximumShutterSpeedUnit;
}

export interface ElectricalSwatchImage {
	swatchImageUrl?: string;
	swatchVariantAttribute?: ElectricalVariantAttributeName;
}

export enum ElectricalVariantAttributeName {
	Amps = 'amps',
	AssembledProductHeight = 'assembledProductHeight',
	AssembledProductLength = 'assembledProductLength',
	AssembledProductWidth = 'assembledProductWidth',
	BaseColor = 'baseColor',
	BaseFinish = 'baseFinish',
	Color = 'color',
	Count = 'count',
	CountPerPack = 'countPerPack',
	Finish = 'finish',
	MountType = 'mountType',
	Shape = 'shape',
	Size = 'size',
	SportsTeam = 'sportsTeam',
	Volts = 'volts',
	Watts = 'watts',
}

export interface ElectricalVolt {
	measure?: number;
	unit?: VoltUnit;
}

export enum VoltUnit {
	KV = 'kV',
	KVAC = 'kVAC',
	KVDC = 'kVDC',
	MV = 'mV',
	V = 'V',
	Vac = 'VAC',
	Vdc = 'VDC',
}

export interface ElectricalWatts {
	measure?: number;
	unit?: WattsUnit;
}

export interface ElectronicsAccessories {
	additionalProductAttributes?: ElectronicsAccessoriesAdditionalProductAttribute[];
	assembledProductHeight?: ElectronicsAccessoriesAssembledProductHeight;
	assembledProductLength?: ElectronicsAccessoriesAssembledProductLength;
	assembledProductWeight?: ElectronicsAccessoriesAssembledProductWeight;
	assembledProductWidth?: ElectronicsAccessoriesAssembledProductWidth;
	audioFeatures?: string[];
	audioPowerOutput?: string;
	cableLength?: ElectronicsAccessoriesCableLength;
	color?: string[];
	colorCategory?: ColorCategory[];
	compatibleBrands?: string[];
	compatibleDevices?: string[];
	compatibleModels?: string[];
	connections?: string[];
	count?: string;
	countPerPack?: number;
	dataTransferRate?: string;
	edition?: string;
	features?: string[];
	hardDriveCapacity?: ElectronicsAccessoriesHardDriveCapacity;
	headphoneFeatures?: string[];
	headphoneStyle?: HeadphoneStyle;
	isPrimaryVariant?: MustShipAlone;
	keyFeatures?: string[];
	mainImageUrl: string;
	manufacturer: string;
	manufacturerPartNumber?: string;
	maximumLoadWeight?: MaximumLoadWeight;
	maximumScreenSize?: MaximumScreenSize;
	memoryCardType?: string[];
	microphoneTechnology?: string;
	minimumScreenSize?: MinimumScreenSize;
	modelNumber?: string;
	mountingPattern?: string;
	movementDetection?: string;
	msrp?: number;
	numberOfKeys?: number;
	numberOfSpeakers?: number;
	opticalDrive?: string;
	peakAudioPowerCapacity?: ElectronicsAccessoriesPeakAudioPowerCapacity;
	pieceCount?: number;
	productSecondaryImageURL?: string[];
	prop65WarningText: string;
	recordableMediaFormats?: string[];
	resolution?: string;
	screenSize?: ElectronicsAccessoriesScreenSize;
	shortDescription: string;
	size?: string;
	swatchImages?: ElectronicsAccessoriesSwatchImage[];
	tvAndMonitorMountType?: string;
	variantAttributeNames?: ElectronicsAccessoriesVariantAttributeName[];
	variantGroupId?: string;
	warrantyText?: string;
	warrantyURL?: string;
	wirelessTechnologies?: string[];
}

export interface ElectronicsAccessoriesAdditionalProductAttribute {
	productAttributeName: string;
	productAttributeValue: string;
}

export interface ElectronicsAccessoriesAssembledProductHeight {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface ElectronicsAccessoriesAssembledProductLength {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface ElectronicsAccessoriesAssembledProductWeight {
	measure?: number;
	unit?: AssembledProductWeightUnit;
}

export interface ElectronicsAccessoriesAssembledProductWidth {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface ElectronicsAccessoriesCableLength {
	measure?: number;
	unit?: CableLengthUnit;
}

export interface ElectronicsAccessoriesHardDriveCapacity {
	measure?: number;
	unit?: HardDriveCapacityUnit;
}

export enum HeadphoneStyle {
	InEar = 'In-Ear',
	OnEar = 'On-Ear',
	OverEar = 'Over-Ear',
}

export interface MaximumLoadWeight {
	measure?: number;
	unit?: MaximumLoadWeightUnit;
}

export enum MaximumLoadWeightUnit {
	LB = 'lb',
}

export interface MaximumScreenSize {
	measure?: number;
	unit?: ScreenSizeUnit;
}

export interface MinimumScreenSize {
	measure?: number;
	unit?: ScreenSizeUnit;
}

export interface ElectronicsAccessoriesPeakAudioPowerCapacity {
	measure?: number;
	unit?: WattsUnit;
}

export interface ElectronicsAccessoriesScreenSize {
	measure?: number;
	unit?: ScreenSizeUnit;
}

export interface ElectronicsAccessoriesSwatchImage {
	swatchImageUrl?: string;
	swatchVariantAttribute?: IndigoSwatchVariantAttribute;
}

export enum IndigoSwatchVariantAttribute {
	CableLength = 'cableLength',
	Color = 'color',
	CompatibleModels = 'compatibleModels',
	Count = 'count',
	CountPerPack = 'countPerPack',
	Edition = 'edition',
	MountType = 'mountType',
	Resolution = 'resolution',
	ScreenSize = 'screenSize',
	Size = 'size',
}

export enum ElectronicsAccessoriesVariantAttributeName {
	CableLength = 'cableLength',
	Color = 'color',
	CompatibleModels = 'compatibleModels',
	Count = 'count',
	CountPerPack = 'countPerPack',
	Edition = 'edition',
	HardDriveCapacity = 'hardDriveCapacity',
	Resolution = 'resolution',
	ScreenSize = 'screenSize',
	Size = 'size',
	TvAndMonitorMountType = 'tvAndMonitorMountType',
}

export interface ElectronicsCables {
	additionalProductAttributes?: ElectronicsCablesAdditionalProductAttribute[];
	cableLength?: ElectronicsCablesCableLength;
	color?: string[];
	compatibleDevices?: string[];
	connections?: string[];
	connectorFinish?: string;
	count?: string;
	countPerPack?: number;
	dataTransferRate?: string;
	features?: string[];
	globalBrandLicense?: string[];
	isPrimaryVariant?: MustShipAlone;
	keyFeatures?: string[];
	mainImageUrl: string;
	manufacturer: string;
	manufacturerPartNumber?: string;
	modelNumber?: string;
	msrp?: number;
	numberOfChannels?: string;
	numberOfTwistedPairsPerCable?: number;
	productSecondaryImageURL?: string[];
	prop65WarningText: string;
	shortDescription: string;
	swatchImages?: ElectronicsCablesSwatchImage[];
	variantAttributeNames?: ElectronicsCablesVariantAttributeName[];
	variantGroupId?: string;
	warrantyText?: string;
	warrantyURL?: string;
}

export interface ElectronicsCablesAdditionalProductAttribute {
	productAttributeName: string;
	productAttributeValue: string;
}

export interface ElectronicsCablesCableLength {
	measure?: number;
	unit?: CableLengthUnit;
}

export interface ElectronicsCablesSwatchImage {
	swatchImageUrl?: string;
	swatchVariantAttribute?: ElectronicsCablesVariantAttributeName;
}

export enum ElectronicsCablesVariantAttributeName {
	CableLength = 'cableLength',
	Color = 'color',
	Count = 'count',
	CountPerPack = 'countPerPack',
}

export interface ElectronicsOther {
	additionalProductAttributes?: ElectronicsOtherAdditionalProductAttribute[];
	ageGroup?: ArtCraftAgeGroup[];
	assembledProductHeight?: ElectronicsOtherAssembledProductHeight;
	assembledProductLength?: ElectronicsOtherAssembledProductLength;
	assembledProductWeight?: ElectronicsOtherAssembledProductWeight;
	assembledProductWidth?: ElectronicsOtherAssembledProductWidth;
	audioFeatures?: string[];
	audioPowerOutput?: string;
	babyMonitorType?: string[];
	color?: string[];
	colorCategory?: ColorCategory[];
	connections?: string[];
	count?: string;
	countPerPack?: number;
	dataTransferRate?: string;
	digitalAudioFileFormat?: string[];
	features?: string[];
	hardDriveCapacity?: ElectronicsOtherHardDriveCapacity;
	impedance?: ElectronicsOtherImpedance;
	inflexKitComponent?: MustShipAlone;
	isCordless?: MustShipAlone;
	isPortable?: MustShipAlone;
	isPrimaryVariant?: MustShipAlone;
	isSmart?: MustShipAlone;
	keyFeatures?: string[];
	mainImageUrl: string;
	manufacturer: string;
	manufacturerPartNumber?: string;
	memoryCardType?: string[];
	microphoneTechnology?: string;
	modelNumber?: string;
	msrp?: number;
	numberOfChannels?: string;
	numberOfSpeakers?: number;
	peakAudioPowerCapacity?: ElectronicsOtherPeakAudioPowerCapacity;
	pieceCount?: number;
	platform?: string;
	productSecondaryImageURL?: string[];
	prop65WarningText: string;
	resolution?: string;
	shortDescription: string;
	size?: string;
	speakerDriver?: string;
	streamingServices?: string;
	supportedMediaFormats?: string;
	swatchImages?: ElectronicsOtherSwatchImage[];
	variantAttributeNames?: ElectronicsOtherVariantAttributeName[];
	variantGroupId?: string;
	warrantyText?: string;
	warrantyURL?: string;
	wirelessTechnologies?: string[];
}

export interface ElectronicsOtherAdditionalProductAttribute {
	productAttributeName: string;
	productAttributeValue: string;
}

export interface ElectronicsOtherAssembledProductHeight {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface ElectronicsOtherAssembledProductLength {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface ElectronicsOtherAssembledProductWeight {
	measure?: number;
	unit?: AssembledProductWeightUnit;
}

export interface ElectronicsOtherAssembledProductWidth {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface ElectronicsOtherHardDriveCapacity {
	measure?: number;
	unit?: HardDriveCapacityUnit;
}

export interface ElectronicsOtherImpedance {
	measure?: string;
	unit?: ImpedanceUnit;
}

export interface ElectronicsOtherPeakAudioPowerCapacity {
	measure?: number;
	unit?: WattsUnit;
}

export interface ElectronicsOtherSwatchImage {
	swatchImageUrl?: string;
	swatchVariantAttribute?: ElectronicsOtherVariantAttributeName;
}

export enum ElectronicsOtherVariantAttributeName {
	Color = 'color',
	Count = 'count',
	CountPerPack = 'countPerPack',
	Platform = 'platform',
	Resolution = 'resolution',
	Size = 'size',
}

export interface FoodBeverage {
	additionalProductAttributes?: FoodBeverageAdditionalProductAttribute[];
	beefCut?: string;
	caffeineDesignation?: CaffeineDesignation;
	calories?: FoodBeverageCalories;
	caloriesFromFat?: FoodBeverageCaloriesFromFat;
	character?: string[];
	containerType?: string[];
	count?: string;
	countPerPack?: number;
	cuisine?: string[];
	dietaryMethod?: string[];
	dietType?: DietType;
	flavor?: string;
	foodAllergenStatements?: string[];
	foodForm?: string;
	foodPreparationTips?: string[];
	ingredients?: string;
	instructions?: string;
	isPrimaryVariant?: MustShipAlone;
	keyFeatures?: string[];
	labelImage: FoodBeverageLabelImage[];
	mainImageUrl: string;
	manufacturer: string;
	meal?: string;
	mealStyle?: string;
	msrp?: number;
	nutrientContentClaims?: string[];
	nutrientFootnote?: string;
	nutrients?: FoodBeverageNutrient[];
	poultryCut?: string;
	productSecondaryImageURL?: string[];
	prop65WarningText: string;
	puffedSnackType?: PuffedSnackType;
	releaseDate?: Date;
	safeHandlingInstructions?: string;
	servingSize?: string;
	servingsPerContainer?: number;
	shelfLife?: FoodBeverageShelfLife;
	shortDescription: string;
	size?: string;
	spiceLevel?: string;
	swatchImages?: FoodBeverageSwatchImage[];
	totalCarbohydrate?: FoodBeverageTotalCarbohydrate;
	totalCarbohydratePercentageDailyValue?: number;
	totalFat?: FoodBeverageTotalFat;
	totalFatPercentageDailyValue?: number;
	totalProtein?: FoodBeverageTotalProtein;
	totalProteinPercentageDailyValue?: number;
	variantAttributeNames?: FoodBeverageVariantAttributeName[];
	variantGroupId?: string;
}

export interface FoodBeverageAdditionalProductAttribute {
	productAttributeName: string;
	productAttributeValue: string;
}

export enum CaffeineDesignation {
	CaffeineAdded = 'Caffeine Added',
	Decaffeinated = 'Decaffeinated',
	NaturallyCaffeinated = 'Naturally Caffeinated',
	NaturallyDecaffeinated = 'Naturally Decaffeinated',
}

export interface FoodBeverageCalories {
	measure?: number;
	unit?: CaloriesUnit;
}

export interface FoodBeverageCaloriesFromFat {
	measure?: number;
	unit?: CaloriesUnit;
}

export enum DietType {
	The01Vegetarian = '01 - Vegetarian',
	The02Coeliac = '02 - Coeliac',
	The03Dietetic = '03 - Dietetic',
	The04Halal = '04 - Halal',
	The05Kosher = '05 - Kosher',
	The06Vegan = '06 - Vegan',
	The07AllNatural = '07 - All Natural',
	The08WithoutBeef = '08 - Without Beef',
	The09Organic = '09 - Organic',
	The10WithoutPork = '10 - Without Pork',
	The11BetterForYou = '11 - Better For You',
	The12FatFree = '12 - Fat Free',
	The13GlutenFree = '13 - Gluten Free',
	The14SugarFree = '14 - Sugar Free',
}

export interface FoodBeverageLabelImage {
	labelImageContains: LabelImageContains;
	labelImageURL: string;
}

export interface FoodBeverageNutrient {
	nutrientAmount?: string;
	nutrientName?: string;
	nutrientPercentageDailyValue?: string;
}

export enum PuffedSnackType {
	MicrowavePopcorn = 'Microwave Popcorn',
	PopcornKernel = 'Popcorn Kernel',
	ReadyToEatPopcorn = 'Ready to Eat Popcorn',
}

export interface FoodBeverageShelfLife {
	measure?: number;
	unit?: ShelfLifeUnit;
}

export interface FoodBeverageSwatchImage {
	swatchImageUrl?: string;
	swatchVariantAttribute?: FoodBeverageVariantAttributeName;
}

export enum FoodBeverageVariantAttributeName {
	Count = 'count',
	CountPerPack = 'countPerPack',
	Flavor = 'flavor',
	Size = 'size',
}

export interface FoodBeverageTotalCarbohydrate {
	measure?: number;
	unit?: TotalCarbohydrateUnit;
}

export interface FoodBeverageTotalFat {
	measure?: number;
	unit?: TotalCarbohydrateUnit;
}

export interface FoodBeverageTotalProtein {
	measure?: number;
	unit?: TotalCarbohydrateUnit;
}

export interface Footwear {
	activity?: string[];
	additionalProductAttributes?: FootwearAdditionalProductAttribute[];
	ageGroup?: ArtCraftAgeGroup[];
	athlete?: string[];
	autographedBy?: string;
	bootShaftCircumference?: BootShaftCircumference[];
	bootShaftHeight?: BootShaftHeight[];
	bootShaftStyle?: string[];
	bootShaftWidthStyle?: string[];
	casualAndDressShoeType?: string;
	character?: string[];
	collection?: string;
	color: string[];
	colorCategory: ColorCategory[];
	count?: string;
	countPerPack?: number;
	countryOfOriginTextiles: CountryOfOriginTextiles;
	embellishmentType?: string[];
	fabricCareInstructions?: string[];
	fabricContent?: FootwearFabricContent[];
	features?: string[];
	footwearHeelStyle?: string;
	gender?: BabyClothingGender;
	globalBrandLicense?: string[];
	healthConcerns?: string[];
	heelDrop?: HeelDrop;
	heelHeight?: HeelHeight;
	insoleFeature?: string[];
	isOrthopedic?: MustShipAlone;
	isPrimaryVariant?: MustShipAlone;
	isWaterResistant?: MustShipAlone;
	keyFeatures?: string[];
	mainImageUrl: string;
	manufacturer: string;
	material?: string[];
	msrp?: number;
	occasion?: string[];
	pattern?: string[];
	productSecondaryImageURL?: string[];
	prop65WarningText: string;
	recommendedLocations?: string[];
	season?: string[];
	seasonCode?: SeasonCode;
	seasonYear?: number;
	secondaryMaterial?: string[];
	shoeCategory?: ShoeCategory;
	shoeClosure?: string;
	shoeSize: string;
	shoeSizeSystem?: ShoeSizeSystem;
	shoeSoleMaterial?: string;
	shoeStyle?: string;
	shoeWidth?: string;
	shortDescription: string;
	size?: string;
	smallPartsWarnings: SmallPartsWarningCode[];
	sportsLeague?: string[];
	sportsTeam?: string[];
	swatchImages?: FootwearSwatchImage[];
	toeStyle?: string;
	variantAttributeNames?: FootwearVariantAttributeName[];
	variantGroupId?: string;
	warrantyText?: string;
	warrantyURL?: string;
}

export interface FootwearAdditionalProductAttribute {
	productAttributeName: string;
	productAttributeValue: string;
}

export interface BootShaftCircumference {
	measure?: number;
	unit?: BootShaftCircumferenceUnit;
}

export enum BootShaftCircumferenceUnit {
	CM = 'cm',
	In = 'in',
	Mm = 'mm',
}

export interface BootShaftHeight {
	measure?: number;
	unit?: BootShaftCircumferenceUnit;
}

export interface FootwearFabricContent {
	materialName?: string;
	materialPercentage?: number;
}

export interface HeelDrop {
	measure?: number;
	unit?: BootShaftCircumferenceUnit;
}

export interface HeelHeight {
	measure?: number;
	unit?: HeelHeightUnit;
}

export enum HeelHeightUnit {
	In = 'in',
	Mm = 'mm',
}

export enum ShoeSizeSystem {
	EUInfant = 'EU Infant',
	EUKidS = "EU Kid's",
	EUMenS = "EU Men's",
	EUWomenS = "EU Women's",
	EUYouth = 'EU Youth',
	UKInfant = 'UK Infant',
	UKKidS = "UK Kid's",
	UKMenS = "UK Men's",
	UKWomenS = "UK Women's",
	UKYouth = 'UK Youth',
	USInfant = 'US Infant',
	USKidS = "US Kid's",
	USMenS = "US Men's",
	USWomenS = "US Women's",
	USYouth = 'US Youth',
}

export interface FootwearSwatchImage {
	swatchImageUrl?: string;
	swatchVariantAttribute?: FootwearVariantAttributeName;
}

export enum FootwearVariantAttributeName {
	Color = 'color',
	Count = 'count',
	CountPerPack = 'countPerPack',
	HeelHeight = 'heelHeight',
	Material = 'material',
	Pattern = 'pattern',
	ShoeSize = 'shoeSize',
	ShoeWidth = 'shoeWidth',
	Size = 'size',
	SportsTeam = 'sportsTeam',
}

export interface FuelsLubricants {
	additionalProductAttributes?: FuelsLubricantsAdditionalProductAttribute[];
	count?: string;
	countPerPack?: number;
	features?: string[];
	fluidOunces?: FuelsLubricantsFluidOunces;
	form?: string;
	fuelType?: string;
	instructions?: string;
	isBiodegradable?: MustShipAlone;
	isCombustible?: MustShipAlone;
	isEnergyStarCertified?: MustShipAlone;
	isFlammable?: MustShipAlone;
	isPrimaryVariant?: MustShipAlone;
	isRefillable?: MustShipAlone;
	keyFeatures?: string[];
	mainImageUrl: string;
	manufacturer: string;
	manufacturerPartNumber?: string;
	modelNumber?: string;
	msrp?: number;
	productSecondaryImageURL?: string[];
	prop65WarningText: string;
	recommendedUses?: string[];
	shelfLife?: FuelsLubricantsShelfLife;
	shortDescription: string;
	size?: string;
	swatchImages?: FuelsLubricantsSwatchImage[];
	systemOfMeasurement?: string;
	variantAttributeNames?: FuelsLubricantsVariantAttributeName[];
	variantGroupId?: string;
}

export interface FuelsLubricantsAdditionalProductAttribute {
	productAttributeName: string;
	productAttributeValue: string;
}

export interface FuelsLubricantsFluidOunces {
	measure?: number;
	unit?: FluidOuncesSupplying100CaloriesUnit;
}

export interface FuelsLubricantsShelfLife {
	measure?: number;
	unit?: ShelfLifeUnit;
}

export interface FuelsLubricantsSwatchImage {
	swatchImageUrl?: string;
	swatchVariantAttribute?: FuelsLubricantsVariantAttributeName;
}

export enum FuelsLubricantsVariantAttributeName {
	Count = 'count',
	CountPerPack = 'countPerPack',
	Size = 'size',
}

export interface Funeral {
	additionalProductAttributes?: FuneralAdditionalProductAttribute[];
	assembledProductHeight?: FuneralAssembledProductHeight;
	assembledProductLength?: FuneralAssembledProductLength;
	assembledProductWeight?: FuneralAssembledProductWeight;
	assembledProductWidth?: FuneralAssembledProductWidth;
	assemblyInstructions?: string;
	color?: string[];
	colorCategory?: ColorCategory[];
	compositeWoodCertificationCode: CompositeWoodCertificationCode;
	count?: string;
	countPerPack?: number;
	features?: string[];
	finish?: string;
	globalBrandLicense?: string[];
	isAssemblyRequired?: MustShipAlone;
	isPrimaryVariant?: MustShipAlone;
	keyFeatures?: string[];
	mainImageUrl: string;
	manufacturer: string;
	manufacturerPartNumber?: string;
	material?: string[];
	modelNumber?: string;
	msrp?: number;
	occasion?: string[];
	pattern?: string[];
	pieceCount?: number;
	productSecondaryImageURL?: string[];
	prop65WarningText: string;
	recommendedUses?: string[];
	shape?: string;
	shortDescription: string;
	size?: string;
	sportsLeague?: string[];
	swatchImages?: FuneralSwatchImage[];
	variantAttributeNames?: FuneralVariantAttributeName[];
	variantGroupId?: string;
}

export interface FuneralAdditionalProductAttribute {
	productAttributeName: string;
	productAttributeValue: string;
}

export interface FuneralAssembledProductHeight {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface FuneralAssembledProductLength {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface FuneralAssembledProductWeight {
	measure?: number;
	unit?: AssembledProductWeightUnit;
}

export interface FuneralAssembledProductWidth {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface FuneralSwatchImage {
	swatchImageUrl?: string;
	swatchVariantAttribute?: FuneralVariantAttributeName;
}

export enum FuneralVariantAttributeName {
	Color = 'color',
	Count = 'count',
	CountPerPack = 'countPerPack',
	Material = 'material',
	Occasion = 'occasion',
	Pattern = 'pattern',
	Shape = 'shape',
	Size = 'size',
}

export interface Furniture {
	accentColor?: string;
	additionalProductAttributes?: FurnitureAdditionalProductAttribute[];
	ageGroup?: ArtCraftAgeGroup[];
	assembledProductHeight?: FurnitureAssembledProductHeight;
	assembledProductLength?: FurnitureAssembledProductLength;
	assembledProductWeight?: FurnitureAssembledProductWeight;
	assembledProductWidth?: FurnitureAssembledProductWidth;
	assemblyInstructions?: string;
	autographedBy?: string;
	baseColor?: string;
	baseFinish?: string;
	baseMaterial?: string;
	bedSize?: string;
	bedStyle?: string;
	character?: string[];
	collection?: string;
	color?: string[];
	colorCategory?: ColorCategory[];
	compositeWoodCertificationCode: CompositeWoodCertificationCode;
	configuration?: string;
	count?: string;
	countPerPack?: number;
	countryOfOriginTextiles: CountryOfOriginTextiles;
	cushionColor?: string;
	diameter?: FurnitureDiameter;
	doorOpeningStyle?: string;
	doorStyle?: string;
	fabricCareInstructions?: string[];
	fabricColor?: string;
	fabricContent?: FurnitureFabricContent[];
	features?: string[];
	fillMaterial?: string[];
	finish?: string;
	frameColor?: string;
	frameMaterial?: string[];
	gender?: BabyClothingGender;
	globalBrandLicense?: string[];
	hardwareFinish?: string;
	headboardStyle?: string;
	homeDecorStyle?: string;
	inflexKitComponent?: MustShipAlone;
	isAntique?: MustShipAlone;
	isAssemblyRequired?: MustShipAlone;
	isFoldable?: MustShipAlone;
	isIndustrial?: MustShipAlone;
	isInflatable?: MustShipAlone;
	isPowered?: MustShipAlone;
	isPrimaryVariant?: MustShipAlone;
	isWheeled?: MustShipAlone;
	keyFeatures?: string[];
	lightingFactsLabel?: string;
	mainImageUrl: string;
	manufacturer: string;
	manufacturerPartNumber?: string;
	material?: string[];
	mattressFirmness?: string;
	mattressThickness?: MattressThickness;
	modelNumber?: string;
	mountType?: string[];
	msrp?: number;
	numberOfDrawers?: number;
	numberOfHooks?: number;
	numberOfPanels?: number;
	numberOfShelves?: number;
	pattern?: string[];
	pieceCount?: number;
	powerType?: string;
	productSecondaryImageURL?: string[];
	prop65WarningText: string;
	pumpIncluded?: MustShipAlone;
	recommendedLocations?: string[];
	recommendedRooms?: string[];
	recommendedUses?: string[];
	seatBackHeight?: SeatBackHeight;
	seatBackStyle?: string;
	seatHeight?: FurnitureSeatHeight;
	seatingCapacity?: number;
	seatMaterial?: string;
	shape?: string;
	shortDescription: string;
	size?: string;
	slatWidth?: FurnitureSlatWidth;
	sportsTeam?: string[];
	swatchImages?: FurnitureSwatchImage[];
	tableHeight?: TableHeight;
	theme?: string[];
	topDimensions?: string;
	topFinish?: string;
	topMaterial?: string;
	variantAttributeNames?: FurnitureVariantAttributeName[];
	variantGroupId?: string;
	warrantyText?: string;
	warrantyURL?: string;
}

export interface FurnitureAdditionalProductAttribute {
	productAttributeName: string;
	productAttributeValue: string;
}

export interface FurnitureAssembledProductHeight {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface FurnitureAssembledProductLength {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface FurnitureAssembledProductWeight {
	measure?: number;
	unit?: AssembledProductWeightUnit;
}

export interface FurnitureAssembledProductWidth {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface FurnitureDiameter {
	measure?: number;
	unit?: RoughInDistanceUnit;
}

export interface FurnitureFabricContent {
	materialName?: string;
	materialPercentage?: number;
}

export interface MattressThickness {
	measure?: number;
	unit?: ScreenSizeUnit;
}

export interface SeatBackHeight {
	measure?: number;
	unit?: ScreenSizeUnit;
}

export interface FurnitureSeatHeight {
	measure?: number;
	unit?: ScreenSizeUnit;
}

export interface FurnitureSlatWidth {
	measure?: number;
	unit?: CarSeatBaseDepthUnit;
}

export interface FurnitureSwatchImage {
	swatchImageUrl?: string;
	swatchVariantAttribute?: IndecentSwatchVariantAttribute;
}

export enum IndecentSwatchVariantAttribute {
	AssembledProductWidth = 'assembledProductWidth',
	BaseColor = 'baseColor',
	BaseFinish = 'baseFinish',
	BedSize = 'bedSize',
	Character = 'character',
	Color = 'color',
	Configuration = 'configuration',
	Count = 'count',
	CountPerPack = 'countPerPack',
	CushionColor = 'cushionColor',
	Diameter = 'diameter',
	Finish = 'finish',
	Firmness = 'Firmness',
	FrameColor = 'frameColor',
	Material = 'material',
	MattressFirmness = 'mattressFirmness',
	MattressThickness = 'mattressThickness',
	MountType = 'mountType',
	Pattern = 'pattern',
	Shape = 'shape',
	Size = 'size',
}

export interface TableHeight {
	measure?: number;
	unit?: CarSeatBaseDepthUnit;
}

export enum FurnitureVariantAttributeName {
	AssembledProductWidth = 'assembledProductWidth',
	BaseColor = 'baseColor',
	BaseFinish = 'baseFinish',
	BedSize = 'bedSize',
	Character = 'character',
	Color = 'color',
	Configuration = 'configuration',
	Count = 'count',
	CountPerPack = 'countPerPack',
	CushionColor = 'cushionColor',
	Diameter = 'diameter',
	Finish = 'finish',
	FrameColor = 'frameColor',
	Material = 'material',
	MattressFirmness = 'mattressFirmness',
	MattressThickness = 'mattressThickness',
	MountType = 'mountType',
	Pattern = 'pattern',
	Shape = 'shape',
	Size = 'size',
	SportsTeam = 'sportsTeam',
}

export interface GardenPatio {
	additionalProductAttributes?: GardenPatioAdditionalProductAttribute[];
	ageGroup?: ArtCraftAgeGroup[];
	assembledProductHeight?: GardenPatioAssembledProductHeight;
	assembledProductLength?: GardenPatioAssembledProductLength;
	assembledProductWeight?: GardenPatioAssembledProductWeight;
	assembledProductWidth?: GardenPatioAssembledProductWidth;
	assemblyInstructions?: string;
	baseMaterial?: string;
	capacity?: string;
	character?: string[];
	cleaningCareAndMaintenance?: string;
	clearingWidth?: ClearingWidth;
	color?: string[];
	colorCategory?: ColorCategory[];
	compositeWoodCertificationCode: CompositeWoodCertificationCode;
	count?: string;
	countPerPack?: number;
	countryOfOriginTextiles: CountryOfOriginTextiles;
	coverageArea?: GardenPatioCoverageArea;
	cuttingWidth?: string;
	diameter?: GardenPatioDiameter;
	fabricContent?: GardenPatioFabricContent[];
	features?: string[];
	finish?: string;
	flooringMaterial?: string;
	flowRate?: GardenPatioFlowRate;
	frameMaterial?: string[];
	fuelType?: string;
	globalBrandLicense?: string[];
	hasAutomaticShutoff?: MustShipAlone;
	hasRadiantHeat?: MustShipAlone;
	homeDecorStyle?: string;
	inflexKitComponent?: MustShipAlone;
	installationType?: string;
	isAntique?: MustShipAlone;
	isAssemblyRequired?: MustShipAlone;
	isBulk?: MustShipAlone;
	isEnergyStarCertified?: MustShipAlone;
	isFoldable?: MustShipAlone;
	isIndustrial?: MustShipAlone;
	isPrimaryVariant?: MustShipAlone;
	isTearResistant?: MustShipAlone;
	isWaterproof?: MustShipAlone;
	isWeatherResistant?: MustShipAlone;
	isWheeled?: MustShipAlone;
	keyFeatures?: string[];
	lightBulbColor?: string;
	lightBulbType?: string;
	mainImageUrl: string;
	manufacturer: string;
	manufacturerPartNumber?: string;
	material?: string[];
	maximumWeight?: GardenPatioMaximumWeight;
	minimumClearance?: MinimumClearance;
	minimumTemperature?: GardenPatioMinimumTemperature;
	modelNumber?: string;
	msrp?: number;
	occasion?: string[];
	pattern?: string[];
	pieceCount?: number;
	plantCategory?: string;
	powerType?: string;
	productSecondaryImageURL?: string[];
	productVolume?: string;
	prop65WarningText: string;
	recommendedLocations?: string[];
	recommendedUses?: string[];
	season?: string[];
	shape?: string;
	shortDescription: string;
	size?: string;
	sportsTeam?: string[];
	sprayPatterns?: string;
	swatchImages?: GardenPatioSwatchImage[];
	theme?: string[];
	variantAttributeNames?: GardenPatioVariantAttributeName[];
	variantGroupId?: string;
	vaseIncluded?: MustShipAlone;
	volts?: GardenPatioVolt[];
	warrantyText?: string;
	warrantyURL?: string;
	watts?: GardenPatioWatts;
}

export interface GardenPatioAdditionalProductAttribute {
	productAttributeName: string;
	productAttributeValue: string;
}

export interface GardenPatioAssembledProductHeight {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface GardenPatioAssembledProductLength {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface GardenPatioAssembledProductWeight {
	measure?: number;
	unit?: AssembledProductWeightUnit;
}

export interface GardenPatioAssembledProductWidth {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface ClearingWidth {
	measure?: number;
	unit?: ClearingWidthUnit;
}

export enum ClearingWidthUnit {
	CM = 'cm',
	Ft = 'ft',
	In = 'in',
}

export interface GardenPatioCoverageArea {
	measure?: number;
	unit?: CoverageAreaUnit;
}

export interface GardenPatioDiameter {
	measure?: number;
	unit?: RoughInDistanceUnit;
}

export interface GardenPatioFabricContent {
	materialName?: string;
	materialPercentage?: number;
}

export interface GardenPatioFlowRate {
	measure?: number;
	unit?: FlowRateUnit;
}

export enum FlowRateUnit {
	Gpm = 'gpm',
}

export interface GardenPatioMaximumWeight {
	measure?: number;
	unit?: PurpleUnit;
}

export interface MinimumClearance {
	measure?: number;
	unit?: ScreenSizeUnit;
}

export interface GardenPatioMinimumTemperature {
	measure?: number;
	unit?: MaximumTemperatureUnit;
}

export interface GardenPatioSwatchImage {
	swatchImageUrl?: string;
	swatchVariantAttribute?: HilariousSwatchVariantAttribute;
}

export enum HilariousSwatchVariantAttribute {
	AssembledProductHeight = 'assembledProductHeight',
	AssembledProductLength = 'assembledProductLength',
	AssembledProductWidth = 'assembledProductWidth',
	Capacity = 'capacity',
	Color = 'color',
	Count = 'count',
	CountPerPack = 'countPerPack',
	Diameter = 'diameter',
	Finish = 'finish',
	HomeDecorStyle = 'homeDecorStyle',
	Material = 'material',
	Pattern = 'pattern',
	Shape = 'shape',
	Size = 'size',
}

export enum GardenPatioVariantAttributeName {
	AssembledProductHeight = 'assembledProductHeight',
	AssembledProductLength = 'assembledProductLength',
	AssembledProductWidth = 'assembledProductWidth',
	Capacity = 'capacity',
	Color = 'color',
	Count = 'count',
	CountPerPack = 'countPerPack',
	Diameter = 'diameter',
	Finish = 'finish',
	HomeDecorStyle = 'homeDecorStyle',
	Material = 'material',
	Pattern = 'pattern',
	Shape = 'shape',
	Size = 'size',
	SportsTeam = 'sportsTeam',
	VaseIncluded = 'vaseIncluded',
}

export interface GardenPatioVolt {
	measure?: number;
	unit?: VoltUnit;
}

export interface GardenPatioWatts {
	measure?: number;
	unit?: WattsUnit;
}

export interface GiftSupplyAwards {
	additionalProductAttributes?: GiftSupplyAwardsAdditionalProductAttribute[];
	assembledProductHeight?: GiftSupplyAwardsAssembledProductHeight;
	assembledProductLength?: GiftSupplyAwardsAssembledProductLength;
	assembledProductWeight?: GiftSupplyAwardsAssembledProductWeight;
	assembledProductWidth?: GiftSupplyAwardsAssembledProductWidth;
	assemblyInstructions?: string;
	color?: string[];
	colorCategory?: ColorCategory[];
	count?: string;
	countPerPack?: number;
	features?: string[];
	globalBrandLicense?: string[];
	isAssemblyRequired?: MustShipAlone;
	isPrimaryVariant?: MustShipAlone;
	keyFeatures?: string[];
	mainImageUrl: string;
	manufacturer: string;
	manufacturerPartNumber?: string;
	material?: string[];
	modelNumber?: string;
	msrp?: number;
	occasion?: string[];
	pattern?: string[];
	productSecondaryImageURL?: string[];
	shape?: string;
	shortDescription: string;
	size?: string;
	swatchImages?: GiftSupplyAwardsSwatchImage[];
	theme?: string[];
	variantAttributeNames?: GiftSupplyAwardsVariantAttributeName[];
	variantGroupId?: string;
}

export interface GiftSupplyAwardsAdditionalProductAttribute {
	productAttributeName: string;
	productAttributeValue: string;
}

export interface GiftSupplyAwardsAssembledProductHeight {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface GiftSupplyAwardsAssembledProductLength {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface GiftSupplyAwardsAssembledProductWeight {
	measure?: number;
	unit?: AssembledProductWeightUnit;
}

export interface GiftSupplyAwardsAssembledProductWidth {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface GiftSupplyAwardsSwatchImage {
	swatchImageUrl?: string;
	swatchVariantAttribute?: GiftSupplyAwardsVariantAttributeName;
}

export enum GiftSupplyAwardsVariantAttributeName {
	Color = 'color',
	Count = 'count',
	CountPerPack = 'countPerPack',
	Material = 'material',
	Occasion = 'occasion',
	Pattern = 'pattern',
	Shape = 'shape',
	Size = 'size',
	Theme = 'theme',
}

export interface GrillsOutdoorCooking {
	additionalProductAttributes?: GrillsOutdoorCookingAdditionalProductAttribute[];
	ageGroup?: ArtCraftAgeGroup[];
	assembledProductHeight?: GrillsOutdoorCookingAssembledProductHeight;
	assembledProductLength?: GrillsOutdoorCookingAssembledProductLength;
	assembledProductWeight?: GrillsOutdoorCookingAssembledProductWeight;
	assembledProductWidth?: GrillsOutdoorCookingAssembledProductWidth;
	assemblyInstructions?: string;
	btu?: number;
	capacity?: string;
	cleaningCareAndMaintenance?: string;
	color?: string[];
	colorCategory?: ColorCategory[];
	count?: string;
	countPerPack?: number;
	features?: string[];
	finish?: string;
	flavor?: string;
	flowRate?: GrillsOutdoorCookingFlowRate;
	frameMaterial?: string[];
	fuelType?: string;
	globalBrandLicense?: string[];
	hasAutomaticShutoff?: MustShipAlone;
	hasCharcoalBasket?: MustShipAlone;
	hasRadiantHeat?: MustShipAlone;
	hasSideShelf?: MustShipAlone;
	hasTankTray?: MustShipAlone;
	homeDecorStyle?: string;
	installationType?: string;
	isAssemblyRequired?: MustShipAlone;
	isBulk?: MustShipAlone;
	isEnergyStarCertified?: MustShipAlone;
	isFoldable?: MustShipAlone;
	isIndustrial?: MustShipAlone;
	isPrimaryVariant?: MustShipAlone;
	isWaterproof?: MustShipAlone;
	isWeatherResistant?: MustShipAlone;
	isWheeled?: MustShipAlone;
	keyFeatures?: string[];
	lifespan?: string;
	mainImageUrl: string;
	manufacturer: string;
	manufacturerPartNumber?: string;
	maximumTemperature?: GrillsOutdoorCookingMaximumTemperature;
	maximumWeight?: GrillsOutdoorCookingMaximumWeight;
	minimumTemperature?: GrillsOutdoorCookingMinimumTemperature;
	modelNumber?: string;
	msrp?: number;
	numberOfBurners?: number;
	pieceCount?: number;
	powerType?: string;
	productSecondaryImageURL?: string[];
	productVolume?: string;
	prop65WarningText: string;
	recommendedLocations?: string[];
	recommendedUses?: string[];
	shortDescription: string;
	sideBurnerSize?: SideBurnerSize;
	size?: string;
	sportsLeague?: string[];
	sportsTeam?: string[];
	swatchImages?: GrillsOutdoorCookingSwatchImage[];
	totalCookingArea?: TotalCookingArea;
	variantAttributeNames?: GrillsOutdoorCookingVariantAttributeName[];
	variantGroupId?: string;
	warrantyText?: string;
	warrantyURL?: string;
}

export interface GrillsOutdoorCookingAdditionalProductAttribute {
	productAttributeName: string;
	productAttributeValue: string;
}

export interface GrillsOutdoorCookingAssembledProductHeight {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface GrillsOutdoorCookingAssembledProductLength {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface GrillsOutdoorCookingAssembledProductWeight {
	measure?: number;
	unit?: AssembledProductWeightUnit;
}

export interface GrillsOutdoorCookingAssembledProductWidth {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface GrillsOutdoorCookingFlowRate {
	measure?: number;
	unit?: FlowRateUnit;
}

export interface GrillsOutdoorCookingMaximumTemperature {
	measure?: number;
	unit?: MaximumTemperatureUnit;
}

export interface GrillsOutdoorCookingMaximumWeight {
	measure?: number;
	unit?: PurpleUnit;
}

export interface GrillsOutdoorCookingMinimumTemperature {
	measure?: number;
	unit?: MaximumTemperatureUnit;
}

export interface SideBurnerSize {
	measure?: number;
	unit?: SideBurnerSizeUnit;
}

export enum SideBurnerSizeUnit {
	SqIn = 'sq in',
}

export interface GrillsOutdoorCookingSwatchImage {
	swatchImageUrl?: string;
	swatchVariantAttribute?: AmbitiousSwatchVariantAttribute;
}

export enum AmbitiousSwatchVariantAttribute {
	AssembledProductHeight = 'assembledProductHeight',
	AssembledProductLength = 'assembledProductLength',
	AssembledProductWidth = 'assembledProductWidth',
	Capacity = 'capacity',
	Color = 'color',
	Count = 'count',
	CountPerPack = 'countPerPack',
	Finish = 'finish',
	HomeDecorStyle = 'homeDecorStyle',
	Material = 'material',
	Size = 'size',
	SportsTeam = 'sportsTeam',
}

export interface TotalCookingArea {
	measure?: number;
	unit?: SideBurnerSizeUnit;
}

export enum GrillsOutdoorCookingVariantAttributeName {
	AssembledProductHeight = 'assembledProductHeight',
	AssembledProductLength = 'assembledProductLength',
	AssembledProductWidth = 'assembledProductWidth',
	Capacity = 'capacity',
	Color = 'color',
	Count = 'count',
	CountPerPack = 'countPerPack',
	Finish = 'finish',
	HomeDecorStyle = 'homeDecorStyle',
	Size = 'size',
	SportsTeam = 'sportsTeam',
}

export interface Hardware {
	accessoriesIncluded?: string[];
	additionalProductAttributes?: HardwareAdditionalProductAttribute[];
	alphanumericCharacter?: string;
	assembledProductHeight?: HardwareAssembledProductHeight;
	assembledProductLength?: HardwareAssembledProductLength;
	assembledProductWeight?: HardwareAssembledProductWeight;
	assembledProductWidth?: HardwareAssembledProductWidth;
	backsetSize?: BacksetSize;
	cleaningCareAndMaintenance?: string;
	color?: string[];
	colorCategory?: ColorCategory[];
	count?: string;
	countPerPack?: number;
	features?: string[];
	finish?: string;
	globalBrandLicense?: string[];
	grade?: string;
	homeDecorStyle?: string;
	isFireResistant?: MustShipAlone;
	isLockable?: MustShipAlone;
	isPrimaryVariant?: MustShipAlone;
	isWaterproof?: MustShipAlone;
	keyFeatures?: string[];
	lockingMechanism?: string;
	lockType?: string;
	mainImageUrl: string;
	manufacturer: string;
	manufacturerPartNumber?: string;
	material?: string[];
	maximumWeight?: HardwareMaximumWeight;
	modelNumber?: string;
	mountType?: string[];
	msrp?: number;
	pieceCount?: number;
	productSecondaryImageURL?: string[];
	prop65WarningText: string;
	recommendedUses?: string[];
	shape?: string;
	shortDescription: string;
	size?: string;
	swatchImages?: HardwareSwatchImage[];
	threadStandard?: string;
	variantAttributeNames?: HardwareVariantAttributeName[];
	variantGroupId?: string;
	volts?: HardwareVolt[];
	warrantyText?: string;
	warrantyURL?: string;
	workingLoadLimit?: number;
}

export interface HardwareAdditionalProductAttribute {
	productAttributeName: string;
	productAttributeValue: string;
}

export interface HardwareAssembledProductHeight {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface HardwareAssembledProductLength {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface HardwareAssembledProductWeight {
	measure?: number;
	unit?: AssembledProductWeightUnit;
}

export interface HardwareAssembledProductWidth {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface BacksetSize {
	measure?: number;
	unit?: ScreenSizeUnit;
}

export interface HardwareMaximumWeight {
	measure?: number;
	unit?: PurpleUnit;
}

export interface HardwareSwatchImage {
	swatchImageUrl?: string;
	swatchVariantAttribute?: CunningSwatchVariantAttribute;
}

export enum CunningSwatchVariantAttribute {
	AssembledProductHeight = 'assembledProductHeight',
	AssembledProductLength = 'assembledProductLength',
	AssembledProductWidth = 'assembledProductWidth',
	Color = 'color',
	Count = 'count',
	CountPerPack = 'countPerPack',
	Finish = 'finish',
	Grade = 'grade',
	MountType = 'mountType',
	Shape = 'shape',
	Size = 'size',
	WorkingLoadLimit = 'workingLoadLimit',
}

export enum HardwareVariantAttributeName {
	AssembledProductHeight = 'assembledProductHeight',
	AssembledProductLength = 'assembledProductLength',
	AssembledProductWidth = 'assembledProductWidth',
	Color = 'color',
	Count = 'count',
	CountPerPack = 'countPerPack',
	Finish = 'finish',
	Grade = 'grade',
	MountType = 'mountType',
	Shape = 'shape',
	Size = 'size',
	Volts = 'volts',
	WorkingLoadLimit = 'workingLoadLimit',
}

export interface HardwareVolt {
	measure?: number;
	unit?: VoltUnit;
}

export interface HealthBeautyElectronics {
	additionalProductAttributes?: HealthBeautyElectronicsAdditionalProductAttribute[];
	ageGroup?: ArtCraftAgeGroup[];
	assembledProductHeight?: HealthBeautyElectronicsAssembledProductHeight;
	assembledProductLength?: HealthBeautyElectronicsAssembledProductLength;
	assembledProductWeight?: HealthBeautyElectronicsAssembledProductWeight;
	assembledProductWidth?: HealthBeautyElectronicsAssembledProductWidth;
	bodyParts?: string[];
	color?: string[];
	count?: string;
	countPerPack?: number;
	features?: string[];
	hairCareKeyBenefit?: HairCareKeyBenefit[];
	hairProductForm?: HairProductForm;
	hairType?: string;
	hasAutomaticShutoff?: MustShipAlone;
	ingredientPreference?: IngredientPreference[];
	instructions?: string;
	isCordless?: MustShipAlone;
	isDisposable?: MustShipAlone;
	isPortable?: MustShipAlone;
	isPowered?: MustShipAlone;
	isPrimaryVariant?: MustShipAlone;
	isReusable?: MustShipAlone;
	isTravelSize?: MustShipAlone;
	keyFeatures?: string[];
	mainImageUrl: string;
	makeupForm?: MakeupForm[];
	manufacturer: string;
	manufacturerPartNumber?: string;
	modelNumber?: string;
	msrp?: number;
	pieceCount?: number;
	powerType?: string;
	productSecondaryImageURL?: string[];
	prop65WarningText: string;
	shortDescription: string;
	size?: string;
	skinCareConcern?: string[];
	skinTone?: string;
	skinType?: string;
	swatchImages?: HealthBeautyElectronicsSwatchImage[];
	variantAttributeNames?: HealthBeautyElectronicsVariantAttributeName[];
	variantGroupId?: string;
	warrantyText?: string;
	warrantyURL?: string;
}

export interface HealthBeautyElectronicsAdditionalProductAttribute {
	productAttributeName: string;
	productAttributeValue: string;
}

export interface HealthBeautyElectronicsAssembledProductHeight {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface HealthBeautyElectronicsAssembledProductLength {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface HealthBeautyElectronicsAssembledProductWeight {
	measure?: number;
	unit?: AssembledProductWeightUnit;
}

export interface HealthBeautyElectronicsAssembledProductWidth {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export enum IngredientPreference {
	CrueltyFree = 'Cruelty-Free',
	LeapingBunny = 'Leaping Bunny',
	PETABunny = 'PETA Bunny',
	The100Organic = '100% Organic',
	Vegan = 'Vegan',
}

export interface HealthBeautyElectronicsSwatchImage {
	swatchImageUrl?: string;
	swatchVariantAttribute?: HealthBeautyElectronicsVariantAttributeName;
}

export enum HealthBeautyElectronicsVariantAttributeName {
	Color = 'color',
	Count = 'count',
	CountPerPack = 'countPerPack',
	Size = 'size',
}

export interface HomeDecorKitchenOther {
	academicInstitution?: string;
	accentColor?: string;
	additionalProductAttributes?: HomeDecorKitchenOtherAdditionalProductAttribute[];
	ageGroup?: ArtCraftAgeGroup[];
	artist?: string[];
	assembledProductHeight?: HomeDecorKitchenOtherAssembledProductHeight;
	assembledProductLength?: HomeDecorKitchenOtherAssembledProductLength;
	assembledProductWeight?: HomeDecorKitchenOtherAssembledProductWeight;
	assembledProductWidth?: HomeDecorKitchenOtherAssembledProductWidth;
	assemblyInstructions?: string;
	athlete?: string[];
	baseColor?: string;
	baseFinish?: string;
	bedSize?: string;
	bedStyle?: string;
	capacity?: string;
	character?: string[];
	cleaningCareAndMaintenance?: string;
	clockNumberType?: string;
	collection?: string;
	color?: string[];
	colorCategory?: ColorCategory[];
	compositeWoodCertificationCode: CompositeWoodCertificationCode;
	contaminantsRemoved?: string;
	count?: string;
	countPerPack?: number;
	countryOfOriginTextiles: CountryOfOriginTextiles;
	curtainLength?: CurtainLength;
	curtainPanelStyle?: string;
	diameter?: HomeDecorKitchenOtherDiameter;
	fabricCareInstructions?: string[];
	fabricColor?: string;
	fabricContent?: HomeDecorKitchenOtherFabricContent[];
	features?: string[];
	fillMaterial?: string[];
	finish?: string;
	frameColor?: string;
	framed?: MustShipAlone;
	frameMaterial?: string[];
	gender?: ArtCraftGender;
	globalBrandLicense?: string[];
	gramsSquareMeter?: number;
	homeDecorStyle?: string;
	inductionSafe?: MustShipAlone;
	isAssemblyRequired?: MustShipAlone;
	isNonStick?: MustShipAlone;
	isPetFriendly?: MustShipAlone;
	isPrimaryVariant?: MustShipAlone;
	isSet?: MustShipAlone;
	keyFeatures?: string[];
	lampType?: string[];
	lightingFactsLabel?: string;
	mainImageUrl: string;
	manufacturer: string;
	manufacturerPartNumber?: string;
	material?: string[];
	meal?: string;
	mealStyle?: string;
	modelNumber?: string;
	msrp?: number;
	occasion?: string[];
	orientation?: HomeDecorKitchenOtherOrientation;
	pattern?: string[];
	pieceCount?: number;
	powerType?: string;
	productSecondaryImageURL?: string[];
	prop65WarningText: string;
	recommendedRooms?: string[];
	recommendedUses?: string[];
	rugSize?: string;
	rugStyle?: string[];
	scent?: string;
	serviceCount?: number;
	shadeMaterial?: string;
	shadeStyle?: string;
	shape?: string;
	shortDescription: string;
	size?: string;
	slatWidth?: HomeDecorKitchenOtherSlatWidth;
	smallPartsWarnings: SmallPartsWarningCode[];
	sportsLeague?: string[];
	sportsTeam?: string[];
	swatchImages?: HomeDecorKitchenOtherSwatchImage[];
	theme?: string[];
	threadCount?: number;
	variantAttributeNames?: HomeDecorKitchenOtherVariantAttributeName[];
	variantGroupId?: string;
	volumeCapacity?: HomeDecorKitchenOtherVolumeCapacity;
	warrantyText?: string;
	warrantyURL?: string;
	windowTreatmentSheerness?: WindowTreatmentSheerness[];
}

export interface HomeDecorKitchenOtherAdditionalProductAttribute {
	productAttributeName: string;
	productAttributeValue: string;
}

export interface HomeDecorKitchenOtherAssembledProductHeight {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface HomeDecorKitchenOtherAssembledProductLength {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface HomeDecorKitchenOtherAssembledProductWeight {
	measure?: number;
	unit?: AssembledProductWeightUnit;
}

export interface HomeDecorKitchenOtherAssembledProductWidth {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface CurtainLength {
	measure?: number;
	unit?: CarSeatBaseDepthUnit;
}

export interface HomeDecorKitchenOtherDiameter {
	measure?: number;
	unit?: RoughInDistanceUnit;
}

export interface HomeDecorKitchenOtherFabricContent {
	materialName?: string;
	materialPercentage?: number;
}

export enum HomeDecorKitchenOtherOrientation {
	Square = 'Square',
}

export interface HomeDecorKitchenOtherSlatWidth {
	measure?: number;
	unit?: CarSeatBaseDepthUnit;
}

export interface HomeDecorKitchenOtherSwatchImage {
	swatchImageUrl?: string;
	swatchVariantAttribute?: MagentaSwatchVariantAttribute;
}

export enum MagentaSwatchVariantAttribute {
	AcademicInstitution = 'academicInstitution',
	AccentColor = 'accentColor',
	AssembledProductHeight = 'assembledProductHeight',
	AssembledProductLength = 'assembledProductLength',
	AssembledProductWidth = 'assembledProductWidth',
	BaseColor = 'baseColor',
	BaseFinish = 'baseFinish',
	Capacity = 'capacity',
	Character = 'character',
	Color = 'color',
	Count = 'count',
	CountPerPack = 'countPerPack',
	Diameter = 'diameter',
	FabricColor = 'fabricColor',
	FabricMaterialName = 'fabricMaterialName',
	Finish = 'finish',
	FrameColor = 'frameColor',
	HomeDecorStyle = 'homeDecorStyle',
	Material = 'material',
	Pattern = 'pattern',
	Scent = 'scent',
	Shape = 'shape',
	Size = 'size',
	SportsTeam = 'sportsTeam',
}

export enum HomeDecorKitchenOtherVariantAttributeName {
	AcademicInstitution = 'academicInstitution',
	AccentColor = 'accentColor',
	AssembledProductHeight = 'assembledProductHeight',
	AssembledProductLength = 'assembledProductLength',
	AssembledProductWidth = 'assembledProductWidth',
	BaseColor = 'baseColor',
	BaseFinish = 'baseFinish',
	BedSize = 'bedSize',
	Capacity = 'capacity',
	Character = 'character',
	Color = 'color',
	Count = 'count',
	CountPerPack = 'countPerPack',
	Diameter = 'diameter',
	FabricColor = 'fabricColor',
	FabricMaterialName = 'fabricMaterialName',
	Finish = 'finish',
	FrameColor = 'frameColor',
	HomeDecorStyle = 'homeDecorStyle',
	Material = 'material',
	Pattern = 'pattern',
	Scent = 'scent',
	Shape = 'shape',
	Size = 'size',
	SportsTeam = 'sportsTeam',
}

export interface HomeDecorKitchenOtherVolumeCapacity {
	measure?: number;
	unit?: VolumeCapacityUnit;
}

export enum VolumeCapacityUnit {
	CuCM = 'cu cm',
	CuFt = 'cu ft',
	CuIn = 'cu in',
	FLOz = 'fl oz',
	Gal = 'gal',
	L = 'L',
	Ml = 'ml',
	Pt = 'pt',
	Qt = 'qt',
}

export enum WindowTreatmentSheerness {
	Blackout = 'Blackout',
	EnergyEfficient = 'Energy Efficient',
	LightFiltering = 'Light Filtering',
	RoomDarkening = 'Room Darkening',
	Sheer = 'Sheer',
}

export interface HouseholdCleaningProductsSupplies {
	activeIngredients?: HouseholdCleaningProductsSuppliesActiveIngredient[];
	additionalProductAttributes?: HouseholdCleaningProductsSuppliesAdditionalProductAttribute[];
	assembledProductHeight?: HouseholdCleaningProductsSuppliesAssembledProductHeight;
	assembledProductLength?: HouseholdCleaningProductsSuppliesAssembledProductLength;
	assembledProductWeight?: HouseholdCleaningProductsSuppliesAssembledProductWeight;
	assembledProductWidth?: HouseholdCleaningProductsSuppliesAssembledProductWidth;
	assemblyInstructions?: string;
	bladeWidth?: HouseholdCleaningProductsSuppliesBladeWidth;
	bristleMaterial?: string;
	cleaningPath?: CleaningPath;
	color?: string[];
	colorCategory?: ColorCategory[];
	connections?: string[];
	count?: string;
	countPerPack?: number;
	fabricContent?: HouseholdCleaningProductsSuppliesFabricContent[];
	features?: string[];
	finish?: string;
	fluidOunces?: HouseholdCleaningProductsSuppliesFluidOunces;
	form?: string;
	handleLength?: HouseholdCleaningProductsSuppliesHandleLength;
	inactiveIngredients?: string[];
	ingredients?: string;
	instructions?: string;
	isAssemblyRequired?: MustShipAlone;
	isBiodegradable?: MustShipAlone;
	isCombustible?: MustShipAlone;
	isEnergyStarCertified?: MustShipAlone;
	isFlammable?: MustShipAlone;
	isPowered?: MustShipAlone;
	isPrimaryVariant?: MustShipAlone;
	isRecyclable?: MustShipAlone;
	keyFeatures?: string[];
	labelImage: HouseholdCleaningProductsSuppliesLabelImage[];
	mainImageUrl: string;
	manufacturer: string;
	manufacturerPartNumber?: string;
	material?: string[];
	modelNumber?: string;
	msrp?: number;
	numberOfSheets?: number;
	pattern?: string[];
	pieceCount?: number;
	powerType?: string;
	productSecondaryImageURL?: string[];
	prop65WarningText: string;
	recommendedLocations?: string[];
	recommendedRooms?: string[];
	recommendedSurfaces?: string[];
	scent?: string;
	shape?: string;
	shelfLife?: HouseholdCleaningProductsSuppliesShelfLife;
	shortDescription: string;
	size?: string;
	swatchImages?: HouseholdCleaningProductsSuppliesSwatchImage[];
	variantAttributeNames?: HouseholdCleaningProductsSuppliesVariantAttributeName[];
	variantGroupId?: string;
	volts?: HouseholdCleaningProductsSuppliesVolt[];
}

export interface HouseholdCleaningProductsSuppliesActiveIngredient {
	activeIngredientName?: string;
	activeIngredientPercentage?: number;
}

export interface HouseholdCleaningProductsSuppliesAdditionalProductAttribute {
	productAttributeName: string;
	productAttributeValue: string;
}

export interface HouseholdCleaningProductsSuppliesAssembledProductHeight {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface HouseholdCleaningProductsSuppliesAssembledProductLength {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface HouseholdCleaningProductsSuppliesAssembledProductWeight {
	measure?: number;
	unit?: AssembledProductWeightUnit;
}

export interface HouseholdCleaningProductsSuppliesAssembledProductWidth {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface HouseholdCleaningProductsSuppliesBladeWidth {
	measure?: number;
	unit?: CarSeatBaseDepthUnit;
}

export interface CleaningPath {
	measure?: number;
	unit?: CarSeatBaseDepthUnit;
}

export interface HouseholdCleaningProductsSuppliesFabricContent {
	materialName?: string;
	materialPercentage?: number;
}

export interface HouseholdCleaningProductsSuppliesFluidOunces {
	measure?: number;
	unit?: FluidOuncesSupplying100CaloriesUnit;
}

export interface HouseholdCleaningProductsSuppliesHandleLength {
	measure?: number;
	unit?: ScreenSizeUnit;
}

export interface HouseholdCleaningProductsSuppliesLabelImage {
	labelImageContains: LabelImageContains;
	labelImageURL: string;
}

export interface HouseholdCleaningProductsSuppliesShelfLife {
	measure?: number;
	unit?: ShelfLifeUnit;
}

export interface HouseholdCleaningProductsSuppliesSwatchImage {
	swatchImageUrl?: string;
	swatchVariantAttribute?: HouseholdCleaningProductsSuppliesVariantAttributeName;
}

export enum HouseholdCleaningProductsSuppliesVariantAttributeName {
	Color = 'color',
	Count = 'count',
	CountPerPack = 'countPerPack',
	Finish = 'finish',
	Scent = 'scent',
	Shape = 'shape',
	Size = 'size',
}

export interface HouseholdCleaningProductsSuppliesVolt {
	measure?: number;
	unit?: VoltUnit;
}

export interface InstrumentAccessories {
	additionalProductAttributes?: InstrumentAccessoriesAdditionalProductAttribute[];
	assembledProductHeight?: InstrumentAccessoriesAssembledProductHeight;
	assembledProductLength?: InstrumentAccessoriesAssembledProductLength;
	assembledProductWeight?: InstrumentAccessoriesAssembledProductWeight;
	assembledProductWidth?: InstrumentAccessoriesAssembledProductWidth;
	athlete?: string[];
	autographedBy?: string;
	batteryLife?: InstrumentAccessoriesBatteryLife;
	color?: string[];
	colorCategory?: ColorCategory[];
	compositeWoodCertificationCode: CompositeWoodCertificationCode;
	count?: string;
	countPerPack?: number;
	displayTechnology?: string;
	features?: string[];
	hasBluetooth?: MustShipAlone;
	ingredients?: string;
	inputsAndOutputs?: InstrumentAccessoriesInputsAndOutput[];
	instrument?: string[];
	isPortable?: MustShipAlone;
	isPrimaryVariant?: MustShipAlone;
	isRemoteControlIncluded?: MustShipAlone;
	keyFeatures?: string[];
	mainImageUrl: string;
	manufacturer: string;
	manufacturerPartNumber?: string;
	material?: string[];
	modelNumber?: string;
	msrp?: number;
	pattern?: string[];
	pieceCount?: number;
	productSecondaryImageURL?: string[];
	prop65WarningText: string;
	recommendedLocations?: string[];
	recommendedUses?: string[];
	shortDescription: string;
	size?: string;
	smallPartsWarnings: SmallPartsWarningCode[];
	sportsLeague?: string[];
	sportsTeam?: string[];
	swatchImages?: InstrumentAccessoriesSwatchImage[];
	variantAttributeNames?: InstrumentAccessoriesVariantAttributeName[];
	variantGroupId?: string;
	warrantyText?: string;
	warrantyURL?: string;
	wirelessTechnologies?: string[];
}

export interface InstrumentAccessoriesAdditionalProductAttribute {
	productAttributeName: string;
	productAttributeValue: string;
}

export interface InstrumentAccessoriesAssembledProductHeight {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface InstrumentAccessoriesAssembledProductLength {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface InstrumentAccessoriesAssembledProductWeight {
	measure?: number;
	unit?: AssembledProductWeightUnit;
}

export interface InstrumentAccessoriesAssembledProductWidth {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface InstrumentAccessoriesBatteryLife {
	measure?: number;
	unit?: StandbyTimeUnit;
}

export interface InstrumentAccessoriesInputsAndOutput {
	inputOutputQuantity?: number;
	inputOutputType?: string;
}

export interface InstrumentAccessoriesSwatchImage {
	swatchImageUrl?: string;
	swatchVariantAttribute?: InstrumentAccessoriesVariantAttributeName;
}

export enum InstrumentAccessoriesVariantAttributeName {
	Color = 'color',
	Count = 'count',
	CountPerPack = 'countPerPack',
	Material = 'material',
	Pattern = 'pattern',
	SportsTeam = 'sportsTeam',
}

export interface Jewelry {
	accentStone?: AryStoneType[];
	additionalProductAttributes?: JewelryAdditionalProductAttribute[];
	ageGroup?: ArtCraftAgeGroup[];
	backFinding?: EarringBack;
	birthstone?: BirthstoneMonth;
	bodyJewelryStyle?: string;
	bodyParts?: string[];
	braceletCharmStyle?: string;
	braceletStyle?: BraceletStyle;
	carats?: JewelryCarats;
	certifyingAgent?: string;
	chainLength?: JewelryChainLength;
	chainPattern?: ChainPattern[];
	character?: string[];
	claspType?: ClaspType[];
	color?: string[];
	colorCategory?: ColorCategory[];
	count?: string;
	countPerPack?: number;
	diameter?: JewelryDiameter;
	diamondClarity?: DiamondClarity;
	diamondColor?: DiamondColor;
	diamondCut?: DiamondCut;
	earGaugeSize?: EarGaugeSize;
	earringStyle?: EarringStyle;
	gemstone?: AryStoneType;
	gemstoneShape?: PrimaryStoneShape;
	gender?: BabyClothingGender;
	isMadeFromRecycledMaterial?: MustShipAlone;
	isPrimaryVariant?: MustShipAlone;
	isResizable?: MustShipAlone;
	jewelrySetting?: JewelrySetting[];
	keyFeatures?: string[];
	mainImageUrl: string;
	manufacturer: string;
	manufacturerPartNumber?: string;
	material?: string[];
	metal?: MetalType;
	metalPurity?: string;
	modelNumber?: string;
	msrp?: number;
	necklaceStyle?: NecklaceStyle;
	numberOfGemstones?: number;
	occasion?: string[];
	pearlType?: string[];
	personalRelationship?: string[];
	productSecondaryImageURL?: string[];
	prop65WarningText: string;
	recycledMaterialContent?: JewelryRecycledMaterialContent[];
	religion?: Religion;
	ringSize?: number;
	ringStyle?: string[];
	seasonCode?: SeasonCode;
	seasonYear?: number;
	secondaryStoneType?: AryStoneType;
	shape?: string;
	shortDescription: string;
	size?: string;
	sizePerPearl?: SizePerPearl;
	smallPartsWarnings: SmallPartsWarningCode[];
	sportsLeague?: string[];
	sportsTeam?: string[];
	stoneCreationMethod?: string;
	stoneTreatment?: string;
	style?: string;
	swatchImages?: JewelrySwatchImage[];
	theme?: string[];
	totalDiamondWeight?: JewelryTotalDiamondWeight;
	variantAttributeNames?: JewelryVariantAttributeName[];
	variantGroupId?: string;
	warrantyText?: string;
	warrantyURL?: string;
}

export enum AryStoneType {
	Alexandrite = 'Alexandrite',
	Amber = 'Amber',
	Amethyst = 'Amethyst',
	Ametrine = 'Ametrine',
	Aquamarine = 'Aquamarine',
	Beryl = 'Beryl',
	Carnelian = 'Carnelian',
	CatSEye = "Cat's Eye",
	Chalcedony = 'Chalcedony',
	ChromeDiopside = 'Chrome Diopside',
	Citrine = 'Citrine',
	Coral = 'Coral',
	Crystal = 'Crystal',
	CubicZirconia = 'Cubic Zirconia',
	Diamond = 'Diamond',
	Emerald = 'Emerald',
	Garnet = 'Garnet',
	Iolite = 'Iolite',
	Jade = 'Jade',
	Kunzite = 'Kunzite',
	LapisLazuli = 'Lapis Lazuli',
	Malachite = 'Malachite',
	Moissanite = 'Moissanite',
	Moonstone = 'Moonstone',
	Morganite = 'Morganite',
	MotherOfPearl = 'Mother of Pearl',
	Onyx = 'Onyx',
	Opal = 'Opal',
	OtherStone = 'Other Stone',
	Pearl = 'Pearl',
	Peridot = 'Peridot',
	Quartz = 'Quartz',
	Rhodolite = 'Rhodolite',
	Rhodonite = 'Rhodonite',
	RoseQuartz = 'Rose Quartz',
	Ruby = 'Ruby',
	Sapphire = 'Sapphire',
	Sodalite = 'Sodalite',
	Spinel = 'Spinel',
	Sunstone = 'Sunstone',
	Tanzanite = 'Tanzanite',
	TigerSEye = "Tiger's Eye",
	Topaz = 'Topaz',
	Tourmaline = 'Tourmaline',
	Tsavorite = 'Tsavorite',
	Turquoise = 'Turquoise',
	WhiteSapphire = 'White Sapphire',
	Zircon = 'Zircon',
}

export interface JewelryAdditionalProductAttribute {
	productAttributeName: string;
	productAttributeValue: string;
}

export enum EarringBack {
	ClickTop = 'Click Top',
	ClipOn = 'Clip-On',
	Clutchless = 'Clutchless',
	ContinuousHoop = 'Continuous Hoop',
	Endless = 'Endless',
	EuroWire = 'Euro Wire',
	Fishhook = 'Fishhook',
	FrenchWire = 'French Wire',
	Hinged = 'Hinged',
	Hoop = 'Hoop',
	LaPousette = 'La Pousette',
	LatchBack = 'Latch Back',
	LeverBack = 'Lever Back',
	OmegaBack = 'Omega Back',
	Other = 'Other',
	PostWithFrictionBack = 'Post With Friction Back',
	PostWithSnapDown = 'Post With Snap Down',
	PushBack = 'Push Back',
	ScrewBack = 'Screw Back',
	ShepherdsHook = 'Shepherds Hook',
	ThreadThrough = 'Thread Through',
}

export enum BirthstoneMonth {
	April = 'April',
	August = 'August',
	December = 'December',
	February = 'February',
	January = 'January',
	July = 'July',
	June = 'June',
	March = 'March',
	May = 'May',
	November = 'November',
	October = 'October',
	September = 'September',
}

export enum BraceletStyle {
	Bangle = 'Bangle',
	Bead = 'Bead',
	Cable = 'Cable',
	CapeCod = 'Cape Cod',
	Chain = 'Chain',
	Charm = 'Charm',
	Cord = 'Cord',
	Cuff = 'Cuff',
	IDBracelets = 'ID Bracelets',
	Link = 'Link',
	MultiStrand = 'Multi-Strand',
	Other = 'Other',
	Stackable = 'Stackable',
	Stretch = 'Stretch',
	TennisBracelets = 'Tennis Bracelets',
	Wrap = 'Wrap',
}

export interface JewelryCarats {
	measure?: number;
	unit?: CaratsUnit;
}

export enum CaratsUnit {
	CT = 'ct',
}

export interface JewelryChainLength {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export enum ChainPattern {
	Anchor = 'Anchor',
	Ball = 'Ball',
	Bar = 'Bar',
	Basketweave = 'Basketweave',
	Bead = 'Bead',
	Belcher = 'Belcher',
	BeveledHerringbone = 'Beveled Herringbone',
	Bismark = 'Bismark',
	BostonLink = 'Boston Link',
	BowTieFigaro = 'Bow-Tie Figaro',
	Box = 'Box',
	Byzantine = 'Byzantine',
	CChain = 'C-Chain',
	Cable = 'Cable',
	CableWire = 'Cable Wire',
	Cascade = 'Cascade',
	Cobra = 'Cobra',
	Cord = 'Cord',
	Coreana = 'Coreana',
	Crisscross = 'Crisscross',
	CubanLink = 'Cuban Link',
	Curb = 'Curb',
	DiamondCutFigaro = 'Diamond Cut Figaro',
	DoubleCable = 'Double Cable',
	DoubleCurb = 'Double Curb',
	DrawFlatCable = 'Draw Flat Cable',
	ElongatedCable = 'Elongated Cable',
	FancyDoubleLink = 'Fancy Double Link',
	Figaro = 'Figaro',
	FlatFigaro = 'Flat Figaro',
	FlatGooseneck = 'Flat Gooseneck',
	Franco = 'Franco',
	FrenchRope = 'French Rope',
	HalfRoundGooseneck = 'Half Round Gooseneck',
	Heart = 'Heart',
	Herringbone = 'Herringbone',
	Hexagon = 'Hexagon',
	HollowMariner = 'Hollow Mariner',
	Lace = 'Lace',
	Link = 'Link',
	Mariner = 'Mariner',
	Mesh = 'Mesh',
	Mirror = 'Mirror',
	Omega = 'Omega',
	OpenCable = 'Open Cable',
	Other = 'Other',
	OvalCurb = 'Oval Curb',
	Palma = 'Palma',
	ParallelCurb = 'Parallel Curb',
	Popcorn = 'Popcorn',
	Puzzle = 'Puzzle',
	Raspberry = 'Raspberry',
	Rolo = 'Rolo',
	Rope = 'Rope',
	RoundOmega = 'Round Omega',
	SANMarco = 'San Marco',
	Serpentine = 'Serpentine',
	SideBySide = 'Side-by-Side',
	Singapore = 'Singapore',
	Snake = 'Snake',
	StockingMesh = 'Stocking Mesh',
	Strand = 'Strand',
	Tornado = 'Tornado',
	Track = 'Track',
	TripleRope = 'Triple Rope',
	TwisterRope = 'Twister Rope',
	TwisterSerpentine = 'Twister Serpentine',
	Wheat = 'Wheat',
	WireCable = 'Wire Cable',
}

export enum ClaspType {
	Ball = 'Ball',
	BarrelClasp = 'Barrel Clasp',
	Box = 'Box',
	Buckle = 'Buckle',
	ButtonEnd = 'Button-End',
	ButtonFly = 'Button Fly',
	ButtonToggle = 'Button Toggle',
	Concealed = 'Concealed',
	DRing = 'D Ring',
	Elastic = 'Elastic',
	Fishhook = 'Fishhook',
	FlatSolidBuckle = 'Flat Solid Buckle',
	FoldOver = 'Fold Over',
	HiddenSafetyClasp = 'Hidden Safety Clasp',
	HookEyeClasp = 'Hook & Eye Clasp',
	HookLoopClasp = 'Hook & Loop Clasp',
	InvisibleDoubleLocking = 'Invisible Double-Locking',
	LobsterClaw = 'Lobster Claw',
	MagneticClasp = 'Magnetic Clasp',
	NoClasp = 'No Clasp',
	Other = 'Other',
	PushButton = 'Push Button',
	SHook = 'S Hook',
	Screw = 'Screw',
	SideLock = 'Side Lock',
	Snaps = 'Snaps',
	SpringRing = 'Spring Ring',
	Toggle = 'Toggle',
}

export interface JewelryDiameter {
	measure?: number;
	unit?: RoughInDistanceUnit;
}

export enum DiamondClarity {
	FL = 'FL',
	I1 = 'I1',
	I2 = 'I2',
	I3 = 'I3',
	If = 'IF',
	Other = 'Other',
	Si1 = 'SI1',
	Si2 = 'SI2',
	Vs1 = 'VS1',
	Vs2 = 'VS2',
	Vvs1 = 'VVS1',
	Vvs2 = 'VVS2',
}

export enum DiamondColor {
	D = 'D',
	DE = 'D-E',
	DF = 'D-F',
	E = 'E',
	EF = 'E-F',
	F = 'F',
	FG = 'F-G',
	G = 'G',
	GH = 'G-H',
	H = 'H',
	HI = 'H-I',
	I = 'I',
	IJ = 'I-J',
	J = 'J',
	JK = 'J-K',
	K = 'K',
	KL = 'K-L',
	L = 'L',
	LM = 'L-M',
	M = 'M',
	NR = 'N-R',
	Other = 'Other',
	SZ = 'S-Z',
}

export enum DiamondCut {
	AsscherCut = 'Asscher cut',
	BaguetteCut = 'Baguette cut',
	CushionCut = 'Cushion cut',
	EmeraldCut = 'Emerald cut',
	FancyCut = 'Fancy cut',
	HeartCut = 'Heart cut',
	MarquiseCut = 'Marquise cut',
	OtherCut = 'Other cut',
	OvalCut = 'Oval cut',
	PearCut = 'Pear cut',
	PrincessCut = 'Princess cut',
	RadiantCut = 'Radiant cut',
	RoundBrilliantCut = 'Round Brilliant cut',
	SquareCut = 'Square cut',
}

export interface EarGaugeSize {
	measure?: number;
	unit?: HeelHeightUnit;
}

export enum EarringStyle {
	Chandelier = 'Chandelier',
	Dangling = 'Dangling',
	Drop = 'Drop',
	FakeGauge = 'Fake Gauge',
	Hoop = 'Hoop',
	Stud = 'Stud',
	Teardrop = 'Teardrop',
	Threader = 'Threader',
}

export enum PrimaryStoneShape {
	Asscher = 'Asscher',
	Baguette = 'Baguette',
	Cushion = 'Cushion',
	Emerald = 'Emerald',
	Heart = 'Heart',
	Marquise = 'Marquise',
	Oval = 'Oval',
	Pear = 'Pear',
	Princess = 'Princess',
	Radiant = 'Radiant',
	Round = 'Round',
}

export enum JewelrySetting {
	Bar = 'bar',
	Basket = 'basket',
	BeadSet = 'bead-set',
	Bezel = 'bezel',
	Bypass = 'bypass',
	Cathedral = 'cathedral',
	Channel = 'channel',
	ClassicSolitaire = 'classic solitaire',
	Cluster = 'cluster',
	Cocktail = 'cocktail',
	Designer = 'designer',
	EternityBand = 'eternity band',
	FlatTop = 'flat top',
	Flush = 'flush',
	Freedom = 'freedom',
	Guard = 'guard',
	Gypsy = 'gypsy',
	HalfBezel = 'half bezel',
	Halo = 'halo',
	HandWired = 'hand-wired',
	Illusion = 'illusion',
	Invisible = 'invisible',
	Other = 'other',
	Pave = 'pave',
	Prongs = 'prongs',
	Semimount = 'semimount',
	SharedProng = 'shared prong',
	SideStone = 'side stone',
	Solitaire = 'solitaire',
	Stackable = 'stackable',
	Strung = 'strung',
	TensionMount = 'tension mount',
	The2Prong = '2-prong',
	The3Prong = '3-prong',
	The3Stone = '3-stone',
	The4Prong = '4-prong',
	The6Prong = '6-prong',
	Trellis = 'trellis',
	TricolorRolling = 'tricolor rolling',
	TwoToneFreedom = 'two-tone freedom',
	VProng = 'v-prong',
	Waterfall = 'waterfall',
	Wrap = 'wrap',
}

export enum NecklaceStyle {
	Bib = 'Bib',
	Cascade = 'Cascade',
	Chain = 'Chain',
	Choker = 'Choker',
	Collar = 'Collar',
	Initial = 'Initial',
	Lariat = 'Lariat',
	Locket = 'Locket',
	MultiStrand = 'Multi Strand',
	Other = 'Other',
	Pendant = 'Pendant',
	SentimentSymbols = 'Sentiment & Symbols',
	SingleStrand = 'Single Strand',
	Solitaire = 'Solitaire',
	YNecklace = 'Y-necklace',
}

export interface JewelryRecycledMaterialContent {
	percentageOfRecycledMaterial?: number;
	recycledMaterial?: string;
}

export enum Religion {
	Buddhism = 'Buddhism',
	Christianity = 'Christianity',
	Hinduism = 'Hinduism',
	Islam = 'Islam',
	Judaism = 'Judaism',
	Other = 'Other',
}

export interface SizePerPearl {
	measure?: number;
	unit?: FocalLengthUnit;
}

export interface JewelrySwatchImage {
	swatchImageUrl?: string;
	swatchVariantAttribute?: JewelryVariantAttributeName;
}

export enum JewelryVariantAttributeName {
	Birthstone = 'birthstone',
	Carats = 'carats',
	ChainLength = 'chainLength',
	Color = 'color',
	Count = 'count',
	CountPerPack = 'countPerPack',
	Diameter = 'diameter',
	Gemstone = 'gemstone',
	Metal = 'metal',
	MetalPurity = 'metalPurity',
	RingSize = 'ringSize',
	Shape = 'shape',
	Size = 'size',
	SportsTeam = 'sportsTeam',
	Style = 'style',
}

export interface JewelryTotalDiamondWeight {
	measure?: number;
	unit?: CaratsUnit;
}

export interface LandVehicles {
	acceleration?: string;
	additionalProductAttributes?: LandVehiclesAdditionalProductAttribute[];
	assembledProductHeight?: LandVehiclesAssembledProductHeight;
	assembledProductLength?: LandVehiclesAssembledProductLength;
	assembledProductWeight?: LandVehiclesAssembledProductWeight;
	assembledProductWidth?: LandVehiclesAssembledProductWidth;
	averageFuelConsumption?: LandVehiclesAverageFuelConsumption;
	boreStroke?: string;
	color?: string[];
	compositeWoodCertificationCode: CompositeWoodCertificationCode;
	compressionRatio?: string;
	coolingSystem?: string;
	countryOfOriginTextiles: CountryOfOriginTextiles;
	curbWeight?: CurbWeight;
	drivetrain?: string;
	engineDisplacement?: LandVehiclesEngineDisplacement;
	engineModel?: string;
	fabricContent?: LandVehiclesFabricContent[];
	features?: string[];
	frontBrakes?: string;
	frontSuspension?: string;
	frontTires?: string;
	frontWheels?: string;
	fuelCapacity?: LandVehiclesFuelCapacity;
	fuelRequirement?: string;
	fuelSystem?: string;
	inductionSystem?: string;
	isPrimaryVariant?: MustShipAlone;
	keyFeatures?: string[];
	mainImageUrl: string;
	manufacturer: string;
	manufacturerPartNumber?: string;
	maximumEnginePower?: LandVehiclesMaximumEnginePower;
	modelNumber?: string;
	msrp?: number;
	powertrain?: string;
	productSecondaryImageURL?: string[];
	prop65WarningText: string;
	rearBrakes?: string;
	rearSuspension?: string;
	rearTires?: string;
	rearWheels?: string;
	seatHeight?: LandVehiclesSeatHeight;
	seatingCapacity?: number;
	shortDescription: string;
	submodel?: string;
	swatchImages?: LandVehiclesSwatchImage[];
	topSpeed?: LandVehiclesTopSpeed;
	torque?: string;
	towingCapacity?: TowingCapacity;
	transmissionDesignation?: string;
	variantAttributeNames?: LandVehiclesVariantAttributeName[];
	variantGroupId?: string;
	vehicleMake?: string;
	vehicleModel?: string;
	vehicleType?: string;
	vehicleYear?: number;
	warrantyText?: string;
	warrantyURL?: string;
	wheelbase?: Wheelbase;
}

export interface LandVehiclesAdditionalProductAttribute {
	productAttributeName: string;
	productAttributeValue: string;
}

export interface LandVehiclesAssembledProductHeight {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface LandVehiclesAssembledProductLength {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface LandVehiclesAssembledProductWeight {
	measure?: number;
	unit?: AssembledProductWeightUnit;
}

export interface LandVehiclesAssembledProductWidth {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface LandVehiclesAverageFuelConsumption {
	measure?: number;
	unit?: AverageFuelConsumptionUnit;
}

export enum AverageFuelConsumptionUnit {
	Mpg = 'mpg',
}

export interface CurbWeight {
	measure?: number;
	unit?: MaximumLoadWeightUnit;
}

export interface LandVehiclesEngineDisplacement {
	measure?: number;
	unit?: EngineDisplacementUnit;
}

export enum EngineDisplacementUnit {
	Cc = 'cc',
	Cid = 'CID',
}

export interface LandVehiclesFabricContent {
	materialName?: string;
	materialPercentage?: number;
}

export interface LandVehiclesFuelCapacity {
	measure?: number;
	unit?: FuelCapacityUnit;
}

export enum FuelCapacityUnit {
	Gal = 'gal',
	L = 'L',
}

export interface LandVehiclesMaximumEnginePower {
	measure?: number;
	unit?: MaximumEnginePowerUnit;
}

export enum MaximumEnginePowerUnit {
	HP = 'hp',
	KW = 'kW',
}

export interface LandVehiclesSeatHeight {
	measure?: number;
	unit?: ScreenSizeUnit;
}

export interface LandVehiclesSwatchImage {
	swatchImageUrl?: string;
	swatchVariantAttribute?: LandVehiclesVariantAttributeName;
}

export enum LandVehiclesVariantAttributeName {
	Color = 'color',
	Count = 'count',
	EngineModel = 'engineModel',
	VehicleMake = 'vehicleMake',
	VehicleModel = 'vehicleModel',
	VehicleYear = 'vehicleYear',
}

export interface LandVehiclesTopSpeed {
	measure?: number;
	unit?: TopSpeedUnit;
}

export enum TopSpeedUnit {
	Kph = 'kph',
	Mph = 'mph',
}

export interface TowingCapacity {
	measure?: number;
	unit?: MaximumLoadWeightUnit;
}

export interface Wheelbase {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface LargeAppliances {
	additionalProductAttributes?: LargeAppliancesAdditionalProductAttribute[];
	assembledProductHeight?: LargeAppliancesAssembledProductHeight;
	assembledProductLength?: LargeAppliancesAssembledProductLength;
	assembledProductWeight?: LargeAppliancesAssembledProductWeight;
	assembledProductWidth?: LargeAppliancesAssembledProductWidth;
	assemblyInstructions?: string;
	btu?: number;
	capacity?: string;
	cleaningCareAndMaintenance?: string;
	collection?: string;
	color?: string[];
	colorCategory?: ColorCategory[];
	cordLength?: LargeAppliancesCordLength;
	energyGuideLabel?: string;
	features?: string[];
	finish?: string;
	fuelType?: string;
	hasAutomaticShutoff?: MustShipAlone;
	hasCfl?: MustShipAlone;
	homeDecorStyle?: string;
	isAssemblyRequired?: MustShipAlone;
	isEnergyStarCertified?: MustShipAlone;
	isPrimaryVariant?: MustShipAlone;
	isRemoteControlIncluded?: MustShipAlone;
	isSet?: MustShipAlone;
	isSmart?: MustShipAlone;
	keyFeatures?: string[];
	lightingFactsLabel?: string;
	loadPosition?: string;
	mainImageUrl: string;
	manufacturer: string;
	manufacturerPartNumber?: string;
	material?: string[];
	maximumRoomSize?: MaximumRoomSize;
	modelNumber?: string;
	msrp?: number;
	pattern?: string[];
	powerType?: string;
	productSecondaryImageURL?: string[];
	prop65WarningText: string;
	recommendedRooms?: string[];
	recommendedUses?: string[];
	runTime?: RunTime;
	shape?: string;
	shortDescription: string;
	size?: string;
	swatchImages?: LargeAppliancesSwatchImage[];
	variantAttributeNames?: LargeAppliancesVariantAttributeName[];
	variantGroupId?: string;
	volts?: LargeAppliancesVolt[];
	warrantyText?: string;
	warrantyURL?: string;
	watts?: LargeAppliancesWatts;
}

export interface LargeAppliancesAdditionalProductAttribute {
	productAttributeName: string;
	productAttributeValue: string;
}

export interface LargeAppliancesAssembledProductHeight {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface LargeAppliancesAssembledProductLength {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface LargeAppliancesAssembledProductWeight {
	measure?: number;
	unit?: AssembledProductWeightUnit;
}

export interface LargeAppliancesAssembledProductWidth {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface LargeAppliancesCordLength {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface MaximumRoomSize {
	measure?: number;
	unit?: CoverageAreaUnit;
}

export interface RunTime {
	measure?: number;
	unit?: StandbyTimeUnit;
}

export interface LargeAppliancesSwatchImage {
	swatchImageUrl?: string;
	swatchVariantAttribute?: LargeAppliancesVariantAttributeName;
}

export enum LargeAppliancesVariantAttributeName {
	AssembledProductHeight = 'assembledProductHeight',
	AssembledProductLength = 'assembledProductLength',
	AssembledProductWidth = 'assembledProductWidth',
	Capacity = 'capacity',
	Color = 'color',
	Finish = 'finish',
	HomeDecorStyle = 'homeDecorStyle',
	Material = 'material',
	Pattern = 'pattern',
	Shape = 'shape',
	Size = 'size',
}

export interface LargeAppliancesVolt {
	measure?: number;
	unit?: VoltUnit;
}

export interface LargeAppliancesWatts {
	measure?: number;
	unit?: WattsUnit;
}

export interface MedicalAidsEquipment {
	additionalProductAttributes?: MedicalAidsEquipmentAdditionalProductAttribute[];
	ageGroup?: ArtCraftAgeGroup[];
	assembledProductHeight?: MedicalAidsEquipmentAssembledProductHeight;
	assembledProductLength?: MedicalAidsEquipmentAssembledProductLength;
	assembledProductWeight?: MedicalAidsEquipmentAssembledProductWeight;
	assembledProductWidth?: MedicalAidsEquipmentAssembledProductWidth;
	bodyParts?: string[];
	cleaningCareAndMaintenance?: string;
	collection?: string;
	color?: string[];
	colorCategory?: ColorCategory[];
	compatibleBrands?: string[];
	count?: string;
	countPerPack?: number;
	diameter?: MedicalAidsEquipmentDiameter;
	driveSystem?: string;
	fabricCareInstructions?: string[];
	fabricContent?: MedicalAidsEquipmentFabricContent[];
	features?: string[];
	gender?: BabyClothingGender;
	healthConcerns?: string[];
	isDisposable?: MustShipAlone;
	isFoldable?: MustShipAlone;
	isIndustrial?: MustShipAlone;
	isInflatable?: MustShipAlone;
	isLatexFree?: MustShipAlone;
	isPortable?: MustShipAlone;
	isPowered?: MustShipAlone;
	isPrimaryVariant?: MustShipAlone;
	isReusable?: MustShipAlone;
	isSet?: MustShipAlone;
	isTravelSize?: MustShipAlone;
	isWaterproof?: MustShipAlone;
	isWheeled?: MustShipAlone;
	keyFeatures?: string[];
	mainImageUrl: string;
	manufacturer: string;
	manufacturerPartNumber?: string;
	material?: string[];
	maximumWeight?: MedicalAidsEquipmentMaximumWeight;
	medicineStrength?: string;
	minimumWeight?: MedicalAidsEquipmentMinimumWeight;
	modelNumber?: string;
	msrp?: number;
	pieceCount?: number;
	powerType?: string;
	productSecondaryImageURL?: string[];
	prop65WarningText: string;
	recommendedUses?: string[];
	shape?: string;
	shortDescription: string;
	size?: string;
	swatchImages?: MedicalAidsEquipmentSwatchImage[];
	variantAttributeNames?: MedicalAidsEquipmentVariantAttributeName[];
	variantGroupId?: string;
	warrantyText?: string;
	warrantyURL?: string;
}

export interface MedicalAidsEquipmentAdditionalProductAttribute {
	productAttributeName: string;
	productAttributeValue: string;
}

export interface MedicalAidsEquipmentAssembledProductHeight {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface MedicalAidsEquipmentAssembledProductLength {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface MedicalAidsEquipmentAssembledProductWeight {
	measure?: number;
	unit?: AssembledProductWeightUnit;
}

export interface MedicalAidsEquipmentAssembledProductWidth {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface MedicalAidsEquipmentDiameter {
	measure?: number;
	unit?: RoughInDistanceUnit;
}

export interface MedicalAidsEquipmentFabricContent {
	materialName?: string;
	materialPercentage?: number;
}

export interface MedicalAidsEquipmentMaximumWeight {
	measure?: number;
	unit?: PurpleUnit;
}

export interface MedicalAidsEquipmentMinimumWeight {
	measure?: number;
	unit?: AssembledProductWeightUnit;
}

export interface MedicalAidsEquipmentSwatchImage {
	swatchImageUrl?: string;
	swatchVariantAttribute?: MedicalAidsEquipmentVariantAttributeName;
}

export enum MedicalAidsEquipmentVariantAttributeName {
	Color = 'color',
	Count = 'count',
	CountPerPack = 'countPerPack',
	Diameter = 'diameter',
	MedicineStrength = 'medicineStrength',
	Shape = 'shape',
	Size = 'size',
}

export interface MedicineSupplements {
	activeIngredients?: MedicineSupplementsActiveIngredient[];
	activityStage?: ActivityStage[];
	additionalProductAttributes?: MedicineSupplementsAdditionalProductAttribute[];
	ageGroup?: ArtCraftAgeGroup[];
	bodyParts?: string[];
	calories?: MedicineSupplementsCalories;
	color?: string[];
	countPerPack?: number;
	dietaryMethod?: string[];
	dosage?: string;
	drugActiveInactiveIngredientsImage?: string;
	drugDosageInstructionsImage?: string;
	flavor?: string;
	form?: string;
	gender?: BabyClothingGender;
	healthConcerns?: string[];
	inactiveIngredients?: string[];
	ingredients?: string;
	instructions?: string;
	isControlledSubstance?: MustShipAlone;
	isPrimaryVariant?: MustShipAlone;
	keyFeatures?: string[];
	labelImage: MedicineSupplementsLabelImage[];
	mainImageUrl: string;
	manufacturer: string;
	medicineStrength?: string;
	msrp?: number;
	nationalDrugCode?: string;
	nutrientContentClaims?: string[];
	nutrients?: Supplement[];
	primaryIngredient?: string[];
	productSecondaryImageURL?: string[];
	prop65WarningText: string;
	servingSize?: string;
	servingsPerContainer?: number;
	shelfLife?: MedicineSupplementsShelfLife;
	shortDescription: string;
	size?: string;
	stopUseIndications?: string[];
	sugarPerServing?: number;
	supplementActiveInactiveIngredientsImage?: string;
	supplementDosageInstructionsImage?: string;
	swatchImages?: MedicineSupplementsSwatchImage[];
	symptoms?: string;
	totalCarbohydrate?: MedicineSupplementsTotalCarbohydrate;
	totalFat?: MedicineSupplementsTotalFat;
	totalProtein?: MedicineSupplementsTotalProtein;
	variantAttributeNames?: MedicineSupplementsVariantAttributeName[];
	variantGroupId?: string;
}

export interface MedicineSupplementsActiveIngredient {
	activeIngredientName?: string;
	activeIngredientPercentage?: number;
}

export enum ActivityStage {
	IntraWorkout = 'Intra-Workout',
	PostWorkout = 'Post-Workout',
	PreWorkout = 'Pre-Workout',
}

export interface MedicineSupplementsAdditionalProductAttribute {
	productAttributeName: string;
	productAttributeValue: string;
}

export interface MedicineSupplementsCalories {
	measure?: number;
	unit?: CaloriesUnit;
}

export interface MedicineSupplementsLabelImage {
	labelImageContains: LabelImageContains;
	labelImageURL: string;
}

export interface Supplement {
	nutrientAmount?: string;
	nutrientName?: string;
	nutrientPercentageDailyValue?: string;
}

export interface MedicineSupplementsShelfLife {
	measure?: number;
	unit?: ShelfLifeUnit;
}

export interface MedicineSupplementsSwatchImage {
	swatchImageUrl?: string;
	swatchVariantAttribute?: FriskySwatchVariantAttribute;
}

export enum FriskySwatchVariantAttribute {
	Count = 'count',
	CountPerPack = 'countPerPack',
	Flavor = 'flavor',
	MedicineStrength = 'medicineStrength',
	Size = 'size',
}

export interface MedicineSupplementsTotalCarbohydrate {
	measure?: number;
	unit?: TotalCarbohydrateUnit;
}

export interface MedicineSupplementsTotalFat {
	measure?: number;
	unit?: TotalCarbohydrateUnit;
}

export interface MedicineSupplementsTotalProtein {
	measure?: number;
	unit?: TotalCarbohydrateUnit;
}

export enum MedicineSupplementsVariantAttributeName {
	Color = 'color',
	CountPerPack = 'countPerPack',
	Flavor = 'flavor',
	MedicineStrength = 'medicineStrength',
	Size = 'size',
}

export interface Movies {
	actors?: string[];
	additionalProductAttributes?: MoviesAdditionalProductAttribute[];
	additionalVariantAttributeNames?: string[];
	aspectRatio?: string;
	awardsWon?: string[];
	director?: string;
	dubbedLanguages?: string[];
	duration?: Duration;
	edition?: string;
	hasSubtitles?: MustShipAlone;
	isDubbed?: MustShipAlone;
	isPrimaryVariant?: MustShipAlone;
	mainImageUrl: string;
	movieGenre?: string;
	movieSubgenre?: string;
	mpaaRating?: MPAARating;
	numberInSeries?: string;
	numberOfDiscs?: number;
	originalLanguages?: string[];
	physicalMediaFormat?: MoviesPhysicalMediaFormat[];
	productSecondaryImageURL?: string[];
	prop65WarningText: string;
	ratingReason?: string;
	screenwriter?: string;
	seriesTitle?: string;
	shortDescription: string;
	studioProductionCompany?: string;
	subtitledLanguages?: string[];
	swatchImages?: MoviesSwatchImage[];
	theatricalReleaseDate?: Date;
	title?: string;
	variantAttributeNames?: FoodBeverageVariantAttributeName[];
	variantGroupId?: string;
}

export interface MoviesAdditionalProductAttribute {
	productAttributeName: string;
	productAttributeValue: string;
}

export interface Duration {
	measure?: number;
	unit?: DurationUnit;
}

export enum DurationUnit {
	Min = 'min',
}

export enum MPAARating {
	G = 'G',
	Nc17 = 'NC-17',
	NotRated = 'Not Rated',
	PG = 'PG',
	PG13 = 'PG-13',
	R = 'R',
}

export enum MoviesPhysicalMediaFormat {
	BluRay = 'Blu-Ray',
	CD = 'CD',
	CassetteTape = 'Cassette Tape',
	DVD = 'DVD',
	Digital = 'Digital',
	DigitalHD = 'Digital HD',
	Lp = 'LP',
	MiniDVTape = 'miniDV Tape',
	PrintedMedia = 'Printed Media',
	The3DBluRay = '3D Blu-ray',
	The4KUltraHD = '4K Ultra HD',
	The8TrackTape = '8-Track Tape',
	USBStick = 'USB stick',
	VHSTape = 'VHS Tape',
}

export interface MoviesSwatchImage {
	swatchImageUrl?: string;
	swatchVariantAttribute?: string;
}

export interface Music {
	additionalProductAttributes?: MusicAdditionalProductAttribute[];
	autographedBy?: string;
	awardsWon?: string[];
	character?: string[];
	digitalAudioFileFormat?: string[];
	edition?: string;
	hasParentalAdvisoryLabel?: MustShipAlone;
	isEdited?: MustShipAlone;
	isEnhanced?: MustShipAlone;
	isPrimaryVariant?: MustShipAlone;
	keyFeatures?: string[];
	mainImageUrl: string;
	movieSubgenre?: string;
	musicGenre?: string;
	musicProducer?: string;
	musicReleaseType?: string;
	musicSubGenre?: string;
	numberInSeries?: string;
	numberOfDiscs?: number;
	numberOfTracks?: number;
	originalLanguages?: string[];
	parentalAdvisoryLabelURL?: string[];
	performer?: string[];
	physicalMediaFormat?: MoviesPhysicalMediaFormat[];
	productSecondaryImageURL?: string[];
	prop65WarningText: string;
	ratingReason?: string;
	recordLabel?: string;
	releaseDate?: Date;
	seriesTitle?: string;
	shortDescription: string;
	songwriter?: string;
	swatchImages?: MusicSwatchImage[];
	title?: string;
	trackListings?: TrackListing[];
	variantAttributeNames?: FoodBeverageVariantAttributeName[];
	variantGroupId?: string;
}

export interface MusicAdditionalProductAttribute {
	productAttributeName: string;
	productAttributeValue: string;
}

export interface MusicSwatchImage {
	swatchImageUrl?: string;
	swatchVariantAttribute?: string;
}

export interface TrackListing {
	trackDuration?: string;
	trackName?: string;
	trackNumber?: number;
}

export interface MusicCasesBags {
	additionalProductAttributes?: MusicCasesBagsAdditionalProductAttribute[];
	assembledProductHeight?: MusicCasesBagsAssembledProductHeight;
	assembledProductLength?: MusicCasesBagsAssembledProductLength;
	assembledProductWeight?: MusicCasesBagsAssembledProductWeight;
	assembledProductWidth?: MusicCasesBagsAssembledProductWidth;
	color?: string[];
	colorCategory?: ColorCategory[];
	count?: string;
	countPerPack?: number;
	fabricCareInstructions?: string[];
	fabricContent?: MusicCasesBagsFabricContent[];
	features?: string[];
	hardOrSoftCase?: HardOrSoftCase;
	instrument?: string[];
	isPortable?: MustShipAlone;
	isPrimaryVariant?: MustShipAlone;
	isWheeled?: MustShipAlone;
	keyFeatures?: string[];
	mainImageUrl: string;
	manufacturer: string;
	manufacturerPartNumber?: string;
	material?: string[];
	modelNumber?: string;
	msrp?: number;
	productSecondaryImageURL?: string[];
	prop65WarningText: string;
	recommendedLocations?: string[];
	recommendedUses?: string[];
	shape?: string;
	shortDescription: string;
	size?: string;
	swatchImages?: MusicCasesBagsSwatchImage[];
	variantAttributeNames?: MusicCasesBagsVariantAttributeName[];
	variantGroupId?: string;
	warrantyText?: string;
	warrantyURL?: string;
}

export interface MusicCasesBagsAdditionalProductAttribute {
	productAttributeName: string;
	productAttributeValue: string;
}

export interface MusicCasesBagsAssembledProductHeight {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface MusicCasesBagsAssembledProductLength {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface MusicCasesBagsAssembledProductWeight {
	measure?: number;
	unit?: AssembledProductWeightUnit;
}

export interface MusicCasesBagsAssembledProductWidth {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface MusicCasesBagsFabricContent {
	materialName?: string;
	materialPercentage?: number;
}

export interface MusicCasesBagsSwatchImage {
	swatchImageUrl?: string;
	swatchVariantAttribute?: MusicCasesBagsVariantAttributeName;
}

export enum MusicCasesBagsVariantAttributeName {
	Color = 'color',
	Count = 'count',
	CountPerPack = 'countPerPack',
	Material = 'material',
	Shape = 'shape',
}

export interface MusicalInstruments {
	additionalProductAttributes?: MusicalInstrumentsAdditionalProductAttribute[];
	ageGroup?: ArtCraftAgeGroup[];
	assembledProductHeight?: MusicalInstrumentsAssembledProductHeight;
	assembledProductLength?: MusicalInstrumentsAssembledProductLength;
	assembledProductWeight?: MusicalInstrumentsAssembledProductWeight;
	assembledProductWidth?: MusicalInstrumentsAssembledProductWidth;
	audioPowerOutput?: string;
	batteryLife?: MusicalInstrumentsBatteryLife;
	color?: string[];
	compositeWoodCertificationCode: CompositeWoodCertificationCode;
	count?: string;
	countPerPack?: number;
	displayTechnology?: string;
	drumSetCymbalType?: DrumSetCymbalType[];
	features?: string[];
	finish?: string;
	guitarType?: GuitarType;
	hasBluetooth?: MustShipAlone;
	hasIntegratedSpeakers?: MustShipAlone;
	inputsAndOutputs?: MusicalInstrumentsInputsAndOutput[];
	instrument?: string[];
	isCollectible?: MustShipAlone;
	isElectric?: MustShipAlone;
	isPortable?: MustShipAlone;
	isPowered?: MustShipAlone;
	isPrimaryVariant?: MustShipAlone;
	isSet?: MustShipAlone;
	karaokeMachineType?: KaraokeMachineType;
	keyFeatures?: string[];
	mainImageUrl: string;
	manufacturer: string;
	manufacturerPartNumber?: string;
	material?: string[];
	microphoneIncluded?: MustShipAlone;
	modelNumber?: string;
	msrp?: number;
	musicalInstrumentFamily?: string;
	numberOfKeys?: number;
	numberOfStrings?: number;
	orientation?: MusicalInstrumentsOrientation;
	pattern?: string[];
	percussionInstrumentType?: string[];
	powerType?: string;
	productSecondaryImageURL?: string[];
	prop65WarningText: string;
	recommendedUses?: string[];
	saxophoneType?: SaxophoneType;
	shortDescription: string;
	skillLevel?: string;
	smallPartsWarnings: SmallPartsWarningCode[];
	soundKey?: SoundKey[];
	sportsTeam?: string[];
	swatchImages?: MusicalInstrumentsSwatchImage[];
	variantAttributeNames?: InstrumentAccessoriesVariantAttributeName[];
	variantGroupId?: string;
	warrantyText?: string;
	warrantyURL?: string;
}

export interface MusicalInstrumentsAdditionalProductAttribute {
	productAttributeName: string;
	productAttributeValue: string;
}

export interface MusicalInstrumentsAssembledProductHeight {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface MusicalInstrumentsAssembledProductLength {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface MusicalInstrumentsAssembledProductWeight {
	measure?: number;
	unit?: AssembledProductWeightUnit;
}

export interface MusicalInstrumentsAssembledProductWidth {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface MusicalInstrumentsBatteryLife {
	measure?: number;
	unit?: StandbyTimeUnit;
}

export enum DrumSetCymbalType {
	AcousticCymbals = 'Acoustic Cymbals',
	BellCymbals = 'Bell Cymbals',
	ChinaCymbals = 'China Cymbals',
	ClashCymbals = 'Clash Cymbals',
	CrashCymbals = 'Crash Cymbals',
	EffectCymbals = 'Effect Cymbals',
	FingerCymbals = 'Finger Cymbals',
	GongCymbals = 'Gong Cymbals',
	HiHatCymbals = 'Hi-Hat Cymbals',
	OrchestralCymbals = 'Orchestral Cymbals',
	RideCymbals = 'Ride Cymbals',
	SplashCymbals = 'Splash Cymbals',
	SwishCymbals = 'Swish Cymbals',
}

export enum GuitarType {
	Acoustic = 'Acoustic',
	AcousticElectric = 'Acoustic/Electric',
	Bass = 'Bass',
	Classical = 'Classical',
	Electric = 'Electric',
	Nylon = 'Nylon',
	Ukulele = 'Ukulele',
}

export interface MusicalInstrumentsInputsAndOutput {
	inputOutputQuantity?: number;
	inputOutputType?: string;
}

export enum KaraokeMachineType {
	HandheldMicrophone = 'Handheld Microphone',
	StandAlone = 'Stand Alone',
	System = 'System',
}

export enum MusicalInstrumentsOrientation {
	Horizontal = 'Horizontal',
	Left = 'Left',
	Right = 'Right',
	Vertical = 'Vertical',
}

export enum SaxophoneType {
	AltoSaxophones = 'Alto Saxophones',
	BaritoneSaxophones = 'Baritone Saxophones',
	BassSaxophones = 'Bass Saxophones',
	SopraninoSaxophones = 'Sopranino Saxophones',
	SopranoSaxophones = 'Soprano Saxophones',
	TenorSaxophones = 'Tenor Saxophones',
}

export enum SoundKey {
	Bb = 'Bb',
	BbFDouble = 'Bb/F Double',
	BbHighF = 'Bb/High F',
	C = 'C',
	Eb = 'Eb',
	F = 'F',
	FBb = 'F/Bb',
	FBbFAlto = 'F/Bb/F Alto',
}

export interface MusicalInstrumentsSwatchImage {
	swatchImageUrl?: string;
	swatchVariantAttribute?: InstrumentAccessoriesVariantAttributeName;
}

export interface Office {
	additionalProductAttributes?: OfficeAdditionalProductAttribute[];
	ageGroup?: ArtCraftAgeGroup[];
	assembledProductHeight?: OfficeAssembledProductHeight;
	assembledProductLength?: OfficeAssembledProductLength;
	assembledProductWeight?: OfficeAssembledProductWeight;
	assembledProductWidth?: OfficeAssembledProductWidth;
	brightness?: OfficeBrightness;
	calendarFormat?: string;
	calendarTerm?: CalendarTerm;
	capacity?: string;
	color?: string[];
	colorCategory?: ColorCategory[];
	compatibleDevices?: string[];
	compositeWoodCertificationCode: CompositeWoodCertificationCode;
	count?: string;
	countPerPack?: number;
	dexterity?: string;
	envelopeSize?: string;
	finish?: string;
	globalBrandLicense?: string[];
	holeSize?: HoleSize;
	hpprintercartridgeNumber?: string[];
	inkColor?: string[];
	isAntiglare?: MustShipAlone;
	isIndustrial?: MustShipAlone;
	isLined?: MustShipAlone;
	isMagnetic?: MustShipAlone;
	isPowered?: MustShipAlone;
	isPrimaryVariant?: MustShipAlone;
	isRefillable?: MustShipAlone;
	isRetractable?: MustShipAlone;
	isTearResistant?: MustShipAlone;
	keyFeatures?: string[];
	lightingFactsLabel?: string;
	mainImageUrl: string;
	manufacturer: string;
	manufacturerPartNumber?: string;
	material?: string[];
	modelNumber?: string;
	msrp?: number;
	numberOfSheets?: number;
	occasion?: string[];
	overallExpansion?: OverallExpansion;
	paperClipSize?: PaperClipSize;
	paperSize?: string[];
	pattern?: string[];
	pencilLeadDiameter?: PencilLeadDiameter;
	penPointSize?: PenPointSize;
	pieceCount?: number;
	powerType?: string;
	productSecondaryImageURL?: string[];
	prop65WarningText: string;
	recommendedUses?: string[];
	shape?: string;
	shortDescription: string;
	shredderCutStyles?: string;
	size?: string;
	smallPartsWarnings: SmallPartsWarningCode[];
	swatchImages?: OfficeSwatchImage[];
	systemOfMeasurement?: string;
	tabColor?: string;
	tabCut?: TabCut;
	theme?: string[];
	variantAttributeNames?: OfficeVariantAttributeName[];
	variantGroupId?: string;
	warrantyText?: string;
	warrantyURL?: string;
	year?: number;
}

export interface OfficeAdditionalProductAttribute {
	productAttributeName: string;
	productAttributeValue: string;
}

export interface OfficeAssembledProductHeight {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface OfficeAssembledProductLength {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface OfficeAssembledProductWeight {
	measure?: number;
	unit?: AssembledProductWeightUnit;
}

export interface OfficeAssembledProductWidth {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface OfficeBrightness {
	measure?: number;
	unit?: BrightnessUnit;
}

export interface CalendarTerm {
	measure?: number;
	unit?: CalendarTermUnit;
}

export enum CalendarTermUnit {
	Months = 'months',
}

export interface HoleSize {
	measure?: number;
	unit?: ScreenSizeUnit;
}

export interface OverallExpansion {
	measure?: number;
	unit?: OverallExpansionUnit;
}

export enum OverallExpansionUnit {
	Inches = 'inches',
}

export enum PaperClipSize {
	Jumbo = 'Jumbo',
	No1 = 'No. 1',
	No2 = 'No. 2',
	No3 = 'No. 3',
}

export interface PenPointSize {
	measure?: number;
	unit?: FocalLengthUnit;
}

export enum PencilLeadDiameter {
	The03Mm = '0.3mm',
	The04Mm = '0.4mm',
	The05Mm = '0.5mm',
	The07Mm = '0.7mm',
	The09Mm = '0.9mm',
	The2Mm = '2mm',
	The315Mm = '3.15mm',
	The3Mm = '3mm',
	The56Mm = '5.6mm',
	The5Mm = '5mm',
}

export interface OfficeSwatchImage {
	swatchImageUrl?: string;
	swatchVariantAttribute?: OfficeVariantAttributeName;
}

export enum OfficeVariantAttributeName {
	Capacity = 'capacity',
	Color = 'color',
	Count = 'count',
	CountPerPack = 'countPerPack',
	EnvelopeSize = 'envelopeSize',
	Material = 'material',
	NumberOfSheets = 'numberOfSheets',
	PaperSize = 'paperSize',
	Shape = 'shape',
	Size = 'size',
}

export enum TabCut {
	The12Cut = '1/2 cut',
	The13Cut = '1/3 cut',
	The15Cut = '1/5 cut',
	The25CutRightOfCenter = '2/5 cut - right of center',
	The25CutRightPosition = '2/5 cut - right position',
	Undercut = 'undercut',
}

export interface Optical {
	additionalProductAttributes?: OpticalAdditionalProductAttribute[];
	ageGroup?: ArtCraftAgeGroup[];
	assembledProductHeight?: OpticalAssembledProductHeight;
	assembledProductLength?: OpticalAssembledProductLength;
	assembledProductWeight?: OpticalAssembledProductWeight;
	assembledProductWidth?: OpticalAssembledProductWidth;
	athlete?: string[];
	character?: string[];
	cleaningCareAndMaintenance?: string;
	collection?: string;
	color?: string[];
	colorCategory?: ColorCategory[];
	compatibleBrands?: string[];
	count?: string;
	countPerPack?: number;
	eyewearFrameSize?: string;
	eyewearFrameStyle?: string;
	eyewearLensFeature?: string[];
	eyewearRimStyle?: EyewearRim;
	features?: string[];
	gender?: BabyClothingGender;
	globalBrandLicense?: string[];
	hasAdaptiveLenses?: MustShipAlone;
	isPolarized?: MustShipAlone;
	isPrimaryVariant?: MustShipAlone;
	isScratchResistant?: MustShipAlone;
	isSet?: MustShipAlone;
	keyFeatures?: string[];
	lensMaterial?: string;
	lensTint?: string;
	lensType?: string[];
	mainImageUrl: string;
	manufacturer: string;
	manufacturerPartNumber?: string;
	material?: string[];
	modelNumber?: string;
	msrp?: number;
	productSecondaryImageURL?: string[];
	prop65WarningText: string;
	shape?: string;
	shortDescription: string;
	size?: string;
	sportsLeague?: string[];
	sportsTeam?: string[];
	sunglassesStyle?: string;
	swatchImages?: OpticalSwatchImage[];
	uvRating?: number;
	variantAttributeNames?: OpticalVariantAttributeName[];
	variantGroupId?: string;
	warrantyText?: string;
	warrantyURL?: string;
}

export interface OpticalAdditionalProductAttribute {
	productAttributeName: string;
	productAttributeValue: string;
}

export interface OpticalAssembledProductHeight {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface OpticalAssembledProductLength {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface OpticalAssembledProductWeight {
	measure?: number;
	unit?: AssembledProductWeightUnit;
}

export interface OpticalAssembledProductWidth {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export enum EyewearRim {
	FullRim = 'Full-Rim',
	HalfRim = 'Half-Rim',
	Rimless = 'Rimless',
	SemiRimless = 'Semi-Rimless',
}

export interface OpticalSwatchImage {
	swatchImageUrl?: string;
	swatchVariantAttribute?: OpticalVariantAttributeName;
}

export enum OpticalVariantAttributeName {
	Color = 'color',
	Count = 'count',
	CountPerPack = 'countPerPack',
	Shape = 'shape',
	Size = 'size',
	SportsTeam = 'sportsTeam',
}

export interface Optics {
	additionalProductAttributes?: OpticsAdditionalProductAttribute[];
	ageGroup?: ArtCraftAgeGroup[];
	assembledProductHeight?: OpticsAssembledProductHeight;
	assembledProductLength?: OpticsAssembledProductLength;
	assembledProductWeight?: OpticsAssembledProductWeight;
	assembledProductWidth?: OpticsAssembledProductWidth;
	assemblyInstructions?: string;
	attachmentStyle?: string;
	cleaningCareAndMaintenance?: string;
	color?: string[];
	colorCategory?: ColorCategory[];
	count?: string;
	countPerPack?: number;
	dexterity?: string;
	digitalZoom?: string;
	displayResolution?: string[];
	displayTechnology?: string;
	features?: string[];
	fieldOfView?: string;
	focalRatio?: string;
	focusType?: string[];
	gender?: BabyClothingGender;
	globalBrandLicense?: string[];
	hasDovetailBarSystem?: MustShipAlone;
	hasLcdScreen?: MustShipAlone;
	hasMemoryCardSlot?: MustShipAlone;
	hasNightVision?: MustShipAlone;
	isAssemblyRequired?: MustShipAlone;
	isFogResistant?: MustShipAlone;
	isFoldable?: MustShipAlone;
	isLockable?: MustShipAlone;
	isMulticoated?: MustShipAlone;
	isParfocal?: MustShipAlone;
	isPortable?: MustShipAlone;
	isPowered?: MustShipAlone;
	isPrimaryVariant?: MustShipAlone;
	isWaterproof?: MustShipAlone;
	isWeatherResistant?: MustShipAlone;
	keyFeatures?: string[];
	lensCoating?: string;
	lensDiameter?: OpticsLensDiameter;
	lockType?: string;
	magnification?: string;
	mainImageUrl: string;
	manufacturer: string;
	manufacturerPartNumber?: string;
	material?: string[];
	maximumRecommendedAge?: OpticsMaximumRecommendedAge;
	minimumRecommendedAge?: OpticsMinimumRecommendedAge;
	modelNumber?: string;
	msrp?: number;
	operatingTemperature?: OperatingTemperature;
	opticalZoom?: string;
	pattern?: string[];
	pieceCount?: number;
	powerType?: string;
	productSecondaryImageURL?: string[];
	prop65WarningText: string;
	recommendedLocations?: string[];
	recommendedUses?: string[];
	screenSize?: OpticsScreenSize;
	sensorResolution?: string;
	shortDescription: string;
	size?: string;
	sport?: string[];
	swatchImages?: OpticsSwatchImage[];
	variantAttributeNames?: OpticsVariantAttributeName[];
	variantGroupId?: string;
	warrantyText?: string;
	warrantyURL?: string;
	wirelessTechnologies?: string[];
}

export interface OpticsAdditionalProductAttribute {
	productAttributeName: string;
	productAttributeValue: string;
}

export interface OpticsAssembledProductHeight {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface OpticsAssembledProductLength {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface OpticsAssembledProductWeight {
	measure?: number;
	unit?: AssembledProductWeightUnit;
}

export interface OpticsAssembledProductWidth {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface OpticsLensDiameter {
	measure?: number;
	unit?: FocalLengthUnit;
}

export interface OpticsMaximumRecommendedAge {
	measure?: number;
	unit?: MaximumRecommendedAgeUnit;
}

export interface OpticsMinimumRecommendedAge {
	measure?: number;
	unit?: MaximumRecommendedAgeUnit;
}

export interface OperatingTemperature {
	measure?: number;
	unit?: OperatingTemperatureUnit;
}

export enum OperatingTemperatureUnit {
	ºC = 'ºC',
	ºF = 'ºF',
}

export interface OpticsScreenSize {
	measure?: number;
	unit?: ScreenSizeUnit;
}

export interface OpticsSwatchImage {
	swatchImageUrl?: string;
	swatchVariantAttribute?: OpticsVariantAttributeName;
}

export enum OpticsVariantAttributeName {
	AssembledProductWeight = 'assembledProductWeight',
	Color = 'color',
	Count = 'count',
	CountPerPack = 'countPerPack',
	Dexterity = 'dexterity',
	Material = 'material',
	Size = 'size',
}

export interface Other {
	additionalProductAttributes?: OtherAdditionalProductAttribute[];
	assembledProductHeight?: OtherAssembledProductHeight;
	assembledProductLength?: OtherAssembledProductLength;
	assembledProductWeight?: OtherAssembledProductWeight;
	assembledProductWidth?: OtherAssembledProductWidth;
	color?: string[];
	colorCategory?: ColorCategory[];
	count?: string;
	countPerPack?: number;
	features?: string[];
	finish?: string;
	gender?: BabyClothingGender;
	ingredients?: string;
	isFoldable?: MustShipAlone;
	isIndustrial?: MustShipAlone;
	isPortable?: MustShipAlone;
	isPrimaryVariant?: MustShipAlone;
	isRetractable?: MustShipAlone;
	keyFeatures?: string[];
	mainImageUrl: string;
	manufacturer: string;
	manufacturerPartNumber?: string;
	material?: string[];
	modelNumber?: string;
	msrp?: number;
	pattern?: string[];
	pieceCount?: number;
	productSecondaryImageURL?: string[];
	prop65WarningText: string;
	shape?: string;
	shortDescription: string;
	size?: string;
	swatchImages?: OtherSwatchImage[];
	systemOfMeasurement?: string;
	variantAttributeNames?: OtherVariantAttributeName[];
	variantGroupId?: string;
}

export interface OtherAdditionalProductAttribute {
	productAttributeName: string;
	productAttributeValue: string;
}

export interface OtherAssembledProductHeight {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface OtherAssembledProductLength {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface OtherAssembledProductWeight {
	measure?: number;
	unit?: AssembledProductWeightUnit;
}

export interface OtherAssembledProductWidth {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface OtherSwatchImage {
	swatchImageUrl?: string;
	swatchVariantAttribute?: OtherVariantAttributeName;
}

export enum OtherVariantAttributeName {
	Color = 'color',
	Count = 'count',
	CountPerPack = 'countPerPack',
	Finish = 'finish',
	Shape = 'shape',
	Size = 'size',
}

export interface PhotoAccessories {
	accessoriesIncluded?: string[];
	additionalProductAttributes?: PhotoAccessoriesAdditionalProductAttribute[];
	assembledProductHeight?: PhotoAccessoriesAssembledProductHeight;
	assembledProductLength?: PhotoAccessoriesAssembledProductLength;
	assembledProductWeight?: PhotoAccessoriesAssembledProductWeight;
	assembledProductWidth?: PhotoAccessoriesAssembledProductWidth;
	assemblyInstructions?: string;
	capacity?: string;
	cleaningCareAndMaintenance?: string;
	color?: string[];
	colorCategory?: ColorCategory[];
	compatibleBrands?: string[];
	compatibleDevices?: string[];
	connections?: string[];
	count?: string;
	countPerPack?: number;
	displayTechnology?: string;
	features?: string[];
	globalBrandLicense?: string[];
	inputsAndOutputs?: PhotoAccessoriesInputsAndOutput[];
	isAssemblyRequired?: MustShipAlone;
	isPrimaryVariant?: MustShipAlone;
	isWaterproof?: MustShipAlone;
	keyFeatures?: string[];
	lightBulbType?: string;
	lightOutput?: LightOutput;
	mainImageUrl: string;
	manufacturer: string;
	manufacturerPartNumber?: string;
	material?: string[];
	memoryCardType?: string[];
	modelNumber?: string;
	msrp?: number;
	pattern?: string[];
	productSecondaryImageURL?: string[];
	prop65WarningText: string;
	recommendedUses?: string[];
	recordableMediaFormats?: string[];
	shape?: string;
	shortDescription: string;
	size?: string;
	swatchImages?: PhotoAccessoriesSwatchImage[];
	variantAttributeNames?: PhotoAccessoriesVariantAttributeName[];
	variantGroupId?: string;
	volts?: PhotoAccessoriesVolt[];
	warrantyText?: string;
	warrantyURL?: string;
	watts?: PhotoAccessoriesWatts;
	wirelessTechnologies?: string[];
}

export interface PhotoAccessoriesAdditionalProductAttribute {
	productAttributeName: string;
	productAttributeValue: string;
}

export interface PhotoAccessoriesAssembledProductHeight {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface PhotoAccessoriesAssembledProductLength {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface PhotoAccessoriesAssembledProductWeight {
	measure?: number;
	unit?: AssembledProductWeightUnit;
}

export interface PhotoAccessoriesAssembledProductWidth {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface PhotoAccessoriesInputsAndOutput {
	inputOutputQuantity?: number;
	inputOutputType?: string;
}

export interface LightOutput {
	measure?: number;
	unit?: BrightnessUnit;
}

export interface PhotoAccessoriesSwatchImage {
	swatchImageUrl?: string;
	swatchVariantAttribute?: PhotoAccessoriesVariantAttributeName;
}

export enum PhotoAccessoriesVariantAttributeName {
	Capacity = 'capacity',
	Color = 'color',
	Count = 'count',
	Material = 'material',
	Shape = 'shape',
	Size = 'size',
}

export interface PhotoAccessoriesVolt {
	measure?: number;
	unit?: VoltUnit;
}

export interface PhotoAccessoriesWatts {
	measure?: number;
	unit?: WattsUnit;
}

export interface PlumbingHVAC {
	accessoriesIncluded?: string[];
	additionalProductAttributes?: PlumbingHVACAdditionalProductAttribute[];
	assembledProductHeight?: PlumbingHVACAssembledProductHeight;
	assembledProductLength?: PlumbingHVACAssembledProductLength;
	assembledProductWeight?: PlumbingHVACAssembledProductWeight;
	assembledProductWidth?: PlumbingHVACAssembledProductWidth;
	ceeTier?: CEETier;
	cleaningCareAndMaintenance?: string;
	color?: string[];
	colorCategory?: ColorCategory[];
	contaminantsRemoved?: string;
	count?: string;
	countPerPack?: number;
	coverageArea?: PlumbingHVACCoverageArea;
	faucetDrillings?: string;
	faucetHandleDesign?: string;
	features?: string[];
	finish?: string;
	fuelType?: string;
	gallonsPerFlush?: GallonsPerFlush;
	gallonsPerMinute?: GallonsPerMinute;
	globalBrandLicense?: string[];
	hardwareFinish?: string;
	hasCeeCertification?: MustShipAlone;
	homeDecorStyle?: string;
	horsepower?: PlumbingHVACHorsepower;
	humidificationOutputPerDay?: string;
	isFireResistant?: MustShipAlone;
	isIndustrial?: MustShipAlone;
	isPrimaryVariant?: MustShipAlone;
	isWaterproof?: MustShipAlone;
	keyFeatures?: string[];
	mainImageUrl: string;
	manufacturer: string;
	manufacturerPartNumber?: string;
	material?: string[];
	mervRating?: string;
	modelNumber?: string;
	msrp?: number;
	numberOfBlades?: number;
	pieceCount?: number;
	pintsOfMoistureRemovedPerDay?: number;
	productSecondaryImageURL?: string[];
	prop65WarningText: string;
	recommendedUses?: string[];
	roughInDistance?: RoughInDistance;
	shape?: string;
	shortDescription: string;
	size?: string;
	sprayPatterns?: string;
	swatchImages?: PlumbingHVACSwatchImage[];
	variantAttributeNames?: PlumbingHVACVariantAttributeName[];
	variantGroupId?: string;
	volts?: PlumbingHVACVolt[];
	volumeCapacity?: PlumbingHVACVolumeCapacity;
	warrantyText?: string;
	warrantyURL?: string;
	watts?: PlumbingHVACWatts;
}

export interface PlumbingHVACAdditionalProductAttribute {
	productAttributeName: string;
	productAttributeValue: string;
}

export interface PlumbingHVACAssembledProductHeight {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface PlumbingHVACAssembledProductLength {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface PlumbingHVACAssembledProductWeight {
	measure?: number;
	unit?: AssembledProductWeightUnit;
}

export interface PlumbingHVACAssembledProductWidth {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export enum CEETier {
	CEETierI = 'CEE Tier I',
	CEETierII = 'CEE Tier II',
	CEETierIII = 'CEE Tier III',
}

export interface PlumbingHVACCoverageArea {
	measure?: number;
	unit?: CoverageAreaUnit;
}

export interface GallonsPerFlush {
	measure?: number;
	unit?: GallonsPerFlushUnit;
}

export enum GallonsPerFlushUnit {
	Gal = 'gal',
}

export interface GallonsPerMinute {
	measure?: number;
	unit?: GallonsPerFlushUnit;
}

export interface PlumbingHVACHorsepower {
	measure?: number;
	unit?: HorsepowerUnit;
}

export interface RoughInDistance {
	measure?: string;
	unit?: RoughInDistanceUnit;
}

export interface PlumbingHVACSwatchImage {
	swatchImageUrl?: string;
	swatchVariantAttribute?: PlumbingHVACVariantAttributeName;
}

export enum PlumbingHVACVariantAttributeName {
	AssembledProductHeight = 'assembledProductHeight',
	AssembledProductLength = 'assembledProductLength',
	AssembledProductWidth = 'assembledProductWidth',
	Color = 'color',
	Count = 'count',
	CountPerPack = 'countPerPack',
	Finish = 'finish',
	GallonsPerMinute = 'gallonsPerMinute',
	Shape = 'shape',
	Size = 'size',
	Volts = 'volts',
	Watts = 'watts',
}

export interface PlumbingHVACVolt {
	measure?: number;
	unit?: VoltUnit;
}

export interface PlumbingHVACVolumeCapacity {
	measure?: number;
	unit?: VolumeCapacityUnit;
}

export interface PlumbingHVACWatts {
	measure?: number;
	unit?: WattsUnit;
}

export interface PrintersScannersImaging {
	additionalProductAttributes?: PrintersScannersImagingAdditionalProductAttribute[];
	assembledProductHeight?: PrintersScannersImagingAssembledProductHeight;
	assembledProductLength?: PrintersScannersImagingAssembledProductLength;
	assembledProductWeight?: PrintersScannersImagingAssembledProductWeight;
	assembledProductWidth?: PrintersScannersImagingAssembledProductWidth;
	color?: string[];
	colorPagesPerMinute?: number;
	connections?: string[];
	count?: string;
	countPerPack?: number;
	features?: string[];
	has3dCapabilities?: MustShipAlone;
	hasAutomaticDocumentFeeder?: MustShipAlone;
	hasAutomaticTwoSidedPrinting?: MustShipAlone;
	isPrimaryVariant?: MustShipAlone;
	keyFeatures?: string[];
	mainImageUrl: string;
	manufacturer: string;
	manufacturerPartNumber?: string;
	maximumDocumentSize?: string;
	maximumPrintResolution?: MaximumPrintResolution;
	maximumScannerResolution?: MaximumScannerResolution;
	memoryCardType?: string[];
	modelNumber?: string;
	monochromeColor?: MonochromeColor;
	monochromePagesPerMinute?: number;
	msrp?: number;
	printingTechnology?: string;
	productSecondaryImageURL?: string[];
	prop65WarningText: string;
	resolution?: string;
	shortDescription: string;
	swatchImages?: PrintersScannersImagingSwatchImage[];
	variantAttributeNames?: PrintersScannersImagingVariantAttributeName[];
	variantGroupId?: string;
	warrantyText?: string;
	warrantyURL?: string;
	wirelessTechnologies?: string[];
}

export interface PrintersScannersImagingAdditionalProductAttribute {
	productAttributeName: string;
	productAttributeValue: string;
}

export interface PrintersScannersImagingAssembledProductHeight {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface PrintersScannersImagingAssembledProductLength {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface PrintersScannersImagingAssembledProductWeight {
	measure?: number;
	unit?: AssembledProductWeightUnit;
}

export interface PrintersScannersImagingAssembledProductWidth {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface MaximumPrintResolution {
	measure?: number;
	unit?: MaximumPrintResolutionUnit;
}

export enum MaximumPrintResolutionUnit {
	DPI = 'dpi',
}

export interface MaximumScannerResolution {
	measure?: number;
	unit?: MaximumPrintResolutionUnit;
}

export enum MonochromeColor {
	Color = 'Color',
	Monochrome = 'Monochrome',
}

export interface PrintersScannersImagingSwatchImage {
	swatchImageUrl?: string;
	swatchVariantAttribute?: MischievousSwatchVariantAttribute;
}

export enum MischievousSwatchVariantAttribute {
	Color = 'color',
	Count = 'count',
	CountPerPack = 'countPerPack',
	Resolution = 'resolution',
	Size = 'size',
}

export enum PrintersScannersImagingVariantAttributeName {
	Color = 'color',
	Count = 'count',
	CountPerPack = 'countPerPack',
	Resolution = 'resolution',
}

export interface SafetyEmergency {
	additionalProductAttributes?: SafetyEmergencyAdditionalProductAttribute[];
	assembledProductHeight?: SafetyEmergencyAssembledProductHeight;
	assembledProductLength?: SafetyEmergencyAssembledProductLength;
	assembledProductWeight?: SafetyEmergencyAssembledProductWeight;
	assembledProductWidth?: SafetyEmergencyAssembledProductWidth;
	assemblyInstructions?: string;
	color?: string[];
	count?: string;
	countPerPack?: number;
	features?: string[];
	fireExtinguisherClasses?: FireExtinguisherClass[];
	fluidOunces?: SafetyEmergencyFluidOunces;
	form?: string;
	handleLength?: SafetyEmergencyHandleLength;
	ingredients?: string;
	instructions?: string;
	isAssemblyRequired?: MustShipAlone;
	isPowered?: MustShipAlone;
	isPrimaryVariant?: MustShipAlone;
	isRefillable?: MustShipAlone;
	keyFeatures?: string[];
	mainImageUrl: string;
	manufacturer: string;
	manufacturerPartNumber?: string;
	modelNumber?: string;
	msrp?: number;
	pieceCount?: number;
	powerType?: string;
	productSecondaryImageURL?: string[];
	prop65WarningText: string;
	recommendedLocations?: string[];
	recommendedSurfaces?: string[];
	recommendedUses?: string[];
	shortDescription: string;
	size?: string;
	swatchImages?: SafetyEmergencySwatchImage[];
	variantAttributeNames?: HealthBeautyElectronicsVariantAttributeName[];
	variantGroupId?: string;
	warrantyText?: string;
	warrantyURL?: string;
	workingPressure?: WorkingPressure;
}

export interface SafetyEmergencyAdditionalProductAttribute {
	productAttributeName: string;
	productAttributeValue: string;
}

export interface SafetyEmergencyAssembledProductHeight {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface SafetyEmergencyAssembledProductLength {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface SafetyEmergencyAssembledProductWeight {
	measure?: number;
	unit?: AssembledProductWeightUnit;
}

export interface SafetyEmergencyAssembledProductWidth {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export enum FireExtinguisherClass {
	A = 'A',
	B = 'B',
	C = 'C',
	D = 'D',
	K = 'K',
}

export interface SafetyEmergencyFluidOunces {
	measure?: number;
	unit?: FluidOuncesSupplying100CaloriesUnit;
}

export interface SafetyEmergencyHandleLength {
	measure?: number;
	unit?: ScreenSizeUnit;
}

export interface SafetyEmergencySwatchImage {
	swatchImageUrl?: string;
	swatchVariantAttribute?: HealthBeautyElectronicsVariantAttributeName;
}

export interface WorkingPressure {
	measure?: number;
	unit?: WorkingPressureUnit;
}

export enum WorkingPressureUnit {
	Bar = 'Bar',
	Pa = 'Pa',
	Psi = 'psi',
}

export interface Software {
	additionalProductAttributes?: SoftwareAdditionalProductAttribute[];
	count?: string;
	countPerPack?: number;
	digitalFileFormat?: string[];
	educationalFocus?: string[];
	features?: string[];
	isPrimaryVariant?: MustShipAlone;
	keyFeatures?: string[];
	mainImageUrl: string;
	manufacturer: string;
	manufacturerPartNumber?: string;
	modelNumber?: string;
	msrp?: number;
	numberOfUsers?: number;
	operatingSystem?: string[];
	physicalMediaFormat?: string[];
	productSecondaryImageURL?: string[];
	prop65WarningText: string;
	releaseDate?: Date;
	requiredPeripherals?: string;
	shortDescription: string;
	softwareCategory?: string[];
	swatchImages?: SoftwareSwatchImage[];
	systemRequirements?: string[];
	variantAttributeNames?: SoftwareVariantAttributeName[];
	variantGroupId?: string;
	version?: string;
	warrantyText?: string;
	warrantyURL?: string;
}

export interface SoftwareAdditionalProductAttribute {
	productAttributeName: string;
	productAttributeValue: string;
}

export interface SoftwareSwatchImage {
	swatchImageUrl?: string;
	swatchVariantAttribute?: BraggadociousSwatchVariantAttribute;
}

export enum BraggadociousSwatchVariantAttribute {
	Configuration = 'configuration',
	Count = 'count',
	CountPerPack = 'countPerPack',
	DigitalFileFormat = 'digitalFileFormat',
	Edition = 'edition',
	OperatingSystem = 'operatingSystem',
	PhysicalMediaFormat = 'physicalMediaFormat',
	Platform = 'platform',
	Size = 'size',
	Version = 'version',
}

export enum SoftwareVariantAttributeName {
	Configuration = 'configuration',
	Count = 'count',
	CountPerPack = 'countPerPack',
	DigitalFileFormat = 'digitalFileFormat',
	OperatingSystem = 'operatingSystem',
	PhysicalMediaFormat = 'physicalMediaFormat',
	Version = 'version',
}

export interface SoundRecording {
	additionalProductAttributes?: SoundRecordingAdditionalProductAttribute[];
	assembledProductHeight?: SoundRecordingAssembledProductHeight;
	assembledProductLength?: SoundRecordingAssembledProductLength;
	assembledProductWeight?: SoundRecordingAssembledProductWeight;
	assembledProductWidth?: SoundRecordingAssembledProductWidth;
	audioPowerOutput?: string;
	batteryLife?: SoundRecordingBatteryLife;
	color?: string[];
	colorCategory?: ColorCategory[];
	count?: string;
	countPerPack?: number;
	equalizerControl?: string;
	features?: string[];
	hasBluetooth?: MustShipAlone;
	hasIntegratedSpeakers?: MustShipAlone;
	impedance?: SoundRecordingImpedance;
	inputsAndOutputs?: SoundRecordingInputsAndOutput[];
	isPortable?: MustShipAlone;
	isPowered?: MustShipAlone;
	isPrimaryVariant?: MustShipAlone;
	isRemoteControlIncluded?: MustShipAlone;
	keyFeatures?: string[];
	mainImageUrl: string;
	manufacturer: string;
	manufacturerPartNumber?: string;
	material?: string[];
	microphoneTechnology?: string;
	modelNumber?: string;
	msrp?: number;
	pieceCount?: number;
	powerType?: string;
	productSecondaryImageURL?: string[];
	prop65WarningText: string;
	recommendedLocations?: string[];
	recommendedUses?: string[];
	shortDescription: string;
	smallPartsWarnings: SmallPartsWarningCode[];
	swatchImages?: SoundRecordingSwatchImage[];
	variantAttributeNames?: SoundRecordingVariantAttributeName[];
	variantGroupId?: string;
	warrantyText?: string;
	warrantyURL?: string;
	wirelessTechnologies?: string[];
}

export interface SoundRecordingAdditionalProductAttribute {
	productAttributeName: string;
	productAttributeValue: string;
}

export interface SoundRecordingAssembledProductHeight {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface SoundRecordingAssembledProductLength {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface SoundRecordingAssembledProductWeight {
	measure?: number;
	unit?: AssembledProductWeightUnit;
}

export interface SoundRecordingAssembledProductWidth {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface SoundRecordingBatteryLife {
	measure?: number;
	unit?: StandbyTimeUnit;
}

export interface SoundRecordingImpedance {
	measure?: string;
	unit?: ImpedanceUnit;
}

export interface SoundRecordingInputsAndOutput {
	inputOutputQuantity?: number;
	inputOutputType?: string;
}

export interface SoundRecordingSwatchImage {
	swatchImageUrl?: string;
	swatchVariantAttribute?: SoundRecordingVariantAttributeName;
}

export enum SoundRecordingVariantAttributeName {
	AudioPowerOutput = 'audioPowerOutput',
	Color = 'color',
	Count = 'count',
	CountPerPack = 'countPerPack',
	Material = 'material',
}

export interface SportRecreationOther {
	additionalProductAttributes?: SportRecreationOtherAdditionalProductAttribute[];
	ageGroup?: ArtCraftAgeGroup[];
	AirGunPowerType?: AirGunPowerType;
	animalType?: string;
	assembledProductHeight?: SportRecreationOtherAssembledProductHeight;
	assembledProductLength?: SportRecreationOtherAssembledProductLength;
	assembledProductWeight?: SportRecreationOtherAssembledProductWeight;
	assembledProductWidth?: SportRecreationOtherAssembledProductWidth;
	assemblyInstructions?: string;
	athlete?: string[];
	autographedBy?: string;
	ballCoreMaterial?: string[];
	basketballSize?: string;
	batDrop?: string;
	bladeType?: string;
	capacity?: string;
	character?: string[];
	cleaningCareAndMaintenance?: string;
	clothingSize?: string;
	color?: string[];
	colorCategory?: ColorCategory[];
	compatibleDevices?: string[];
	compositeWoodCertificationCode: CompositeWoodCertificationCode;
	count?: string;
	countPerPack?: number;
	countryOfOriginTextiles: CountryOfOriginTextiles;
	dexterity?: string;
	driveSystem?: string;
	fabricCareInstructions?: string[];
	fabricContent?: SportRecreationOtherFabricContent[];
	features?: string[];
	finish?: string;
	fishingLinePoundTest?: number;
	fishingLocation?: string;
	fitnessGoal?: string;
	footballSize?: string;
	gender?: BabyClothingGender;
	globalBrandLicense?: string[];
	golfClubShaftFlex?: string;
	golfClubShaftType?: string;
	hasAutomaticShutoff?: MustShipAlone;
	horsepower?: SportRecreationOtherHorsepower;
	inflexKitComponent?: MustShipAlone;
	insulationType?: InsulationType;
	isAssemblyRequired?: MustShipAlone;
	isCollectible?: MustShipAlone;
	isFoldable?: MustShipAlone;
	isMemorabilia?: MustShipAlone;
	isPortable?: MustShipAlone;
	isPowered?: MustShipAlone;
	isPrimaryVariant?: MustShipAlone;
	isSpaceSaving?: MustShipAlone;
	isTearResistant?: MustShipAlone;
	isWaterproof?: MustShipAlone;
	isWeatherResistant?: MustShipAlone;
	isWheeled?: MustShipAlone;
	keyFeatures?: string[];
	loft?: string;
	mainImageUrl: string;
	manufacturer: string;
	manufacturerPartNumber?: string;
	material?: string[];
	maximumIncline?: number;
	maximumRecommendedAge?: SportRecreationOtherMaximumRecommendedAge;
	maximumWeight?: SportRecreationOtherMaximumWeight;
	minimumRecommendedAge?: SportRecreationOtherMinimumRecommendedAge;
	minimumTemperature?: SportRecreationOtherMinimumTemperature;
	modelNumber?: string;
	msrp?: number;
	pattern?: string[];
	pieceCount?: number;
	powerType?: string;
	productSecondaryImageURL?: string[];
	prop65WarningText: string;
	recommendedLocations?: string[];
	recommendedUses?: string[];
	rValue?: number;
	season?: string[];
	seatingCapacity?: number;
	shaftLength?: string;
	shaftMaterial?: string[];
	shape?: string;
	shoeSize?: string;
	shortDescription: string;
	size?: string;
	sleepingBagSize?: string;
	smallPartsWarnings: SmallPartsWarningCode[];
	soccerBallSize?: string;
	sport?: string[];
	sportsLeague?: string[];
	sportsTeam?: string[];
	strideLength?: number;
	swatchImages?: SportRecreationOtherSwatchImage[];
	tentType?: string;
	tireDiameter?: SportRecreationOtherTireDiameter;
	variantAttributeNames?: SportRecreationOtherVariantAttributeName[];
	variantGroupId?: string;
	velocity?: Velocity;
	warrantyText?: string;
	warrantyURL?: string;
	wirelessTechnologies?: string[];
}

export enum AirGunPowerType {
	C02 = 'C02',
	GasPiston = 'Gas Piston',
	PrechargedPneumatic = 'Precharged Pneumatic',
	PumpAction = 'Pump Action',
	Spring = 'Spring',
}

export interface SportRecreationOtherAdditionalProductAttribute {
	productAttributeName: string;
	productAttributeValue: string;
}

export interface SportRecreationOtherAssembledProductHeight {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface SportRecreationOtherAssembledProductLength {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface SportRecreationOtherAssembledProductWeight {
	measure?: number;
	unit?: AssembledProductWeightUnit;
}

export interface SportRecreationOtherAssembledProductWidth {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface SportRecreationOtherFabricContent {
	materialName?: string;
	materialPercentage?: number;
}

export interface SportRecreationOtherHorsepower {
	measure?: number;
	unit?: HorsepowerUnit;
}

export enum InsulationType {
	Down = 'Down',
	Synthetic = 'Synthetic',
}

export interface SportRecreationOtherMaximumRecommendedAge {
	measure?: number;
	unit?: MaximumRecommendedAgeUnit;
}

export interface SportRecreationOtherMaximumWeight {
	measure?: number;
	unit?: PurpleUnit;
}

export interface SportRecreationOtherMinimumRecommendedAge {
	measure?: number;
	unit?: MaximumRecommendedAgeUnit;
}

export interface SportRecreationOtherMinimumTemperature {
	measure?: number;
	unit?: MaximumTemperatureUnit;
}

export interface SportRecreationOtherSwatchImage {
	swatchImageUrl?: string;
	swatchVariantAttribute?: SportRecreationOtherVariantAttributeName;
}

export enum SportRecreationOtherVariantAttributeName {
	AssembledProductWeight = 'assembledProductWeight',
	Capacity = 'capacity',
	ClothingSize = 'clothingSize',
	Color = 'color',
	CompatibleDevices = 'compatibleDevices',
	Count = 'count',
	CountPerPack = 'countPerPack',
	Dexterity = 'dexterity',
	GolfClubShaftFlex = 'golfClubShaftFlex',
	GolfClubShaftType = 'golfClubShaftType',
	Loft = 'loft',
	Material = 'material',
	MinimumTemperature = 'minimumTemperature',
	ShaftLength = 'shaftLength',
	ShaftMaterial = 'shaftMaterial',
	Shape = 'shape',
	ShoeSize = 'shoeSize',
	Size = 'size',
	SportsLeague = 'sportsLeague',
	SportsTeam = 'sportsTeam',
}

export interface SportRecreationOtherTireDiameter {
	measure?: number;
	unit?: ScreenSizeUnit;
}

export interface Velocity {
	measure?: number;
	unit?: VelocityUnit;
}

export enum VelocityUnit {
	FtS = 'ft/s',
}

export interface Storage {
	additionalProductAttributes?: StorageAdditionalProductAttribute[];
	assembledProductHeight?: StorageAssembledProductHeight;
	assembledProductLength?: StorageAssembledProductLength;
	assembledProductWeight?: StorageAssembledProductWeight;
	assembledProductWidth?: StorageAssembledProductWidth;
	assemblyInstructions?: string;
	capacity?: string;
	collection?: string;
	color?: string[];
	colorCategory?: ColorCategory[];
	compositeWoodCertificationCode: CompositeWoodCertificationCode;
	count?: string;
	countPerPack?: number;
	drawerDimensions?: string;
	drawerPosition?: string;
	fabricCareInstructions?: string[];
	fabricContent?: StorageFabricContent[];
	features?: string[];
	finish?: string;
	globalBrandLicense?: string[];
	inflexKitComponent?: MustShipAlone;
	isAssemblyRequired?: MustShipAlone;
	isFoldable?: MustShipAlone;
	isIndustrial?: MustShipAlone;
	isPortable?: MustShipAlone;
	isPrimaryVariant?: MustShipAlone;
	isRetractable?: MustShipAlone;
	keyFeatures?: string[];
	mainImageUrl: string;
	manufacturer: string;
	manufacturerPartNumber?: string;
	material?: string[];
	maximumWeight?: StorageMaximumWeight;
	minimumWeight?: StorageMinimumWeight;
	modelNumber?: string;
	msrp?: number;
	numberOfDrawers?: number;
	numberOfShelves?: number;
	pattern?: string[];
	pieceCount?: number;
	productSecondaryImageURL?: string[];
	prop65WarningText: string;
	recommendedLocations?: string[];
	recommendedRooms?: string[];
	recommendedUses?: string[];
	shape?: string;
	shelfDepth?: ShelfDepth;
	shelfStyle?: string;
	shortDescription: string;
	size?: string;
	swatchImages?: StorageSwatchImage[];
	systemOfMeasurement?: string;
	variantAttributeNames?: StorageVariantAttributeName[];
	variantGroupId?: string;
	warrantyText?: string;
	warrantyURL?: string;
}

export interface StorageAdditionalProductAttribute {
	productAttributeName: string;
	productAttributeValue: string;
}

export interface StorageAssembledProductHeight {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface StorageAssembledProductLength {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface StorageAssembledProductWeight {
	measure?: number;
	unit?: AssembledProductWeightUnit;
}

export interface StorageAssembledProductWidth {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface StorageFabricContent {
	materialName?: string;
	materialPercentage?: number;
}

export interface StorageMaximumWeight {
	measure?: number;
	unit?: PurpleUnit;
}

export interface StorageMinimumWeight {
	measure?: number;
	unit?: AssembledProductWeightUnit;
}

export interface ShelfDepth {
	measure?: number;
	unit?: ScreenSizeUnit;
}

export interface StorageSwatchImage {
	swatchImageUrl?: string;
	swatchVariantAttribute?: StorageVariantAttributeName;
}

export enum StorageVariantAttributeName {
	Capacity = 'capacity',
	Color = 'color',
	Count = 'count',
	CountPerPack = 'countPerPack',
	Finish = 'finish',
	Shape = 'shape',
	Size = 'size',
}

export interface TVsVideoDisplays {
	additionalProductAttributes?: TVsVideoDisplaysAdditionalProductAttribute[];
	aspectRatio?: string;
	assembledProductHeight?: TVsVideoDisplaysAssembledProductHeight;
	assembledProductLength?: TVsVideoDisplaysAssembledProductLength;
	assembledProductWeight?: TVsVideoDisplaysAssembledProductWeight;
	assembledProductWidth?: TVsVideoDisplaysAssembledProductWidth;
	audioFeatures?: string[];
	audioPowerOutput?: string;
	backlightType?: string;
	color?: string[];
	colorCategory?: ColorCategory[];
	configuration?: string;
	connections?: string[];
	count?: string;
	countPerPack?: number;
	displayTechnology?: string;
	energyGuideLabel?: string;
	features?: string[];
	hasIntegratedSpeakers?: MustShipAlone;
	hasTouchscreen?: MustShipAlone;
	inputsAndOutputs?: TVsVideoDisplaysInputsAndOutput[];
	isEnergyStarCertified?: MustShipAlone;
	isPrimaryVariant?: MustShipAlone;
	isSmart?: MustShipAlone;
	keyFeatures?: string[];
	mainImageUrl: string;
	manufacturer: string;
	manufacturerPartNumber?: string;
	maximumContrastRatio?: string;
	memoryCardType?: string[];
	modelNumber?: string;
	mountingPattern?: string;
	msrp?: number;
	nativeResolution?: string;
	peakAudioPowerCapacity?: TVsVideoDisplaysPeakAudioPowerCapacity;
	productSecondaryImageURL?: string[];
	prop65WarningText: string;
	refreshRate?: RefreshRate;
	resolution?: string;
	responseTime?: TVsVideoDisplaysResponseTime;
	screenSize?: TVsVideoDisplaysScreenSize;
	shortDescription: string;
	size?: string;
	streamingServices?: string;
	swatchImages?: TVsVideoDisplaysSwatchImage[];
	televisionType?: string[];
	variantAttributeNames?: TVsVideoDisplaysVariantAttributeName[];
	variantGroupId?: string;
	warrantyText?: string;
	warrantyURL?: string;
	wirelessTechnologies?: string[];
}

export interface TVsVideoDisplaysAdditionalProductAttribute {
	productAttributeName: string;
	productAttributeValue: string;
}

export interface TVsVideoDisplaysAssembledProductHeight {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface TVsVideoDisplaysAssembledProductLength {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface TVsVideoDisplaysAssembledProductWeight {
	measure?: number;
	unit?: AssembledProductWeightUnit;
}

export interface TVsVideoDisplaysAssembledProductWidth {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface TVsVideoDisplaysInputsAndOutput {
	inputOutputQuantity?: number;
	inputOutputType?: string;
}

export interface TVsVideoDisplaysPeakAudioPowerCapacity {
	measure?: number;
	unit?: WattsUnit;
}

export interface RefreshRate {
	measure?: number;
	unit?: RefreshRateUnit;
}

export enum RefreshRateUnit {
	Hz = 'Hz',
}

export interface TVsVideoDisplaysResponseTime {
	measure?: number;
	unit?: TentacledUnit;
}

export enum TentacledUnit {
	MS = 'ms',
}

export interface TVsVideoDisplaysScreenSize {
	measure?: number;
	unit?: ScreenSizeUnit;
}

export interface TVsVideoDisplaysSwatchImage {
	swatchImageUrl?: string;
	swatchVariantAttribute?: SwatchVariantAttribute1;
}

export enum SwatchVariantAttribute1 {
	Color = 'color',
	Configuration = 'configuration',
	Count = 'count',
	CountPerPack = 'countPerPack',
	Edition = 'edition',
	HardDriveCapacity = 'hardDriveCapacity',
	MountType = 'mountType',
	Platform = 'platform',
	RAMMemory = 'ramMemory',
	Resolution = 'resolution',
	ScreenSize = 'screenSize',
	Size = 'size',
}

export enum TVsVideoDisplaysVariantAttributeName {
	Color = 'color',
	Configuration = 'configuration',
	Count = 'count',
	CountPerPack = 'countPerPack',
	Resolution = 'resolution',
	ScreenSize = 'screenSize',
	Size = 'size',
}

export interface Tools {
	accessoriesIncluded?: string[];
	additionalProductAttributes?: ToolsAdditionalProductAttribute[];
	airInlet?: AirInlet;
	amps?: ToolsAmps;
	arborDiameter?: ArborDiameter;
	assembledProductHeight?: ToolsAssembledProductHeight;
	assembledProductLength?: ToolsAssembledProductLength;
	assembledProductWeight?: ToolsAssembledProductWeight;
	assembledProductWidth?: ToolsAssembledProductWidth;
	averageAirConsumptionAt90PSI?: AverageAirConsumptionAt90PSI;
	batteryCapacity?: BatteryCapacity;
	bladeDiameter?: BladeDiameter;
	bladeLength?: BladeLength;
	bladeShank?: string;
	bladeWidth?: ToolsBladeWidth;
	blowsPerMinute?: string;
	cfmAt40Psi?: CfmAt40Psi;
	cfmAt90Psi?: CfmAt90Psi;
	chuckSize?: ChuckSize;
	chuckType?: string;
	cleaningCareAndMaintenance?: string;
	colletSize?: ColletSize;
	color?: string[];
	colorCategory?: ColorCategory[];
	cordLength?: ToolsCordLength;
	count?: string;
	countPerPack?: number;
	decibelRating?: ToolsDecibelRating;
	discSize?: DiscSize;
	engineDisplacement?: ToolsEngineDisplacement;
	features?: string[];
	finish?: string;
	fuelType?: string;
	globalBrandLicense?: string[];
	gritSize?: string;
	handing?: string;
	horsepower?: ToolsHorsepower;
	impactEnergy?: ImpactEnergy;
	inflexKitComponent?: MustShipAlone;
	isFireResistant?: MustShipAlone;
	isIndustrial?: MustShipAlone;
	isPrimaryVariant?: MustShipAlone;
	isWaterproof?: MustShipAlone;
	keyFeatures?: string[];
	lightBulbType?: string;
	loadCapacity?: ToolsLoadCapacity;
	mainImageUrl: string;
	manufacturer: string;
	manufacturerPartNumber?: string;
	material?: string[];
	maximumAirPressure?: MaximumAirPressure;
	maximumJawOpening?: MaximumJawOpening;
	maximumWattsOut?: MaximumWattsOut;
	modelNumber?: string;
	msrp?: number;
	noLoadSpeed?: NoLoadSpeed;
	numberOfBlades?: number;
	numberOfPoints?: number;
	numberOfSteps?: number;
	pieceCount?: number;
	powerType?: string;
	productSecondaryImageURL?: string[];
	prop65WarningText: string;
	recommendedUses?: string[];
	sandingBeltSize?: string;
	sandingSpeed?: SandingSpeed;
	shankSize?: ShankSize;
	shape?: string;
	shortDescription: string;
	size?: string;
	socketDepth?: string;
	spindleThread?: string;
	squareDriveSize?: string;
	strokeLength?: StrokeLength;
	strokesPerMinute?: string;
	swatchImages?: ToolsSwatchImage[];
	tankConfiguration?: string;
	teethPerInch?: number;
	torque?: string;
	variantAttributeNames?: ToolsVariantAttributeName[];
	variantGroupId?: string;
	volts?: ToolsVolt[];
	volumeCapacity?: ToolsVolumeCapacity;
	warrantyText?: string;
	warrantyURL?: string;
}

export interface ToolsAdditionalProductAttribute {
	productAttributeName: string;
	productAttributeValue: string;
}

export interface AirInlet {
	measure?: number;
	unit?: ScreenSizeUnit;
}

export interface ToolsAmps {
	measure?: number;
	unit?: AmpsUnit;
}

export interface ArborDiameter {
	measure?: string;
	unit?: HeelHeightUnit;
}

export interface ToolsAssembledProductHeight {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface ToolsAssembledProductLength {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface ToolsAssembledProductWeight {
	measure?: number;
	unit?: AssembledProductWeightUnit;
}

export interface ToolsAssembledProductWidth {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface AverageAirConsumptionAt90PSI {
	measure?: number;
	unit?: AverageAirConsumptionAt90PSIUnit;
}

export enum AverageAirConsumptionAt90PSIUnit {
	Cfm = 'CFM',
}

export interface BatteryCapacity {
	measure?: number;
	unit?: BatteryCapacityUnit;
}

export enum BatteryCapacityUnit {
	Ah = 'Ah',
	MAh = 'mAh',
}

export interface BladeDiameter {
	measure?: number;
	unit?: ScreenSizeUnit;
}

export interface BladeLength {
	measure?: number;
	unit?: ScreenSizeUnit;
}

export interface ToolsBladeWidth {
	measure?: number;
	unit?: CarSeatBaseDepthUnit;
}

export interface CfmAt40Psi {
	measure?: number;
	unit?: AverageAirConsumptionAt90PSIUnit;
}

export interface CfmAt90Psi {
	measure?: number;
	unit?: AverageAirConsumptionAt90PSIUnit;
}

export interface ChuckSize {
	measure?: string;
	unit?: ScreenSizeUnit;
}

export interface ColletSize {
	measure?: string;
	unit?: HeelHeightUnit;
}

export interface ToolsCordLength {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface ToolsDecibelRating {
	measure?: number;
	unit?: DecibelRatingUnit;
}

export interface DiscSize {
	measure?: number;
	unit?: ScreenSizeUnit;
}

export interface ToolsEngineDisplacement {
	measure?: number;
	unit?: EngineDisplacementUnit;
}

export interface ToolsHorsepower {
	measure?: number;
	unit?: HorsepowerUnit;
}

export interface ImpactEnergy {
	measure?: number;
	unit?: ImpactEnergyUnit;
}

export enum ImpactEnergyUnit {
	J = 'J',
}

export interface ToolsLoadCapacity {
	measure?: number;
	unit?: SnowLoadRatingUnit;
}

export interface MaximumAirPressure {
	measure?: number;
	unit?: WorkingPressureUnit;
}

export interface MaximumJawOpening {
	measure?: number;
	unit?: ScreenSizeUnit;
}

export interface MaximumWattsOut {
	measure?: number;
	unit?: MaximumWattsOutUnit;
}

export enum MaximumWattsOutUnit {
	Mwo = 'MWO',
}

export interface NoLoadSpeed {
	measure?: number;
	unit?: NoLoadSpeedUnit;
}

export enum NoLoadSpeedUnit {
	RPM = 'rpm',
}

export interface SandingSpeed {
	measure?: number;
	unit?: SandingSpeedUnit;
}

export enum SandingSpeedUnit {
	Opm = 'OPM',
	Sfpm = 'SFPM',
}

export interface ShankSize {
	measure?: number;
	unit?: ScreenSizeUnit;
}

export interface StrokeLength {
	measure?: number;
	unit?: ScreenSizeUnit;
}

export interface ToolsSwatchImage {
	swatchImageUrl?: string;
	swatchVariantAttribute?: ToolsVariantAttributeName;
}

export enum ToolsVariantAttributeName {
	Amps = 'amps',
	AssembledProductHeight = 'assembledProductHeight',
	AssembledProductLength = 'assembledProductLength',
	AssembledProductWidth = 'assembledProductWidth',
	Color = 'color',
	Count = 'count',
	CountPerPack = 'countPerPack',
	Finish = 'finish',
	LightBulbType = 'lightBulbType',
	Shape = 'shape',
	Size = 'size',
	Volts = 'volts',
	Watts = 'watts',
}

export interface ToolsVolt {
	measure?: number;
	unit?: VoltUnit;
}

export interface ToolsVolumeCapacity {
	measure?: number;
	unit?: VolumeCapacityUnit;
}

export interface ToolsHardwareOther {
	accessoriesIncluded?: string[];
	additionalProductAttributes?: ToolsHardwareOtherAdditionalProductAttribute[];
	assembledProductHeight?: ToolsHardwareOtherAssembledProductHeight;
	assembledProductLength?: ToolsHardwareOtherAssembledProductLength;
	assembledProductWeight?: ToolsHardwareOtherAssembledProductWeight;
	assembledProductWidth?: ToolsHardwareOtherAssembledProductWidth;
	cleaningCareAndMaintenance?: string;
	color?: string[];
	colorCategory?: ColorCategory[];
	count?: string;
	countPerPack?: number;
	features?: string[];
	finish?: string;
	globalBrandLicense?: string[];
	isFireResistant?: MustShipAlone;
	isPrimaryVariant?: MustShipAlone;
	isWaterproof?: MustShipAlone;
	keyFeatures?: string[];
	mainImageUrl: string;
	manufacturer: string;
	manufacturerPartNumber?: string;
	material?: string[];
	modelNumber?: string;
	msrp?: number;
	pieceCount?: number;
	productSecondaryImageURL?: string[];
	prop65WarningText: string;
	recommendedUses?: string[];
	shape?: string;
	shortDescription: string;
	size?: string;
	swatchImages?: ToolsHardwareOtherSwatchImage[];
	variantAttributeNames?: ToolsHardwareOtherVariantAttributeName[];
	variantGroupId?: string;
	warrantyText?: string;
	warrantyURL?: string;
}

export interface ToolsHardwareOtherAdditionalProductAttribute {
	productAttributeName: string;
	productAttributeValue: string;
}

export interface ToolsHardwareOtherAssembledProductHeight {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface ToolsHardwareOtherAssembledProductLength {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface ToolsHardwareOtherAssembledProductWeight {
	measure?: number;
	unit?: AssembledProductWeightUnit;
}

export interface ToolsHardwareOtherAssembledProductWidth {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface ToolsHardwareOtherSwatchImage {
	swatchImageUrl?: string;
	swatchVariantAttribute?: SwatchVariantAttribute2;
}

export enum SwatchVariantAttribute2 {
	AssembledProductHeight = 'assembledProductHeight',
	AssembledProductLength = 'assembledProductLength',
	AssembledProductWidth = 'assembledProductWidth',
	Color = 'color',
	Count = 'count',
	CountPerPack = 'countPerPack',
	Shape = 'shape',
	Size = 'size',
}

export enum ToolsHardwareOtherVariantAttributeName {
	AssembledProductHeight = 'assembledProductHeight',
	AssembledProductLength = 'assembledProductLength',
	AssembledProductWidth = 'assembledProductWidth',
	Color = 'color',
	Count = 'count',
	CountPerPack = 'countPerPack',
	Finish = 'finish',
	Shape = 'shape',
	Size = 'size',
}

export interface Toys {
	activity?: string[];
	additionalProductAttributes?: ToysAdditionalProductAttribute[];
	ageGroup?: ArtCraftAgeGroup[];
	animalType?: string;
	assembledProductHeight?: ToysAssembledProductHeight;
	assembledProductLength?: ToysAssembledProductLength;
	assembledProductWeight?: ToysAssembledProductWeight;
	assembledProductWidth?: ToysAssembledProductWidth;
	assemblyInstructions?: string;
	athlete?: string[];
	awardsWon?: string[];
	capacity?: string;
	character?: string[];
	color?: string[];
	colorCategory?: ColorCategory[];
	compositeWoodCertificationCode: CompositeWoodCertificationCode;
	count?: string;
	countPerPack?: number;
	countryOfOriginTextiles: CountryOfOriginTextiles;
	displayTechnology?: string;
	educationalFocus?: string[];
	fabricCareInstructions?: string[];
	fabricContent?: ToysFabricContent[];
	features?: string[];
	fillMaterial?: string[];
	finish?: string;
	flavor?: string;
	gender?: ArtCraftGender;
	globalBrandLicense?: string[];
	hairColorCategory?: HairColorCategory;
	inflexKitComponent?: MustShipAlone;
	ingredients?: string;
	isAssemblyRequired?: MustShipAlone;
	isInflatable?: MustShipAlone;
	isPowered?: MustShipAlone;
	isPrimaryVariant?: MustShipAlone;
	isTravelSize?: MustShipAlone;
	keyFeatures?: string[];
	mainImageUrl: string;
	makesNoise?: MustShipAlone;
	manufacturer: string;
	manufacturerPartNumber?: string;
	material?: string[];
	maximumRecommendedAge?: ToysMaximumRecommendedAge;
	maximumSpeed?: MaximumSpeed;
	maximumWeight?: ToysMaximumWeight;
	minimumRecommendedAge?: ToysMinimumRecommendedAge;
	minimumWeight?: ToysMinimumWeight;
	modelNumber?: string;
	msrp?: number;
	numberOfPlayers?: NumberOfPlayers;
	occasion?: string[];
	pieceCount?: number;
	powerType?: string;
	productSecondaryImageURL?: string[];
	prop65WarningText: string;
	screenSize?: ToysScreenSize;
	seatingCapacity?: number;
	shape?: string;
	shortDescription: string;
	size?: string;
	skillLevel?: string;
	skinTone?: string;
	smallPartsWarnings: SmallPartsWarningCode[];
	sport?: string[];
	sportsLeague?: string[];
	sportsTeam?: string[];
	swatchImages?: ToysSwatchImage[];
	targetAudience?: string[];
	theme?: string[];
	variantAttributeNames?: ToysVariantAttributeName[];
	variantGroupId?: string;
	vehicleType?: string;
	warrantyText?: string;
	warrantyURL?: string;
}

export interface ToysAdditionalProductAttribute {
	productAttributeName: string;
	productAttributeValue: string;
}

export interface ToysAssembledProductHeight {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface ToysAssembledProductLength {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface ToysAssembledProductWeight {
	measure?: number;
	unit?: AssembledProductWeightUnit;
}

export interface ToysAssembledProductWidth {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface ToysFabricContent {
	materialName?: string;
	materialPercentage?: number;
}

export interface ToysMaximumRecommendedAge {
	measure?: number;
	unit?: MaximumRecommendedAgeUnit;
}

export interface MaximumSpeed {
	measure?: number;
	unit?: MaximumSpeedUnit;
}

export enum MaximumSpeedUnit {
	Mph = 'mph',
}

export interface ToysMaximumWeight {
	measure?: number;
	unit?: PurpleUnit;
}

export interface ToysMinimumRecommendedAge {
	measure?: number;
	unit?: MaximumRecommendedAgeUnit;
}

export interface ToysMinimumWeight {
	measure?: number;
	unit?: AssembledProductWeightUnit;
}

export interface NumberOfPlayers {
	maximumNumberOfPlayers?: number;
	minimumNumberOfPlayers?: number;
}

export interface ToysScreenSize {
	measure?: number;
	unit?: ScreenSizeUnit;
}

export interface ToysSwatchImage {
	swatchImageUrl?: string;
	swatchVariantAttribute?: ToysVariantAttributeName;
}

export enum ToysVariantAttributeName {
	Capacity = 'capacity',
	Character = 'character',
	Color = 'color',
	Count = 'count',
	CountPerPack = 'countPerPack',
	Flavor = 'flavor',
	Shape = 'shape',
	Size = 'size',
	SportsTeam = 'sportsTeam',
}

export interface VehicleOther {
	aaiaBrandID?: string[];
	additionalProductAttributes?: VehicleOtherAdditionalProductAttribute[];
	assembledProductHeight?: VehicleOtherAssembledProductHeight;
	assembledProductLength?: VehicleOtherAssembledProductLength;
	assembledProductWeight?: VehicleOtherAssembledProductWeight;
	assembledProductWidth?: VehicleOtherAssembledProductWidth;
	athlete?: string[];
	autographedBy?: string;
	color?: string[];
	count?: string;
	countPerPack?: number;
	countryOfOriginTextiles: CountryOfOriginTextiles;
	fabricContent?: VehicleOtherFabricContent[];
	features?: string[];
	finish?: string;
	inflexKitComponent?: MustShipAlone;
	isPrimaryVariant?: MustShipAlone;
	keyFeatures?: string[];
	mainImageUrl: string;
	manufacturer: string;
	manufacturerPartNumber?: string;
	modelNumber?: string;
	msrp?: number;
	partTerminologyID?: string[];
	pieceCount?: number;
	productSecondaryImageURL?: string[];
	prop65WarningText: string;
	shape?: string;
	shortDescription: string;
	size?: string;
	sportsLeague?: string[];
	sportsTeam?: string[];
	swatchImages?: VehicleOtherSwatchImage[];
	variantAttributeNames?: VehicleOtherVariantAttributeName[];
	variantGroupId?: string;
	vehicleType?: string;
	warrantyText?: string;
	warrantyURL?: string;
}

export interface VehicleOtherAdditionalProductAttribute {
	productAttributeName: string;
	productAttributeValue: string;
}

export interface VehicleOtherAssembledProductHeight {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface VehicleOtherAssembledProductLength {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface VehicleOtherAssembledProductWeight {
	measure?: number;
	unit?: AssembledProductWeightUnit;
}

export interface VehicleOtherAssembledProductWidth {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface VehicleOtherFabricContent {
	materialName?: string;
	materialPercentage?: number;
}

export interface VehicleOtherSwatchImage {
	swatchImageUrl?: string;
	swatchVariantAttribute?: SwatchVariantAttribute3;
}

export enum SwatchVariantAttribute3 {
	Color = 'color',
	Count = 'count',
	Diameter = 'diameter',
	Size = 'size',
}

export enum VehicleOtherVariantAttributeName {
	Color = 'color',
	Count = 'count',
	Diameter = 'diameter',
	Finish = 'finish',
	Shape = 'shape',
	Size = 'size',
}

export interface VehiclePartsAccessories {
	aaiaBrandID?: string[];
	additionalProductAttributes?: VehiclePartsAccessoriesAdditionalProductAttribute[];
	amps?: VehiclePartsAccessoriesAmps;
	assembledProductHeight?: VehiclePartsAccessoriesAssembledProductHeight;
	assembledProductLength?: VehiclePartsAccessoriesAssembledProductLength;
	assembledProductWeight?: VehiclePartsAccessoriesAssembledProductWeight;
	assembledProductWidth?: VehiclePartsAccessoriesAssembledProductWidth;
	athlete?: string[];
	audioPowerOutput?: string;
	autographedBy?: string;
	automotivePartsDivision?: AutomotivePartsDivision[];
	beamAngle?: VehiclePartsAccessoriesBeamAngle;
	beamSpread?: VehiclePartsAccessoriesBeamSpread;
	breakingStrength?: BreakingStrength;
	cableLength?: VehiclePartsAccessoriesCableLength;
	candlePower?: string;
	carSpeakerSizeClass?: string[];
	carSpeakerType?: string[];
	chainLength?: VehiclePartsAccessoriesChainLength;
	coldCrankAmp?: number;
	color?: string[];
	compatibleBrands?: string[];
	compatibleCars?: string;
	compatibleDevices?: string[];
	compositeWoodCertificationCode: CompositeWoodCertificationCode;
	connections?: string[];
	count?: string;
	countPerPack?: number;
	dinSize?: string[];
	displayResolution?: string[];
	displayTechnology?: string;
	dropDistance?: string;
	fabricCareInstructions?: string[];
	fabricContent?: VehiclePartsAccessoriesFabricContent[];
	fastenerHeadType?: string;
	features?: string[];
	fillMaterial?: string[];
	filterLife?: string;
	finish?: string;
	flashPoint?: string;
	fluidOunces?: VehiclePartsAccessoriesFluidOunces;
	form?: string;
	fuelType?: string;
	hitchClass?: string;
	horsepower?: VehiclePartsAccessoriesHorsepower;
	impedance?: VehiclePartsAccessoriesImpedance;
	inDashSystem?: MustShipAlone;
	interfaceType?: string[];
	isLockable?: MustShipAlone;
	isPowered?: MustShipAlone;
	isPrimaryVariant?: MustShipAlone;
	isReusable?: MustShipAlone;
	keyFeatures?: string[];
	lightBulbType?: string;
	loadCapacity?: VehiclePartsAccessoriesLoadCapacity;
	mainImageUrl: string;
	manufacturer: string;
	manufacturerPartNumber?: string;
	maximumMotorSpeed?: MaximumMotorSpeed;
	maximumTemperature?: VehiclePartsAccessoriesMaximumTemperature;
	modelNumber?: string;
	motorOilViscosity?: string;
	msrp?: number;
	numberOfChannels?: string;
	numberOfOutlets?: number;
	partTerminologyID?: string[];
	pieceCount?: number;
	powerType?: string;
	productSecondaryImageURL?: string[];
	prop65WarningText: string;
	receiverCompatibility?: ReceiverCompatibility;
	reserveCapacity?: ReserveCapacity;
	saeDotCompliant?: MustShipAlone;
	shackleClearance?: ShackleClearance;
	shackleDiameter?: ShackleDiameter;
	shackleLength?: ShackleLength;
	shankLength?: ShankLength;
	shape?: string;
	shearStrength?: ShearStrength;
	shortDescription: string;
	size?: string;
	sportsLeague?: string[];
	sportsTeam?: string[];
	swatchImages?: VehiclePartsAccessoriesSwatchImage[];
	unitsPerConsumerUnit?: number;
	variantAttributeNames?: VehiclePartsAccessoriesVariantAttributeName[];
	variantGroupId?: string;
	vehicleMake?: string;
	vehicleModel?: string;
	vehicleType?: string;
	vehicleYear?: number;
	warrantyText?: string;
	warrantyURL?: string;
}

export interface VehiclePartsAccessoriesAdditionalProductAttribute {
	productAttributeName: string;
	productAttributeValue: string;
}

export interface VehiclePartsAccessoriesAmps {
	measure?: number;
	unit?: AmpsUnit;
}

export interface VehiclePartsAccessoriesAssembledProductHeight {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface VehiclePartsAccessoriesAssembledProductLength {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface VehiclePartsAccessoriesAssembledProductWeight {
	measure?: number;
	unit?: AssembledProductWeightUnit;
}

export interface VehiclePartsAccessoriesAssembledProductWidth {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export enum AutomotivePartsDivision {
	DirectReplacement = 'direct replacement',
	Motorcycle = 'motorcycle',
	OEMReplacement = 'oem replacement',
	PerformancePart = 'performance part',
}

export interface VehiclePartsAccessoriesBeamAngle {
	measure?: number;
	unit?: BeamAngleUnit;
}

export interface VehiclePartsAccessoriesBeamSpread {
	measure?: number;
	unit?: BeamSpreadUnit;
}

export interface BreakingStrength {
	measure?: number;
	unit?: MaximumLoadWeightUnit;
}

export interface VehiclePartsAccessoriesCableLength {
	measure?: number;
	unit?: CableLengthUnit;
}

export interface VehiclePartsAccessoriesChainLength {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface VehiclePartsAccessoriesFabricContent {
	materialName?: string;
	materialPercentage?: number;
}

export interface VehiclePartsAccessoriesFluidOunces {
	measure?: number;
	unit?: FluidOuncesSupplying100CaloriesUnit;
}

export interface VehiclePartsAccessoriesHorsepower {
	measure?: number;
	unit?: HorsepowerUnit;
}

export interface VehiclePartsAccessoriesImpedance {
	measure?: string;
	unit?: ImpedanceUnit;
}

export interface VehiclePartsAccessoriesLoadCapacity {
	measure?: number;
	unit?: SnowLoadRatingUnit;
}

export interface MaximumMotorSpeed {
	measure?: number;
	unit?: NoLoadSpeedUnit;
}

export interface VehiclePartsAccessoriesMaximumTemperature {
	measure?: number;
	unit?: MaximumTemperatureUnit;
}

export interface ReceiverCompatibility {
	measure?: number;
	unit?: ScreenSizeUnit;
}

export interface ReserveCapacity {
	measure?: number;
	unit?: DurationUnit;
}

export interface ShackleClearance {
	measure?: number;
	unit?: ScreenSizeUnit;
}

export interface ShackleDiameter {
	measure?: number;
	unit?: ScreenSizeUnit;
}

export interface ShackleLength {
	measure?: number;
	unit?: ScreenSizeUnit;
}

export interface ShankLength {
	measure?: number;
	unit?: ScreenSizeUnit;
}

export interface ShearStrength {
	measure?: number;
	unit?: MaximumLoadWeightUnit;
}

export interface VehiclePartsAccessoriesSwatchImage {
	swatchImageUrl?: string;
	swatchVariantAttribute?: VehiclePartsAccessoriesVariantAttributeName;
}

export enum VehiclePartsAccessoriesVariantAttributeName {
	Color = 'color',
	Count = 'count',
	Diameter = 'diameter',
	Finish = 'finish',
	Shape = 'shape',
	Size = 'size',
	SportsTeam = 'sportsTeam',
	VehicleMake = 'vehicleMake',
	VehicleModel = 'vehicleModel',
	VehicleYear = 'vehicleYear',
}

export interface VideoGames {
	additionalProductAttributes?: VideoGamesAdditionalProductAttribute[];
	ageGroup?: ArtCraftAgeGroup[];
	athlete?: string[];
	autographedBy?: string;
	count?: string;
	countPerPack?: number;
	edition?: string;
	esrbRating: ESRBRating;
	features?: string[];
	globalBrandLicense?: string[];
	isDownloadableContentAvailable?: MustShipAlone;
	isOnlineMultiplayerAvailable?: MustShipAlone;
	isPrimaryVariant?: MustShipAlone;
	keyFeatures?: string[];
	mainImageUrl: string;
	manufacturer: string;
	manufacturerPartNumber?: string;
	modelNumber?: string;
	mountType?: string[];
	msrp?: number;
	numberOfChannels?: string;
	physicalMediaFormat?: VideoGamesPhysicalMediaFormat[];
	platform?: string;
	productSecondaryImageURL?: string[];
	prop65WarningText: string;
	ratingReason?: string;
	releaseDate?: Date;
	requiredPeripherals?: string;
	shortDescription: string;
	sport?: string[];
	sportsLeague?: string[];
	sportsTeam?: string[];
	swatchImages?: VideoGamesSwatchImage[];
	targetAudience?: string[];
	variantAttributeNames?: VideoGamesVariantAttributeName[];
	variantGroupId?: string;
	videoGameCollection?: string;
	videoGameGenre?: VideoGameGenre[];
}

export interface VideoGamesAdditionalProductAttribute {
	productAttributeName: string;
	productAttributeValue: string;
}

export enum ESRBRating {
	Adult = 'Adult',
	EarlyChildhood = 'Early Childhood',
	Everyone = 'Everyone',
	Everyone10 = 'Everyone 10+',
	Mature = 'Mature',
	Pending = 'Pending',
	Teen = 'Teen',
	Unrated = 'Unrated',
}

export enum VideoGamesPhysicalMediaFormat {
	BluRay = 'Blu-Ray',
	CD = 'CD',
	DVD = 'DVD',
	Digital = 'Digital',
	DigitalHD = 'Digital HD',
	GameCard = 'Game Card',
	MiniDVTape = 'miniDV Tape',
	PrintedMedia = 'Printed Media',
	The3DBluRay = '3D Blu-ray',
	The4KUltraHD = '4K Ultra HD',
	USBStick = 'USB stick',
}

export interface VideoGamesSwatchImage {
	swatchImageUrl?: string;
	swatchVariantAttribute?: VideoGamesVariantAttributeName;
}

export enum VideoGamesVariantAttributeName {
	Count = 'count',
	CountPerPack = 'countPerPack',
	Edition = 'edition',
	PhysicalMediaFormat = 'physicalMediaFormat',
	Platform = 'platform',
	SportsTeam = 'sportsTeam',
}

export enum VideoGameGenre {
	ActionAdventure = 'Action & Adventure',
	ActionRolePlayingGame = 'Action Role-playing Game',
	AdultVideoGame = 'Adult Video Game',
	Advergame = 'Advergame',
	ArtGame = 'Art Game',
	BoardGame = 'Board Game',
	CarSimulation = 'Car Simulation',
	CardGame = 'Card Game',
	CasualGame = 'Casual Game',
	ChristianGame = 'Christian Game',
	CitySimulation = 'City Simulation',
	ConstructionAndManagementSimulation = 'Construction and Management Simulation',
	EducationalGame = 'Educational Game',
	ElectronicSports = 'Electronic Sports',
	ExerciseGame = 'Exercise Game',
	FlightSimulation = 'Flight Simulation',
	HealthFitness = 'Health & Fitness',
	Horror = 'Horror',
	KidsFamily = 'Kids & Family',
	LifeSimulation = 'Life Simulation',
	MassivelyMultiplayerOnlineGame = 'Massively Multiplayer Online Game',
	MilitaryVehicleSimulation = 'Military Vehicle Simulation',
	MotionGame = 'Motion Game',
	MusicGame = 'Music Game',
	PartyGame = 'Party Game',
	ProgrammingGame = 'Programming Game',
	PuzzleGame = 'Puzzle Game',
	RacingGame = 'Racing Game',
	RealTimeStrategy = 'Real-time Strategy',
	RealTimeTactics = 'Real-time Tactics',
	RolePlaying = 'Role-playing',
	SandboxGame = 'Sandbox Game',
	SeriousGame = 'Serious Game',
	Simulation = 'Simulation',
	SportsGame = 'Sports Game',
	Survival = 'Survival',
	SurvivalHorror = 'Survival Horror',
	TacticalRolePlayingGame = 'Tactical Role-playing Game',
	TelevisionTieIn = 'Television Tie-in',
	TowerDefense = 'Tower Defense',
	TradingCardGame = 'Trading Card Game',
	TriviaGame = 'Trivia Game',
	TurnBasedStrategy = 'Turn-based Strategy',
	TurnBasedTactical = 'Turn-based Tactical',
	XGames = 'X Games',
}

export interface VideoProjectors {
	additionalProductAttributes?: VideoProjectorsAdditionalProductAttribute[];
	aspectRatio?: string;
	assembledProductHeight?: VideoProjectorsAssembledProductHeight;
	assembledProductLength?: VideoProjectorsAssembledProductLength;
	assembledProductWeight?: VideoProjectorsAssembledProductWeight;
	assembledProductWidth?: VideoProjectorsAssembledProductWidth;
	brightness?: VideoProjectorsBrightness;
	color?: string[];
	count?: string;
	countPerPack?: number;
	displayTechnology?: string;
	features?: string[];
	has3dCapabilities?: MustShipAlone;
	hasIntegratedSpeakers?: MustShipAlone;
	inputsAndOutputs?: VideoProjectorsInputsAndOutput[];
	isPrimaryVariant?: MustShipAlone;
	keyFeatures?: string[];
	lampLife?: LampLife;
	mainImageUrl: string;
	manufacturer: string;
	manufacturerPartNumber?: string;
	maximumContrastRatio?: string;
	modelNumber?: string;
	mountType?: string[];
	msrp?: number;
	nativeResolution?: string;
	productSecondaryImageURL?: string[];
	prop65WarningText: string;
	resolution?: string;
	screenSize?: VideoProjectorsScreenSize;
	shortDescription: string;
	size?: string;
	swatchImages?: VideoProjectorsSwatchImage[];
	throwRatio?: string;
	variantAttributeNames?: VideoProjectorsVariantAttributeName[];
	variantGroupId?: string;
	warrantyText?: string;
	warrantyURL?: string;
	wirelessTechnologies?: string[];
}

export interface VideoProjectorsAdditionalProductAttribute {
	productAttributeName: string;
	productAttributeValue: string;
}

export interface VideoProjectorsAssembledProductHeight {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface VideoProjectorsAssembledProductLength {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface VideoProjectorsAssembledProductWeight {
	measure?: number;
	unit?: AssembledProductWeightUnit;
}

export interface VideoProjectorsAssembledProductWidth {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface VideoProjectorsBrightness {
	measure?: number;
	unit?: BrightnessUnit;
}

export interface VideoProjectorsInputsAndOutput {
	inputOutputQuantity?: number;
	inputOutputType?: string;
}

export interface LampLife {
	measure?: number;
	unit?: StandbyTimeUnit;
}

export interface VideoProjectorsScreenSize {
	measure?: number;
	unit?: ScreenSizeUnit;
}

export interface VideoProjectorsSwatchImage {
	swatchImageUrl?: string;
	swatchVariantAttribute?: SwatchVariantAttribute4;
}

export enum SwatchVariantAttribute4 {
	Count = 'count',
	CountPerPack = 'countPerPack',
	MountType = 'mountType',
	Resolution = 'resolution',
	ScreenSize = 'screenSize',
	Size = 'size',
}

export enum VideoProjectorsVariantAttributeName {
	Color = 'color',
	Count = 'count',
	CountPerPack = 'countPerPack',
	MountType = 'mountType',
	Resolution = 'resolution',
	ScreenSize = 'screenSize',
	Size = 'size',
}

export interface Watches {
	accentStone?: AryStoneType[];
	activity?: string[];
	additionalProductAttributes?: WatchesAdditionalProductAttribute[];
	ageGroup?: ArtCraftAgeGroup[];
	bandWidth?: BandWidth;
	batteryLife?: WatchesBatteryLife;
	carats?: WatchesCarats;
	character?: string[];
	claspType?: ClaspType[];
	clockNumberType?: string;
	clockWatchFaceColor?: string;
	color?: string[];
	colorCategory?: ColorCategory[];
	count?: string;
	countPerPack?: number;
	features?: string[];
	gemstone?: AryStoneType;
	gemstoneShape?: PrimaryStoneShape;
	gender?: BabyClothingGender;
	isPrimaryVariant?: MustShipAlone;
	isWaterResistant?: MustShipAlone;
	keyFeatures?: string[];
	mainImageUrl: string;
	manufacturer: string;
	manufacturerPartNumber?: string;
	material?: string[];
	metal?: MetalType;
	metalPurity?: string;
	modelNumber?: string;
	msrp?: number;
	occasion?: string[];
	plating?: string;
	productSecondaryImageURL?: string[];
	prop65WarningText: string;
	seasonCode?: SeasonCode;
	seasonYear?: number;
	shortDescription: string;
	size?: string;
	smallPartsWarnings: SmallPartsWarningCode[];
	sportsLeague?: string[];
	sportsTeam?: string[];
	swatchImages?: WatchesSwatchImage[];
	theme?: string[];
	totalDiamondWeight?: WatchesTotalDiamondWeight;
	variantAttributeNames?: WatchesVariantAttributeName[];
	variantGroupId?: string;
	warrantyText?: string;
	warrantyURL?: string;
	watchBandColor?: string;
	watchBandLength?: WatchBandLength;
	watchBandMaterial?: WatchBandMaterial[];
	watchBezelMaterial?: string[];
	watchCaseMaterial?: WatchCaseMaterial;
	watchCaseShape?: WatchFaceShape;
	watchCaseSize?: WatchCaseSize;
	watchCaseThickness?: WatchCaseThickness;
	watchComplication?: string;
	watchCrystalMaterial?: WatchCrystalMaterial[];
	watchMovement?: WatchMovement;
	watchMovementType?: WatchMovementType[];
	watchStyle?: string[];
}

export interface WatchesAdditionalProductAttribute {
	productAttributeName: string;
	productAttributeValue: string;
}

export interface BandWidth {
	measure?: number;
	unit?: BootShaftCircumferenceUnit;
}

export interface WatchesBatteryLife {
	measure?: number;
	unit?: StandbyTimeUnit;
}

export interface WatchesCarats {
	measure?: number;
	unit?: CaratsUnit;
}

export interface WatchesSwatchImage {
	swatchImageUrl?: string;
	swatchVariantAttribute?: string;
}

export interface WatchesTotalDiamondWeight {
	measure?: number;
	unit?: CaratsUnit;
}

export enum WatchesVariantAttributeName {
	Color = 'color',
	Count = 'count',
	CountPerPack = 'countPerPack',
	Material = 'material',
	Plating = 'plating',
	SportsTeam = 'sportsTeam',
	WatchBandMaterial = 'watchBandMaterial',
	WatchStyle = 'watchStyle',
}

export interface WatchBandLength {
	measure?: number;
	unit?: BootShaftCircumferenceUnit;
}

export enum WatchBandMaterial {
	CarbonFiber = 'Carbon Fiber',
	Copper = 'Copper',
	Gold = 'Gold',
	GoldPlated = 'Gold-plated',
	Leather = 'Leather',
	Nylon = 'Nylon',
	Other = 'Other',
	Platinum = 'Platinum',
	Silicone = 'Silicone',
	SilverPlated = 'Silver-plated',
	StainlessSteel = 'Stainless Steel',
	SterlingSilver = 'Sterling Silver',
	Titanium = 'Titanium',
	Tungsten = 'Tungsten',
}

export enum WatchCaseMaterial {
	Aluminum = 'Aluminum',
	CarbonFiber = 'Carbon Fiber',
	Ceramic = 'Ceramic',
	GoldPlated = 'Gold-plated',
	Other = 'Other',
	Plastic = 'Plastic',
	Platinum = 'Platinum',
	Pvd = 'PVD',
	Rubber = 'Rubber',
	Silicone = 'Silicone',
	StainlessSteel = 'Stainless Steel',
	The14KGold = '14K Gold',
	The18KGold = '18K Gold',
	Titanium = 'Titanium',
}

export enum WatchFaceShape {
	Oval = 'Oval',
	Rectangle = 'Rectangle',
	Round = 'Round',
	Square = 'Square',
	Tonneau = 'Tonneau',
}

export interface WatchCaseSize {
	measure?: number;
	unit?: HeelHeightUnit;
}

export interface WatchCaseThickness {
	measure?: string;
	unit?: BootShaftCircumferenceUnit;
}

export enum WatchCrystalMaterial {
	Acrylic = 'Acrylic',
	Mineral = 'Mineral',
	Other = 'Other',
	Plastic = 'Plastic',
	Sapphire = 'Sapphire',
	SyntheticSapphire = 'Synthetic Sapphire',
}

export enum WatchMovement {
	Automatic = 'Automatic',
	Manual = 'Manual',
	Other = 'Other',
	Quartz = 'Quartz',
}

export enum WatchMovementType {
	AnalogQuartz = 'Analog Quartz',
	Automatic = 'Automatic',
	JapaneseQuartz = 'Japanese Quartz',
	Manual = 'Manual',
	Mechanical = 'Mechanical',
	SmartWatch = 'Smart Watch',
	SwissQuartz = 'Swiss Quartz',
}

export interface Watercraft {
	additionalProductAttributes?: WatercraftAdditionalProductAttribute[];
	airDraft?: AirDraft;
	assembledProductHeight?: WatercraftAssembledProductHeight;
	assembledProductLength?: WatercraftAssembledProductLength;
	assembledProductWeight?: WatercraftAssembledProductWeight;
	assembledProductWidth?: WatercraftAssembledProductWidth;
	athlete?: string[];
	averageFuelConsumption?: WatercraftAverageFuelConsumption;
	beam?: Beam;
	boreStroke?: string;
	color?: string[];
	compressionRatio?: string;
	coolingSystem?: string;
	draft?: Draft;
	dryWeight?: DryWeight;
	engineDisplacement?: WatercraftEngineDisplacement;
	engineLocation?: string;
	engineModel?: string;
	features?: string[];
	fuelCapacity?: WatercraftFuelCapacity;
	fuelRequirement?: string;
	fuelSystem?: string;
	hullLength?: HullLength;
	impellerPropeller?: string;
	inductionSystem?: string;
	isPrimaryVariant?: MustShipAlone;
	keyFeatures?: string[];
	mainImageUrl: string;
	manufacturer: string;
	manufacturerPartNumber?: string;
	maximumEnginePower?: WatercraftMaximumEnginePower;
	modelNumber?: string;
	msrp?: number;
	productSecondaryImageURL?: string[];
	prop65WarningText: string;
	propulsionSystem?: string;
	seatingCapacity?: number;
	shortDescription: string;
	size?: string;
	sportsLeague?: string[];
	submodel?: string;
	swatchImages?: WatercraftSwatchImage[];
	thrust?: Thrust;
	topSpeed?: WatercraftTopSpeed;
	variantAttributeNames?: WatercraftVariantAttributeName[];
	variantGroupId?: string;
	vehicleMake?: string;
	vehicleModel?: string;
	vehicleType?: string;
	vehicleYear?: number;
	warrantyText?: string;
	warrantyURL?: string;
	waterCapacity?: WaterCapacity;
}

export interface WatercraftAdditionalProductAttribute {
	productAttributeName: string;
	productAttributeValue: string;
}

export interface AirDraft {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface WatercraftAssembledProductHeight {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface WatercraftAssembledProductLength {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface WatercraftAssembledProductWeight {
	measure?: number;
	unit?: AssembledProductWeightUnit;
}

export interface WatercraftAssembledProductWidth {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface WatercraftAverageFuelConsumption {
	measure?: number;
	unit?: AverageFuelConsumptionUnit;
}

export interface Beam {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface Draft {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface DryWeight {
	measure?: number;
	unit?: MaximumLoadWeightUnit;
}

export interface WatercraftEngineDisplacement {
	measure?: number;
	unit?: EngineDisplacementUnit;
}

export interface WatercraftFuelCapacity {
	measure?: number;
	unit?: FuelCapacityUnit;
}

export interface HullLength {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface WatercraftMaximumEnginePower {
	measure?: number;
	unit?: MaximumEnginePowerUnit;
}

export interface WatercraftSwatchImage {
	swatchImageUrl?: string;
	swatchVariantAttribute?: SwatchVariantAttribute5;
}

export enum SwatchVariantAttribute5 {
	Color = 'color',
	EngineModel = 'engineModel',
	VehicleMake = 'vehicleMake',
	VehicleModel = 'vehicleModel',
	VehicleYear = 'vehicleYear',
}

export interface Thrust {
	measure?: number;
	unit?: MaximumLoadWeightUnit;
}

export interface WatercraftTopSpeed {
	measure?: number;
	unit?: TopSpeedUnit;
}

export enum WatercraftVariantAttributeName {
	Color = 'color',
	EngineModel = 'engineModel',
	Size = 'size',
	VehicleMake = 'vehicleMake',
	VehicleModel = 'vehicleModel',
	VehicleYear = 'vehicleYear',
}

export interface WaterCapacity {
	measure?: number;
	unit?: FuelCapacityUnit;
}

export interface WheelsWheelComponents {
	aaiaBrandID?: string[];
	additionalProductAttributes?: WheelsWheelComponentsAdditionalProductAttribute[];
	assembledProductHeight?: WheelsWheelComponentsAssembledProductHeight;
	assembledProductLength?: WheelsWheelComponentsAssembledProductLength;
	assembledProductWeight?: WheelsWheelComponentsAssembledProductWeight;
	assembledProductWidth?: WheelsWheelComponentsAssembledProductWidth;
	color?: string[];
	compatibleTireSize?: string;
	count?: string;
	countPerPack?: number;
	diameter?: WheelsWheelComponentsDiameter;
	features?: string[];
	finish?: string;
	isPrimaryVariant?: MustShipAlone;
	keyFeatures?: string[];
	mainImageUrl: string;
	manufacturer: string;
	manufacturerPartNumber?: string;
	material?: string[];
	modelNumber?: string;
	msrp?: number;
	numberOfSpokes?: number;
	partTerminologyID?: string[];
	productSecondaryImageURL?: string[];
	prop65WarningText: string;
	shortDescription: string;
	swatchImages?: WheelsWheelComponentsSwatchImage[];
	variantAttributeNames?: WheelsWheelComponentsVariantAttributeName[];
	variantGroupId?: string;
	vehicleRimSize?: string;
	warrantyText?: string;
	warrantyURL?: string;
}

export interface WheelsWheelComponentsAdditionalProductAttribute {
	productAttributeName: string;
	productAttributeValue: string;
}

export interface WheelsWheelComponentsAssembledProductHeight {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface WheelsWheelComponentsAssembledProductLength {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface WheelsWheelComponentsAssembledProductWeight {
	measure?: number;
	unit?: AssembledProductWeightUnit;
}

export interface WheelsWheelComponentsAssembledProductWidth {
	measure?: number;
	unit?: AssembledProductHeightUnit;
}

export interface WheelsWheelComponentsDiameter {
	measure?: number;
	unit?: RoughInDistanceUnit;
}

export interface WheelsWheelComponentsSwatchImage {
	swatchImageUrl?: string;
	swatchVariantAttribute?: WheelsWheelComponentsVariantAttributeName;
}

export enum WheelsWheelComponentsVariantAttributeName {
	Color = 'color',
	Count = 'count',
	Diameter = 'diameter',
	Finish = 'finish',
	Size = 'size',
}

export interface MPItemFeedHeader {
	feedDate?: Date;
	locale: Locale;
	mart?: Mart;
	processMode: ProcessMode;
	requestBatchId?: string;
	requestId?: string;
	sellingChannel: SellingChannel;
	subCategory: SubCategory;
	subset: Subset;
	version: SpecVersion;
}

export enum Locale {
	En = 'en',
}

export enum Mart {
	AsdaGm = 'ASDA_GM',
	WalmartCA = 'WALMART_CA',
	WalmartUs = 'WALMART_US',
}

export enum ProcessMode {
	Merge = 'MERGE',
	Replace = 'REPLACE',
}

export enum SellingChannel {
	Marketplacewfs = 'marketplacewfs',
}

export enum SubCategory {
	AnimalAccessories = 'animal_accessories',
	AnimalFood = 'animal_food',
	AnimalHealthAndGrooming = 'animal_health_and_grooming',
	AnimalOther = 'animal_other',
	ArtAndCraftOther = 'art_and_craft_other',
	BabyClothing = 'baby_clothing',
	BabyFood = 'baby_food',
	BabyFurniture = 'baby_furniture',
	BabyOther = 'baby_other',
	BabyToys = 'baby_toys',
	Bedding = 'bedding',
	BuildingSupply = 'building_supply',
	CamerasAndLenses = 'cameras_and_lenses',
	CarriersAndAccessoriesOther = 'carriers_and_accessories_other',
	CasesAndBags = 'cases_and_bags',
	CellPhones = 'cell_phones',
	CeremonialClothingAndAccessories = 'ceremonial_clothing_and_accessories',
	ChildCarSeats = 'child_car_seats',
	CleaningAndChemical = 'cleaning_and_chemical',
	ClothingOther = 'clothing_other',
	ComputerComponents = 'computer_components',
	Computers = 'computers',
	Costumes = 'costumes',
	Cycling = 'cycling',
	DecorationsAndFavors = 'decorations_and_favors',
	Electrical = 'electrical',
	ElectronicsAccessories = 'electronics_accessories',
	ElectronicsCables = 'electronics_cables',
	ElectronicsOther = 'electronics_other',
	FoodAndBeverageOther = 'food_and_beverage_other',
	FootwearOther = 'footwear_other',
	FuelsAndLubricants = 'fuels_and_lubricants',
	Funeral = 'funeral',
	FurnitureOther = 'furniture_other',
	GardenAndPatioOther = 'garden_and_patio_other',
	GiftSupplyAndAwards = 'gift_supply_and_awards',
	GrillsAndOutdoorCooking = 'grills_and_outdoor_cooking',
	Hardware = 'hardware',
	HealthAndBeautyElectronics = 'health_and_beauty_electronics',
	HomeOther = 'home_other',
	InstrumentAccessories = 'instrument_accessories',
	JewelryOther = 'jewelry_other',
	LandVehicles = 'land_vehicles',
	LargeAppliances = 'large_appliances',
	MedicalAids = 'medical_aids',
	MedicineAndSupplements = 'medicine_and_supplements',
	Movies = 'movies',
	Music = 'music',
	MusicCasesAndBags = 'music_cases_and_bags',
	MusicalInstruments = 'musical_instruments',
	OfficeOther = 'office_other',
	Optical = 'optical',
	Optics = 'optics',
	OtherOther = 'other_other',
	PersonalCare = 'personal_care',
	PhotoAccessories = 'photo_accessories',
	PlumbingAndHvac = 'plumbing_and_hvac',
	PrintersScannersAndImaging = 'printers_scanners_and_imaging',
	SafetyAndEmergency = 'safety_and_emergency',
	Software = 'software',
	SoundAndRecording = 'sound_and_recording',
	SportAndRecreationOther = 'sport_and_recreation_other',
	Storage = 'storage',
	Tools = 'tools',
	ToolsAndHardwareOther = 'tools_and_hardware_other',
	ToysOther = 'toys_other',
	TvsAndVideoDisplays = 'tvs_and_video_displays',
	VehicleOther = 'vehicle_other',
	VehiclePartsAndAccessories = 'vehicle_parts_and_accessories',
	VideoGames = 'video_games',
	VideoProjectors = 'video_projectors',
	WatchesOther = 'watches_other',
	Watercraft = 'watercraft',
	WheelsAndWheelComponents = 'wheels_and_wheel_components',
}

export enum Subset {
	External = 'EXTERNAL',
	Internal = 'INTERNAL',
}

export enum SpecVersion {
	The12 = '1.2',
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
	public static toMpWfsItem42(json: string): MpWfsItem42 {
		return cast(JSON.parse(json), r('MpWfsItem42'));
	}

	public static mpWfsItem42ToJson(value: MpWfsItem42): string {
		return JSON.stringify(uncast(value, r('MpWfsItem42')), null, 2);
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
	MpWfsItem42: o(
		[
			{ json: 'MPItem', js: 'MPItem', typ: a(r('MPItem')) },
			{ json: 'MPItemFeedHeader', js: 'MPItemFeedHeader', typ: r('MPItemFeedHeader') },
		],
		false
	),
	MPItem: o(
		[
			{ json: 'Orderable', js: 'Orderable', typ: r('Orderable') },
			{ json: 'TradeItem', js: 'TradeItem', typ: r('TradeItem') },
			{ json: 'Visible', js: 'Visible', typ: r('Visible') },
		],
		false
	),
	Orderable: o(
		[
			{ json: 'batterySize', js: 'batterySize', typ: u(undefined, '') },
			{ json: 'batteryTechnologyType', js: 'batteryTechnologyType', typ: r('ContainedBatteryType') },
			{ json: 'brand', js: 'brand', typ: '' },
			{ json: 'chemicalAerosolPesticide', js: 'chemicalAerosolPesticide', typ: r('MustShipAlone') },
			{ json: 'electronicsIndicator', js: 'electronicsIndicator', typ: r('MustShipAlone') },
			{ json: 'endDate', js: 'endDate', typ: u(undefined, Date) },
			{ json: 'hasBatteries', js: 'hasBatteries', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'lithiumIonBatteries', js: 'lithiumIonBatteries', typ: u(undefined, r('LithiumIonBatteries')) },
			{
				json: 'lithiumMetalBatteries',
				js: 'lithiumMetalBatteries',
				typ: u(undefined, r('LithiumMetalBatteries')),
			},
			{ json: 'MustShipAlone', js: 'MustShipAlone', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'netContent', js: 'netContent', typ: u(undefined, r('NetContent')) },
			{ json: 'numberOfHazardousComponents', js: 'numberOfHazardousComponents', typ: u(undefined, 0) },
			{ json: 'price', js: 'price', typ: 3.14 },
			{ json: 'productIdentifiers', js: 'productIdentifiers', typ: r('ProductIdentifiers') },
			{ json: 'productName', js: 'productName', typ: '' },
			{ json: 'safetyDataSheet', js: 'safetyDataSheet', typ: u(undefined, a('')) },
			{ json: 'shipsInOriginalPackaging', js: 'shipsInOriginalPackaging', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'sku', js: 'sku', typ: '' },
			{ json: 'SkuUpdate', js: 'SkuUpdate', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'startDate', js: 'startDate', typ: u(undefined, Date) },
			{ json: 'stateRestrictions', js: 'stateRestrictions', typ: a(r('SaleRestriction')) },
		],
		false
	),
	LithiumIonBatteries: o(
		[
			{ json: 'batteryFormFactor', js: 'batteryFormFactor', typ: r('BatteryFormFactor') },
			{ json: 'batteryModel', js: 'batteryModel', typ: '' },
			{ json: 'batteryWattHour', js: 'batteryWattHour', typ: 3.14 },
			{ json: 'batteryWeight', js: 'batteryWeight', typ: 3.14 },
			{ json: 'includedBatteryPackaging', js: 'includedBatteryPackaging', typ: r('IncludedBatteryPackaging') },
			{ json: 'numberOfBatteries', js: 'numberOfBatteries', typ: 0 },
			{ json: 'numberOfBatteryCells', js: 'numberOfBatteryCells', typ: 0 },
		],
		false
	),
	LithiumMetalBatteries: o(
		[
			{ json: 'batteryFormFactor', js: 'batteryFormFactor', typ: r('BatteryFormFactor') },
			{ json: 'batteryModel', js: 'batteryModel', typ: '' },
			{ json: 'batteryWeight', js: 'batteryWeight', typ: 3.14 },
			{ json: 'includedBatteryPackaging', js: 'includedBatteryPackaging', typ: r('IncludedBatteryPackaging') },
			{ json: 'lithiumMetalContentWeight', js: 'lithiumMetalContentWeight', typ: 3.14 },
			{ json: 'numberOfBatteries', js: 'numberOfBatteries', typ: 0 },
			{ json: 'numberOfBatteryCells', js: 'numberOfBatteryCells', typ: 0 },
		],
		false
	),
	NetContent: o(
		[
			{ json: 'productNetContentMeasure', js: 'productNetContentMeasure', typ: u(undefined, 3.14) },
			{
				json: 'productNetContentUnit',
				js: 'productNetContentUnit',
				typ: u(undefined, r('ProductNetContentUnitEnum')),
			},
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
	SaleRestriction: o(
		[
			{ json: 'stateRestrictionsText', js: 'stateRestrictionsText', typ: r('RestrictionType') },
			{ json: 'states', js: 'states', typ: u(undefined, '') },
			{ json: 'zipCodes', js: 'zipCodes', typ: u(undefined, '') },
		],
		false
	),
	TradeItem: o(
		[
			{ json: 'case', js: 'case', typ: u(undefined, r('Case')) },
			{ json: 'countryOfOriginAssembly', js: 'countryOfOriginAssembly', typ: a(r('CountryOfOrigin')) },
			{ json: 'each', js: 'each', typ: u(undefined, r('Each')) },
			{ json: 'innerPack', js: 'innerPack', typ: u(undefined, r('InnerPack')) },
			{ json: 'orderableGTIN', js: 'orderableGTIN', typ: '' },
			{ json: 'pallet', js: 'pallet', typ: u(undefined, r('Pallet')) },
			{ json: 'sku', js: 'sku', typ: '' },
		],
		false
	),
	Case: o(
		[
			{ json: 'caseDepth', js: 'caseDepth', typ: 3.14 },
			{ json: 'caseGTIN', js: 'caseGTIN', typ: '' },
			{ json: 'caseHeight', js: 'caseHeight', typ: 3.14 },
			{ json: 'caseWeight', js: 'caseWeight', typ: 3.14 },
			{ json: 'caseWidth', js: 'caseWidth', typ: 3.14 },
			{ json: 'qtySellableItemsCase', js: 'qtySellableItemsCase', typ: 0 },
		],
		false
	),
	Each: o(
		[
			{ json: 'eachDepth', js: 'eachDepth', typ: 3.14 },
			{ json: 'eachGTIN', js: 'eachGTIN', typ: '' },
			{ json: 'eachHeight', js: 'eachHeight', typ: 3.14 },
			{ json: 'eachWeight', js: 'eachWeight', typ: 3.14 },
			{ json: 'eachWidth', js: 'eachWidth', typ: 3.14 },
		],
		false
	),
	InnerPack: o(
		[
			{ json: 'innerPackDepth', js: 'innerPackDepth', typ: 3.14 },
			{ json: 'innerPackGTIN', js: 'innerPackGTIN', typ: '' },
			{ json: 'innerPackHeight', js: 'innerPackHeight', typ: 3.14 },
			{ json: 'innerPackWeight', js: 'innerPackWeight', typ: 3.14 },
			{ json: 'innerPackWidth', js: 'innerPackWidth', typ: 3.14 },
			{ json: 'qtySellableItemsInnerPack', js: 'qtySellableItemsInnerPack', typ: 0 },
		],
		false
	),
	Pallet: o(
		[
			{ json: 'palletDepth', js: 'palletDepth', typ: 3.14 },
			{ json: 'palletGTIN', js: 'palletGTIN', typ: '' },
			{ json: 'palletHeight', js: 'palletHeight', typ: 3.14 },
			{ json: 'palletWeight', js: 'palletWeight', typ: 3.14 },
			{ json: 'palletWidth', js: 'palletWidth', typ: 3.14 },
			{ json: 'qtySellableItemsPallet', js: 'qtySellableItemsPallet', typ: 0 },
		],
		false
	),
	Visible: o(
		[
			{ json: 'Animal Accessories', js: 'Animal Accessories', typ: u(undefined, r('AnimalAccessories')) },
			{ json: 'Animal Food', js: 'Animal Food', typ: u(undefined, r('AnimalFood')) },
			{
				json: 'Animal Health & Grooming',
				js: 'Animal Health & Grooming',
				typ: u(undefined, r('AnimalHealthGrooming')),
			},
			{ json: 'Animal Other', js: 'Animal Other', typ: u(undefined, r('AnimalOther')) },
			{ json: 'Art & Craft', js: 'Art & Craft', typ: u(undefined, r('ArtCraft')) },
			{ json: 'Baby Clothing', js: 'Baby Clothing', typ: u(undefined, r('BabyClothing')) },
			{
				json: 'Baby Diapering, Care, & Other',
				js: 'Baby Diapering, Care, & Other',
				typ: u(undefined, r('BabyDiaperingCareOther')),
			},
			{ json: 'Baby Food', js: 'Baby Food', typ: u(undefined, r('BabyFood')) },
			{ json: 'Baby Furniture', js: 'Baby Furniture', typ: u(undefined, r('BabyFurniture')) },
			{ json: 'Baby Toys', js: 'Baby Toys', typ: u(undefined, r('BabyToys')) },
			{ json: 'Baby Transport', js: 'Baby Transport', typ: u(undefined, r('BabyTransport')) },
			{
				json: 'Beauty, Personal Care, & Hygiene',
				js: 'Beauty, Personal Care, & Hygiene',
				typ: u(undefined, r('BeautyPersonalCareHygiene')),
			},
			{ json: 'Bedding', js: 'Bedding', typ: u(undefined, r('Bedding')) },
			{ json: 'Building Supply', js: 'Building Supply', typ: u(undefined, r('BuildingSupply')) },
			{ json: 'Cameras & Lenses', js: 'Cameras & Lenses', typ: u(undefined, r('CamerasLenses')) },
			{
				json: 'Carriers & Accessories',
				js: 'Carriers & Accessories',
				typ: u(undefined, r('CarriersAccessories')),
			},
			{ json: 'Cases & Bags', js: 'Cases & Bags', typ: u(undefined, r('CasesBags')) },
			{ json: 'Cell Phones', js: 'Cell Phones', typ: u(undefined, r('CellPhones')) },
			{
				json: 'Ceremonial Clothing & Accessories',
				js: 'Ceremonial Clothing & Accessories',
				typ: u(undefined, r('CeremonialClothingAccessories')),
			},
			{ json: 'Clothing', js: 'Clothing', typ: u(undefined, r('Clothing')) },
			{ json: 'Computer Components', js: 'Computer Components', typ: u(undefined, r('ComputerComponents')) },
			{ json: 'Computers', js: 'Computers', typ: u(undefined, r('Computers')) },
			{ json: 'Costumes', js: 'Costumes', typ: u(undefined, r('Costumes')) },
			{ json: 'Cycling', js: 'Cycling', typ: u(undefined, r('Cycling')) },
			{ json: 'Decorations & Favors', js: 'Decorations & Favors', typ: u(undefined, r('DecorationsFavors')) },
			{ json: 'Electrical', js: 'Electrical', typ: u(undefined, r('Electrical')) },
			{
				json: 'Electronics Accessories',
				js: 'Electronics Accessories',
				typ: u(undefined, r('ElectronicsAccessories')),
			},
			{ json: 'Electronics Cables', js: 'Electronics Cables', typ: u(undefined, r('ElectronicsCables')) },
			{ json: 'Electronics Other', js: 'Electronics Other', typ: u(undefined, r('ElectronicsOther')) },
			{ json: 'Food & Beverage', js: 'Food & Beverage', typ: u(undefined, r('FoodBeverage')) },
			{ json: 'Footwear', js: 'Footwear', typ: u(undefined, r('Footwear')) },
			{ json: 'Fuels & Lubricants', js: 'Fuels & Lubricants', typ: u(undefined, r('FuelsLubricants')) },
			{ json: 'Funeral', js: 'Funeral', typ: u(undefined, r('Funeral')) },
			{ json: 'Furniture', js: 'Furniture', typ: u(undefined, r('Furniture')) },
			{ json: 'Garden & Patio', js: 'Garden & Patio', typ: u(undefined, r('GardenPatio')) },
			{ json: 'Gift Supply & Awards', js: 'Gift Supply & Awards', typ: u(undefined, r('GiftSupplyAwards')) },
			{
				json: 'Grills & Outdoor Cooking',
				js: 'Grills & Outdoor Cooking',
				typ: u(undefined, r('GrillsOutdoorCooking')),
			},
			{ json: 'Hardware', js: 'Hardware', typ: u(undefined, r('Hardware')) },
			{
				json: 'Health & Beauty Electronics',
				js: 'Health & Beauty Electronics',
				typ: u(undefined, r('HealthBeautyElectronics')),
			},
			{
				json: 'Home Decor, Kitchen, & Other',
				js: 'Home Decor, Kitchen, & Other',
				typ: u(undefined, r('HomeDecorKitchenOther')),
			},
			{
				json: 'Household Cleaning Products & Supplies',
				js: 'Household Cleaning Products & Supplies',
				typ: u(undefined, r('HouseholdCleaningProductsSupplies')),
			},
			{
				json: 'Instrument Accessories',
				js: 'Instrument Accessories',
				typ: u(undefined, r('InstrumentAccessories')),
			},
			{ json: 'Jewelry', js: 'Jewelry', typ: u(undefined, r('Jewelry')) },
			{ json: 'Land Vehicles', js: 'Land Vehicles', typ: u(undefined, r('LandVehicles')) },
			{ json: 'Large Appliances', js: 'Large Appliances', typ: u(undefined, r('LargeAppliances')) },
			{
				json: 'Medical Aids & Equipment',
				js: 'Medical Aids & Equipment',
				typ: u(undefined, r('MedicalAidsEquipment')),
			},
			{
				json: 'Medicine & Supplements',
				js: 'Medicine & Supplements',
				typ: u(undefined, r('MedicineSupplements')),
			},
			{ json: 'Movies', js: 'Movies', typ: u(undefined, r('Movies')) },
			{ json: 'Music', js: 'Music', typ: u(undefined, r('Music')) },
			{ json: 'Music Cases & Bags', js: 'Music Cases & Bags', typ: u(undefined, r('MusicCasesBags')) },
			{ json: 'Musical Instruments', js: 'Musical Instruments', typ: u(undefined, r('MusicalInstruments')) },
			{ json: 'Office', js: 'Office', typ: u(undefined, r('Office')) },
			{ json: 'Optical', js: 'Optical', typ: u(undefined, r('Optical')) },
			{ json: 'Optics', js: 'Optics', typ: u(undefined, r('Optics')) },
			{ json: 'Other', js: 'Other', typ: u(undefined, r('Other')) },
			{ json: 'Photo Accessories', js: 'Photo Accessories', typ: u(undefined, r('PhotoAccessories')) },
			{ json: 'Plumbing & HVAC', js: 'Plumbing & HVAC', typ: u(undefined, r('PlumbingHVAC')) },
			{
				json: 'Printers, Scanners, & Imaging',
				js: 'Printers, Scanners, & Imaging',
				typ: u(undefined, r('PrintersScannersImaging')),
			},
			{ json: 'Safety & Emergency', js: 'Safety & Emergency', typ: u(undefined, r('SafetyEmergency')) },
			{ json: 'Software', js: 'Software', typ: u(undefined, r('Software')) },
			{ json: 'Sound & Recording', js: 'Sound & Recording', typ: u(undefined, r('SoundRecording')) },
			{
				json: 'Sport & Recreation Other',
				js: 'Sport & Recreation Other',
				typ: u(undefined, r('SportRecreationOther')),
			},
			{ json: 'Storage', js: 'Storage', typ: u(undefined, r('Storage')) },
			{ json: 'Tools', js: 'Tools', typ: u(undefined, r('Tools')) },
			{
				json: 'Tools & Hardware Other',
				js: 'Tools & Hardware Other',
				typ: u(undefined, r('ToolsHardwareOther')),
			},
			{ json: 'Toys', js: 'Toys', typ: u(undefined, r('Toys')) },
			{ json: 'TVs & Video Displays', js: 'TVs & Video Displays', typ: u(undefined, r('TVsVideoDisplays')) },
			{ json: 'Vehicle Other', js: 'Vehicle Other', typ: u(undefined, r('VehicleOther')) },
			{
				json: 'Vehicle Parts & Accessories',
				js: 'Vehicle Parts & Accessories',
				typ: u(undefined, r('VehiclePartsAccessories')),
			},
			{ json: 'Video Games', js: 'Video Games', typ: u(undefined, r('VideoGames')) },
			{ json: 'Video Projectors', js: 'Video Projectors', typ: u(undefined, r('VideoProjectors')) },
			{ json: 'Watches', js: 'Watches', typ: u(undefined, r('Watches')) },
			{ json: 'Watercraft', js: 'Watercraft', typ: u(undefined, r('Watercraft')) },
			{
				json: 'Wheels & Wheel Components',
				js: 'Wheels & Wheel Components',
				typ: u(undefined, r('WheelsWheelComponents')),
			},
		],
		false
	),
	AnimalAccessories: o(
		[
			{
				json: 'additionalProductAttributes',
				js: 'additionalProductAttributes',
				typ: u(undefined, a(r('AnimalAccessoriesAdditionalProductAttribute'))),
			},
			{ json: 'animalBreed', js: 'animalBreed', typ: u(undefined, '') },
			{ json: 'animalLifestage', js: 'animalLifestage', typ: u(undefined, '') },
			{ json: 'animalType', js: 'animalType', typ: u(undefined, '') },
			{
				json: 'assembledProductHeight',
				js: 'assembledProductHeight',
				typ: u(undefined, r('AnimalAccessoriesAssembledProductHeight')),
			},
			{
				json: 'assembledProductLength',
				js: 'assembledProductLength',
				typ: u(undefined, r('AnimalAccessoriesAssembledProductLength')),
			},
			{
				json: 'assembledProductWeight',
				js: 'assembledProductWeight',
				typ: u(undefined, r('AnimalAccessoriesAssembledProductWeight')),
			},
			{
				json: 'assembledProductWidth',
				js: 'assembledProductWidth',
				typ: u(undefined, r('AnimalAccessoriesAssembledProductWidth')),
			},
			{ json: 'batteriesRequired', js: 'batteriesRequired', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'capacity', js: 'capacity', typ: u(undefined, '') },
			{ json: 'character', js: 'character', typ: u(undefined, a('')) },
			{ json: 'color', js: 'color', typ: u(undefined, a('')) },
			{ json: 'colorCategory', js: 'colorCategory', typ: u(undefined, a(r('ColorCategory'))) },
			{ json: 'count', js: 'count', typ: u(undefined, '') },
			{ json: 'countPerPack', js: 'countPerPack', typ: u(undefined, 0) },
			{ json: 'countryOfOriginTextiles', js: 'countryOfOriginTextiles', typ: r('CountryOfOriginTextiles') },
			{ json: 'fabricCareInstructions', js: 'fabricCareInstructions', typ: u(undefined, a('')) },
			{ json: 'fabricContent', js: 'fabricContent', typ: u(undefined, a(r('AnimalAccessoriesFabricContent'))) },
			{ json: 'features', js: 'features', typ: u(undefined, a('')) },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: u(undefined, a('')) },
			{ json: 'instructions', js: 'instructions', typ: u(undefined, '') },
			{ json: 'isFoldable', js: 'isFoldable', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isReflective', js: 'isReflective', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isRetractable', js: 'isRetractable', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: u(undefined, a('')) },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: '' },
			{ json: 'manufacturer', js: 'manufacturer', typ: '' },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: u(undefined, '') },
			{ json: 'material', js: 'material', typ: u(undefined, a('')) },
			{
				json: 'maximumTemperature',
				js: 'maximumTemperature',
				typ: u(undefined, r('AnimalAccessoriesMaximumTemperature')),
			},
			{ json: 'maximumWeight', js: 'maximumWeight', typ: u(undefined, r('AnimalAccessoriesMaximumWeight')) },
			{
				json: 'minimumTemperature',
				js: 'minimumTemperature',
				typ: u(undefined, r('AnimalAccessoriesMinimumTemperature')),
			},
			{ json: 'minimumWeight', js: 'minimumWeight', typ: u(undefined, r('AnimalAccessoriesMinimumWeight')) },
			{ json: 'modelNumber', js: 'modelNumber', typ: u(undefined, '') },
			{ json: 'msrp', js: 'msrp', typ: u(undefined, 3.14) },
			{ json: 'numberOfSteps', js: 'numberOfSteps', typ: u(undefined, 3.14) },
			{ json: 'pattern', js: 'pattern', typ: u(undefined, a('')) },
			{ json: 'petSize', js: 'petSize', typ: u(undefined, '') },
			{ json: 'pieceCount', js: 'pieceCount', typ: u(undefined, 0) },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: u(undefined, a('')) },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: '' },
			{ json: 'shape', js: 'shape', typ: u(undefined, '') },
			{ json: 'shortDescription', js: 'shortDescription', typ: '' },
			{ json: 'size', js: 'size', typ: u(undefined, '') },
			{ json: 'sportsLeague', js: 'sportsLeague', typ: u(undefined, a('')) },
			{ json: 'sportsTeam', js: 'sportsTeam', typ: u(undefined, a('')) },
			{ json: 'swatchImages', js: 'swatchImages', typ: u(undefined, a(r('AnimalAccessoriesSwatchImage'))) },
			{
				json: 'variantAttributeNames',
				js: 'variantAttributeNames',
				typ: u(undefined, a(r('AnimalAccessoriesVariantAttributeName'))),
			},
			{ json: 'variantGroupId', js: 'variantGroupId', typ: u(undefined, '') },
			{ json: 'warrantyText', js: 'warrantyText', typ: u(undefined, '') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: u(undefined, '') },
		],
		false
	),
	AnimalAccessoriesAdditionalProductAttribute: o(
		[
			{ json: 'productAttributeName', js: 'productAttributeName', typ: '' },
			{ json: 'productAttributeValue', js: 'productAttributeValue', typ: '' },
		],
		false
	),
	AnimalAccessoriesAssembledProductHeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	AnimalAccessoriesAssembledProductLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	AnimalAccessoriesAssembledProductWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductWeightUnit')) },
		],
		false
	),
	AnimalAccessoriesAssembledProductWidth: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	AnimalAccessoriesFabricContent: o(
		[
			{ json: 'materialName', js: 'materialName', typ: u(undefined, '') },
			{ json: 'materialPercentage', js: 'materialPercentage', typ: u(undefined, 3.14) },
		],
		false
	),
	AnimalAccessoriesMaximumTemperature: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('MaximumTemperatureUnit')) },
		],
		false
	),
	AnimalAccessoriesMaximumWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('PurpleUnit')) },
		],
		false
	),
	AnimalAccessoriesMinimumTemperature: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('MaximumTemperatureUnit')) },
		],
		false
	),
	AnimalAccessoriesMinimumWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductWeightUnit')) },
		],
		false
	),
	AnimalAccessoriesSwatchImage: o(
		[
			{ json: 'swatchImageUrl', js: 'swatchImageUrl', typ: u(undefined, '') },
			{
				json: 'swatchVariantAttribute',
				js: 'swatchVariantAttribute',
				typ: u(undefined, r('AnimalAccessoriesVariantAttributeName')),
			},
		],
		false
	),
	AnimalFood: o(
		[
			{
				json: 'additionalProductAttributes',
				js: 'additionalProductAttributes',
				typ: u(undefined, a(r('AnimalFoodAdditionalProductAttribute'))),
			},
			{ json: 'animalBreed', js: 'animalBreed', typ: u(undefined, '') },
			{ json: 'animalHealthConcern', js: 'animalHealthConcern', typ: u(undefined, a('')) },
			{ json: 'animalLifestage', js: 'animalLifestage', typ: u(undefined, '') },
			{ json: 'animalType', js: 'animalType', typ: u(undefined, '') },
			{
				json: 'assembledProductHeight',
				js: 'assembledProductHeight',
				typ: u(undefined, r('AnimalFoodAssembledProductHeight')),
			},
			{
				json: 'assembledProductLength',
				js: 'assembledProductLength',
				typ: u(undefined, r('AnimalFoodAssembledProductLength')),
			},
			{
				json: 'assembledProductWeight',
				js: 'assembledProductWeight',
				typ: u(undefined, r('AnimalFoodAssembledProductWeight')),
			},
			{
				json: 'assembledProductWidth',
				js: 'assembledProductWidth',
				typ: u(undefined, r('AnimalFoodAssembledProductWidth')),
			},
			{ json: 'count', js: 'count', typ: u(undefined, '') },
			{ json: 'countPerPack', js: 'countPerPack', typ: u(undefined, 0) },
			{ json: 'features', js: 'features', typ: u(undefined, a('')) },
			{ json: 'feedingInstructions', js: 'feedingInstructions', typ: u(undefined, '') },
			{ json: 'flavor', js: 'flavor', typ: u(undefined, '') },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: u(undefined, a('')) },
			{ json: 'ingredients', js: 'ingredients', typ: u(undefined, '') },
			{ json: 'instructions', js: 'instructions', typ: u(undefined, '') },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: u(undefined, a('')) },
			{ json: 'labelImage', js: 'labelImage', typ: a(r('AnimalFoodLabelImage')) },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: '' },
			{ json: 'manufacturer', js: 'manufacturer', typ: '' },
			{ json: 'maximumWeight', js: 'maximumWeight', typ: u(undefined, r('AnimalFoodMaximumWeight')) },
			{ json: 'minimumWeight', js: 'minimumWeight', typ: u(undefined, r('AnimalFoodMinimumWeight')) },
			{ json: 'msrp', js: 'msrp', typ: u(undefined, 3.14) },
			{ json: 'petFoodForm', js: 'petFoodForm', typ: u(undefined, '') },
			{ json: 'petSize', js: 'petSize', typ: u(undefined, '') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: u(undefined, a('')) },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: '' },
			{ json: 'shelfLife', js: 'shelfLife', typ: u(undefined, r('AnimalFoodShelfLife')) },
			{ json: 'shortDescription', js: 'shortDescription', typ: '' },
			{ json: 'size', js: 'size', typ: u(undefined, '') },
			{ json: 'swatchImages', js: 'swatchImages', typ: u(undefined, a(r('AnimalFoodSwatchImage'))) },
			{
				json: 'variantAttributeNames',
				js: 'variantAttributeNames',
				typ: u(undefined, a(r('AnimalFoodVariantAttributeName'))),
			},
			{ json: 'variantGroupId', js: 'variantGroupId', typ: u(undefined, '') },
			{ json: 'warrantyText', js: 'warrantyText', typ: u(undefined, '') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: u(undefined, '') },
		],
		false
	),
	AnimalFoodAdditionalProductAttribute: o(
		[
			{ json: 'productAttributeName', js: 'productAttributeName', typ: '' },
			{ json: 'productAttributeValue', js: 'productAttributeValue', typ: '' },
		],
		false
	),
	AnimalFoodAssembledProductHeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	AnimalFoodAssembledProductLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	AnimalFoodAssembledProductWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductWeightUnit')) },
		],
		false
	),
	AnimalFoodAssembledProductWidth: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	AnimalFoodLabelImage: o(
		[
			{ json: 'labelImageContains', js: 'labelImageContains', typ: r('LabelImageContains') },
			{ json: 'labelImageURL', js: 'labelImageURL', typ: '' },
		],
		false
	),
	AnimalFoodMaximumWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('PurpleUnit')) },
		],
		false
	),
	AnimalFoodMinimumWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductWeightUnit')) },
		],
		false
	),
	AnimalFoodShelfLife: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 0) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('ShelfLifeUnit')) },
		],
		false
	),
	AnimalFoodSwatchImage: o(
		[
			{ json: 'swatchImageUrl', js: 'swatchImageUrl', typ: u(undefined, '') },
			{
				json: 'swatchVariantAttribute',
				js: 'swatchVariantAttribute',
				typ: u(undefined, r('AnimalFoodVariantAttributeName')),
			},
		],
		false
	),
	AnimalHealthGrooming: o(
		[
			{
				json: 'activeIngredients',
				js: 'activeIngredients',
				typ: u(undefined, a(r('AnimalHealthGroomingActiveIngredient'))),
			},
			{
				json: 'additionalProductAttributes',
				js: 'additionalProductAttributes',
				typ: u(undefined, a(r('AnimalHealthGroomingAdditionalProductAttribute'))),
			},
			{ json: 'animalBreed', js: 'animalBreed', typ: u(undefined, '') },
			{ json: 'animalHealthConcern', js: 'animalHealthConcern', typ: u(undefined, a('')) },
			{ json: 'animalLifestage', js: 'animalLifestage', typ: u(undefined, '') },
			{ json: 'animalType', js: 'animalType', typ: u(undefined, '') },
			{
				json: 'assembledProductHeight',
				js: 'assembledProductHeight',
				typ: u(undefined, r('AnimalHealthGroomingAssembledProductHeight')),
			},
			{
				json: 'assembledProductLength',
				js: 'assembledProductLength',
				typ: u(undefined, r('AnimalHealthGroomingAssembledProductLength')),
			},
			{
				json: 'assembledProductWeight',
				js: 'assembledProductWeight',
				typ: u(undefined, r('AnimalHealthGroomingAssembledProductWeight')),
			},
			{
				json: 'assembledProductWidth',
				js: 'assembledProductWidth',
				typ: u(undefined, r('AnimalHealthGroomingAssembledProductWidth')),
			},
			{ json: 'color', js: 'color', typ: u(undefined, a('')) },
			{ json: 'count', js: 'count', typ: u(undefined, '') },
			{ json: 'countPerPack', js: 'countPerPack', typ: u(undefined, 0) },
			{ json: 'dosage', js: 'dosage', typ: u(undefined, '') },
			{
				json: 'drugActiveInactiveIngredientsImage',
				js: 'drugActiveInactiveIngredientsImage',
				typ: u(undefined, ''),
			},
			{ json: 'drugDosageInstructionsImage', js: 'drugDosageInstructionsImage', typ: u(undefined, '') },
			{ json: 'features', js: 'features', typ: u(undefined, a('')) },
			{ json: 'flavor', js: 'flavor', typ: u(undefined, '') },
			{ json: 'form', js: 'form', typ: u(undefined, '') },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: u(undefined, a('')) },
			{ json: 'hairLength', js: 'hairLength', typ: u(undefined, a('')) },
			{ json: 'inactiveIngredients', js: 'inactiveIngredients', typ: u(undefined, a('')) },
			{ json: 'ingredients', js: 'ingredients', typ: u(undefined, '') },
			{ json: 'instructions', js: 'instructions', typ: u(undefined, '') },
			{ json: 'isDisposable', js: 'isDisposable', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isRetractable', js: 'isRetractable', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: u(undefined, a('')) },
			{ json: 'labelImage', js: 'labelImage', typ: a(r('AnimalHealthGroomingLabelImage')) },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: '' },
			{ json: 'manufacturer', js: 'manufacturer', typ: '' },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: u(undefined, '') },
			{ json: 'maximumWeight', js: 'maximumWeight', typ: u(undefined, r('AnimalHealthGroomingMaximumWeight')) },
			{ json: 'minimumWeight', js: 'minimumWeight', typ: u(undefined, r('AnimalHealthGroomingMinimumWeight')) },
			{ json: 'modelNumber', js: 'modelNumber', typ: u(undefined, '') },
			{ json: 'msrp', js: 'msrp', typ: u(undefined, 3.14) },
			{ json: 'petSize', js: 'petSize', typ: u(undefined, '') },
			{ json: 'pieceCount', js: 'pieceCount', typ: u(undefined, 0) },
			{ json: 'powerType', js: 'powerType', typ: u(undefined, '') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: u(undefined, a('')) },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: '' },
			{ json: 'scent', js: 'scent', typ: u(undefined, '') },
			{ json: 'shelfLife', js: 'shelfLife', typ: u(undefined, r('AnimalHealthGroomingShelfLife')) },
			{ json: 'shortDescription', js: 'shortDescription', typ: '' },
			{ json: 'size', js: 'size', typ: u(undefined, '') },
			{ json: 'stopUseIndications', js: 'stopUseIndications', typ: u(undefined, a('')) },
			{ json: 'swatchImages', js: 'swatchImages', typ: u(undefined, a(r('AnimalHealthGroomingSwatchImage'))) },
			{
				json: 'variantAttributeNames',
				js: 'variantAttributeNames',
				typ: u(undefined, a(r('AnimalHealthGroomingVariantAttributeName'))),
			},
			{ json: 'variantGroupId', js: 'variantGroupId', typ: u(undefined, '') },
			{ json: 'warrantyText', js: 'warrantyText', typ: u(undefined, '') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: u(undefined, '') },
		],
		false
	),
	AnimalHealthGroomingActiveIngredient: o(
		[
			{ json: 'activeIngredientName', js: 'activeIngredientName', typ: u(undefined, '') },
			{ json: 'activeIngredientPercentage', js: 'activeIngredientPercentage', typ: u(undefined, 3.14) },
		],
		false
	),
	AnimalHealthGroomingAdditionalProductAttribute: o(
		[
			{ json: 'productAttributeName', js: 'productAttributeName', typ: '' },
			{ json: 'productAttributeValue', js: 'productAttributeValue', typ: '' },
		],
		false
	),
	AnimalHealthGroomingAssembledProductHeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	AnimalHealthGroomingAssembledProductLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	AnimalHealthGroomingAssembledProductWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductWeightUnit')) },
		],
		false
	),
	AnimalHealthGroomingAssembledProductWidth: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	AnimalHealthGroomingLabelImage: o(
		[
			{ json: 'labelImageContains', js: 'labelImageContains', typ: r('LabelImageContains') },
			{ json: 'labelImageURL', js: 'labelImageURL', typ: '' },
		],
		false
	),
	AnimalHealthGroomingMaximumWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('PurpleUnit')) },
		],
		false
	),
	AnimalHealthGroomingMinimumWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductWeightUnit')) },
		],
		false
	),
	AnimalHealthGroomingShelfLife: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 0) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('ShelfLifeUnit')) },
		],
		false
	),
	AnimalHealthGroomingSwatchImage: o(
		[
			{ json: 'swatchImageUrl', js: 'swatchImageUrl', typ: u(undefined, '') },
			{
				json: 'swatchVariantAttribute',
				js: 'swatchVariantAttribute',
				typ: u(undefined, r('AnimalHealthGroomingVariantAttributeName')),
			},
		],
		false
	),
	AnimalOther: o(
		[
			{
				json: 'additionalProductAttributes',
				js: 'additionalProductAttributes',
				typ: u(undefined, a(r('AnimalOtherAdditionalProductAttribute'))),
			},
			{ json: 'animalBreed', js: 'animalBreed', typ: u(undefined, '') },
			{ json: 'animalLifestage', js: 'animalLifestage', typ: u(undefined, '') },
			{ json: 'animalType', js: 'animalType', typ: u(undefined, '') },
			{
				json: 'assembledProductHeight',
				js: 'assembledProductHeight',
				typ: u(undefined, r('AnimalOtherAssembledProductHeight')),
			},
			{
				json: 'assembledProductLength',
				js: 'assembledProductLength',
				typ: u(undefined, r('AnimalOtherAssembledProductLength')),
			},
			{
				json: 'assembledProductWeight',
				js: 'assembledProductWeight',
				typ: u(undefined, r('AnimalOtherAssembledProductWeight')),
			},
			{
				json: 'assembledProductWidth',
				js: 'assembledProductWidth',
				typ: u(undefined, r('AnimalOtherAssembledProductWidth')),
			},
			{ json: 'athlete', js: 'athlete', typ: u(undefined, a('')) },
			{ json: 'autographedBy', js: 'autographedBy', typ: u(undefined, '') },
			{ json: 'color', js: 'color', typ: u(undefined, a('')) },
			{ json: 'colorCategory', js: 'colorCategory', typ: u(undefined, a(r('ColorCategory'))) },
			{ json: 'count', js: 'count', typ: u(undefined, '') },
			{ json: 'countPerPack', js: 'countPerPack', typ: u(undefined, 0) },
			{ json: 'countryOfOriginTextiles', js: 'countryOfOriginTextiles', typ: r('CountryOfOriginTextiles') },
			{ json: 'fabricCareInstructions', js: 'fabricCareInstructions', typ: u(undefined, a('')) },
			{ json: 'fabricContent', js: 'fabricContent', typ: u(undefined, a(r('AnimalOtherFabricContent'))) },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: u(undefined, a('')) },
			{ json: 'inflexKitComponent', js: 'inflexKitComponent', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'instructions', js: 'instructions', typ: u(undefined, '') },
			{ json: 'isFoldable', js: 'isFoldable', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPortable', js: 'isPortable', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: u(undefined, a('')) },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: '' },
			{ json: 'manufacturer', js: 'manufacturer', typ: '' },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: u(undefined, '') },
			{ json: 'material', js: 'material', typ: u(undefined, a('')) },
			{ json: 'maximumWeight', js: 'maximumWeight', typ: u(undefined, r('AnimalOtherMaximumWeight')) },
			{ json: 'minimumWeight', js: 'minimumWeight', typ: u(undefined, r('AnimalOtherMinimumWeight')) },
			{ json: 'modelNumber', js: 'modelNumber', typ: u(undefined, '') },
			{ json: 'msrp', js: 'msrp', typ: u(undefined, 3.14) },
			{ json: 'pattern', js: 'pattern', typ: u(undefined, a('')) },
			{ json: 'petSize', js: 'petSize', typ: u(undefined, '') },
			{ json: 'pieceCount', js: 'pieceCount', typ: u(undefined, 0) },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: u(undefined, a('')) },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: '' },
			{ json: 'shortDescription', js: 'shortDescription', typ: '' },
			{ json: 'size', js: 'size', typ: u(undefined, '') },
			{ json: 'sportsLeague', js: 'sportsLeague', typ: u(undefined, a('')) },
			{ json: 'sportsTeam', js: 'sportsTeam', typ: u(undefined, a('')) },
			{ json: 'swatchImages', js: 'swatchImages', typ: u(undefined, a(r('AnimalOtherSwatchImage'))) },
			{
				json: 'variantAttributeNames',
				js: 'variantAttributeNames',
				typ: u(undefined, a(r('AnimalOtherVariantAttributeName'))),
			},
			{ json: 'variantGroupId', js: 'variantGroupId', typ: u(undefined, '') },
			{ json: 'warrantyText', js: 'warrantyText', typ: u(undefined, '') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: u(undefined, '') },
		],
		false
	),
	AnimalOtherAdditionalProductAttribute: o(
		[
			{ json: 'productAttributeName', js: 'productAttributeName', typ: '' },
			{ json: 'productAttributeValue', js: 'productAttributeValue', typ: '' },
		],
		false
	),
	AnimalOtherAssembledProductHeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	AnimalOtherAssembledProductLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	AnimalOtherAssembledProductWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductWeightUnit')) },
		],
		false
	),
	AnimalOtherAssembledProductWidth: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	AnimalOtherFabricContent: o(
		[
			{ json: 'materialName', js: 'materialName', typ: u(undefined, '') },
			{ json: 'materialPercentage', js: 'materialPercentage', typ: u(undefined, 3.14) },
		],
		false
	),
	AnimalOtherMaximumWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('PurpleUnit')) },
		],
		false
	),
	AnimalOtherMinimumWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductWeightUnit')) },
		],
		false
	),
	AnimalOtherSwatchImage: o(
		[
			{ json: 'swatchImageUrl', js: 'swatchImageUrl', typ: u(undefined, '') },
			{
				json: 'swatchVariantAttribute',
				js: 'swatchVariantAttribute',
				typ: u(undefined, r('AnimalOtherVariantAttributeName')),
			},
		],
		false
	),
	ArtCraft: o(
		[
			{
				json: 'additionalProductAttributes',
				js: 'additionalProductAttributes',
				typ: u(undefined, a(r('ArtCraftAdditionalProductAttribute'))),
			},
			{ json: 'ageGroup', js: 'ageGroup', typ: u(undefined, a(r('ArtCraftAgeGroup'))) },
			{ json: 'artPaintType', js: 'artPaintType', typ: u(undefined, '') },
			{
				json: 'assembledProductHeight',
				js: 'assembledProductHeight',
				typ: u(undefined, r('ArtCraftAssembledProductHeight')),
			},
			{
				json: 'assembledProductLength',
				js: 'assembledProductLength',
				typ: u(undefined, r('ArtCraftAssembledProductLength')),
			},
			{
				json: 'assembledProductWeight',
				js: 'assembledProductWeight',
				typ: u(undefined, r('ArtCraftAssembledProductWeight')),
			},
			{
				json: 'assembledProductWidth',
				js: 'assembledProductWidth',
				typ: u(undefined, r('ArtCraftAssembledProductWidth')),
			},
			{ json: 'boltLengthYardage', js: 'boltLengthYardage', typ: u(undefined, r('BoltLengthYardage')) },
			{ json: 'character', js: 'character', typ: u(undefined, a('')) },
			{ json: 'color', js: 'color', typ: u(undefined, a('')) },
			{ json: 'colorCategory', js: 'colorCategory', typ: u(undefined, a(r('ColorCategory'))) },
			{
				json: 'compositeWoodCertificationCode',
				js: 'compositeWoodCertificationCode',
				typ: r('CompositeWoodCertificationCode'),
			},
			{ json: 'count', js: 'count', typ: u(undefined, '') },
			{ json: 'countPerPack', js: 'countPerPack', typ: u(undefined, 0) },
			{ json: 'diameter', js: 'diameter', typ: u(undefined, r('ArtCraftDiameter')) },
			{ json: 'fabricCareInstructions', js: 'fabricCareInstructions', typ: u(undefined, a('')) },
			{ json: 'fabricContent', js: 'fabricContent', typ: u(undefined, a(r('ArtCraftFabricContent'))) },
			{ json: 'fabricPurchaseForm', js: 'fabricPurchaseForm', typ: u(undefined, r('FabricPurchaseForm')) },
			{ json: 'features', js: 'features', typ: u(undefined, a('')) },
			{ json: 'finish', js: 'finish', typ: u(undefined, '') },
			{ json: 'gender', js: 'gender', typ: u(undefined, r('ArtCraftGender')) },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: u(undefined, a('')) },
			{ json: 'inflexKitComponent', js: 'inflexKitComponent', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'ingredients', js: 'ingredients', typ: u(undefined, '') },
			{ json: 'isBulk', js: 'isBulk', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isDisposable', js: 'isDisposable', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPowered', js: 'isPowered', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isRecyclable', js: 'isRecyclable', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isRefillable', js: 'isRefillable', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isSelfAdhesive', js: 'isSelfAdhesive', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: u(undefined, a('')) },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: '' },
			{ json: 'manufacturer', js: 'manufacturer', typ: '' },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: u(undefined, '') },
			{ json: 'material', js: 'material', typ: u(undefined, a('')) },
			{
				json: 'maximumRecommendedAge',
				js: 'maximumRecommendedAge',
				typ: u(undefined, r('ArtCraftMaximumRecommendedAge')),
			},
			{
				json: 'maximumTemperature',
				js: 'maximumTemperature',
				typ: u(undefined, r('ArtCraftMaximumTemperature')),
			},
			{ json: 'metal', js: 'metal', typ: u(undefined, r('MetalType')) },
			{
				json: 'minimumRecommendedAge',
				js: 'minimumRecommendedAge',
				typ: u(undefined, r('ArtCraftMinimumRecommendedAge')),
			},
			{ json: 'modelNumber', js: 'modelNumber', typ: u(undefined, '') },
			{ json: 'msrp', js: 'msrp', typ: u(undefined, 3.14) },
			{ json: 'occasion', js: 'occasion', typ: u(undefined, a('')) },
			{ json: 'pattern', js: 'pattern', typ: u(undefined, a('')) },
			{ json: 'pieceCount', js: 'pieceCount', typ: u(undefined, 0) },
			{ json: 'plating', js: 'plating', typ: u(undefined, '') },
			{ json: 'powerType', js: 'powerType', typ: u(undefined, '') },
			{
				json: 'precutFabricSpecialtySize',
				js: 'precutFabricSpecialtySize',
				typ: u(undefined, r('PrecutFabricSpecialtySize')),
			},
			{ json: 'productLine', js: 'productLine', typ: u(undefined, a('')) },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: u(undefined, a('')) },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: '' },
			{ json: 'recommendedSurfaces', js: 'recommendedSurfaces', typ: u(undefined, a('')) },
			{ json: 'recommendedUses', js: 'recommendedUses', typ: u(undefined, a('')) },
			{ json: 'scent', js: 'scent', typ: u(undefined, '') },
			{ json: 'sewingKitType', js: 'sewingKitType', typ: u(undefined, r('SewingKitType')) },
			{ json: 'shape', js: 'shape', typ: u(undefined, '') },
			{ json: 'shortDescription', js: 'shortDescription', typ: '' },
			{ json: 'size', js: 'size', typ: u(undefined, '') },
			{ json: 'skillLevel', js: 'skillLevel', typ: u(undefined, '') },
			{ json: 'smallPartsWarnings', js: 'smallPartsWarnings', typ: a(r('SmallPartsWarningCode')) },
			{ json: 'swatchImages', js: 'swatchImages', typ: u(undefined, a(r('ArtCraftSwatchImage'))) },
			{ json: 'sweingMachineType', js: 'sweingMachineType', typ: u(undefined, r('SewingMachineType')) },
			{ json: 'theme', js: 'theme', typ: u(undefined, a('')) },
			{
				json: 'variantAttributeNames',
				js: 'variantAttributeNames',
				typ: u(undefined, a(r('ArtCraftVariantAttributeName'))),
			},
			{ json: 'variantGroupId', js: 'variantGroupId', typ: u(undefined, '') },
			{ json: 'warrantyText', js: 'warrantyText', typ: u(undefined, '') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: u(undefined, '') },
		],
		false
	),
	ArtCraftAdditionalProductAttribute: o(
		[
			{ json: 'productAttributeName', js: 'productAttributeName', typ: '' },
			{ json: 'productAttributeValue', js: 'productAttributeValue', typ: '' },
		],
		false
	),
	ArtCraftAssembledProductHeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	ArtCraftAssembledProductLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	ArtCraftAssembledProductWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductWeightUnit')) },
		],
		false
	),
	ArtCraftAssembledProductWidth: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	BoltLengthYardage: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('BoltLengthYardageUnit')) },
		],
		false
	),
	ArtCraftDiameter: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('FluffyUnit')) },
		],
		false
	),
	ArtCraftFabricContent: o(
		[
			{ json: 'materialName', js: 'materialName', typ: u(undefined, '') },
			{ json: 'materialPercentage', js: 'materialPercentage', typ: u(undefined, 3.14) },
		],
		false
	),
	ArtCraftMaximumRecommendedAge: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 0) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('MaximumRecommendedAgeUnit')) },
		],
		false
	),
	ArtCraftMaximumTemperature: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('MaximumTemperatureUnit')) },
		],
		false
	),
	ArtCraftMinimumRecommendedAge: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 0) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('MaximumRecommendedAgeUnit')) },
		],
		false
	),
	ArtCraftSwatchImage: o(
		[
			{ json: 'swatchImageUrl', js: 'swatchImageUrl', typ: u(undefined, '') },
			{
				json: 'swatchVariantAttribute',
				js: 'swatchVariantAttribute',
				typ: u(undefined, r('ArtCraftVariantAttributeName')),
			},
		],
		false
	),
	BabyClothing: o(
		[
			{
				json: 'additionalProductAttributes',
				js: 'additionalProductAttributes',
				typ: u(undefined, a(r('BabyClothingAdditionalProductAttribute'))),
			},
			{ json: 'ageGroup', js: 'ageGroup', typ: u(undefined, a(r('BabyClothingAgeGroup'))) },
			{
				json: 'assembledProductHeight',
				js: 'assembledProductHeight',
				typ: u(undefined, r('BabyClothingAssembledProductHeight')),
			},
			{
				json: 'assembledProductLength',
				js: 'assembledProductLength',
				typ: u(undefined, r('BabyClothingAssembledProductLength')),
			},
			{
				json: 'assembledProductWeight',
				js: 'assembledProductWeight',
				typ: u(undefined, r('BabyClothingAssembledProductWeight')),
			},
			{
				json: 'assembledProductWidth',
				js: 'assembledProductWidth',
				typ: u(undefined, r('BabyClothingAssembledProductWidth')),
			},
			{ json: 'athlete', js: 'athlete', typ: u(undefined, a('')) },
			{ json: 'character', js: 'character', typ: u(undefined, a('')) },
			{ json: 'clothingSize', js: 'clothingSize', typ: '' },
			{
				json: 'clothingSizeGroup',
				js: 'clothingSizeGroup',
				typ: u(undefined, r('BabyClothingClothingSizeGroup')),
			},
			{ json: 'color', js: 'color', typ: a('') },
			{ json: 'colorCategory', js: 'colorCategory', typ: u(undefined, a(r('ColorCategory'))) },
			{ json: 'count', js: 'count', typ: u(undefined, '') },
			{ json: 'countPerPack', js: 'countPerPack', typ: u(undefined, 0) },
			{ json: 'countryOfOriginTextiles', js: 'countryOfOriginTextiles', typ: r('CountryOfOriginTextiles') },
			{ json: 'fabricCareInstructions', js: 'fabricCareInstructions', typ: u(undefined, a('')) },
			{ json: 'fabricContent', js: 'fabricContent', typ: u(undefined, a(r('BabyClothingFabricContent'))) },
			{ json: 'features', js: 'features', typ: u(undefined, a('')) },
			{ json: 'gender', js: 'gender', typ: u(undefined, r('BabyClothingGender')) },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: u(undefined, a('')) },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: u(undefined, a('')) },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: '' },
			{ json: 'manufacturer', js: 'manufacturer', typ: '' },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: u(undefined, '') },
			{
				json: 'maximumRecommendedAge',
				js: 'maximumRecommendedAge',
				typ: u(undefined, r('BabyClothingMaximumRecommendedAge')),
			},
			{ json: 'maximumWeight', js: 'maximumWeight', typ: u(undefined, r('BabyClothingMaximumWeight')) },
			{
				json: 'minimumRecommendedAge',
				js: 'minimumRecommendedAge',
				typ: u(undefined, r('BabyClothingMinimumRecommendedAge')),
			},
			{ json: 'minimumWeight', js: 'minimumWeight', typ: u(undefined, r('BabyClothingMinimumWeight')) },
			{ json: 'modelNumber', js: 'modelNumber', typ: u(undefined, '') },
			{ json: 'msrp', js: 'msrp', typ: u(undefined, 3.14) },
			{ json: 'outerwearCoatJacketAnVestType', js: 'outerwearCoatJacketAnVestType', typ: u(undefined, '') },
			{ json: 'pajamaType', js: 'pajamaType', typ: u(undefined, '') },
			{ json: 'pattern', js: 'pattern', typ: u(undefined, a('')) },
			{ json: 'pieceCount', js: 'pieceCount', typ: u(undefined, 0) },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: u(undefined, a('')) },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: '' },
			{ json: 'scent', js: 'scent', typ: u(undefined, '') },
			{ json: 'season', js: 'season', typ: u(undefined, a('')) },
			{ json: 'seasonCode', js: 'seasonCode', typ: u(undefined, r('SeasonCode')) },
			{ json: 'seasonYear', js: 'seasonYear', typ: u(undefined, 0) },
			{ json: 'shoeCategory', js: 'shoeCategory', typ: u(undefined, r('ShoeCategory')) },
			{ json: 'shoeClosure', js: 'shoeClosure', typ: u(undefined, '') },
			{ json: 'shoeSize', js: 'shoeSize', typ: u(undefined, '') },
			{ json: 'shoeStyle', js: 'shoeStyle', typ: u(undefined, '') },
			{ json: 'shoeWidth', js: 'shoeWidth', typ: u(undefined, '') },
			{ json: 'shortDescription', js: 'shortDescription', typ: '' },
			{ json: 'size', js: 'size', typ: u(undefined, '') },
			{ json: 'smallPartsWarnings', js: 'smallPartsWarnings', typ: a(r('SmallPartsWarningCode')) },
			{ json: 'sportsLeague', js: 'sportsLeague', typ: u(undefined, a('')) },
			{ json: 'sportsTeam', js: 'sportsTeam', typ: u(undefined, a('')) },
			{ json: 'swatchImages', js: 'swatchImages', typ: u(undefined, a(r('BabyClothingSwatchImage'))) },
			{ json: 'theme', js: 'theme', typ: u(undefined, a('')) },
			{ json: 'tShirtType', js: 'tShirtType', typ: u(undefined, a('')) },
			{
				json: 'variantAttributeNames',
				js: 'variantAttributeNames',
				typ: u(undefined, a(r('BabyClothingVariantAttributeName'))),
			},
			{ json: 'variantGroupId', js: 'variantGroupId', typ: u(undefined, '') },
		],
		false
	),
	BabyClothingAdditionalProductAttribute: o(
		[
			{ json: 'productAttributeName', js: 'productAttributeName', typ: '' },
			{ json: 'productAttributeValue', js: 'productAttributeValue', typ: '' },
		],
		false
	),
	BabyClothingAssembledProductHeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	BabyClothingAssembledProductLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	BabyClothingAssembledProductWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductWeightUnit')) },
		],
		false
	),
	BabyClothingAssembledProductWidth: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	BabyClothingFabricContent: o(
		[
			{ json: 'materialName', js: 'materialName', typ: u(undefined, '') },
			{ json: 'materialPercentage', js: 'materialPercentage', typ: u(undefined, 3.14) },
		],
		false
	),
	BabyClothingMaximumRecommendedAge: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 0) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('MaximumRecommendedAgeUnit')) },
		],
		false
	),
	BabyClothingMaximumWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('PurpleUnit')) },
		],
		false
	),
	BabyClothingMinimumRecommendedAge: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 0) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('MaximumRecommendedAgeUnit')) },
		],
		false
	),
	BabyClothingMinimumWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductWeightUnit')) },
		],
		false
	),
	BabyClothingSwatchImage: o(
		[
			{ json: 'swatchImageUrl', js: 'swatchImageUrl', typ: u(undefined, '') },
			{
				json: 'swatchVariantAttribute',
				js: 'swatchVariantAttribute',
				typ: u(undefined, r('PurpleSwatchVariantAttribute')),
			},
		],
		false
	),
	BabyDiaperingCareOther: o(
		[
			{
				json: 'additionalProductAttributes',
				js: 'additionalProductAttributes',
				typ: u(undefined, a(r('BabyDiaperingCareOtherAdditionalProductAttribute'))),
			},
			{ json: 'ageGroup', js: 'ageGroup', typ: u(undefined, a(r('BabyDiaperingCareOtherAgeGroup'))) },
			{
				json: 'assembledProductHeight',
				js: 'assembledProductHeight',
				typ: u(undefined, r('BabyDiaperingCareOtherAssembledProductHeight')),
			},
			{
				json: 'assembledProductLength',
				js: 'assembledProductLength',
				typ: u(undefined, r('BabyDiaperingCareOtherAssembledProductLength')),
			},
			{
				json: 'assembledProductWeight',
				js: 'assembledProductWeight',
				typ: u(undefined, r('BabyDiaperingCareOtherAssembledProductWeight')),
			},
			{
				json: 'assembledProductWidth',
				js: 'assembledProductWidth',
				typ: u(undefined, r('BabyDiaperingCareOtherAssembledProductWidth')),
			},
			{ json: 'athlete', js: 'athlete', typ: u(undefined, a('')) },
			{ json: 'babyMonitorType', js: 'babyMonitorType', typ: u(undefined, a('')) },
			{ json: 'bedSize', js: 'bedSize', typ: u(undefined, '') },
			{ json: 'character', js: 'character', typ: u(undefined, a('')) },
			{ json: 'color', js: 'color', typ: u(undefined, a('')) },
			{ json: 'colorCategory', js: 'colorCategory', typ: u(undefined, a(r('ColorCategory'))) },
			{ json: 'count', js: 'count', typ: u(undefined, '') },
			{ json: 'countPerPack', js: 'countPerPack', typ: u(undefined, 0) },
			{ json: 'diaperSize', js: 'diaperSize', typ: u(undefined, '') },
			{ json: 'diaposableBabyDiaperType', js: 'diaposableBabyDiaperType', typ: u(undefined, a('')) },
			{ json: 'fabricCareInstructions', js: 'fabricCareInstructions', typ: u(undefined, a('')) },
			{
				json: 'fabricContent',
				js: 'fabricContent',
				typ: u(undefined, a(r('BabyDiaperingCareOtherFabricContent'))),
			},
			{ json: 'features', js: 'features', typ: u(undefined, a('')) },
			{ json: 'gender', js: 'gender', typ: u(undefined, r('BabyClothingGender')) },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: u(undefined, a('')) },
			{ json: 'ingredients', js: 'ingredients', typ: u(undefined, '') },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: u(undefined, a('')) },
			{ json: 'labelImage', js: 'labelImage', typ: a(r('BabyDiaperingCareOtherLabelImage')) },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: '' },
			{ json: 'manufacturer', js: 'manufacturer', typ: '' },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: u(undefined, '') },
			{ json: 'material', js: 'material', typ: u(undefined, a('')) },
			{
				json: 'maximumRecommendedAge',
				js: 'maximumRecommendedAge',
				typ: u(undefined, r('BabyDiaperingCareOtherMaximumRecommendedAge')),
			},
			{ json: 'maximumWeight', js: 'maximumWeight', typ: u(undefined, r('BabyDiaperingCareOtherMaximumWeight')) },
			{
				json: 'minimumRecommendedAge',
				js: 'minimumRecommendedAge',
				typ: u(undefined, r('BabyDiaperingCareOtherMinimumRecommendedAge')),
			},
			{ json: 'minimumWeight', js: 'minimumWeight', typ: u(undefined, r('BabyDiaperingCareOtherMinimumWeight')) },
			{ json: 'modelNumber', js: 'modelNumber', typ: u(undefined, '') },
			{ json: 'msrp', js: 'msrp', typ: u(undefined, 3.14) },
			{ json: 'pattern', js: 'pattern', typ: u(undefined, a('')) },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: u(undefined, a('')) },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: '' },
			{ json: 'scent', js: 'scent', typ: u(undefined, '') },
			{ json: 'shelfLife', js: 'shelfLife', typ: u(undefined, r('BabyDiaperingCareOtherShelfLife')) },
			{ json: 'shortDescription', js: 'shortDescription', typ: '' },
			{ json: 'size', js: 'size', typ: u(undefined, '') },
			{ json: 'sportsLeague', js: 'sportsLeague', typ: u(undefined, a('')) },
			{ json: 'sportsTeam', js: 'sportsTeam', typ: u(undefined, a('')) },
			{ json: 'swatchImages', js: 'swatchImages', typ: u(undefined, a(r('BabyDiaperingCareOtherSwatchImage'))) },
			{
				json: 'variantAttributeNames',
				js: 'variantAttributeNames',
				typ: u(undefined, a(r('BabyDiaperingCareOtherVariantAttributeName'))),
			},
			{ json: 'variantGroupId', js: 'variantGroupId', typ: u(undefined, '') },
			{ json: 'warrantyText', js: 'warrantyText', typ: u(undefined, '') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: u(undefined, '') },
		],
		false
	),
	BabyDiaperingCareOtherAdditionalProductAttribute: o(
		[
			{ json: 'productAttributeName', js: 'productAttributeName', typ: '' },
			{ json: 'productAttributeValue', js: 'productAttributeValue', typ: '' },
		],
		false
	),
	BabyDiaperingCareOtherAssembledProductHeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	BabyDiaperingCareOtherAssembledProductLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	BabyDiaperingCareOtherAssembledProductWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductWeightUnit')) },
		],
		false
	),
	BabyDiaperingCareOtherAssembledProductWidth: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	BabyDiaperingCareOtherFabricContent: o(
		[
			{ json: 'materialName', js: 'materialName', typ: u(undefined, '') },
			{ json: 'materialPercentage', js: 'materialPercentage', typ: u(undefined, 3.14) },
		],
		false
	),
	BabyDiaperingCareOtherLabelImage: o(
		[
			{ json: 'labelImageContains', js: 'labelImageContains', typ: r('LabelImageContains') },
			{ json: 'labelImageURL', js: 'labelImageURL', typ: '' },
		],
		false
	),
	BabyDiaperingCareOtherMaximumRecommendedAge: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 0) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('MaximumRecommendedAgeUnit')) },
		],
		false
	),
	BabyDiaperingCareOtherMaximumWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('PurpleUnit')) },
		],
		false
	),
	BabyDiaperingCareOtherMinimumRecommendedAge: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 0) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('MaximumRecommendedAgeUnit')) },
		],
		false
	),
	BabyDiaperingCareOtherMinimumWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductWeightUnit')) },
		],
		false
	),
	BabyDiaperingCareOtherShelfLife: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 0) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('ShelfLifeUnit')) },
		],
		false
	),
	BabyDiaperingCareOtherSwatchImage: o(
		[
			{ json: 'swatchImageUrl', js: 'swatchImageUrl', typ: u(undefined, '') },
			{
				json: 'swatchVariantAttribute',
				js: 'swatchVariantAttribute',
				typ: u(undefined, r('BabyDiaperingCareOtherVariantAttributeName')),
			},
		],
		false
	),
	BabyFood: o(
		[
			{
				json: 'additionalProductAttributes',
				js: 'additionalProductAttributes',
				typ: u(undefined, a(r('BabyFoodAdditionalProductAttribute'))),
			},
			{ json: 'ageGroup', js: 'ageGroup', typ: u(undefined, a(r('BabyDiaperingCareOtherAgeGroup'))) },
			{ json: 'babyFoodPackaging', js: 'babyFoodPackaging', typ: u(undefined, '') },
			{ json: 'babyFoodStage', js: 'babyFoodStage', typ: u(undefined, a('')) },
			{ json: 'babyFormulaStage', js: 'babyFormulaStage', typ: u(undefined, a('')) },
			{ json: 'calories', js: 'calories', typ: u(undefined, r('BabyFoodCalories')) },
			{ json: 'caloriesFromFat', js: 'caloriesFromFat', typ: u(undefined, r('BabyFoodCaloriesFromFat')) },
			{ json: 'character', js: 'character', typ: u(undefined, a('')) },
			{ json: 'containerType', js: 'containerType', typ: u(undefined, a('')) },
			{ json: 'count', js: 'count', typ: u(undefined, '') },
			{ json: 'countPerPack', js: 'countPerPack', typ: u(undefined, 0) },
			{ json: 'cuisine', js: 'cuisine', typ: u(undefined, a('')) },
			{ json: 'features', js: 'features', typ: u(undefined, a('')) },
			{ json: 'flavor', js: 'flavor', typ: u(undefined, '') },
			{
				json: 'fluidOuncesSupplying100Calories',
				js: 'fluidOuncesSupplying100Calories',
				typ: u(undefined, r('FluidOuncesSupplying100Calories')),
			},
			{ json: 'foodAllergenStatements', js: 'foodAllergenStatements', typ: u(undefined, a('')) },
			{ json: 'foodForm', js: 'foodForm', typ: u(undefined, '') },
			{ json: 'foodPreparationTips', js: 'foodPreparationTips', typ: u(undefined, a('')) },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: u(undefined, a('')) },
			{ json: 'ingredients', js: 'ingredients', typ: u(undefined, '') },
			{ json: 'instructions', js: 'instructions', typ: u(undefined, '') },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: u(undefined, a('')) },
			{ json: 'labelImage', js: 'labelImage', typ: a(r('BabyFoodLabelImage')) },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: '' },
			{ json: 'manufacturer', js: 'manufacturer', typ: '' },
			{
				json: 'maximumRecommendedAge',
				js: 'maximumRecommendedAge',
				typ: u(undefined, r('BabyFoodMaximumRecommendedAge')),
			},
			{ json: 'meal', js: 'meal', typ: u(undefined, '') },
			{
				json: 'minimumRecommendedAge',
				js: 'minimumRecommendedAge',
				typ: u(undefined, r('BabyFoodMinimumRecommendedAge')),
			},
			{ json: 'msrp', js: 'msrp', typ: u(undefined, 3.14) },
			{ json: 'nutrientFootnote', js: 'nutrientFootnote', typ: u(undefined, '') },
			{ json: 'nutrients', js: 'nutrients', typ: u(undefined, a(r('BabyFoodNutrient'))) },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: u(undefined, a('')) },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: '' },
			{ json: 'safeHandlingInstructions', js: 'safeHandlingInstructions', typ: u(undefined, '') },
			{ json: 'servingSize', js: 'servingSize', typ: u(undefined, '') },
			{ json: 'servingsPerContainer', js: 'servingsPerContainer', typ: u(undefined, 3.14) },
			{ json: 'shelfLife', js: 'shelfLife', typ: u(undefined, r('BabyFoodShelfLife')) },
			{ json: 'shortDescription', js: 'shortDescription', typ: '' },
			{ json: 'size', js: 'size', typ: u(undefined, '') },
			{ json: 'swatchImages', js: 'swatchImages', typ: u(undefined, a(r('BabyFoodSwatchImage'))) },
			{ json: 'totalCarbohydrate', js: 'totalCarbohydrate', typ: u(undefined, r('BabyFoodTotalCarbohydrate')) },
			{
				json: 'totalCarbohydratePercentageDailyValue',
				js: 'totalCarbohydratePercentageDailyValue',
				typ: u(undefined, 3.14),
			},
			{ json: 'totalFat', js: 'totalFat', typ: u(undefined, r('BabyFoodTotalFat')) },
			{ json: 'totalFatPercentageDailyValue', js: 'totalFatPercentageDailyValue', typ: u(undefined, 3.14) },
			{ json: 'totalProtein', js: 'totalProtein', typ: u(undefined, r('BabyFoodTotalProtein')) },
			{
				json: 'totalProteinPercentageDailyValue',
				js: 'totalProteinPercentageDailyValue',
				typ: u(undefined, 3.14),
			},
			{
				json: 'variantAttributeNames',
				js: 'variantAttributeNames',
				typ: u(undefined, a(r('BabyFoodVariantAttributeName'))),
			},
			{ json: 'variantGroupId', js: 'variantGroupId', typ: u(undefined, '') },
		],
		false
	),
	BabyFoodAdditionalProductAttribute: o(
		[
			{ json: 'productAttributeName', js: 'productAttributeName', typ: '' },
			{ json: 'productAttributeValue', js: 'productAttributeValue', typ: '' },
		],
		false
	),
	BabyFoodCalories: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 0) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('CaloriesUnit')) },
		],
		false
	),
	BabyFoodCaloriesFromFat: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 0) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('CaloriesUnit')) },
		],
		false
	),
	FluidOuncesSupplying100Calories: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('FluidOuncesSupplying100CaloriesUnit')) },
		],
		false
	),
	BabyFoodLabelImage: o(
		[
			{ json: 'labelImageContains', js: 'labelImageContains', typ: r('LabelImageContains') },
			{ json: 'labelImageURL', js: 'labelImageURL', typ: '' },
		],
		false
	),
	BabyFoodMaximumRecommendedAge: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 0) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('MaximumRecommendedAgeUnit')) },
		],
		false
	),
	BabyFoodMinimumRecommendedAge: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 0) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('MaximumRecommendedAgeUnit')) },
		],
		false
	),
	BabyFoodNutrient: o(
		[
			{ json: 'nutrientAmount', js: 'nutrientAmount', typ: u(undefined, '') },
			{ json: 'nutrientName', js: 'nutrientName', typ: u(undefined, '') },
			{ json: 'nutrientPercentageDailyValue', js: 'nutrientPercentageDailyValue', typ: u(undefined, '') },
		],
		false
	),
	BabyFoodShelfLife: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 0) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('ShelfLifeUnit')) },
		],
		false
	),
	BabyFoodSwatchImage: o(
		[
			{ json: 'swatchImageUrl', js: 'swatchImageUrl', typ: u(undefined, '') },
			{
				json: 'swatchVariantAttribute',
				js: 'swatchVariantAttribute',
				typ: u(undefined, r('BabyFoodVariantAttributeName')),
			},
		],
		false
	),
	BabyFoodTotalCarbohydrate: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('TotalCarbohydrateUnit')) },
		],
		false
	),
	BabyFoodTotalFat: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('TotalCarbohydrateUnit')) },
		],
		false
	),
	BabyFoodTotalProtein: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('TotalCarbohydrateUnit')) },
		],
		false
	),
	BabyFurniture: o(
		[
			{
				json: 'additionalProductAttributes',
				js: 'additionalProductAttributes',
				typ: u(undefined, a(r('BabyFurnitureAdditionalProductAttribute'))),
			},
			{ json: 'ageGroup', js: 'ageGroup', typ: u(undefined, a(r('ArtCraftAgeGroup'))) },
			{
				json: 'assembledProductHeight',
				js: 'assembledProductHeight',
				typ: u(undefined, r('BabyFurnitureAssembledProductHeight')),
			},
			{
				json: 'assembledProductLength',
				js: 'assembledProductLength',
				typ: u(undefined, r('BabyFurnitureAssembledProductLength')),
			},
			{
				json: 'assembledProductWeight',
				js: 'assembledProductWeight',
				typ: u(undefined, r('BabyFurnitureAssembledProductWeight')),
			},
			{
				json: 'assembledProductWidth',
				js: 'assembledProductWidth',
				typ: u(undefined, r('BabyFurnitureAssembledProductWidth')),
			},
			{ json: 'assemblyInstructions', js: 'assemblyInstructions', typ: u(undefined, '') },
			{ json: 'athlete', js: 'athlete', typ: u(undefined, a('')) },
			{ json: 'babyCribType', js: 'babyCribType', typ: u(undefined, r('BabyCribType')) },
			{ json: 'bedSize', js: 'bedSize', typ: u(undefined, '') },
			{ json: 'character', js: 'character', typ: u(undefined, a('')) },
			{ json: 'collection', js: 'collection', typ: u(undefined, '') },
			{ json: 'color', js: 'color', typ: u(undefined, a('')) },
			{ json: 'colorCategory', js: 'colorCategory', typ: u(undefined, a(r('ColorCategory'))) },
			{
				json: 'compositeWoodCertificationCode',
				js: 'compositeWoodCertificationCode',
				typ: r('CompositeWoodCertificationCode'),
			},
			{ json: 'count', js: 'count', typ: u(undefined, '') },
			{ json: 'countPerPack', js: 'countPerPack', typ: u(undefined, 0) },
			{ json: 'countryOfOriginTextiles', js: 'countryOfOriginTextiles', typ: r('CountryOfOriginTextiles') },
			{ json: 'fabricCareInstructions', js: 'fabricCareInstructions', typ: u(undefined, a('')) },
			{ json: 'fabricContent', js: 'fabricContent', typ: u(undefined, a(r('BabyFurnitureFabricContent'))) },
			{ json: 'features', js: 'features', typ: u(undefined, a('')) },
			{ json: 'fillMaterial', js: 'fillMaterial', typ: u(undefined, a('')) },
			{ json: 'finish', js: 'finish', typ: u(undefined, '') },
			{ json: 'gender', js: 'gender', typ: u(undefined, r('BabyClothingGender')) },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: u(undefined, a('')) },
			{ json: 'homeDecorStyle', js: 'homeDecorStyle', typ: u(undefined, '') },
			{ json: 'isAssemblyRequired', js: 'isAssemblyRequired', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isFoldable', js: 'isFoldable', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isWheeled', js: 'isWheeled', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: u(undefined, a('')) },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: '' },
			{ json: 'manufacturer', js: 'manufacturer', typ: '' },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: u(undefined, '') },
			{ json: 'material', js: 'material', typ: u(undefined, a('')) },
			{ json: 'mattressFirmness', js: 'mattressFirmness', typ: u(undefined, '') },
			{
				json: 'maximumRecommendedAge',
				js: 'maximumRecommendedAge',
				typ: u(undefined, r('BabyFurnitureMaximumRecommendedAge')),
			},
			{ json: 'maximumWeight', js: 'maximumWeight', typ: u(undefined, r('BabyFurnitureMaximumWeight')) },
			{
				json: 'minimumRecommendedAge',
				js: 'minimumRecommendedAge',
				typ: u(undefined, r('BabyFurnitureMinimumRecommendedAge')),
			},
			{ json: 'minimumWeight', js: 'minimumWeight', typ: u(undefined, r('BabyFurnitureMinimumWeight')) },
			{ json: 'modelNumber', js: 'modelNumber', typ: u(undefined, '') },
			{ json: 'msrp', js: 'msrp', typ: u(undefined, 3.14) },
			{ json: 'pattern', js: 'pattern', typ: u(undefined, a('')) },
			{ json: 'pieceCount', js: 'pieceCount', typ: u(undefined, 0) },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: u(undefined, a('')) },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: '' },
			{ json: 'shape', js: 'shape', typ: u(undefined, '') },
			{ json: 'shortDescription', js: 'shortDescription', typ: '' },
			{ json: 'size', js: 'size', typ: u(undefined, '') },
			{ json: 'sportsLeague', js: 'sportsLeague', typ: u(undefined, a('')) },
			{ json: 'sportsTeam', js: 'sportsTeam', typ: u(undefined, a('')) },
			{ json: 'swatchImages', js: 'swatchImages', typ: u(undefined, a(r('BabyFurnitureSwatchImage'))) },
			{
				json: 'variantAttributeNames',
				js: 'variantAttributeNames',
				typ: u(undefined, a(r('BabyFurnitureVariantAttributeName'))),
			},
			{ json: 'variantGroupId', js: 'variantGroupId', typ: u(undefined, '') },
			{ json: 'warrantyText', js: 'warrantyText', typ: u(undefined, '') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: u(undefined, '') },
		],
		false
	),
	BabyFurnitureAdditionalProductAttribute: o(
		[
			{ json: 'productAttributeName', js: 'productAttributeName', typ: '' },
			{ json: 'productAttributeValue', js: 'productAttributeValue', typ: '' },
		],
		false
	),
	BabyFurnitureAssembledProductHeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	BabyFurnitureAssembledProductLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	BabyFurnitureAssembledProductWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductWeightUnit')) },
		],
		false
	),
	BabyFurnitureAssembledProductWidth: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	BabyFurnitureFabricContent: o(
		[
			{ json: 'materialName', js: 'materialName', typ: u(undefined, '') },
			{ json: 'materialPercentage', js: 'materialPercentage', typ: u(undefined, 3.14) },
		],
		false
	),
	BabyFurnitureMaximumRecommendedAge: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 0) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('MaximumRecommendedAgeUnit')) },
		],
		false
	),
	BabyFurnitureMaximumWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('PurpleUnit')) },
		],
		false
	),
	BabyFurnitureMinimumRecommendedAge: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 0) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('MaximumRecommendedAgeUnit')) },
		],
		false
	),
	BabyFurnitureMinimumWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductWeightUnit')) },
		],
		false
	),
	BabyFurnitureSwatchImage: o(
		[
			{ json: 'swatchImageUrl', js: 'swatchImageUrl', typ: u(undefined, '') },
			{
				json: 'swatchVariantAttribute',
				js: 'swatchVariantAttribute',
				typ: u(undefined, r('BabyFurnitureVariantAttributeName')),
			},
		],
		false
	),
	BabyToys: o(
		[
			{
				json: 'additionalProductAttributes',
				js: 'additionalProductAttributes',
				typ: u(undefined, a(r('BabyToysAdditionalProductAttribute'))),
			},
			{ json: 'animalType', js: 'animalType', typ: u(undefined, '') },
			{
				json: 'assembledProductHeight',
				js: 'assembledProductHeight',
				typ: u(undefined, r('BabyToysAssembledProductHeight')),
			},
			{
				json: 'assembledProductLength',
				js: 'assembledProductLength',
				typ: u(undefined, r('BabyToysAssembledProductLength')),
			},
			{
				json: 'assembledProductWeight',
				js: 'assembledProductWeight',
				typ: u(undefined, r('BabyToysAssembledProductWeight')),
			},
			{
				json: 'assembledProductWidth',
				js: 'assembledProductWidth',
				typ: u(undefined, r('BabyToysAssembledProductWidth')),
			},
			{ json: 'assemblyInstructions', js: 'assemblyInstructions', typ: u(undefined, '') },
			{ json: 'athlete', js: 'athlete', typ: u(undefined, a('')) },
			{ json: 'awardsWon', js: 'awardsWon', typ: u(undefined, a('')) },
			{ json: 'character', js: 'character', typ: u(undefined, a('')) },
			{ json: 'color', js: 'color', typ: u(undefined, a('')) },
			{ json: 'colorCategory', js: 'colorCategory', typ: u(undefined, a(r('ColorCategory'))) },
			{
				json: 'compositeWoodCertificationCode',
				js: 'compositeWoodCertificationCode',
				typ: r('CompositeWoodCertificationCode'),
			},
			{ json: 'count', js: 'count', typ: u(undefined, '') },
			{ json: 'countPerPack', js: 'countPerPack', typ: u(undefined, 0) },
			{ json: 'educationalFocus', js: 'educationalFocus', typ: u(undefined, a('')) },
			{ json: 'fabricCareInstructions', js: 'fabricCareInstructions', typ: u(undefined, a('')) },
			{ json: 'fabricContent', js: 'fabricContent', typ: u(undefined, a(r('BabyToysFabricContent'))) },
			{ json: 'features', js: 'features', typ: u(undefined, a('')) },
			{ json: 'gender', js: 'gender', typ: u(undefined, r('BabyClothingGender')) },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: u(undefined, a('')) },
			{ json: 'isAssemblyRequired', js: 'isAssemblyRequired', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPowered', js: 'isPowered', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: u(undefined, a('')) },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: '' },
			{ json: 'makesNoise', js: 'makesNoise', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'manufacturer', js: 'manufacturer', typ: '' },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: u(undefined, '') },
			{ json: 'material', js: 'material', typ: u(undefined, a('')) },
			{
				json: 'maximumRecommendedAge',
				js: 'maximumRecommendedAge',
				typ: u(undefined, r('BabyToysMaximumRecommendedAge')),
			},
			{ json: 'maximumWeight', js: 'maximumWeight', typ: u(undefined, r('BabyToysMaximumWeight')) },
			{
				json: 'minimumRecommendedAge',
				js: 'minimumRecommendedAge',
				typ: u(undefined, r('BabyToysMinimumRecommendedAge')),
			},
			{ json: 'minimumWeight', js: 'minimumWeight', typ: u(undefined, r('BabyToysMinimumWeight')) },
			{ json: 'modelNumber', js: 'modelNumber', typ: u(undefined, '') },
			{ json: 'msrp', js: 'msrp', typ: u(undefined, 3.14) },
			{ json: 'pattern', js: 'pattern', typ: u(undefined, a('')) },
			{ json: 'pieceCount', js: 'pieceCount', typ: u(undefined, 0) },
			{ json: 'powerType', js: 'powerType', typ: u(undefined, '') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: u(undefined, a('')) },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: '' },
			{ json: 'scent', js: 'scent', typ: u(undefined, '') },
			{ json: 'screenSize', js: 'screenSize', typ: u(undefined, r('BabyToysScreenSize')) },
			{ json: 'season', js: 'season', typ: u(undefined, a('')) },
			{ json: 'shortDescription', js: 'shortDescription', typ: '' },
			{ json: 'size', js: 'size', typ: u(undefined, '') },
			{ json: 'smallPartsWarnings', js: 'smallPartsWarnings', typ: a(r('SmallPartsWarningCode')) },
			{ json: 'sportsLeague', js: 'sportsLeague', typ: u(undefined, a('')) },
			{ json: 'sportsTeam', js: 'sportsTeam', typ: u(undefined, a('')) },
			{ json: 'swatchImages', js: 'swatchImages', typ: u(undefined, a(r('BabyToysSwatchImage'))) },
			{ json: 'theme', js: 'theme', typ: u(undefined, a('')) },
			{
				json: 'variantAttributeNames',
				js: 'variantAttributeNames',
				typ: u(undefined, a(r('BabyToysVariantAttributeName'))),
			},
			{ json: 'variantGroupId', js: 'variantGroupId', typ: u(undefined, '') },
			{ json: 'warrantyText', js: 'warrantyText', typ: u(undefined, '') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: u(undefined, '') },
		],
		false
	),
	BabyToysAdditionalProductAttribute: o(
		[
			{ json: 'productAttributeName', js: 'productAttributeName', typ: '' },
			{ json: 'productAttributeValue', js: 'productAttributeValue', typ: '' },
		],
		false
	),
	BabyToysAssembledProductHeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	BabyToysAssembledProductLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	BabyToysAssembledProductWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductWeightUnit')) },
		],
		false
	),
	BabyToysAssembledProductWidth: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	BabyToysFabricContent: o(
		[
			{ json: 'materialName', js: 'materialName', typ: u(undefined, '') },
			{ json: 'materialPercentage', js: 'materialPercentage', typ: u(undefined, 3.14) },
		],
		false
	),
	BabyToysMaximumRecommendedAge: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 0) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('MaximumRecommendedAgeUnit')) },
		],
		false
	),
	BabyToysMaximumWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('PurpleUnit')) },
		],
		false
	),
	BabyToysMinimumRecommendedAge: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 0) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('MaximumRecommendedAgeUnit')) },
		],
		false
	),
	BabyToysMinimumWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductWeightUnit')) },
		],
		false
	),
	BabyToysScreenSize: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('ScreenSizeUnit')) },
		],
		false
	),
	BabyToysSwatchImage: o(
		[
			{ json: 'swatchImageUrl', js: 'swatchImageUrl', typ: u(undefined, '') },
			{
				json: 'swatchVariantAttribute',
				js: 'swatchVariantAttribute',
				typ: u(undefined, r('BabyToysVariantAttributeName')),
			},
		],
		false
	),
	BabyTransport: o(
		[
			{
				json: 'additionalProductAttributes',
				js: 'additionalProductAttributes',
				typ: u(undefined, a(r('BabyTransportAdditionalProductAttribute'))),
			},
			{ json: 'ageGroup', js: 'ageGroup', typ: u(undefined, a(r('ArtCraftAgeGroup'))) },
			{
				json: 'assembledProductHeight',
				js: 'assembledProductHeight',
				typ: u(undefined, r('BabyTransportAssembledProductHeight')),
			},
			{
				json: 'assembledProductLength',
				js: 'assembledProductLength',
				typ: u(undefined, r('BabyTransportAssembledProductLength')),
			},
			{
				json: 'assembledProductWeight',
				js: 'assembledProductWeight',
				typ: u(undefined, r('BabyTransportAssembledProductWeight')),
			},
			{
				json: 'assembledProductWidth',
				js: 'assembledProductWidth',
				typ: u(undefined, r('BabyTransportAssembledProductWidth')),
			},
			{ json: 'assemblyInstructions', js: 'assemblyInstructions', typ: u(undefined, '') },
			{ json: 'athlete', js: 'athlete', typ: u(undefined, a('')) },
			{ json: 'babyCarrierPosition', js: 'babyCarrierPosition', typ: u(undefined, a('')) },
			{ json: 'babyCarrierStyle', js: 'babyCarrierStyle', typ: u(undefined, a('')) },
			{ json: 'carSeatBaseDepth', js: 'carSeatBaseDepth', typ: u(undefined, r('CarSeatBaseDepth')) },
			{ json: 'carSeatBaseWidth', js: 'carSeatBaseWidth', typ: u(undefined, r('CarSeatBaseWidth')) },
			{
				json: 'carSeatMaxChildHeight',
				js: 'carSeatMaxChildHeight',
				typ: u(undefined, r('CarSeatMaxChildHeight')),
			},
			{ json: 'character', js: 'character', typ: u(undefined, a('')) },
			{ json: 'childCarSeatType', js: 'childCarSeatType', typ: u(undefined, r('ChildCarSeatStyle')) },
			{ json: 'childWalkingHarnessStyle', js: 'childWalkingHarnessStyle', typ: u(undefined, '') },
			{ json: 'color', js: 'color', typ: u(undefined, a('')) },
			{ json: 'colorCategory', js: 'colorCategory', typ: u(undefined, a(r('ColorCategory'))) },
			{ json: 'count', js: 'count', typ: u(undefined, '') },
			{ json: 'countPerPack', js: 'countPerPack', typ: u(undefined, 0) },
			{ json: 'countryOfOriginTextiles', js: 'countryOfOriginTextiles', typ: r('CountryOfOriginTextiles') },
			{ json: 'fabricCareInstructions', js: 'fabricCareInstructions', typ: u(undefined, a('')) },
			{ json: 'fabricContent', js: 'fabricContent', typ: u(undefined, a(r('BabyTransportFabricContent'))) },
			{ json: 'facingDirection', js: 'facingDirection', typ: u(undefined, '') },
			{ json: 'features', js: 'features', typ: u(undefined, a('')) },
			{
				json: 'forwardFacingMaximumWeight',
				js: 'forwardFacingMaximumWeight',
				typ: u(undefined, r('ForwardFacingMaximumWeight')),
			},
			{
				json: 'forwardFacingMinimumWeight',
				js: 'forwardFacingMinimumWeight',
				typ: u(undefined, r('ForwardFacingMinimumWeight')),
			},
			{ json: 'gender', js: 'gender', typ: u(undefined, r('BabyClothingGender')) },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: u(undefined, a('')) },
			{ json: 'hasLatchSystem', js: 'hasLatchSystem', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isAssemblyRequired', js: 'isAssemblyRequired', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isFoldable', js: 'isFoldable', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isWheeled', js: 'isWheeled', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: u(undefined, a('')) },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: '' },
			{ json: 'manufacturer', js: 'manufacturer', typ: '' },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: u(undefined, '') },
			{ json: 'material', js: 'material', typ: u(undefined, a('')) },
			{
				json: 'maximumRecommendedAge',
				js: 'maximumRecommendedAge',
				typ: u(undefined, r('BabyTransportMaximumRecommendedAge')),
			},
			{ json: 'maximumWeight', js: 'maximumWeight', typ: u(undefined, r('BabyTransportMaximumWeight')) },
			{
				json: 'minimumRecommendedAge',
				js: 'minimumRecommendedAge',
				typ: u(undefined, r('BabyTransportMinimumRecommendedAge')),
			},
			{ json: 'minimumWeight', js: 'minimumWeight', typ: u(undefined, r('BabyTransportMinimumWeight')) },
			{ json: 'modelNumber', js: 'modelNumber', typ: u(undefined, '') },
			{ json: 'msrp', js: 'msrp', typ: u(undefined, 3.14) },
			{ json: 'pattern', js: 'pattern', typ: u(undefined, a('')) },
			{ json: 'pieceCount', js: 'pieceCount', typ: u(undefined, 0) },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: u(undefined, a('')) },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: '' },
			{
				json: 'rearFacingMaximumWeight',
				js: 'rearFacingMaximumWeight',
				typ: u(undefined, r('RearFacingMaximumWeight')),
			},
			{
				json: 'rearFacingMinimumWeight',
				js: 'rearFacingMinimumWeight',
				typ: u(undefined, r('RearFacingMinimumWeight')),
			},
			{ json: 'safetyHarnessStyle', js: 'safetyHarnessStyle', typ: u(undefined, r('SafetyHarnessStyle')) },
			{ json: 'seatingCapacity', js: 'seatingCapacity', typ: u(undefined, 0) },
			{ json: 'shortDescription', js: 'shortDescription', typ: '' },
			{ json: 'size', js: 'size', typ: u(undefined, '') },
			{ json: 'sportsLeague', js: 'sportsLeague', typ: u(undefined, a('')) },
			{ json: 'sportsTeam', js: 'sportsTeam', typ: u(undefined, a('')) },
			{ json: 'strollerType', js: 'strollerType', typ: u(undefined, a('')) },
			{ json: 'swatchImages', js: 'swatchImages', typ: u(undefined, a(r('BabyTransportSwatchImage'))) },
			{ json: 'travelSystemCompatibility', js: 'travelSystemCompatibility', typ: u(undefined, '') },
			{
				json: 'variantAttributeNames',
				js: 'variantAttributeNames',
				typ: u(undefined, a(r('BabyTransportVariantAttributeName'))),
			},
			{ json: 'variantGroupId', js: 'variantGroupId', typ: u(undefined, '') },
			{ json: 'warrantyText', js: 'warrantyText', typ: u(undefined, '') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: u(undefined, '') },
		],
		false
	),
	BabyTransportAdditionalProductAttribute: o(
		[
			{ json: 'productAttributeName', js: 'productAttributeName', typ: '' },
			{ json: 'productAttributeValue', js: 'productAttributeValue', typ: '' },
		],
		false
	),
	BabyTransportAssembledProductHeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	BabyTransportAssembledProductLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	BabyTransportAssembledProductWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductWeightUnit')) },
		],
		false
	),
	BabyTransportAssembledProductWidth: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	CarSeatBaseDepth: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('CarSeatBaseDepthUnit')) },
		],
		false
	),
	CarSeatBaseWidth: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('CarSeatBaseDepthUnit')) },
		],
		false
	),
	CarSeatMaxChildHeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('CarSeatBaseDepthUnit')) },
		],
		false
	),
	BabyTransportFabricContent: o(
		[
			{ json: 'materialName', js: 'materialName', typ: u(undefined, '') },
			{ json: 'materialPercentage', js: 'materialPercentage', typ: u(undefined, 3.14) },
		],
		false
	),
	ForwardFacingMaximumWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('ForwardFacingMaximumWeightUnit')) },
		],
		false
	),
	ForwardFacingMinimumWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('ForwardFacingMaximumWeightUnit')) },
		],
		false
	),
	BabyTransportMaximumRecommendedAge: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 0) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('MaximumRecommendedAgeUnit')) },
		],
		false
	),
	BabyTransportMaximumWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('PurpleUnit')) },
		],
		false
	),
	BabyTransportMinimumRecommendedAge: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 0) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('MaximumRecommendedAgeUnit')) },
		],
		false
	),
	BabyTransportMinimumWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductWeightUnit')) },
		],
		false
	),
	RearFacingMaximumWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('ForwardFacingMaximumWeightUnit')) },
		],
		false
	),
	RearFacingMinimumWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('ForwardFacingMaximumWeightUnit')) },
		],
		false
	),
	BabyTransportSwatchImage: o(
		[
			{ json: 'swatchImageUrl', js: 'swatchImageUrl', typ: u(undefined, '') },
			{
				json: 'swatchVariantAttribute',
				js: 'swatchVariantAttribute',
				typ: u(undefined, r('BabyTransportVariantAttributeName')),
			},
		],
		false
	),
	BeautyPersonalCareHygiene: o(
		[
			{ json: 'absorbency', js: 'absorbency', typ: u(undefined, '') },
			{
				json: 'activeIngredients',
				js: 'activeIngredients',
				typ: u(undefined, a(r('BeautyPersonalCareHygieneActiveIngredient'))),
			},
			{
				json: 'additionalProductAttributes',
				js: 'additionalProductAttributes',
				typ: u(undefined, a(r('BeautyPersonalCareHygieneAdditionalProductAttribute'))),
			},
			{ json: 'ageGroup', js: 'ageGroup', typ: u(undefined, a(r('ArtCraftAgeGroup'))) },
			{
				json: 'assembledProductHeight',
				js: 'assembledProductHeight',
				typ: u(undefined, r('BeautyPersonalCareHygieneAssembledProductHeight')),
			},
			{
				json: 'assembledProductLength',
				js: 'assembledProductLength',
				typ: u(undefined, r('BeautyPersonalCareHygieneAssembledProductLength')),
			},
			{
				json: 'assembledProductWeight',
				js: 'assembledProductWeight',
				typ: u(undefined, r('BeautyPersonalCareHygieneAssembledProductWeight')),
			},
			{
				json: 'assembledProductWidth',
				js: 'assembledProductWidth',
				typ: u(undefined, r('BeautyPersonalCareHygieneAssembledProductWidth')),
			},
			{ json: 'athlete', js: 'athlete', typ: u(undefined, a('')) },
			{ json: 'batteriesRequired', js: 'batteriesRequired', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'bodyParts', js: 'bodyParts', typ: u(undefined, a('')) },
			{ json: 'bodySprayType', js: 'bodySprayType', typ: u(undefined, r('BodySprayType')) },
			{ json: 'cleaningCareAndMaintenance', js: 'cleaningCareAndMaintenance', typ: u(undefined, '') },
			{ json: 'collection', js: 'collection', typ: u(undefined, '') },
			{ json: 'color', js: 'color', typ: u(undefined, a('')) },
			{ json: 'colorCategory', js: 'colorCategory', typ: u(undefined, a(r('ColorCategory'))) },
			{ json: 'compatibleBrands', js: 'compatibleBrands', typ: u(undefined, a('')) },
			{ json: 'count', js: 'count', typ: u(undefined, '') },
			{ json: 'countPerPack', js: 'countPerPack', typ: u(undefined, 0) },
			{
				json: 'drugActiveInactiveIngredientsImage',
				js: 'drugActiveInactiveIngredientsImage',
				typ: u(undefined, ''),
			},
			{ json: 'drugDosageInstructionsImage', js: 'drugDosageInstructionsImage', typ: u(undefined, '') },
			{ json: 'features', js: 'features', typ: u(undefined, a('')) },
			{ json: 'flavor', js: 'flavor', typ: u(undefined, '') },
			{ json: 'form', js: 'form', typ: u(undefined, '') },
			{ json: 'gender', js: 'gender', typ: u(undefined, r('BabyClothingGender')) },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: u(undefined, a('')) },
			{ json: 'hairCareKeyBenefit', js: 'hairCareKeyBenefit', typ: u(undefined, a(r('HairCareKeyBenefit'))) },
			{ json: 'hairColorCategory', js: 'hairColorCategory', typ: u(undefined, r('HairColorCategory')) },
			{ json: 'hairProductForm', js: 'hairProductForm', typ: u(undefined, r('HairProductForm')) },
			{ json: 'hairType', js: 'hairType', typ: u(undefined, '') },
			{ json: 'inactiveIngredients', js: 'inactiveIngredients', typ: u(undefined, a('')) },
			{ json: 'ingredients', js: 'ingredients', typ: u(undefined, '') },
			{ json: 'instructions', js: 'instructions', typ: u(undefined, '') },
			{ json: 'isAdultProduct', js: 'isAdultProduct', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isControlledSubstance', js: 'isControlledSubstance', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isDisposable', js: 'isDisposable', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isHypoallergenic', js: 'isHypoallergenic', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isNoncomodegenic', js: 'isNoncomodegenic', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPortable', js: 'isPortable', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPowered', js: 'isPowered', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isReusable', js: 'isReusable', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isSelfTanning', js: 'isSelfTanning', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isSet', js: 'isSet', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isTinted', js: 'isTinted', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isTravelSize', js: 'isTravelSize', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isUnscented', js: 'isUnscented', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isWaterproof', js: 'isWaterproof', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: u(undefined, a('')) },
			{ json: 'labelImage', js: 'labelImage', typ: a(r('BeautyPersonalCareHygieneLabelImage')) },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: '' },
			{ json: 'makeupForm', js: 'makeupForm', typ: u(undefined, a(r('MakeupForm'))) },
			{ json: 'manufacturer', js: 'manufacturer', typ: '' },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: u(undefined, '') },
			{ json: 'material', js: 'material', typ: u(undefined, a('')) },
			{ json: 'medicineStrength', js: 'medicineStrength', typ: u(undefined, '') },
			{ json: 'modelNumber', js: 'modelNumber', typ: u(undefined, '') },
			{ json: 'msrp', js: 'msrp', typ: u(undefined, 3.14) },
			{ json: 'perfumeCologneType', js: 'perfumeCologneType', typ: u(undefined, r('PerfumeCologneType')) },
			{ json: 'pieceCount', js: 'pieceCount', typ: u(undefined, 0) },
			{ json: 'powerType', js: 'powerType', typ: u(undefined, '') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: u(undefined, a('')) },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: '' },
			{ json: 'recommendedUses', js: 'recommendedUses', typ: u(undefined, a('')) },
			{ json: 'resultTime', js: 'resultTime', typ: u(undefined, r('ResultTime')) },
			{ json: 'scent', js: 'scent', typ: u(undefined, '') },
			{ json: 'shortDescription', js: 'shortDescription', typ: '' },
			{ json: 'size', js: 'size', typ: u(undefined, '') },
			{ json: 'skinCareConcern', js: 'skinCareConcern', typ: u(undefined, a('')) },
			{ json: 'skinTone', js: 'skinTone', typ: u(undefined, '') },
			{ json: 'skinType', js: 'skinType', typ: u(undefined, '') },
			{ json: 'spfValue', js: 'spfValue', typ: u(undefined, 0) },
			{ json: 'sportsLeague', js: 'sportsLeague', typ: u(undefined, a('')) },
			{ json: 'sportsTeam', js: 'sportsTeam', typ: u(undefined, a('')) },
			{ json: 'stopUseIndications', js: 'stopUseIndications', typ: u(undefined, a('')) },
			{
				json: 'swatchImages',
				js: 'swatchImages',
				typ: u(undefined, a(r('BeautyPersonalCareHygieneSwatchImage'))),
			},
			{
				json: 'variantAttributeNames',
				js: 'variantAttributeNames',
				typ: u(undefined, a(r('BeautyPersonalCareHygieneVariantAttributeName'))),
			},
			{ json: 'variantGroupId', js: 'variantGroupId', typ: u(undefined, '') },
			{ json: 'wigCapStyle', js: 'wigCapStyle', typ: u(undefined, r('WigCapStyle')) },
		],
		false
	),
	BeautyPersonalCareHygieneActiveIngredient: o(
		[
			{ json: 'activeIngredientName', js: 'activeIngredientName', typ: u(undefined, '') },
			{ json: 'activeIngredientPercentage', js: 'activeIngredientPercentage', typ: u(undefined, 3.14) },
		],
		false
	),
	BeautyPersonalCareHygieneAdditionalProductAttribute: o(
		[
			{ json: 'productAttributeName', js: 'productAttributeName', typ: '' },
			{ json: 'productAttributeValue', js: 'productAttributeValue', typ: '' },
		],
		false
	),
	BeautyPersonalCareHygieneAssembledProductHeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	BeautyPersonalCareHygieneAssembledProductLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	BeautyPersonalCareHygieneAssembledProductWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductWeightUnit')) },
		],
		false
	),
	BeautyPersonalCareHygieneAssembledProductWidth: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	BeautyPersonalCareHygieneLabelImage: o(
		[
			{ json: 'labelImageContains', js: 'labelImageContains', typ: r('LabelImageContains') },
			{ json: 'labelImageURL', js: 'labelImageURL', typ: '' },
		],
		false
	),
	ResultTime: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 0) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('ResultTimeUnit')) },
		],
		false
	),
	BeautyPersonalCareHygieneSwatchImage: o(
		[
			{ json: 'swatchImageUrl', js: 'swatchImageUrl', typ: u(undefined, '') },
			{
				json: 'swatchVariantAttribute',
				js: 'swatchVariantAttribute',
				typ: u(undefined, r('BeautyPersonalCareHygieneVariantAttributeName')),
			},
		],
		false
	),
	Bedding: o(
		[
			{
				json: 'additionalProductAttributes',
				js: 'additionalProductAttributes',
				typ: u(undefined, a(r('BeddingAdditionalProductAttribute'))),
			},
			{ json: 'ageGroup', js: 'ageGroup', typ: u(undefined, a(r('ArtCraftAgeGroup'))) },
			{
				json: 'assembledProductHeight',
				js: 'assembledProductHeight',
				typ: u(undefined, r('BeddingAssembledProductHeight')),
			},
			{
				json: 'assembledProductLength',
				js: 'assembledProductLength',
				typ: u(undefined, r('BeddingAssembledProductLength')),
			},
			{
				json: 'assembledProductWeight',
				js: 'assembledProductWeight',
				typ: u(undefined, r('BeddingAssembledProductWeight')),
			},
			{
				json: 'assembledProductWidth',
				js: 'assembledProductWidth',
				typ: u(undefined, r('BeddingAssembledProductWidth')),
			},
			{ json: 'athlete', js: 'athlete', typ: u(undefined, a('')) },
			{ json: 'bedPillowSize', js: 'bedPillowSize', typ: u(undefined, a('')) },
			{ json: 'bedSize', js: 'bedSize', typ: u(undefined, '') },
			{ json: 'bedStyle', js: 'bedStyle', typ: u(undefined, '') },
			{ json: 'character', js: 'character', typ: u(undefined, a('')) },
			{ json: 'collection', js: 'collection', typ: u(undefined, '') },
			{ json: 'color', js: 'color', typ: u(undefined, a('')) },
			{ json: 'colorCategory', js: 'colorCategory', typ: u(undefined, a(r('ColorCategory'))) },
			{ json: 'count', js: 'count', typ: u(undefined, '') },
			{ json: 'countPerPack', js: 'countPerPack', typ: u(undefined, 0) },
			{ json: 'countryOfOriginTextiles', js: 'countryOfOriginTextiles', typ: r('CountryOfOriginTextiles') },
			{ json: 'fabricCareInstructions', js: 'fabricCareInstructions', typ: u(undefined, a('')) },
			{ json: 'fabricContent', js: 'fabricContent', typ: u(undefined, a(r('BeddingFabricContent'))) },
			{ json: 'features', js: 'features', typ: u(undefined, a('')) },
			{ json: 'fillMaterial', js: 'fillMaterial', typ: u(undefined, a('')) },
			{ json: 'gender', js: 'gender', typ: u(undefined, r('ArtCraftGender')) },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: u(undefined, a('')) },
			{ json: 'homeDecorStyle', js: 'homeDecorStyle', typ: u(undefined, '') },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isSet', js: 'isSet', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: u(undefined, a('')) },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: '' },
			{ json: 'manufacturer', js: 'manufacturer', typ: '' },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: u(undefined, '') },
			{ json: 'material', js: 'material', typ: u(undefined, a('')) },
			{ json: 'mattressFirmness', js: 'mattressFirmness', typ: u(undefined, '') },
			{ json: 'modelNumber', js: 'modelNumber', typ: u(undefined, '') },
			{ json: 'monogramLetter', js: 'monogramLetter', typ: u(undefined, '') },
			{ json: 'msrp', js: 'msrp', typ: u(undefined, 3.14) },
			{ json: 'occasion', js: 'occasion', typ: u(undefined, a('')) },
			{ json: 'pattern', js: 'pattern', typ: u(undefined, a('')) },
			{ json: 'pieceCount', js: 'pieceCount', typ: u(undefined, 0) },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: u(undefined, a('')) },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: '' },
			{ json: 'shape', js: 'shape', typ: u(undefined, '') },
			{ json: 'shortDescription', js: 'shortDescription', typ: '' },
			{ json: 'size', js: 'size', typ: u(undefined, '') },
			{ json: 'smallPartsWarnings', js: 'smallPartsWarnings', typ: a(r('SmallPartsWarningCode')) },
			{ json: 'sportsLeague', js: 'sportsLeague', typ: u(undefined, a('')) },
			{ json: 'sportsTeam', js: 'sportsTeam', typ: u(undefined, a('')) },
			{ json: 'swatchImages', js: 'swatchImages', typ: u(undefined, a(r('BeddingSwatchImage'))) },
			{ json: 'theme', js: 'theme', typ: u(undefined, a('')) },
			{ json: 'threadCount', js: 'threadCount', typ: u(undefined, 0) },
			{
				json: 'variantAttributeNames',
				js: 'variantAttributeNames',
				typ: u(undefined, a(r('BeddingVariantAttributeName'))),
			},
			{ json: 'variantGroupId', js: 'variantGroupId', typ: u(undefined, '') },
			{ json: 'warrantyText', js: 'warrantyText', typ: u(undefined, '') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: u(undefined, '') },
		],
		false
	),
	BeddingAdditionalProductAttribute: o(
		[
			{ json: 'productAttributeName', js: 'productAttributeName', typ: '' },
			{ json: 'productAttributeValue', js: 'productAttributeValue', typ: '' },
		],
		false
	),
	BeddingAssembledProductHeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	BeddingAssembledProductLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	BeddingAssembledProductWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductWeightUnit')) },
		],
		false
	),
	BeddingAssembledProductWidth: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	BeddingFabricContent: o(
		[
			{ json: 'materialName', js: 'materialName', typ: u(undefined, '') },
			{ json: 'materialPercentage', js: 'materialPercentage', typ: u(undefined, 3.14) },
		],
		false
	),
	BeddingSwatchImage: o(
		[
			{ json: 'swatchImageUrl', js: 'swatchImageUrl', typ: u(undefined, '') },
			{
				json: 'swatchVariantAttribute',
				js: 'swatchVariantAttribute',
				typ: u(undefined, r('BeddingVariantAttributeName')),
			},
		],
		false
	),
	BuildingSupply: o(
		[
			{ json: 'accessoriesIncluded', js: 'accessoriesIncluded', typ: u(undefined, a('')) },
			{ json: 'acRating', js: 'acRating', typ: u(undefined, r('ACRating')) },
			{
				json: 'additionalProductAttributes',
				js: 'additionalProductAttributes',
				typ: u(undefined, a(r('BuildingSupplyAdditionalProductAttribute'))),
			},
			{
				json: 'assembledProductHeight',
				js: 'assembledProductHeight',
				typ: u(undefined, r('BuildingSupplyAssembledProductHeight')),
			},
			{
				json: 'assembledProductLength',
				js: 'assembledProductLength',
				typ: u(undefined, r('BuildingSupplyAssembledProductLength')),
			},
			{
				json: 'assembledProductWeight',
				js: 'assembledProductWeight',
				typ: u(undefined, r('BuildingSupplyAssembledProductWeight')),
			},
			{
				json: 'assembledProductWidth',
				js: 'assembledProductWidth',
				typ: u(undefined, r('BuildingSupplyAssembledProductWidth')),
			},
			{ json: 'carpetStyle', js: 'carpetStyle', typ: u(undefined, '') },
			{ json: 'cleaningCareAndMaintenance', js: 'cleaningCareAndMaintenance', typ: u(undefined, '') },
			{ json: 'color', js: 'color', typ: u(undefined, a('')) },
			{ json: 'colorCategory', js: 'colorCategory', typ: u(undefined, a(r('ColorCategory'))) },
			{
				json: 'compositeWoodCertificationCode',
				js: 'compositeWoodCertificationCode',
				typ: r('CompositeWoodCertificationCode'),
			},
			{ json: 'count', js: 'count', typ: u(undefined, '') },
			{ json: 'countPerPack', js: 'countPerPack', typ: u(undefined, 0) },
			{ json: 'coverageArea', js: 'coverageArea', typ: u(undefined, r('BuildingSupplyCoverageArea')) },
			{ json: 'doorOpeningStyle', js: 'doorOpeningStyle', typ: u(undefined, '') },
			{ json: 'doorStyle', js: 'doorStyle', typ: u(undefined, '') },
			{ json: 'dryTime', js: 'dryTime', typ: u(undefined, r('DryTime')) },
			{ json: 'features', js: 'features', typ: u(undefined, a('')) },
			{ json: 'fineness', js: 'fineness', typ: u(undefined, '') },
			{ json: 'form', js: 'form', typ: u(undefined, '') },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: u(undefined, a('')) },
			{ json: 'grade', js: 'grade', typ: u(undefined, '') },
			{ json: 'hasLowEmissivity', js: 'hasLowEmissivity', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'ingredients', js: 'ingredients', typ: u(undefined, '') },
			{ json: 'isBiodegradable', js: 'isBiodegradable', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isCombustible', js: 'isCombustible', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isEnergyStarCertified', js: 'isEnergyStarCertified', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isFastSetting', js: 'isFastSetting', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isFireResistant', js: 'isFireResistant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isFlammable', js: 'isFlammable', typ: u(undefined, r('MustShipAlone')) },
			{
				json: 'isMadeFromReclaimedMaterials',
				js: 'isMadeFromReclaimedMaterials',
				typ: u(undefined, r('MustShipAlone')),
			},
			{
				json: 'isMadeFromRecycledMaterial',
				js: 'isMadeFromRecycledMaterial',
				typ: u(undefined, r('MustShipAlone')),
			},
			{
				json: 'isMadeFromSustainableMaterials',
				js: 'isMadeFromSustainableMaterials',
				typ: u(undefined, r('MustShipAlone')),
			},
			{ json: 'isMoldResistant', js: 'isMoldResistant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isOdorless', js: 'isOdorless', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPrefinished', js: 'isPrefinished', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isReadyToUse', js: 'isReadyToUse', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isWaterproof', js: 'isWaterproof', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isWaterSoluble', js: 'isWaterSoluble', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: u(undefined, a('')) },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: '' },
			{ json: 'manufacturer', js: 'manufacturer', typ: '' },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: u(undefined, '') },
			{ json: 'material', js: 'material', typ: u(undefined, a('')) },
			{ json: 'modelNumber', js: 'modelNumber', typ: u(undefined, '') },
			{ json: 'msrp', js: 'msrp', typ: u(undefined, 3.14) },
			{ json: 'paintFinish', js: 'paintFinish', typ: u(undefined, '') },
			{ json: 'pattern', js: 'pattern', typ: u(undefined, a('')) },
			{ json: 'peiRating', js: 'peiRating', typ: u(undefined, '') },
			{ json: 'pieceCount', js: 'pieceCount', typ: u(undefined, 0) },
			{ json: 'pileHeight', js: 'pileHeight', typ: u(undefined, r('PileHeight')) },
			{ json: 'powerType', js: 'powerType', typ: u(undefined, '') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: u(undefined, a('')) },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: '' },
			{ json: 'recommendedSurfaces', js: 'recommendedSurfaces', typ: u(undefined, a('')) },
			{ json: 'recommendedUses', js: 'recommendedUses', typ: u(undefined, a('')) },
			{
				json: 'recycledMaterialContent',
				js: 'recycledMaterialContent',
				typ: u(undefined, a(r('BuildingSupplyRecycledMaterialContent'))),
			},
			{ json: 'rollLength', js: 'rollLength', typ: u(undefined, r('RollLength')) },
			{ json: 'shape', js: 'shape', typ: u(undefined, '') },
			{ json: 'shortDescription', js: 'shortDescription', typ: '' },
			{ json: 'size', js: 'size', typ: u(undefined, '') },
			{ json: 'snowLoadRating', js: 'snowLoadRating', typ: u(undefined, r('SnowLoadRating')) },
			{ json: 'swatchImages', js: 'swatchImages', typ: u(undefined, a(r('BuildingSupplySwatchImage'))) },
			{ json: 'thickness', js: 'thickness', typ: u(undefined, r('Thickness')) },
			{
				json: 'variantAttributeNames',
				js: 'variantAttributeNames',
				typ: u(undefined, a(r('BuildingSupplyVariantAttributeName'))),
			},
			{ json: 'variantGroupId', js: 'variantGroupId', typ: u(undefined, '') },
			{ json: 'vocLevel', js: 'vocLevel', typ: u(undefined, '') },
			{ json: 'warrantyText', js: 'warrantyText', typ: u(undefined, '') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: u(undefined, '') },
		],
		false
	),
	BuildingSupplyAdditionalProductAttribute: o(
		[
			{ json: 'productAttributeName', js: 'productAttributeName', typ: '' },
			{ json: 'productAttributeValue', js: 'productAttributeValue', typ: '' },
		],
		false
	),
	BuildingSupplyAssembledProductHeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	BuildingSupplyAssembledProductLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	BuildingSupplyAssembledProductWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductWeightUnit')) },
		],
		false
	),
	BuildingSupplyAssembledProductWidth: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	BuildingSupplyCoverageArea: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('CoverageAreaUnit')) },
		],
		false
	),
	DryTime: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 0) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('ResultTimeUnit')) },
		],
		false
	),
	PileHeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('ScreenSizeUnit')) },
		],
		false
	),
	BuildingSupplyRecycledMaterialContent: o(
		[
			{ json: 'percentageOfRecycledMaterial', js: 'percentageOfRecycledMaterial', typ: u(undefined, 3.14) },
			{ json: 'recycledMaterial', js: 'recycledMaterial', typ: u(undefined, '') },
		],
		false
	),
	RollLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 0) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	SnowLoadRating: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 0) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('SnowLoadRatingUnit')) },
		],
		false
	),
	BuildingSupplySwatchImage: o(
		[
			{ json: 'swatchImageUrl', js: 'swatchImageUrl', typ: u(undefined, '') },
			{
				json: 'swatchVariantAttribute',
				js: 'swatchVariantAttribute',
				typ: u(undefined, r('BuildingSupplyVariantAttributeName')),
			},
		],
		false
	),
	Thickness: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('ThicknessUnit')) },
		],
		false
	),
	CamerasLenses: o(
		[
			{ json: 'accessoriesIncluded', js: 'accessoriesIncluded', typ: u(undefined, a('')) },
			{
				json: 'additionalProductAttributes',
				js: 'additionalProductAttributes',
				typ: u(undefined, a(r('CamerasLensesAdditionalProductAttribute'))),
			},
			{
				json: 'assembledProductHeight',
				js: 'assembledProductHeight',
				typ: u(undefined, r('CamerasLensesAssembledProductHeight')),
			},
			{
				json: 'assembledProductLength',
				js: 'assembledProductLength',
				typ: u(undefined, r('CamerasLensesAssembledProductLength')),
			},
			{
				json: 'assembledProductWeight',
				js: 'assembledProductWeight',
				typ: u(undefined, r('CamerasLensesAssembledProductWeight')),
			},
			{
				json: 'assembledProductWidth',
				js: 'assembledProductWidth',
				typ: u(undefined, r('CamerasLensesAssembledProductWidth')),
			},
			{ json: 'assemblyInstructions', js: 'assemblyInstructions', typ: u(undefined, '') },
			{ json: 'attachmentStyle', js: 'attachmentStyle', typ: u(undefined, '') },
			{ json: 'cameraLensType', js: 'cameraLensType', typ: u(undefined, '') },
			{ json: 'capacity', js: 'capacity', typ: u(undefined, '') },
			{ json: 'cleaningCareAndMaintenance', js: 'cleaningCareAndMaintenance', typ: u(undefined, '') },
			{ json: 'color', js: 'color', typ: u(undefined, a('')) },
			{ json: 'colorCategory', js: 'colorCategory', typ: u(undefined, a(r('ColorCategory'))) },
			{ json: 'compatibleBrands', js: 'compatibleBrands', typ: u(undefined, a('')) },
			{ json: 'compatibleDevices', js: 'compatibleDevices', typ: u(undefined, a('')) },
			{ json: 'connections', js: 'connections', typ: u(undefined, a('')) },
			{ json: 'count', js: 'count', typ: u(undefined, '') },
			{ json: 'countPerPack', js: 'countPerPack', typ: u(undefined, 0) },
			{ json: 'diameter', js: 'diameter', typ: u(undefined, r('CamerasLensesDiameter')) },
			{ json: 'digitalZoom', js: 'digitalZoom', typ: u(undefined, '') },
			{ json: 'displayResolution', js: 'displayResolution', typ: u(undefined, a('')) },
			{ json: 'displayTechnology', js: 'displayTechnology', typ: u(undefined, '') },
			{ json: 'exposureModes', js: 'exposureModes', typ: u(undefined, a('')) },
			{ json: 'features', js: 'features', typ: u(undefined, a('')) },
			{ json: 'fieldOfView', js: 'fieldOfView', typ: u(undefined, '') },
			{ json: 'flashType', js: 'flashType', typ: u(undefined, '') },
			{ json: 'focalLength', js: 'focalLength', typ: u(undefined, r('FocalLength')) },
			{ json: 'focalRatio', js: 'focalRatio', typ: u(undefined, '') },
			{ json: 'focusType', js: 'focusType', typ: u(undefined, a('')) },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: u(undefined, a('')) },
			{ json: 'hasFlash', js: 'hasFlash', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'hasHandle', js: 'hasHandle', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'hasMemoryCardSlot', js: 'hasMemoryCardSlot', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'hasNightVision', js: 'hasNightVision', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'hasRedEyeReduction', js: 'hasRedEyeReduction', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'hasSelfTimer', js: 'hasSelfTimer', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'hasShoulderStrap', js: 'hasShoulderStrap', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'hasTouchscreen', js: 'hasTouchscreen', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isAssemblyRequired', js: 'isAssemblyRequired', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isFogResistant', js: 'isFogResistant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isMulticoated', js: 'isMulticoated', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isParfocal', js: 'isParfocal', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPortable', js: 'isPortable', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isWaterproof', js: 'isWaterproof', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: u(undefined, a('')) },
			{ json: 'lensCoating', js: 'lensCoating', typ: u(undefined, '') },
			{ json: 'lensDiameter', js: 'lensDiameter', typ: u(undefined, r('CamerasLensesLensDiameter')) },
			{ json: 'lensFilterType', js: 'lensFilterType', typ: u(undefined, '') },
			{ json: 'magnification', js: 'magnification', typ: u(undefined, '') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: '' },
			{ json: 'manufacturer', js: 'manufacturer', typ: '' },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: u(undefined, '') },
			{ json: 'material', js: 'material', typ: u(undefined, a('')) },
			{ json: 'maximumAperture', js: 'maximumAperture', typ: u(undefined, '') },
			{ json: 'maximumShutterSpeed', js: 'maximumShutterSpeed', typ: u(undefined, r('MaximumShutterSpeed')) },
			{ json: 'memoryCardType', js: 'memoryCardType', typ: u(undefined, a('')) },
			{ json: 'microphoneIncluded', js: 'microphoneIncluded', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'minimumAperture', js: 'minimumAperture', typ: u(undefined, '') },
			{ json: 'minimumShutterSpeed', js: 'minimumShutterSpeed', typ: u(undefined, r('MinimumShutterSpeed')) },
			{ json: 'modelNumber', js: 'modelNumber', typ: u(undefined, '') },
			{ json: 'msrp', js: 'msrp', typ: u(undefined, 3.14) },
			{ json: 'numberOfMegapixels', js: 'numberOfMegapixels', typ: u(undefined, r('NumberOfMegapixels')) },
			{ json: 'opticalZoom', js: 'opticalZoom', typ: u(undefined, '') },
			{ json: 'pieceCount', js: 'pieceCount', typ: u(undefined, 0) },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: u(undefined, a('')) },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: '' },
			{ json: 'recordableMediaFormats', js: 'recordableMediaFormats', typ: u(undefined, a('')) },
			{ json: 'screenSize', js: 'screenSize', typ: u(undefined, r('CamerasLensesScreenSize')) },
			{ json: 'selfTimerDelay', js: 'selfTimerDelay', typ: u(undefined, a('')) },
			{ json: 'sensorResolution', js: 'sensorResolution', typ: u(undefined, '') },
			{ json: 'shootingMode', js: 'shootingMode', typ: u(undefined, '') },
			{ json: 'shortDescription', js: 'shortDescription', typ: '' },
			{ json: 'standbyTime', js: 'standbyTime', typ: u(undefined, r('CamerasLensesStandbyTime')) },
			{ json: 'swatchImages', js: 'swatchImages', typ: u(undefined, a(r('CamerasLensesSwatchImage'))) },
			{
				json: 'variantAttributeNames',
				js: 'variantAttributeNames',
				typ: u(undefined, a(r('CamerasLensesVariantAttributeName'))),
			},
			{ json: 'variantGroupId', js: 'variantGroupId', typ: u(undefined, '') },
			{ json: 'warrantyText', js: 'warrantyText', typ: u(undefined, '') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: u(undefined, '') },
			{ json: 'wirelessTechnologies', js: 'wirelessTechnologies', typ: u(undefined, a('')) },
		],
		false
	),
	CamerasLensesAdditionalProductAttribute: o(
		[
			{ json: 'productAttributeName', js: 'productAttributeName', typ: '' },
			{ json: 'productAttributeValue', js: 'productAttributeValue', typ: '' },
		],
		false
	),
	CamerasLensesAssembledProductHeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	CamerasLensesAssembledProductLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	CamerasLensesAssembledProductWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductWeightUnit')) },
		],
		false
	),
	CamerasLensesAssembledProductWidth: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	CamerasLensesDiameter: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('RoughInDistanceUnit')) },
		],
		false
	),
	FocalLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, '') },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('FocalLengthUnit')) },
		],
		false
	),
	CamerasLensesLensDiameter: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('FocalLengthUnit')) },
		],
		false
	),
	MaximumShutterSpeed: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, '') },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('MaximumShutterSpeedUnit')) },
		],
		false
	),
	MinimumShutterSpeed: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, '') },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('MaximumShutterSpeedUnit')) },
		],
		false
	),
	NumberOfMegapixels: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('NumberOfMegapixelsUnit')) },
		],
		false
	),
	CamerasLensesScreenSize: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('ScreenSizeUnit')) },
		],
		false
	),
	CamerasLensesStandbyTime: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('StandbyTimeUnit')) },
		],
		false
	),
	CamerasLensesSwatchImage: o(
		[
			{ json: 'swatchImageUrl', js: 'swatchImageUrl', typ: u(undefined, '') },
			{
				json: 'swatchVariantAttribute',
				js: 'swatchVariantAttribute',
				typ: u(undefined, r('CamerasLensesVariantAttributeName')),
			},
		],
		false
	),
	CarriersAccessories: o(
		[
			{
				json: 'additionalProductAttributes',
				js: 'additionalProductAttributes',
				typ: u(undefined, a(r('CarriersAccessoriesAdditionalProductAttribute'))),
			},
			{ json: 'ageGroup', js: 'ageGroup', typ: u(undefined, a(r('ArtCraftAgeGroup'))) },
			{
				json: 'assembledProductHeight',
				js: 'assembledProductHeight',
				typ: u(undefined, r('CarriersAccessoriesAssembledProductHeight')),
			},
			{
				json: 'assembledProductLength',
				js: 'assembledProductLength',
				typ: u(undefined, r('CarriersAccessoriesAssembledProductLength')),
			},
			{
				json: 'assembledProductWeight',
				js: 'assembledProductWeight',
				typ: u(undefined, r('CarriersAccessoriesAssembledProductWeight')),
			},
			{
				json: 'assembledProductWidth',
				js: 'assembledProductWidth',
				typ: u(undefined, r('CarriersAccessoriesAssembledProductWidth')),
			},
			{ json: 'athlete', js: 'athlete', typ: u(undefined, a('')) },
			{ json: 'autographedBy', js: 'autographedBy', typ: u(undefined, '') },
			{ json: 'bagCaseFeature', js: 'bagCaseFeature', typ: u(undefined, '') },
			{ json: 'bagStyle', js: 'bagStyle', typ: u(undefined, a(r('BagStyle'))) },
			{ json: 'capacity', js: 'capacity', typ: u(undefined, '') },
			{ json: 'character', js: 'character', typ: u(undefined, a('')) },
			{ json: 'color', js: 'color', typ: u(undefined, a('')) },
			{ json: 'colorCategory', js: 'colorCategory', typ: u(undefined, a(r('ColorCategory'))) },
			{ json: 'count', js: 'count', typ: u(undefined, '') },
			{ json: 'countPerPack', js: 'countPerPack', typ: u(undefined, 0) },
			{ json: 'countryOfOriginTextiles', js: 'countryOfOriginTextiles', typ: r('CountryOfOriginTextiles') },
			{ json: 'designer', js: 'designer', typ: u(undefined, '') },
			{ json: 'dimensions', js: 'dimensions', typ: u(undefined, '') },
			{ json: 'fabricCareInstructions', js: 'fabricCareInstructions', typ: u(undefined, a('')) },
			{ json: 'fabricContent', js: 'fabricContent', typ: u(undefined, a(r('CarriersAccessoriesFabricContent'))) },
			{ json: 'features', js: 'features', typ: u(undefined, a('')) },
			{ json: 'gender', js: 'gender', typ: u(undefined, r('ArtCraftGender')) },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: u(undefined, a('')) },
			{ json: 'handleMaterial', js: 'handleMaterial', typ: u(undefined, a('')) },
			{ json: 'handleType', js: 'handleType', typ: u(undefined, '') },
			{ json: 'isFairTrade', js: 'isFairTrade', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isLined', js: 'isLined', typ: u(undefined, r('MustShipAlone')) },
			{
				json: 'isMadeFromRecycledMaterial',
				js: 'isMadeFromRecycledMaterial',
				typ: u(undefined, r('MustShipAlone')),
			},
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isWaterproof', js: 'isWaterproof', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isWeatherResistant', js: 'isWeatherResistant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isWheeled', js: 'isWheeled', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: u(undefined, a('')) },
			{ json: 'leatherGrade', js: 'leatherGrade', typ: u(undefined, '') },
			{ json: 'lockingMechanism', js: 'lockingMechanism', typ: u(undefined, '') },
			{ json: 'luggageStyle', js: 'luggageStyle', typ: u(undefined, '') },
			{ json: 'luggageType', js: 'luggageType', typ: u(undefined, '') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: '' },
			{ json: 'manufacturer', js: 'manufacturer', typ: '' },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: u(undefined, '') },
			{ json: 'material', js: 'material', typ: u(undefined, a('')) },
			{ json: 'modelNumber', js: 'modelNumber', typ: u(undefined, '') },
			{ json: 'monogramLetter', js: 'monogramLetter', typ: u(undefined, '') },
			{ json: 'msrp', js: 'msrp', typ: u(undefined, 3.14) },
			{ json: 'numberOfWheels', js: 'numberOfWheels', typ: u(undefined, 0) },
			{ json: 'pattern', js: 'pattern', typ: u(undefined, a('')) },
			{ json: 'pieceCount', js: 'pieceCount', typ: u(undefined, 0) },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: u(undefined, a('')) },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: '' },
			{
				json: 'recycledMaterialContent',
				js: 'recycledMaterialContent',
				typ: u(undefined, a(r('CarriersAccessoriesRecycledMaterialContent'))),
			},
			{ json: 'scarfStyle', js: 'scarfStyle', typ: u(undefined, a('')) },
			{ json: 'seasonCode', js: 'seasonCode', typ: u(undefined, r('SeasonCode')) },
			{ json: 'seasonYear', js: 'seasonYear', typ: u(undefined, 0) },
			{ json: 'shape', js: 'shape', typ: u(undefined, '') },
			{ json: 'shortDescription', js: 'shortDescription', typ: '' },
			{ json: 'size', js: 'size', typ: u(undefined, '') },
			{ json: 'sportsLeague', js: 'sportsLeague', typ: u(undefined, a('')) },
			{ json: 'sportsTeam', js: 'sportsTeam', typ: u(undefined, a('')) },
			{ json: 'swatchImages', js: 'swatchImages', typ: u(undefined, a(r('CarriersAccessoriesSwatchImage'))) },
			{
				json: 'variantAttributeNames',
				js: 'variantAttributeNames',
				typ: u(undefined, a(r('CarriersAccessoriesVariantAttributeName'))),
			},
			{ json: 'variantGroupId', js: 'variantGroupId', typ: u(undefined, '') },
			{ json: 'warrantyText', js: 'warrantyText', typ: u(undefined, '') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: u(undefined, '') },
			{ json: 'zipperMaterial', js: 'zipperMaterial', typ: u(undefined, '') },
		],
		false
	),
	CarriersAccessoriesAdditionalProductAttribute: o(
		[
			{ json: 'productAttributeName', js: 'productAttributeName', typ: '' },
			{ json: 'productAttributeValue', js: 'productAttributeValue', typ: '' },
		],
		false
	),
	CarriersAccessoriesAssembledProductHeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	CarriersAccessoriesAssembledProductLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	CarriersAccessoriesAssembledProductWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductWeightUnit')) },
		],
		false
	),
	CarriersAccessoriesAssembledProductWidth: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	CarriersAccessoriesFabricContent: o(
		[
			{ json: 'materialName', js: 'materialName', typ: u(undefined, '') },
			{ json: 'materialPercentage', js: 'materialPercentage', typ: u(undefined, 3.14) },
		],
		false
	),
	CarriersAccessoriesRecycledMaterialContent: o(
		[
			{ json: 'percentageOfRecycledMaterial', js: 'percentageOfRecycledMaterial', typ: u(undefined, 3.14) },
			{ json: 'recycledMaterial', js: 'recycledMaterial', typ: u(undefined, '') },
		],
		false
	),
	CarriersAccessoriesSwatchImage: o(
		[
			{ json: 'swatchImageUrl', js: 'swatchImageUrl', typ: u(undefined, '') },
			{
				json: 'swatchVariantAttribute',
				js: 'swatchVariantAttribute',
				typ: u(undefined, r('CarriersAccessoriesVariantAttributeName')),
			},
		],
		false
	),
	CasesBags: o(
		[
			{
				json: 'additionalProductAttributes',
				js: 'additionalProductAttributes',
				typ: u(undefined, a(r('CasesBagsAdditionalProductAttribute'))),
			},
			{ json: 'ageGroup', js: 'ageGroup', typ: u(undefined, a(r('ArtCraftAgeGroup'))) },
			{
				json: 'assembledProductHeight',
				js: 'assembledProductHeight',
				typ: u(undefined, r('CasesBagsAssembledProductHeight')),
			},
			{
				json: 'assembledProductLength',
				js: 'assembledProductLength',
				typ: u(undefined, r('CasesBagsAssembledProductLength')),
			},
			{
				json: 'assembledProductWeight',
				js: 'assembledProductWeight',
				typ: u(undefined, r('CasesBagsAssembledProductWeight')),
			},
			{
				json: 'assembledProductWidth',
				js: 'assembledProductWidth',
				typ: u(undefined, r('CasesBagsAssembledProductWidth')),
			},
			{ json: 'athlete', js: 'athlete', typ: u(undefined, a('')) },
			{ json: 'autographedBy', js: 'autographedBy', typ: u(undefined, '') },
			{ json: 'capacity', js: 'capacity', typ: u(undefined, '') },
			{ json: 'character', js: 'character', typ: u(undefined, a('')) },
			{ json: 'color', js: 'color', typ: u(undefined, a('')) },
			{ json: 'colorCategory', js: 'colorCategory', typ: u(undefined, a(r('ColorCategory'))) },
			{ json: 'compatibleBrands', js: 'compatibleBrands', typ: u(undefined, a('')) },
			{ json: 'compatibleDevices', js: 'compatibleDevices', typ: u(undefined, a('')) },
			{ json: 'count', js: 'count', typ: u(undefined, '') },
			{ json: 'countPerPack', js: 'countPerPack', typ: u(undefined, 0) },
			{ json: 'countryOfOriginTextiles', js: 'countryOfOriginTextiles', typ: r('CountryOfOriginTextiles') },
			{ json: 'designer', js: 'designer', typ: u(undefined, '') },
			{ json: 'fabricCareInstructions', js: 'fabricCareInstructions', typ: u(undefined, a('')) },
			{ json: 'fabricContent', js: 'fabricContent', typ: u(undefined, a(r('CasesBagsFabricContent'))) },
			{ json: 'fastenerType', js: 'fastenerType', typ: u(undefined, '') },
			{ json: 'features', js: 'features', typ: u(undefined, a('')) },
			{ json: 'finish', js: 'finish', typ: u(undefined, '') },
			{ json: 'gender', js: 'gender', typ: u(undefined, r('ArtCraftGender')) },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: u(undefined, a('')) },
			{ json: 'handleMaterial', js: 'handleMaterial', typ: u(undefined, a('')) },
			{ json: 'handleType', js: 'handleType', typ: u(undefined, '') },
			{ json: 'hardOrSoftCase', js: 'hardOrSoftCase', typ: u(undefined, r('HardOrSoftCase')) },
			{ json: 'hasRemovableStrap', js: 'hasRemovableStrap', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isFoldable', js: 'isFoldable', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isLined', js: 'isLined', typ: u(undefined, r('MustShipAlone')) },
			{
				json: 'isMadeFromRecycledMaterial',
				js: 'isMadeFromRecycledMaterial',
				typ: u(undefined, r('MustShipAlone')),
			},
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isReusable', js: 'isReusable', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isWaterproof', js: 'isWaterproof', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isWeatherResistant', js: 'isWeatherResistant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isWheeled', js: 'isWheeled', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: u(undefined, a('')) },
			{ json: 'leatherGrade', js: 'leatherGrade', typ: u(undefined, '') },
			{ json: 'lockingMechanism', js: 'lockingMechanism', typ: u(undefined, '') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: '' },
			{ json: 'manufacturer', js: 'manufacturer', typ: '' },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: u(undefined, '') },
			{ json: 'material', js: 'material', typ: u(undefined, a('')) },
			{ json: 'maximumWeight', js: 'maximumWeight', typ: u(undefined, r('CasesBagsMaximumWeight')) },
			{ json: 'modelNumber', js: 'modelNumber', typ: u(undefined, '') },
			{ json: 'monogramLetter', js: 'monogramLetter', typ: u(undefined, '') },
			{ json: 'msrp', js: 'msrp', typ: u(undefined, 3.14) },
			{ json: 'numberOfCompartments', js: 'numberOfCompartments', typ: u(undefined, 0) },
			{ json: 'numberOfWheels', js: 'numberOfWheels', typ: u(undefined, 0) },
			{ json: 'occasion', js: 'occasion', typ: u(undefined, a('')) },
			{ json: 'pattern', js: 'pattern', typ: u(undefined, a('')) },
			{ json: 'pieceCount', js: 'pieceCount', typ: u(undefined, 0) },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: u(undefined, a('')) },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: '' },
			{ json: 'recommendedUses', js: 'recommendedUses', typ: u(undefined, a('')) },
			{
				json: 'recycledMaterialContent',
				js: 'recycledMaterialContent',
				typ: u(undefined, a(r('CasesBagsRecycledMaterialContent'))),
			},
			{ json: 'screenSize', js: 'screenSize', typ: u(undefined, r('CasesBagsScreenSize')) },
			{ json: 'seasonCode', js: 'seasonCode', typ: u(undefined, r('SeasonCode')) },
			{ json: 'seasonYear', js: 'seasonYear', typ: u(undefined, 0) },
			{ json: 'shape', js: 'shape', typ: u(undefined, '') },
			{ json: 'shortDescription', js: 'shortDescription', typ: '' },
			{ json: 'size', js: 'size', typ: u(undefined, '') },
			{ json: 'sport', js: 'sport', typ: u(undefined, a('')) },
			{ json: 'sportsLeague', js: 'sportsLeague', typ: u(undefined, a('')) },
			{ json: 'sportsTeam', js: 'sportsTeam', typ: u(undefined, a('')) },
			{ json: 'swatchImages', js: 'swatchImages', typ: u(undefined, a(r('CasesBagsSwatchImage'))) },
			{
				json: 'variantAttributeNames',
				js: 'variantAttributeNames',
				typ: u(undefined, a(r('CarriersAccessoriesVariantAttributeName'))),
			},
			{ json: 'variantGroupId', js: 'variantGroupId', typ: u(undefined, '') },
			{ json: 'warrantyText', js: 'warrantyText', typ: u(undefined, '') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: u(undefined, '') },
			{ json: 'zipperMaterial', js: 'zipperMaterial', typ: u(undefined, '') },
		],
		false
	),
	CasesBagsAdditionalProductAttribute: o(
		[
			{ json: 'productAttributeName', js: 'productAttributeName', typ: '' },
			{ json: 'productAttributeValue', js: 'productAttributeValue', typ: '' },
		],
		false
	),
	CasesBagsAssembledProductHeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	CasesBagsAssembledProductLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	CasesBagsAssembledProductWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductWeightUnit')) },
		],
		false
	),
	CasesBagsAssembledProductWidth: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	CasesBagsFabricContent: o(
		[
			{ json: 'materialName', js: 'materialName', typ: u(undefined, '') },
			{ json: 'materialPercentage', js: 'materialPercentage', typ: u(undefined, 3.14) },
		],
		false
	),
	CasesBagsMaximumWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductWeightUnit')) },
		],
		false
	),
	CasesBagsRecycledMaterialContent: o(
		[
			{ json: 'percentageOfRecycledMaterial', js: 'percentageOfRecycledMaterial', typ: u(undefined, 3.14) },
			{ json: 'recycledMaterial', js: 'recycledMaterial', typ: u(undefined, '') },
		],
		false
	),
	CasesBagsScreenSize: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('ScreenSizeUnit')) },
		],
		false
	),
	CasesBagsSwatchImage: o(
		[
			{ json: 'swatchImageUrl', js: 'swatchImageUrl', typ: u(undefined, '') },
			{
				json: 'swatchVariantAttribute',
				js: 'swatchVariantAttribute',
				typ: u(undefined, r('CarriersAccessoriesVariantAttributeName')),
			},
		],
		false
	),
	CellPhones: o(
		[
			{
				json: 'additionalProductAttributes',
				js: 'additionalProductAttributes',
				typ: u(undefined, a(r('CellPhonesAdditionalProductAttribute'))),
			},
			{ json: 'batteryLife', js: 'batteryLife', typ: u(undefined, r('CellPhonesBatteryLife')) },
			{ json: 'cellPhoneServiceProvider', js: 'cellPhoneServiceProvider', typ: u(undefined, '') },
			{ json: 'cellPhoneType', js: 'cellPhoneType', typ: u(undefined, '') },
			{ json: 'cellularNetworkTechnology', js: 'cellularNetworkTechnology', typ: u(undefined, '') },
			{ json: 'color', js: 'color', typ: u(undefined, a('')) },
			{ json: 'compatibleModels', js: 'compatibleModels', typ: u(undefined, a('')) },
			{ json: 'connections', js: 'connections', typ: u(undefined, a('')) },
			{ json: 'count', js: 'count', typ: u(undefined, '') },
			{ json: 'countPerPack', js: 'countPerPack', typ: u(undefined, 0) },
			{ json: 'edition', js: 'edition', typ: u(undefined, '') },
			{ json: 'features', js: 'features', typ: u(undefined, a('')) },
			{
				json: 'frontFacingCameraMegapixels',
				js: 'frontFacingCameraMegapixels',
				typ: u(undefined, r('CellPhonesFrontFacingCameraMegapixels')),
			},
			{ json: 'hardDriveCapacity', js: 'hardDriveCapacity', typ: u(undefined, r('CellPhonesHardDriveCapacity')) },
			{ json: 'hasFlash', js: 'hasFlash', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'hasSignalBooster', js: 'hasSignalBooster', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: u(undefined, a('')) },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: '' },
			{ json: 'manufacturer', js: 'manufacturer', typ: '' },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: u(undefined, '') },
			{ json: 'memoryCardType', js: 'memoryCardType', typ: u(undefined, a('')) },
			{ json: 'mobileOperatingSystem', js: 'mobileOperatingSystem', typ: u(undefined, a('')) },
			{ json: 'modelName', js: 'modelName', typ: u(undefined, '') },
			{ json: 'modelNumber', js: 'modelNumber', typ: u(undefined, '') },
			{ json: 'msrp', js: 'msrp', typ: u(undefined, 3.14) },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: u(undefined, a('')) },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: '' },
			{ json: 'ramMemory', js: 'ramMemory', typ: u(undefined, r('CellPhonesRAMMemory')) },
			{
				json: 'rearCameraMegapixels',
				js: 'rearCameraMegapixels',
				typ: u(undefined, r('CellPhonesRearCameraMegapixels')),
			},
			{ json: 'resolution', js: 'resolution', typ: u(undefined, '') },
			{ json: 'screenSize', js: 'screenSize', typ: u(undefined, r('CellPhonesScreenSize')) },
			{ json: 'shortDescription', js: 'shortDescription', typ: '' },
			{ json: 'standbyTime', js: 'standbyTime', typ: u(undefined, r('CellPhonesStandbyTime')) },
			{ json: 'swatchImages', js: 'swatchImages', typ: u(undefined, a(r('CellPhonesSwatchImage'))) },
			{ json: 'talkTime', js: 'talkTime', typ: u(undefined, r('TalkTime')) },
			{
				json: 'variantAttributeNames',
				js: 'variantAttributeNames',
				typ: u(undefined, a(r('CellPhonesVariantAttributeName'))),
			},
			{ json: 'variantGroupId', js: 'variantGroupId', typ: u(undefined, '') },
			{ json: 'warrantyText', js: 'warrantyText', typ: u(undefined, '') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: u(undefined, '') },
			{ json: 'wirelessTechnologies', js: 'wirelessTechnologies', typ: u(undefined, a('')) },
		],
		false
	),
	CellPhonesAdditionalProductAttribute: o(
		[
			{ json: 'productAttributeName', js: 'productAttributeName', typ: '' },
			{ json: 'productAttributeValue', js: 'productAttributeValue', typ: '' },
		],
		false
	),
	CellPhonesBatteryLife: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('StandbyTimeUnit')) },
		],
		false
	),
	CellPhonesFrontFacingCameraMegapixels: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('NumberOfMegapixelsUnit')) },
		],
		false
	),
	CellPhonesHardDriveCapacity: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('HardDriveCapacityUnit')) },
		],
		false
	),
	CellPhonesRAMMemory: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('HardDriveCapacityUnit')) },
		],
		false
	),
	CellPhonesRearCameraMegapixels: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('NumberOfMegapixelsUnit')) },
		],
		false
	),
	CellPhonesScreenSize: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('ScreenSizeUnit')) },
		],
		false
	),
	CellPhonesStandbyTime: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('StandbyTimeUnit')) },
		],
		false
	),
	CellPhonesSwatchImage: o(
		[
			{ json: 'swatchImageUrl', js: 'swatchImageUrl', typ: u(undefined, '') },
			{
				json: 'swatchVariantAttribute',
				js: 'swatchVariantAttribute',
				typ: u(undefined, r('FluffySwatchVariantAttribute')),
			},
		],
		false
	),
	TalkTime: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('StandbyTimeUnit')) },
		],
		false
	),
	CeremonialClothingAccessories: o(
		[
			{
				json: 'additionalProductAttributes',
				js: 'additionalProductAttributes',
				typ: u(undefined, a(r('CeremonialClothingAccessoriesAdditionalProductAttribute'))),
			},
			{
				json: 'assembledProductHeight',
				js: 'assembledProductHeight',
				typ: u(undefined, r('CeremonialClothingAccessoriesAssembledProductHeight')),
			},
			{
				json: 'assembledProductLength',
				js: 'assembledProductLength',
				typ: u(undefined, r('CeremonialClothingAccessoriesAssembledProductLength')),
			},
			{
				json: 'assembledProductWeight',
				js: 'assembledProductWeight',
				typ: u(undefined, r('CeremonialClothingAccessoriesAssembledProductWeight')),
			},
			{
				json: 'assembledProductWidth',
				js: 'assembledProductWidth',
				typ: u(undefined, r('CeremonialClothingAccessoriesAssembledProductWidth')),
			},
			{ json: 'clothingSize', js: 'clothingSize', typ: u(undefined, '') },
			{
				json: 'clothingSizeGroup',
				js: 'clothingSizeGroup',
				typ: u(undefined, r('CeremonialClothingAccessoriesClothingSizeGroup')),
			},
			{ json: 'color', js: 'color', typ: u(undefined, a('')) },
			{ json: 'colorCategory', js: 'colorCategory', typ: u(undefined, a(r('ColorCategory'))) },
			{ json: 'count', js: 'count', typ: u(undefined, '') },
			{ json: 'countPerPack', js: 'countPerPack', typ: u(undefined, 0) },
			{ json: 'countryOfOriginTextiles', js: 'countryOfOriginTextiles', typ: r('CountryOfOriginTextiles') },
			{ json: 'fabricCareInstructions', js: 'fabricCareInstructions', typ: u(undefined, a('')) },
			{
				json: 'fabricContent',
				js: 'fabricContent',
				typ: u(undefined, a(r('CeremonialClothingAccessoriesFabricContent'))),
			},
			{ json: 'features', js: 'features', typ: u(undefined, a('')) },
			{ json: 'gender', js: 'gender', typ: u(undefined, r('BabyClothingGender')) },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: u(undefined, a('')) },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: u(undefined, a('')) },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: '' },
			{ json: 'manufacturer', js: 'manufacturer', typ: '' },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: u(undefined, '') },
			{ json: 'material', js: 'material', typ: u(undefined, a('')) },
			{ json: 'modelNumber', js: 'modelNumber', typ: u(undefined, '') },
			{ json: 'msrp', js: 'msrp', typ: u(undefined, 3.14) },
			{ json: 'occasion', js: 'occasion', typ: u(undefined, a('')) },
			{ json: 'pattern', js: 'pattern', typ: u(undefined, a('')) },
			{ json: 'pieceCount', js: 'pieceCount', typ: u(undefined, 0) },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: u(undefined, a('')) },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: '' },
			{ json: 'recommendedUses', js: 'recommendedUses', typ: u(undefined, a('')) },
			{ json: 'shortDescription', js: 'shortDescription', typ: '' },
			{ json: 'size', js: 'size', typ: u(undefined, '') },
			{ json: 'smallPartsWarnings', js: 'smallPartsWarnings', typ: a(r('SmallPartsWarningCode')) },
			{
				json: 'swatchImages',
				js: 'swatchImages',
				typ: u(undefined, a(r('CeremonialClothingAccessoriesSwatchImage'))),
			},
			{ json: 'theme', js: 'theme', typ: u(undefined, a('')) },
			{
				json: 'variantAttributeNames',
				js: 'variantAttributeNames',
				typ: u(undefined, a(r('CeremonialClothingAccessoriesVariantAttributeName'))),
			},
			{ json: 'variantGroupId', js: 'variantGroupId', typ: u(undefined, '') },
		],
		false
	),
	CeremonialClothingAccessoriesAdditionalProductAttribute: o(
		[
			{ json: 'productAttributeName', js: 'productAttributeName', typ: '' },
			{ json: 'productAttributeValue', js: 'productAttributeValue', typ: '' },
		],
		false
	),
	CeremonialClothingAccessoriesAssembledProductHeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	CeremonialClothingAccessoriesAssembledProductLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	CeremonialClothingAccessoriesAssembledProductWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductWeightUnit')) },
		],
		false
	),
	CeremonialClothingAccessoriesAssembledProductWidth: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	CeremonialClothingAccessoriesFabricContent: o(
		[
			{ json: 'materialName', js: 'materialName', typ: u(undefined, '') },
			{ json: 'materialPercentage', js: 'materialPercentage', typ: u(undefined, 3.14) },
		],
		false
	),
	CeremonialClothingAccessoriesSwatchImage: o(
		[
			{ json: 'swatchImageUrl', js: 'swatchImageUrl', typ: u(undefined, '') },
			{
				json: 'swatchVariantAttribute',
				js: 'swatchVariantAttribute',
				typ: u(undefined, r('CeremonialClothingAccessoriesVariantAttributeName')),
			},
		],
		false
	),
	Clothing: o(
		[
			{ json: 'academicInstitution', js: 'academicInstitution', typ: u(undefined, '') },
			{ json: 'accentColor', js: 'accentColor', typ: u(undefined, '') },
			{ json: 'activity', js: 'activity', typ: u(undefined, a('')) },
			{
				json: 'additionalProductAttributes',
				js: 'additionalProductAttributes',
				typ: u(undefined, a(r('ClothingAdditionalProductAttribute'))),
			},
			{ json: 'ageGroup', js: 'ageGroup', typ: a(r('ArtCraftAgeGroup')) },
			{ json: 'athlete', js: 'athlete', typ: u(undefined, a('')) },
			{ json: 'autographedBy', js: 'autographedBy', typ: u(undefined, '') },
			{ json: 'beltBuckleStyle', js: 'beltBuckleStyle', typ: u(undefined, '') },
			{ json: 'beltStyle', js: 'beltStyle', typ: u(undefined, a('')) },
			{ json: 'braBandSize', js: 'braBandSize', typ: u(undefined, r('BraBandSize')) },
			{ json: 'braCupSize', js: 'braCupSize', typ: u(undefined, '') },
			{ json: 'braSize', js: 'braSize', typ: u(undefined, '') },
			{ json: 'braStyle', js: 'braStyle', typ: u(undefined, a('')) },
			{ json: 'character', js: 'character', typ: u(undefined, a('')) },
			{ json: 'chestSize', js: 'chestSize', typ: u(undefined, r('ChestSize')) },
			{ json: 'clothingCut', js: 'clothingCut', typ: u(undefined, a('')) },
			{ json: 'clothingFit', js: 'clothingFit', typ: u(undefined, '') },
			{ json: 'clothingLengthStyle', js: 'clothingLengthStyle', typ: u(undefined, '') },
			{ json: 'clothingSize', js: 'clothingSize', typ: '' },
			{
				json: 'clothingSizeGroup',
				js: 'clothingSizeGroup',
				typ: u(undefined, r('CeremonialClothingAccessoriesClothingSizeGroup')),
			},
			{ json: 'clothingStyle', js: 'clothingStyle', typ: u(undefined, a('')) },
			{ json: 'clothingTopStyle', js: 'clothingTopStyle', typ: u(undefined, a('')) },
			{ json: 'clothingWeight', js: 'clothingWeight', typ: u(undefined, r('ClothingWeight')) },
			{ json: 'collarType', js: 'collarType', typ: u(undefined, '') },
			{ json: 'color', js: 'color', typ: a('') },
			{ json: 'colorCategory', js: 'colorCategory', typ: a(r('ColorCategory')) },
			{ json: 'count', js: 'count', typ: u(undefined, '') },
			{ json: 'countPerPack', js: 'countPerPack', typ: u(undefined, 0) },
			{ json: 'countryOfOriginTextiles', js: 'countryOfOriginTextiles', typ: r('CountryOfOriginTextiles') },
			{ json: 'dressShirtSize', js: 'dressShirtSize', typ: u(undefined, '') },
			{ json: 'dressStyle', js: 'dressStyle', typ: u(undefined, '') },
			{ json: 'fabricCareInstructions', js: 'fabricCareInstructions', typ: u(undefined, a('')) },
			{ json: 'fabricContent', js: 'fabricContent', typ: u(undefined, a(r('ClothingFabricContent'))) },
			{ json: 'fastenerType', js: 'fastenerType', typ: u(undefined, '') },
			{ json: 'features', js: 'features', typ: u(undefined, a('')) },
			{ json: 'gender', js: 'gender', typ: r('BabyClothingGender') },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: u(undefined, a('')) },
			{ json: 'gotsCertification', js: 'gotsCertification', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'hatSize', js: 'hatSize', typ: u(undefined, r('HatSizeMeasurement')) },
			{ json: 'hatStyle', js: 'hatStyle', typ: u(undefined, a('')) },
			{ json: 'hosieryStyle', js: 'hosieryStyle', typ: u(undefined, a('')) },
			{ json: 'inseam', js: 'inseam', typ: u(undefined, r('Inseam')) },
			{ json: 'isMaternity', js: 'isMaternity', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isSet', js: 'isSet', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'jacketStyle', js: 'jacketStyle', typ: u(undefined, a('')) },
			{ json: 'jeanFinish', js: 'jeanFinish', typ: u(undefined, a('')) },
			{ json: 'jeanStyle', js: 'jeanStyle', typ: u(undefined, a('')) },
			{ json: 'jeanWash', js: 'jeanWash', typ: u(undefined, '') },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: u(undefined, a('')) },
			{ json: 'legOpeningCut', js: 'legOpeningCut', typ: u(undefined, r('LegOpeningCut')) },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: '' },
			{ json: 'manufacturer', js: 'manufacturer', typ: '' },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: u(undefined, '') },
			{ json: 'material', js: 'material', typ: u(undefined, a('')) },
			{ json: 'modelNumber', js: 'modelNumber', typ: u(undefined, '') },
			{ json: 'msrp', js: 'msrp', typ: u(undefined, 3.14) },
			{ json: 'neckSize', js: 'neckSize', typ: u(undefined, r('NeckSize')) },
			{ json: 'occasion', js: 'occasion', typ: u(undefined, a('')) },
			{ json: 'outerwearCoatJacketAnVestType', js: 'outerwearCoatJacketAnVestType', typ: u(undefined, '') },
			{ json: 'pajamaType', js: 'pajamaType', typ: u(undefined, '') },
			{ json: 'pantFit', js: 'pantFit', typ: u(undefined, a('')) },
			{ json: 'pantLegCut', js: 'pantLegCut', typ: u(undefined, r('PantLegCut')) },
			{ json: 'pantRise', js: 'pantRise', typ: u(undefined, '') },
			{ json: 'pantSize', js: 'pantSize', typ: u(undefined, '') },
			{ json: 'pantStyle', js: 'pantStyle', typ: u(undefined, '') },
			{ json: 'pantySize', js: 'pantySize', typ: u(undefined, r('PantySize')) },
			{ json: 'pantyStyle', js: 'pantyStyle', typ: u(undefined, '') },
			{ json: 'pattern', js: 'pattern', typ: u(undefined, a('')) },
			{ json: 'pieceCount', js: 'pieceCount', typ: u(undefined, 0) },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: u(undefined, a('')) },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: '' },
			{
				json: 'recycledMaterialContent',
				js: 'recycledMaterialContent',
				typ: u(undefined, a(r('ClothingRecycledMaterialContent'))),
			},
			{ json: 'scarfStyle', js: 'scarfStyle', typ: u(undefined, a('')) },
			{ json: 'season', js: 'season', typ: u(undefined, a('')) },
			{ json: 'seasonCode', js: 'seasonCode', typ: u(undefined, r('SeasonCode')) },
			{ json: 'seasonYear', js: 'seasonYear', typ: u(undefined, 0) },
			{ json: 'shirtNeckStyle', js: 'shirtNeckStyle', typ: u(undefined, '') },
			{ json: 'shoeSize', js: 'shoeSize', typ: u(undefined, '') },
			{ json: 'shortDescription', js: 'shortDescription', typ: '' },
			{ json: 'shortsStyle', js: 'shortsStyle', typ: u(undefined, a('')) },
			{ json: 'skirtAndDressCut', js: 'skirtAndDressCut', typ: u(undefined, a('')) },
			{ json: 'skirtLength', js: 'skirtLength', typ: u(undefined, r('SkirtLength')) },
			{ json: 'skirtLengthStyle', js: 'skirtLengthStyle', typ: u(undefined, '') },
			{ json: 'sleeveLength', js: 'sleeveLength', typ: u(undefined, r('SleeveLength')) },
			{ json: 'sleeveLengthStyle', js: 'sleeveLengthStyle', typ: u(undefined, r('SleeveLengthStyle')) },
			{ json: 'sleeveStyle', js: 'sleeveStyle', typ: u(undefined, '') },
			{ json: 'smallPartsWarnings', js: 'smallPartsWarnings', typ: a(r('SmallPartsWarningCode')) },
			{ json: 'sockRise', js: 'sockRise', typ: u(undefined, r('SockRise')) },
			{ json: 'sockSize', js: 'sockSize', typ: u(undefined, '') },
			{ json: 'sockStyle', js: 'sockStyle', typ: u(undefined, '') },
			{ json: 'sport', js: 'sport', typ: u(undefined, a('')) },
			{ json: 'sportsLeague', js: 'sportsLeague', typ: u(undefined, a('')) },
			{ json: 'sportsTeam', js: 'sportsTeam', typ: u(undefined, a('')) },
			{ json: 'suitBreastingStyle', js: 'suitBreastingStyle', typ: u(undefined, r('SuitBreastingStyle')) },
			{ json: 'swatchImages', js: 'swatchImages', typ: u(undefined, a(r('ClothingSwatchImage'))) },
			{ json: 'sweaterStyle', js: 'sweaterStyle', typ: u(undefined, a('')) },
			{ json: 'swimsuitStyle', js: 'swimsuitStyle', typ: u(undefined, '') },
			{ json: 'theme', js: 'theme', typ: u(undefined, a('')) },
			{ json: 'tightsSheerness', js: 'tightsSheerness', typ: u(undefined, r('Sheerness')) },
			{ json: 'tShirtType', js: 'tShirtType', typ: u(undefined, a('')) },
			{ json: 'underpantsType', js: 'underpantsType', typ: u(undefined, '') },
			{ json: 'underwearStyle', js: 'underwearStyle', typ: u(undefined, a('')) },
			{ json: 'upperBodyStrapConfiguration', js: 'upperBodyStrapConfiguration', typ: u(undefined, a('')) },
			{
				json: 'variantAttributeNames',
				js: 'variantAttributeNames',
				typ: u(undefined, a(r('ClothingVariantAttributeName'))),
			},
			{ json: 'variantGroupId', js: 'variantGroupId', typ: u(undefined, '') },
			{ json: 'waistSize', js: 'waistSize', typ: u(undefined, r('WaistSize')) },
			{ json: 'waistStyle', js: 'waistStyle', typ: u(undefined, a(r('WaistStyle'))) },
			{ json: 'warrantyText', js: 'warrantyText', typ: u(undefined, '') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: u(undefined, '') },
			{ json: 'weather', js: 'weather', typ: u(undefined, a('')) },
		],
		false
	),
	ClothingAdditionalProductAttribute: o(
		[
			{ json: 'productAttributeName', js: 'productAttributeName', typ: '' },
			{ json: 'productAttributeValue', js: 'productAttributeValue', typ: '' },
		],
		false
	),
	BraBandSize: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('ScreenSizeUnit')) },
		],
		false
	),
	ChestSize: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('CarSeatBaseDepthUnit')) },
		],
		false
	),
	ClothingFabricContent: o(
		[
			{ json: 'materialName', js: 'materialName', typ: u(undefined, '') },
			{ json: 'materialPercentage', js: 'materialPercentage', typ: u(undefined, 3.14) },
		],
		false
	),
	Inseam: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('ScreenSizeUnit')) },
		],
		false
	),
	NeckSize: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('ScreenSizeUnit')) },
		],
		false
	),
	ClothingRecycledMaterialContent: o(
		[
			{ json: 'percentageOfRecycledMaterial', js: 'percentageOfRecycledMaterial', typ: u(undefined, 3.14) },
			{ json: 'recycledMaterial', js: 'recycledMaterial', typ: u(undefined, '') },
		],
		false
	),
	SkirtLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('CarSeatBaseDepthUnit')) },
		],
		false
	),
	SleeveLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('ScreenSizeUnit')) },
		],
		false
	),
	ClothingSwatchImage: o(
		[
			{ json: 'swatchImageUrl', js: 'swatchImageUrl', typ: u(undefined, '') },
			{
				json: 'swatchVariantAttribute',
				js: 'swatchVariantAttribute',
				typ: u(undefined, r('ClothingVariantAttributeName')),
			},
		],
		false
	),
	WaistSize: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('ScreenSizeUnit')) },
		],
		false
	),
	ComputerComponents: o(
		[
			{
				json: 'additionalProductAttributes',
				js: 'additionalProductAttributes',
				typ: u(undefined, a(r('ComputerComponentsAdditionalProductAttribute'))),
			},
			{ json: 'cableLength', js: 'cableLength', typ: u(undefined, r('ComputerComponentsCableLength')) },
			{ json: 'color', js: 'color', typ: u(undefined, a('')) },
			{ json: 'connections', js: 'connections', typ: u(undefined, a('')) },
			{ json: 'count', js: 'count', typ: u(undefined, '') },
			{ json: 'countPerPack', js: 'countPerPack', typ: u(undefined, 0) },
			{ json: 'cpuSocketType', js: 'cpuSocketType', typ: u(undefined, a('')) },
			{ json: 'dataIntegrityCheck', js: 'dataIntegrityCheck', typ: u(undefined, r('DataIntegrityCheck')) },
			{ json: 'edition', js: 'edition', typ: u(undefined, '') },
			{ json: 'features', js: 'features', typ: u(undefined, a('')) },
			{
				json: 'hardDriveCapacity',
				js: 'hardDriveCapacity',
				typ: u(undefined, r('ComputerComponentsHardDriveCapacity')),
			},
			{ json: 'internalExternal', js: 'internalExternal', typ: u(undefined, r('InternalExternal')) },
			{ json: 'isCordless', js: 'isCordless', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: u(undefined, a('')) },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: '' },
			{ json: 'manufacturer', js: 'manufacturer', typ: '' },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: u(undefined, '') },
			{
				json: 'maximumRamSupported',
				js: 'maximumRamSupported',
				typ: u(undefined, r('ComputerComponentsMaximumRAMSupported')),
			},
			{ json: 'memoryCardType', js: 'memoryCardType', typ: u(undefined, a('')) },
			{ json: 'modelNumber', js: 'modelNumber', typ: u(undefined, '') },
			{ json: 'motherboardFormFactor', js: 'motherboardFormFactor', typ: u(undefined, a('')) },
			{ json: 'mountType', js: 'mountType', typ: u(undefined, a('')) },
			{ json: 'msrp', js: 'msrp', typ: u(undefined, 3.14) },
			{ json: 'numberOfChannels', js: 'numberOfChannels', typ: u(undefined, '') },
			{ json: 'numberOfKeys', js: 'numberOfKeys', typ: u(undefined, 3.14) },
			{ json: 'numberOfSpeakers', js: 'numberOfSpeakers', typ: u(undefined, 3.14) },
			{ json: 'pieceCount', js: 'pieceCount', typ: u(undefined, 0) },
			{ json: 'processorSpeed', js: 'processorSpeed', typ: u(undefined, r('ComputerComponentsProcessorSpeed')) },
			{ json: 'processorType', js: 'processorType', typ: u(undefined, a('')) },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: u(undefined, a('')) },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: '' },
			{ json: 'rackSize', js: 'rackSize', typ: u(undefined, '') },
			{ json: 'RAIDlevel', js: 'RAIDlevel', typ: u(undefined, r('RAIDLevel')) },
			{ json: 'ramMemory', js: 'ramMemory', typ: u(undefined, r('ComputerComponentsRAMMemory')) },
			{ json: 'RAMSpeed', js: 'RAMSpeed', typ: u(undefined, '') },
			{ json: 'resolution', js: 'resolution', typ: u(undefined, '') },
			{ json: 'screenSize', js: 'screenSize', typ: u(undefined, r('ComputerComponentsScreenSize')) },
			{ json: 'shortDescription', js: 'shortDescription', typ: '' },
			{ json: 'swatchImages', js: 'swatchImages', typ: u(undefined, a(r('ComputerComponentsSwatchImage'))) },
			{
				json: 'variantAttributeNames',
				js: 'variantAttributeNames',
				typ: u(undefined, a(r('ComputerComponentsVariantAttributeName'))),
			},
			{ json: 'variantGroupId', js: 'variantGroupId', typ: u(undefined, '') },
			{ json: 'warrantyText', js: 'warrantyText', typ: u(undefined, '') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: u(undefined, '') },
			{ json: 'wirelessTechnologies', js: 'wirelessTechnologies', typ: u(undefined, a('')) },
		],
		false
	),
	ComputerComponentsAdditionalProductAttribute: o(
		[
			{ json: 'productAttributeName', js: 'productAttributeName', typ: '' },
			{ json: 'productAttributeValue', js: 'productAttributeValue', typ: '' },
		],
		false
	),
	ComputerComponentsCableLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('CableLengthUnit')) },
		],
		false
	),
	ComputerComponentsHardDriveCapacity: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('HardDriveCapacityUnit')) },
		],
		false
	),
	ComputerComponentsMaximumRAMSupported: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('HardDriveCapacityUnit')) },
		],
		false
	),
	ComputerComponentsProcessorSpeed: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('ProcessorSpeedUnit')) },
		],
		false
	),
	ComputerComponentsRAMMemory: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('HardDriveCapacityUnit')) },
		],
		false
	),
	ComputerComponentsScreenSize: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('ScreenSizeUnit')) },
		],
		false
	),
	ComputerComponentsSwatchImage: o(
		[
			{ json: 'swatchImageUrl', js: 'swatchImageUrl', typ: u(undefined, '') },
			{
				json: 'swatchVariantAttribute',
				js: 'swatchVariantAttribute',
				typ: u(undefined, r('TentacledSwatchVariantAttribute')),
			},
		],
		false
	),
	Computers: o(
		[
			{
				json: 'additionalProductAttributes',
				js: 'additionalProductAttributes',
				typ: u(undefined, a(r('ComputersAdditionalProductAttribute'))),
			},
			{ json: 'batteryLife', js: 'batteryLife', typ: u(undefined, r('ComputersBatteryLife')) },
			{ json: 'color', js: 'color', typ: u(undefined, a('')) },
			{ json: 'colorCategory', js: 'colorCategory', typ: u(undefined, a(r('ColorCategory'))) },
			{ json: 'computerStyle', js: 'computerStyle', typ: u(undefined, '') },
			{ json: 'connections', js: 'connections', typ: u(undefined, a('')) },
			{ json: 'count', js: 'count', typ: u(undefined, '') },
			{ json: 'countPerPack', js: 'countPerPack', typ: u(undefined, 0) },
			{ json: 'dataIntegrityCheck', js: 'dataIntegrityCheck', typ: u(undefined, r('DataIntegrityCheck')) },
			{ json: 'displayTechnology', js: 'displayTechnology', typ: u(undefined, '') },
			{ json: 'edition', js: 'edition', typ: u(undefined, '') },
			{ json: 'features', js: 'features', typ: u(undefined, a('')) },
			{ json: 'formFactor', js: 'formFactor', typ: u(undefined, '') },
			{
				json: 'frontFacingCameraMegapixels',
				js: 'frontFacingCameraMegapixels',
				typ: u(undefined, r('ComputersFrontFacingCameraMegapixels')),
			},
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: u(undefined, a('')) },
			{ json: 'graphicsInformation', js: 'graphicsInformation', typ: u(undefined, '') },
			{ json: 'hardDriveCapacity', js: 'hardDriveCapacity', typ: u(undefined, r('ComputersHardDriveCapacity')) },
			{ json: 'hasSignalBooster', js: 'hasSignalBooster', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'hasTouchscreen', js: 'hasTouchscreen', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'internalExternal', js: 'internalExternal', typ: u(undefined, r('InternalExternal')) },
			{ json: 'isPortable', js: 'isPortable', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: u(undefined, a('')) },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: '' },
			{ json: 'manufacturer', js: 'manufacturer', typ: '' },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: u(undefined, '') },
			{
				json: 'maximumRamSupported',
				js: 'maximumRamSupported',
				typ: u(undefined, r('ComputersMaximumRAMSupported')),
			},
			{ json: 'memoryCardType', js: 'memoryCardType', typ: u(undefined, a('')) },
			{ json: 'modelNumber', js: 'modelNumber', typ: u(undefined, '') },
			{ json: 'mountType', js: 'mountType', typ: u(undefined, a('')) },
			{ json: 'msrp', js: 'msrp', typ: u(undefined, 3.14) },
			{ json: 'numberOfChannels', js: 'numberOfChannels', typ: u(undefined, '') },
			{ json: 'numberOfKeys', js: 'numberOfKeys', typ: u(undefined, 3.14) },
			{ json: 'operatingSystem', js: 'operatingSystem', typ: u(undefined, a('')) },
			{ json: 'opticalDrive', js: 'opticalDrive', typ: u(undefined, '') },
			{ json: 'processorSpeed', js: 'processorSpeed', typ: u(undefined, r('ComputersProcessorSpeed')) },
			{ json: 'processorType', js: 'processorType', typ: u(undefined, a('')) },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: u(undefined, a('')) },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: '' },
			{ json: 'RAIDlevel', js: 'RAIDlevel', typ: u(undefined, r('RAIDLevel')) },
			{ json: 'ramMemory', js: 'ramMemory', typ: u(undefined, r('ComputersRAMMemory')) },
			{ json: 'RAMSpeed', js: 'RAMSpeed', typ: u(undefined, '') },
			{
				json: 'rearCameraMegapixels',
				js: 'rearCameraMegapixels',
				typ: u(undefined, r('ComputersRearCameraMegapixels')),
			},
			{ json: 'resolution', js: 'resolution', typ: u(undefined, '') },
			{ json: 'screenSize', js: 'screenSize', typ: u(undefined, r('ComputersScreenSize')) },
			{ json: 'shortDescription', js: 'shortDescription', typ: '' },
			{ json: 'swatchImages', js: 'swatchImages', typ: u(undefined, a(r('ComputersSwatchImage'))) },
			{
				json: 'variantAttributeNames',
				js: 'variantAttributeNames',
				typ: u(undefined, a(r('ComputersVariantAttributeName'))),
			},
			{ json: 'variantGroupId', js: 'variantGroupId', typ: u(undefined, '') },
			{ json: 'warrantyText', js: 'warrantyText', typ: u(undefined, '') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: u(undefined, '') },
			{ json: 'wirelessTechnologies', js: 'wirelessTechnologies', typ: u(undefined, a('')) },
		],
		false
	),
	ComputersAdditionalProductAttribute: o(
		[
			{ json: 'productAttributeName', js: 'productAttributeName', typ: '' },
			{ json: 'productAttributeValue', js: 'productAttributeValue', typ: '' },
		],
		false
	),
	ComputersBatteryLife: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('StandbyTimeUnit')) },
		],
		false
	),
	ComputersFrontFacingCameraMegapixels: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('NumberOfMegapixelsUnit')) },
		],
		false
	),
	ComputersHardDriveCapacity: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('HardDriveCapacityUnit')) },
		],
		false
	),
	ComputersMaximumRAMSupported: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('HardDriveCapacityUnit')) },
		],
		false
	),
	ComputersProcessorSpeed: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('ProcessorSpeedUnit')) },
		],
		false
	),
	ComputersRAMMemory: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('HardDriveCapacityUnit')) },
		],
		false
	),
	ComputersRearCameraMegapixels: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('NumberOfMegapixelsUnit')) },
		],
		false
	),
	ComputersScreenSize: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('ScreenSizeUnit')) },
		],
		false
	),
	ComputersSwatchImage: o(
		[
			{ json: 'swatchImageUrl', js: 'swatchImageUrl', typ: u(undefined, '') },
			{
				json: 'swatchVariantAttribute',
				js: 'swatchVariantAttribute',
				typ: u(undefined, r('StickySwatchVariantAttribute')),
			},
		],
		false
	),
	Costumes: o(
		[
			{
				json: 'additionalProductAttributes',
				js: 'additionalProductAttributes',
				typ: u(undefined, a(r('CostumesAdditionalProductAttribute'))),
			},
			{ json: 'animalType', js: 'animalType', typ: u(undefined, '') },
			{
				json: 'assembledProductHeight',
				js: 'assembledProductHeight',
				typ: u(undefined, r('CostumesAssembledProductHeight')),
			},
			{
				json: 'assembledProductLength',
				js: 'assembledProductLength',
				typ: u(undefined, r('CostumesAssembledProductLength')),
			},
			{
				json: 'assembledProductWeight',
				js: 'assembledProductWeight',
				typ: u(undefined, r('CostumesAssembledProductWeight')),
			},
			{
				json: 'assembledProductWidth',
				js: 'assembledProductWidth',
				typ: u(undefined, r('CostumesAssembledProductWidth')),
			},
			{ json: 'character', js: 'character', typ: u(undefined, a('')) },
			{ json: 'clothingSize', js: 'clothingSize', typ: u(undefined, '') },
			{
				json: 'clothingSizeGroup',
				js: 'clothingSizeGroup',
				typ: u(undefined, r('CeremonialClothingAccessoriesClothingSizeGroup')),
			},
			{ json: 'color', js: 'color', typ: u(undefined, a('')) },
			{ json: 'colorCategory', js: 'colorCategory', typ: u(undefined, a(r('ColorCategory'))) },
			{ json: 'count', js: 'count', typ: u(undefined, '') },
			{ json: 'countPerPack', js: 'countPerPack', typ: u(undefined, 0) },
			{ json: 'countryOfOriginTextiles', js: 'countryOfOriginTextiles', typ: r('CountryOfOriginTextiles') },
			{ json: 'fabricCareInstructions', js: 'fabricCareInstructions', typ: u(undefined, a('')) },
			{ json: 'fabricContent', js: 'fabricContent', typ: u(undefined, a(r('CostumesFabricContent'))) },
			{ json: 'features', js: 'features', typ: u(undefined, a('')) },
			{ json: 'gender', js: 'gender', typ: u(undefined, r('BabyClothingGender')) },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: u(undefined, a('')) },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: u(undefined, a('')) },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: '' },
			{ json: 'manufacturer', js: 'manufacturer', typ: '' },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: u(undefined, '') },
			{ json: 'material', js: 'material', typ: u(undefined, a('')) },
			{ json: 'modelNumber', js: 'modelNumber', typ: u(undefined, '') },
			{ json: 'msrp', js: 'msrp', typ: u(undefined, 3.14) },
			{ json: 'occasion', js: 'occasion', typ: u(undefined, a('')) },
			{ json: 'pattern', js: 'pattern', typ: u(undefined, a('')) },
			{ json: 'pieceCount', js: 'pieceCount', typ: u(undefined, 0) },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: u(undefined, a('')) },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: '' },
			{ json: 'recommendedUses', js: 'recommendedUses', typ: u(undefined, a('')) },
			{ json: 'shortDescription', js: 'shortDescription', typ: '' },
			{ json: 'size', js: 'size', typ: u(undefined, '') },
			{ json: 'smallPartsWarnings', js: 'smallPartsWarnings', typ: a(r('SmallPartsWarningCode')) },
			{ json: 'swatchImages', js: 'swatchImages', typ: u(undefined, a(r('CostumesSwatchImage'))) },
			{ json: 'targetAudience', js: 'targetAudience', typ: u(undefined, a('')) },
			{ json: 'theme', js: 'theme', typ: u(undefined, a('')) },
			{
				json: 'variantAttributeNames',
				js: 'variantAttributeNames',
				typ: u(undefined, a(r('CostumesVariantAttributeName'))),
			},
			{ json: 'variantGroupId', js: 'variantGroupId', typ: u(undefined, '') },
			{ json: 'wigStyles', js: 'wigStyles', typ: u(undefined, a('')) },
		],
		false
	),
	CostumesAdditionalProductAttribute: o(
		[
			{ json: 'productAttributeName', js: 'productAttributeName', typ: '' },
			{ json: 'productAttributeValue', js: 'productAttributeValue', typ: '' },
		],
		false
	),
	CostumesAssembledProductHeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	CostumesAssembledProductLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	CostumesAssembledProductWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductWeightUnit')) },
		],
		false
	),
	CostumesAssembledProductWidth: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	CostumesFabricContent: o(
		[
			{ json: 'materialName', js: 'materialName', typ: u(undefined, '') },
			{ json: 'materialPercentage', js: 'materialPercentage', typ: u(undefined, 3.14) },
		],
		false
	),
	CostumesSwatchImage: o(
		[
			{ json: 'swatchImageUrl', js: 'swatchImageUrl', typ: u(undefined, '') },
			{
				json: 'swatchVariantAttribute',
				js: 'swatchVariantAttribute',
				typ: u(undefined, r('CostumesVariantAttributeName')),
			},
		],
		false
	),
	Cycling: o(
		[
			{
				json: 'additionalProductAttributes',
				js: 'additionalProductAttributes',
				typ: u(undefined, a(r('CyclingAdditionalProductAttribute'))),
			},
			{ json: 'ageGroup', js: 'ageGroup', typ: u(undefined, a(r('ArtCraftAgeGroup'))) },
			{
				json: 'assembledProductHeight',
				js: 'assembledProductHeight',
				typ: u(undefined, r('CyclingAssembledProductHeight')),
			},
			{
				json: 'assembledProductLength',
				js: 'assembledProductLength',
				typ: u(undefined, r('CyclingAssembledProductLength')),
			},
			{
				json: 'assembledProductWeight',
				js: 'assembledProductWeight',
				typ: u(undefined, r('CyclingAssembledProductWeight')),
			},
			{
				json: 'assembledProductWidth',
				js: 'assembledProductWidth',
				typ: u(undefined, r('CyclingAssembledProductWidth')),
			},
			{ json: 'assemblyInstructions', js: 'assemblyInstructions', typ: u(undefined, '') },
			{ json: 'athlete', js: 'athlete', typ: u(undefined, a('')) },
			{ json: 'bicycleFrameSize', js: 'bicycleFrameSize', typ: u(undefined, r('BicycleFrameSize')) },
			{ json: 'bicycleTireSize', js: 'bicycleTireSize', typ: u(undefined, '') },
			{ json: 'bicycleWheelDiameter', js: 'bicycleWheelDiameter', typ: u(undefined, r('BicycleWheelDiameter')) },
			{ json: 'capacity', js: 'capacity', typ: u(undefined, '') },
			{ json: 'character', js: 'character', typ: u(undefined, a('')) },
			{ json: 'cleaningCareAndMaintenance', js: 'cleaningCareAndMaintenance', typ: u(undefined, '') },
			{ json: 'clothingSize', js: 'clothingSize', typ: u(undefined, '') },
			{ json: 'color', js: 'color', typ: u(undefined, a('')) },
			{ json: 'colorCategory', js: 'colorCategory', typ: u(undefined, a(r('ColorCategory'))) },
			{ json: 'count', js: 'count', typ: u(undefined, '') },
			{ json: 'countPerPack', js: 'countPerPack', typ: u(undefined, 0) },
			{ json: 'countryOfOriginTextiles', js: 'countryOfOriginTextiles', typ: r('CountryOfOriginTextiles') },
			{ json: 'dexterity', js: 'dexterity', typ: u(undefined, '') },
			{ json: 'fabricCareInstructions', js: 'fabricCareInstructions', typ: u(undefined, a('')) },
			{ json: 'fabricContent', js: 'fabricContent', typ: u(undefined, a(r('CyclingFabricContent'))) },
			{ json: 'features', js: 'features', typ: u(undefined, a('')) },
			{ json: 'finish', js: 'finish', typ: u(undefined, '') },
			{ json: 'gender', js: 'gender', typ: u(undefined, r('BabyClothingGender')) },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: u(undefined, a('')) },
			{ json: 'horsepower', js: 'horsepower', typ: u(undefined, r('CyclingHorsepower')) },
			{ json: 'isAssemblyRequired', js: 'isAssemblyRequired', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isFoldable', js: 'isFoldable', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPortable', js: 'isPortable', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPowered', js: 'isPowered', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isWaterproof', js: 'isWaterproof', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isWeatherResistant', js: 'isWeatherResistant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: u(undefined, a('')) },
			{ json: 'lightBulbType', js: 'lightBulbType', typ: u(undefined, '') },
			{ json: 'lockingMechanism', js: 'lockingMechanism', typ: u(undefined, '') },
			{ json: 'lockType', js: 'lockType', typ: u(undefined, '') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: '' },
			{ json: 'manufacturer', js: 'manufacturer', typ: '' },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: u(undefined, '') },
			{ json: 'material', js: 'material', typ: u(undefined, a('')) },
			{
				json: 'maximumRecommendedAge',
				js: 'maximumRecommendedAge',
				typ: u(undefined, r('CyclingMaximumRecommendedAge')),
			},
			{ json: 'maximumWeight', js: 'maximumWeight', typ: u(undefined, r('CyclingMaximumWeight')) },
			{
				json: 'minimumRecommendedAge',
				js: 'minimumRecommendedAge',
				typ: u(undefined, r('CyclingMinimumRecommendedAge')),
			},
			{ json: 'modelNumber', js: 'modelNumber', typ: u(undefined, '') },
			{ json: 'msrp', js: 'msrp', typ: u(undefined, 3.14) },
			{ json: 'numberOfSpeeds', js: 'numberOfSpeeds', typ: u(undefined, 0) },
			{ json: 'pattern', js: 'pattern', typ: u(undefined, a('')) },
			{ json: 'pieceCount', js: 'pieceCount', typ: u(undefined, 0) },
			{ json: 'powerType', js: 'powerType', typ: u(undefined, '') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: u(undefined, a('')) },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: '' },
			{ json: 'recommendedLocations', js: 'recommendedLocations', typ: u(undefined, a('')) },
			{ json: 'recommendedUses', js: 'recommendedUses', typ: u(undefined, a('')) },
			{ json: 'season', js: 'season', typ: u(undefined, a('')) },
			{ json: 'seatingCapacity', js: 'seatingCapacity', typ: u(undefined, 0) },
			{ json: 'shape', js: 'shape', typ: u(undefined, '') },
			{ json: 'shortDescription', js: 'shortDescription', typ: '' },
			{ json: 'size', js: 'size', typ: u(undefined, '') },
			{ json: 'smallPartsWarnings', js: 'smallPartsWarnings', typ: a(r('SmallPartsWarningCode')) },
			{ json: 'sport', js: 'sport', typ: u(undefined, a('')) },
			{ json: 'sportsLeague', js: 'sportsLeague', typ: u(undefined, a('')) },
			{ json: 'sportsTeam', js: 'sportsTeam', typ: u(undefined, a('')) },
			{ json: 'swatchImages', js: 'swatchImages', typ: u(undefined, a(r('CyclingSwatchImage'))) },
			{ json: 'tireDiameter', js: 'tireDiameter', typ: u(undefined, r('CyclingTireDiameter')) },
			{
				json: 'variantAttributeNames',
				js: 'variantAttributeNames',
				typ: u(undefined, a(r('CyclingVariantAttributeName'))),
			},
			{ json: 'variantGroupId', js: 'variantGroupId', typ: u(undefined, '') },
			{ json: 'warrantyText', js: 'warrantyText', typ: u(undefined, '') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: u(undefined, '') },
			{ json: 'wirelessTechnologies', js: 'wirelessTechnologies', typ: u(undefined, a('')) },
		],
		false
	),
	CyclingAdditionalProductAttribute: o(
		[
			{ json: 'productAttributeName', js: 'productAttributeName', typ: '' },
			{ json: 'productAttributeValue', js: 'productAttributeValue', typ: '' },
		],
		false
	),
	CyclingAssembledProductHeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	CyclingAssembledProductLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	CyclingAssembledProductWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductWeightUnit')) },
		],
		false
	),
	CyclingAssembledProductWidth: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	BicycleFrameSize: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('ScreenSizeUnit')) },
		],
		false
	),
	BicycleWheelDiameter: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('ScreenSizeUnit')) },
		],
		false
	),
	CyclingFabricContent: o(
		[
			{ json: 'materialName', js: 'materialName', typ: u(undefined, '') },
			{ json: 'materialPercentage', js: 'materialPercentage', typ: u(undefined, 3.14) },
		],
		false
	),
	CyclingHorsepower: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('HorsepowerUnit')) },
		],
		false
	),
	CyclingMaximumRecommendedAge: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 0) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('MaximumRecommendedAgeUnit')) },
		],
		false
	),
	CyclingMaximumWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('PurpleUnit')) },
		],
		false
	),
	CyclingMinimumRecommendedAge: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 0) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('MaximumRecommendedAgeUnit')) },
		],
		false
	),
	CyclingSwatchImage: o(
		[
			{ json: 'swatchImageUrl', js: 'swatchImageUrl', typ: u(undefined, '') },
			{
				json: 'swatchVariantAttribute',
				js: 'swatchVariantAttribute',
				typ: u(undefined, r('CyclingVariantAttributeName')),
			},
		],
		false
	),
	CyclingTireDiameter: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('ScreenSizeUnit')) },
		],
		false
	),
	DecorationsFavors: o(
		[
			{
				json: 'additionalProductAttributes',
				js: 'additionalProductAttributes',
				typ: u(undefined, a(r('DecorationsFavorsAdditionalProductAttribute'))),
			},
			{ json: 'ageGroup', js: 'ageGroup', typ: u(undefined, a(r('ArtCraftAgeGroup'))) },
			{
				json: 'assembledProductHeight',
				js: 'assembledProductHeight',
				typ: u(undefined, r('DecorationsFavorsAssembledProductHeight')),
			},
			{
				json: 'assembledProductLength',
				js: 'assembledProductLength',
				typ: u(undefined, r('DecorationsFavorsAssembledProductLength')),
			},
			{
				json: 'assembledProductWeight',
				js: 'assembledProductWeight',
				typ: u(undefined, r('DecorationsFavorsAssembledProductWeight')),
			},
			{
				json: 'assembledProductWidth',
				js: 'assembledProductWidth',
				typ: u(undefined, r('DecorationsFavorsAssembledProductWidth')),
			},
			{ json: 'assemblyInstructions', js: 'assemblyInstructions', typ: u(undefined, '') },
			{ json: 'athlete', js: 'athlete', typ: u(undefined, a('')) },
			{ json: 'autographedBy', js: 'autographedBy', typ: u(undefined, '') },
			{ json: 'character', js: 'character', typ: u(undefined, a('')) },
			{ json: 'color', js: 'color', typ: u(undefined, a('')) },
			{ json: 'colorCategory', js: 'colorCategory', typ: u(undefined, a(r('ColorCategory'))) },
			{
				json: 'compositeWoodCertificationCode',
				js: 'compositeWoodCertificationCode',
				typ: r('CompositeWoodCertificationCode'),
			},
			{ json: 'count', js: 'count', typ: u(undefined, '') },
			{ json: 'countPerPack', js: 'countPerPack', typ: u(undefined, 0) },
			{ json: 'diameter', js: 'diameter', typ: u(undefined, r('DecorationsFavorsDiameter')) },
			{ json: 'features', js: 'features', typ: u(undefined, a('')) },
			{ json: 'finish', js: 'finish', typ: u(undefined, '') },
			{ json: 'gender', js: 'gender', typ: u(undefined, r('BabyClothingGender')) },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: u(undefined, a('')) },
			{ json: 'holidayLightingStyle', js: 'holidayLightingStyle', typ: u(undefined, a('')) },
			{ json: 'isAdultProduct', js: 'isAdultProduct', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isAnimated', js: 'isAnimated', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isAssemblyRequired', js: 'isAssemblyRequired', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isInflatable', js: 'isInflatable', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: u(undefined, a('')) },
			{ json: 'lightBulbColor', js: 'lightBulbColor', typ: u(undefined, '') },
			{ json: 'lightBulbType', js: 'lightBulbType', typ: u(undefined, '') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: '' },
			{ json: 'manufacturer', js: 'manufacturer', typ: '' },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: u(undefined, '') },
			{ json: 'material', js: 'material', typ: u(undefined, a('')) },
			{ json: 'modelNumber', js: 'modelNumber', typ: u(undefined, '') },
			{ json: 'msrp', js: 'msrp', typ: u(undefined, 3.14) },
			{ json: 'numberOfLights', js: 'numberOfLights', typ: u(undefined, 0) },
			{ json: 'occasion', js: 'occasion', typ: u(undefined, a('')) },
			{ json: 'pattern', js: 'pattern', typ: u(undefined, a('')) },
			{ json: 'pieceCount', js: 'pieceCount', typ: u(undefined, 0) },
			{ json: 'powerType', js: 'powerType', typ: u(undefined, '') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: u(undefined, a('')) },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: '' },
			{ json: 'recommendedUses', js: 'recommendedUses', typ: u(undefined, a('')) },
			{ json: 'shape', js: 'shape', typ: u(undefined, '') },
			{ json: 'shortDescription', js: 'shortDescription', typ: '' },
			{ json: 'size', js: 'size', typ: u(undefined, '') },
			{ json: 'smallPartsWarnings', js: 'smallPartsWarnings', typ: a(r('SmallPartsWarningCode')) },
			{ json: 'sportsLeague', js: 'sportsLeague', typ: u(undefined, a('')) },
			{ json: 'sportsTeam', js: 'sportsTeam', typ: u(undefined, a('')) },
			{ json: 'swatchImages', js: 'swatchImages', typ: u(undefined, a(r('DecorationsFavorsSwatchImage'))) },
			{ json: 'theme', js: 'theme', typ: u(undefined, a('')) },
			{
				json: 'variantAttributeNames',
				js: 'variantAttributeNames',
				typ: u(undefined, a(r('DecorationsFavorsVariantAttributeName'))),
			},
			{ json: 'variantGroupId', js: 'variantGroupId', typ: u(undefined, '') },
			{ json: 'watts', js: 'watts', typ: u(undefined, r('DecorationsFavorsWatts')) },
		],
		false
	),
	DecorationsFavorsAdditionalProductAttribute: o(
		[
			{ json: 'productAttributeName', js: 'productAttributeName', typ: '' },
			{ json: 'productAttributeValue', js: 'productAttributeValue', typ: '' },
		],
		false
	),
	DecorationsFavorsAssembledProductHeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	DecorationsFavorsAssembledProductLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	DecorationsFavorsAssembledProductWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductWeightUnit')) },
		],
		false
	),
	DecorationsFavorsAssembledProductWidth: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	DecorationsFavorsDiameter: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('RoughInDistanceUnit')) },
		],
		false
	),
	DecorationsFavorsSwatchImage: o(
		[
			{ json: 'swatchImageUrl', js: 'swatchImageUrl', typ: u(undefined, '') },
			{
				json: 'swatchVariantAttribute',
				js: 'swatchVariantAttribute',
				typ: u(undefined, r('DecorationsFavorsVariantAttributeName')),
			},
		],
		false
	),
	DecorationsFavorsWatts: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('WattsUnit')) },
		],
		false
	),
	Electrical: o(
		[
			{ json: 'accessoriesIncluded', js: 'accessoriesIncluded', typ: u(undefined, a('')) },
			{
				json: 'additionalProductAttributes',
				js: 'additionalProductAttributes',
				typ: u(undefined, a(r('ElectricalAdditionalProductAttribute'))),
			},
			{ json: 'americanWireGauge', js: 'americanWireGauge', typ: u(undefined, 0) },
			{ json: 'amps', js: 'amps', typ: u(undefined, r('ElectricalAmps')) },
			{
				json: 'assembledProductHeight',
				js: 'assembledProductHeight',
				typ: u(undefined, r('ElectricalAssembledProductHeight')),
			},
			{
				json: 'assembledProductLength',
				js: 'assembledProductLength',
				typ: u(undefined, r('ElectricalAssembledProductLength')),
			},
			{
				json: 'assembledProductWeight',
				js: 'assembledProductWeight',
				typ: u(undefined, r('ElectricalAssembledProductWeight')),
			},
			{
				json: 'assembledProductWidth',
				js: 'assembledProductWidth',
				typ: u(undefined, r('ElectricalAssembledProductWidth')),
			},
			{ json: 'athlete', js: 'athlete', typ: u(undefined, a('')) },
			{ json: 'baseColor', js: 'baseColor', typ: u(undefined, '') },
			{ json: 'baseFinish', js: 'baseFinish', typ: u(undefined, '') },
			{ json: 'beamAngle', js: 'beamAngle', typ: u(undefined, r('ElectricalBeamAngle')) },
			{ json: 'beamSpread', js: 'beamSpread', typ: u(undefined, r('ElectricalBeamSpread')) },
			{ json: 'brightness', js: 'brightness', typ: u(undefined, r('ElectricalBrightness')) },
			{ json: 'character', js: 'character', typ: u(undefined, a('')) },
			{ json: 'cleaningCareAndMaintenance', js: 'cleaningCareAndMaintenance', typ: u(undefined, '') },
			{ json: 'color', js: 'color', typ: u(undefined, a('')) },
			{ json: 'colorCategory', js: 'colorCategory', typ: u(undefined, a(r('ColorCategory'))) },
			{ json: 'colorTemperature', js: 'colorTemperature', typ: u(undefined, r('ColorTemperature')) },
			{
				json: 'compatibleConduitSizes',
				js: 'compatibleConduitSizes',
				typ: u(undefined, a(r('CompatibleConduitSize'))),
			},
			{ json: 'conductorMaterial', js: 'conductorMaterial', typ: u(undefined, '') },
			{ json: 'count', js: 'count', typ: u(undefined, '') },
			{ json: 'countPerPack', js: 'countPerPack', typ: u(undefined, 0) },
			{ json: 'decibelRating', js: 'decibelRating', typ: u(undefined, r('ElectricalDecibelRating')) },
			{ json: 'electricalBallastFactor', js: 'electricalBallastFactor', typ: u(undefined, 3.14) },
			{
				json: 'estimatedEnergyCostPerYear',
				js: 'estimatedEnergyCostPerYear',
				typ: u(undefined, r('EstimatedEnergyCostPerYear')),
			},
			{ json: 'features', js: 'features', typ: u(undefined, a('')) },
			{ json: 'finish', js: 'finish', typ: u(undefined, '') },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: u(undefined, a('')) },
			{ json: 'homeDecorStyle', js: 'homeDecorStyle', typ: u(undefined, '') },
			{ json: 'horsepower', js: 'horsepower', typ: u(undefined, r('ElectricalHorsepower')) },
			{ json: 'impedance', js: 'impedance', typ: u(undefined, r('ElectricalImpedance')) },
			{ json: 'isDarkSkyCompliant', js: 'isDarkSkyCompliant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isEnergyStarCertified', js: 'isEnergyStarCertified', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isFireResistant', js: 'isFireResistant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isRatedForOutdoorUse', js: 'isRatedForOutdoorUse', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isWaterproof', js: 'isWaterproof', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: u(undefined, a('')) },
			{ json: 'lifespan', js: 'lifespan', typ: u(undefined, '') },
			{ json: 'lightBulbBaseType', js: 'lightBulbBaseType', typ: u(undefined, r('LightBulbBaseCode')) },
			{ json: 'lightBulbColor', js: 'lightBulbColor', typ: u(undefined, '') },
			{ json: 'lightBulbShape', js: 'lightBulbShape', typ: u(undefined, r('LightBulbShape')) },
			{ json: 'lightBulbType', js: 'lightBulbType', typ: u(undefined, '') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: '' },
			{ json: 'manufacturer', js: 'manufacturer', typ: '' },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: u(undefined, '') },
			{ json: 'material', js: 'material', typ: u(undefined, a('')) },
			{ json: 'maximumEnergySurgeRating', js: 'maximumEnergySurgeRating', typ: u(undefined, '') },
			{ json: 'maximumRange', js: 'maximumRange', typ: u(undefined, '') },
			{ json: 'modelNumber', js: 'modelNumber', typ: u(undefined, '') },
			{ json: 'mountType', js: 'mountType', typ: u(undefined, a('')) },
			{ json: 'msrp', js: 'msrp', typ: u(undefined, 3.14) },
			{ json: 'numberOfGangs', js: 'numberOfGangs', typ: u(undefined, 0) },
			{ json: 'numberOfLights', js: 'numberOfLights', typ: u(undefined, 0) },
			{ json: 'numberOfPoles', js: 'numberOfPoles', typ: u(undefined, 0) },
			{ json: 'pattern', js: 'pattern', typ: u(undefined, a('')) },
			{ json: 'pieceCount', js: 'pieceCount', typ: u(undefined, 0) },
			{ json: 'powerType', js: 'powerType', typ: u(undefined, '') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: u(undefined, a('')) },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: '' },
			{ json: 'recommendedUses', js: 'recommendedUses', typ: u(undefined, a('')) },
			{ json: 'responseTime', js: 'responseTime', typ: u(undefined, r('ElectricalResponseTime')) },
			{ json: 'shadeMaterial', js: 'shadeMaterial', typ: u(undefined, '') },
			{ json: 'shadeStyle', js: 'shadeStyle', typ: u(undefined, '') },
			{ json: 'shape', js: 'shape', typ: u(undefined, '') },
			{ json: 'shortDescription', js: 'shortDescription', typ: '' },
			{ json: 'size', js: 'size', typ: u(undefined, '') },
			{ json: 'sportsLeague', js: 'sportsLeague', typ: u(undefined, a('')) },
			{ json: 'sportsTeam', js: 'sportsTeam', typ: u(undefined, a('')) },
			{ json: 'swatchImages', js: 'swatchImages', typ: u(undefined, a(r('ElectricalSwatchImage'))) },
			{
				json: 'variantAttributeNames',
				js: 'variantAttributeNames',
				typ: u(undefined, a(r('ElectricalVariantAttributeName'))),
			},
			{ json: 'variantGroupId', js: 'variantGroupId', typ: u(undefined, '') },
			{ json: 'volts', js: 'volts', typ: u(undefined, a(r('ElectricalVolt'))) },
			{ json: 'warrantyText', js: 'warrantyText', typ: u(undefined, '') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: u(undefined, '') },
			{ json: 'watts', js: 'watts', typ: u(undefined, r('ElectricalWatts')) },
		],
		false
	),
	ElectricalAdditionalProductAttribute: o(
		[
			{ json: 'productAttributeName', js: 'productAttributeName', typ: '' },
			{ json: 'productAttributeValue', js: 'productAttributeValue', typ: '' },
		],
		false
	),
	ElectricalAmps: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AmpsUnit')) },
		],
		false
	),
	ElectricalAssembledProductHeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	ElectricalAssembledProductLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	ElectricalAssembledProductWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductWeightUnit')) },
		],
		false
	),
	ElectricalAssembledProductWidth: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	ElectricalBeamAngle: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 0) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('BeamAngleUnit')) },
		],
		false
	),
	ElectricalBeamSpread: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('BeamSpreadUnit')) },
		],
		false
	),
	ElectricalBrightness: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('BrightnessUnit')) },
		],
		false
	),
	ColorTemperature: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 0) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('ColorTemperatureUnit')) },
		],
		false
	),
	CompatibleConduitSize: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('ScreenSizeUnit')) },
		],
		false
	),
	ElectricalDecibelRating: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('DecibelRatingUnit')) },
		],
		false
	),
	EstimatedEnergyCostPerYear: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('EstimatedEnergyCostPerYearUnit')) },
		],
		false
	),
	ElectricalHorsepower: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('HorsepowerUnit')) },
		],
		false
	),
	ElectricalImpedance: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, '') },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('ImpedanceUnit')) },
		],
		false
	),
	ElectricalResponseTime: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('MaximumShutterSpeedUnit')) },
		],
		false
	),
	ElectricalSwatchImage: o(
		[
			{ json: 'swatchImageUrl', js: 'swatchImageUrl', typ: u(undefined, '') },
			{
				json: 'swatchVariantAttribute',
				js: 'swatchVariantAttribute',
				typ: u(undefined, r('ElectricalVariantAttributeName')),
			},
		],
		false
	),
	ElectricalVolt: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('VoltUnit')) },
		],
		false
	),
	ElectricalWatts: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('WattsUnit')) },
		],
		false
	),
	ElectronicsAccessories: o(
		[
			{
				json: 'additionalProductAttributes',
				js: 'additionalProductAttributes',
				typ: u(undefined, a(r('ElectronicsAccessoriesAdditionalProductAttribute'))),
			},
			{
				json: 'assembledProductHeight',
				js: 'assembledProductHeight',
				typ: u(undefined, r('ElectronicsAccessoriesAssembledProductHeight')),
			},
			{
				json: 'assembledProductLength',
				js: 'assembledProductLength',
				typ: u(undefined, r('ElectronicsAccessoriesAssembledProductLength')),
			},
			{
				json: 'assembledProductWeight',
				js: 'assembledProductWeight',
				typ: u(undefined, r('ElectronicsAccessoriesAssembledProductWeight')),
			},
			{
				json: 'assembledProductWidth',
				js: 'assembledProductWidth',
				typ: u(undefined, r('ElectronicsAccessoriesAssembledProductWidth')),
			},
			{ json: 'audioFeatures', js: 'audioFeatures', typ: u(undefined, a('')) },
			{ json: 'audioPowerOutput', js: 'audioPowerOutput', typ: u(undefined, '') },
			{ json: 'cableLength', js: 'cableLength', typ: u(undefined, r('ElectronicsAccessoriesCableLength')) },
			{ json: 'color', js: 'color', typ: u(undefined, a('')) },
			{ json: 'colorCategory', js: 'colorCategory', typ: u(undefined, a(r('ColorCategory'))) },
			{ json: 'compatibleBrands', js: 'compatibleBrands', typ: u(undefined, a('')) },
			{ json: 'compatibleDevices', js: 'compatibleDevices', typ: u(undefined, a('')) },
			{ json: 'compatibleModels', js: 'compatibleModels', typ: u(undefined, a('')) },
			{ json: 'connections', js: 'connections', typ: u(undefined, a('')) },
			{ json: 'count', js: 'count', typ: u(undefined, '') },
			{ json: 'countPerPack', js: 'countPerPack', typ: u(undefined, 0) },
			{ json: 'dataTransferRate', js: 'dataTransferRate', typ: u(undefined, '') },
			{ json: 'edition', js: 'edition', typ: u(undefined, '') },
			{ json: 'features', js: 'features', typ: u(undefined, a('')) },
			{
				json: 'hardDriveCapacity',
				js: 'hardDriveCapacity',
				typ: u(undefined, r('ElectronicsAccessoriesHardDriveCapacity')),
			},
			{ json: 'headphoneFeatures', js: 'headphoneFeatures', typ: u(undefined, a('')) },
			{ json: 'headphoneStyle', js: 'headphoneStyle', typ: u(undefined, r('HeadphoneStyle')) },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: u(undefined, a('')) },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: '' },
			{ json: 'manufacturer', js: 'manufacturer', typ: '' },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: u(undefined, '') },
			{ json: 'maximumLoadWeight', js: 'maximumLoadWeight', typ: u(undefined, r('MaximumLoadWeight')) },
			{ json: 'maximumScreenSize', js: 'maximumScreenSize', typ: u(undefined, r('MaximumScreenSize')) },
			{ json: 'memoryCardType', js: 'memoryCardType', typ: u(undefined, a('')) },
			{ json: 'microphoneTechnology', js: 'microphoneTechnology', typ: u(undefined, '') },
			{ json: 'minimumScreenSize', js: 'minimumScreenSize', typ: u(undefined, r('MinimumScreenSize')) },
			{ json: 'modelNumber', js: 'modelNumber', typ: u(undefined, '') },
			{ json: 'mountingPattern', js: 'mountingPattern', typ: u(undefined, '') },
			{ json: 'movementDetection', js: 'movementDetection', typ: u(undefined, '') },
			{ json: 'msrp', js: 'msrp', typ: u(undefined, 3.14) },
			{ json: 'numberOfKeys', js: 'numberOfKeys', typ: u(undefined, 3.14) },
			{ json: 'numberOfSpeakers', js: 'numberOfSpeakers', typ: u(undefined, 3.14) },
			{ json: 'opticalDrive', js: 'opticalDrive', typ: u(undefined, '') },
			{
				json: 'peakAudioPowerCapacity',
				js: 'peakAudioPowerCapacity',
				typ: u(undefined, r('ElectronicsAccessoriesPeakAudioPowerCapacity')),
			},
			{ json: 'pieceCount', js: 'pieceCount', typ: u(undefined, 0) },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: u(undefined, a('')) },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: '' },
			{ json: 'recordableMediaFormats', js: 'recordableMediaFormats', typ: u(undefined, a('')) },
			{ json: 'resolution', js: 'resolution', typ: u(undefined, '') },
			{ json: 'screenSize', js: 'screenSize', typ: u(undefined, r('ElectronicsAccessoriesScreenSize')) },
			{ json: 'shortDescription', js: 'shortDescription', typ: '' },
			{ json: 'size', js: 'size', typ: u(undefined, '') },
			{ json: 'swatchImages', js: 'swatchImages', typ: u(undefined, a(r('ElectronicsAccessoriesSwatchImage'))) },
			{ json: 'tvAndMonitorMountType', js: 'tvAndMonitorMountType', typ: u(undefined, '') },
			{
				json: 'variantAttributeNames',
				js: 'variantAttributeNames',
				typ: u(undefined, a(r('ElectronicsAccessoriesVariantAttributeName'))),
			},
			{ json: 'variantGroupId', js: 'variantGroupId', typ: u(undefined, '') },
			{ json: 'warrantyText', js: 'warrantyText', typ: u(undefined, '') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: u(undefined, '') },
			{ json: 'wirelessTechnologies', js: 'wirelessTechnologies', typ: u(undefined, a('')) },
		],
		false
	),
	ElectronicsAccessoriesAdditionalProductAttribute: o(
		[
			{ json: 'productAttributeName', js: 'productAttributeName', typ: '' },
			{ json: 'productAttributeValue', js: 'productAttributeValue', typ: '' },
		],
		false
	),
	ElectronicsAccessoriesAssembledProductHeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	ElectronicsAccessoriesAssembledProductLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	ElectronicsAccessoriesAssembledProductWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductWeightUnit')) },
		],
		false
	),
	ElectronicsAccessoriesAssembledProductWidth: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	ElectronicsAccessoriesCableLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('CableLengthUnit')) },
		],
		false
	),
	ElectronicsAccessoriesHardDriveCapacity: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('HardDriveCapacityUnit')) },
		],
		false
	),
	MaximumLoadWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('MaximumLoadWeightUnit')) },
		],
		false
	),
	MaximumScreenSize: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('ScreenSizeUnit')) },
		],
		false
	),
	MinimumScreenSize: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('ScreenSizeUnit')) },
		],
		false
	),
	ElectronicsAccessoriesPeakAudioPowerCapacity: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('WattsUnit')) },
		],
		false
	),
	ElectronicsAccessoriesScreenSize: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('ScreenSizeUnit')) },
		],
		false
	),
	ElectronicsAccessoriesSwatchImage: o(
		[
			{ json: 'swatchImageUrl', js: 'swatchImageUrl', typ: u(undefined, '') },
			{
				json: 'swatchVariantAttribute',
				js: 'swatchVariantAttribute',
				typ: u(undefined, r('IndigoSwatchVariantAttribute')),
			},
		],
		false
	),
	ElectronicsCables: o(
		[
			{
				json: 'additionalProductAttributes',
				js: 'additionalProductAttributes',
				typ: u(undefined, a(r('ElectronicsCablesAdditionalProductAttribute'))),
			},
			{ json: 'cableLength', js: 'cableLength', typ: u(undefined, r('ElectronicsCablesCableLength')) },
			{ json: 'color', js: 'color', typ: u(undefined, a('')) },
			{ json: 'compatibleDevices', js: 'compatibleDevices', typ: u(undefined, a('')) },
			{ json: 'connections', js: 'connections', typ: u(undefined, a('')) },
			{ json: 'connectorFinish', js: 'connectorFinish', typ: u(undefined, '') },
			{ json: 'count', js: 'count', typ: u(undefined, '') },
			{ json: 'countPerPack', js: 'countPerPack', typ: u(undefined, 0) },
			{ json: 'dataTransferRate', js: 'dataTransferRate', typ: u(undefined, '') },
			{ json: 'features', js: 'features', typ: u(undefined, a('')) },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: u(undefined, a('')) },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: u(undefined, a('')) },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: '' },
			{ json: 'manufacturer', js: 'manufacturer', typ: '' },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: u(undefined, '') },
			{ json: 'modelNumber', js: 'modelNumber', typ: u(undefined, '') },
			{ json: 'msrp', js: 'msrp', typ: u(undefined, 3.14) },
			{ json: 'numberOfChannels', js: 'numberOfChannels', typ: u(undefined, '') },
			{ json: 'numberOfTwistedPairsPerCable', js: 'numberOfTwistedPairsPerCable', typ: u(undefined, 0) },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: u(undefined, a('')) },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: '' },
			{ json: 'shortDescription', js: 'shortDescription', typ: '' },
			{ json: 'swatchImages', js: 'swatchImages', typ: u(undefined, a(r('ElectronicsCablesSwatchImage'))) },
			{
				json: 'variantAttributeNames',
				js: 'variantAttributeNames',
				typ: u(undefined, a(r('ElectronicsCablesVariantAttributeName'))),
			},
			{ json: 'variantGroupId', js: 'variantGroupId', typ: u(undefined, '') },
			{ json: 'warrantyText', js: 'warrantyText', typ: u(undefined, '') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: u(undefined, '') },
		],
		false
	),
	ElectronicsCablesAdditionalProductAttribute: o(
		[
			{ json: 'productAttributeName', js: 'productAttributeName', typ: '' },
			{ json: 'productAttributeValue', js: 'productAttributeValue', typ: '' },
		],
		false
	),
	ElectronicsCablesCableLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('CableLengthUnit')) },
		],
		false
	),
	ElectronicsCablesSwatchImage: o(
		[
			{ json: 'swatchImageUrl', js: 'swatchImageUrl', typ: u(undefined, '') },
			{
				json: 'swatchVariantAttribute',
				js: 'swatchVariantAttribute',
				typ: u(undefined, r('ElectronicsCablesVariantAttributeName')),
			},
		],
		false
	),
	ElectronicsOther: o(
		[
			{
				json: 'additionalProductAttributes',
				js: 'additionalProductAttributes',
				typ: u(undefined, a(r('ElectronicsOtherAdditionalProductAttribute'))),
			},
			{ json: 'ageGroup', js: 'ageGroup', typ: u(undefined, a(r('ArtCraftAgeGroup'))) },
			{
				json: 'assembledProductHeight',
				js: 'assembledProductHeight',
				typ: u(undefined, r('ElectronicsOtherAssembledProductHeight')),
			},
			{
				json: 'assembledProductLength',
				js: 'assembledProductLength',
				typ: u(undefined, r('ElectronicsOtherAssembledProductLength')),
			},
			{
				json: 'assembledProductWeight',
				js: 'assembledProductWeight',
				typ: u(undefined, r('ElectronicsOtherAssembledProductWeight')),
			},
			{
				json: 'assembledProductWidth',
				js: 'assembledProductWidth',
				typ: u(undefined, r('ElectronicsOtherAssembledProductWidth')),
			},
			{ json: 'audioFeatures', js: 'audioFeatures', typ: u(undefined, a('')) },
			{ json: 'audioPowerOutput', js: 'audioPowerOutput', typ: u(undefined, '') },
			{ json: 'babyMonitorType', js: 'babyMonitorType', typ: u(undefined, a('')) },
			{ json: 'color', js: 'color', typ: u(undefined, a('')) },
			{ json: 'colorCategory', js: 'colorCategory', typ: u(undefined, a(r('ColorCategory'))) },
			{ json: 'connections', js: 'connections', typ: u(undefined, a('')) },
			{ json: 'count', js: 'count', typ: u(undefined, '') },
			{ json: 'countPerPack', js: 'countPerPack', typ: u(undefined, 0) },
			{ json: 'dataTransferRate', js: 'dataTransferRate', typ: u(undefined, '') },
			{ json: 'digitalAudioFileFormat', js: 'digitalAudioFileFormat', typ: u(undefined, a('')) },
			{ json: 'features', js: 'features', typ: u(undefined, a('')) },
			{
				json: 'hardDriveCapacity',
				js: 'hardDriveCapacity',
				typ: u(undefined, r('ElectronicsOtherHardDriveCapacity')),
			},
			{ json: 'impedance', js: 'impedance', typ: u(undefined, r('ElectronicsOtherImpedance')) },
			{ json: 'inflexKitComponent', js: 'inflexKitComponent', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isCordless', js: 'isCordless', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPortable', js: 'isPortable', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isSmart', js: 'isSmart', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: u(undefined, a('')) },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: '' },
			{ json: 'manufacturer', js: 'manufacturer', typ: '' },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: u(undefined, '') },
			{ json: 'memoryCardType', js: 'memoryCardType', typ: u(undefined, a('')) },
			{ json: 'microphoneTechnology', js: 'microphoneTechnology', typ: u(undefined, '') },
			{ json: 'modelNumber', js: 'modelNumber', typ: u(undefined, '') },
			{ json: 'msrp', js: 'msrp', typ: u(undefined, 3.14) },
			{ json: 'numberOfChannels', js: 'numberOfChannels', typ: u(undefined, '') },
			{ json: 'numberOfSpeakers', js: 'numberOfSpeakers', typ: u(undefined, 3.14) },
			{
				json: 'peakAudioPowerCapacity',
				js: 'peakAudioPowerCapacity',
				typ: u(undefined, r('ElectronicsOtherPeakAudioPowerCapacity')),
			},
			{ json: 'pieceCount', js: 'pieceCount', typ: u(undefined, 0) },
			{ json: 'platform', js: 'platform', typ: u(undefined, '') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: u(undefined, a('')) },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: '' },
			{ json: 'resolution', js: 'resolution', typ: u(undefined, '') },
			{ json: 'shortDescription', js: 'shortDescription', typ: '' },
			{ json: 'size', js: 'size', typ: u(undefined, '') },
			{ json: 'speakerDriver', js: 'speakerDriver', typ: u(undefined, '') },
			{ json: 'streamingServices', js: 'streamingServices', typ: u(undefined, '') },
			{ json: 'supportedMediaFormats', js: 'supportedMediaFormats', typ: u(undefined, '') },
			{ json: 'swatchImages', js: 'swatchImages', typ: u(undefined, a(r('ElectronicsOtherSwatchImage'))) },
			{
				json: 'variantAttributeNames',
				js: 'variantAttributeNames',
				typ: u(undefined, a(r('ElectronicsOtherVariantAttributeName'))),
			},
			{ json: 'variantGroupId', js: 'variantGroupId', typ: u(undefined, '') },
			{ json: 'warrantyText', js: 'warrantyText', typ: u(undefined, '') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: u(undefined, '') },
			{ json: 'wirelessTechnologies', js: 'wirelessTechnologies', typ: u(undefined, a('')) },
		],
		false
	),
	ElectronicsOtherAdditionalProductAttribute: o(
		[
			{ json: 'productAttributeName', js: 'productAttributeName', typ: '' },
			{ json: 'productAttributeValue', js: 'productAttributeValue', typ: '' },
		],
		false
	),
	ElectronicsOtherAssembledProductHeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	ElectronicsOtherAssembledProductLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	ElectronicsOtherAssembledProductWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductWeightUnit')) },
		],
		false
	),
	ElectronicsOtherAssembledProductWidth: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	ElectronicsOtherHardDriveCapacity: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('HardDriveCapacityUnit')) },
		],
		false
	),
	ElectronicsOtherImpedance: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, '') },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('ImpedanceUnit')) },
		],
		false
	),
	ElectronicsOtherPeakAudioPowerCapacity: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('WattsUnit')) },
		],
		false
	),
	ElectronicsOtherSwatchImage: o(
		[
			{ json: 'swatchImageUrl', js: 'swatchImageUrl', typ: u(undefined, '') },
			{
				json: 'swatchVariantAttribute',
				js: 'swatchVariantAttribute',
				typ: u(undefined, r('ElectronicsOtherVariantAttributeName')),
			},
		],
		false
	),
	FoodBeverage: o(
		[
			{
				json: 'additionalProductAttributes',
				js: 'additionalProductAttributes',
				typ: u(undefined, a(r('FoodBeverageAdditionalProductAttribute'))),
			},
			{ json: 'beefCut', js: 'beefCut', typ: u(undefined, '') },
			{ json: 'caffeineDesignation', js: 'caffeineDesignation', typ: u(undefined, r('CaffeineDesignation')) },
			{ json: 'calories', js: 'calories', typ: u(undefined, r('FoodBeverageCalories')) },
			{ json: 'caloriesFromFat', js: 'caloriesFromFat', typ: u(undefined, r('FoodBeverageCaloriesFromFat')) },
			{ json: 'character', js: 'character', typ: u(undefined, a('')) },
			{ json: 'containerType', js: 'containerType', typ: u(undefined, a('')) },
			{ json: 'count', js: 'count', typ: u(undefined, '') },
			{ json: 'countPerPack', js: 'countPerPack', typ: u(undefined, 0) },
			{ json: 'cuisine', js: 'cuisine', typ: u(undefined, a('')) },
			{ json: 'dietaryMethod', js: 'dietaryMethod', typ: u(undefined, a('')) },
			{ json: 'dietType', js: 'dietType', typ: u(undefined, r('DietType')) },
			{ json: 'flavor', js: 'flavor', typ: u(undefined, '') },
			{ json: 'foodAllergenStatements', js: 'foodAllergenStatements', typ: u(undefined, a('')) },
			{ json: 'foodForm', js: 'foodForm', typ: u(undefined, '') },
			{ json: 'foodPreparationTips', js: 'foodPreparationTips', typ: u(undefined, a('')) },
			{ json: 'ingredients', js: 'ingredients', typ: u(undefined, '') },
			{ json: 'instructions', js: 'instructions', typ: u(undefined, '') },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: u(undefined, a('')) },
			{ json: 'labelImage', js: 'labelImage', typ: a(r('FoodBeverageLabelImage')) },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: '' },
			{ json: 'manufacturer', js: 'manufacturer', typ: '' },
			{ json: 'meal', js: 'meal', typ: u(undefined, '') },
			{ json: 'mealStyle', js: 'mealStyle', typ: u(undefined, '') },
			{ json: 'msrp', js: 'msrp', typ: u(undefined, 3.14) },
			{ json: 'nutrientContentClaims', js: 'nutrientContentClaims', typ: u(undefined, a('')) },
			{ json: 'nutrientFootnote', js: 'nutrientFootnote', typ: u(undefined, '') },
			{ json: 'nutrients', js: 'nutrients', typ: u(undefined, a(r('FoodBeverageNutrient'))) },
			{ json: 'poultryCut', js: 'poultryCut', typ: u(undefined, '') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: u(undefined, a('')) },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: '' },
			{ json: 'puffedSnackType', js: 'puffedSnackType', typ: u(undefined, r('PuffedSnackType')) },
			{ json: 'releaseDate', js: 'releaseDate', typ: u(undefined, Date) },
			{ json: 'safeHandlingInstructions', js: 'safeHandlingInstructions', typ: u(undefined, '') },
			{ json: 'servingSize', js: 'servingSize', typ: u(undefined, '') },
			{ json: 'servingsPerContainer', js: 'servingsPerContainer', typ: u(undefined, 3.14) },
			{ json: 'shelfLife', js: 'shelfLife', typ: u(undefined, r('FoodBeverageShelfLife')) },
			{ json: 'shortDescription', js: 'shortDescription', typ: '' },
			{ json: 'size', js: 'size', typ: u(undefined, '') },
			{ json: 'spiceLevel', js: 'spiceLevel', typ: u(undefined, '') },
			{ json: 'swatchImages', js: 'swatchImages', typ: u(undefined, a(r('FoodBeverageSwatchImage'))) },
			{
				json: 'totalCarbohydrate',
				js: 'totalCarbohydrate',
				typ: u(undefined, r('FoodBeverageTotalCarbohydrate')),
			},
			{
				json: 'totalCarbohydratePercentageDailyValue',
				js: 'totalCarbohydratePercentageDailyValue',
				typ: u(undefined, 3.14),
			},
			{ json: 'totalFat', js: 'totalFat', typ: u(undefined, r('FoodBeverageTotalFat')) },
			{ json: 'totalFatPercentageDailyValue', js: 'totalFatPercentageDailyValue', typ: u(undefined, 3.14) },
			{ json: 'totalProtein', js: 'totalProtein', typ: u(undefined, r('FoodBeverageTotalProtein')) },
			{
				json: 'totalProteinPercentageDailyValue',
				js: 'totalProteinPercentageDailyValue',
				typ: u(undefined, 3.14),
			},
			{
				json: 'variantAttributeNames',
				js: 'variantAttributeNames',
				typ: u(undefined, a(r('FoodBeverageVariantAttributeName'))),
			},
			{ json: 'variantGroupId', js: 'variantGroupId', typ: u(undefined, '') },
		],
		false
	),
	FoodBeverageAdditionalProductAttribute: o(
		[
			{ json: 'productAttributeName', js: 'productAttributeName', typ: '' },
			{ json: 'productAttributeValue', js: 'productAttributeValue', typ: '' },
		],
		false
	),
	FoodBeverageCalories: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 0) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('CaloriesUnit')) },
		],
		false
	),
	FoodBeverageCaloriesFromFat: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 0) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('CaloriesUnit')) },
		],
		false
	),
	FoodBeverageLabelImage: o(
		[
			{ json: 'labelImageContains', js: 'labelImageContains', typ: r('LabelImageContains') },
			{ json: 'labelImageURL', js: 'labelImageURL', typ: '' },
		],
		false
	),
	FoodBeverageNutrient: o(
		[
			{ json: 'nutrientAmount', js: 'nutrientAmount', typ: u(undefined, '') },
			{ json: 'nutrientName', js: 'nutrientName', typ: u(undefined, '') },
			{ json: 'nutrientPercentageDailyValue', js: 'nutrientPercentageDailyValue', typ: u(undefined, '') },
		],
		false
	),
	FoodBeverageShelfLife: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 0) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('ShelfLifeUnit')) },
		],
		false
	),
	FoodBeverageSwatchImage: o(
		[
			{ json: 'swatchImageUrl', js: 'swatchImageUrl', typ: u(undefined, '') },
			{
				json: 'swatchVariantAttribute',
				js: 'swatchVariantAttribute',
				typ: u(undefined, r('FoodBeverageVariantAttributeName')),
			},
		],
		false
	),
	FoodBeverageTotalCarbohydrate: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('TotalCarbohydrateUnit')) },
		],
		false
	),
	FoodBeverageTotalFat: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('TotalCarbohydrateUnit')) },
		],
		false
	),
	FoodBeverageTotalProtein: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('TotalCarbohydrateUnit')) },
		],
		false
	),
	Footwear: o(
		[
			{ json: 'activity', js: 'activity', typ: u(undefined, a('')) },
			{
				json: 'additionalProductAttributes',
				js: 'additionalProductAttributes',
				typ: u(undefined, a(r('FootwearAdditionalProductAttribute'))),
			},
			{ json: 'ageGroup', js: 'ageGroup', typ: u(undefined, a(r('ArtCraftAgeGroup'))) },
			{ json: 'athlete', js: 'athlete', typ: u(undefined, a('')) },
			{ json: 'autographedBy', js: 'autographedBy', typ: u(undefined, '') },
			{
				json: 'bootShaftCircumference',
				js: 'bootShaftCircumference',
				typ: u(undefined, a(r('BootShaftCircumference'))),
			},
			{ json: 'bootShaftHeight', js: 'bootShaftHeight', typ: u(undefined, a(r('BootShaftHeight'))) },
			{ json: 'bootShaftStyle', js: 'bootShaftStyle', typ: u(undefined, a('')) },
			{ json: 'bootShaftWidthStyle', js: 'bootShaftWidthStyle', typ: u(undefined, a('')) },
			{ json: 'casualAndDressShoeType', js: 'casualAndDressShoeType', typ: u(undefined, '') },
			{ json: 'character', js: 'character', typ: u(undefined, a('')) },
			{ json: 'collection', js: 'collection', typ: u(undefined, '') },
			{ json: 'color', js: 'color', typ: a('') },
			{ json: 'colorCategory', js: 'colorCategory', typ: a(r('ColorCategory')) },
			{ json: 'count', js: 'count', typ: u(undefined, '') },
			{ json: 'countPerPack', js: 'countPerPack', typ: u(undefined, 0) },
			{ json: 'countryOfOriginTextiles', js: 'countryOfOriginTextiles', typ: r('CountryOfOriginTextiles') },
			{ json: 'embellishmentType', js: 'embellishmentType', typ: u(undefined, a('')) },
			{ json: 'fabricCareInstructions', js: 'fabricCareInstructions', typ: u(undefined, a('')) },
			{ json: 'fabricContent', js: 'fabricContent', typ: u(undefined, a(r('FootwearFabricContent'))) },
			{ json: 'features', js: 'features', typ: u(undefined, a('')) },
			{ json: 'footwearHeelStyle', js: 'footwearHeelStyle', typ: u(undefined, '') },
			{ json: 'gender', js: 'gender', typ: u(undefined, r('BabyClothingGender')) },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: u(undefined, a('')) },
			{ json: 'healthConcerns', js: 'healthConcerns', typ: u(undefined, a('')) },
			{ json: 'heelDrop', js: 'heelDrop', typ: u(undefined, r('HeelDrop')) },
			{ json: 'heelHeight', js: 'heelHeight', typ: u(undefined, r('HeelHeight')) },
			{ json: 'insoleFeature', js: 'insoleFeature', typ: u(undefined, a('')) },
			{ json: 'isOrthopedic', js: 'isOrthopedic', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isWaterResistant', js: 'isWaterResistant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: u(undefined, a('')) },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: '' },
			{ json: 'manufacturer', js: 'manufacturer', typ: '' },
			{ json: 'material', js: 'material', typ: u(undefined, a('')) },
			{ json: 'msrp', js: 'msrp', typ: u(undefined, 3.14) },
			{ json: 'occasion', js: 'occasion', typ: u(undefined, a('')) },
			{ json: 'pattern', js: 'pattern', typ: u(undefined, a('')) },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: u(undefined, a('')) },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: '' },
			{ json: 'recommendedLocations', js: 'recommendedLocations', typ: u(undefined, a('')) },
			{ json: 'season', js: 'season', typ: u(undefined, a('')) },
			{ json: 'seasonCode', js: 'seasonCode', typ: u(undefined, r('SeasonCode')) },
			{ json: 'seasonYear', js: 'seasonYear', typ: u(undefined, 0) },
			{ json: 'secondaryMaterial', js: 'secondaryMaterial', typ: u(undefined, a('')) },
			{ json: 'shoeCategory', js: 'shoeCategory', typ: u(undefined, r('ShoeCategory')) },
			{ json: 'shoeClosure', js: 'shoeClosure', typ: u(undefined, '') },
			{ json: 'shoeSize', js: 'shoeSize', typ: '' },
			{ json: 'shoeSizeSystem', js: 'shoeSizeSystem', typ: u(undefined, r('ShoeSizeSystem')) },
			{ json: 'shoeSoleMaterial', js: 'shoeSoleMaterial', typ: u(undefined, '') },
			{ json: 'shoeStyle', js: 'shoeStyle', typ: u(undefined, '') },
			{ json: 'shoeWidth', js: 'shoeWidth', typ: u(undefined, '') },
			{ json: 'shortDescription', js: 'shortDescription', typ: '' },
			{ json: 'size', js: 'size', typ: u(undefined, '') },
			{ json: 'smallPartsWarnings', js: 'smallPartsWarnings', typ: a(r('SmallPartsWarningCode')) },
			{ json: 'sportsLeague', js: 'sportsLeague', typ: u(undefined, a('')) },
			{ json: 'sportsTeam', js: 'sportsTeam', typ: u(undefined, a('')) },
			{ json: 'swatchImages', js: 'swatchImages', typ: u(undefined, a(r('FootwearSwatchImage'))) },
			{ json: 'toeStyle', js: 'toeStyle', typ: u(undefined, '') },
			{
				json: 'variantAttributeNames',
				js: 'variantAttributeNames',
				typ: u(undefined, a(r('FootwearVariantAttributeName'))),
			},
			{ json: 'variantGroupId', js: 'variantGroupId', typ: u(undefined, '') },
			{ json: 'warrantyText', js: 'warrantyText', typ: u(undefined, '') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: u(undefined, '') },
		],
		false
	),
	FootwearAdditionalProductAttribute: o(
		[
			{ json: 'productAttributeName', js: 'productAttributeName', typ: '' },
			{ json: 'productAttributeValue', js: 'productAttributeValue', typ: '' },
		],
		false
	),
	BootShaftCircumference: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('BootShaftCircumferenceUnit')) },
		],
		false
	),
	BootShaftHeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('BootShaftCircumferenceUnit')) },
		],
		false
	),
	FootwearFabricContent: o(
		[
			{ json: 'materialName', js: 'materialName', typ: u(undefined, '') },
			{ json: 'materialPercentage', js: 'materialPercentage', typ: u(undefined, 3.14) },
		],
		false
	),
	HeelDrop: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('BootShaftCircumferenceUnit')) },
		],
		false
	),
	HeelHeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('HeelHeightUnit')) },
		],
		false
	),
	FootwearSwatchImage: o(
		[
			{ json: 'swatchImageUrl', js: 'swatchImageUrl', typ: u(undefined, '') },
			{
				json: 'swatchVariantAttribute',
				js: 'swatchVariantAttribute',
				typ: u(undefined, r('FootwearVariantAttributeName')),
			},
		],
		false
	),
	FuelsLubricants: o(
		[
			{
				json: 'additionalProductAttributes',
				js: 'additionalProductAttributes',
				typ: u(undefined, a(r('FuelsLubricantsAdditionalProductAttribute'))),
			},
			{ json: 'count', js: 'count', typ: u(undefined, '') },
			{ json: 'countPerPack', js: 'countPerPack', typ: u(undefined, 0) },
			{ json: 'features', js: 'features', typ: u(undefined, a('')) },
			{ json: 'fluidOunces', js: 'fluidOunces', typ: u(undefined, r('FuelsLubricantsFluidOunces')) },
			{ json: 'form', js: 'form', typ: u(undefined, '') },
			{ json: 'fuelType', js: 'fuelType', typ: u(undefined, '') },
			{ json: 'instructions', js: 'instructions', typ: u(undefined, '') },
			{ json: 'isBiodegradable', js: 'isBiodegradable', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isCombustible', js: 'isCombustible', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isEnergyStarCertified', js: 'isEnergyStarCertified', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isFlammable', js: 'isFlammable', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isRefillable', js: 'isRefillable', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: u(undefined, a('')) },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: '' },
			{ json: 'manufacturer', js: 'manufacturer', typ: '' },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: u(undefined, '') },
			{ json: 'modelNumber', js: 'modelNumber', typ: u(undefined, '') },
			{ json: 'msrp', js: 'msrp', typ: u(undefined, 3.14) },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: u(undefined, a('')) },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: '' },
			{ json: 'recommendedUses', js: 'recommendedUses', typ: u(undefined, a('')) },
			{ json: 'shelfLife', js: 'shelfLife', typ: u(undefined, r('FuelsLubricantsShelfLife')) },
			{ json: 'shortDescription', js: 'shortDescription', typ: '' },
			{ json: 'size', js: 'size', typ: u(undefined, '') },
			{ json: 'swatchImages', js: 'swatchImages', typ: u(undefined, a(r('FuelsLubricantsSwatchImage'))) },
			{ json: 'systemOfMeasurement', js: 'systemOfMeasurement', typ: u(undefined, '') },
			{
				json: 'variantAttributeNames',
				js: 'variantAttributeNames',
				typ: u(undefined, a(r('FuelsLubricantsVariantAttributeName'))),
			},
			{ json: 'variantGroupId', js: 'variantGroupId', typ: u(undefined, '') },
		],
		false
	),
	FuelsLubricantsAdditionalProductAttribute: o(
		[
			{ json: 'productAttributeName', js: 'productAttributeName', typ: '' },
			{ json: 'productAttributeValue', js: 'productAttributeValue', typ: '' },
		],
		false
	),
	FuelsLubricantsFluidOunces: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('FluidOuncesSupplying100CaloriesUnit')) },
		],
		false
	),
	FuelsLubricantsShelfLife: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 0) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('ShelfLifeUnit')) },
		],
		false
	),
	FuelsLubricantsSwatchImage: o(
		[
			{ json: 'swatchImageUrl', js: 'swatchImageUrl', typ: u(undefined, '') },
			{
				json: 'swatchVariantAttribute',
				js: 'swatchVariantAttribute',
				typ: u(undefined, r('FuelsLubricantsVariantAttributeName')),
			},
		],
		false
	),
	Funeral: o(
		[
			{
				json: 'additionalProductAttributes',
				js: 'additionalProductAttributes',
				typ: u(undefined, a(r('FuneralAdditionalProductAttribute'))),
			},
			{
				json: 'assembledProductHeight',
				js: 'assembledProductHeight',
				typ: u(undefined, r('FuneralAssembledProductHeight')),
			},
			{
				json: 'assembledProductLength',
				js: 'assembledProductLength',
				typ: u(undefined, r('FuneralAssembledProductLength')),
			},
			{
				json: 'assembledProductWeight',
				js: 'assembledProductWeight',
				typ: u(undefined, r('FuneralAssembledProductWeight')),
			},
			{
				json: 'assembledProductWidth',
				js: 'assembledProductWidth',
				typ: u(undefined, r('FuneralAssembledProductWidth')),
			},
			{ json: 'assemblyInstructions', js: 'assemblyInstructions', typ: u(undefined, '') },
			{ json: 'color', js: 'color', typ: u(undefined, a('')) },
			{ json: 'colorCategory', js: 'colorCategory', typ: u(undefined, a(r('ColorCategory'))) },
			{
				json: 'compositeWoodCertificationCode',
				js: 'compositeWoodCertificationCode',
				typ: r('CompositeWoodCertificationCode'),
			},
			{ json: 'count', js: 'count', typ: u(undefined, '') },
			{ json: 'countPerPack', js: 'countPerPack', typ: u(undefined, 0) },
			{ json: 'features', js: 'features', typ: u(undefined, a('')) },
			{ json: 'finish', js: 'finish', typ: u(undefined, '') },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: u(undefined, a('')) },
			{ json: 'isAssemblyRequired', js: 'isAssemblyRequired', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: u(undefined, a('')) },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: '' },
			{ json: 'manufacturer', js: 'manufacturer', typ: '' },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: u(undefined, '') },
			{ json: 'material', js: 'material', typ: u(undefined, a('')) },
			{ json: 'modelNumber', js: 'modelNumber', typ: u(undefined, '') },
			{ json: 'msrp', js: 'msrp', typ: u(undefined, 3.14) },
			{ json: 'occasion', js: 'occasion', typ: u(undefined, a('')) },
			{ json: 'pattern', js: 'pattern', typ: u(undefined, a('')) },
			{ json: 'pieceCount', js: 'pieceCount', typ: u(undefined, 0) },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: u(undefined, a('')) },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: '' },
			{ json: 'recommendedUses', js: 'recommendedUses', typ: u(undefined, a('')) },
			{ json: 'shape', js: 'shape', typ: u(undefined, '') },
			{ json: 'shortDescription', js: 'shortDescription', typ: '' },
			{ json: 'size', js: 'size', typ: u(undefined, '') },
			{ json: 'sportsLeague', js: 'sportsLeague', typ: u(undefined, a('')) },
			{ json: 'swatchImages', js: 'swatchImages', typ: u(undefined, a(r('FuneralSwatchImage'))) },
			{
				json: 'variantAttributeNames',
				js: 'variantAttributeNames',
				typ: u(undefined, a(r('FuneralVariantAttributeName'))),
			},
			{ json: 'variantGroupId', js: 'variantGroupId', typ: u(undefined, '') },
		],
		false
	),
	FuneralAdditionalProductAttribute: o(
		[
			{ json: 'productAttributeName', js: 'productAttributeName', typ: '' },
			{ json: 'productAttributeValue', js: 'productAttributeValue', typ: '' },
		],
		false
	),
	FuneralAssembledProductHeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	FuneralAssembledProductLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	FuneralAssembledProductWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductWeightUnit')) },
		],
		false
	),
	FuneralAssembledProductWidth: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	FuneralSwatchImage: o(
		[
			{ json: 'swatchImageUrl', js: 'swatchImageUrl', typ: u(undefined, '') },
			{
				json: 'swatchVariantAttribute',
				js: 'swatchVariantAttribute',
				typ: u(undefined, r('FuneralVariantAttributeName')),
			},
		],
		false
	),
	Furniture: o(
		[
			{ json: 'accentColor', js: 'accentColor', typ: u(undefined, '') },
			{
				json: 'additionalProductAttributes',
				js: 'additionalProductAttributes',
				typ: u(undefined, a(r('FurnitureAdditionalProductAttribute'))),
			},
			{ json: 'ageGroup', js: 'ageGroup', typ: u(undefined, a(r('ArtCraftAgeGroup'))) },
			{
				json: 'assembledProductHeight',
				js: 'assembledProductHeight',
				typ: u(undefined, r('FurnitureAssembledProductHeight')),
			},
			{
				json: 'assembledProductLength',
				js: 'assembledProductLength',
				typ: u(undefined, r('FurnitureAssembledProductLength')),
			},
			{
				json: 'assembledProductWeight',
				js: 'assembledProductWeight',
				typ: u(undefined, r('FurnitureAssembledProductWeight')),
			},
			{
				json: 'assembledProductWidth',
				js: 'assembledProductWidth',
				typ: u(undefined, r('FurnitureAssembledProductWidth')),
			},
			{ json: 'assemblyInstructions', js: 'assemblyInstructions', typ: u(undefined, '') },
			{ json: 'autographedBy', js: 'autographedBy', typ: u(undefined, '') },
			{ json: 'baseColor', js: 'baseColor', typ: u(undefined, '') },
			{ json: 'baseFinish', js: 'baseFinish', typ: u(undefined, '') },
			{ json: 'baseMaterial', js: 'baseMaterial', typ: u(undefined, '') },
			{ json: 'bedSize', js: 'bedSize', typ: u(undefined, '') },
			{ json: 'bedStyle', js: 'bedStyle', typ: u(undefined, '') },
			{ json: 'character', js: 'character', typ: u(undefined, a('')) },
			{ json: 'collection', js: 'collection', typ: u(undefined, '') },
			{ json: 'color', js: 'color', typ: u(undefined, a('')) },
			{ json: 'colorCategory', js: 'colorCategory', typ: u(undefined, a(r('ColorCategory'))) },
			{
				json: 'compositeWoodCertificationCode',
				js: 'compositeWoodCertificationCode',
				typ: r('CompositeWoodCertificationCode'),
			},
			{ json: 'configuration', js: 'configuration', typ: u(undefined, '') },
			{ json: 'count', js: 'count', typ: u(undefined, '') },
			{ json: 'countPerPack', js: 'countPerPack', typ: u(undefined, 0) },
			{ json: 'countryOfOriginTextiles', js: 'countryOfOriginTextiles', typ: r('CountryOfOriginTextiles') },
			{ json: 'cushionColor', js: 'cushionColor', typ: u(undefined, '') },
			{ json: 'diameter', js: 'diameter', typ: u(undefined, r('FurnitureDiameter')) },
			{ json: 'doorOpeningStyle', js: 'doorOpeningStyle', typ: u(undefined, '') },
			{ json: 'doorStyle', js: 'doorStyle', typ: u(undefined, '') },
			{ json: 'fabricCareInstructions', js: 'fabricCareInstructions', typ: u(undefined, a('')) },
			{ json: 'fabricColor', js: 'fabricColor', typ: u(undefined, '') },
			{ json: 'fabricContent', js: 'fabricContent', typ: u(undefined, a(r('FurnitureFabricContent'))) },
			{ json: 'features', js: 'features', typ: u(undefined, a('')) },
			{ json: 'fillMaterial', js: 'fillMaterial', typ: u(undefined, a('')) },
			{ json: 'finish', js: 'finish', typ: u(undefined, '') },
			{ json: 'frameColor', js: 'frameColor', typ: u(undefined, '') },
			{ json: 'frameMaterial', js: 'frameMaterial', typ: u(undefined, a('')) },
			{ json: 'gender', js: 'gender', typ: u(undefined, r('BabyClothingGender')) },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: u(undefined, a('')) },
			{ json: 'hardwareFinish', js: 'hardwareFinish', typ: u(undefined, '') },
			{ json: 'headboardStyle', js: 'headboardStyle', typ: u(undefined, '') },
			{ json: 'homeDecorStyle', js: 'homeDecorStyle', typ: u(undefined, '') },
			{ json: 'inflexKitComponent', js: 'inflexKitComponent', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isAntique', js: 'isAntique', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isAssemblyRequired', js: 'isAssemblyRequired', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isFoldable', js: 'isFoldable', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isIndustrial', js: 'isIndustrial', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isInflatable', js: 'isInflatable', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPowered', js: 'isPowered', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isWheeled', js: 'isWheeled', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: u(undefined, a('')) },
			{ json: 'lightingFactsLabel', js: 'lightingFactsLabel', typ: u(undefined, '') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: '' },
			{ json: 'manufacturer', js: 'manufacturer', typ: '' },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: u(undefined, '') },
			{ json: 'material', js: 'material', typ: u(undefined, a('')) },
			{ json: 'mattressFirmness', js: 'mattressFirmness', typ: u(undefined, '') },
			{ json: 'mattressThickness', js: 'mattressThickness', typ: u(undefined, r('MattressThickness')) },
			{ json: 'modelNumber', js: 'modelNumber', typ: u(undefined, '') },
			{ json: 'mountType', js: 'mountType', typ: u(undefined, a('')) },
			{ json: 'msrp', js: 'msrp', typ: u(undefined, 3.14) },
			{ json: 'numberOfDrawers', js: 'numberOfDrawers', typ: u(undefined, 0) },
			{ json: 'numberOfHooks', js: 'numberOfHooks', typ: u(undefined, 3.14) },
			{ json: 'numberOfPanels', js: 'numberOfPanels', typ: u(undefined, 3.14) },
			{ json: 'numberOfShelves', js: 'numberOfShelves', typ: u(undefined, 0) },
			{ json: 'pattern', js: 'pattern', typ: u(undefined, a('')) },
			{ json: 'pieceCount', js: 'pieceCount', typ: u(undefined, 0) },
			{ json: 'powerType', js: 'powerType', typ: u(undefined, '') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: u(undefined, a('')) },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: '' },
			{ json: 'pumpIncluded', js: 'pumpIncluded', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'recommendedLocations', js: 'recommendedLocations', typ: u(undefined, a('')) },
			{ json: 'recommendedRooms', js: 'recommendedRooms', typ: u(undefined, a('')) },
			{ json: 'recommendedUses', js: 'recommendedUses', typ: u(undefined, a('')) },
			{ json: 'seatBackHeight', js: 'seatBackHeight', typ: u(undefined, r('SeatBackHeight')) },
			{ json: 'seatBackStyle', js: 'seatBackStyle', typ: u(undefined, '') },
			{ json: 'seatHeight', js: 'seatHeight', typ: u(undefined, r('FurnitureSeatHeight')) },
			{ json: 'seatingCapacity', js: 'seatingCapacity', typ: u(undefined, 0) },
			{ json: 'seatMaterial', js: 'seatMaterial', typ: u(undefined, '') },
			{ json: 'shape', js: 'shape', typ: u(undefined, '') },
			{ json: 'shortDescription', js: 'shortDescription', typ: '' },
			{ json: 'size', js: 'size', typ: u(undefined, '') },
			{ json: 'slatWidth', js: 'slatWidth', typ: u(undefined, r('FurnitureSlatWidth')) },
			{ json: 'sportsTeam', js: 'sportsTeam', typ: u(undefined, a('')) },
			{ json: 'swatchImages', js: 'swatchImages', typ: u(undefined, a(r('FurnitureSwatchImage'))) },
			{ json: 'tableHeight', js: 'tableHeight', typ: u(undefined, r('TableHeight')) },
			{ json: 'theme', js: 'theme', typ: u(undefined, a('')) },
			{ json: 'topDimensions', js: 'topDimensions', typ: u(undefined, '') },
			{ json: 'topFinish', js: 'topFinish', typ: u(undefined, '') },
			{ json: 'topMaterial', js: 'topMaterial', typ: u(undefined, '') },
			{
				json: 'variantAttributeNames',
				js: 'variantAttributeNames',
				typ: u(undefined, a(r('FurnitureVariantAttributeName'))),
			},
			{ json: 'variantGroupId', js: 'variantGroupId', typ: u(undefined, '') },
			{ json: 'warrantyText', js: 'warrantyText', typ: u(undefined, '') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: u(undefined, '') },
		],
		false
	),
	FurnitureAdditionalProductAttribute: o(
		[
			{ json: 'productAttributeName', js: 'productAttributeName', typ: '' },
			{ json: 'productAttributeValue', js: 'productAttributeValue', typ: '' },
		],
		false
	),
	FurnitureAssembledProductHeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	FurnitureAssembledProductLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	FurnitureAssembledProductWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductWeightUnit')) },
		],
		false
	),
	FurnitureAssembledProductWidth: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	FurnitureDiameter: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('RoughInDistanceUnit')) },
		],
		false
	),
	FurnitureFabricContent: o(
		[
			{ json: 'materialName', js: 'materialName', typ: u(undefined, '') },
			{ json: 'materialPercentage', js: 'materialPercentage', typ: u(undefined, 3.14) },
		],
		false
	),
	MattressThickness: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('ScreenSizeUnit')) },
		],
		false
	),
	SeatBackHeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('ScreenSizeUnit')) },
		],
		false
	),
	FurnitureSeatHeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('ScreenSizeUnit')) },
		],
		false
	),
	FurnitureSlatWidth: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('CarSeatBaseDepthUnit')) },
		],
		false
	),
	FurnitureSwatchImage: o(
		[
			{ json: 'swatchImageUrl', js: 'swatchImageUrl', typ: u(undefined, '') },
			{
				json: 'swatchVariantAttribute',
				js: 'swatchVariantAttribute',
				typ: u(undefined, r('IndecentSwatchVariantAttribute')),
			},
		],
		false
	),
	TableHeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('CarSeatBaseDepthUnit')) },
		],
		false
	),
	GardenPatio: o(
		[
			{
				json: 'additionalProductAttributes',
				js: 'additionalProductAttributes',
				typ: u(undefined, a(r('GardenPatioAdditionalProductAttribute'))),
			},
			{ json: 'ageGroup', js: 'ageGroup', typ: u(undefined, a(r('ArtCraftAgeGroup'))) },
			{
				json: 'assembledProductHeight',
				js: 'assembledProductHeight',
				typ: u(undefined, r('GardenPatioAssembledProductHeight')),
			},
			{
				json: 'assembledProductLength',
				js: 'assembledProductLength',
				typ: u(undefined, r('GardenPatioAssembledProductLength')),
			},
			{
				json: 'assembledProductWeight',
				js: 'assembledProductWeight',
				typ: u(undefined, r('GardenPatioAssembledProductWeight')),
			},
			{
				json: 'assembledProductWidth',
				js: 'assembledProductWidth',
				typ: u(undefined, r('GardenPatioAssembledProductWidth')),
			},
			{ json: 'assemblyInstructions', js: 'assemblyInstructions', typ: u(undefined, '') },
			{ json: 'baseMaterial', js: 'baseMaterial', typ: u(undefined, '') },
			{ json: 'capacity', js: 'capacity', typ: u(undefined, '') },
			{ json: 'character', js: 'character', typ: u(undefined, a('')) },
			{ json: 'cleaningCareAndMaintenance', js: 'cleaningCareAndMaintenance', typ: u(undefined, '') },
			{ json: 'clearingWidth', js: 'clearingWidth', typ: u(undefined, r('ClearingWidth')) },
			{ json: 'color', js: 'color', typ: u(undefined, a('')) },
			{ json: 'colorCategory', js: 'colorCategory', typ: u(undefined, a(r('ColorCategory'))) },
			{
				json: 'compositeWoodCertificationCode',
				js: 'compositeWoodCertificationCode',
				typ: r('CompositeWoodCertificationCode'),
			},
			{ json: 'count', js: 'count', typ: u(undefined, '') },
			{ json: 'countPerPack', js: 'countPerPack', typ: u(undefined, 0) },
			{ json: 'countryOfOriginTextiles', js: 'countryOfOriginTextiles', typ: r('CountryOfOriginTextiles') },
			{ json: 'coverageArea', js: 'coverageArea', typ: u(undefined, r('GardenPatioCoverageArea')) },
			{ json: 'cuttingWidth', js: 'cuttingWidth', typ: u(undefined, '') },
			{ json: 'diameter', js: 'diameter', typ: u(undefined, r('GardenPatioDiameter')) },
			{ json: 'fabricContent', js: 'fabricContent', typ: u(undefined, a(r('GardenPatioFabricContent'))) },
			{ json: 'features', js: 'features', typ: u(undefined, a('')) },
			{ json: 'finish', js: 'finish', typ: u(undefined, '') },
			{ json: 'flooringMaterial', js: 'flooringMaterial', typ: u(undefined, '') },
			{ json: 'flowRate', js: 'flowRate', typ: u(undefined, r('GardenPatioFlowRate')) },
			{ json: 'frameMaterial', js: 'frameMaterial', typ: u(undefined, a('')) },
			{ json: 'fuelType', js: 'fuelType', typ: u(undefined, '') },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: u(undefined, a('')) },
			{ json: 'hasAutomaticShutoff', js: 'hasAutomaticShutoff', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'hasRadiantHeat', js: 'hasRadiantHeat', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'homeDecorStyle', js: 'homeDecorStyle', typ: u(undefined, '') },
			{ json: 'inflexKitComponent', js: 'inflexKitComponent', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'installationType', js: 'installationType', typ: u(undefined, '') },
			{ json: 'isAntique', js: 'isAntique', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isAssemblyRequired', js: 'isAssemblyRequired', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isBulk', js: 'isBulk', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isEnergyStarCertified', js: 'isEnergyStarCertified', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isFoldable', js: 'isFoldable', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isIndustrial', js: 'isIndustrial', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isTearResistant', js: 'isTearResistant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isWaterproof', js: 'isWaterproof', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isWeatherResistant', js: 'isWeatherResistant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isWheeled', js: 'isWheeled', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: u(undefined, a('')) },
			{ json: 'lightBulbColor', js: 'lightBulbColor', typ: u(undefined, '') },
			{ json: 'lightBulbType', js: 'lightBulbType', typ: u(undefined, '') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: '' },
			{ json: 'manufacturer', js: 'manufacturer', typ: '' },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: u(undefined, '') },
			{ json: 'material', js: 'material', typ: u(undefined, a('')) },
			{ json: 'maximumWeight', js: 'maximumWeight', typ: u(undefined, r('GardenPatioMaximumWeight')) },
			{ json: 'minimumClearance', js: 'minimumClearance', typ: u(undefined, r('MinimumClearance')) },
			{
				json: 'minimumTemperature',
				js: 'minimumTemperature',
				typ: u(undefined, r('GardenPatioMinimumTemperature')),
			},
			{ json: 'modelNumber', js: 'modelNumber', typ: u(undefined, '') },
			{ json: 'msrp', js: 'msrp', typ: u(undefined, 3.14) },
			{ json: 'occasion', js: 'occasion', typ: u(undefined, a('')) },
			{ json: 'pattern', js: 'pattern', typ: u(undefined, a('')) },
			{ json: 'pieceCount', js: 'pieceCount', typ: u(undefined, 0) },
			{ json: 'plantCategory', js: 'plantCategory', typ: u(undefined, '') },
			{ json: 'powerType', js: 'powerType', typ: u(undefined, '') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: u(undefined, a('')) },
			{ json: 'productVolume', js: 'productVolume', typ: u(undefined, '') },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: '' },
			{ json: 'recommendedLocations', js: 'recommendedLocations', typ: u(undefined, a('')) },
			{ json: 'recommendedUses', js: 'recommendedUses', typ: u(undefined, a('')) },
			{ json: 'season', js: 'season', typ: u(undefined, a('')) },
			{ json: 'shape', js: 'shape', typ: u(undefined, '') },
			{ json: 'shortDescription', js: 'shortDescription', typ: '' },
			{ json: 'size', js: 'size', typ: u(undefined, '') },
			{ json: 'sportsTeam', js: 'sportsTeam', typ: u(undefined, a('')) },
			{ json: 'sprayPatterns', js: 'sprayPatterns', typ: u(undefined, '') },
			{ json: 'swatchImages', js: 'swatchImages', typ: u(undefined, a(r('GardenPatioSwatchImage'))) },
			{ json: 'theme', js: 'theme', typ: u(undefined, a('')) },
			{
				json: 'variantAttributeNames',
				js: 'variantAttributeNames',
				typ: u(undefined, a(r('GardenPatioVariantAttributeName'))),
			},
			{ json: 'variantGroupId', js: 'variantGroupId', typ: u(undefined, '') },
			{ json: 'vaseIncluded', js: 'vaseIncluded', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'volts', js: 'volts', typ: u(undefined, a(r('GardenPatioVolt'))) },
			{ json: 'warrantyText', js: 'warrantyText', typ: u(undefined, '') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: u(undefined, '') },
			{ json: 'watts', js: 'watts', typ: u(undefined, r('GardenPatioWatts')) },
		],
		false
	),
	GardenPatioAdditionalProductAttribute: o(
		[
			{ json: 'productAttributeName', js: 'productAttributeName', typ: '' },
			{ json: 'productAttributeValue', js: 'productAttributeValue', typ: '' },
		],
		false
	),
	GardenPatioAssembledProductHeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	GardenPatioAssembledProductLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	GardenPatioAssembledProductWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductWeightUnit')) },
		],
		false
	),
	GardenPatioAssembledProductWidth: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	ClearingWidth: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('ClearingWidthUnit')) },
		],
		false
	),
	GardenPatioCoverageArea: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('CoverageAreaUnit')) },
		],
		false
	),
	GardenPatioDiameter: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('RoughInDistanceUnit')) },
		],
		false
	),
	GardenPatioFabricContent: o(
		[
			{ json: 'materialName', js: 'materialName', typ: u(undefined, '') },
			{ json: 'materialPercentage', js: 'materialPercentage', typ: u(undefined, 3.14) },
		],
		false
	),
	GardenPatioFlowRate: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('FlowRateUnit')) },
		],
		false
	),
	GardenPatioMaximumWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('PurpleUnit')) },
		],
		false
	),
	MinimumClearance: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('ScreenSizeUnit')) },
		],
		false
	),
	GardenPatioMinimumTemperature: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('MaximumTemperatureUnit')) },
		],
		false
	),
	GardenPatioSwatchImage: o(
		[
			{ json: 'swatchImageUrl', js: 'swatchImageUrl', typ: u(undefined, '') },
			{
				json: 'swatchVariantAttribute',
				js: 'swatchVariantAttribute',
				typ: u(undefined, r('HilariousSwatchVariantAttribute')),
			},
		],
		false
	),
	GardenPatioVolt: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('VoltUnit')) },
		],
		false
	),
	GardenPatioWatts: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('WattsUnit')) },
		],
		false
	),
	GiftSupplyAwards: o(
		[
			{
				json: 'additionalProductAttributes',
				js: 'additionalProductAttributes',
				typ: u(undefined, a(r('GiftSupplyAwardsAdditionalProductAttribute'))),
			},
			{
				json: 'assembledProductHeight',
				js: 'assembledProductHeight',
				typ: u(undefined, r('GiftSupplyAwardsAssembledProductHeight')),
			},
			{
				json: 'assembledProductLength',
				js: 'assembledProductLength',
				typ: u(undefined, r('GiftSupplyAwardsAssembledProductLength')),
			},
			{
				json: 'assembledProductWeight',
				js: 'assembledProductWeight',
				typ: u(undefined, r('GiftSupplyAwardsAssembledProductWeight')),
			},
			{
				json: 'assembledProductWidth',
				js: 'assembledProductWidth',
				typ: u(undefined, r('GiftSupplyAwardsAssembledProductWidth')),
			},
			{ json: 'assemblyInstructions', js: 'assemblyInstructions', typ: u(undefined, '') },
			{ json: 'color', js: 'color', typ: u(undefined, a('')) },
			{ json: 'colorCategory', js: 'colorCategory', typ: u(undefined, a(r('ColorCategory'))) },
			{ json: 'count', js: 'count', typ: u(undefined, '') },
			{ json: 'countPerPack', js: 'countPerPack', typ: u(undefined, 0) },
			{ json: 'features', js: 'features', typ: u(undefined, a('')) },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: u(undefined, a('')) },
			{ json: 'isAssemblyRequired', js: 'isAssemblyRequired', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: u(undefined, a('')) },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: '' },
			{ json: 'manufacturer', js: 'manufacturer', typ: '' },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: u(undefined, '') },
			{ json: 'material', js: 'material', typ: u(undefined, a('')) },
			{ json: 'modelNumber', js: 'modelNumber', typ: u(undefined, '') },
			{ json: 'msrp', js: 'msrp', typ: u(undefined, 3.14) },
			{ json: 'occasion', js: 'occasion', typ: u(undefined, a('')) },
			{ json: 'pattern', js: 'pattern', typ: u(undefined, a('')) },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: u(undefined, a('')) },
			{ json: 'shape', js: 'shape', typ: u(undefined, '') },
			{ json: 'shortDescription', js: 'shortDescription', typ: '' },
			{ json: 'size', js: 'size', typ: u(undefined, '') },
			{ json: 'swatchImages', js: 'swatchImages', typ: u(undefined, a(r('GiftSupplyAwardsSwatchImage'))) },
			{ json: 'theme', js: 'theme', typ: u(undefined, a('')) },
			{
				json: 'variantAttributeNames',
				js: 'variantAttributeNames',
				typ: u(undefined, a(r('GiftSupplyAwardsVariantAttributeName'))),
			},
			{ json: 'variantGroupId', js: 'variantGroupId', typ: u(undefined, '') },
		],
		false
	),
	GiftSupplyAwardsAdditionalProductAttribute: o(
		[
			{ json: 'productAttributeName', js: 'productAttributeName', typ: '' },
			{ json: 'productAttributeValue', js: 'productAttributeValue', typ: '' },
		],
		false
	),
	GiftSupplyAwardsAssembledProductHeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	GiftSupplyAwardsAssembledProductLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	GiftSupplyAwardsAssembledProductWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductWeightUnit')) },
		],
		false
	),
	GiftSupplyAwardsAssembledProductWidth: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	GiftSupplyAwardsSwatchImage: o(
		[
			{ json: 'swatchImageUrl', js: 'swatchImageUrl', typ: u(undefined, '') },
			{
				json: 'swatchVariantAttribute',
				js: 'swatchVariantAttribute',
				typ: u(undefined, r('GiftSupplyAwardsVariantAttributeName')),
			},
		],
		false
	),
	GrillsOutdoorCooking: o(
		[
			{
				json: 'additionalProductAttributes',
				js: 'additionalProductAttributes',
				typ: u(undefined, a(r('GrillsOutdoorCookingAdditionalProductAttribute'))),
			},
			{ json: 'ageGroup', js: 'ageGroup', typ: u(undefined, a(r('ArtCraftAgeGroup'))) },
			{
				json: 'assembledProductHeight',
				js: 'assembledProductHeight',
				typ: u(undefined, r('GrillsOutdoorCookingAssembledProductHeight')),
			},
			{
				json: 'assembledProductLength',
				js: 'assembledProductLength',
				typ: u(undefined, r('GrillsOutdoorCookingAssembledProductLength')),
			},
			{
				json: 'assembledProductWeight',
				js: 'assembledProductWeight',
				typ: u(undefined, r('GrillsOutdoorCookingAssembledProductWeight')),
			},
			{
				json: 'assembledProductWidth',
				js: 'assembledProductWidth',
				typ: u(undefined, r('GrillsOutdoorCookingAssembledProductWidth')),
			},
			{ json: 'assemblyInstructions', js: 'assemblyInstructions', typ: u(undefined, '') },
			{ json: 'btu', js: 'btu', typ: u(undefined, 0) },
			{ json: 'capacity', js: 'capacity', typ: u(undefined, '') },
			{ json: 'cleaningCareAndMaintenance', js: 'cleaningCareAndMaintenance', typ: u(undefined, '') },
			{ json: 'color', js: 'color', typ: u(undefined, a('')) },
			{ json: 'colorCategory', js: 'colorCategory', typ: u(undefined, a(r('ColorCategory'))) },
			{ json: 'count', js: 'count', typ: u(undefined, '') },
			{ json: 'countPerPack', js: 'countPerPack', typ: u(undefined, 0) },
			{ json: 'features', js: 'features', typ: u(undefined, a('')) },
			{ json: 'finish', js: 'finish', typ: u(undefined, '') },
			{ json: 'flavor', js: 'flavor', typ: u(undefined, '') },
			{ json: 'flowRate', js: 'flowRate', typ: u(undefined, r('GrillsOutdoorCookingFlowRate')) },
			{ json: 'frameMaterial', js: 'frameMaterial', typ: u(undefined, a('')) },
			{ json: 'fuelType', js: 'fuelType', typ: u(undefined, '') },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: u(undefined, a('')) },
			{ json: 'hasAutomaticShutoff', js: 'hasAutomaticShutoff', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'hasCharcoalBasket', js: 'hasCharcoalBasket', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'hasRadiantHeat', js: 'hasRadiantHeat', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'hasSideShelf', js: 'hasSideShelf', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'hasTankTray', js: 'hasTankTray', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'homeDecorStyle', js: 'homeDecorStyle', typ: u(undefined, '') },
			{ json: 'installationType', js: 'installationType', typ: u(undefined, '') },
			{ json: 'isAssemblyRequired', js: 'isAssemblyRequired', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isBulk', js: 'isBulk', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isEnergyStarCertified', js: 'isEnergyStarCertified', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isFoldable', js: 'isFoldable', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isIndustrial', js: 'isIndustrial', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isWaterproof', js: 'isWaterproof', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isWeatherResistant', js: 'isWeatherResistant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isWheeled', js: 'isWheeled', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: u(undefined, a('')) },
			{ json: 'lifespan', js: 'lifespan', typ: u(undefined, '') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: '' },
			{ json: 'manufacturer', js: 'manufacturer', typ: '' },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: u(undefined, '') },
			{
				json: 'maximumTemperature',
				js: 'maximumTemperature',
				typ: u(undefined, r('GrillsOutdoorCookingMaximumTemperature')),
			},
			{ json: 'maximumWeight', js: 'maximumWeight', typ: u(undefined, r('GrillsOutdoorCookingMaximumWeight')) },
			{
				json: 'minimumTemperature',
				js: 'minimumTemperature',
				typ: u(undefined, r('GrillsOutdoorCookingMinimumTemperature')),
			},
			{ json: 'modelNumber', js: 'modelNumber', typ: u(undefined, '') },
			{ json: 'msrp', js: 'msrp', typ: u(undefined, 3.14) },
			{ json: 'numberOfBurners', js: 'numberOfBurners', typ: u(undefined, 0) },
			{ json: 'pieceCount', js: 'pieceCount', typ: u(undefined, 0) },
			{ json: 'powerType', js: 'powerType', typ: u(undefined, '') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: u(undefined, a('')) },
			{ json: 'productVolume', js: 'productVolume', typ: u(undefined, '') },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: '' },
			{ json: 'recommendedLocations', js: 'recommendedLocations', typ: u(undefined, a('')) },
			{ json: 'recommendedUses', js: 'recommendedUses', typ: u(undefined, a('')) },
			{ json: 'shortDescription', js: 'shortDescription', typ: '' },
			{ json: 'sideBurnerSize', js: 'sideBurnerSize', typ: u(undefined, r('SideBurnerSize')) },
			{ json: 'size', js: 'size', typ: u(undefined, '') },
			{ json: 'sportsLeague', js: 'sportsLeague', typ: u(undefined, a('')) },
			{ json: 'sportsTeam', js: 'sportsTeam', typ: u(undefined, a('')) },
			{ json: 'swatchImages', js: 'swatchImages', typ: u(undefined, a(r('GrillsOutdoorCookingSwatchImage'))) },
			{ json: 'totalCookingArea', js: 'totalCookingArea', typ: u(undefined, r('TotalCookingArea')) },
			{
				json: 'variantAttributeNames',
				js: 'variantAttributeNames',
				typ: u(undefined, a(r('GrillsOutdoorCookingVariantAttributeName'))),
			},
			{ json: 'variantGroupId', js: 'variantGroupId', typ: u(undefined, '') },
			{ json: 'warrantyText', js: 'warrantyText', typ: u(undefined, '') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: u(undefined, '') },
		],
		false
	),
	GrillsOutdoorCookingAdditionalProductAttribute: o(
		[
			{ json: 'productAttributeName', js: 'productAttributeName', typ: '' },
			{ json: 'productAttributeValue', js: 'productAttributeValue', typ: '' },
		],
		false
	),
	GrillsOutdoorCookingAssembledProductHeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	GrillsOutdoorCookingAssembledProductLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	GrillsOutdoorCookingAssembledProductWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductWeightUnit')) },
		],
		false
	),
	GrillsOutdoorCookingAssembledProductWidth: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	GrillsOutdoorCookingFlowRate: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('FlowRateUnit')) },
		],
		false
	),
	GrillsOutdoorCookingMaximumTemperature: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('MaximumTemperatureUnit')) },
		],
		false
	),
	GrillsOutdoorCookingMaximumWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('PurpleUnit')) },
		],
		false
	),
	GrillsOutdoorCookingMinimumTemperature: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('MaximumTemperatureUnit')) },
		],
		false
	),
	SideBurnerSize: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('SideBurnerSizeUnit')) },
		],
		false
	),
	GrillsOutdoorCookingSwatchImage: o(
		[
			{ json: 'swatchImageUrl', js: 'swatchImageUrl', typ: u(undefined, '') },
			{
				json: 'swatchVariantAttribute',
				js: 'swatchVariantAttribute',
				typ: u(undefined, r('AmbitiousSwatchVariantAttribute')),
			},
		],
		false
	),
	TotalCookingArea: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('SideBurnerSizeUnit')) },
		],
		false
	),
	Hardware: o(
		[
			{ json: 'accessoriesIncluded', js: 'accessoriesIncluded', typ: u(undefined, a('')) },
			{
				json: 'additionalProductAttributes',
				js: 'additionalProductAttributes',
				typ: u(undefined, a(r('HardwareAdditionalProductAttribute'))),
			},
			{ json: 'alphanumericCharacter', js: 'alphanumericCharacter', typ: u(undefined, '') },
			{
				json: 'assembledProductHeight',
				js: 'assembledProductHeight',
				typ: u(undefined, r('HardwareAssembledProductHeight')),
			},
			{
				json: 'assembledProductLength',
				js: 'assembledProductLength',
				typ: u(undefined, r('HardwareAssembledProductLength')),
			},
			{
				json: 'assembledProductWeight',
				js: 'assembledProductWeight',
				typ: u(undefined, r('HardwareAssembledProductWeight')),
			},
			{
				json: 'assembledProductWidth',
				js: 'assembledProductWidth',
				typ: u(undefined, r('HardwareAssembledProductWidth')),
			},
			{ json: 'backsetSize', js: 'backsetSize', typ: u(undefined, r('BacksetSize')) },
			{ json: 'cleaningCareAndMaintenance', js: 'cleaningCareAndMaintenance', typ: u(undefined, '') },
			{ json: 'color', js: 'color', typ: u(undefined, a('')) },
			{ json: 'colorCategory', js: 'colorCategory', typ: u(undefined, a(r('ColorCategory'))) },
			{ json: 'count', js: 'count', typ: u(undefined, '') },
			{ json: 'countPerPack', js: 'countPerPack', typ: u(undefined, 0) },
			{ json: 'features', js: 'features', typ: u(undefined, a('')) },
			{ json: 'finish', js: 'finish', typ: u(undefined, '') },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: u(undefined, a('')) },
			{ json: 'grade', js: 'grade', typ: u(undefined, '') },
			{ json: 'homeDecorStyle', js: 'homeDecorStyle', typ: u(undefined, '') },
			{ json: 'isFireResistant', js: 'isFireResistant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isLockable', js: 'isLockable', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isWaterproof', js: 'isWaterproof', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: u(undefined, a('')) },
			{ json: 'lockingMechanism', js: 'lockingMechanism', typ: u(undefined, '') },
			{ json: 'lockType', js: 'lockType', typ: u(undefined, '') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: '' },
			{ json: 'manufacturer', js: 'manufacturer', typ: '' },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: u(undefined, '') },
			{ json: 'material', js: 'material', typ: u(undefined, a('')) },
			{ json: 'maximumWeight', js: 'maximumWeight', typ: u(undefined, r('HardwareMaximumWeight')) },
			{ json: 'modelNumber', js: 'modelNumber', typ: u(undefined, '') },
			{ json: 'mountType', js: 'mountType', typ: u(undefined, a('')) },
			{ json: 'msrp', js: 'msrp', typ: u(undefined, 3.14) },
			{ json: 'pieceCount', js: 'pieceCount', typ: u(undefined, 0) },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: u(undefined, a('')) },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: '' },
			{ json: 'recommendedUses', js: 'recommendedUses', typ: u(undefined, a('')) },
			{ json: 'shape', js: 'shape', typ: u(undefined, '') },
			{ json: 'shortDescription', js: 'shortDescription', typ: '' },
			{ json: 'size', js: 'size', typ: u(undefined, '') },
			{ json: 'swatchImages', js: 'swatchImages', typ: u(undefined, a(r('HardwareSwatchImage'))) },
			{ json: 'threadStandard', js: 'threadStandard', typ: u(undefined, '') },
			{
				json: 'variantAttributeNames',
				js: 'variantAttributeNames',
				typ: u(undefined, a(r('HardwareVariantAttributeName'))),
			},
			{ json: 'variantGroupId', js: 'variantGroupId', typ: u(undefined, '') },
			{ json: 'volts', js: 'volts', typ: u(undefined, a(r('HardwareVolt'))) },
			{ json: 'warrantyText', js: 'warrantyText', typ: u(undefined, '') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: u(undefined, '') },
			{ json: 'workingLoadLimit', js: 'workingLoadLimit', typ: u(undefined, 3.14) },
		],
		false
	),
	HardwareAdditionalProductAttribute: o(
		[
			{ json: 'productAttributeName', js: 'productAttributeName', typ: '' },
			{ json: 'productAttributeValue', js: 'productAttributeValue', typ: '' },
		],
		false
	),
	HardwareAssembledProductHeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	HardwareAssembledProductLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	HardwareAssembledProductWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductWeightUnit')) },
		],
		false
	),
	HardwareAssembledProductWidth: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	BacksetSize: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('ScreenSizeUnit')) },
		],
		false
	),
	HardwareMaximumWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('PurpleUnit')) },
		],
		false
	),
	HardwareSwatchImage: o(
		[
			{ json: 'swatchImageUrl', js: 'swatchImageUrl', typ: u(undefined, '') },
			{
				json: 'swatchVariantAttribute',
				js: 'swatchVariantAttribute',
				typ: u(undefined, r('CunningSwatchVariantAttribute')),
			},
		],
		false
	),
	HardwareVolt: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('VoltUnit')) },
		],
		false
	),
	HealthBeautyElectronics: o(
		[
			{
				json: 'additionalProductAttributes',
				js: 'additionalProductAttributes',
				typ: u(undefined, a(r('HealthBeautyElectronicsAdditionalProductAttribute'))),
			},
			{ json: 'ageGroup', js: 'ageGroup', typ: u(undefined, a(r('ArtCraftAgeGroup'))) },
			{
				json: 'assembledProductHeight',
				js: 'assembledProductHeight',
				typ: u(undefined, r('HealthBeautyElectronicsAssembledProductHeight')),
			},
			{
				json: 'assembledProductLength',
				js: 'assembledProductLength',
				typ: u(undefined, r('HealthBeautyElectronicsAssembledProductLength')),
			},
			{
				json: 'assembledProductWeight',
				js: 'assembledProductWeight',
				typ: u(undefined, r('HealthBeautyElectronicsAssembledProductWeight')),
			},
			{
				json: 'assembledProductWidth',
				js: 'assembledProductWidth',
				typ: u(undefined, r('HealthBeautyElectronicsAssembledProductWidth')),
			},
			{ json: 'bodyParts', js: 'bodyParts', typ: u(undefined, a('')) },
			{ json: 'color', js: 'color', typ: u(undefined, a('')) },
			{ json: 'count', js: 'count', typ: u(undefined, '') },
			{ json: 'countPerPack', js: 'countPerPack', typ: u(undefined, 0) },
			{ json: 'features', js: 'features', typ: u(undefined, a('')) },
			{ json: 'hairCareKeyBenefit', js: 'hairCareKeyBenefit', typ: u(undefined, a(r('HairCareKeyBenefit'))) },
			{ json: 'hairProductForm', js: 'hairProductForm', typ: u(undefined, r('HairProductForm')) },
			{ json: 'hairType', js: 'hairType', typ: u(undefined, '') },
			{ json: 'hasAutomaticShutoff', js: 'hasAutomaticShutoff', typ: u(undefined, r('MustShipAlone')) },
			{
				json: 'ingredientPreference',
				js: 'ingredientPreference',
				typ: u(undefined, a(r('IngredientPreference'))),
			},
			{ json: 'instructions', js: 'instructions', typ: u(undefined, '') },
			{ json: 'isCordless', js: 'isCordless', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isDisposable', js: 'isDisposable', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPortable', js: 'isPortable', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPowered', js: 'isPowered', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isReusable', js: 'isReusable', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isTravelSize', js: 'isTravelSize', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: u(undefined, a('')) },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: '' },
			{ json: 'makeupForm', js: 'makeupForm', typ: u(undefined, a(r('MakeupForm'))) },
			{ json: 'manufacturer', js: 'manufacturer', typ: '' },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: u(undefined, '') },
			{ json: 'modelNumber', js: 'modelNumber', typ: u(undefined, '') },
			{ json: 'msrp', js: 'msrp', typ: u(undefined, 3.14) },
			{ json: 'pieceCount', js: 'pieceCount', typ: u(undefined, 0) },
			{ json: 'powerType', js: 'powerType', typ: u(undefined, '') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: u(undefined, a('')) },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: '' },
			{ json: 'shortDescription', js: 'shortDescription', typ: '' },
			{ json: 'size', js: 'size', typ: u(undefined, '') },
			{ json: 'skinCareConcern', js: 'skinCareConcern', typ: u(undefined, a('')) },
			{ json: 'skinTone', js: 'skinTone', typ: u(undefined, '') },
			{ json: 'skinType', js: 'skinType', typ: u(undefined, '') },
			{ json: 'swatchImages', js: 'swatchImages', typ: u(undefined, a(r('HealthBeautyElectronicsSwatchImage'))) },
			{
				json: 'variantAttributeNames',
				js: 'variantAttributeNames',
				typ: u(undefined, a(r('HealthBeautyElectronicsVariantAttributeName'))),
			},
			{ json: 'variantGroupId', js: 'variantGroupId', typ: u(undefined, '') },
			{ json: 'warrantyText', js: 'warrantyText', typ: u(undefined, '') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: u(undefined, '') },
		],
		false
	),
	HealthBeautyElectronicsAdditionalProductAttribute: o(
		[
			{ json: 'productAttributeName', js: 'productAttributeName', typ: '' },
			{ json: 'productAttributeValue', js: 'productAttributeValue', typ: '' },
		],
		false
	),
	HealthBeautyElectronicsAssembledProductHeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	HealthBeautyElectronicsAssembledProductLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	HealthBeautyElectronicsAssembledProductWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductWeightUnit')) },
		],
		false
	),
	HealthBeautyElectronicsAssembledProductWidth: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	HealthBeautyElectronicsSwatchImage: o(
		[
			{ json: 'swatchImageUrl', js: 'swatchImageUrl', typ: u(undefined, '') },
			{
				json: 'swatchVariantAttribute',
				js: 'swatchVariantAttribute',
				typ: u(undefined, r('HealthBeautyElectronicsVariantAttributeName')),
			},
		],
		false
	),
	HomeDecorKitchenOther: o(
		[
			{ json: 'academicInstitution', js: 'academicInstitution', typ: u(undefined, '') },
			{ json: 'accentColor', js: 'accentColor', typ: u(undefined, '') },
			{
				json: 'additionalProductAttributes',
				js: 'additionalProductAttributes',
				typ: u(undefined, a(r('HomeDecorKitchenOtherAdditionalProductAttribute'))),
			},
			{ json: 'ageGroup', js: 'ageGroup', typ: u(undefined, a(r('ArtCraftAgeGroup'))) },
			{ json: 'artist', js: 'artist', typ: u(undefined, a('')) },
			{
				json: 'assembledProductHeight',
				js: 'assembledProductHeight',
				typ: u(undefined, r('HomeDecorKitchenOtherAssembledProductHeight')),
			},
			{
				json: 'assembledProductLength',
				js: 'assembledProductLength',
				typ: u(undefined, r('HomeDecorKitchenOtherAssembledProductLength')),
			},
			{
				json: 'assembledProductWeight',
				js: 'assembledProductWeight',
				typ: u(undefined, r('HomeDecorKitchenOtherAssembledProductWeight')),
			},
			{
				json: 'assembledProductWidth',
				js: 'assembledProductWidth',
				typ: u(undefined, r('HomeDecorKitchenOtherAssembledProductWidth')),
			},
			{ json: 'assemblyInstructions', js: 'assemblyInstructions', typ: u(undefined, '') },
			{ json: 'athlete', js: 'athlete', typ: u(undefined, a('')) },
			{ json: 'baseColor', js: 'baseColor', typ: u(undefined, '') },
			{ json: 'baseFinish', js: 'baseFinish', typ: u(undefined, '') },
			{ json: 'bedSize', js: 'bedSize', typ: u(undefined, '') },
			{ json: 'bedStyle', js: 'bedStyle', typ: u(undefined, '') },
			{ json: 'capacity', js: 'capacity', typ: u(undefined, '') },
			{ json: 'character', js: 'character', typ: u(undefined, a('')) },
			{ json: 'cleaningCareAndMaintenance', js: 'cleaningCareAndMaintenance', typ: u(undefined, '') },
			{ json: 'clockNumberType', js: 'clockNumberType', typ: u(undefined, '') },
			{ json: 'collection', js: 'collection', typ: u(undefined, '') },
			{ json: 'color', js: 'color', typ: u(undefined, a('')) },
			{ json: 'colorCategory', js: 'colorCategory', typ: u(undefined, a(r('ColorCategory'))) },
			{
				json: 'compositeWoodCertificationCode',
				js: 'compositeWoodCertificationCode',
				typ: r('CompositeWoodCertificationCode'),
			},
			{ json: 'contaminantsRemoved', js: 'contaminantsRemoved', typ: u(undefined, '') },
			{ json: 'count', js: 'count', typ: u(undefined, '') },
			{ json: 'countPerPack', js: 'countPerPack', typ: u(undefined, 0) },
			{ json: 'countryOfOriginTextiles', js: 'countryOfOriginTextiles', typ: r('CountryOfOriginTextiles') },
			{ json: 'curtainLength', js: 'curtainLength', typ: u(undefined, r('CurtainLength')) },
			{ json: 'curtainPanelStyle', js: 'curtainPanelStyle', typ: u(undefined, '') },
			{ json: 'diameter', js: 'diameter', typ: u(undefined, r('HomeDecorKitchenOtherDiameter')) },
			{ json: 'fabricCareInstructions', js: 'fabricCareInstructions', typ: u(undefined, a('')) },
			{ json: 'fabricColor', js: 'fabricColor', typ: u(undefined, '') },
			{
				json: 'fabricContent',
				js: 'fabricContent',
				typ: u(undefined, a(r('HomeDecorKitchenOtherFabricContent'))),
			},
			{ json: 'features', js: 'features', typ: u(undefined, a('')) },
			{ json: 'fillMaterial', js: 'fillMaterial', typ: u(undefined, a('')) },
			{ json: 'finish', js: 'finish', typ: u(undefined, '') },
			{ json: 'frameColor', js: 'frameColor', typ: u(undefined, '') },
			{ json: 'framed', js: 'framed', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'frameMaterial', js: 'frameMaterial', typ: u(undefined, a('')) },
			{ json: 'gender', js: 'gender', typ: u(undefined, r('ArtCraftGender')) },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: u(undefined, a('')) },
			{ json: 'gramsSquareMeter', js: 'gramsSquareMeter', typ: u(undefined, 3.14) },
			{ json: 'homeDecorStyle', js: 'homeDecorStyle', typ: u(undefined, '') },
			{ json: 'inductionSafe', js: 'inductionSafe', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isAssemblyRequired', js: 'isAssemblyRequired', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isNonStick', js: 'isNonStick', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPetFriendly', js: 'isPetFriendly', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isSet', js: 'isSet', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: u(undefined, a('')) },
			{ json: 'lampType', js: 'lampType', typ: u(undefined, a('')) },
			{ json: 'lightingFactsLabel', js: 'lightingFactsLabel', typ: u(undefined, '') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: '' },
			{ json: 'manufacturer', js: 'manufacturer', typ: '' },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: u(undefined, '') },
			{ json: 'material', js: 'material', typ: u(undefined, a('')) },
			{ json: 'meal', js: 'meal', typ: u(undefined, '') },
			{ json: 'mealStyle', js: 'mealStyle', typ: u(undefined, '') },
			{ json: 'modelNumber', js: 'modelNumber', typ: u(undefined, '') },
			{ json: 'msrp', js: 'msrp', typ: u(undefined, 3.14) },
			{ json: 'occasion', js: 'occasion', typ: u(undefined, a('')) },
			{ json: 'orientation', js: 'orientation', typ: u(undefined, r('HomeDecorKitchenOtherOrientation')) },
			{ json: 'pattern', js: 'pattern', typ: u(undefined, a('')) },
			{ json: 'pieceCount', js: 'pieceCount', typ: u(undefined, 0) },
			{ json: 'powerType', js: 'powerType', typ: u(undefined, '') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: u(undefined, a('')) },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: '' },
			{ json: 'recommendedRooms', js: 'recommendedRooms', typ: u(undefined, a('')) },
			{ json: 'recommendedUses', js: 'recommendedUses', typ: u(undefined, a('')) },
			{ json: 'rugSize', js: 'rugSize', typ: u(undefined, '') },
			{ json: 'rugStyle', js: 'rugStyle', typ: u(undefined, a('')) },
			{ json: 'scent', js: 'scent', typ: u(undefined, '') },
			{ json: 'serviceCount', js: 'serviceCount', typ: u(undefined, 3.14) },
			{ json: 'shadeMaterial', js: 'shadeMaterial', typ: u(undefined, '') },
			{ json: 'shadeStyle', js: 'shadeStyle', typ: u(undefined, '') },
			{ json: 'shape', js: 'shape', typ: u(undefined, '') },
			{ json: 'shortDescription', js: 'shortDescription', typ: '' },
			{ json: 'size', js: 'size', typ: u(undefined, '') },
			{ json: 'slatWidth', js: 'slatWidth', typ: u(undefined, r('HomeDecorKitchenOtherSlatWidth')) },
			{ json: 'smallPartsWarnings', js: 'smallPartsWarnings', typ: a(r('SmallPartsWarningCode')) },
			{ json: 'sportsLeague', js: 'sportsLeague', typ: u(undefined, a('')) },
			{ json: 'sportsTeam', js: 'sportsTeam', typ: u(undefined, a('')) },
			{ json: 'swatchImages', js: 'swatchImages', typ: u(undefined, a(r('HomeDecorKitchenOtherSwatchImage'))) },
			{ json: 'theme', js: 'theme', typ: u(undefined, a('')) },
			{ json: 'threadCount', js: 'threadCount', typ: u(undefined, 0) },
			{
				json: 'variantAttributeNames',
				js: 'variantAttributeNames',
				typ: u(undefined, a(r('HomeDecorKitchenOtherVariantAttributeName'))),
			},
			{ json: 'variantGroupId', js: 'variantGroupId', typ: u(undefined, '') },
			{
				json: 'volumeCapacity',
				js: 'volumeCapacity',
				typ: u(undefined, r('HomeDecorKitchenOtherVolumeCapacity')),
			},
			{ json: 'warrantyText', js: 'warrantyText', typ: u(undefined, '') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: u(undefined, '') },
			{
				json: 'windowTreatmentSheerness',
				js: 'windowTreatmentSheerness',
				typ: u(undefined, a(r('WindowTreatmentSheerness'))),
			},
		],
		false
	),
	HomeDecorKitchenOtherAdditionalProductAttribute: o(
		[
			{ json: 'productAttributeName', js: 'productAttributeName', typ: '' },
			{ json: 'productAttributeValue', js: 'productAttributeValue', typ: '' },
		],
		false
	),
	HomeDecorKitchenOtherAssembledProductHeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	HomeDecorKitchenOtherAssembledProductLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	HomeDecorKitchenOtherAssembledProductWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductWeightUnit')) },
		],
		false
	),
	HomeDecorKitchenOtherAssembledProductWidth: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	CurtainLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('CarSeatBaseDepthUnit')) },
		],
		false
	),
	HomeDecorKitchenOtherDiameter: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('RoughInDistanceUnit')) },
		],
		false
	),
	HomeDecorKitchenOtherFabricContent: o(
		[
			{ json: 'materialName', js: 'materialName', typ: u(undefined, '') },
			{ json: 'materialPercentage', js: 'materialPercentage', typ: u(undefined, 3.14) },
		],
		false
	),
	HomeDecorKitchenOtherSlatWidth: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('CarSeatBaseDepthUnit')) },
		],
		false
	),
	HomeDecorKitchenOtherSwatchImage: o(
		[
			{ json: 'swatchImageUrl', js: 'swatchImageUrl', typ: u(undefined, '') },
			{
				json: 'swatchVariantAttribute',
				js: 'swatchVariantAttribute',
				typ: u(undefined, r('MagentaSwatchVariantAttribute')),
			},
		],
		false
	),
	HomeDecorKitchenOtherVolumeCapacity: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('VolumeCapacityUnit')) },
		],
		false
	),
	HouseholdCleaningProductsSupplies: o(
		[
			{
				json: 'activeIngredients',
				js: 'activeIngredients',
				typ: u(undefined, a(r('HouseholdCleaningProductsSuppliesActiveIngredient'))),
			},
			{
				json: 'additionalProductAttributes',
				js: 'additionalProductAttributes',
				typ: u(undefined, a(r('HouseholdCleaningProductsSuppliesAdditionalProductAttribute'))),
			},
			{
				json: 'assembledProductHeight',
				js: 'assembledProductHeight',
				typ: u(undefined, r('HouseholdCleaningProductsSuppliesAssembledProductHeight')),
			},
			{
				json: 'assembledProductLength',
				js: 'assembledProductLength',
				typ: u(undefined, r('HouseholdCleaningProductsSuppliesAssembledProductLength')),
			},
			{
				json: 'assembledProductWeight',
				js: 'assembledProductWeight',
				typ: u(undefined, r('HouseholdCleaningProductsSuppliesAssembledProductWeight')),
			},
			{
				json: 'assembledProductWidth',
				js: 'assembledProductWidth',
				typ: u(undefined, r('HouseholdCleaningProductsSuppliesAssembledProductWidth')),
			},
			{ json: 'assemblyInstructions', js: 'assemblyInstructions', typ: u(undefined, '') },
			{
				json: 'bladeWidth',
				js: 'bladeWidth',
				typ: u(undefined, r('HouseholdCleaningProductsSuppliesBladeWidth')),
			},
			{ json: 'bristleMaterial', js: 'bristleMaterial', typ: u(undefined, '') },
			{ json: 'cleaningPath', js: 'cleaningPath', typ: u(undefined, r('CleaningPath')) },
			{ json: 'color', js: 'color', typ: u(undefined, a('')) },
			{ json: 'colorCategory', js: 'colorCategory', typ: u(undefined, a(r('ColorCategory'))) },
			{ json: 'connections', js: 'connections', typ: u(undefined, a('')) },
			{ json: 'count', js: 'count', typ: u(undefined, '') },
			{ json: 'countPerPack', js: 'countPerPack', typ: u(undefined, 0) },
			{
				json: 'fabricContent',
				js: 'fabricContent',
				typ: u(undefined, a(r('HouseholdCleaningProductsSuppliesFabricContent'))),
			},
			{ json: 'features', js: 'features', typ: u(undefined, a('')) },
			{ json: 'finish', js: 'finish', typ: u(undefined, '') },
			{
				json: 'fluidOunces',
				js: 'fluidOunces',
				typ: u(undefined, r('HouseholdCleaningProductsSuppliesFluidOunces')),
			},
			{ json: 'form', js: 'form', typ: u(undefined, '') },
			{
				json: 'handleLength',
				js: 'handleLength',
				typ: u(undefined, r('HouseholdCleaningProductsSuppliesHandleLength')),
			},
			{ json: 'inactiveIngredients', js: 'inactiveIngredients', typ: u(undefined, a('')) },
			{ json: 'ingredients', js: 'ingredients', typ: u(undefined, '') },
			{ json: 'instructions', js: 'instructions', typ: u(undefined, '') },
			{ json: 'isAssemblyRequired', js: 'isAssemblyRequired', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isBiodegradable', js: 'isBiodegradable', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isCombustible', js: 'isCombustible', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isEnergyStarCertified', js: 'isEnergyStarCertified', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isFlammable', js: 'isFlammable', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPowered', js: 'isPowered', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isRecyclable', js: 'isRecyclable', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: u(undefined, a('')) },
			{ json: 'labelImage', js: 'labelImage', typ: a(r('HouseholdCleaningProductsSuppliesLabelImage')) },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: '' },
			{ json: 'manufacturer', js: 'manufacturer', typ: '' },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: u(undefined, '') },
			{ json: 'material', js: 'material', typ: u(undefined, a('')) },
			{ json: 'modelNumber', js: 'modelNumber', typ: u(undefined, '') },
			{ json: 'msrp', js: 'msrp', typ: u(undefined, 3.14) },
			{ json: 'numberOfSheets', js: 'numberOfSheets', typ: u(undefined, 0) },
			{ json: 'pattern', js: 'pattern', typ: u(undefined, a('')) },
			{ json: 'pieceCount', js: 'pieceCount', typ: u(undefined, 0) },
			{ json: 'powerType', js: 'powerType', typ: u(undefined, '') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: u(undefined, a('')) },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: '' },
			{ json: 'recommendedLocations', js: 'recommendedLocations', typ: u(undefined, a('')) },
			{ json: 'recommendedRooms', js: 'recommendedRooms', typ: u(undefined, a('')) },
			{ json: 'recommendedSurfaces', js: 'recommendedSurfaces', typ: u(undefined, a('')) },
			{ json: 'scent', js: 'scent', typ: u(undefined, '') },
			{ json: 'shape', js: 'shape', typ: u(undefined, '') },
			{ json: 'shelfLife', js: 'shelfLife', typ: u(undefined, r('HouseholdCleaningProductsSuppliesShelfLife')) },
			{ json: 'shortDescription', js: 'shortDescription', typ: '' },
			{ json: 'size', js: 'size', typ: u(undefined, '') },
			{
				json: 'swatchImages',
				js: 'swatchImages',
				typ: u(undefined, a(r('HouseholdCleaningProductsSuppliesSwatchImage'))),
			},
			{
				json: 'variantAttributeNames',
				js: 'variantAttributeNames',
				typ: u(undefined, a(r('HouseholdCleaningProductsSuppliesVariantAttributeName'))),
			},
			{ json: 'variantGroupId', js: 'variantGroupId', typ: u(undefined, '') },
			{ json: 'volts', js: 'volts', typ: u(undefined, a(r('HouseholdCleaningProductsSuppliesVolt'))) },
		],
		false
	),
	HouseholdCleaningProductsSuppliesActiveIngredient: o(
		[
			{ json: 'activeIngredientName', js: 'activeIngredientName', typ: u(undefined, '') },
			{ json: 'activeIngredientPercentage', js: 'activeIngredientPercentage', typ: u(undefined, 3.14) },
		],
		false
	),
	HouseholdCleaningProductsSuppliesAdditionalProductAttribute: o(
		[
			{ json: 'productAttributeName', js: 'productAttributeName', typ: '' },
			{ json: 'productAttributeValue', js: 'productAttributeValue', typ: '' },
		],
		false
	),
	HouseholdCleaningProductsSuppliesAssembledProductHeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	HouseholdCleaningProductsSuppliesAssembledProductLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	HouseholdCleaningProductsSuppliesAssembledProductWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductWeightUnit')) },
		],
		false
	),
	HouseholdCleaningProductsSuppliesAssembledProductWidth: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	HouseholdCleaningProductsSuppliesBladeWidth: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('CarSeatBaseDepthUnit')) },
		],
		false
	),
	CleaningPath: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('CarSeatBaseDepthUnit')) },
		],
		false
	),
	HouseholdCleaningProductsSuppliesFabricContent: o(
		[
			{ json: 'materialName', js: 'materialName', typ: u(undefined, '') },
			{ json: 'materialPercentage', js: 'materialPercentage', typ: u(undefined, 3.14) },
		],
		false
	),
	HouseholdCleaningProductsSuppliesFluidOunces: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('FluidOuncesSupplying100CaloriesUnit')) },
		],
		false
	),
	HouseholdCleaningProductsSuppliesHandleLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('ScreenSizeUnit')) },
		],
		false
	),
	HouseholdCleaningProductsSuppliesLabelImage: o(
		[
			{ json: 'labelImageContains', js: 'labelImageContains', typ: r('LabelImageContains') },
			{ json: 'labelImageURL', js: 'labelImageURL', typ: '' },
		],
		false
	),
	HouseholdCleaningProductsSuppliesShelfLife: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 0) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('ShelfLifeUnit')) },
		],
		false
	),
	HouseholdCleaningProductsSuppliesSwatchImage: o(
		[
			{ json: 'swatchImageUrl', js: 'swatchImageUrl', typ: u(undefined, '') },
			{
				json: 'swatchVariantAttribute',
				js: 'swatchVariantAttribute',
				typ: u(undefined, r('HouseholdCleaningProductsSuppliesVariantAttributeName')),
			},
		],
		false
	),
	HouseholdCleaningProductsSuppliesVolt: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('VoltUnit')) },
		],
		false
	),
	InstrumentAccessories: o(
		[
			{
				json: 'additionalProductAttributes',
				js: 'additionalProductAttributes',
				typ: u(undefined, a(r('InstrumentAccessoriesAdditionalProductAttribute'))),
			},
			{
				json: 'assembledProductHeight',
				js: 'assembledProductHeight',
				typ: u(undefined, r('InstrumentAccessoriesAssembledProductHeight')),
			},
			{
				json: 'assembledProductLength',
				js: 'assembledProductLength',
				typ: u(undefined, r('InstrumentAccessoriesAssembledProductLength')),
			},
			{
				json: 'assembledProductWeight',
				js: 'assembledProductWeight',
				typ: u(undefined, r('InstrumentAccessoriesAssembledProductWeight')),
			},
			{
				json: 'assembledProductWidth',
				js: 'assembledProductWidth',
				typ: u(undefined, r('InstrumentAccessoriesAssembledProductWidth')),
			},
			{ json: 'athlete', js: 'athlete', typ: u(undefined, a('')) },
			{ json: 'autographedBy', js: 'autographedBy', typ: u(undefined, '') },
			{ json: 'batteryLife', js: 'batteryLife', typ: u(undefined, r('InstrumentAccessoriesBatteryLife')) },
			{ json: 'color', js: 'color', typ: u(undefined, a('')) },
			{ json: 'colorCategory', js: 'colorCategory', typ: u(undefined, a(r('ColorCategory'))) },
			{
				json: 'compositeWoodCertificationCode',
				js: 'compositeWoodCertificationCode',
				typ: r('CompositeWoodCertificationCode'),
			},
			{ json: 'count', js: 'count', typ: u(undefined, '') },
			{ json: 'countPerPack', js: 'countPerPack', typ: u(undefined, 0) },
			{ json: 'displayTechnology', js: 'displayTechnology', typ: u(undefined, '') },
			{ json: 'features', js: 'features', typ: u(undefined, a('')) },
			{ json: 'hasBluetooth', js: 'hasBluetooth', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'ingredients', js: 'ingredients', typ: u(undefined, '') },
			{
				json: 'inputsAndOutputs',
				js: 'inputsAndOutputs',
				typ: u(undefined, a(r('InstrumentAccessoriesInputsAndOutput'))),
			},
			{ json: 'instrument', js: 'instrument', typ: u(undefined, a('')) },
			{ json: 'isPortable', js: 'isPortable', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isRemoteControlIncluded', js: 'isRemoteControlIncluded', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: u(undefined, a('')) },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: '' },
			{ json: 'manufacturer', js: 'manufacturer', typ: '' },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: u(undefined, '') },
			{ json: 'material', js: 'material', typ: u(undefined, a('')) },
			{ json: 'modelNumber', js: 'modelNumber', typ: u(undefined, '') },
			{ json: 'msrp', js: 'msrp', typ: u(undefined, 3.14) },
			{ json: 'pattern', js: 'pattern', typ: u(undefined, a('')) },
			{ json: 'pieceCount', js: 'pieceCount', typ: u(undefined, 0) },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: u(undefined, a('')) },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: '' },
			{ json: 'recommendedLocations', js: 'recommendedLocations', typ: u(undefined, a('')) },
			{ json: 'recommendedUses', js: 'recommendedUses', typ: u(undefined, a('')) },
			{ json: 'shortDescription', js: 'shortDescription', typ: '' },
			{ json: 'size', js: 'size', typ: u(undefined, '') },
			{ json: 'smallPartsWarnings', js: 'smallPartsWarnings', typ: a(r('SmallPartsWarningCode')) },
			{ json: 'sportsLeague', js: 'sportsLeague', typ: u(undefined, a('')) },
			{ json: 'sportsTeam', js: 'sportsTeam', typ: u(undefined, a('')) },
			{ json: 'swatchImages', js: 'swatchImages', typ: u(undefined, a(r('InstrumentAccessoriesSwatchImage'))) },
			{
				json: 'variantAttributeNames',
				js: 'variantAttributeNames',
				typ: u(undefined, a(r('InstrumentAccessoriesVariantAttributeName'))),
			},
			{ json: 'variantGroupId', js: 'variantGroupId', typ: u(undefined, '') },
			{ json: 'warrantyText', js: 'warrantyText', typ: u(undefined, '') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: u(undefined, '') },
			{ json: 'wirelessTechnologies', js: 'wirelessTechnologies', typ: u(undefined, a('')) },
		],
		false
	),
	InstrumentAccessoriesAdditionalProductAttribute: o(
		[
			{ json: 'productAttributeName', js: 'productAttributeName', typ: '' },
			{ json: 'productAttributeValue', js: 'productAttributeValue', typ: '' },
		],
		false
	),
	InstrumentAccessoriesAssembledProductHeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	InstrumentAccessoriesAssembledProductLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	InstrumentAccessoriesAssembledProductWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductWeightUnit')) },
		],
		false
	),
	InstrumentAccessoriesAssembledProductWidth: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	InstrumentAccessoriesBatteryLife: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('StandbyTimeUnit')) },
		],
		false
	),
	InstrumentAccessoriesInputsAndOutput: o(
		[
			{ json: 'inputOutputQuantity', js: 'inputOutputQuantity', typ: u(undefined, 0) },
			{ json: 'inputOutputType', js: 'inputOutputType', typ: u(undefined, '') },
		],
		false
	),
	InstrumentAccessoriesSwatchImage: o(
		[
			{ json: 'swatchImageUrl', js: 'swatchImageUrl', typ: u(undefined, '') },
			{
				json: 'swatchVariantAttribute',
				js: 'swatchVariantAttribute',
				typ: u(undefined, r('InstrumentAccessoriesVariantAttributeName')),
			},
		],
		false
	),
	Jewelry: o(
		[
			{ json: 'accentStone', js: 'accentStone', typ: u(undefined, a(r('AryStoneType'))) },
			{
				json: 'additionalProductAttributes',
				js: 'additionalProductAttributes',
				typ: u(undefined, a(r('JewelryAdditionalProductAttribute'))),
			},
			{ json: 'ageGroup', js: 'ageGroup', typ: u(undefined, a(r('ArtCraftAgeGroup'))) },
			{ json: 'backFinding', js: 'backFinding', typ: u(undefined, r('EarringBack')) },
			{ json: 'birthstone', js: 'birthstone', typ: u(undefined, r('BirthstoneMonth')) },
			{ json: 'bodyJewelryStyle', js: 'bodyJewelryStyle', typ: u(undefined, '') },
			{ json: 'bodyParts', js: 'bodyParts', typ: u(undefined, a('')) },
			{ json: 'braceletCharmStyle', js: 'braceletCharmStyle', typ: u(undefined, '') },
			{ json: 'braceletStyle', js: 'braceletStyle', typ: u(undefined, r('BraceletStyle')) },
			{ json: 'carats', js: 'carats', typ: u(undefined, r('JewelryCarats')) },
			{ json: 'certifyingAgent', js: 'certifyingAgent', typ: u(undefined, '') },
			{ json: 'chainLength', js: 'chainLength', typ: u(undefined, r('JewelryChainLength')) },
			{ json: 'chainPattern', js: 'chainPattern', typ: u(undefined, a(r('ChainPattern'))) },
			{ json: 'character', js: 'character', typ: u(undefined, a('')) },
			{ json: 'claspType', js: 'claspType', typ: u(undefined, a(r('ClaspType'))) },
			{ json: 'color', js: 'color', typ: u(undefined, a('')) },
			{ json: 'colorCategory', js: 'colorCategory', typ: u(undefined, a(r('ColorCategory'))) },
			{ json: 'count', js: 'count', typ: u(undefined, '') },
			{ json: 'countPerPack', js: 'countPerPack', typ: u(undefined, 0) },
			{ json: 'diameter', js: 'diameter', typ: u(undefined, r('JewelryDiameter')) },
			{ json: 'diamondClarity', js: 'diamondClarity', typ: u(undefined, r('DiamondClarity')) },
			{ json: 'diamondColor', js: 'diamondColor', typ: u(undefined, r('DiamondColor')) },
			{ json: 'diamondCut', js: 'diamondCut', typ: u(undefined, r('DiamondCut')) },
			{ json: 'earGaugeSize', js: 'earGaugeSize', typ: u(undefined, r('EarGaugeSize')) },
			{ json: 'earringStyle', js: 'earringStyle', typ: u(undefined, r('EarringStyle')) },
			{ json: 'gemstone', js: 'gemstone', typ: u(undefined, r('AryStoneType')) },
			{ json: 'gemstoneShape', js: 'gemstoneShape', typ: u(undefined, r('PrimaryStoneShape')) },
			{ json: 'gender', js: 'gender', typ: u(undefined, r('BabyClothingGender')) },
			{
				json: 'isMadeFromRecycledMaterial',
				js: 'isMadeFromRecycledMaterial',
				typ: u(undefined, r('MustShipAlone')),
			},
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isResizable', js: 'isResizable', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'jewelrySetting', js: 'jewelrySetting', typ: u(undefined, a(r('JewelrySetting'))) },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: u(undefined, a('')) },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: '' },
			{ json: 'manufacturer', js: 'manufacturer', typ: '' },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: u(undefined, '') },
			{ json: 'material', js: 'material', typ: u(undefined, a('')) },
			{ json: 'metal', js: 'metal', typ: u(undefined, r('MetalType')) },
			{ json: 'metalPurity', js: 'metalPurity', typ: u(undefined, '') },
			{ json: 'modelNumber', js: 'modelNumber', typ: u(undefined, '') },
			{ json: 'msrp', js: 'msrp', typ: u(undefined, 3.14) },
			{ json: 'necklaceStyle', js: 'necklaceStyle', typ: u(undefined, r('NecklaceStyle')) },
			{ json: 'numberOfGemstones', js: 'numberOfGemstones', typ: u(undefined, 0) },
			{ json: 'occasion', js: 'occasion', typ: u(undefined, a('')) },
			{ json: 'pearlType', js: 'pearlType', typ: u(undefined, a('')) },
			{ json: 'personalRelationship', js: 'personalRelationship', typ: u(undefined, a('')) },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: u(undefined, a('')) },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: '' },
			{
				json: 'recycledMaterialContent',
				js: 'recycledMaterialContent',
				typ: u(undefined, a(r('JewelryRecycledMaterialContent'))),
			},
			{ json: 'religion', js: 'religion', typ: u(undefined, r('Religion')) },
			{ json: 'ringSize', js: 'ringSize', typ: u(undefined, 3.14) },
			{ json: 'ringStyle', js: 'ringStyle', typ: u(undefined, a('')) },
			{ json: 'seasonCode', js: 'seasonCode', typ: u(undefined, r('SeasonCode')) },
			{ json: 'seasonYear', js: 'seasonYear', typ: u(undefined, 0) },
			{ json: 'secondaryStoneType', js: 'secondaryStoneType', typ: u(undefined, r('AryStoneType')) },
			{ json: 'shape', js: 'shape', typ: u(undefined, '') },
			{ json: 'shortDescription', js: 'shortDescription', typ: '' },
			{ json: 'size', js: 'size', typ: u(undefined, '') },
			{ json: 'sizePerPearl', js: 'sizePerPearl', typ: u(undefined, r('SizePerPearl')) },
			{ json: 'smallPartsWarnings', js: 'smallPartsWarnings', typ: a(r('SmallPartsWarningCode')) },
			{ json: 'sportsLeague', js: 'sportsLeague', typ: u(undefined, a('')) },
			{ json: 'sportsTeam', js: 'sportsTeam', typ: u(undefined, a('')) },
			{ json: 'stoneCreationMethod', js: 'stoneCreationMethod', typ: u(undefined, '') },
			{ json: 'stoneTreatment', js: 'stoneTreatment', typ: u(undefined, '') },
			{ json: 'style', js: 'style', typ: u(undefined, '') },
			{ json: 'swatchImages', js: 'swatchImages', typ: u(undefined, a(r('JewelrySwatchImage'))) },
			{ json: 'theme', js: 'theme', typ: u(undefined, a('')) },
			{ json: 'totalDiamondWeight', js: 'totalDiamondWeight', typ: u(undefined, r('JewelryTotalDiamondWeight')) },
			{
				json: 'variantAttributeNames',
				js: 'variantAttributeNames',
				typ: u(undefined, a(r('JewelryVariantAttributeName'))),
			},
			{ json: 'variantGroupId', js: 'variantGroupId', typ: u(undefined, '') },
			{ json: 'warrantyText', js: 'warrantyText', typ: u(undefined, '') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: u(undefined, '') },
		],
		false
	),
	JewelryAdditionalProductAttribute: o(
		[
			{ json: 'productAttributeName', js: 'productAttributeName', typ: '' },
			{ json: 'productAttributeValue', js: 'productAttributeValue', typ: '' },
		],
		false
	),
	JewelryCarats: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('CaratsUnit')) },
		],
		false
	),
	JewelryChainLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	JewelryDiameter: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('RoughInDistanceUnit')) },
		],
		false
	),
	EarGaugeSize: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('HeelHeightUnit')) },
		],
		false
	),
	JewelryRecycledMaterialContent: o(
		[
			{ json: 'percentageOfRecycledMaterial', js: 'percentageOfRecycledMaterial', typ: u(undefined, 3.14) },
			{ json: 'recycledMaterial', js: 'recycledMaterial', typ: u(undefined, '') },
		],
		false
	),
	SizePerPearl: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('FocalLengthUnit')) },
		],
		false
	),
	JewelrySwatchImage: o(
		[
			{ json: 'swatchImageUrl', js: 'swatchImageUrl', typ: u(undefined, '') },
			{
				json: 'swatchVariantAttribute',
				js: 'swatchVariantAttribute',
				typ: u(undefined, r('JewelryVariantAttributeName')),
			},
		],
		false
	),
	JewelryTotalDiamondWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('CaratsUnit')) },
		],
		false
	),
	LandVehicles: o(
		[
			{ json: 'acceleration', js: 'acceleration', typ: u(undefined, '') },
			{
				json: 'additionalProductAttributes',
				js: 'additionalProductAttributes',
				typ: u(undefined, a(r('LandVehiclesAdditionalProductAttribute'))),
			},
			{
				json: 'assembledProductHeight',
				js: 'assembledProductHeight',
				typ: u(undefined, r('LandVehiclesAssembledProductHeight')),
			},
			{
				json: 'assembledProductLength',
				js: 'assembledProductLength',
				typ: u(undefined, r('LandVehiclesAssembledProductLength')),
			},
			{
				json: 'assembledProductWeight',
				js: 'assembledProductWeight',
				typ: u(undefined, r('LandVehiclesAssembledProductWeight')),
			},
			{
				json: 'assembledProductWidth',
				js: 'assembledProductWidth',
				typ: u(undefined, r('LandVehiclesAssembledProductWidth')),
			},
			{
				json: 'averageFuelConsumption',
				js: 'averageFuelConsumption',
				typ: u(undefined, r('LandVehiclesAverageFuelConsumption')),
			},
			{ json: 'boreStroke', js: 'boreStroke', typ: u(undefined, '') },
			{ json: 'color', js: 'color', typ: u(undefined, a('')) },
			{
				json: 'compositeWoodCertificationCode',
				js: 'compositeWoodCertificationCode',
				typ: r('CompositeWoodCertificationCode'),
			},
			{ json: 'compressionRatio', js: 'compressionRatio', typ: u(undefined, '') },
			{ json: 'coolingSystem', js: 'coolingSystem', typ: u(undefined, '') },
			{ json: 'countryOfOriginTextiles', js: 'countryOfOriginTextiles', typ: r('CountryOfOriginTextiles') },
			{ json: 'curbWeight', js: 'curbWeight', typ: u(undefined, r('CurbWeight')) },
			{ json: 'drivetrain', js: 'drivetrain', typ: u(undefined, '') },
			{
				json: 'engineDisplacement',
				js: 'engineDisplacement',
				typ: u(undefined, r('LandVehiclesEngineDisplacement')),
			},
			{ json: 'engineModel', js: 'engineModel', typ: u(undefined, '') },
			{ json: 'fabricContent', js: 'fabricContent', typ: u(undefined, a(r('LandVehiclesFabricContent'))) },
			{ json: 'features', js: 'features', typ: u(undefined, a('')) },
			{ json: 'frontBrakes', js: 'frontBrakes', typ: u(undefined, '') },
			{ json: 'frontSuspension', js: 'frontSuspension', typ: u(undefined, '') },
			{ json: 'frontTires', js: 'frontTires', typ: u(undefined, '') },
			{ json: 'frontWheels', js: 'frontWheels', typ: u(undefined, '') },
			{ json: 'fuelCapacity', js: 'fuelCapacity', typ: u(undefined, r('LandVehiclesFuelCapacity')) },
			{ json: 'fuelRequirement', js: 'fuelRequirement', typ: u(undefined, '') },
			{ json: 'fuelSystem', js: 'fuelSystem', typ: u(undefined, '') },
			{ json: 'inductionSystem', js: 'inductionSystem', typ: u(undefined, '') },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: u(undefined, a('')) },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: '' },
			{ json: 'manufacturer', js: 'manufacturer', typ: '' },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: u(undefined, '') },
			{
				json: 'maximumEnginePower',
				js: 'maximumEnginePower',
				typ: u(undefined, r('LandVehiclesMaximumEnginePower')),
			},
			{ json: 'modelNumber', js: 'modelNumber', typ: u(undefined, '') },
			{ json: 'msrp', js: 'msrp', typ: u(undefined, 3.14) },
			{ json: 'powertrain', js: 'powertrain', typ: u(undefined, '') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: u(undefined, a('')) },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: '' },
			{ json: 'rearBrakes', js: 'rearBrakes', typ: u(undefined, '') },
			{ json: 'rearSuspension', js: 'rearSuspension', typ: u(undefined, '') },
			{ json: 'rearTires', js: 'rearTires', typ: u(undefined, '') },
			{ json: 'rearWheels', js: 'rearWheels', typ: u(undefined, '') },
			{ json: 'seatHeight', js: 'seatHeight', typ: u(undefined, r('LandVehiclesSeatHeight')) },
			{ json: 'seatingCapacity', js: 'seatingCapacity', typ: u(undefined, 0) },
			{ json: 'shortDescription', js: 'shortDescription', typ: '' },
			{ json: 'submodel', js: 'submodel', typ: u(undefined, '') },
			{ json: 'swatchImages', js: 'swatchImages', typ: u(undefined, a(r('LandVehiclesSwatchImage'))) },
			{ json: 'topSpeed', js: 'topSpeed', typ: u(undefined, r('LandVehiclesTopSpeed')) },
			{ json: 'torque', js: 'torque', typ: u(undefined, '') },
			{ json: 'towingCapacity', js: 'towingCapacity', typ: u(undefined, r('TowingCapacity')) },
			{ json: 'transmissionDesignation', js: 'transmissionDesignation', typ: u(undefined, '') },
			{
				json: 'variantAttributeNames',
				js: 'variantAttributeNames',
				typ: u(undefined, a(r('LandVehiclesVariantAttributeName'))),
			},
			{ json: 'variantGroupId', js: 'variantGroupId', typ: u(undefined, '') },
			{ json: 'vehicleMake', js: 'vehicleMake', typ: u(undefined, '') },
			{ json: 'vehicleModel', js: 'vehicleModel', typ: u(undefined, '') },
			{ json: 'vehicleType', js: 'vehicleType', typ: u(undefined, '') },
			{ json: 'vehicleYear', js: 'vehicleYear', typ: u(undefined, 0) },
			{ json: 'warrantyText', js: 'warrantyText', typ: u(undefined, '') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: u(undefined, '') },
			{ json: 'wheelbase', js: 'wheelbase', typ: u(undefined, r('Wheelbase')) },
		],
		false
	),
	LandVehiclesAdditionalProductAttribute: o(
		[
			{ json: 'productAttributeName', js: 'productAttributeName', typ: '' },
			{ json: 'productAttributeValue', js: 'productAttributeValue', typ: '' },
		],
		false
	),
	LandVehiclesAssembledProductHeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	LandVehiclesAssembledProductLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	LandVehiclesAssembledProductWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductWeightUnit')) },
		],
		false
	),
	LandVehiclesAssembledProductWidth: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	LandVehiclesAverageFuelConsumption: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AverageFuelConsumptionUnit')) },
		],
		false
	),
	CurbWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('MaximumLoadWeightUnit')) },
		],
		false
	),
	LandVehiclesEngineDisplacement: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('EngineDisplacementUnit')) },
		],
		false
	),
	LandVehiclesFabricContent: o(
		[
			{ json: 'materialName', js: 'materialName', typ: u(undefined, '') },
			{ json: 'materialPercentage', js: 'materialPercentage', typ: u(undefined, 3.14) },
		],
		false
	),
	LandVehiclesFuelCapacity: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('FuelCapacityUnit')) },
		],
		false
	),
	LandVehiclesMaximumEnginePower: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('MaximumEnginePowerUnit')) },
		],
		false
	),
	LandVehiclesSeatHeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('ScreenSizeUnit')) },
		],
		false
	),
	LandVehiclesSwatchImage: o(
		[
			{ json: 'swatchImageUrl', js: 'swatchImageUrl', typ: u(undefined, '') },
			{
				json: 'swatchVariantAttribute',
				js: 'swatchVariantAttribute',
				typ: u(undefined, r('LandVehiclesVariantAttributeName')),
			},
		],
		false
	),
	LandVehiclesTopSpeed: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('TopSpeedUnit')) },
		],
		false
	),
	TowingCapacity: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('MaximumLoadWeightUnit')) },
		],
		false
	),
	Wheelbase: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	LargeAppliances: o(
		[
			{
				json: 'additionalProductAttributes',
				js: 'additionalProductAttributes',
				typ: u(undefined, a(r('LargeAppliancesAdditionalProductAttribute'))),
			},
			{
				json: 'assembledProductHeight',
				js: 'assembledProductHeight',
				typ: u(undefined, r('LargeAppliancesAssembledProductHeight')),
			},
			{
				json: 'assembledProductLength',
				js: 'assembledProductLength',
				typ: u(undefined, r('LargeAppliancesAssembledProductLength')),
			},
			{
				json: 'assembledProductWeight',
				js: 'assembledProductWeight',
				typ: u(undefined, r('LargeAppliancesAssembledProductWeight')),
			},
			{
				json: 'assembledProductWidth',
				js: 'assembledProductWidth',
				typ: u(undefined, r('LargeAppliancesAssembledProductWidth')),
			},
			{ json: 'assemblyInstructions', js: 'assemblyInstructions', typ: u(undefined, '') },
			{ json: 'btu', js: 'btu', typ: u(undefined, 0) },
			{ json: 'capacity', js: 'capacity', typ: u(undefined, '') },
			{ json: 'cleaningCareAndMaintenance', js: 'cleaningCareAndMaintenance', typ: u(undefined, '') },
			{ json: 'collection', js: 'collection', typ: u(undefined, '') },
			{ json: 'color', js: 'color', typ: u(undefined, a('')) },
			{ json: 'colorCategory', js: 'colorCategory', typ: u(undefined, a(r('ColorCategory'))) },
			{ json: 'cordLength', js: 'cordLength', typ: u(undefined, r('LargeAppliancesCordLength')) },
			{ json: 'energyGuideLabel', js: 'energyGuideLabel', typ: u(undefined, '') },
			{ json: 'features', js: 'features', typ: u(undefined, a('')) },
			{ json: 'finish', js: 'finish', typ: u(undefined, '') },
			{ json: 'fuelType', js: 'fuelType', typ: u(undefined, '') },
			{ json: 'hasAutomaticShutoff', js: 'hasAutomaticShutoff', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'hasCfl', js: 'hasCfl', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'homeDecorStyle', js: 'homeDecorStyle', typ: u(undefined, '') },
			{ json: 'isAssemblyRequired', js: 'isAssemblyRequired', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isEnergyStarCertified', js: 'isEnergyStarCertified', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isRemoteControlIncluded', js: 'isRemoteControlIncluded', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isSet', js: 'isSet', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isSmart', js: 'isSmart', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: u(undefined, a('')) },
			{ json: 'lightingFactsLabel', js: 'lightingFactsLabel', typ: u(undefined, '') },
			{ json: 'loadPosition', js: 'loadPosition', typ: u(undefined, '') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: '' },
			{ json: 'manufacturer', js: 'manufacturer', typ: '' },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: u(undefined, '') },
			{ json: 'material', js: 'material', typ: u(undefined, a('')) },
			{ json: 'maximumRoomSize', js: 'maximumRoomSize', typ: u(undefined, r('MaximumRoomSize')) },
			{ json: 'modelNumber', js: 'modelNumber', typ: u(undefined, '') },
			{ json: 'msrp', js: 'msrp', typ: u(undefined, 3.14) },
			{ json: 'pattern', js: 'pattern', typ: u(undefined, a('')) },
			{ json: 'powerType', js: 'powerType', typ: u(undefined, '') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: u(undefined, a('')) },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: '' },
			{ json: 'recommendedRooms', js: 'recommendedRooms', typ: u(undefined, a('')) },
			{ json: 'recommendedUses', js: 'recommendedUses', typ: u(undefined, a('')) },
			{ json: 'runTime', js: 'runTime', typ: u(undefined, r('RunTime')) },
			{ json: 'shape', js: 'shape', typ: u(undefined, '') },
			{ json: 'shortDescription', js: 'shortDescription', typ: '' },
			{ json: 'size', js: 'size', typ: u(undefined, '') },
			{ json: 'swatchImages', js: 'swatchImages', typ: u(undefined, a(r('LargeAppliancesSwatchImage'))) },
			{
				json: 'variantAttributeNames',
				js: 'variantAttributeNames',
				typ: u(undefined, a(r('LargeAppliancesVariantAttributeName'))),
			},
			{ json: 'variantGroupId', js: 'variantGroupId', typ: u(undefined, '') },
			{ json: 'volts', js: 'volts', typ: u(undefined, a(r('LargeAppliancesVolt'))) },
			{ json: 'warrantyText', js: 'warrantyText', typ: u(undefined, '') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: u(undefined, '') },
			{ json: 'watts', js: 'watts', typ: u(undefined, r('LargeAppliancesWatts')) },
		],
		false
	),
	LargeAppliancesAdditionalProductAttribute: o(
		[
			{ json: 'productAttributeName', js: 'productAttributeName', typ: '' },
			{ json: 'productAttributeValue', js: 'productAttributeValue', typ: '' },
		],
		false
	),
	LargeAppliancesAssembledProductHeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	LargeAppliancesAssembledProductLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	LargeAppliancesAssembledProductWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductWeightUnit')) },
		],
		false
	),
	LargeAppliancesAssembledProductWidth: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	LargeAppliancesCordLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	MaximumRoomSize: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('CoverageAreaUnit')) },
		],
		false
	),
	RunTime: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('StandbyTimeUnit')) },
		],
		false
	),
	LargeAppliancesSwatchImage: o(
		[
			{ json: 'swatchImageUrl', js: 'swatchImageUrl', typ: u(undefined, '') },
			{
				json: 'swatchVariantAttribute',
				js: 'swatchVariantAttribute',
				typ: u(undefined, r('LargeAppliancesVariantAttributeName')),
			},
		],
		false
	),
	LargeAppliancesVolt: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('VoltUnit')) },
		],
		false
	),
	LargeAppliancesWatts: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('WattsUnit')) },
		],
		false
	),
	MedicalAidsEquipment: o(
		[
			{
				json: 'additionalProductAttributes',
				js: 'additionalProductAttributes',
				typ: u(undefined, a(r('MedicalAidsEquipmentAdditionalProductAttribute'))),
			},
			{ json: 'ageGroup', js: 'ageGroup', typ: u(undefined, a(r('ArtCraftAgeGroup'))) },
			{
				json: 'assembledProductHeight',
				js: 'assembledProductHeight',
				typ: u(undefined, r('MedicalAidsEquipmentAssembledProductHeight')),
			},
			{
				json: 'assembledProductLength',
				js: 'assembledProductLength',
				typ: u(undefined, r('MedicalAidsEquipmentAssembledProductLength')),
			},
			{
				json: 'assembledProductWeight',
				js: 'assembledProductWeight',
				typ: u(undefined, r('MedicalAidsEquipmentAssembledProductWeight')),
			},
			{
				json: 'assembledProductWidth',
				js: 'assembledProductWidth',
				typ: u(undefined, r('MedicalAidsEquipmentAssembledProductWidth')),
			},
			{ json: 'bodyParts', js: 'bodyParts', typ: u(undefined, a('')) },
			{ json: 'cleaningCareAndMaintenance', js: 'cleaningCareAndMaintenance', typ: u(undefined, '') },
			{ json: 'collection', js: 'collection', typ: u(undefined, '') },
			{ json: 'color', js: 'color', typ: u(undefined, a('')) },
			{ json: 'colorCategory', js: 'colorCategory', typ: u(undefined, a(r('ColorCategory'))) },
			{ json: 'compatibleBrands', js: 'compatibleBrands', typ: u(undefined, a('')) },
			{ json: 'count', js: 'count', typ: u(undefined, '') },
			{ json: 'countPerPack', js: 'countPerPack', typ: u(undefined, 0) },
			{ json: 'diameter', js: 'diameter', typ: u(undefined, r('MedicalAidsEquipmentDiameter')) },
			{ json: 'driveSystem', js: 'driveSystem', typ: u(undefined, '') },
			{ json: 'fabricCareInstructions', js: 'fabricCareInstructions', typ: u(undefined, a('')) },
			{
				json: 'fabricContent',
				js: 'fabricContent',
				typ: u(undefined, a(r('MedicalAidsEquipmentFabricContent'))),
			},
			{ json: 'features', js: 'features', typ: u(undefined, a('')) },
			{ json: 'gender', js: 'gender', typ: u(undefined, r('BabyClothingGender')) },
			{ json: 'healthConcerns', js: 'healthConcerns', typ: u(undefined, a('')) },
			{ json: 'isDisposable', js: 'isDisposable', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isFoldable', js: 'isFoldable', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isIndustrial', js: 'isIndustrial', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isInflatable', js: 'isInflatable', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isLatexFree', js: 'isLatexFree', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPortable', js: 'isPortable', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPowered', js: 'isPowered', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isReusable', js: 'isReusable', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isSet', js: 'isSet', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isTravelSize', js: 'isTravelSize', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isWaterproof', js: 'isWaterproof', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isWheeled', js: 'isWheeled', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: u(undefined, a('')) },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: '' },
			{ json: 'manufacturer', js: 'manufacturer', typ: '' },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: u(undefined, '') },
			{ json: 'material', js: 'material', typ: u(undefined, a('')) },
			{ json: 'maximumWeight', js: 'maximumWeight', typ: u(undefined, r('MedicalAidsEquipmentMaximumWeight')) },
			{ json: 'medicineStrength', js: 'medicineStrength', typ: u(undefined, '') },
			{ json: 'minimumWeight', js: 'minimumWeight', typ: u(undefined, r('MedicalAidsEquipmentMinimumWeight')) },
			{ json: 'modelNumber', js: 'modelNumber', typ: u(undefined, '') },
			{ json: 'msrp', js: 'msrp', typ: u(undefined, 3.14) },
			{ json: 'pieceCount', js: 'pieceCount', typ: u(undefined, 0) },
			{ json: 'powerType', js: 'powerType', typ: u(undefined, '') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: u(undefined, a('')) },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: '' },
			{ json: 'recommendedUses', js: 'recommendedUses', typ: u(undefined, a('')) },
			{ json: 'shape', js: 'shape', typ: u(undefined, '') },
			{ json: 'shortDescription', js: 'shortDescription', typ: '' },
			{ json: 'size', js: 'size', typ: u(undefined, '') },
			{ json: 'swatchImages', js: 'swatchImages', typ: u(undefined, a(r('MedicalAidsEquipmentSwatchImage'))) },
			{
				json: 'variantAttributeNames',
				js: 'variantAttributeNames',
				typ: u(undefined, a(r('MedicalAidsEquipmentVariantAttributeName'))),
			},
			{ json: 'variantGroupId', js: 'variantGroupId', typ: u(undefined, '') },
			{ json: 'warrantyText', js: 'warrantyText', typ: u(undefined, '') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: u(undefined, '') },
		],
		false
	),
	MedicalAidsEquipmentAdditionalProductAttribute: o(
		[
			{ json: 'productAttributeName', js: 'productAttributeName', typ: '' },
			{ json: 'productAttributeValue', js: 'productAttributeValue', typ: '' },
		],
		false
	),
	MedicalAidsEquipmentAssembledProductHeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	MedicalAidsEquipmentAssembledProductLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	MedicalAidsEquipmentAssembledProductWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductWeightUnit')) },
		],
		false
	),
	MedicalAidsEquipmentAssembledProductWidth: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	MedicalAidsEquipmentDiameter: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('RoughInDistanceUnit')) },
		],
		false
	),
	MedicalAidsEquipmentFabricContent: o(
		[
			{ json: 'materialName', js: 'materialName', typ: u(undefined, '') },
			{ json: 'materialPercentage', js: 'materialPercentage', typ: u(undefined, 3.14) },
		],
		false
	),
	MedicalAidsEquipmentMaximumWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('PurpleUnit')) },
		],
		false
	),
	MedicalAidsEquipmentMinimumWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductWeightUnit')) },
		],
		false
	),
	MedicalAidsEquipmentSwatchImage: o(
		[
			{ json: 'swatchImageUrl', js: 'swatchImageUrl', typ: u(undefined, '') },
			{
				json: 'swatchVariantAttribute',
				js: 'swatchVariantAttribute',
				typ: u(undefined, r('MedicalAidsEquipmentVariantAttributeName')),
			},
		],
		false
	),
	MedicineSupplements: o(
		[
			{
				json: 'activeIngredients',
				js: 'activeIngredients',
				typ: u(undefined, a(r('MedicineSupplementsActiveIngredient'))),
			},
			{ json: 'activityStage', js: 'activityStage', typ: u(undefined, a(r('ActivityStage'))) },
			{
				json: 'additionalProductAttributes',
				js: 'additionalProductAttributes',
				typ: u(undefined, a(r('MedicineSupplementsAdditionalProductAttribute'))),
			},
			{ json: 'ageGroup', js: 'ageGroup', typ: u(undefined, a(r('ArtCraftAgeGroup'))) },
			{ json: 'bodyParts', js: 'bodyParts', typ: u(undefined, a('')) },
			{ json: 'calories', js: 'calories', typ: u(undefined, r('MedicineSupplementsCalories')) },
			{ json: 'color', js: 'color', typ: u(undefined, a('')) },
			{ json: 'countPerPack', js: 'countPerPack', typ: u(undefined, 0) },
			{ json: 'dietaryMethod', js: 'dietaryMethod', typ: u(undefined, a('')) },
			{ json: 'dosage', js: 'dosage', typ: u(undefined, '') },
			{
				json: 'drugActiveInactiveIngredientsImage',
				js: 'drugActiveInactiveIngredientsImage',
				typ: u(undefined, ''),
			},
			{ json: 'drugDosageInstructionsImage', js: 'drugDosageInstructionsImage', typ: u(undefined, '') },
			{ json: 'flavor', js: 'flavor', typ: u(undefined, '') },
			{ json: 'form', js: 'form', typ: u(undefined, '') },
			{ json: 'gender', js: 'gender', typ: u(undefined, r('BabyClothingGender')) },
			{ json: 'healthConcerns', js: 'healthConcerns', typ: u(undefined, a('')) },
			{ json: 'inactiveIngredients', js: 'inactiveIngredients', typ: u(undefined, a('')) },
			{ json: 'ingredients', js: 'ingredients', typ: u(undefined, '') },
			{ json: 'instructions', js: 'instructions', typ: u(undefined, '') },
			{ json: 'isControlledSubstance', js: 'isControlledSubstance', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: u(undefined, a('')) },
			{ json: 'labelImage', js: 'labelImage', typ: a(r('MedicineSupplementsLabelImage')) },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: '' },
			{ json: 'manufacturer', js: 'manufacturer', typ: '' },
			{ json: 'medicineStrength', js: 'medicineStrength', typ: u(undefined, '') },
			{ json: 'msrp', js: 'msrp', typ: u(undefined, 3.14) },
			{ json: 'nationalDrugCode', js: 'nationalDrugCode', typ: u(undefined, '') },
			{ json: 'nutrientContentClaims', js: 'nutrientContentClaims', typ: u(undefined, a('')) },
			{ json: 'nutrients', js: 'nutrients', typ: u(undefined, a(r('Supplement'))) },
			{ json: 'primaryIngredient', js: 'primaryIngredient', typ: u(undefined, a('')) },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: u(undefined, a('')) },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: '' },
			{ json: 'servingSize', js: 'servingSize', typ: u(undefined, '') },
			{ json: 'servingsPerContainer', js: 'servingsPerContainer', typ: u(undefined, 3.14) },
			{ json: 'shelfLife', js: 'shelfLife', typ: u(undefined, r('MedicineSupplementsShelfLife')) },
			{ json: 'shortDescription', js: 'shortDescription', typ: '' },
			{ json: 'size', js: 'size', typ: u(undefined, '') },
			{ json: 'stopUseIndications', js: 'stopUseIndications', typ: u(undefined, a('')) },
			{ json: 'sugarPerServing', js: 'sugarPerServing', typ: u(undefined, 3.14) },
			{
				json: 'supplementActiveInactiveIngredientsImage',
				js: 'supplementActiveInactiveIngredientsImage',
				typ: u(undefined, ''),
			},
			{
				json: 'supplementDosageInstructionsImage',
				js: 'supplementDosageInstructionsImage',
				typ: u(undefined, ''),
			},
			{ json: 'swatchImages', js: 'swatchImages', typ: u(undefined, a(r('MedicineSupplementsSwatchImage'))) },
			{ json: 'symptoms', js: 'symptoms', typ: u(undefined, '') },
			{
				json: 'totalCarbohydrate',
				js: 'totalCarbohydrate',
				typ: u(undefined, r('MedicineSupplementsTotalCarbohydrate')),
			},
			{ json: 'totalFat', js: 'totalFat', typ: u(undefined, r('MedicineSupplementsTotalFat')) },
			{ json: 'totalProtein', js: 'totalProtein', typ: u(undefined, r('MedicineSupplementsTotalProtein')) },
			{
				json: 'variantAttributeNames',
				js: 'variantAttributeNames',
				typ: u(undefined, a(r('MedicineSupplementsVariantAttributeName'))),
			},
			{ json: 'variantGroupId', js: 'variantGroupId', typ: u(undefined, '') },
		],
		false
	),
	MedicineSupplementsActiveIngredient: o(
		[
			{ json: 'activeIngredientName', js: 'activeIngredientName', typ: u(undefined, '') },
			{ json: 'activeIngredientPercentage', js: 'activeIngredientPercentage', typ: u(undefined, 3.14) },
		],
		false
	),
	MedicineSupplementsAdditionalProductAttribute: o(
		[
			{ json: 'productAttributeName', js: 'productAttributeName', typ: '' },
			{ json: 'productAttributeValue', js: 'productAttributeValue', typ: '' },
		],
		false
	),
	MedicineSupplementsCalories: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 0) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('CaloriesUnit')) },
		],
		false
	),
	MedicineSupplementsLabelImage: o(
		[
			{ json: 'labelImageContains', js: 'labelImageContains', typ: r('LabelImageContains') },
			{ json: 'labelImageURL', js: 'labelImageURL', typ: '' },
		],
		false
	),
	Supplement: o(
		[
			{ json: 'nutrientAmount', js: 'nutrientAmount', typ: u(undefined, '') },
			{ json: 'nutrientName', js: 'nutrientName', typ: u(undefined, '') },
			{ json: 'nutrientPercentageDailyValue', js: 'nutrientPercentageDailyValue', typ: u(undefined, '') },
		],
		false
	),
	MedicineSupplementsShelfLife: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 0) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('ShelfLifeUnit')) },
		],
		false
	),
	MedicineSupplementsSwatchImage: o(
		[
			{ json: 'swatchImageUrl', js: 'swatchImageUrl', typ: u(undefined, '') },
			{
				json: 'swatchVariantAttribute',
				js: 'swatchVariantAttribute',
				typ: u(undefined, r('FriskySwatchVariantAttribute')),
			},
		],
		false
	),
	MedicineSupplementsTotalCarbohydrate: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('TotalCarbohydrateUnit')) },
		],
		false
	),
	MedicineSupplementsTotalFat: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('TotalCarbohydrateUnit')) },
		],
		false
	),
	MedicineSupplementsTotalProtein: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('TotalCarbohydrateUnit')) },
		],
		false
	),
	Movies: o(
		[
			{ json: 'actors', js: 'actors', typ: u(undefined, a('')) },
			{
				json: 'additionalProductAttributes',
				js: 'additionalProductAttributes',
				typ: u(undefined, a(r('MoviesAdditionalProductAttribute'))),
			},
			{
				json: 'additionalVariantAttributeNames',
				js: 'additionalVariantAttributeNames',
				typ: u(undefined, a('')),
			},
			{ json: 'aspectRatio', js: 'aspectRatio', typ: u(undefined, '') },
			{ json: 'awardsWon', js: 'awardsWon', typ: u(undefined, a('')) },
			{ json: 'director', js: 'director', typ: u(undefined, '') },
			{ json: 'dubbedLanguages', js: 'dubbedLanguages', typ: u(undefined, a('')) },
			{ json: 'duration', js: 'duration', typ: u(undefined, r('Duration')) },
			{ json: 'edition', js: 'edition', typ: u(undefined, '') },
			{ json: 'hasSubtitles', js: 'hasSubtitles', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isDubbed', js: 'isDubbed', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: '' },
			{ json: 'movieGenre', js: 'movieGenre', typ: u(undefined, '') },
			{ json: 'movieSubgenre', js: 'movieSubgenre', typ: u(undefined, '') },
			{ json: 'mpaaRating', js: 'mpaaRating', typ: u(undefined, r('MPAARating')) },
			{ json: 'numberInSeries', js: 'numberInSeries', typ: u(undefined, '') },
			{ json: 'numberOfDiscs', js: 'numberOfDiscs', typ: u(undefined, 0) },
			{ json: 'originalLanguages', js: 'originalLanguages', typ: u(undefined, a('')) },
			{
				json: 'physicalMediaFormat',
				js: 'physicalMediaFormat',
				typ: u(undefined, a(r('MoviesPhysicalMediaFormat'))),
			},
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: u(undefined, a('')) },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: '' },
			{ json: 'ratingReason', js: 'ratingReason', typ: u(undefined, '') },
			{ json: 'screenwriter', js: 'screenwriter', typ: u(undefined, '') },
			{ json: 'seriesTitle', js: 'seriesTitle', typ: u(undefined, '') },
			{ json: 'shortDescription', js: 'shortDescription', typ: '' },
			{ json: 'studioProductionCompany', js: 'studioProductionCompany', typ: u(undefined, '') },
			{ json: 'subtitledLanguages', js: 'subtitledLanguages', typ: u(undefined, a('')) },
			{ json: 'swatchImages', js: 'swatchImages', typ: u(undefined, a(r('MoviesSwatchImage'))) },
			{ json: 'theatricalReleaseDate', js: 'theatricalReleaseDate', typ: u(undefined, Date) },
			{ json: 'title', js: 'title', typ: u(undefined, '') },
			{
				json: 'variantAttributeNames',
				js: 'variantAttributeNames',
				typ: u(undefined, a(r('FoodBeverageVariantAttributeName'))),
			},
			{ json: 'variantGroupId', js: 'variantGroupId', typ: u(undefined, '') },
		],
		false
	),
	MoviesAdditionalProductAttribute: o(
		[
			{ json: 'productAttributeName', js: 'productAttributeName', typ: '' },
			{ json: 'productAttributeValue', js: 'productAttributeValue', typ: '' },
		],
		false
	),
	Duration: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('DurationUnit')) },
		],
		false
	),
	MoviesSwatchImage: o(
		[
			{ json: 'swatchImageUrl', js: 'swatchImageUrl', typ: u(undefined, '') },
			{ json: 'swatchVariantAttribute', js: 'swatchVariantAttribute', typ: u(undefined, '') },
		],
		false
	),
	Music: o(
		[
			{
				json: 'additionalProductAttributes',
				js: 'additionalProductAttributes',
				typ: u(undefined, a(r('MusicAdditionalProductAttribute'))),
			},
			{ json: 'autographedBy', js: 'autographedBy', typ: u(undefined, '') },
			{ json: 'awardsWon', js: 'awardsWon', typ: u(undefined, a('')) },
			{ json: 'character', js: 'character', typ: u(undefined, a('')) },
			{ json: 'digitalAudioFileFormat', js: 'digitalAudioFileFormat', typ: u(undefined, a('')) },
			{ json: 'edition', js: 'edition', typ: u(undefined, '') },
			{ json: 'hasParentalAdvisoryLabel', js: 'hasParentalAdvisoryLabel', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isEdited', js: 'isEdited', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isEnhanced', js: 'isEnhanced', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: u(undefined, a('')) },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: '' },
			{ json: 'movieSubgenre', js: 'movieSubgenre', typ: u(undefined, '') },
			{ json: 'musicGenre', js: 'musicGenre', typ: u(undefined, '') },
			{ json: 'musicProducer', js: 'musicProducer', typ: u(undefined, '') },
			{ json: 'musicReleaseType', js: 'musicReleaseType', typ: u(undefined, '') },
			{ json: 'musicSubGenre', js: 'musicSubGenre', typ: u(undefined, '') },
			{ json: 'numberInSeries', js: 'numberInSeries', typ: u(undefined, '') },
			{ json: 'numberOfDiscs', js: 'numberOfDiscs', typ: u(undefined, 0) },
			{ json: 'numberOfTracks', js: 'numberOfTracks', typ: u(undefined, 0) },
			{ json: 'originalLanguages', js: 'originalLanguages', typ: u(undefined, a('')) },
			{ json: 'parentalAdvisoryLabelURL', js: 'parentalAdvisoryLabelURL', typ: u(undefined, a('')) },
			{ json: 'performer', js: 'performer', typ: u(undefined, a('')) },
			{
				json: 'physicalMediaFormat',
				js: 'physicalMediaFormat',
				typ: u(undefined, a(r('MoviesPhysicalMediaFormat'))),
			},
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: u(undefined, a('')) },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: '' },
			{ json: 'ratingReason', js: 'ratingReason', typ: u(undefined, '') },
			{ json: 'recordLabel', js: 'recordLabel', typ: u(undefined, '') },
			{ json: 'releaseDate', js: 'releaseDate', typ: u(undefined, Date) },
			{ json: 'seriesTitle', js: 'seriesTitle', typ: u(undefined, '') },
			{ json: 'shortDescription', js: 'shortDescription', typ: '' },
			{ json: 'songwriter', js: 'songwriter', typ: u(undefined, '') },
			{ json: 'swatchImages', js: 'swatchImages', typ: u(undefined, a(r('MusicSwatchImage'))) },
			{ json: 'title', js: 'title', typ: u(undefined, '') },
			{ json: 'trackListings', js: 'trackListings', typ: u(undefined, a(r('TrackListing'))) },
			{
				json: 'variantAttributeNames',
				js: 'variantAttributeNames',
				typ: u(undefined, a(r('FoodBeverageVariantAttributeName'))),
			},
			{ json: 'variantGroupId', js: 'variantGroupId', typ: u(undefined, '') },
		],
		false
	),
	MusicAdditionalProductAttribute: o(
		[
			{ json: 'productAttributeName', js: 'productAttributeName', typ: '' },
			{ json: 'productAttributeValue', js: 'productAttributeValue', typ: '' },
		],
		false
	),
	MusicSwatchImage: o(
		[
			{ json: 'swatchImageUrl', js: 'swatchImageUrl', typ: u(undefined, '') },
			{ json: 'swatchVariantAttribute', js: 'swatchVariantAttribute', typ: u(undefined, '') },
		],
		false
	),
	TrackListing: o(
		[
			{ json: 'trackDuration', js: 'trackDuration', typ: u(undefined, '') },
			{ json: 'trackName', js: 'trackName', typ: u(undefined, '') },
			{ json: 'trackNumber', js: 'trackNumber', typ: u(undefined, 0) },
		],
		false
	),
	MusicCasesBags: o(
		[
			{
				json: 'additionalProductAttributes',
				js: 'additionalProductAttributes',
				typ: u(undefined, a(r('MusicCasesBagsAdditionalProductAttribute'))),
			},
			{
				json: 'assembledProductHeight',
				js: 'assembledProductHeight',
				typ: u(undefined, r('MusicCasesBagsAssembledProductHeight')),
			},
			{
				json: 'assembledProductLength',
				js: 'assembledProductLength',
				typ: u(undefined, r('MusicCasesBagsAssembledProductLength')),
			},
			{
				json: 'assembledProductWeight',
				js: 'assembledProductWeight',
				typ: u(undefined, r('MusicCasesBagsAssembledProductWeight')),
			},
			{
				json: 'assembledProductWidth',
				js: 'assembledProductWidth',
				typ: u(undefined, r('MusicCasesBagsAssembledProductWidth')),
			},
			{ json: 'color', js: 'color', typ: u(undefined, a('')) },
			{ json: 'colorCategory', js: 'colorCategory', typ: u(undefined, a(r('ColorCategory'))) },
			{ json: 'count', js: 'count', typ: u(undefined, '') },
			{ json: 'countPerPack', js: 'countPerPack', typ: u(undefined, 0) },
			{ json: 'fabricCareInstructions', js: 'fabricCareInstructions', typ: u(undefined, a('')) },
			{ json: 'fabricContent', js: 'fabricContent', typ: u(undefined, a(r('MusicCasesBagsFabricContent'))) },
			{ json: 'features', js: 'features', typ: u(undefined, a('')) },
			{ json: 'hardOrSoftCase', js: 'hardOrSoftCase', typ: u(undefined, r('HardOrSoftCase')) },
			{ json: 'instrument', js: 'instrument', typ: u(undefined, a('')) },
			{ json: 'isPortable', js: 'isPortable', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isWheeled', js: 'isWheeled', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: u(undefined, a('')) },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: '' },
			{ json: 'manufacturer', js: 'manufacturer', typ: '' },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: u(undefined, '') },
			{ json: 'material', js: 'material', typ: u(undefined, a('')) },
			{ json: 'modelNumber', js: 'modelNumber', typ: u(undefined, '') },
			{ json: 'msrp', js: 'msrp', typ: u(undefined, 3.14) },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: u(undefined, a('')) },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: '' },
			{ json: 'recommendedLocations', js: 'recommendedLocations', typ: u(undefined, a('')) },
			{ json: 'recommendedUses', js: 'recommendedUses', typ: u(undefined, a('')) },
			{ json: 'shape', js: 'shape', typ: u(undefined, '') },
			{ json: 'shortDescription', js: 'shortDescription', typ: '' },
			{ json: 'size', js: 'size', typ: u(undefined, '') },
			{ json: 'swatchImages', js: 'swatchImages', typ: u(undefined, a(r('MusicCasesBagsSwatchImage'))) },
			{
				json: 'variantAttributeNames',
				js: 'variantAttributeNames',
				typ: u(undefined, a(r('MusicCasesBagsVariantAttributeName'))),
			},
			{ json: 'variantGroupId', js: 'variantGroupId', typ: u(undefined, '') },
			{ json: 'warrantyText', js: 'warrantyText', typ: u(undefined, '') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: u(undefined, '') },
		],
		false
	),
	MusicCasesBagsAdditionalProductAttribute: o(
		[
			{ json: 'productAttributeName', js: 'productAttributeName', typ: '' },
			{ json: 'productAttributeValue', js: 'productAttributeValue', typ: '' },
		],
		false
	),
	MusicCasesBagsAssembledProductHeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	MusicCasesBagsAssembledProductLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	MusicCasesBagsAssembledProductWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductWeightUnit')) },
		],
		false
	),
	MusicCasesBagsAssembledProductWidth: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	MusicCasesBagsFabricContent: o(
		[
			{ json: 'materialName', js: 'materialName', typ: u(undefined, '') },
			{ json: 'materialPercentage', js: 'materialPercentage', typ: u(undefined, 3.14) },
		],
		false
	),
	MusicCasesBagsSwatchImage: o(
		[
			{ json: 'swatchImageUrl', js: 'swatchImageUrl', typ: u(undefined, '') },
			{
				json: 'swatchVariantAttribute',
				js: 'swatchVariantAttribute',
				typ: u(undefined, r('MusicCasesBagsVariantAttributeName')),
			},
		],
		false
	),
	MusicalInstruments: o(
		[
			{
				json: 'additionalProductAttributes',
				js: 'additionalProductAttributes',
				typ: u(undefined, a(r('MusicalInstrumentsAdditionalProductAttribute'))),
			},
			{ json: 'ageGroup', js: 'ageGroup', typ: u(undefined, a(r('ArtCraftAgeGroup'))) },
			{
				json: 'assembledProductHeight',
				js: 'assembledProductHeight',
				typ: u(undefined, r('MusicalInstrumentsAssembledProductHeight')),
			},
			{
				json: 'assembledProductLength',
				js: 'assembledProductLength',
				typ: u(undefined, r('MusicalInstrumentsAssembledProductLength')),
			},
			{
				json: 'assembledProductWeight',
				js: 'assembledProductWeight',
				typ: u(undefined, r('MusicalInstrumentsAssembledProductWeight')),
			},
			{
				json: 'assembledProductWidth',
				js: 'assembledProductWidth',
				typ: u(undefined, r('MusicalInstrumentsAssembledProductWidth')),
			},
			{ json: 'audioPowerOutput', js: 'audioPowerOutput', typ: u(undefined, '') },
			{ json: 'batteryLife', js: 'batteryLife', typ: u(undefined, r('MusicalInstrumentsBatteryLife')) },
			{ json: 'color', js: 'color', typ: u(undefined, a('')) },
			{
				json: 'compositeWoodCertificationCode',
				js: 'compositeWoodCertificationCode',
				typ: r('CompositeWoodCertificationCode'),
			},
			{ json: 'count', js: 'count', typ: u(undefined, '') },
			{ json: 'countPerPack', js: 'countPerPack', typ: u(undefined, 0) },
			{ json: 'displayTechnology', js: 'displayTechnology', typ: u(undefined, '') },
			{ json: 'drumSetCymbalType', js: 'drumSetCymbalType', typ: u(undefined, a(r('DrumSetCymbalType'))) },
			{ json: 'features', js: 'features', typ: u(undefined, a('')) },
			{ json: 'finish', js: 'finish', typ: u(undefined, '') },
			{ json: 'guitarType', js: 'guitarType', typ: u(undefined, r('GuitarType')) },
			{ json: 'hasBluetooth', js: 'hasBluetooth', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'hasIntegratedSpeakers', js: 'hasIntegratedSpeakers', typ: u(undefined, r('MustShipAlone')) },
			{
				json: 'inputsAndOutputs',
				js: 'inputsAndOutputs',
				typ: u(undefined, a(r('MusicalInstrumentsInputsAndOutput'))),
			},
			{ json: 'instrument', js: 'instrument', typ: u(undefined, a('')) },
			{ json: 'isCollectible', js: 'isCollectible', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isElectric', js: 'isElectric', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPortable', js: 'isPortable', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPowered', js: 'isPowered', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isSet', js: 'isSet', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'karaokeMachineType', js: 'karaokeMachineType', typ: u(undefined, r('KaraokeMachineType')) },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: u(undefined, a('')) },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: '' },
			{ json: 'manufacturer', js: 'manufacturer', typ: '' },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: u(undefined, '') },
			{ json: 'material', js: 'material', typ: u(undefined, a('')) },
			{ json: 'microphoneIncluded', js: 'microphoneIncluded', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'modelNumber', js: 'modelNumber', typ: u(undefined, '') },
			{ json: 'msrp', js: 'msrp', typ: u(undefined, 3.14) },
			{ json: 'musicalInstrumentFamily', js: 'musicalInstrumentFamily', typ: u(undefined, '') },
			{ json: 'numberOfKeys', js: 'numberOfKeys', typ: u(undefined, 3.14) },
			{ json: 'numberOfStrings', js: 'numberOfStrings', typ: u(undefined, 0) },
			{ json: 'orientation', js: 'orientation', typ: u(undefined, r('MusicalInstrumentsOrientation')) },
			{ json: 'pattern', js: 'pattern', typ: u(undefined, a('')) },
			{ json: 'percussionInstrumentType', js: 'percussionInstrumentType', typ: u(undefined, a('')) },
			{ json: 'powerType', js: 'powerType', typ: u(undefined, '') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: u(undefined, a('')) },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: '' },
			{ json: 'recommendedUses', js: 'recommendedUses', typ: u(undefined, a('')) },
			{ json: 'saxophoneType', js: 'saxophoneType', typ: u(undefined, r('SaxophoneType')) },
			{ json: 'shortDescription', js: 'shortDescription', typ: '' },
			{ json: 'skillLevel', js: 'skillLevel', typ: u(undefined, '') },
			{ json: 'smallPartsWarnings', js: 'smallPartsWarnings', typ: a(r('SmallPartsWarningCode')) },
			{ json: 'soundKey', js: 'soundKey', typ: u(undefined, a(r('SoundKey'))) },
			{ json: 'sportsTeam', js: 'sportsTeam', typ: u(undefined, a('')) },
			{ json: 'swatchImages', js: 'swatchImages', typ: u(undefined, a(r('MusicalInstrumentsSwatchImage'))) },
			{
				json: 'variantAttributeNames',
				js: 'variantAttributeNames',
				typ: u(undefined, a(r('InstrumentAccessoriesVariantAttributeName'))),
			},
			{ json: 'variantGroupId', js: 'variantGroupId', typ: u(undefined, '') },
			{ json: 'warrantyText', js: 'warrantyText', typ: u(undefined, '') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: u(undefined, '') },
		],
		false
	),
	MusicalInstrumentsAdditionalProductAttribute: o(
		[
			{ json: 'productAttributeName', js: 'productAttributeName', typ: '' },
			{ json: 'productAttributeValue', js: 'productAttributeValue', typ: '' },
		],
		false
	),
	MusicalInstrumentsAssembledProductHeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	MusicalInstrumentsAssembledProductLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	MusicalInstrumentsAssembledProductWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductWeightUnit')) },
		],
		false
	),
	MusicalInstrumentsAssembledProductWidth: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	MusicalInstrumentsBatteryLife: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('StandbyTimeUnit')) },
		],
		false
	),
	MusicalInstrumentsInputsAndOutput: o(
		[
			{ json: 'inputOutputQuantity', js: 'inputOutputQuantity', typ: u(undefined, 0) },
			{ json: 'inputOutputType', js: 'inputOutputType', typ: u(undefined, '') },
		],
		false
	),
	MusicalInstrumentsSwatchImage: o(
		[
			{ json: 'swatchImageUrl', js: 'swatchImageUrl', typ: u(undefined, '') },
			{
				json: 'swatchVariantAttribute',
				js: 'swatchVariantAttribute',
				typ: u(undefined, r('InstrumentAccessoriesVariantAttributeName')),
			},
		],
		false
	),
	Office: o(
		[
			{
				json: 'additionalProductAttributes',
				js: 'additionalProductAttributes',
				typ: u(undefined, a(r('OfficeAdditionalProductAttribute'))),
			},
			{ json: 'ageGroup', js: 'ageGroup', typ: u(undefined, a(r('ArtCraftAgeGroup'))) },
			{
				json: 'assembledProductHeight',
				js: 'assembledProductHeight',
				typ: u(undefined, r('OfficeAssembledProductHeight')),
			},
			{
				json: 'assembledProductLength',
				js: 'assembledProductLength',
				typ: u(undefined, r('OfficeAssembledProductLength')),
			},
			{
				json: 'assembledProductWeight',
				js: 'assembledProductWeight',
				typ: u(undefined, r('OfficeAssembledProductWeight')),
			},
			{
				json: 'assembledProductWidth',
				js: 'assembledProductWidth',
				typ: u(undefined, r('OfficeAssembledProductWidth')),
			},
			{ json: 'brightness', js: 'brightness', typ: u(undefined, r('OfficeBrightness')) },
			{ json: 'calendarFormat', js: 'calendarFormat', typ: u(undefined, '') },
			{ json: 'calendarTerm', js: 'calendarTerm', typ: u(undefined, r('CalendarTerm')) },
			{ json: 'capacity', js: 'capacity', typ: u(undefined, '') },
			{ json: 'color', js: 'color', typ: u(undefined, a('')) },
			{ json: 'colorCategory', js: 'colorCategory', typ: u(undefined, a(r('ColorCategory'))) },
			{ json: 'compatibleDevices', js: 'compatibleDevices', typ: u(undefined, a('')) },
			{
				json: 'compositeWoodCertificationCode',
				js: 'compositeWoodCertificationCode',
				typ: r('CompositeWoodCertificationCode'),
			},
			{ json: 'count', js: 'count', typ: u(undefined, '') },
			{ json: 'countPerPack', js: 'countPerPack', typ: u(undefined, 0) },
			{ json: 'dexterity', js: 'dexterity', typ: u(undefined, '') },
			{ json: 'envelopeSize', js: 'envelopeSize', typ: u(undefined, '') },
			{ json: 'finish', js: 'finish', typ: u(undefined, '') },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: u(undefined, a('')) },
			{ json: 'holeSize', js: 'holeSize', typ: u(undefined, r('HoleSize')) },
			{ json: 'hpprintercartridgeNumber', js: 'hpprintercartridgeNumber', typ: u(undefined, a('')) },
			{ json: 'inkColor', js: 'inkColor', typ: u(undefined, a('')) },
			{ json: 'isAntiglare', js: 'isAntiglare', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isIndustrial', js: 'isIndustrial', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isLined', js: 'isLined', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isMagnetic', js: 'isMagnetic', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPowered', js: 'isPowered', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isRefillable', js: 'isRefillable', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isRetractable', js: 'isRetractable', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isTearResistant', js: 'isTearResistant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: u(undefined, a('')) },
			{ json: 'lightingFactsLabel', js: 'lightingFactsLabel', typ: u(undefined, '') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: '' },
			{ json: 'manufacturer', js: 'manufacturer', typ: '' },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: u(undefined, '') },
			{ json: 'material', js: 'material', typ: u(undefined, a('')) },
			{ json: 'modelNumber', js: 'modelNumber', typ: u(undefined, '') },
			{ json: 'msrp', js: 'msrp', typ: u(undefined, 3.14) },
			{ json: 'numberOfSheets', js: 'numberOfSheets', typ: u(undefined, 0) },
			{ json: 'occasion', js: 'occasion', typ: u(undefined, a('')) },
			{ json: 'overallExpansion', js: 'overallExpansion', typ: u(undefined, r('OverallExpansion')) },
			{ json: 'paperClipSize', js: 'paperClipSize', typ: u(undefined, r('PaperClipSize')) },
			{ json: 'paperSize', js: 'paperSize', typ: u(undefined, a('')) },
			{ json: 'pattern', js: 'pattern', typ: u(undefined, a('')) },
			{ json: 'pencilLeadDiameter', js: 'pencilLeadDiameter', typ: u(undefined, r('PencilLeadDiameter')) },
			{ json: 'penPointSize', js: 'penPointSize', typ: u(undefined, r('PenPointSize')) },
			{ json: 'pieceCount', js: 'pieceCount', typ: u(undefined, 0) },
			{ json: 'powerType', js: 'powerType', typ: u(undefined, '') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: u(undefined, a('')) },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: '' },
			{ json: 'recommendedUses', js: 'recommendedUses', typ: u(undefined, a('')) },
			{ json: 'shape', js: 'shape', typ: u(undefined, '') },
			{ json: 'shortDescription', js: 'shortDescription', typ: '' },
			{ json: 'shredderCutStyles', js: 'shredderCutStyles', typ: u(undefined, '') },
			{ json: 'size', js: 'size', typ: u(undefined, '') },
			{ json: 'smallPartsWarnings', js: 'smallPartsWarnings', typ: a(r('SmallPartsWarningCode')) },
			{ json: 'swatchImages', js: 'swatchImages', typ: u(undefined, a(r('OfficeSwatchImage'))) },
			{ json: 'systemOfMeasurement', js: 'systemOfMeasurement', typ: u(undefined, '') },
			{ json: 'tabColor', js: 'tabColor', typ: u(undefined, '') },
			{ json: 'tabCut', js: 'tabCut', typ: u(undefined, r('TabCut')) },
			{ json: 'theme', js: 'theme', typ: u(undefined, a('')) },
			{
				json: 'variantAttributeNames',
				js: 'variantAttributeNames',
				typ: u(undefined, a(r('OfficeVariantAttributeName'))),
			},
			{ json: 'variantGroupId', js: 'variantGroupId', typ: u(undefined, '') },
			{ json: 'warrantyText', js: 'warrantyText', typ: u(undefined, '') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: u(undefined, '') },
			{ json: 'year', js: 'year', typ: u(undefined, 0) },
		],
		false
	),
	OfficeAdditionalProductAttribute: o(
		[
			{ json: 'productAttributeName', js: 'productAttributeName', typ: '' },
			{ json: 'productAttributeValue', js: 'productAttributeValue', typ: '' },
		],
		false
	),
	OfficeAssembledProductHeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	OfficeAssembledProductLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	OfficeAssembledProductWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductWeightUnit')) },
		],
		false
	),
	OfficeAssembledProductWidth: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	OfficeBrightness: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('BrightnessUnit')) },
		],
		false
	),
	CalendarTerm: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 0) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('CalendarTermUnit')) },
		],
		false
	),
	HoleSize: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('ScreenSizeUnit')) },
		],
		false
	),
	OverallExpansion: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('OverallExpansionUnit')) },
		],
		false
	),
	PenPointSize: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('FocalLengthUnit')) },
		],
		false
	),
	OfficeSwatchImage: o(
		[
			{ json: 'swatchImageUrl', js: 'swatchImageUrl', typ: u(undefined, '') },
			{
				json: 'swatchVariantAttribute',
				js: 'swatchVariantAttribute',
				typ: u(undefined, r('OfficeVariantAttributeName')),
			},
		],
		false
	),
	Optical: o(
		[
			{
				json: 'additionalProductAttributes',
				js: 'additionalProductAttributes',
				typ: u(undefined, a(r('OpticalAdditionalProductAttribute'))),
			},
			{ json: 'ageGroup', js: 'ageGroup', typ: u(undefined, a(r('ArtCraftAgeGroup'))) },
			{
				json: 'assembledProductHeight',
				js: 'assembledProductHeight',
				typ: u(undefined, r('OpticalAssembledProductHeight')),
			},
			{
				json: 'assembledProductLength',
				js: 'assembledProductLength',
				typ: u(undefined, r('OpticalAssembledProductLength')),
			},
			{
				json: 'assembledProductWeight',
				js: 'assembledProductWeight',
				typ: u(undefined, r('OpticalAssembledProductWeight')),
			},
			{
				json: 'assembledProductWidth',
				js: 'assembledProductWidth',
				typ: u(undefined, r('OpticalAssembledProductWidth')),
			},
			{ json: 'athlete', js: 'athlete', typ: u(undefined, a('')) },
			{ json: 'character', js: 'character', typ: u(undefined, a('')) },
			{ json: 'cleaningCareAndMaintenance', js: 'cleaningCareAndMaintenance', typ: u(undefined, '') },
			{ json: 'collection', js: 'collection', typ: u(undefined, '') },
			{ json: 'color', js: 'color', typ: u(undefined, a('')) },
			{ json: 'colorCategory', js: 'colorCategory', typ: u(undefined, a(r('ColorCategory'))) },
			{ json: 'compatibleBrands', js: 'compatibleBrands', typ: u(undefined, a('')) },
			{ json: 'count', js: 'count', typ: u(undefined, '') },
			{ json: 'countPerPack', js: 'countPerPack', typ: u(undefined, 0) },
			{ json: 'eyewearFrameSize', js: 'eyewearFrameSize', typ: u(undefined, '') },
			{ json: 'eyewearFrameStyle', js: 'eyewearFrameStyle', typ: u(undefined, '') },
			{ json: 'eyewearLensFeature', js: 'eyewearLensFeature', typ: u(undefined, a('')) },
			{ json: 'eyewearRimStyle', js: 'eyewearRimStyle', typ: u(undefined, r('EyewearRim')) },
			{ json: 'features', js: 'features', typ: u(undefined, a('')) },
			{ json: 'gender', js: 'gender', typ: u(undefined, r('BabyClothingGender')) },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: u(undefined, a('')) },
			{ json: 'hasAdaptiveLenses', js: 'hasAdaptiveLenses', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPolarized', js: 'isPolarized', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isScratchResistant', js: 'isScratchResistant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isSet', js: 'isSet', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: u(undefined, a('')) },
			{ json: 'lensMaterial', js: 'lensMaterial', typ: u(undefined, '') },
			{ json: 'lensTint', js: 'lensTint', typ: u(undefined, '') },
			{ json: 'lensType', js: 'lensType', typ: u(undefined, a('')) },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: '' },
			{ json: 'manufacturer', js: 'manufacturer', typ: '' },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: u(undefined, '') },
			{ json: 'material', js: 'material', typ: u(undefined, a('')) },
			{ json: 'modelNumber', js: 'modelNumber', typ: u(undefined, '') },
			{ json: 'msrp', js: 'msrp', typ: u(undefined, 3.14) },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: u(undefined, a('')) },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: '' },
			{ json: 'shape', js: 'shape', typ: u(undefined, '') },
			{ json: 'shortDescription', js: 'shortDescription', typ: '' },
			{ json: 'size', js: 'size', typ: u(undefined, '') },
			{ json: 'sportsLeague', js: 'sportsLeague', typ: u(undefined, a('')) },
			{ json: 'sportsTeam', js: 'sportsTeam', typ: u(undefined, a('')) },
			{ json: 'sunglassesStyle', js: 'sunglassesStyle', typ: u(undefined, '') },
			{ json: 'swatchImages', js: 'swatchImages', typ: u(undefined, a(r('OpticalSwatchImage'))) },
			{ json: 'uvRating', js: 'uvRating', typ: u(undefined, 0) },
			{
				json: 'variantAttributeNames',
				js: 'variantAttributeNames',
				typ: u(undefined, a(r('OpticalVariantAttributeName'))),
			},
			{ json: 'variantGroupId', js: 'variantGroupId', typ: u(undefined, '') },
			{ json: 'warrantyText', js: 'warrantyText', typ: u(undefined, '') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: u(undefined, '') },
		],
		false
	),
	OpticalAdditionalProductAttribute: o(
		[
			{ json: 'productAttributeName', js: 'productAttributeName', typ: '' },
			{ json: 'productAttributeValue', js: 'productAttributeValue', typ: '' },
		],
		false
	),
	OpticalAssembledProductHeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	OpticalAssembledProductLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	OpticalAssembledProductWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductWeightUnit')) },
		],
		false
	),
	OpticalAssembledProductWidth: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	OpticalSwatchImage: o(
		[
			{ json: 'swatchImageUrl', js: 'swatchImageUrl', typ: u(undefined, '') },
			{
				json: 'swatchVariantAttribute',
				js: 'swatchVariantAttribute',
				typ: u(undefined, r('OpticalVariantAttributeName')),
			},
		],
		false
	),
	Optics: o(
		[
			{
				json: 'additionalProductAttributes',
				js: 'additionalProductAttributes',
				typ: u(undefined, a(r('OpticsAdditionalProductAttribute'))),
			},
			{ json: 'ageGroup', js: 'ageGroup', typ: u(undefined, a(r('ArtCraftAgeGroup'))) },
			{
				json: 'assembledProductHeight',
				js: 'assembledProductHeight',
				typ: u(undefined, r('OpticsAssembledProductHeight')),
			},
			{
				json: 'assembledProductLength',
				js: 'assembledProductLength',
				typ: u(undefined, r('OpticsAssembledProductLength')),
			},
			{
				json: 'assembledProductWeight',
				js: 'assembledProductWeight',
				typ: u(undefined, r('OpticsAssembledProductWeight')),
			},
			{
				json: 'assembledProductWidth',
				js: 'assembledProductWidth',
				typ: u(undefined, r('OpticsAssembledProductWidth')),
			},
			{ json: 'assemblyInstructions', js: 'assemblyInstructions', typ: u(undefined, '') },
			{ json: 'attachmentStyle', js: 'attachmentStyle', typ: u(undefined, '') },
			{ json: 'cleaningCareAndMaintenance', js: 'cleaningCareAndMaintenance', typ: u(undefined, '') },
			{ json: 'color', js: 'color', typ: u(undefined, a('')) },
			{ json: 'colorCategory', js: 'colorCategory', typ: u(undefined, a(r('ColorCategory'))) },
			{ json: 'count', js: 'count', typ: u(undefined, '') },
			{ json: 'countPerPack', js: 'countPerPack', typ: u(undefined, 0) },
			{ json: 'dexterity', js: 'dexterity', typ: u(undefined, '') },
			{ json: 'digitalZoom', js: 'digitalZoom', typ: u(undefined, '') },
			{ json: 'displayResolution', js: 'displayResolution', typ: u(undefined, a('')) },
			{ json: 'displayTechnology', js: 'displayTechnology', typ: u(undefined, '') },
			{ json: 'features', js: 'features', typ: u(undefined, a('')) },
			{ json: 'fieldOfView', js: 'fieldOfView', typ: u(undefined, '') },
			{ json: 'focalRatio', js: 'focalRatio', typ: u(undefined, '') },
			{ json: 'focusType', js: 'focusType', typ: u(undefined, a('')) },
			{ json: 'gender', js: 'gender', typ: u(undefined, r('BabyClothingGender')) },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: u(undefined, a('')) },
			{ json: 'hasDovetailBarSystem', js: 'hasDovetailBarSystem', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'hasLcdScreen', js: 'hasLcdScreen', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'hasMemoryCardSlot', js: 'hasMemoryCardSlot', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'hasNightVision', js: 'hasNightVision', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isAssemblyRequired', js: 'isAssemblyRequired', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isFogResistant', js: 'isFogResistant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isFoldable', js: 'isFoldable', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isLockable', js: 'isLockable', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isMulticoated', js: 'isMulticoated', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isParfocal', js: 'isParfocal', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPortable', js: 'isPortable', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPowered', js: 'isPowered', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isWaterproof', js: 'isWaterproof', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isWeatherResistant', js: 'isWeatherResistant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: u(undefined, a('')) },
			{ json: 'lensCoating', js: 'lensCoating', typ: u(undefined, '') },
			{ json: 'lensDiameter', js: 'lensDiameter', typ: u(undefined, r('OpticsLensDiameter')) },
			{ json: 'lockType', js: 'lockType', typ: u(undefined, '') },
			{ json: 'magnification', js: 'magnification', typ: u(undefined, '') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: '' },
			{ json: 'manufacturer', js: 'manufacturer', typ: '' },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: u(undefined, '') },
			{ json: 'material', js: 'material', typ: u(undefined, a('')) },
			{
				json: 'maximumRecommendedAge',
				js: 'maximumRecommendedAge',
				typ: u(undefined, r('OpticsMaximumRecommendedAge')),
			},
			{
				json: 'minimumRecommendedAge',
				js: 'minimumRecommendedAge',
				typ: u(undefined, r('OpticsMinimumRecommendedAge')),
			},
			{ json: 'modelNumber', js: 'modelNumber', typ: u(undefined, '') },
			{ json: 'msrp', js: 'msrp', typ: u(undefined, 3.14) },
			{ json: 'operatingTemperature', js: 'operatingTemperature', typ: u(undefined, r('OperatingTemperature')) },
			{ json: 'opticalZoom', js: 'opticalZoom', typ: u(undefined, '') },
			{ json: 'pattern', js: 'pattern', typ: u(undefined, a('')) },
			{ json: 'pieceCount', js: 'pieceCount', typ: u(undefined, 0) },
			{ json: 'powerType', js: 'powerType', typ: u(undefined, '') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: u(undefined, a('')) },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: '' },
			{ json: 'recommendedLocations', js: 'recommendedLocations', typ: u(undefined, a('')) },
			{ json: 'recommendedUses', js: 'recommendedUses', typ: u(undefined, a('')) },
			{ json: 'screenSize', js: 'screenSize', typ: u(undefined, r('OpticsScreenSize')) },
			{ json: 'sensorResolution', js: 'sensorResolution', typ: u(undefined, '') },
			{ json: 'shortDescription', js: 'shortDescription', typ: '' },
			{ json: 'size', js: 'size', typ: u(undefined, '') },
			{ json: 'sport', js: 'sport', typ: u(undefined, a('')) },
			{ json: 'swatchImages', js: 'swatchImages', typ: u(undefined, a(r('OpticsSwatchImage'))) },
			{
				json: 'variantAttributeNames',
				js: 'variantAttributeNames',
				typ: u(undefined, a(r('OpticsVariantAttributeName'))),
			},
			{ json: 'variantGroupId', js: 'variantGroupId', typ: u(undefined, '') },
			{ json: 'warrantyText', js: 'warrantyText', typ: u(undefined, '') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: u(undefined, '') },
			{ json: 'wirelessTechnologies', js: 'wirelessTechnologies', typ: u(undefined, a('')) },
		],
		false
	),
	OpticsAdditionalProductAttribute: o(
		[
			{ json: 'productAttributeName', js: 'productAttributeName', typ: '' },
			{ json: 'productAttributeValue', js: 'productAttributeValue', typ: '' },
		],
		false
	),
	OpticsAssembledProductHeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	OpticsAssembledProductLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	OpticsAssembledProductWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductWeightUnit')) },
		],
		false
	),
	OpticsAssembledProductWidth: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	OpticsLensDiameter: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('FocalLengthUnit')) },
		],
		false
	),
	OpticsMaximumRecommendedAge: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 0) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('MaximumRecommendedAgeUnit')) },
		],
		false
	),
	OpticsMinimumRecommendedAge: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 0) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('MaximumRecommendedAgeUnit')) },
		],
		false
	),
	OperatingTemperature: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 0) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('OperatingTemperatureUnit')) },
		],
		false
	),
	OpticsScreenSize: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('ScreenSizeUnit')) },
		],
		false
	),
	OpticsSwatchImage: o(
		[
			{ json: 'swatchImageUrl', js: 'swatchImageUrl', typ: u(undefined, '') },
			{
				json: 'swatchVariantAttribute',
				js: 'swatchVariantAttribute',
				typ: u(undefined, r('OpticsVariantAttributeName')),
			},
		],
		false
	),
	Other: o(
		[
			{
				json: 'additionalProductAttributes',
				js: 'additionalProductAttributes',
				typ: u(undefined, a(r('OtherAdditionalProductAttribute'))),
			},
			{
				json: 'assembledProductHeight',
				js: 'assembledProductHeight',
				typ: u(undefined, r('OtherAssembledProductHeight')),
			},
			{
				json: 'assembledProductLength',
				js: 'assembledProductLength',
				typ: u(undefined, r('OtherAssembledProductLength')),
			},
			{
				json: 'assembledProductWeight',
				js: 'assembledProductWeight',
				typ: u(undefined, r('OtherAssembledProductWeight')),
			},
			{
				json: 'assembledProductWidth',
				js: 'assembledProductWidth',
				typ: u(undefined, r('OtherAssembledProductWidth')),
			},
			{ json: 'color', js: 'color', typ: u(undefined, a('')) },
			{ json: 'colorCategory', js: 'colorCategory', typ: u(undefined, a(r('ColorCategory'))) },
			{ json: 'count', js: 'count', typ: u(undefined, '') },
			{ json: 'countPerPack', js: 'countPerPack', typ: u(undefined, 0) },
			{ json: 'features', js: 'features', typ: u(undefined, a('')) },
			{ json: 'finish', js: 'finish', typ: u(undefined, '') },
			{ json: 'gender', js: 'gender', typ: u(undefined, r('BabyClothingGender')) },
			{ json: 'ingredients', js: 'ingredients', typ: u(undefined, '') },
			{ json: 'isFoldable', js: 'isFoldable', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isIndustrial', js: 'isIndustrial', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPortable', js: 'isPortable', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isRetractable', js: 'isRetractable', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: u(undefined, a('')) },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: '' },
			{ json: 'manufacturer', js: 'manufacturer', typ: '' },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: u(undefined, '') },
			{ json: 'material', js: 'material', typ: u(undefined, a('')) },
			{ json: 'modelNumber', js: 'modelNumber', typ: u(undefined, '') },
			{ json: 'msrp', js: 'msrp', typ: u(undefined, 3.14) },
			{ json: 'pattern', js: 'pattern', typ: u(undefined, a('')) },
			{ json: 'pieceCount', js: 'pieceCount', typ: u(undefined, 0) },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: u(undefined, a('')) },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: '' },
			{ json: 'shape', js: 'shape', typ: u(undefined, '') },
			{ json: 'shortDescription', js: 'shortDescription', typ: '' },
			{ json: 'size', js: 'size', typ: u(undefined, '') },
			{ json: 'swatchImages', js: 'swatchImages', typ: u(undefined, a(r('OtherSwatchImage'))) },
			{ json: 'systemOfMeasurement', js: 'systemOfMeasurement', typ: u(undefined, '') },
			{
				json: 'variantAttributeNames',
				js: 'variantAttributeNames',
				typ: u(undefined, a(r('OtherVariantAttributeName'))),
			},
			{ json: 'variantGroupId', js: 'variantGroupId', typ: u(undefined, '') },
		],
		false
	),
	OtherAdditionalProductAttribute: o(
		[
			{ json: 'productAttributeName', js: 'productAttributeName', typ: '' },
			{ json: 'productAttributeValue', js: 'productAttributeValue', typ: '' },
		],
		false
	),
	OtherAssembledProductHeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	OtherAssembledProductLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	OtherAssembledProductWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductWeightUnit')) },
		],
		false
	),
	OtherAssembledProductWidth: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	OtherSwatchImage: o(
		[
			{ json: 'swatchImageUrl', js: 'swatchImageUrl', typ: u(undefined, '') },
			{
				json: 'swatchVariantAttribute',
				js: 'swatchVariantAttribute',
				typ: u(undefined, r('OtherVariantAttributeName')),
			},
		],
		false
	),
	PhotoAccessories: o(
		[
			{ json: 'accessoriesIncluded', js: 'accessoriesIncluded', typ: u(undefined, a('')) },
			{
				json: 'additionalProductAttributes',
				js: 'additionalProductAttributes',
				typ: u(undefined, a(r('PhotoAccessoriesAdditionalProductAttribute'))),
			},
			{
				json: 'assembledProductHeight',
				js: 'assembledProductHeight',
				typ: u(undefined, r('PhotoAccessoriesAssembledProductHeight')),
			},
			{
				json: 'assembledProductLength',
				js: 'assembledProductLength',
				typ: u(undefined, r('PhotoAccessoriesAssembledProductLength')),
			},
			{
				json: 'assembledProductWeight',
				js: 'assembledProductWeight',
				typ: u(undefined, r('PhotoAccessoriesAssembledProductWeight')),
			},
			{
				json: 'assembledProductWidth',
				js: 'assembledProductWidth',
				typ: u(undefined, r('PhotoAccessoriesAssembledProductWidth')),
			},
			{ json: 'assemblyInstructions', js: 'assemblyInstructions', typ: u(undefined, '') },
			{ json: 'capacity', js: 'capacity', typ: u(undefined, '') },
			{ json: 'cleaningCareAndMaintenance', js: 'cleaningCareAndMaintenance', typ: u(undefined, '') },
			{ json: 'color', js: 'color', typ: u(undefined, a('')) },
			{ json: 'colorCategory', js: 'colorCategory', typ: u(undefined, a(r('ColorCategory'))) },
			{ json: 'compatibleBrands', js: 'compatibleBrands', typ: u(undefined, a('')) },
			{ json: 'compatibleDevices', js: 'compatibleDevices', typ: u(undefined, a('')) },
			{ json: 'connections', js: 'connections', typ: u(undefined, a('')) },
			{ json: 'count', js: 'count', typ: u(undefined, '') },
			{ json: 'countPerPack', js: 'countPerPack', typ: u(undefined, 0) },
			{ json: 'displayTechnology', js: 'displayTechnology', typ: u(undefined, '') },
			{ json: 'features', js: 'features', typ: u(undefined, a('')) },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: u(undefined, a('')) },
			{
				json: 'inputsAndOutputs',
				js: 'inputsAndOutputs',
				typ: u(undefined, a(r('PhotoAccessoriesInputsAndOutput'))),
			},
			{ json: 'isAssemblyRequired', js: 'isAssemblyRequired', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isWaterproof', js: 'isWaterproof', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: u(undefined, a('')) },
			{ json: 'lightBulbType', js: 'lightBulbType', typ: u(undefined, '') },
			{ json: 'lightOutput', js: 'lightOutput', typ: u(undefined, r('LightOutput')) },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: '' },
			{ json: 'manufacturer', js: 'manufacturer', typ: '' },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: u(undefined, '') },
			{ json: 'material', js: 'material', typ: u(undefined, a('')) },
			{ json: 'memoryCardType', js: 'memoryCardType', typ: u(undefined, a('')) },
			{ json: 'modelNumber', js: 'modelNumber', typ: u(undefined, '') },
			{ json: 'msrp', js: 'msrp', typ: u(undefined, 3.14) },
			{ json: 'pattern', js: 'pattern', typ: u(undefined, a('')) },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: u(undefined, a('')) },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: '' },
			{ json: 'recommendedUses', js: 'recommendedUses', typ: u(undefined, a('')) },
			{ json: 'recordableMediaFormats', js: 'recordableMediaFormats', typ: u(undefined, a('')) },
			{ json: 'shape', js: 'shape', typ: u(undefined, '') },
			{ json: 'shortDescription', js: 'shortDescription', typ: '' },
			{ json: 'size', js: 'size', typ: u(undefined, '') },
			{ json: 'swatchImages', js: 'swatchImages', typ: u(undefined, a(r('PhotoAccessoriesSwatchImage'))) },
			{
				json: 'variantAttributeNames',
				js: 'variantAttributeNames',
				typ: u(undefined, a(r('PhotoAccessoriesVariantAttributeName'))),
			},
			{ json: 'variantGroupId', js: 'variantGroupId', typ: u(undefined, '') },
			{ json: 'volts', js: 'volts', typ: u(undefined, a(r('PhotoAccessoriesVolt'))) },
			{ json: 'warrantyText', js: 'warrantyText', typ: u(undefined, '') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: u(undefined, '') },
			{ json: 'watts', js: 'watts', typ: u(undefined, r('PhotoAccessoriesWatts')) },
			{ json: 'wirelessTechnologies', js: 'wirelessTechnologies', typ: u(undefined, a('')) },
		],
		false
	),
	PhotoAccessoriesAdditionalProductAttribute: o(
		[
			{ json: 'productAttributeName', js: 'productAttributeName', typ: '' },
			{ json: 'productAttributeValue', js: 'productAttributeValue', typ: '' },
		],
		false
	),
	PhotoAccessoriesAssembledProductHeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	PhotoAccessoriesAssembledProductLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	PhotoAccessoriesAssembledProductWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductWeightUnit')) },
		],
		false
	),
	PhotoAccessoriesAssembledProductWidth: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	PhotoAccessoriesInputsAndOutput: o(
		[
			{ json: 'inputOutputQuantity', js: 'inputOutputQuantity', typ: u(undefined, 0) },
			{ json: 'inputOutputType', js: 'inputOutputType', typ: u(undefined, '') },
		],
		false
	),
	LightOutput: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 0) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('BrightnessUnit')) },
		],
		false
	),
	PhotoAccessoriesSwatchImage: o(
		[
			{ json: 'swatchImageUrl', js: 'swatchImageUrl', typ: u(undefined, '') },
			{
				json: 'swatchVariantAttribute',
				js: 'swatchVariantAttribute',
				typ: u(undefined, r('PhotoAccessoriesVariantAttributeName')),
			},
		],
		false
	),
	PhotoAccessoriesVolt: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('VoltUnit')) },
		],
		false
	),
	PhotoAccessoriesWatts: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('WattsUnit')) },
		],
		false
	),
	PlumbingHVAC: o(
		[
			{ json: 'accessoriesIncluded', js: 'accessoriesIncluded', typ: u(undefined, a('')) },
			{
				json: 'additionalProductAttributes',
				js: 'additionalProductAttributes',
				typ: u(undefined, a(r('PlumbingHVACAdditionalProductAttribute'))),
			},
			{
				json: 'assembledProductHeight',
				js: 'assembledProductHeight',
				typ: u(undefined, r('PlumbingHVACAssembledProductHeight')),
			},
			{
				json: 'assembledProductLength',
				js: 'assembledProductLength',
				typ: u(undefined, r('PlumbingHVACAssembledProductLength')),
			},
			{
				json: 'assembledProductWeight',
				js: 'assembledProductWeight',
				typ: u(undefined, r('PlumbingHVACAssembledProductWeight')),
			},
			{
				json: 'assembledProductWidth',
				js: 'assembledProductWidth',
				typ: u(undefined, r('PlumbingHVACAssembledProductWidth')),
			},
			{ json: 'ceeTier', js: 'ceeTier', typ: u(undefined, r('CEETier')) },
			{ json: 'cleaningCareAndMaintenance', js: 'cleaningCareAndMaintenance', typ: u(undefined, '') },
			{ json: 'color', js: 'color', typ: u(undefined, a('')) },
			{ json: 'colorCategory', js: 'colorCategory', typ: u(undefined, a(r('ColorCategory'))) },
			{ json: 'contaminantsRemoved', js: 'contaminantsRemoved', typ: u(undefined, '') },
			{ json: 'count', js: 'count', typ: u(undefined, '') },
			{ json: 'countPerPack', js: 'countPerPack', typ: u(undefined, 0) },
			{ json: 'coverageArea', js: 'coverageArea', typ: u(undefined, r('PlumbingHVACCoverageArea')) },
			{ json: 'faucetDrillings', js: 'faucetDrillings', typ: u(undefined, '') },
			{ json: 'faucetHandleDesign', js: 'faucetHandleDesign', typ: u(undefined, '') },
			{ json: 'features', js: 'features', typ: u(undefined, a('')) },
			{ json: 'finish', js: 'finish', typ: u(undefined, '') },
			{ json: 'fuelType', js: 'fuelType', typ: u(undefined, '') },
			{ json: 'gallonsPerFlush', js: 'gallonsPerFlush', typ: u(undefined, r('GallonsPerFlush')) },
			{ json: 'gallonsPerMinute', js: 'gallonsPerMinute', typ: u(undefined, r('GallonsPerMinute')) },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: u(undefined, a('')) },
			{ json: 'hardwareFinish', js: 'hardwareFinish', typ: u(undefined, '') },
			{ json: 'hasCeeCertification', js: 'hasCeeCertification', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'homeDecorStyle', js: 'homeDecorStyle', typ: u(undefined, '') },
			{ json: 'horsepower', js: 'horsepower', typ: u(undefined, r('PlumbingHVACHorsepower')) },
			{ json: 'humidificationOutputPerDay', js: 'humidificationOutputPerDay', typ: u(undefined, '') },
			{ json: 'isFireResistant', js: 'isFireResistant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isIndustrial', js: 'isIndustrial', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isWaterproof', js: 'isWaterproof', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: u(undefined, a('')) },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: '' },
			{ json: 'manufacturer', js: 'manufacturer', typ: '' },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: u(undefined, '') },
			{ json: 'material', js: 'material', typ: u(undefined, a('')) },
			{ json: 'mervRating', js: 'mervRating', typ: u(undefined, '') },
			{ json: 'modelNumber', js: 'modelNumber', typ: u(undefined, '') },
			{ json: 'msrp', js: 'msrp', typ: u(undefined, 3.14) },
			{ json: 'numberOfBlades', js: 'numberOfBlades', typ: u(undefined, 0) },
			{ json: 'pieceCount', js: 'pieceCount', typ: u(undefined, 0) },
			{ json: 'pintsOfMoistureRemovedPerDay', js: 'pintsOfMoistureRemovedPerDay', typ: u(undefined, 0) },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: u(undefined, a('')) },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: '' },
			{ json: 'recommendedUses', js: 'recommendedUses', typ: u(undefined, a('')) },
			{ json: 'roughInDistance', js: 'roughInDistance', typ: u(undefined, r('RoughInDistance')) },
			{ json: 'shape', js: 'shape', typ: u(undefined, '') },
			{ json: 'shortDescription', js: 'shortDescription', typ: '' },
			{ json: 'size', js: 'size', typ: u(undefined, '') },
			{ json: 'sprayPatterns', js: 'sprayPatterns', typ: u(undefined, '') },
			{ json: 'swatchImages', js: 'swatchImages', typ: u(undefined, a(r('PlumbingHVACSwatchImage'))) },
			{
				json: 'variantAttributeNames',
				js: 'variantAttributeNames',
				typ: u(undefined, a(r('PlumbingHVACVariantAttributeName'))),
			},
			{ json: 'variantGroupId', js: 'variantGroupId', typ: u(undefined, '') },
			{ json: 'volts', js: 'volts', typ: u(undefined, a(r('PlumbingHVACVolt'))) },
			{ json: 'volumeCapacity', js: 'volumeCapacity', typ: u(undefined, r('PlumbingHVACVolumeCapacity')) },
			{ json: 'warrantyText', js: 'warrantyText', typ: u(undefined, '') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: u(undefined, '') },
			{ json: 'watts', js: 'watts', typ: u(undefined, r('PlumbingHVACWatts')) },
		],
		false
	),
	PlumbingHVACAdditionalProductAttribute: o(
		[
			{ json: 'productAttributeName', js: 'productAttributeName', typ: '' },
			{ json: 'productAttributeValue', js: 'productAttributeValue', typ: '' },
		],
		false
	),
	PlumbingHVACAssembledProductHeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	PlumbingHVACAssembledProductLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	PlumbingHVACAssembledProductWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductWeightUnit')) },
		],
		false
	),
	PlumbingHVACAssembledProductWidth: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	PlumbingHVACCoverageArea: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('CoverageAreaUnit')) },
		],
		false
	),
	GallonsPerFlush: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('GallonsPerFlushUnit')) },
		],
		false
	),
	GallonsPerMinute: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('GallonsPerFlushUnit')) },
		],
		false
	),
	PlumbingHVACHorsepower: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('HorsepowerUnit')) },
		],
		false
	),
	RoughInDistance: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, '') },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('RoughInDistanceUnit')) },
		],
		false
	),
	PlumbingHVACSwatchImage: o(
		[
			{ json: 'swatchImageUrl', js: 'swatchImageUrl', typ: u(undefined, '') },
			{
				json: 'swatchVariantAttribute',
				js: 'swatchVariantAttribute',
				typ: u(undefined, r('PlumbingHVACVariantAttributeName')),
			},
		],
		false
	),
	PlumbingHVACVolt: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('VoltUnit')) },
		],
		false
	),
	PlumbingHVACVolumeCapacity: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('VolumeCapacityUnit')) },
		],
		false
	),
	PlumbingHVACWatts: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('WattsUnit')) },
		],
		false
	),
	PrintersScannersImaging: o(
		[
			{
				json: 'additionalProductAttributes',
				js: 'additionalProductAttributes',
				typ: u(undefined, a(r('PrintersScannersImagingAdditionalProductAttribute'))),
			},
			{
				json: 'assembledProductHeight',
				js: 'assembledProductHeight',
				typ: u(undefined, r('PrintersScannersImagingAssembledProductHeight')),
			},
			{
				json: 'assembledProductLength',
				js: 'assembledProductLength',
				typ: u(undefined, r('PrintersScannersImagingAssembledProductLength')),
			},
			{
				json: 'assembledProductWeight',
				js: 'assembledProductWeight',
				typ: u(undefined, r('PrintersScannersImagingAssembledProductWeight')),
			},
			{
				json: 'assembledProductWidth',
				js: 'assembledProductWidth',
				typ: u(undefined, r('PrintersScannersImagingAssembledProductWidth')),
			},
			{ json: 'color', js: 'color', typ: u(undefined, a('')) },
			{ json: 'colorPagesPerMinute', js: 'colorPagesPerMinute', typ: u(undefined, 3.14) },
			{ json: 'connections', js: 'connections', typ: u(undefined, a('')) },
			{ json: 'count', js: 'count', typ: u(undefined, '') },
			{ json: 'countPerPack', js: 'countPerPack', typ: u(undefined, 0) },
			{ json: 'features', js: 'features', typ: u(undefined, a('')) },
			{ json: 'has3dCapabilities', js: 'has3dCapabilities', typ: u(undefined, r('MustShipAlone')) },
			{
				json: 'hasAutomaticDocumentFeeder',
				js: 'hasAutomaticDocumentFeeder',
				typ: u(undefined, r('MustShipAlone')),
			},
			{
				json: 'hasAutomaticTwoSidedPrinting',
				js: 'hasAutomaticTwoSidedPrinting',
				typ: u(undefined, r('MustShipAlone')),
			},
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: u(undefined, a('')) },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: '' },
			{ json: 'manufacturer', js: 'manufacturer', typ: '' },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: u(undefined, '') },
			{ json: 'maximumDocumentSize', js: 'maximumDocumentSize', typ: u(undefined, '') },
			{
				json: 'maximumPrintResolution',
				js: 'maximumPrintResolution',
				typ: u(undefined, r('MaximumPrintResolution')),
			},
			{
				json: 'maximumScannerResolution',
				js: 'maximumScannerResolution',
				typ: u(undefined, r('MaximumScannerResolution')),
			},
			{ json: 'memoryCardType', js: 'memoryCardType', typ: u(undefined, a('')) },
			{ json: 'modelNumber', js: 'modelNumber', typ: u(undefined, '') },
			{ json: 'monochromeColor', js: 'monochromeColor', typ: u(undefined, r('MonochromeColor')) },
			{ json: 'monochromePagesPerMinute', js: 'monochromePagesPerMinute', typ: u(undefined, 3.14) },
			{ json: 'msrp', js: 'msrp', typ: u(undefined, 3.14) },
			{ json: 'printingTechnology', js: 'printingTechnology', typ: u(undefined, '') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: u(undefined, a('')) },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: '' },
			{ json: 'resolution', js: 'resolution', typ: u(undefined, '') },
			{ json: 'shortDescription', js: 'shortDescription', typ: '' },
			{ json: 'swatchImages', js: 'swatchImages', typ: u(undefined, a(r('PrintersScannersImagingSwatchImage'))) },
			{
				json: 'variantAttributeNames',
				js: 'variantAttributeNames',
				typ: u(undefined, a(r('PrintersScannersImagingVariantAttributeName'))),
			},
			{ json: 'variantGroupId', js: 'variantGroupId', typ: u(undefined, '') },
			{ json: 'warrantyText', js: 'warrantyText', typ: u(undefined, '') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: u(undefined, '') },
			{ json: 'wirelessTechnologies', js: 'wirelessTechnologies', typ: u(undefined, a('')) },
		],
		false
	),
	PrintersScannersImagingAdditionalProductAttribute: o(
		[
			{ json: 'productAttributeName', js: 'productAttributeName', typ: '' },
			{ json: 'productAttributeValue', js: 'productAttributeValue', typ: '' },
		],
		false
	),
	PrintersScannersImagingAssembledProductHeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	PrintersScannersImagingAssembledProductLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	PrintersScannersImagingAssembledProductWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductWeightUnit')) },
		],
		false
	),
	PrintersScannersImagingAssembledProductWidth: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	MaximumPrintResolution: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('MaximumPrintResolutionUnit')) },
		],
		false
	),
	MaximumScannerResolution: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('MaximumPrintResolutionUnit')) },
		],
		false
	),
	PrintersScannersImagingSwatchImage: o(
		[
			{ json: 'swatchImageUrl', js: 'swatchImageUrl', typ: u(undefined, '') },
			{
				json: 'swatchVariantAttribute',
				js: 'swatchVariantAttribute',
				typ: u(undefined, r('MischievousSwatchVariantAttribute')),
			},
		],
		false
	),
	SafetyEmergency: o(
		[
			{
				json: 'additionalProductAttributes',
				js: 'additionalProductAttributes',
				typ: u(undefined, a(r('SafetyEmergencyAdditionalProductAttribute'))),
			},
			{
				json: 'assembledProductHeight',
				js: 'assembledProductHeight',
				typ: u(undefined, r('SafetyEmergencyAssembledProductHeight')),
			},
			{
				json: 'assembledProductLength',
				js: 'assembledProductLength',
				typ: u(undefined, r('SafetyEmergencyAssembledProductLength')),
			},
			{
				json: 'assembledProductWeight',
				js: 'assembledProductWeight',
				typ: u(undefined, r('SafetyEmergencyAssembledProductWeight')),
			},
			{
				json: 'assembledProductWidth',
				js: 'assembledProductWidth',
				typ: u(undefined, r('SafetyEmergencyAssembledProductWidth')),
			},
			{ json: 'assemblyInstructions', js: 'assemblyInstructions', typ: u(undefined, '') },
			{ json: 'color', js: 'color', typ: u(undefined, a('')) },
			{ json: 'count', js: 'count', typ: u(undefined, '') },
			{ json: 'countPerPack', js: 'countPerPack', typ: u(undefined, 0) },
			{ json: 'features', js: 'features', typ: u(undefined, a('')) },
			{
				json: 'fireExtinguisherClasses',
				js: 'fireExtinguisherClasses',
				typ: u(undefined, a(r('FireExtinguisherClass'))),
			},
			{ json: 'fluidOunces', js: 'fluidOunces', typ: u(undefined, r('SafetyEmergencyFluidOunces')) },
			{ json: 'form', js: 'form', typ: u(undefined, '') },
			{ json: 'handleLength', js: 'handleLength', typ: u(undefined, r('SafetyEmergencyHandleLength')) },
			{ json: 'ingredients', js: 'ingredients', typ: u(undefined, '') },
			{ json: 'instructions', js: 'instructions', typ: u(undefined, '') },
			{ json: 'isAssemblyRequired', js: 'isAssemblyRequired', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPowered', js: 'isPowered', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isRefillable', js: 'isRefillable', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: u(undefined, a('')) },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: '' },
			{ json: 'manufacturer', js: 'manufacturer', typ: '' },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: u(undefined, '') },
			{ json: 'modelNumber', js: 'modelNumber', typ: u(undefined, '') },
			{ json: 'msrp', js: 'msrp', typ: u(undefined, 3.14) },
			{ json: 'pieceCount', js: 'pieceCount', typ: u(undefined, 0) },
			{ json: 'powerType', js: 'powerType', typ: u(undefined, '') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: u(undefined, a('')) },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: '' },
			{ json: 'recommendedLocations', js: 'recommendedLocations', typ: u(undefined, a('')) },
			{ json: 'recommendedSurfaces', js: 'recommendedSurfaces', typ: u(undefined, a('')) },
			{ json: 'recommendedUses', js: 'recommendedUses', typ: u(undefined, a('')) },
			{ json: 'shortDescription', js: 'shortDescription', typ: '' },
			{ json: 'size', js: 'size', typ: u(undefined, '') },
			{ json: 'swatchImages', js: 'swatchImages', typ: u(undefined, a(r('SafetyEmergencySwatchImage'))) },
			{
				json: 'variantAttributeNames',
				js: 'variantAttributeNames',
				typ: u(undefined, a(r('HealthBeautyElectronicsVariantAttributeName'))),
			},
			{ json: 'variantGroupId', js: 'variantGroupId', typ: u(undefined, '') },
			{ json: 'warrantyText', js: 'warrantyText', typ: u(undefined, '') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: u(undefined, '') },
			{ json: 'workingPressure', js: 'workingPressure', typ: u(undefined, r('WorkingPressure')) },
		],
		false
	),
	SafetyEmergencyAdditionalProductAttribute: o(
		[
			{ json: 'productAttributeName', js: 'productAttributeName', typ: '' },
			{ json: 'productAttributeValue', js: 'productAttributeValue', typ: '' },
		],
		false
	),
	SafetyEmergencyAssembledProductHeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	SafetyEmergencyAssembledProductLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	SafetyEmergencyAssembledProductWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductWeightUnit')) },
		],
		false
	),
	SafetyEmergencyAssembledProductWidth: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	SafetyEmergencyFluidOunces: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('FluidOuncesSupplying100CaloriesUnit')) },
		],
		false
	),
	SafetyEmergencyHandleLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('ScreenSizeUnit')) },
		],
		false
	),
	SafetyEmergencySwatchImage: o(
		[
			{ json: 'swatchImageUrl', js: 'swatchImageUrl', typ: u(undefined, '') },
			{
				json: 'swatchVariantAttribute',
				js: 'swatchVariantAttribute',
				typ: u(undefined, r('HealthBeautyElectronicsVariantAttributeName')),
			},
		],
		false
	),
	WorkingPressure: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('WorkingPressureUnit')) },
		],
		false
	),
	Software: o(
		[
			{
				json: 'additionalProductAttributes',
				js: 'additionalProductAttributes',
				typ: u(undefined, a(r('SoftwareAdditionalProductAttribute'))),
			},
			{ json: 'count', js: 'count', typ: u(undefined, '') },
			{ json: 'countPerPack', js: 'countPerPack', typ: u(undefined, 0) },
			{ json: 'digitalFileFormat', js: 'digitalFileFormat', typ: u(undefined, a('')) },
			{ json: 'educationalFocus', js: 'educationalFocus', typ: u(undefined, a('')) },
			{ json: 'features', js: 'features', typ: u(undefined, a('')) },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: u(undefined, a('')) },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: '' },
			{ json: 'manufacturer', js: 'manufacturer', typ: '' },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: u(undefined, '') },
			{ json: 'modelNumber', js: 'modelNumber', typ: u(undefined, '') },
			{ json: 'msrp', js: 'msrp', typ: u(undefined, 3.14) },
			{ json: 'numberOfUsers', js: 'numberOfUsers', typ: u(undefined, 0) },
			{ json: 'operatingSystem', js: 'operatingSystem', typ: u(undefined, a('')) },
			{ json: 'physicalMediaFormat', js: 'physicalMediaFormat', typ: u(undefined, a('')) },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: u(undefined, a('')) },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: '' },
			{ json: 'releaseDate', js: 'releaseDate', typ: u(undefined, Date) },
			{ json: 'requiredPeripherals', js: 'requiredPeripherals', typ: u(undefined, '') },
			{ json: 'shortDescription', js: 'shortDescription', typ: '' },
			{ json: 'softwareCategory', js: 'softwareCategory', typ: u(undefined, a('')) },
			{ json: 'swatchImages', js: 'swatchImages', typ: u(undefined, a(r('SoftwareSwatchImage'))) },
			{ json: 'systemRequirements', js: 'systemRequirements', typ: u(undefined, a('')) },
			{
				json: 'variantAttributeNames',
				js: 'variantAttributeNames',
				typ: u(undefined, a(r('SoftwareVariantAttributeName'))),
			},
			{ json: 'variantGroupId', js: 'variantGroupId', typ: u(undefined, '') },
			{ json: 'version', js: 'version', typ: u(undefined, '') },
			{ json: 'warrantyText', js: 'warrantyText', typ: u(undefined, '') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: u(undefined, '') },
		],
		false
	),
	SoftwareAdditionalProductAttribute: o(
		[
			{ json: 'productAttributeName', js: 'productAttributeName', typ: '' },
			{ json: 'productAttributeValue', js: 'productAttributeValue', typ: '' },
		],
		false
	),
	SoftwareSwatchImage: o(
		[
			{ json: 'swatchImageUrl', js: 'swatchImageUrl', typ: u(undefined, '') },
			{
				json: 'swatchVariantAttribute',
				js: 'swatchVariantAttribute',
				typ: u(undefined, r('BraggadociousSwatchVariantAttribute')),
			},
		],
		false
	),
	SoundRecording: o(
		[
			{
				json: 'additionalProductAttributes',
				js: 'additionalProductAttributes',
				typ: u(undefined, a(r('SoundRecordingAdditionalProductAttribute'))),
			},
			{
				json: 'assembledProductHeight',
				js: 'assembledProductHeight',
				typ: u(undefined, r('SoundRecordingAssembledProductHeight')),
			},
			{
				json: 'assembledProductLength',
				js: 'assembledProductLength',
				typ: u(undefined, r('SoundRecordingAssembledProductLength')),
			},
			{
				json: 'assembledProductWeight',
				js: 'assembledProductWeight',
				typ: u(undefined, r('SoundRecordingAssembledProductWeight')),
			},
			{
				json: 'assembledProductWidth',
				js: 'assembledProductWidth',
				typ: u(undefined, r('SoundRecordingAssembledProductWidth')),
			},
			{ json: 'audioPowerOutput', js: 'audioPowerOutput', typ: u(undefined, '') },
			{ json: 'batteryLife', js: 'batteryLife', typ: u(undefined, r('SoundRecordingBatteryLife')) },
			{ json: 'color', js: 'color', typ: u(undefined, a('')) },
			{ json: 'colorCategory', js: 'colorCategory', typ: u(undefined, a(r('ColorCategory'))) },
			{ json: 'count', js: 'count', typ: u(undefined, '') },
			{ json: 'countPerPack', js: 'countPerPack', typ: u(undefined, 0) },
			{ json: 'equalizerControl', js: 'equalizerControl', typ: u(undefined, '') },
			{ json: 'features', js: 'features', typ: u(undefined, a('')) },
			{ json: 'hasBluetooth', js: 'hasBluetooth', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'hasIntegratedSpeakers', js: 'hasIntegratedSpeakers', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'impedance', js: 'impedance', typ: u(undefined, r('SoundRecordingImpedance')) },
			{
				json: 'inputsAndOutputs',
				js: 'inputsAndOutputs',
				typ: u(undefined, a(r('SoundRecordingInputsAndOutput'))),
			},
			{ json: 'isPortable', js: 'isPortable', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPowered', js: 'isPowered', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isRemoteControlIncluded', js: 'isRemoteControlIncluded', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: u(undefined, a('')) },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: '' },
			{ json: 'manufacturer', js: 'manufacturer', typ: '' },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: u(undefined, '') },
			{ json: 'material', js: 'material', typ: u(undefined, a('')) },
			{ json: 'microphoneTechnology', js: 'microphoneTechnology', typ: u(undefined, '') },
			{ json: 'modelNumber', js: 'modelNumber', typ: u(undefined, '') },
			{ json: 'msrp', js: 'msrp', typ: u(undefined, 3.14) },
			{ json: 'pieceCount', js: 'pieceCount', typ: u(undefined, 0) },
			{ json: 'powerType', js: 'powerType', typ: u(undefined, '') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: u(undefined, a('')) },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: '' },
			{ json: 'recommendedLocations', js: 'recommendedLocations', typ: u(undefined, a('')) },
			{ json: 'recommendedUses', js: 'recommendedUses', typ: u(undefined, a('')) },
			{ json: 'shortDescription', js: 'shortDescription', typ: '' },
			{ json: 'smallPartsWarnings', js: 'smallPartsWarnings', typ: a(r('SmallPartsWarningCode')) },
			{ json: 'swatchImages', js: 'swatchImages', typ: u(undefined, a(r('SoundRecordingSwatchImage'))) },
			{
				json: 'variantAttributeNames',
				js: 'variantAttributeNames',
				typ: u(undefined, a(r('SoundRecordingVariantAttributeName'))),
			},
			{ json: 'variantGroupId', js: 'variantGroupId', typ: u(undefined, '') },
			{ json: 'warrantyText', js: 'warrantyText', typ: u(undefined, '') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: u(undefined, '') },
			{ json: 'wirelessTechnologies', js: 'wirelessTechnologies', typ: u(undefined, a('')) },
		],
		false
	),
	SoundRecordingAdditionalProductAttribute: o(
		[
			{ json: 'productAttributeName', js: 'productAttributeName', typ: '' },
			{ json: 'productAttributeValue', js: 'productAttributeValue', typ: '' },
		],
		false
	),
	SoundRecordingAssembledProductHeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	SoundRecordingAssembledProductLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	SoundRecordingAssembledProductWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductWeightUnit')) },
		],
		false
	),
	SoundRecordingAssembledProductWidth: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	SoundRecordingBatteryLife: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('StandbyTimeUnit')) },
		],
		false
	),
	SoundRecordingImpedance: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, '') },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('ImpedanceUnit')) },
		],
		false
	),
	SoundRecordingInputsAndOutput: o(
		[
			{ json: 'inputOutputQuantity', js: 'inputOutputQuantity', typ: u(undefined, 0) },
			{ json: 'inputOutputType', js: 'inputOutputType', typ: u(undefined, '') },
		],
		false
	),
	SoundRecordingSwatchImage: o(
		[
			{ json: 'swatchImageUrl', js: 'swatchImageUrl', typ: u(undefined, '') },
			{
				json: 'swatchVariantAttribute',
				js: 'swatchVariantAttribute',
				typ: u(undefined, r('SoundRecordingVariantAttributeName')),
			},
		],
		false
	),
	SportRecreationOther: o(
		[
			{
				json: 'additionalProductAttributes',
				js: 'additionalProductAttributes',
				typ: u(undefined, a(r('SportRecreationOtherAdditionalProductAttribute'))),
			},
			{ json: 'ageGroup', js: 'ageGroup', typ: u(undefined, a(r('ArtCraftAgeGroup'))) },
			{ json: 'AirGunPowerType', js: 'AirGunPowerType', typ: u(undefined, r('AirGunPowerType')) },
			{ json: 'animalType', js: 'animalType', typ: u(undefined, '') },
			{
				json: 'assembledProductHeight',
				js: 'assembledProductHeight',
				typ: u(undefined, r('SportRecreationOtherAssembledProductHeight')),
			},
			{
				json: 'assembledProductLength',
				js: 'assembledProductLength',
				typ: u(undefined, r('SportRecreationOtherAssembledProductLength')),
			},
			{
				json: 'assembledProductWeight',
				js: 'assembledProductWeight',
				typ: u(undefined, r('SportRecreationOtherAssembledProductWeight')),
			},
			{
				json: 'assembledProductWidth',
				js: 'assembledProductWidth',
				typ: u(undefined, r('SportRecreationOtherAssembledProductWidth')),
			},
			{ json: 'assemblyInstructions', js: 'assemblyInstructions', typ: u(undefined, '') },
			{ json: 'athlete', js: 'athlete', typ: u(undefined, a('')) },
			{ json: 'autographedBy', js: 'autographedBy', typ: u(undefined, '') },
			{ json: 'ballCoreMaterial', js: 'ballCoreMaterial', typ: u(undefined, a('')) },
			{ json: 'basketballSize', js: 'basketballSize', typ: u(undefined, '') },
			{ json: 'batDrop', js: 'batDrop', typ: u(undefined, '') },
			{ json: 'bladeType', js: 'bladeType', typ: u(undefined, '') },
			{ json: 'capacity', js: 'capacity', typ: u(undefined, '') },
			{ json: 'character', js: 'character', typ: u(undefined, a('')) },
			{ json: 'cleaningCareAndMaintenance', js: 'cleaningCareAndMaintenance', typ: u(undefined, '') },
			{ json: 'clothingSize', js: 'clothingSize', typ: u(undefined, '') },
			{ json: 'color', js: 'color', typ: u(undefined, a('')) },
			{ json: 'colorCategory', js: 'colorCategory', typ: u(undefined, a(r('ColorCategory'))) },
			{ json: 'compatibleDevices', js: 'compatibleDevices', typ: u(undefined, a('')) },
			{
				json: 'compositeWoodCertificationCode',
				js: 'compositeWoodCertificationCode',
				typ: r('CompositeWoodCertificationCode'),
			},
			{ json: 'count', js: 'count', typ: u(undefined, '') },
			{ json: 'countPerPack', js: 'countPerPack', typ: u(undefined, 0) },
			{ json: 'countryOfOriginTextiles', js: 'countryOfOriginTextiles', typ: r('CountryOfOriginTextiles') },
			{ json: 'dexterity', js: 'dexterity', typ: u(undefined, '') },
			{ json: 'driveSystem', js: 'driveSystem', typ: u(undefined, '') },
			{ json: 'fabricCareInstructions', js: 'fabricCareInstructions', typ: u(undefined, a('')) },
			{
				json: 'fabricContent',
				js: 'fabricContent',
				typ: u(undefined, a(r('SportRecreationOtherFabricContent'))),
			},
			{ json: 'features', js: 'features', typ: u(undefined, a('')) },
			{ json: 'finish', js: 'finish', typ: u(undefined, '') },
			{ json: 'fishingLinePoundTest', js: 'fishingLinePoundTest', typ: u(undefined, 0) },
			{ json: 'fishingLocation', js: 'fishingLocation', typ: u(undefined, '') },
			{ json: 'fitnessGoal', js: 'fitnessGoal', typ: u(undefined, '') },
			{ json: 'footballSize', js: 'footballSize', typ: u(undefined, '') },
			{ json: 'gender', js: 'gender', typ: u(undefined, r('BabyClothingGender')) },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: u(undefined, a('')) },
			{ json: 'golfClubShaftFlex', js: 'golfClubShaftFlex', typ: u(undefined, '') },
			{ json: 'golfClubShaftType', js: 'golfClubShaftType', typ: u(undefined, '') },
			{ json: 'hasAutomaticShutoff', js: 'hasAutomaticShutoff', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'horsepower', js: 'horsepower', typ: u(undefined, r('SportRecreationOtherHorsepower')) },
			{ json: 'inflexKitComponent', js: 'inflexKitComponent', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'insulationType', js: 'insulationType', typ: u(undefined, r('InsulationType')) },
			{ json: 'isAssemblyRequired', js: 'isAssemblyRequired', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isCollectible', js: 'isCollectible', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isFoldable', js: 'isFoldable', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isMemorabilia', js: 'isMemorabilia', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPortable', js: 'isPortable', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPowered', js: 'isPowered', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isSpaceSaving', js: 'isSpaceSaving', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isTearResistant', js: 'isTearResistant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isWaterproof', js: 'isWaterproof', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isWeatherResistant', js: 'isWeatherResistant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isWheeled', js: 'isWheeled', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: u(undefined, a('')) },
			{ json: 'loft', js: 'loft', typ: u(undefined, '') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: '' },
			{ json: 'manufacturer', js: 'manufacturer', typ: '' },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: u(undefined, '') },
			{ json: 'material', js: 'material', typ: u(undefined, a('')) },
			{ json: 'maximumIncline', js: 'maximumIncline', typ: u(undefined, 0) },
			{
				json: 'maximumRecommendedAge',
				js: 'maximumRecommendedAge',
				typ: u(undefined, r('SportRecreationOtherMaximumRecommendedAge')),
			},
			{ json: 'maximumWeight', js: 'maximumWeight', typ: u(undefined, r('SportRecreationOtherMaximumWeight')) },
			{
				json: 'minimumRecommendedAge',
				js: 'minimumRecommendedAge',
				typ: u(undefined, r('SportRecreationOtherMinimumRecommendedAge')),
			},
			{
				json: 'minimumTemperature',
				js: 'minimumTemperature',
				typ: u(undefined, r('SportRecreationOtherMinimumTemperature')),
			},
			{ json: 'modelNumber', js: 'modelNumber', typ: u(undefined, '') },
			{ json: 'msrp', js: 'msrp', typ: u(undefined, 3.14) },
			{ json: 'pattern', js: 'pattern', typ: u(undefined, a('')) },
			{ json: 'pieceCount', js: 'pieceCount', typ: u(undefined, 0) },
			{ json: 'powerType', js: 'powerType', typ: u(undefined, '') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: u(undefined, a('')) },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: '' },
			{ json: 'recommendedLocations', js: 'recommendedLocations', typ: u(undefined, a('')) },
			{ json: 'recommendedUses', js: 'recommendedUses', typ: u(undefined, a('')) },
			{ json: 'rValue', js: 'rValue', typ: u(undefined, 3.14) },
			{ json: 'season', js: 'season', typ: u(undefined, a('')) },
			{ json: 'seatingCapacity', js: 'seatingCapacity', typ: u(undefined, 0) },
			{ json: 'shaftLength', js: 'shaftLength', typ: u(undefined, '') },
			{ json: 'shaftMaterial', js: 'shaftMaterial', typ: u(undefined, a('')) },
			{ json: 'shape', js: 'shape', typ: u(undefined, '') },
			{ json: 'shoeSize', js: 'shoeSize', typ: u(undefined, '') },
			{ json: 'shortDescription', js: 'shortDescription', typ: '' },
			{ json: 'size', js: 'size', typ: u(undefined, '') },
			{ json: 'sleepingBagSize', js: 'sleepingBagSize', typ: u(undefined, '') },
			{ json: 'smallPartsWarnings', js: 'smallPartsWarnings', typ: a(r('SmallPartsWarningCode')) },
			{ json: 'soccerBallSize', js: 'soccerBallSize', typ: u(undefined, '') },
			{ json: 'sport', js: 'sport', typ: u(undefined, a('')) },
			{ json: 'sportsLeague', js: 'sportsLeague', typ: u(undefined, a('')) },
			{ json: 'sportsTeam', js: 'sportsTeam', typ: u(undefined, a('')) },
			{ json: 'strideLength', js: 'strideLength', typ: u(undefined, 3.14) },
			{ json: 'swatchImages', js: 'swatchImages', typ: u(undefined, a(r('SportRecreationOtherSwatchImage'))) },
			{ json: 'tentType', js: 'tentType', typ: u(undefined, '') },
			{ json: 'tireDiameter', js: 'tireDiameter', typ: u(undefined, r('SportRecreationOtherTireDiameter')) },
			{
				json: 'variantAttributeNames',
				js: 'variantAttributeNames',
				typ: u(undefined, a(r('SportRecreationOtherVariantAttributeName'))),
			},
			{ json: 'variantGroupId', js: 'variantGroupId', typ: u(undefined, '') },
			{ json: 'velocity', js: 'velocity', typ: u(undefined, r('Velocity')) },
			{ json: 'warrantyText', js: 'warrantyText', typ: u(undefined, '') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: u(undefined, '') },
			{ json: 'wirelessTechnologies', js: 'wirelessTechnologies', typ: u(undefined, a('')) },
		],
		false
	),
	SportRecreationOtherAdditionalProductAttribute: o(
		[
			{ json: 'productAttributeName', js: 'productAttributeName', typ: '' },
			{ json: 'productAttributeValue', js: 'productAttributeValue', typ: '' },
		],
		false
	),
	SportRecreationOtherAssembledProductHeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	SportRecreationOtherAssembledProductLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	SportRecreationOtherAssembledProductWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductWeightUnit')) },
		],
		false
	),
	SportRecreationOtherAssembledProductWidth: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	SportRecreationOtherFabricContent: o(
		[
			{ json: 'materialName', js: 'materialName', typ: u(undefined, '') },
			{ json: 'materialPercentage', js: 'materialPercentage', typ: u(undefined, 3.14) },
		],
		false
	),
	SportRecreationOtherHorsepower: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('HorsepowerUnit')) },
		],
		false
	),
	SportRecreationOtherMaximumRecommendedAge: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 0) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('MaximumRecommendedAgeUnit')) },
		],
		false
	),
	SportRecreationOtherMaximumWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('PurpleUnit')) },
		],
		false
	),
	SportRecreationOtherMinimumRecommendedAge: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 0) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('MaximumRecommendedAgeUnit')) },
		],
		false
	),
	SportRecreationOtherMinimumTemperature: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('MaximumTemperatureUnit')) },
		],
		false
	),
	SportRecreationOtherSwatchImage: o(
		[
			{ json: 'swatchImageUrl', js: 'swatchImageUrl', typ: u(undefined, '') },
			{
				json: 'swatchVariantAttribute',
				js: 'swatchVariantAttribute',
				typ: u(undefined, r('SportRecreationOtherVariantAttributeName')),
			},
		],
		false
	),
	SportRecreationOtherTireDiameter: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('ScreenSizeUnit')) },
		],
		false
	),
	Velocity: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('VelocityUnit')) },
		],
		false
	),
	Storage: o(
		[
			{
				json: 'additionalProductAttributes',
				js: 'additionalProductAttributes',
				typ: u(undefined, a(r('StorageAdditionalProductAttribute'))),
			},
			{
				json: 'assembledProductHeight',
				js: 'assembledProductHeight',
				typ: u(undefined, r('StorageAssembledProductHeight')),
			},
			{
				json: 'assembledProductLength',
				js: 'assembledProductLength',
				typ: u(undefined, r('StorageAssembledProductLength')),
			},
			{
				json: 'assembledProductWeight',
				js: 'assembledProductWeight',
				typ: u(undefined, r('StorageAssembledProductWeight')),
			},
			{
				json: 'assembledProductWidth',
				js: 'assembledProductWidth',
				typ: u(undefined, r('StorageAssembledProductWidth')),
			},
			{ json: 'assemblyInstructions', js: 'assemblyInstructions', typ: u(undefined, '') },
			{ json: 'capacity', js: 'capacity', typ: u(undefined, '') },
			{ json: 'collection', js: 'collection', typ: u(undefined, '') },
			{ json: 'color', js: 'color', typ: u(undefined, a('')) },
			{ json: 'colorCategory', js: 'colorCategory', typ: u(undefined, a(r('ColorCategory'))) },
			{
				json: 'compositeWoodCertificationCode',
				js: 'compositeWoodCertificationCode',
				typ: r('CompositeWoodCertificationCode'),
			},
			{ json: 'count', js: 'count', typ: u(undefined, '') },
			{ json: 'countPerPack', js: 'countPerPack', typ: u(undefined, 0) },
			{ json: 'drawerDimensions', js: 'drawerDimensions', typ: u(undefined, '') },
			{ json: 'drawerPosition', js: 'drawerPosition', typ: u(undefined, '') },
			{ json: 'fabricCareInstructions', js: 'fabricCareInstructions', typ: u(undefined, a('')) },
			{ json: 'fabricContent', js: 'fabricContent', typ: u(undefined, a(r('StorageFabricContent'))) },
			{ json: 'features', js: 'features', typ: u(undefined, a('')) },
			{ json: 'finish', js: 'finish', typ: u(undefined, '') },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: u(undefined, a('')) },
			{ json: 'inflexKitComponent', js: 'inflexKitComponent', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isAssemblyRequired', js: 'isAssemblyRequired', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isFoldable', js: 'isFoldable', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isIndustrial', js: 'isIndustrial', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPortable', js: 'isPortable', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isRetractable', js: 'isRetractable', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: u(undefined, a('')) },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: '' },
			{ json: 'manufacturer', js: 'manufacturer', typ: '' },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: u(undefined, '') },
			{ json: 'material', js: 'material', typ: u(undefined, a('')) },
			{ json: 'maximumWeight', js: 'maximumWeight', typ: u(undefined, r('StorageMaximumWeight')) },
			{ json: 'minimumWeight', js: 'minimumWeight', typ: u(undefined, r('StorageMinimumWeight')) },
			{ json: 'modelNumber', js: 'modelNumber', typ: u(undefined, '') },
			{ json: 'msrp', js: 'msrp', typ: u(undefined, 3.14) },
			{ json: 'numberOfDrawers', js: 'numberOfDrawers', typ: u(undefined, 0) },
			{ json: 'numberOfShelves', js: 'numberOfShelves', typ: u(undefined, 0) },
			{ json: 'pattern', js: 'pattern', typ: u(undefined, a('')) },
			{ json: 'pieceCount', js: 'pieceCount', typ: u(undefined, 0) },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: u(undefined, a('')) },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: '' },
			{ json: 'recommendedLocations', js: 'recommendedLocations', typ: u(undefined, a('')) },
			{ json: 'recommendedRooms', js: 'recommendedRooms', typ: u(undefined, a('')) },
			{ json: 'recommendedUses', js: 'recommendedUses', typ: u(undefined, a('')) },
			{ json: 'shape', js: 'shape', typ: u(undefined, '') },
			{ json: 'shelfDepth', js: 'shelfDepth', typ: u(undefined, r('ShelfDepth')) },
			{ json: 'shelfStyle', js: 'shelfStyle', typ: u(undefined, '') },
			{ json: 'shortDescription', js: 'shortDescription', typ: '' },
			{ json: 'size', js: 'size', typ: u(undefined, '') },
			{ json: 'swatchImages', js: 'swatchImages', typ: u(undefined, a(r('StorageSwatchImage'))) },
			{ json: 'systemOfMeasurement', js: 'systemOfMeasurement', typ: u(undefined, '') },
			{
				json: 'variantAttributeNames',
				js: 'variantAttributeNames',
				typ: u(undefined, a(r('StorageVariantAttributeName'))),
			},
			{ json: 'variantGroupId', js: 'variantGroupId', typ: u(undefined, '') },
			{ json: 'warrantyText', js: 'warrantyText', typ: u(undefined, '') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: u(undefined, '') },
		],
		false
	),
	StorageAdditionalProductAttribute: o(
		[
			{ json: 'productAttributeName', js: 'productAttributeName', typ: '' },
			{ json: 'productAttributeValue', js: 'productAttributeValue', typ: '' },
		],
		false
	),
	StorageAssembledProductHeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	StorageAssembledProductLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	StorageAssembledProductWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductWeightUnit')) },
		],
		false
	),
	StorageAssembledProductWidth: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	StorageFabricContent: o(
		[
			{ json: 'materialName', js: 'materialName', typ: u(undefined, '') },
			{ json: 'materialPercentage', js: 'materialPercentage', typ: u(undefined, 3.14) },
		],
		false
	),
	StorageMaximumWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('PurpleUnit')) },
		],
		false
	),
	StorageMinimumWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductWeightUnit')) },
		],
		false
	),
	ShelfDepth: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('ScreenSizeUnit')) },
		],
		false
	),
	StorageSwatchImage: o(
		[
			{ json: 'swatchImageUrl', js: 'swatchImageUrl', typ: u(undefined, '') },
			{
				json: 'swatchVariantAttribute',
				js: 'swatchVariantAttribute',
				typ: u(undefined, r('StorageVariantAttributeName')),
			},
		],
		false
	),
	TVsVideoDisplays: o(
		[
			{
				json: 'additionalProductAttributes',
				js: 'additionalProductAttributes',
				typ: u(undefined, a(r('TVsVideoDisplaysAdditionalProductAttribute'))),
			},
			{ json: 'aspectRatio', js: 'aspectRatio', typ: u(undefined, '') },
			{
				json: 'assembledProductHeight',
				js: 'assembledProductHeight',
				typ: u(undefined, r('TVsVideoDisplaysAssembledProductHeight')),
			},
			{
				json: 'assembledProductLength',
				js: 'assembledProductLength',
				typ: u(undefined, r('TVsVideoDisplaysAssembledProductLength')),
			},
			{
				json: 'assembledProductWeight',
				js: 'assembledProductWeight',
				typ: u(undefined, r('TVsVideoDisplaysAssembledProductWeight')),
			},
			{
				json: 'assembledProductWidth',
				js: 'assembledProductWidth',
				typ: u(undefined, r('TVsVideoDisplaysAssembledProductWidth')),
			},
			{ json: 'audioFeatures', js: 'audioFeatures', typ: u(undefined, a('')) },
			{ json: 'audioPowerOutput', js: 'audioPowerOutput', typ: u(undefined, '') },
			{ json: 'backlightType', js: 'backlightType', typ: u(undefined, '') },
			{ json: 'color', js: 'color', typ: u(undefined, a('')) },
			{ json: 'colorCategory', js: 'colorCategory', typ: u(undefined, a(r('ColorCategory'))) },
			{ json: 'configuration', js: 'configuration', typ: u(undefined, '') },
			{ json: 'connections', js: 'connections', typ: u(undefined, a('')) },
			{ json: 'count', js: 'count', typ: u(undefined, '') },
			{ json: 'countPerPack', js: 'countPerPack', typ: u(undefined, 0) },
			{ json: 'displayTechnology', js: 'displayTechnology', typ: u(undefined, '') },
			{ json: 'energyGuideLabel', js: 'energyGuideLabel', typ: u(undefined, '') },
			{ json: 'features', js: 'features', typ: u(undefined, a('')) },
			{ json: 'hasIntegratedSpeakers', js: 'hasIntegratedSpeakers', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'hasTouchscreen', js: 'hasTouchscreen', typ: u(undefined, r('MustShipAlone')) },
			{
				json: 'inputsAndOutputs',
				js: 'inputsAndOutputs',
				typ: u(undefined, a(r('TVsVideoDisplaysInputsAndOutput'))),
			},
			{ json: 'isEnergyStarCertified', js: 'isEnergyStarCertified', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isSmart', js: 'isSmart', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: u(undefined, a('')) },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: '' },
			{ json: 'manufacturer', js: 'manufacturer', typ: '' },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: u(undefined, '') },
			{ json: 'maximumContrastRatio', js: 'maximumContrastRatio', typ: u(undefined, '') },
			{ json: 'memoryCardType', js: 'memoryCardType', typ: u(undefined, a('')) },
			{ json: 'modelNumber', js: 'modelNumber', typ: u(undefined, '') },
			{ json: 'mountingPattern', js: 'mountingPattern', typ: u(undefined, '') },
			{ json: 'msrp', js: 'msrp', typ: u(undefined, 3.14) },
			{ json: 'nativeResolution', js: 'nativeResolution', typ: u(undefined, '') },
			{
				json: 'peakAudioPowerCapacity',
				js: 'peakAudioPowerCapacity',
				typ: u(undefined, r('TVsVideoDisplaysPeakAudioPowerCapacity')),
			},
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: u(undefined, a('')) },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: '' },
			{ json: 'refreshRate', js: 'refreshRate', typ: u(undefined, r('RefreshRate')) },
			{ json: 'resolution', js: 'resolution', typ: u(undefined, '') },
			{ json: 'responseTime', js: 'responseTime', typ: u(undefined, r('TVsVideoDisplaysResponseTime')) },
			{ json: 'screenSize', js: 'screenSize', typ: u(undefined, r('TVsVideoDisplaysScreenSize')) },
			{ json: 'shortDescription', js: 'shortDescription', typ: '' },
			{ json: 'size', js: 'size', typ: u(undefined, '') },
			{ json: 'streamingServices', js: 'streamingServices', typ: u(undefined, '') },
			{ json: 'swatchImages', js: 'swatchImages', typ: u(undefined, a(r('TVsVideoDisplaysSwatchImage'))) },
			{ json: 'televisionType', js: 'televisionType', typ: u(undefined, a('')) },
			{
				json: 'variantAttributeNames',
				js: 'variantAttributeNames',
				typ: u(undefined, a(r('TVsVideoDisplaysVariantAttributeName'))),
			},
			{ json: 'variantGroupId', js: 'variantGroupId', typ: u(undefined, '') },
			{ json: 'warrantyText', js: 'warrantyText', typ: u(undefined, '') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: u(undefined, '') },
			{ json: 'wirelessTechnologies', js: 'wirelessTechnologies', typ: u(undefined, a('')) },
		],
		false
	),
	TVsVideoDisplaysAdditionalProductAttribute: o(
		[
			{ json: 'productAttributeName', js: 'productAttributeName', typ: '' },
			{ json: 'productAttributeValue', js: 'productAttributeValue', typ: '' },
		],
		false
	),
	TVsVideoDisplaysAssembledProductHeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	TVsVideoDisplaysAssembledProductLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	TVsVideoDisplaysAssembledProductWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductWeightUnit')) },
		],
		false
	),
	TVsVideoDisplaysAssembledProductWidth: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	TVsVideoDisplaysInputsAndOutput: o(
		[
			{ json: 'inputOutputQuantity', js: 'inputOutputQuantity', typ: u(undefined, 0) },
			{ json: 'inputOutputType', js: 'inputOutputType', typ: u(undefined, '') },
		],
		false
	),
	TVsVideoDisplaysPeakAudioPowerCapacity: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('WattsUnit')) },
		],
		false
	),
	RefreshRate: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('RefreshRateUnit')) },
		],
		false
	),
	TVsVideoDisplaysResponseTime: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('TentacledUnit')) },
		],
		false
	),
	TVsVideoDisplaysScreenSize: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('ScreenSizeUnit')) },
		],
		false
	),
	TVsVideoDisplaysSwatchImage: o(
		[
			{ json: 'swatchImageUrl', js: 'swatchImageUrl', typ: u(undefined, '') },
			{
				json: 'swatchVariantAttribute',
				js: 'swatchVariantAttribute',
				typ: u(undefined, r('SwatchVariantAttribute1')),
			},
		],
		false
	),
	Tools: o(
		[
			{ json: 'accessoriesIncluded', js: 'accessoriesIncluded', typ: u(undefined, a('')) },
			{
				json: 'additionalProductAttributes',
				js: 'additionalProductAttributes',
				typ: u(undefined, a(r('ToolsAdditionalProductAttribute'))),
			},
			{ json: 'airInlet', js: 'airInlet', typ: u(undefined, r('AirInlet')) },
			{ json: 'amps', js: 'amps', typ: u(undefined, r('ToolsAmps')) },
			{ json: 'arborDiameter', js: 'arborDiameter', typ: u(undefined, r('ArborDiameter')) },
			{
				json: 'assembledProductHeight',
				js: 'assembledProductHeight',
				typ: u(undefined, r('ToolsAssembledProductHeight')),
			},
			{
				json: 'assembledProductLength',
				js: 'assembledProductLength',
				typ: u(undefined, r('ToolsAssembledProductLength')),
			},
			{
				json: 'assembledProductWeight',
				js: 'assembledProductWeight',
				typ: u(undefined, r('ToolsAssembledProductWeight')),
			},
			{
				json: 'assembledProductWidth',
				js: 'assembledProductWidth',
				typ: u(undefined, r('ToolsAssembledProductWidth')),
			},
			{
				json: 'averageAirConsumptionAt90PSI',
				js: 'averageAirConsumptionAt90PSI',
				typ: u(undefined, r('AverageAirConsumptionAt90PSI')),
			},
			{ json: 'batteryCapacity', js: 'batteryCapacity', typ: u(undefined, r('BatteryCapacity')) },
			{ json: 'bladeDiameter', js: 'bladeDiameter', typ: u(undefined, r('BladeDiameter')) },
			{ json: 'bladeLength', js: 'bladeLength', typ: u(undefined, r('BladeLength')) },
			{ json: 'bladeShank', js: 'bladeShank', typ: u(undefined, '') },
			{ json: 'bladeWidth', js: 'bladeWidth', typ: u(undefined, r('ToolsBladeWidth')) },
			{ json: 'blowsPerMinute', js: 'blowsPerMinute', typ: u(undefined, '') },
			{ json: 'cfmAt40Psi', js: 'cfmAt40Psi', typ: u(undefined, r('CfmAt40Psi')) },
			{ json: 'cfmAt90Psi', js: 'cfmAt90Psi', typ: u(undefined, r('CfmAt90Psi')) },
			{ json: 'chuckSize', js: 'chuckSize', typ: u(undefined, r('ChuckSize')) },
			{ json: 'chuckType', js: 'chuckType', typ: u(undefined, '') },
			{ json: 'cleaningCareAndMaintenance', js: 'cleaningCareAndMaintenance', typ: u(undefined, '') },
			{ json: 'colletSize', js: 'colletSize', typ: u(undefined, r('ColletSize')) },
			{ json: 'color', js: 'color', typ: u(undefined, a('')) },
			{ json: 'colorCategory', js: 'colorCategory', typ: u(undefined, a(r('ColorCategory'))) },
			{ json: 'cordLength', js: 'cordLength', typ: u(undefined, r('ToolsCordLength')) },
			{ json: 'count', js: 'count', typ: u(undefined, '') },
			{ json: 'countPerPack', js: 'countPerPack', typ: u(undefined, 0) },
			{ json: 'decibelRating', js: 'decibelRating', typ: u(undefined, r('ToolsDecibelRating')) },
			{ json: 'discSize', js: 'discSize', typ: u(undefined, r('DiscSize')) },
			{ json: 'engineDisplacement', js: 'engineDisplacement', typ: u(undefined, r('ToolsEngineDisplacement')) },
			{ json: 'features', js: 'features', typ: u(undefined, a('')) },
			{ json: 'finish', js: 'finish', typ: u(undefined, '') },
			{ json: 'fuelType', js: 'fuelType', typ: u(undefined, '') },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: u(undefined, a('')) },
			{ json: 'gritSize', js: 'gritSize', typ: u(undefined, '') },
			{ json: 'handing', js: 'handing', typ: u(undefined, '') },
			{ json: 'horsepower', js: 'horsepower', typ: u(undefined, r('ToolsHorsepower')) },
			{ json: 'impactEnergy', js: 'impactEnergy', typ: u(undefined, r('ImpactEnergy')) },
			{ json: 'inflexKitComponent', js: 'inflexKitComponent', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isFireResistant', js: 'isFireResistant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isIndustrial', js: 'isIndustrial', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isWaterproof', js: 'isWaterproof', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: u(undefined, a('')) },
			{ json: 'lightBulbType', js: 'lightBulbType', typ: u(undefined, '') },
			{ json: 'loadCapacity', js: 'loadCapacity', typ: u(undefined, r('ToolsLoadCapacity')) },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: '' },
			{ json: 'manufacturer', js: 'manufacturer', typ: '' },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: u(undefined, '') },
			{ json: 'material', js: 'material', typ: u(undefined, a('')) },
			{ json: 'maximumAirPressure', js: 'maximumAirPressure', typ: u(undefined, r('MaximumAirPressure')) },
			{ json: 'maximumJawOpening', js: 'maximumJawOpening', typ: u(undefined, r('MaximumJawOpening')) },
			{ json: 'maximumWattsOut', js: 'maximumWattsOut', typ: u(undefined, r('MaximumWattsOut')) },
			{ json: 'modelNumber', js: 'modelNumber', typ: u(undefined, '') },
			{ json: 'msrp', js: 'msrp', typ: u(undefined, 3.14) },
			{ json: 'noLoadSpeed', js: 'noLoadSpeed', typ: u(undefined, r('NoLoadSpeed')) },
			{ json: 'numberOfBlades', js: 'numberOfBlades', typ: u(undefined, 0) },
			{ json: 'numberOfPoints', js: 'numberOfPoints', typ: u(undefined, 3.14) },
			{ json: 'numberOfSteps', js: 'numberOfSteps', typ: u(undefined, 3.14) },
			{ json: 'pieceCount', js: 'pieceCount', typ: u(undefined, 0) },
			{ json: 'powerType', js: 'powerType', typ: u(undefined, '') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: u(undefined, a('')) },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: '' },
			{ json: 'recommendedUses', js: 'recommendedUses', typ: u(undefined, a('')) },
			{ json: 'sandingBeltSize', js: 'sandingBeltSize', typ: u(undefined, '') },
			{ json: 'sandingSpeed', js: 'sandingSpeed', typ: u(undefined, r('SandingSpeed')) },
			{ json: 'shankSize', js: 'shankSize', typ: u(undefined, r('ShankSize')) },
			{ json: 'shape', js: 'shape', typ: u(undefined, '') },
			{ json: 'shortDescription', js: 'shortDescription', typ: '' },
			{ json: 'size', js: 'size', typ: u(undefined, '') },
			{ json: 'socketDepth', js: 'socketDepth', typ: u(undefined, '') },
			{ json: 'spindleThread', js: 'spindleThread', typ: u(undefined, '') },
			{ json: 'squareDriveSize', js: 'squareDriveSize', typ: u(undefined, '') },
			{ json: 'strokeLength', js: 'strokeLength', typ: u(undefined, r('StrokeLength')) },
			{ json: 'strokesPerMinute', js: 'strokesPerMinute', typ: u(undefined, '') },
			{ json: 'swatchImages', js: 'swatchImages', typ: u(undefined, a(r('ToolsSwatchImage'))) },
			{ json: 'tankConfiguration', js: 'tankConfiguration', typ: u(undefined, '') },
			{ json: 'teethPerInch', js: 'teethPerInch', typ: u(undefined, 0) },
			{ json: 'torque', js: 'torque', typ: u(undefined, '') },
			{
				json: 'variantAttributeNames',
				js: 'variantAttributeNames',
				typ: u(undefined, a(r('ToolsVariantAttributeName'))),
			},
			{ json: 'variantGroupId', js: 'variantGroupId', typ: u(undefined, '') },
			{ json: 'volts', js: 'volts', typ: u(undefined, a(r('ToolsVolt'))) },
			{ json: 'volumeCapacity', js: 'volumeCapacity', typ: u(undefined, r('ToolsVolumeCapacity')) },
			{ json: 'warrantyText', js: 'warrantyText', typ: u(undefined, '') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: u(undefined, '') },
		],
		false
	),
	ToolsAdditionalProductAttribute: o(
		[
			{ json: 'productAttributeName', js: 'productAttributeName', typ: '' },
			{ json: 'productAttributeValue', js: 'productAttributeValue', typ: '' },
		],
		false
	),
	AirInlet: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('ScreenSizeUnit')) },
		],
		false
	),
	ToolsAmps: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AmpsUnit')) },
		],
		false
	),
	ArborDiameter: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, '') },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('HeelHeightUnit')) },
		],
		false
	),
	ToolsAssembledProductHeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	ToolsAssembledProductLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	ToolsAssembledProductWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductWeightUnit')) },
		],
		false
	),
	ToolsAssembledProductWidth: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	AverageAirConsumptionAt90PSI: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AverageAirConsumptionAt90PSIUnit')) },
		],
		false
	),
	BatteryCapacity: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('BatteryCapacityUnit')) },
		],
		false
	),
	BladeDiameter: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('ScreenSizeUnit')) },
		],
		false
	),
	BladeLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('ScreenSizeUnit')) },
		],
		false
	),
	ToolsBladeWidth: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('CarSeatBaseDepthUnit')) },
		],
		false
	),
	CfmAt40Psi: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AverageAirConsumptionAt90PSIUnit')) },
		],
		false
	),
	CfmAt90Psi: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AverageAirConsumptionAt90PSIUnit')) },
		],
		false
	),
	ChuckSize: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, '') },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('ScreenSizeUnit')) },
		],
		false
	),
	ColletSize: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, '') },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('HeelHeightUnit')) },
		],
		false
	),
	ToolsCordLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	ToolsDecibelRating: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('DecibelRatingUnit')) },
		],
		false
	),
	DiscSize: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('ScreenSizeUnit')) },
		],
		false
	),
	ToolsEngineDisplacement: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('EngineDisplacementUnit')) },
		],
		false
	),
	ToolsHorsepower: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('HorsepowerUnit')) },
		],
		false
	),
	ImpactEnergy: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('ImpactEnergyUnit')) },
		],
		false
	),
	ToolsLoadCapacity: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('SnowLoadRatingUnit')) },
		],
		false
	),
	MaximumAirPressure: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('WorkingPressureUnit')) },
		],
		false
	),
	MaximumJawOpening: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('ScreenSizeUnit')) },
		],
		false
	),
	MaximumWattsOut: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 0) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('MaximumWattsOutUnit')) },
		],
		false
	),
	NoLoadSpeed: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 0) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('NoLoadSpeedUnit')) },
		],
		false
	),
	SandingSpeed: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 0) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('SandingSpeedUnit')) },
		],
		false
	),
	ShankSize: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('ScreenSizeUnit')) },
		],
		false
	),
	StrokeLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('ScreenSizeUnit')) },
		],
		false
	),
	ToolsSwatchImage: o(
		[
			{ json: 'swatchImageUrl', js: 'swatchImageUrl', typ: u(undefined, '') },
			{
				json: 'swatchVariantAttribute',
				js: 'swatchVariantAttribute',
				typ: u(undefined, r('ToolsVariantAttributeName')),
			},
		],
		false
	),
	ToolsVolt: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('VoltUnit')) },
		],
		false
	),
	ToolsVolumeCapacity: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('VolumeCapacityUnit')) },
		],
		false
	),
	ToolsHardwareOther: o(
		[
			{ json: 'accessoriesIncluded', js: 'accessoriesIncluded', typ: u(undefined, a('')) },
			{
				json: 'additionalProductAttributes',
				js: 'additionalProductAttributes',
				typ: u(undefined, a(r('ToolsHardwareOtherAdditionalProductAttribute'))),
			},
			{
				json: 'assembledProductHeight',
				js: 'assembledProductHeight',
				typ: u(undefined, r('ToolsHardwareOtherAssembledProductHeight')),
			},
			{
				json: 'assembledProductLength',
				js: 'assembledProductLength',
				typ: u(undefined, r('ToolsHardwareOtherAssembledProductLength')),
			},
			{
				json: 'assembledProductWeight',
				js: 'assembledProductWeight',
				typ: u(undefined, r('ToolsHardwareOtherAssembledProductWeight')),
			},
			{
				json: 'assembledProductWidth',
				js: 'assembledProductWidth',
				typ: u(undefined, r('ToolsHardwareOtherAssembledProductWidth')),
			},
			{ json: 'cleaningCareAndMaintenance', js: 'cleaningCareAndMaintenance', typ: u(undefined, '') },
			{ json: 'color', js: 'color', typ: u(undefined, a('')) },
			{ json: 'colorCategory', js: 'colorCategory', typ: u(undefined, a(r('ColorCategory'))) },
			{ json: 'count', js: 'count', typ: u(undefined, '') },
			{ json: 'countPerPack', js: 'countPerPack', typ: u(undefined, 0) },
			{ json: 'features', js: 'features', typ: u(undefined, a('')) },
			{ json: 'finish', js: 'finish', typ: u(undefined, '') },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: u(undefined, a('')) },
			{ json: 'isFireResistant', js: 'isFireResistant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isWaterproof', js: 'isWaterproof', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: u(undefined, a('')) },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: '' },
			{ json: 'manufacturer', js: 'manufacturer', typ: '' },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: u(undefined, '') },
			{ json: 'material', js: 'material', typ: u(undefined, a('')) },
			{ json: 'modelNumber', js: 'modelNumber', typ: u(undefined, '') },
			{ json: 'msrp', js: 'msrp', typ: u(undefined, 3.14) },
			{ json: 'pieceCount', js: 'pieceCount', typ: u(undefined, 0) },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: u(undefined, a('')) },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: '' },
			{ json: 'recommendedUses', js: 'recommendedUses', typ: u(undefined, a('')) },
			{ json: 'shape', js: 'shape', typ: u(undefined, '') },
			{ json: 'shortDescription', js: 'shortDescription', typ: '' },
			{ json: 'size', js: 'size', typ: u(undefined, '') },
			{ json: 'swatchImages', js: 'swatchImages', typ: u(undefined, a(r('ToolsHardwareOtherSwatchImage'))) },
			{
				json: 'variantAttributeNames',
				js: 'variantAttributeNames',
				typ: u(undefined, a(r('ToolsHardwareOtherVariantAttributeName'))),
			},
			{ json: 'variantGroupId', js: 'variantGroupId', typ: u(undefined, '') },
			{ json: 'warrantyText', js: 'warrantyText', typ: u(undefined, '') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: u(undefined, '') },
		],
		false
	),
	ToolsHardwareOtherAdditionalProductAttribute: o(
		[
			{ json: 'productAttributeName', js: 'productAttributeName', typ: '' },
			{ json: 'productAttributeValue', js: 'productAttributeValue', typ: '' },
		],
		false
	),
	ToolsHardwareOtherAssembledProductHeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	ToolsHardwareOtherAssembledProductLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	ToolsHardwareOtherAssembledProductWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductWeightUnit')) },
		],
		false
	),
	ToolsHardwareOtherAssembledProductWidth: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	ToolsHardwareOtherSwatchImage: o(
		[
			{ json: 'swatchImageUrl', js: 'swatchImageUrl', typ: u(undefined, '') },
			{
				json: 'swatchVariantAttribute',
				js: 'swatchVariantAttribute',
				typ: u(undefined, r('SwatchVariantAttribute2')),
			},
		],
		false
	),
	Toys: o(
		[
			{ json: 'activity', js: 'activity', typ: u(undefined, a('')) },
			{
				json: 'additionalProductAttributes',
				js: 'additionalProductAttributes',
				typ: u(undefined, a(r('ToysAdditionalProductAttribute'))),
			},
			{ json: 'ageGroup', js: 'ageGroup', typ: u(undefined, a(r('ArtCraftAgeGroup'))) },
			{ json: 'animalType', js: 'animalType', typ: u(undefined, '') },
			{
				json: 'assembledProductHeight',
				js: 'assembledProductHeight',
				typ: u(undefined, r('ToysAssembledProductHeight')),
			},
			{
				json: 'assembledProductLength',
				js: 'assembledProductLength',
				typ: u(undefined, r('ToysAssembledProductLength')),
			},
			{
				json: 'assembledProductWeight',
				js: 'assembledProductWeight',
				typ: u(undefined, r('ToysAssembledProductWeight')),
			},
			{
				json: 'assembledProductWidth',
				js: 'assembledProductWidth',
				typ: u(undefined, r('ToysAssembledProductWidth')),
			},
			{ json: 'assemblyInstructions', js: 'assemblyInstructions', typ: u(undefined, '') },
			{ json: 'athlete', js: 'athlete', typ: u(undefined, a('')) },
			{ json: 'awardsWon', js: 'awardsWon', typ: u(undefined, a('')) },
			{ json: 'capacity', js: 'capacity', typ: u(undefined, '') },
			{ json: 'character', js: 'character', typ: u(undefined, a('')) },
			{ json: 'color', js: 'color', typ: u(undefined, a('')) },
			{ json: 'colorCategory', js: 'colorCategory', typ: u(undefined, a(r('ColorCategory'))) },
			{
				json: 'compositeWoodCertificationCode',
				js: 'compositeWoodCertificationCode',
				typ: r('CompositeWoodCertificationCode'),
			},
			{ json: 'count', js: 'count', typ: u(undefined, '') },
			{ json: 'countPerPack', js: 'countPerPack', typ: u(undefined, 0) },
			{ json: 'countryOfOriginTextiles', js: 'countryOfOriginTextiles', typ: r('CountryOfOriginTextiles') },
			{ json: 'displayTechnology', js: 'displayTechnology', typ: u(undefined, '') },
			{ json: 'educationalFocus', js: 'educationalFocus', typ: u(undefined, a('')) },
			{ json: 'fabricCareInstructions', js: 'fabricCareInstructions', typ: u(undefined, a('')) },
			{ json: 'fabricContent', js: 'fabricContent', typ: u(undefined, a(r('ToysFabricContent'))) },
			{ json: 'features', js: 'features', typ: u(undefined, a('')) },
			{ json: 'fillMaterial', js: 'fillMaterial', typ: u(undefined, a('')) },
			{ json: 'finish', js: 'finish', typ: u(undefined, '') },
			{ json: 'flavor', js: 'flavor', typ: u(undefined, '') },
			{ json: 'gender', js: 'gender', typ: u(undefined, r('ArtCraftGender')) },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: u(undefined, a('')) },
			{ json: 'hairColorCategory', js: 'hairColorCategory', typ: u(undefined, r('HairColorCategory')) },
			{ json: 'inflexKitComponent', js: 'inflexKitComponent', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'ingredients', js: 'ingredients', typ: u(undefined, '') },
			{ json: 'isAssemblyRequired', js: 'isAssemblyRequired', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isInflatable', js: 'isInflatable', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPowered', js: 'isPowered', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isTravelSize', js: 'isTravelSize', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: u(undefined, a('')) },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: '' },
			{ json: 'makesNoise', js: 'makesNoise', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'manufacturer', js: 'manufacturer', typ: '' },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: u(undefined, '') },
			{ json: 'material', js: 'material', typ: u(undefined, a('')) },
			{
				json: 'maximumRecommendedAge',
				js: 'maximumRecommendedAge',
				typ: u(undefined, r('ToysMaximumRecommendedAge')),
			},
			{ json: 'maximumSpeed', js: 'maximumSpeed', typ: u(undefined, r('MaximumSpeed')) },
			{ json: 'maximumWeight', js: 'maximumWeight', typ: u(undefined, r('ToysMaximumWeight')) },
			{
				json: 'minimumRecommendedAge',
				js: 'minimumRecommendedAge',
				typ: u(undefined, r('ToysMinimumRecommendedAge')),
			},
			{ json: 'minimumWeight', js: 'minimumWeight', typ: u(undefined, r('ToysMinimumWeight')) },
			{ json: 'modelNumber', js: 'modelNumber', typ: u(undefined, '') },
			{ json: 'msrp', js: 'msrp', typ: u(undefined, 3.14) },
			{ json: 'numberOfPlayers', js: 'numberOfPlayers', typ: u(undefined, r('NumberOfPlayers')) },
			{ json: 'occasion', js: 'occasion', typ: u(undefined, a('')) },
			{ json: 'pieceCount', js: 'pieceCount', typ: u(undefined, 0) },
			{ json: 'powerType', js: 'powerType', typ: u(undefined, '') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: u(undefined, a('')) },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: '' },
			{ json: 'screenSize', js: 'screenSize', typ: u(undefined, r('ToysScreenSize')) },
			{ json: 'seatingCapacity', js: 'seatingCapacity', typ: u(undefined, 0) },
			{ json: 'shape', js: 'shape', typ: u(undefined, '') },
			{ json: 'shortDescription', js: 'shortDescription', typ: '' },
			{ json: 'size', js: 'size', typ: u(undefined, '') },
			{ json: 'skillLevel', js: 'skillLevel', typ: u(undefined, '') },
			{ json: 'skinTone', js: 'skinTone', typ: u(undefined, '') },
			{ json: 'smallPartsWarnings', js: 'smallPartsWarnings', typ: a(r('SmallPartsWarningCode')) },
			{ json: 'sport', js: 'sport', typ: u(undefined, a('')) },
			{ json: 'sportsLeague', js: 'sportsLeague', typ: u(undefined, a('')) },
			{ json: 'sportsTeam', js: 'sportsTeam', typ: u(undefined, a('')) },
			{ json: 'swatchImages', js: 'swatchImages', typ: u(undefined, a(r('ToysSwatchImage'))) },
			{ json: 'targetAudience', js: 'targetAudience', typ: u(undefined, a('')) },
			{ json: 'theme', js: 'theme', typ: u(undefined, a('')) },
			{
				json: 'variantAttributeNames',
				js: 'variantAttributeNames',
				typ: u(undefined, a(r('ToysVariantAttributeName'))),
			},
			{ json: 'variantGroupId', js: 'variantGroupId', typ: u(undefined, '') },
			{ json: 'vehicleType', js: 'vehicleType', typ: u(undefined, '') },
			{ json: 'warrantyText', js: 'warrantyText', typ: u(undefined, '') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: u(undefined, '') },
		],
		false
	),
	ToysAdditionalProductAttribute: o(
		[
			{ json: 'productAttributeName', js: 'productAttributeName', typ: '' },
			{ json: 'productAttributeValue', js: 'productAttributeValue', typ: '' },
		],
		false
	),
	ToysAssembledProductHeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	ToysAssembledProductLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	ToysAssembledProductWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductWeightUnit')) },
		],
		false
	),
	ToysAssembledProductWidth: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	ToysFabricContent: o(
		[
			{ json: 'materialName', js: 'materialName', typ: u(undefined, '') },
			{ json: 'materialPercentage', js: 'materialPercentage', typ: u(undefined, 3.14) },
		],
		false
	),
	ToysMaximumRecommendedAge: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 0) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('MaximumRecommendedAgeUnit')) },
		],
		false
	),
	MaximumSpeed: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 0) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('MaximumSpeedUnit')) },
		],
		false
	),
	ToysMaximumWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('PurpleUnit')) },
		],
		false
	),
	ToysMinimumRecommendedAge: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 0) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('MaximumRecommendedAgeUnit')) },
		],
		false
	),
	ToysMinimumWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductWeightUnit')) },
		],
		false
	),
	NumberOfPlayers: o(
		[
			{ json: 'maximumNumberOfPlayers', js: 'maximumNumberOfPlayers', typ: u(undefined, 0) },
			{ json: 'minimumNumberOfPlayers', js: 'minimumNumberOfPlayers', typ: u(undefined, 0) },
		],
		false
	),
	ToysScreenSize: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('ScreenSizeUnit')) },
		],
		false
	),
	ToysSwatchImage: o(
		[
			{ json: 'swatchImageUrl', js: 'swatchImageUrl', typ: u(undefined, '') },
			{
				json: 'swatchVariantAttribute',
				js: 'swatchVariantAttribute',
				typ: u(undefined, r('ToysVariantAttributeName')),
			},
		],
		false
	),
	VehicleOther: o(
		[
			{ json: 'aaiaBrandID', js: 'aaiaBrandID', typ: u(undefined, a('')) },
			{
				json: 'additionalProductAttributes',
				js: 'additionalProductAttributes',
				typ: u(undefined, a(r('VehicleOtherAdditionalProductAttribute'))),
			},
			{
				json: 'assembledProductHeight',
				js: 'assembledProductHeight',
				typ: u(undefined, r('VehicleOtherAssembledProductHeight')),
			},
			{
				json: 'assembledProductLength',
				js: 'assembledProductLength',
				typ: u(undefined, r('VehicleOtherAssembledProductLength')),
			},
			{
				json: 'assembledProductWeight',
				js: 'assembledProductWeight',
				typ: u(undefined, r('VehicleOtherAssembledProductWeight')),
			},
			{
				json: 'assembledProductWidth',
				js: 'assembledProductWidth',
				typ: u(undefined, r('VehicleOtherAssembledProductWidth')),
			},
			{ json: 'athlete', js: 'athlete', typ: u(undefined, a('')) },
			{ json: 'autographedBy', js: 'autographedBy', typ: u(undefined, '') },
			{ json: 'color', js: 'color', typ: u(undefined, a('')) },
			{ json: 'count', js: 'count', typ: u(undefined, '') },
			{ json: 'countPerPack', js: 'countPerPack', typ: u(undefined, 0) },
			{ json: 'countryOfOriginTextiles', js: 'countryOfOriginTextiles', typ: r('CountryOfOriginTextiles') },
			{ json: 'fabricContent', js: 'fabricContent', typ: u(undefined, a(r('VehicleOtherFabricContent'))) },
			{ json: 'features', js: 'features', typ: u(undefined, a('')) },
			{ json: 'finish', js: 'finish', typ: u(undefined, '') },
			{ json: 'inflexKitComponent', js: 'inflexKitComponent', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: u(undefined, a('')) },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: '' },
			{ json: 'manufacturer', js: 'manufacturer', typ: '' },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: u(undefined, '') },
			{ json: 'modelNumber', js: 'modelNumber', typ: u(undefined, '') },
			{ json: 'msrp', js: 'msrp', typ: u(undefined, 3.14) },
			{ json: 'partTerminologyID', js: 'partTerminologyID', typ: u(undefined, a('')) },
			{ json: 'pieceCount', js: 'pieceCount', typ: u(undefined, 0) },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: u(undefined, a('')) },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: '' },
			{ json: 'shape', js: 'shape', typ: u(undefined, '') },
			{ json: 'shortDescription', js: 'shortDescription', typ: '' },
			{ json: 'size', js: 'size', typ: u(undefined, '') },
			{ json: 'sportsLeague', js: 'sportsLeague', typ: u(undefined, a('')) },
			{ json: 'sportsTeam', js: 'sportsTeam', typ: u(undefined, a('')) },
			{ json: 'swatchImages', js: 'swatchImages', typ: u(undefined, a(r('VehicleOtherSwatchImage'))) },
			{
				json: 'variantAttributeNames',
				js: 'variantAttributeNames',
				typ: u(undefined, a(r('VehicleOtherVariantAttributeName'))),
			},
			{ json: 'variantGroupId', js: 'variantGroupId', typ: u(undefined, '') },
			{ json: 'vehicleType', js: 'vehicleType', typ: u(undefined, '') },
			{ json: 'warrantyText', js: 'warrantyText', typ: u(undefined, '') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: u(undefined, '') },
		],
		false
	),
	VehicleOtherAdditionalProductAttribute: o(
		[
			{ json: 'productAttributeName', js: 'productAttributeName', typ: '' },
			{ json: 'productAttributeValue', js: 'productAttributeValue', typ: '' },
		],
		false
	),
	VehicleOtherAssembledProductHeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	VehicleOtherAssembledProductLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	VehicleOtherAssembledProductWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductWeightUnit')) },
		],
		false
	),
	VehicleOtherAssembledProductWidth: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	VehicleOtherFabricContent: o(
		[
			{ json: 'materialName', js: 'materialName', typ: u(undefined, '') },
			{ json: 'materialPercentage', js: 'materialPercentage', typ: u(undefined, 3.14) },
		],
		false
	),
	VehicleOtherSwatchImage: o(
		[
			{ json: 'swatchImageUrl', js: 'swatchImageUrl', typ: u(undefined, '') },
			{
				json: 'swatchVariantAttribute',
				js: 'swatchVariantAttribute',
				typ: u(undefined, r('SwatchVariantAttribute3')),
			},
		],
		false
	),
	VehiclePartsAccessories: o(
		[
			{ json: 'aaiaBrandID', js: 'aaiaBrandID', typ: u(undefined, a('')) },
			{
				json: 'additionalProductAttributes',
				js: 'additionalProductAttributes',
				typ: u(undefined, a(r('VehiclePartsAccessoriesAdditionalProductAttribute'))),
			},
			{ json: 'amps', js: 'amps', typ: u(undefined, r('VehiclePartsAccessoriesAmps')) },
			{
				json: 'assembledProductHeight',
				js: 'assembledProductHeight',
				typ: u(undefined, r('VehiclePartsAccessoriesAssembledProductHeight')),
			},
			{
				json: 'assembledProductLength',
				js: 'assembledProductLength',
				typ: u(undefined, r('VehiclePartsAccessoriesAssembledProductLength')),
			},
			{
				json: 'assembledProductWeight',
				js: 'assembledProductWeight',
				typ: u(undefined, r('VehiclePartsAccessoriesAssembledProductWeight')),
			},
			{
				json: 'assembledProductWidth',
				js: 'assembledProductWidth',
				typ: u(undefined, r('VehiclePartsAccessoriesAssembledProductWidth')),
			},
			{ json: 'athlete', js: 'athlete', typ: u(undefined, a('')) },
			{ json: 'audioPowerOutput', js: 'audioPowerOutput', typ: u(undefined, '') },
			{ json: 'autographedBy', js: 'autographedBy', typ: u(undefined, '') },
			{
				json: 'automotivePartsDivision',
				js: 'automotivePartsDivision',
				typ: u(undefined, a(r('AutomotivePartsDivision'))),
			},
			{ json: 'beamAngle', js: 'beamAngle', typ: u(undefined, r('VehiclePartsAccessoriesBeamAngle')) },
			{ json: 'beamSpread', js: 'beamSpread', typ: u(undefined, r('VehiclePartsAccessoriesBeamSpread')) },
			{ json: 'breakingStrength', js: 'breakingStrength', typ: u(undefined, r('BreakingStrength')) },
			{ json: 'cableLength', js: 'cableLength', typ: u(undefined, r('VehiclePartsAccessoriesCableLength')) },
			{ json: 'candlePower', js: 'candlePower', typ: u(undefined, '') },
			{ json: 'carSpeakerSizeClass', js: 'carSpeakerSizeClass', typ: u(undefined, a('')) },
			{ json: 'carSpeakerType', js: 'carSpeakerType', typ: u(undefined, a('')) },
			{ json: 'chainLength', js: 'chainLength', typ: u(undefined, r('VehiclePartsAccessoriesChainLength')) },
			{ json: 'coldCrankAmp', js: 'coldCrankAmp', typ: u(undefined, 0) },
			{ json: 'color', js: 'color', typ: u(undefined, a('')) },
			{ json: 'compatibleBrands', js: 'compatibleBrands', typ: u(undefined, a('')) },
			{ json: 'compatibleCars', js: 'compatibleCars', typ: u(undefined, '') },
			{ json: 'compatibleDevices', js: 'compatibleDevices', typ: u(undefined, a('')) },
			{
				json: 'compositeWoodCertificationCode',
				js: 'compositeWoodCertificationCode',
				typ: r('CompositeWoodCertificationCode'),
			},
			{ json: 'connections', js: 'connections', typ: u(undefined, a('')) },
			{ json: 'count', js: 'count', typ: u(undefined, '') },
			{ json: 'countPerPack', js: 'countPerPack', typ: u(undefined, 0) },
			{ json: 'dinSize', js: 'dinSize', typ: u(undefined, a('')) },
			{ json: 'displayResolution', js: 'displayResolution', typ: u(undefined, a('')) },
			{ json: 'displayTechnology', js: 'displayTechnology', typ: u(undefined, '') },
			{ json: 'dropDistance', js: 'dropDistance', typ: u(undefined, '') },
			{ json: 'fabricCareInstructions', js: 'fabricCareInstructions', typ: u(undefined, a('')) },
			{
				json: 'fabricContent',
				js: 'fabricContent',
				typ: u(undefined, a(r('VehiclePartsAccessoriesFabricContent'))),
			},
			{ json: 'fastenerHeadType', js: 'fastenerHeadType', typ: u(undefined, '') },
			{ json: 'features', js: 'features', typ: u(undefined, a('')) },
			{ json: 'fillMaterial', js: 'fillMaterial', typ: u(undefined, a('')) },
			{ json: 'filterLife', js: 'filterLife', typ: u(undefined, '') },
			{ json: 'finish', js: 'finish', typ: u(undefined, '') },
			{ json: 'flashPoint', js: 'flashPoint', typ: u(undefined, '') },
			{ json: 'fluidOunces', js: 'fluidOunces', typ: u(undefined, r('VehiclePartsAccessoriesFluidOunces')) },
			{ json: 'form', js: 'form', typ: u(undefined, '') },
			{ json: 'fuelType', js: 'fuelType', typ: u(undefined, '') },
			{ json: 'hitchClass', js: 'hitchClass', typ: u(undefined, '') },
			{ json: 'horsepower', js: 'horsepower', typ: u(undefined, r('VehiclePartsAccessoriesHorsepower')) },
			{ json: 'impedance', js: 'impedance', typ: u(undefined, r('VehiclePartsAccessoriesImpedance')) },
			{ json: 'inDashSystem', js: 'inDashSystem', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'interfaceType', js: 'interfaceType', typ: u(undefined, a('')) },
			{ json: 'isLockable', js: 'isLockable', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPowered', js: 'isPowered', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isReusable', js: 'isReusable', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: u(undefined, a('')) },
			{ json: 'lightBulbType', js: 'lightBulbType', typ: u(undefined, '') },
			{ json: 'loadCapacity', js: 'loadCapacity', typ: u(undefined, r('VehiclePartsAccessoriesLoadCapacity')) },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: '' },
			{ json: 'manufacturer', js: 'manufacturer', typ: '' },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: u(undefined, '') },
			{ json: 'maximumMotorSpeed', js: 'maximumMotorSpeed', typ: u(undefined, r('MaximumMotorSpeed')) },
			{
				json: 'maximumTemperature',
				js: 'maximumTemperature',
				typ: u(undefined, r('VehiclePartsAccessoriesMaximumTemperature')),
			},
			{ json: 'modelNumber', js: 'modelNumber', typ: u(undefined, '') },
			{ json: 'motorOilViscosity', js: 'motorOilViscosity', typ: u(undefined, '') },
			{ json: 'msrp', js: 'msrp', typ: u(undefined, 3.14) },
			{ json: 'numberOfChannels', js: 'numberOfChannels', typ: u(undefined, '') },
			{ json: 'numberOfOutlets', js: 'numberOfOutlets', typ: u(undefined, 0) },
			{ json: 'partTerminologyID', js: 'partTerminologyID', typ: u(undefined, a('')) },
			{ json: 'pieceCount', js: 'pieceCount', typ: u(undefined, 0) },
			{ json: 'powerType', js: 'powerType', typ: u(undefined, '') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: u(undefined, a('')) },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: '' },
			{
				json: 'receiverCompatibility',
				js: 'receiverCompatibility',
				typ: u(undefined, r('ReceiverCompatibility')),
			},
			{ json: 'reserveCapacity', js: 'reserveCapacity', typ: u(undefined, r('ReserveCapacity')) },
			{ json: 'saeDotCompliant', js: 'saeDotCompliant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'shackleClearance', js: 'shackleClearance', typ: u(undefined, r('ShackleClearance')) },
			{ json: 'shackleDiameter', js: 'shackleDiameter', typ: u(undefined, r('ShackleDiameter')) },
			{ json: 'shackleLength', js: 'shackleLength', typ: u(undefined, r('ShackleLength')) },
			{ json: 'shankLength', js: 'shankLength', typ: u(undefined, r('ShankLength')) },
			{ json: 'shape', js: 'shape', typ: u(undefined, '') },
			{ json: 'shearStrength', js: 'shearStrength', typ: u(undefined, r('ShearStrength')) },
			{ json: 'shortDescription', js: 'shortDescription', typ: '' },
			{ json: 'size', js: 'size', typ: u(undefined, '') },
			{ json: 'sportsLeague', js: 'sportsLeague', typ: u(undefined, a('')) },
			{ json: 'sportsTeam', js: 'sportsTeam', typ: u(undefined, a('')) },
			{ json: 'swatchImages', js: 'swatchImages', typ: u(undefined, a(r('VehiclePartsAccessoriesSwatchImage'))) },
			{ json: 'unitsPerConsumerUnit', js: 'unitsPerConsumerUnit', typ: u(undefined, 0) },
			{
				json: 'variantAttributeNames',
				js: 'variantAttributeNames',
				typ: u(undefined, a(r('VehiclePartsAccessoriesVariantAttributeName'))),
			},
			{ json: 'variantGroupId', js: 'variantGroupId', typ: u(undefined, '') },
			{ json: 'vehicleMake', js: 'vehicleMake', typ: u(undefined, '') },
			{ json: 'vehicleModel', js: 'vehicleModel', typ: u(undefined, '') },
			{ json: 'vehicleType', js: 'vehicleType', typ: u(undefined, '') },
			{ json: 'vehicleYear', js: 'vehicleYear', typ: u(undefined, 0) },
			{ json: 'warrantyText', js: 'warrantyText', typ: u(undefined, '') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: u(undefined, '') },
		],
		false
	),
	VehiclePartsAccessoriesAdditionalProductAttribute: o(
		[
			{ json: 'productAttributeName', js: 'productAttributeName', typ: '' },
			{ json: 'productAttributeValue', js: 'productAttributeValue', typ: '' },
		],
		false
	),
	VehiclePartsAccessoriesAmps: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AmpsUnit')) },
		],
		false
	),
	VehiclePartsAccessoriesAssembledProductHeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	VehiclePartsAccessoriesAssembledProductLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	VehiclePartsAccessoriesAssembledProductWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductWeightUnit')) },
		],
		false
	),
	VehiclePartsAccessoriesAssembledProductWidth: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	VehiclePartsAccessoriesBeamAngle: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 0) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('BeamAngleUnit')) },
		],
		false
	),
	VehiclePartsAccessoriesBeamSpread: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('BeamSpreadUnit')) },
		],
		false
	),
	BreakingStrength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('MaximumLoadWeightUnit')) },
		],
		false
	),
	VehiclePartsAccessoriesCableLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('CableLengthUnit')) },
		],
		false
	),
	VehiclePartsAccessoriesChainLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	VehiclePartsAccessoriesFabricContent: o(
		[
			{ json: 'materialName', js: 'materialName', typ: u(undefined, '') },
			{ json: 'materialPercentage', js: 'materialPercentage', typ: u(undefined, 3.14) },
		],
		false
	),
	VehiclePartsAccessoriesFluidOunces: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('FluidOuncesSupplying100CaloriesUnit')) },
		],
		false
	),
	VehiclePartsAccessoriesHorsepower: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('HorsepowerUnit')) },
		],
		false
	),
	VehiclePartsAccessoriesImpedance: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, '') },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('ImpedanceUnit')) },
		],
		false
	),
	VehiclePartsAccessoriesLoadCapacity: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('SnowLoadRatingUnit')) },
		],
		false
	),
	MaximumMotorSpeed: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('NoLoadSpeedUnit')) },
		],
		false
	),
	VehiclePartsAccessoriesMaximumTemperature: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('MaximumTemperatureUnit')) },
		],
		false
	),
	ReceiverCompatibility: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('ScreenSizeUnit')) },
		],
		false
	),
	ReserveCapacity: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 0) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('DurationUnit')) },
		],
		false
	),
	ShackleClearance: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('ScreenSizeUnit')) },
		],
		false
	),
	ShackleDiameter: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('ScreenSizeUnit')) },
		],
		false
	),
	ShackleLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('ScreenSizeUnit')) },
		],
		false
	),
	ShankLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('ScreenSizeUnit')) },
		],
		false
	),
	ShearStrength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('MaximumLoadWeightUnit')) },
		],
		false
	),
	VehiclePartsAccessoriesSwatchImage: o(
		[
			{ json: 'swatchImageUrl', js: 'swatchImageUrl', typ: u(undefined, '') },
			{
				json: 'swatchVariantAttribute',
				js: 'swatchVariantAttribute',
				typ: u(undefined, r('VehiclePartsAccessoriesVariantAttributeName')),
			},
		],
		false
	),
	VideoGames: o(
		[
			{
				json: 'additionalProductAttributes',
				js: 'additionalProductAttributes',
				typ: u(undefined, a(r('VideoGamesAdditionalProductAttribute'))),
			},
			{ json: 'ageGroup', js: 'ageGroup', typ: u(undefined, a(r('ArtCraftAgeGroup'))) },
			{ json: 'athlete', js: 'athlete', typ: u(undefined, a('')) },
			{ json: 'autographedBy', js: 'autographedBy', typ: u(undefined, '') },
			{ json: 'count', js: 'count', typ: u(undefined, '') },
			{ json: 'countPerPack', js: 'countPerPack', typ: u(undefined, 0) },
			{ json: 'edition', js: 'edition', typ: u(undefined, '') },
			{ json: 'esrbRating', js: 'esrbRating', typ: r('ESRBRating') },
			{ json: 'features', js: 'features', typ: u(undefined, a('')) },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: u(undefined, a('')) },
			{
				json: 'isDownloadableContentAvailable',
				js: 'isDownloadableContentAvailable',
				typ: u(undefined, r('MustShipAlone')),
			},
			{
				json: 'isOnlineMultiplayerAvailable',
				js: 'isOnlineMultiplayerAvailable',
				typ: u(undefined, r('MustShipAlone')),
			},
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: u(undefined, a('')) },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: '' },
			{ json: 'manufacturer', js: 'manufacturer', typ: '' },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: u(undefined, '') },
			{ json: 'modelNumber', js: 'modelNumber', typ: u(undefined, '') },
			{ json: 'mountType', js: 'mountType', typ: u(undefined, a('')) },
			{ json: 'msrp', js: 'msrp', typ: u(undefined, 3.14) },
			{ json: 'numberOfChannels', js: 'numberOfChannels', typ: u(undefined, '') },
			{
				json: 'physicalMediaFormat',
				js: 'physicalMediaFormat',
				typ: u(undefined, a(r('VideoGamesPhysicalMediaFormat'))),
			},
			{ json: 'platform', js: 'platform', typ: u(undefined, '') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: u(undefined, a('')) },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: '' },
			{ json: 'ratingReason', js: 'ratingReason', typ: u(undefined, '') },
			{ json: 'releaseDate', js: 'releaseDate', typ: u(undefined, Date) },
			{ json: 'requiredPeripherals', js: 'requiredPeripherals', typ: u(undefined, '') },
			{ json: 'shortDescription', js: 'shortDescription', typ: '' },
			{ json: 'sport', js: 'sport', typ: u(undefined, a('')) },
			{ json: 'sportsLeague', js: 'sportsLeague', typ: u(undefined, a('')) },
			{ json: 'sportsTeam', js: 'sportsTeam', typ: u(undefined, a('')) },
			{ json: 'swatchImages', js: 'swatchImages', typ: u(undefined, a(r('VideoGamesSwatchImage'))) },
			{ json: 'targetAudience', js: 'targetAudience', typ: u(undefined, a('')) },
			{
				json: 'variantAttributeNames',
				js: 'variantAttributeNames',
				typ: u(undefined, a(r('VideoGamesVariantAttributeName'))),
			},
			{ json: 'variantGroupId', js: 'variantGroupId', typ: u(undefined, '') },
			{ json: 'videoGameCollection', js: 'videoGameCollection', typ: u(undefined, '') },
			{ json: 'videoGameGenre', js: 'videoGameGenre', typ: u(undefined, a(r('VideoGameGenre'))) },
		],
		false
	),
	VideoGamesAdditionalProductAttribute: o(
		[
			{ json: 'productAttributeName', js: 'productAttributeName', typ: '' },
			{ json: 'productAttributeValue', js: 'productAttributeValue', typ: '' },
		],
		false
	),
	VideoGamesSwatchImage: o(
		[
			{ json: 'swatchImageUrl', js: 'swatchImageUrl', typ: u(undefined, '') },
			{
				json: 'swatchVariantAttribute',
				js: 'swatchVariantAttribute',
				typ: u(undefined, r('VideoGamesVariantAttributeName')),
			},
		],
		false
	),
	VideoProjectors: o(
		[
			{
				json: 'additionalProductAttributes',
				js: 'additionalProductAttributes',
				typ: u(undefined, a(r('VideoProjectorsAdditionalProductAttribute'))),
			},
			{ json: 'aspectRatio', js: 'aspectRatio', typ: u(undefined, '') },
			{
				json: 'assembledProductHeight',
				js: 'assembledProductHeight',
				typ: u(undefined, r('VideoProjectorsAssembledProductHeight')),
			},
			{
				json: 'assembledProductLength',
				js: 'assembledProductLength',
				typ: u(undefined, r('VideoProjectorsAssembledProductLength')),
			},
			{
				json: 'assembledProductWeight',
				js: 'assembledProductWeight',
				typ: u(undefined, r('VideoProjectorsAssembledProductWeight')),
			},
			{
				json: 'assembledProductWidth',
				js: 'assembledProductWidth',
				typ: u(undefined, r('VideoProjectorsAssembledProductWidth')),
			},
			{ json: 'brightness', js: 'brightness', typ: u(undefined, r('VideoProjectorsBrightness')) },
			{ json: 'color', js: 'color', typ: u(undefined, a('')) },
			{ json: 'count', js: 'count', typ: u(undefined, '') },
			{ json: 'countPerPack', js: 'countPerPack', typ: u(undefined, 0) },
			{ json: 'displayTechnology', js: 'displayTechnology', typ: u(undefined, '') },
			{ json: 'features', js: 'features', typ: u(undefined, a('')) },
			{ json: 'has3dCapabilities', js: 'has3dCapabilities', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'hasIntegratedSpeakers', js: 'hasIntegratedSpeakers', typ: u(undefined, r('MustShipAlone')) },
			{
				json: 'inputsAndOutputs',
				js: 'inputsAndOutputs',
				typ: u(undefined, a(r('VideoProjectorsInputsAndOutput'))),
			},
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: u(undefined, a('')) },
			{ json: 'lampLife', js: 'lampLife', typ: u(undefined, r('LampLife')) },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: '' },
			{ json: 'manufacturer', js: 'manufacturer', typ: '' },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: u(undefined, '') },
			{ json: 'maximumContrastRatio', js: 'maximumContrastRatio', typ: u(undefined, '') },
			{ json: 'modelNumber', js: 'modelNumber', typ: u(undefined, '') },
			{ json: 'mountType', js: 'mountType', typ: u(undefined, a('')) },
			{ json: 'msrp', js: 'msrp', typ: u(undefined, 3.14) },
			{ json: 'nativeResolution', js: 'nativeResolution', typ: u(undefined, '') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: u(undefined, a('')) },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: '' },
			{ json: 'resolution', js: 'resolution', typ: u(undefined, '') },
			{ json: 'screenSize', js: 'screenSize', typ: u(undefined, r('VideoProjectorsScreenSize')) },
			{ json: 'shortDescription', js: 'shortDescription', typ: '' },
			{ json: 'size', js: 'size', typ: u(undefined, '') },
			{ json: 'swatchImages', js: 'swatchImages', typ: u(undefined, a(r('VideoProjectorsSwatchImage'))) },
			{ json: 'throwRatio', js: 'throwRatio', typ: u(undefined, '') },
			{
				json: 'variantAttributeNames',
				js: 'variantAttributeNames',
				typ: u(undefined, a(r('VideoProjectorsVariantAttributeName'))),
			},
			{ json: 'variantGroupId', js: 'variantGroupId', typ: u(undefined, '') },
			{ json: 'warrantyText', js: 'warrantyText', typ: u(undefined, '') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: u(undefined, '') },
			{ json: 'wirelessTechnologies', js: 'wirelessTechnologies', typ: u(undefined, a('')) },
		],
		false
	),
	VideoProjectorsAdditionalProductAttribute: o(
		[
			{ json: 'productAttributeName', js: 'productAttributeName', typ: '' },
			{ json: 'productAttributeValue', js: 'productAttributeValue', typ: '' },
		],
		false
	),
	VideoProjectorsAssembledProductHeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	VideoProjectorsAssembledProductLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	VideoProjectorsAssembledProductWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductWeightUnit')) },
		],
		false
	),
	VideoProjectorsAssembledProductWidth: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	VideoProjectorsBrightness: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('BrightnessUnit')) },
		],
		false
	),
	VideoProjectorsInputsAndOutput: o(
		[
			{ json: 'inputOutputQuantity', js: 'inputOutputQuantity', typ: u(undefined, 0) },
			{ json: 'inputOutputType', js: 'inputOutputType', typ: u(undefined, '') },
		],
		false
	),
	LampLife: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('StandbyTimeUnit')) },
		],
		false
	),
	VideoProjectorsScreenSize: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('ScreenSizeUnit')) },
		],
		false
	),
	VideoProjectorsSwatchImage: o(
		[
			{ json: 'swatchImageUrl', js: 'swatchImageUrl', typ: u(undefined, '') },
			{
				json: 'swatchVariantAttribute',
				js: 'swatchVariantAttribute',
				typ: u(undefined, r('SwatchVariantAttribute4')),
			},
		],
		false
	),
	Watches: o(
		[
			{ json: 'accentStone', js: 'accentStone', typ: u(undefined, a(r('AryStoneType'))) },
			{ json: 'activity', js: 'activity', typ: u(undefined, a('')) },
			{
				json: 'additionalProductAttributes',
				js: 'additionalProductAttributes',
				typ: u(undefined, a(r('WatchesAdditionalProductAttribute'))),
			},
			{ json: 'ageGroup', js: 'ageGroup', typ: u(undefined, a(r('ArtCraftAgeGroup'))) },
			{ json: 'bandWidth', js: 'bandWidth', typ: u(undefined, r('BandWidth')) },
			{ json: 'batteryLife', js: 'batteryLife', typ: u(undefined, r('WatchesBatteryLife')) },
			{ json: 'carats', js: 'carats', typ: u(undefined, r('WatchesCarats')) },
			{ json: 'character', js: 'character', typ: u(undefined, a('')) },
			{ json: 'claspType', js: 'claspType', typ: u(undefined, a(r('ClaspType'))) },
			{ json: 'clockNumberType', js: 'clockNumberType', typ: u(undefined, '') },
			{ json: 'clockWatchFaceColor', js: 'clockWatchFaceColor', typ: u(undefined, '') },
			{ json: 'color', js: 'color', typ: u(undefined, a('')) },
			{ json: 'colorCategory', js: 'colorCategory', typ: u(undefined, a(r('ColorCategory'))) },
			{ json: 'count', js: 'count', typ: u(undefined, '') },
			{ json: 'countPerPack', js: 'countPerPack', typ: u(undefined, 0) },
			{ json: 'features', js: 'features', typ: u(undefined, a('')) },
			{ json: 'gemstone', js: 'gemstone', typ: u(undefined, r('AryStoneType')) },
			{ json: 'gemstoneShape', js: 'gemstoneShape', typ: u(undefined, r('PrimaryStoneShape')) },
			{ json: 'gender', js: 'gender', typ: u(undefined, r('BabyClothingGender')) },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'isWaterResistant', js: 'isWaterResistant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: u(undefined, a('')) },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: '' },
			{ json: 'manufacturer', js: 'manufacturer', typ: '' },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: u(undefined, '') },
			{ json: 'material', js: 'material', typ: u(undefined, a('')) },
			{ json: 'metal', js: 'metal', typ: u(undefined, r('MetalType')) },
			{ json: 'metalPurity', js: 'metalPurity', typ: u(undefined, '') },
			{ json: 'modelNumber', js: 'modelNumber', typ: u(undefined, '') },
			{ json: 'msrp', js: 'msrp', typ: u(undefined, 3.14) },
			{ json: 'occasion', js: 'occasion', typ: u(undefined, a('')) },
			{ json: 'plating', js: 'plating', typ: u(undefined, '') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: u(undefined, a('')) },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: '' },
			{ json: 'seasonCode', js: 'seasonCode', typ: u(undefined, r('SeasonCode')) },
			{ json: 'seasonYear', js: 'seasonYear', typ: u(undefined, 0) },
			{ json: 'shortDescription', js: 'shortDescription', typ: '' },
			{ json: 'size', js: 'size', typ: u(undefined, '') },
			{ json: 'smallPartsWarnings', js: 'smallPartsWarnings', typ: a(r('SmallPartsWarningCode')) },
			{ json: 'sportsLeague', js: 'sportsLeague', typ: u(undefined, a('')) },
			{ json: 'sportsTeam', js: 'sportsTeam', typ: u(undefined, a('')) },
			{ json: 'swatchImages', js: 'swatchImages', typ: u(undefined, a(r('WatchesSwatchImage'))) },
			{ json: 'theme', js: 'theme', typ: u(undefined, a('')) },
			{ json: 'totalDiamondWeight', js: 'totalDiamondWeight', typ: u(undefined, r('WatchesTotalDiamondWeight')) },
			{
				json: 'variantAttributeNames',
				js: 'variantAttributeNames',
				typ: u(undefined, a(r('WatchesVariantAttributeName'))),
			},
			{ json: 'variantGroupId', js: 'variantGroupId', typ: u(undefined, '') },
			{ json: 'warrantyText', js: 'warrantyText', typ: u(undefined, '') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: u(undefined, '') },
			{ json: 'watchBandColor', js: 'watchBandColor', typ: u(undefined, '') },
			{ json: 'watchBandLength', js: 'watchBandLength', typ: u(undefined, r('WatchBandLength')) },
			{ json: 'watchBandMaterial', js: 'watchBandMaterial', typ: u(undefined, a(r('WatchBandMaterial'))) },
			{ json: 'watchBezelMaterial', js: 'watchBezelMaterial', typ: u(undefined, a('')) },
			{ json: 'watchCaseMaterial', js: 'watchCaseMaterial', typ: u(undefined, r('WatchCaseMaterial')) },
			{ json: 'watchCaseShape', js: 'watchCaseShape', typ: u(undefined, r('WatchFaceShape')) },
			{ json: 'watchCaseSize', js: 'watchCaseSize', typ: u(undefined, r('WatchCaseSize')) },
			{ json: 'watchCaseThickness', js: 'watchCaseThickness', typ: u(undefined, r('WatchCaseThickness')) },
			{ json: 'watchComplication', js: 'watchComplication', typ: u(undefined, '') },
			{
				json: 'watchCrystalMaterial',
				js: 'watchCrystalMaterial',
				typ: u(undefined, a(r('WatchCrystalMaterial'))),
			},
			{ json: 'watchMovement', js: 'watchMovement', typ: u(undefined, r('WatchMovement')) },
			{ json: 'watchMovementType', js: 'watchMovementType', typ: u(undefined, a(r('WatchMovementType'))) },
			{ json: 'watchStyle', js: 'watchStyle', typ: u(undefined, a('')) },
		],
		false
	),
	WatchesAdditionalProductAttribute: o(
		[
			{ json: 'productAttributeName', js: 'productAttributeName', typ: '' },
			{ json: 'productAttributeValue', js: 'productAttributeValue', typ: '' },
		],
		false
	),
	BandWidth: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('BootShaftCircumferenceUnit')) },
		],
		false
	),
	WatchesBatteryLife: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('StandbyTimeUnit')) },
		],
		false
	),
	WatchesCarats: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('CaratsUnit')) },
		],
		false
	),
	WatchesSwatchImage: o(
		[
			{ json: 'swatchImageUrl', js: 'swatchImageUrl', typ: u(undefined, '') },
			{ json: 'swatchVariantAttribute', js: 'swatchVariantAttribute', typ: u(undefined, '') },
		],
		false
	),
	WatchesTotalDiamondWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('CaratsUnit')) },
		],
		false
	),
	WatchBandLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('BootShaftCircumferenceUnit')) },
		],
		false
	),
	WatchCaseSize: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('HeelHeightUnit')) },
		],
		false
	),
	WatchCaseThickness: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, '') },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('BootShaftCircumferenceUnit')) },
		],
		false
	),
	Watercraft: o(
		[
			{
				json: 'additionalProductAttributes',
				js: 'additionalProductAttributes',
				typ: u(undefined, a(r('WatercraftAdditionalProductAttribute'))),
			},
			{ json: 'airDraft', js: 'airDraft', typ: u(undefined, r('AirDraft')) },
			{
				json: 'assembledProductHeight',
				js: 'assembledProductHeight',
				typ: u(undefined, r('WatercraftAssembledProductHeight')),
			},
			{
				json: 'assembledProductLength',
				js: 'assembledProductLength',
				typ: u(undefined, r('WatercraftAssembledProductLength')),
			},
			{
				json: 'assembledProductWeight',
				js: 'assembledProductWeight',
				typ: u(undefined, r('WatercraftAssembledProductWeight')),
			},
			{
				json: 'assembledProductWidth',
				js: 'assembledProductWidth',
				typ: u(undefined, r('WatercraftAssembledProductWidth')),
			},
			{ json: 'athlete', js: 'athlete', typ: u(undefined, a('')) },
			{
				json: 'averageFuelConsumption',
				js: 'averageFuelConsumption',
				typ: u(undefined, r('WatercraftAverageFuelConsumption')),
			},
			{ json: 'beam', js: 'beam', typ: u(undefined, r('Beam')) },
			{ json: 'boreStroke', js: 'boreStroke', typ: u(undefined, '') },
			{ json: 'color', js: 'color', typ: u(undefined, a('')) },
			{ json: 'compressionRatio', js: 'compressionRatio', typ: u(undefined, '') },
			{ json: 'coolingSystem', js: 'coolingSystem', typ: u(undefined, '') },
			{ json: 'draft', js: 'draft', typ: u(undefined, r('Draft')) },
			{ json: 'dryWeight', js: 'dryWeight', typ: u(undefined, r('DryWeight')) },
			{
				json: 'engineDisplacement',
				js: 'engineDisplacement',
				typ: u(undefined, r('WatercraftEngineDisplacement')),
			},
			{ json: 'engineLocation', js: 'engineLocation', typ: u(undefined, '') },
			{ json: 'engineModel', js: 'engineModel', typ: u(undefined, '') },
			{ json: 'features', js: 'features', typ: u(undefined, a('')) },
			{ json: 'fuelCapacity', js: 'fuelCapacity', typ: u(undefined, r('WatercraftFuelCapacity')) },
			{ json: 'fuelRequirement', js: 'fuelRequirement', typ: u(undefined, '') },
			{ json: 'fuelSystem', js: 'fuelSystem', typ: u(undefined, '') },
			{ json: 'hullLength', js: 'hullLength', typ: u(undefined, r('HullLength')) },
			{ json: 'impellerPropeller', js: 'impellerPropeller', typ: u(undefined, '') },
			{ json: 'inductionSystem', js: 'inductionSystem', typ: u(undefined, '') },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: u(undefined, a('')) },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: '' },
			{ json: 'manufacturer', js: 'manufacturer', typ: '' },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: u(undefined, '') },
			{
				json: 'maximumEnginePower',
				js: 'maximumEnginePower',
				typ: u(undefined, r('WatercraftMaximumEnginePower')),
			},
			{ json: 'modelNumber', js: 'modelNumber', typ: u(undefined, '') },
			{ json: 'msrp', js: 'msrp', typ: u(undefined, 3.14) },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: u(undefined, a('')) },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: '' },
			{ json: 'propulsionSystem', js: 'propulsionSystem', typ: u(undefined, '') },
			{ json: 'seatingCapacity', js: 'seatingCapacity', typ: u(undefined, 0) },
			{ json: 'shortDescription', js: 'shortDescription', typ: '' },
			{ json: 'size', js: 'size', typ: u(undefined, '') },
			{ json: 'sportsLeague', js: 'sportsLeague', typ: u(undefined, a('')) },
			{ json: 'submodel', js: 'submodel', typ: u(undefined, '') },
			{ json: 'swatchImages', js: 'swatchImages', typ: u(undefined, a(r('WatercraftSwatchImage'))) },
			{ json: 'thrust', js: 'thrust', typ: u(undefined, r('Thrust')) },
			{ json: 'topSpeed', js: 'topSpeed', typ: u(undefined, r('WatercraftTopSpeed')) },
			{
				json: 'variantAttributeNames',
				js: 'variantAttributeNames',
				typ: u(undefined, a(r('WatercraftVariantAttributeName'))),
			},
			{ json: 'variantGroupId', js: 'variantGroupId', typ: u(undefined, '') },
			{ json: 'vehicleMake', js: 'vehicleMake', typ: u(undefined, '') },
			{ json: 'vehicleModel', js: 'vehicleModel', typ: u(undefined, '') },
			{ json: 'vehicleType', js: 'vehicleType', typ: u(undefined, '') },
			{ json: 'vehicleYear', js: 'vehicleYear', typ: u(undefined, 0) },
			{ json: 'warrantyText', js: 'warrantyText', typ: u(undefined, '') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: u(undefined, '') },
			{ json: 'waterCapacity', js: 'waterCapacity', typ: u(undefined, r('WaterCapacity')) },
		],
		false
	),
	WatercraftAdditionalProductAttribute: o(
		[
			{ json: 'productAttributeName', js: 'productAttributeName', typ: '' },
			{ json: 'productAttributeValue', js: 'productAttributeValue', typ: '' },
		],
		false
	),
	AirDraft: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	WatercraftAssembledProductHeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	WatercraftAssembledProductLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	WatercraftAssembledProductWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductWeightUnit')) },
		],
		false
	),
	WatercraftAssembledProductWidth: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	WatercraftAverageFuelConsumption: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AverageFuelConsumptionUnit')) },
		],
		false
	),
	Beam: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	Draft: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	DryWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('MaximumLoadWeightUnit')) },
		],
		false
	),
	WatercraftEngineDisplacement: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('EngineDisplacementUnit')) },
		],
		false
	),
	WatercraftFuelCapacity: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('FuelCapacityUnit')) },
		],
		false
	),
	HullLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	WatercraftMaximumEnginePower: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('MaximumEnginePowerUnit')) },
		],
		false
	),
	WatercraftSwatchImage: o(
		[
			{ json: 'swatchImageUrl', js: 'swatchImageUrl', typ: u(undefined, '') },
			{
				json: 'swatchVariantAttribute',
				js: 'swatchVariantAttribute',
				typ: u(undefined, r('SwatchVariantAttribute5')),
			},
		],
		false
	),
	Thrust: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('MaximumLoadWeightUnit')) },
		],
		false
	),
	WatercraftTopSpeed: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('TopSpeedUnit')) },
		],
		false
	),
	WaterCapacity: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('FuelCapacityUnit')) },
		],
		false
	),
	WheelsWheelComponents: o(
		[
			{ json: 'aaiaBrandID', js: 'aaiaBrandID', typ: u(undefined, a('')) },
			{
				json: 'additionalProductAttributes',
				js: 'additionalProductAttributes',
				typ: u(undefined, a(r('WheelsWheelComponentsAdditionalProductAttribute'))),
			},
			{
				json: 'assembledProductHeight',
				js: 'assembledProductHeight',
				typ: u(undefined, r('WheelsWheelComponentsAssembledProductHeight')),
			},
			{
				json: 'assembledProductLength',
				js: 'assembledProductLength',
				typ: u(undefined, r('WheelsWheelComponentsAssembledProductLength')),
			},
			{
				json: 'assembledProductWeight',
				js: 'assembledProductWeight',
				typ: u(undefined, r('WheelsWheelComponentsAssembledProductWeight')),
			},
			{
				json: 'assembledProductWidth',
				js: 'assembledProductWidth',
				typ: u(undefined, r('WheelsWheelComponentsAssembledProductWidth')),
			},
			{ json: 'color', js: 'color', typ: u(undefined, a('')) },
			{ json: 'compatibleTireSize', js: 'compatibleTireSize', typ: u(undefined, '') },
			{ json: 'count', js: 'count', typ: u(undefined, '') },
			{ json: 'countPerPack', js: 'countPerPack', typ: u(undefined, 0) },
			{ json: 'diameter', js: 'diameter', typ: u(undefined, r('WheelsWheelComponentsDiameter')) },
			{ json: 'features', js: 'features', typ: u(undefined, a('')) },
			{ json: 'finish', js: 'finish', typ: u(undefined, '') },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: u(undefined, r('MustShipAlone')) },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: u(undefined, a('')) },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: '' },
			{ json: 'manufacturer', js: 'manufacturer', typ: '' },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: u(undefined, '') },
			{ json: 'material', js: 'material', typ: u(undefined, a('')) },
			{ json: 'modelNumber', js: 'modelNumber', typ: u(undefined, '') },
			{ json: 'msrp', js: 'msrp', typ: u(undefined, 3.14) },
			{ json: 'numberOfSpokes', js: 'numberOfSpokes', typ: u(undefined, 0) },
			{ json: 'partTerminologyID', js: 'partTerminologyID', typ: u(undefined, a('')) },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: u(undefined, a('')) },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: '' },
			{ json: 'shortDescription', js: 'shortDescription', typ: '' },
			{ json: 'swatchImages', js: 'swatchImages', typ: u(undefined, a(r('WheelsWheelComponentsSwatchImage'))) },
			{
				json: 'variantAttributeNames',
				js: 'variantAttributeNames',
				typ: u(undefined, a(r('WheelsWheelComponentsVariantAttributeName'))),
			},
			{ json: 'variantGroupId', js: 'variantGroupId', typ: u(undefined, '') },
			{ json: 'vehicleRimSize', js: 'vehicleRimSize', typ: u(undefined, '') },
			{ json: 'warrantyText', js: 'warrantyText', typ: u(undefined, '') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: u(undefined, '') },
		],
		false
	),
	WheelsWheelComponentsAdditionalProductAttribute: o(
		[
			{ json: 'productAttributeName', js: 'productAttributeName', typ: '' },
			{ json: 'productAttributeValue', js: 'productAttributeValue', typ: '' },
		],
		false
	),
	WheelsWheelComponentsAssembledProductHeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	WheelsWheelComponentsAssembledProductLength: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	WheelsWheelComponentsAssembledProductWeight: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductWeightUnit')) },
		],
		false
	),
	WheelsWheelComponentsAssembledProductWidth: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('AssembledProductHeightUnit')) },
		],
		false
	),
	WheelsWheelComponentsDiameter: o(
		[
			{ json: 'measure', js: 'measure', typ: u(undefined, 3.14) },
			{ json: 'unit', js: 'unit', typ: u(undefined, r('RoughInDistanceUnit')) },
		],
		false
	),
	WheelsWheelComponentsSwatchImage: o(
		[
			{ json: 'swatchImageUrl', js: 'swatchImageUrl', typ: u(undefined, '') },
			{
				json: 'swatchVariantAttribute',
				js: 'swatchVariantAttribute',
				typ: u(undefined, r('WheelsWheelComponentsVariantAttributeName')),
			},
		],
		false
	),
	MPItemFeedHeader: o(
		[
			{ json: 'feedDate', js: 'feedDate', typ: u(undefined, Date) },
			{ json: 'locale', js: 'locale', typ: r('Locale') },
			{ json: 'mart', js: 'mart', typ: u(undefined, r('Mart')) },
			{ json: 'processMode', js: 'processMode', typ: r('ProcessMode') },
			{ json: 'requestBatchId', js: 'requestBatchId', typ: u(undefined, '') },
			{ json: 'requestId', js: 'requestId', typ: u(undefined, '') },
			{ json: 'sellingChannel', js: 'sellingChannel', typ: r('SellingChannel') },
			{ json: 'subCategory', js: 'subCategory', typ: r('SubCategory') },
			{ json: 'subset', js: 'subset', typ: r('Subset') },
			{ json: 'version', js: 'version', typ: r('SpecVersion') },
		],
		false
	),
	MustShipAlone: ['No', 'Yes'],
	ContainedBatteryType: [
		'Alkaline',
		'Carbon Zinc',
		'Does Not Contain a Battery',
		'Lead Acid',
		'Lead Acid (Non-Spillable)',
		'Lithium Ion',
		'Lithium Primary (Lithium Metal)',
		'Magnesium',
		'Mercury',
		'Multiple Types',
		'Nickel Cadmium',
		'Nickel Metal Hydride',
		'Other',
		'Silver',
		'Thermal',
	],
	BatteryFormFactor: ['Battery', 'Button Cell', 'Cell'],
	IncludedBatteryPackaging: ['Contained In', 'Loose', 'Packed With'],
	ProductNetContentUnitEnum: [
		'Case',
		'Centiliter',
		'Centimeter',
		'Cubic Foot',
		'Each',
		'Fluid Ounces',
		'Foot',
		'Gallon',
		'Gram',
		'Inch',
		'Kilogram',
		'Liter',
		'Meter',
		'Milliliter',
		'Ounce',
		'Pallet/Unit Load',
		'Pint',
		'Pound',
		'Quart',
		'Quart Dry',
		'Square Foot',
		'Yard',
	],
	ProductIDType: ['EAN', 'GTIN', 'ISBN', 'UPC'],
	RestrictionType: ['Commercial', 'Illegal for Sale', 'None'],
	CountryOfOrigin: [
		'AD - Andorra',
		'AE - United Arab Emirates',
		'AF - Afghanistan',
		'AG - Antigua and Barbuda',
		'AI - Anguilla',
		'AL - Albania',
		'AM - Armenia',
		'AN - Netherlands Antilles',
		'AO - Angola',
		'AQ - Antarctica',
		'AR - Argentina',
		'AS - American Samoa',
		'AT - Austria',
		'AU - Australia',
		'AW - Aruba',
		'AX - Aland Islands',
		'AZ - Azerbaijan',
		'BA - Bosnia and Herzegovina',
		'BB - Barbados',
		'BD - Bangladesh',
		'BE - Belgium',
		'BF - Burkina Faso',
		'BG - Bulgaria',
		'BH - Bahrain',
		'BI - Burundi',
		'BJ - Benin',
		'BM - Bermuda',
		'BN - Brunei Darussalam',
		'BO - Bolivia',
		'BR - Brazil',
		'BS - Bahamas',
		'BT - Bhutan',
		'BV - Bouvet Island',
		'BW - Botswana',
		'BY - Belarus',
		'BZ - Belize',
		'CA - Canada',
		'CC - Cocos (Keeling) Islands',
		'CD - Republic of Congo',
		'CF - Central African Republic',
		'CG - Congo',
		'CH - Switzerland',
		'CI - Cote d Ivoire',
		'CK - Cook Islands',
		'CL - Chile',
		'CM - Cameroon',
		'CN - China',
		'CO - Colombia',
		'CR - Costa Rica',
		'CS - Serbia and Montenegro',
		'CU - Cuba',
		'CV - Cape Verde',
		'CX - Christmas Island',
		'CY - Cyprus',
		'CZ - Czech Republic',
		'DE - Germany',
		'DJ - Djibouti',
		'DK - Denmark',
		'DM - Dominica',
		'DO - Dominican Republic',
		'DZ - Algeria',
		'EC - Ecuador',
		'EE - Estonia',
		'EG - Egypt',
		'EH - Western Sahara',
		'ER - Eritrea',
		'ES - Spain',
		'ET - Ethiopia',
		'FI - Finland',
		'FJ - Fiji',
		'FK - Falkland Islands (Malvinas)',
		'FM - Micronesia',
		'FO - Faroe Islands',
		'FR - France',
		'FX - France, Metropolitan',
		'GA - Gabon',
		'GB - United Kingdom',
		'GD - Grenada',
		'GE - Georgia',
		'GF - French Guiana',
		'GH - Ghana',
		'GI - Gibraltar',
		'GL - Greenland',
		'GM - Gambia',
		'GN - Guinea',
		'GP - Guadeloupe',
		'GQ - Equatorial Guinea',
		'GR - Greece',
		'GS - South Georgia/So Sandwich Isl',
		'GT - Guatemala',
		'GU - Guam',
		'GW - Guinea-Bissau',
		'GY - Guyana',
		'HK - Hong Kong',
		'HM - Heard Island & McDonald Isl',
		'HN - Honduras',
		'HR - Croatia',
		'HT - Haiti',
		'HU - Hungary',
		'ID - Indonesia',
		'IE - Ireland',
		'IL - Israel',
		'IM - Isle of Man',
		'IN - India',
		'IO - British Indian Ocean Territory',
		'IQ - Iraq',
		'IR - Iran',
		'IS - Iceland',
		'IT - Italy',
		'JE - Jersey',
		'JM - Jamaica',
		'JO - Jordan',
		'JP - Japan',
		'KE - Kenya',
		'KG - Kyrgyzstan',
		'KH - Cambodia',
		'KI - Kiribati',
		'KM - Comoros',
		'KN - Saint Kitts And Nevis',
		'KP - Korea, North',
		'KR - Korea, South',
		'KW - Kuwait',
		'KY - Cayman Islands',
		'KZ - Kazakhstan',
		"LA - Lao People's Democratic Republic",
		'LB - Lebanon',
		'LC - Saint Lucia',
		'LI - Liechtenstein',
		'LK - Sri Lanka',
		'LR - Liberia',
		'LS - Lesotho',
		'LT - Lithuania',
		'LU - Luxembourg',
		'LV - Latvia',
		'LY - Libyan Arab Jamahiriya',
		'MA - Morocco',
		'MC - Monaco',
		'MD - Republic of Moldova',
		'MG - Madagascar',
		'MH - Marshall Islands',
		'MK - Macedonia',
		'ML - Mali',
		'MM - Myanmar',
		'MN - Mongolia',
		"MO - Macao Special Administrative Region of the People's Republic of China",
		'MP - Northern Mariana Islands',
		'MQ - Martinique',
		'MR - Mauritania',
		'MS - Montserrat',
		'MT - Malta',
		'MU - Mauritius',
		'MV - Maldives',
		'MW - Malawi',
		'MX - Mexico',
		'MY - Malaysia',
		'MZ - Mozambique',
		'NA - Namibia',
		'NC - New Caledonia',
		'NE - Niger',
		'NF - Norfolk Island',
		'NG - Nigeria',
		'NI - Nicaragua',
		'NL - Netherlands',
		'NO - Norway',
		'NP - Nepal',
		'NR - Nauru',
		'NU - Niue',
		'NZ - New Zealand',
		'OM - Oman',
		'PA - Panama',
		'PE - Peru',
		'PF - French Polynesia',
		'PG - Papua New Guinea',
		'PH - Philippines',
		'PK - Pakistan',
		'PL - Poland',
		'PM - Saint Pierre And Miquelon',
		'PN - Pitcairn',
		'PR - Puerto Rico',
		'PS - State of Palestine',
		'PT - Portugal',
		'PW - Palau',
		'PY - Paraguay',
		'QA - Qatar',
		'RE - Reunion',
		'RO - Romania',
		'RU - Russian Federation',
		'RW - Rwanda',
		'SA - Saudi Arabia',
		'SB - Solomon Islands',
		'SC - Seychelles',
		'SD - Sudan',
		'SE - Sweden',
		'SG - Singapore',
		'SH - Saint Helena',
		'SI - Slovenia',
		'SJ - Svalbard and Jan Mayen',
		'SK - Slovakia',
		'SL - Sierra Leone',
		'SM - San Marino',
		'SN - Senegal',
		'SO - Somalia',
		'SR - Suriname',
		'ST - Sao Tome and Principe',
		'SV - El Salvador',
		'SY - Syrian Arab Republic',
		'SZ - Swaziland',
		'TC - Turks and Caicos Islands',
		'TD - Chad',
		'TF - French Southern Territories',
		'TG - Togo',
		'TH - Thailand',
		'TJ - Tajikistan',
		'TK - Tokelau',
		'TL - Timor-Leste',
		'TM - Turkmenistan',
		'TN - Tunisia',
		'TO - Tonga',
		'TP - East Timor',
		'TR - Turkey',
		'TT - Trinidad and Tobago',
		'TV - Tuvalu',
		'TW - Taiwan',
		'TZ - Tanzania',
		'UA - Ukraine',
		'UG - Uganda',
		'UM - US Minor Outlying Islands',
		'US - United States',
		'UY - Uruguay',
		'UZ - Uzbekistan',
		'VA - Holy See',
		'VC - Saint Vincent & the Grenadines',
		'VE - Venezuela',
		'VG - Virgin Islands (British)',
		'VI - Virgin Islands (U.S.)',
		'VN - Viet Nam',
		'VU - Vanuatu',
		'WF - Wallis and Futuna Islands',
		'WS - Samoa',
		'YE - Yemen',
		'YT - Mayotte',
		'YU - Yugoslavia',
		'ZA - South Africa',
		'ZM - Zambia',
		'ZR - Zaire',
		'ZW - Zimbabwe',
	],
	AssembledProductHeightUnit: ['ft', 'in'],
	AssembledProductWeightUnit: ['g', 'kg', 'lb', 'oz'],
	ColorCategory: [
		'Beige',
		'Black',
		'Blue',
		'Bronze',
		'Brown',
		'Clear',
		'Gold',
		'Gray',
		'Green',
		'Multi-color',
		'Off-White',
		'Orange',
		'Pink',
		'Purple',
		'Red',
		'Silver',
		'White',
		'Yellow',
	],
	CountryOfOriginTextiles: ['Imported', 'USA and Imported', 'USA or Imported', 'USA'],
	MaximumTemperatureUnit: ['ºC', 'ºF', 'ºK'],
	PurpleUnit: ['g', 'kg', 'lb', 'mg', 'oz'],
	AnimalAccessoriesVariantAttributeName: [
		'assembledProductHeight',
		'assembledProductLength',
		'assembledProductWidth',
		'capacity',
		'character',
		'color',
		'count',
		'countPerPack',
		'shape',
		'size',
		'sportsTeam',
	],
	LabelImageContains: ['Drug Facts', 'Ingredient List', 'No Label', 'Nutrition Facts', 'Supplement Facts'],
	ShelfLifeUnit: ['days'],
	AnimalFoodVariantAttributeName: [
		'assembledProductHeight',
		'assembledProductLength',
		'assembledProductWidth',
		'count',
		'countPerPack',
		'flavor',
		'size',
	],
	AnimalHealthGroomingVariantAttributeName: [
		'assembledProductHeight',
		'assembledProductLength',
		'assembledProductWidth',
		'color',
		'count',
		'countPerPack',
		'scent',
		'size',
	],
	AnimalOtherVariantAttributeName: [
		'assembledProductHeight',
		'assembledProductLength',
		'assembledProductWidth',
		'color',
		'count',
		'countPerPack',
		'size',
		'sportsTeam',
	],
	ArtCraftAgeGroup: ['Adult', 'Child', 'Infant', 'Newborn', 'Preemie', 'Senior', 'Teen', 'Toddler', 'Tween'],
	BoltLengthYardageUnit: ['Yard', 'Yards'],
	CompositeWoodCertificationCode: [
		'1 - Does not contain composite wood',
		'7 - Not TSCA compliant and cannot be sold in US',
		'8 - TSCA compliant and okay to be sold in US',
	],
	FluffyUnit: ['cm', 'in', 'mm', 'µm'],
	FabricPurchaseForm: ['By the bolt', 'By the yard', 'Precut'],
	ArtCraftGender: ['Boys', 'Girls', 'Men', 'Unisex', 'Women'],
	MaximumRecommendedAgeUnit: ['months', 'years'],
	MetalType: [
		'Black Gold',
		'Black Gold-plated',
		'Brass',
		'Copper',
		'Goldtone',
		'Iron',
		'Nickel',
		'No Metal',
		'Other Metal',
		'Palladium',
		'Pewter',
		'Platinaire',
		'Platinum',
		'Rhodium',
		'Rose Gold',
		'Rose Gold-plated',
		'Silver-plated',
		'Slivertone',
		'Stainless Steel',
		'Sterling Silver',
		'Titanium',
		'Tri-Tone Gold',
		'Tungsten',
		'Two-Tone Gold',
		'White Gold',
		'White Gold-plated',
		'Yellow Gold',
		'Yellow Gold-plated',
	],
	PrecutFabricSpecialtySize: [
		'10" Squares (Layer Cakes)',
		'1.5 Yards',
		'18" X 21" (Fat Quarters)',
		'1 Yard',
		'2.5" Squares (Mini Charms)',
		'2.5" Strips (Jelly Rolls)',
		'2 Yards',
		'3 Yards',
		'5" Squares (Charm Packs)',
		'5" X 10" (Jolly Bars)',
		'.5 Yard',
		'9" X 21" (Fat 8ths)',
	],
	SewingKitType: ['Hand Sewing', 'Machine Sewing'],
	SmallPartsWarningCode: [
		'0 - No warning applicable',
		'1 - Choking hazard is a small ball',
		'2 - Choking hazard contains small ball',
		'3 - Choking hazard contains small parts',
		'4 - Choking hazard balloon',
		'5 - Choking hazard is a marble',
		'6 - Choking hazard contains a marble',
	],
	ArtCraftVariantAttributeName: [
		'assembledProductHeight',
		'assembledProductLength',
		'assembledProductWidth',
		'character',
		'color',
		'count',
		'countPerPack',
		'diameter',
		'finish',
		'material',
		'scent',
		'shape',
		'size',
	],
	SewingMachineType: ['Commercial', 'Computerized', 'Embroidery', 'Mechanical', 'Portable', 'Sergers'],
	BabyClothingAgeGroup: ['Child', 'Infant', 'Newborn', 'Preemie', 'Toddler'],
	BabyClothingClothingSizeGroup: ['Infant', 'Preemie', 'Toddler'],
	BabyClothingGender: ['Female', 'Male', 'Unisex'],
	SeasonCode: ['0- Basic', '1- Spring', '2- Summer', '3- BTS/Fall', '4- Winter'],
	ShoeCategory: [
		'Baby Boy Shoes',
		'Baby Girl Shoes',
		"Boys' Shoes",
		"Girls' Shoes",
		"Men's Shoes",
		'Toddler Boy Shoes',
		'Toddler Girl Shoes',
		"Women's Shoes",
	],
	PurpleSwatchVariantAttribute: [
		'babyClothingSize',
		'character',
		'color',
		'count',
		'countPerPack',
		'pattern',
		'scent',
		'shoeSize',
		'size',
		'sportsTeam',
	],
	BabyClothingVariantAttributeName: [
		'character',
		'clothingSize',
		'color',
		'count',
		'countPerPack',
		'pattern',
		'scent',
		'shoeSize',
		'size',
		'sportsTeam',
	],
	BabyDiaperingCareOtherAgeGroup: ['Infant', 'Newborn', 'Preemie', 'Toddler'],
	BabyDiaperingCareOtherVariantAttributeName: [
		'character',
		'color',
		'count',
		'countPerPack',
		'diaperSize',
		'pattern',
		'scent',
		'size',
		'sportsTeam',
	],
	CaloriesUnit: ['Calories'],
	FluidOuncesSupplying100CaloriesUnit: ['fl oz'],
	BabyFoodVariantAttributeName: ['character', 'count', 'countPerPack', 'flavor', 'size'],
	TotalCarbohydrateUnit: ['g'],
	BabyCribType: [
		'Convertible Cribs',
		'Cradles',
		'Crib & Changer Combos',
		'Mini Cribs',
		'Nursery Sets',
		'Portable Cribs',
		'Standard Cribs',
	],
	BabyFurnitureVariantAttributeName: [
		'character',
		'color',
		'count',
		'countPerPack',
		'finish',
		'pattern',
		'size',
		'sportsTeam',
	],
	ScreenSizeUnit: ['in'],
	BabyToysVariantAttributeName: [
		'character',
		'color',
		'count',
		'countPerPack',
		'pattern',
		'scent',
		'size',
		'sportsTeam',
	],
	CarSeatBaseDepthUnit: ['cm', 'in'],
	ChildCarSeatStyle: [
		'Backless Booster',
		'Combination Seat',
		'Convertible Car Seats',
		'High-back Booster',
		'Infant Seat',
		'Overhead Shield Convertible',
		'5-Point Convertible',
	],
	ForwardFacingMaximumWeightUnit: ['kg', 'lb'],
	SafetyHarnessStyle: ['no harness', '3-point harness', '5-point harness'],
	BabyTransportVariantAttributeName: ['character', 'color', 'count', 'countPerPack', 'pattern', 'size', 'sportsTeam'],
	BodySprayType: ['Mist', 'Spray'],
	HairCareKeyBenefit: [
		'Clarifying',
		'Color Protection',
		'Curl Enhancing',
		'Dandruff Relief',
		'Frizz Control',
		'Gray Reduction',
		'Heat Protection',
		'Moisturizing',
		'Strengthening & Split End Repair',
		'Thickening',
		'Volumizing',
	],
	HairColorCategory: ['Auburn', 'Black', 'Blonde', 'Brown', 'Grey', 'Non-Natural', 'Red', 'Silver', 'White'],
	HairProductForm: [
		'Bars',
		'Creams',
		'Fibers',
		'Gels',
		'Liquids',
		'Mousses',
		'Oils',
		'Pomades',
		'Sprays',
		'Sticks',
		'Tablets',
		'Waxes',
	],
	MakeupForm: [
		'Balms',
		'Crayons',
		'Creams',
		'Cushions',
		'Gels',
		'Glosses',
		'Liquids',
		'Loose Powders',
		'Mousses',
		'Pencils',
		'Pressed Powders: Oils',
		'Sprays',
		'Sticks',
		'Tubes',
		'Wipes',
	],
	PerfumeCologneType: ['Colognes', 'Perfumes'],
	ResultTimeUnit: ['h', 'min'],
	BeautyPersonalCareHygieneVariantAttributeName: [
		'color',
		'count',
		'countPerPack',
		'flavor',
		'medicineStrength',
		'scent',
		'size',
		'sportsTeam',
	],
	WigCapStyle: [
		'Full Lace',
		'Lace Front Wig Caps',
		'Monofiliment',
		'100% Hand-Tied',
		'Thin Skin Wig Caps',
		'Wefted Wig Caps',
	],
	BeddingVariantAttributeName: [
		'assembledProductHeight',
		'assembledProductLength',
		'assembledProductWidth',
		'bedSize',
		'character',
		'color',
		'count',
		'countPerPack',
		'fabricMaterialName',
		'Firmness',
		'homeDecorStyle',
		'material',
		'pattern',
		'shape',
		'size',
		'sportsTeam',
	],
	ACRating: ['AC1', 'AC2', 'AC3', 'AC4', 'AC5'],
	CoverageAreaUnit: ['sq ft'],
	SnowLoadRatingUnit: ['psf', 'psi'],
	BuildingSupplyVariantAttributeName: [
		'assembledProductHeight',
		'assembledProductLength',
		'assembledProductWidth',
		'color',
		'count',
		'countPerPack',
		'finish',
		'grade',
		'paintFinish',
		'shape',
		'size',
	],
	ThicknessUnit: ['in', 'mil'],
	RoughInDistanceUnit: ['cm', 'ft', 'in', 'mm'],
	FocalLengthUnit: ['mm'],
	MaximumShutterSpeedUnit: ['s'],
	NumberOfMegapixelsUnit: ['MP'],
	StandbyTimeUnit: ['h'],
	CamerasLensesVariantAttributeName: [
		'capacity',
		'color',
		'count',
		'diameter',
		'displayResolution',
		'focalLength',
		'material',
		'size',
	],
	BagStyle: [
		'Backpack',
		'Beach Bag',
		'Belt Bag/Fanny Pack',
		'Briefcase',
		'Clutch/Evening Bag',
		'Crossbody Bag',
		'Gym Bag',
		'Hobo Bag',
		'Other:',
		'Satchel',
		'Shoulder Bag',
		'Tote Bag',
		'Wallet/Card Case',
		'Weekender/Duffel Bag',
	],
	CarriersAccessoriesVariantAttributeName: [
		'assembledProductHeight',
		'assembledProductLength',
		'assembledProductWidth',
		'bagStyle',
		'capacity',
		'character',
		'color',
		'count',
		'countPerPack',
		'material',
		'monogramLetter',
		'pattern',
		'shape',
		'size',
		'sportsTeam',
	],
	HardOrSoftCase: ['Hard', 'Soft'],
	HardDriveCapacityUnit: ['GB', 'KB', 'MB', 'PB', 'TB'],
	FluffySwatchVariantAttribute: [
		'cellPhoneServiceProvider',
		'color',
		'count',
		'countPerPack',
		'edition',
		'hardDriveCapacity',
		'ramMemory',
		'resolution',
		'screenSize',
		'size',
	],
	CellPhonesVariantAttributeName: [
		'cellPhoneServiceProvider',
		'color',
		'count',
		'countPerPack',
		'edition',
		'hardDriveCapacity',
		'ramMemory',
		'resolution',
		'screenSize',
	],
	CeremonialClothingAccessoriesClothingSizeGroup: [
		'Big Boys',
		'Big Boys Husky',
		'Big Boys Slim',
		'Big Girls',
		'Big Girls Plus',
		'Big Girls Slim',
		'Big & Tall',
		'Infant',
		'Juniors',
		'Little Boys',
		'Little Boys Husky',
		'Little Boys Slim',
		'Little Girls',
		'Little Girls Plus',
		'Little Girls Slim',
		'Maternity',
		'Maternity Plus',
		'Men',
		'Newborn',
		'Petite',
		'Petite Plus',
		'Plus',
		'Preemie',
		'Regular',
		'Short',
		'Tall',
		'Toddler',
		'Women',
		"Women's Plus",
		'Young Men’s',
	],
	CeremonialClothingAccessoriesVariantAttributeName: [
		'clothingSize',
		'color',
		'count',
		'countPerPack',
		'material',
		'occasion',
		'pattern',
		'size',
		'theme',
	],
	ClothingWeight: ['Heavyweight', 'Lightweight', 'Mid-Weight'],
	HatSizeMeasurement: [
		'6 1/2',
		'6 1/4',
		'6 3/4',
		'6 3/8',
		'6 5/8',
		'6 7/8',
		'7',
		'7 1/2',
		'7 1/4',
		'7 1/8',
		'7 3/4',
		'7 3/8',
		'7 5/8',
		'7 7/8',
		'8',
		'8 1/8',
	],
	LegOpeningCut: ['At Hip', 'Below Hip', 'High-Cut', 'Regular'],
	PantLegCut: ['Boot Cut', 'Flare-Leg', 'Slim-Leg', 'Straight-Leg', 'Taper', 'Wide-Leg'],
	PantySize: [
		'0',
		'1',
		'10',
		'11',
		'12',
		'13',
		'14',
		'15',
		'16',
		'17',
		'18',
		'19',
		'2',
		'20',
		'21',
		'22',
		'23',
		'24',
		'25',
		'26',
		'27',
		'28',
		'29',
		'3',
		'30',
		'31',
		'32',
		'33',
		'34',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9',
	],
	SleeveLengthStyle: ['Elbow-Length', 'Long Sleeve', 'Short Sleeve', 'Sleeveless', '1/4 Sleeve', '3/4 Sleeve'],
	SockRise: ['Crew', 'Knee-High', 'Low-Cut', 'No-Show', 'Quarter', 'Thigh-High'],
	SuitBreastingStyle: ['Double-Breasted', 'Single-Breasted'],
	ClothingVariantAttributeName: [
		'academicInstitution',
		'accentColor',
		'braBandSize',
		'braCupSize',
		'braSize',
		'character',
		'clothingFit',
		'clothingSize',
		'clothingSizeGroup',
		'color',
		'count',
		'countPerPack',
		'hatSize',
		'inseam',
		'material',
		'neckSize',
		'pantySize',
		'pattern',
		'shoeSize',
		'sockSize',
		'sportsTeam',
		'waistSize',
	],
	Sheerness: ['Opaque', 'Semi-Opaque', 'Sheer', 'Thick Opaque', 'Ultra-Sheer'],
	WaistStyle: [
		'Banded Waist',
		'Comfort Waist',
		'Drop Waist',
		'Elastic Waist',
		'Empire Waist',
		'Expandable Waist',
		'Maternity Waist',
		'Paper Bag Waist',
		'Rigid Waist',
		'Rose-Waist',
		'Seamless Waistband',
	],
	RAIDLevel: ['RAID 0', 'RAID 1', 'RAID 2', 'RAID 3', 'RAID 4', 'RAID 5', 'RAID 6'],
	CableLengthUnit: ['cm', 'ft', 'in', 'm'],
	DataIntegrityCheck: ['ECC', 'Non-ECC'],
	InternalExternal: ['External', 'Internal'],
	ProcessorSpeedUnit: ['GHz', 'Hz', 'kHz', 'MHz'],
	TentacledSwatchVariantAttribute: [
		'cableLength',
		'color',
		'count',
		'countPerPack',
		'edition',
		'hardDriveCapacity',
		'mountType',
		'ramMemory',
		'resolution',
		'screenSize',
		'size',
	],
	ComputerComponentsVariantAttributeName: [
		'cableLength',
		'color',
		'count',
		'countPerPack',
		'edition',
		'hardDriveCapacity',
		'mountType',
		'ramMemory',
		'resolution',
		'screenSize',
	],
	StickySwatchVariantAttribute: [
		'color',
		'configuration',
		'count',
		'countPerPack',
		'edition',
		'hardDriveCapacity',
		'operatingSystem',
		'ramMemory',
		'resolution',
		'screenSize',
		'size',
	],
	ComputersVariantAttributeName: [
		'color',
		'configuration',
		'count',
		'countPerPack',
		'edition',
		'hardDriveCapacity',
		'operatingSystem',
		'ramMemory',
		'resolution',
		'screenSize',
	],
	CostumesVariantAttributeName: [
		'character',
		'clothingSize',
		'color',
		'count',
		'countPerPack',
		'material',
		'occasion',
		'pattern',
		'size',
		'theme',
	],
	HorsepowerUnit: ['HP'],
	CyclingVariantAttributeName: [
		'assembledProductWeight',
		'capacity',
		'color',
		'count',
		'countPerPack',
		'dexterity',
		'material',
		'shape',
		'size',
		'sportsLeague',
		'sportsTeam',
	],
	DecorationsFavorsVariantAttributeName: [
		'character',
		'color',
		'count',
		'countPerPack',
		'diameter',
		'lightBulbType',
		'material',
		'occasion',
		'pattern',
		'shape',
		'size',
		'sportsTeam',
		'theme',
	],
	WattsUnit: ['kW', 'W'],
	AmpsUnit: ['A', 'mA'],
	BeamAngleUnit: ['º'],
	BeamSpreadUnit: ['ft'],
	BrightnessUnit: ['lm'],
	ColorTemperatureUnit: ['K'],
	DecibelRatingUnit: ['dB'],
	EstimatedEnergyCostPerYearUnit: ['USD'],
	ImpedanceUnit: ['kolms', 'olms'],
	LightBulbBaseCode: [
		'BA15d',
		'BA15s',
		'E10',
		'E11',
		'E12',
		'E14',
		'E17',
		'E26',
		'E27',
		'E39',
		'E40',
		'E5',
		'EX39',
		'G10q',
		'G12',
		'G-23',
		'G-23-2',
		'G24d-1',
		'G24d-2',
		'G24d-3',
		'G24q-1',
		'G24q-2',
		'G24q-3',
		'G24q-4',
		'G24q-5',
		'G4',
		'G9',
		'GX10q4',
		'GX32d-2',
		'GX32d-3',
		'GU10',
		'GU24',
		'GU4',
		'GU5.3',
		'GU6.35',
		'GU8',
		'GX23-2',
		'GY6.35',
		'GY8.6',
		'R7',
		'R7s',
		'S14s',
		'SC',
		'2G11',
		'2G7',
		'2GX13',
		'2GX7',
	],
	LightBulbShape: [
		'A-Line',
		'A-Line Spiral',
		'Bullet',
		'Candle',
		'Circline',
		'Flame',
		'Flicker',
		'Globe Mini',
		'Linear',
		'Reflector',
		'Spiral',
		'Tubular',
		'Twist',
		'U-Shape',
	],
	ElectricalVariantAttributeName: [
		'amps',
		'assembledProductHeight',
		'assembledProductLength',
		'assembledProductWidth',
		'baseColor',
		'baseFinish',
		'color',
		'count',
		'countPerPack',
		'finish',
		'mountType',
		'shape',
		'size',
		'sportsTeam',
		'volts',
		'watts',
	],
	VoltUnit: ['kV', 'kVAC', 'kVDC', 'mV', 'V', 'VAC', 'VDC'],
	HeadphoneStyle: ['In-Ear', 'On-Ear', 'Over-Ear'],
	MaximumLoadWeightUnit: ['lb'],
	IndigoSwatchVariantAttribute: [
		'cableLength',
		'color',
		'compatibleModels',
		'count',
		'countPerPack',
		'edition',
		'mountType',
		'resolution',
		'screenSize',
		'size',
	],
	ElectronicsAccessoriesVariantAttributeName: [
		'cableLength',
		'color',
		'compatibleModels',
		'count',
		'countPerPack',
		'edition',
		'hardDriveCapacity',
		'resolution',
		'screenSize',
		'size',
		'tvAndMonitorMountType',
	],
	ElectronicsCablesVariantAttributeName: ['cableLength', 'color', 'count', 'countPerPack'],
	ElectronicsOtherVariantAttributeName: ['color', 'count', 'countPerPack', 'platform', 'resolution', 'size'],
	CaffeineDesignation: ['Caffeine Added', 'Decaffeinated', 'Naturally Caffeinated', 'Naturally Decaffeinated'],
	DietType: [
		'01 - Vegetarian',
		'02 - Coeliac',
		'03 - Dietetic',
		'04 - Halal',
		'05 - Kosher',
		'06 - Vegan',
		'07 - All Natural',
		'08 - Without Beef',
		'09 - Organic',
		'10 - Without Pork',
		'11 - Better For You',
		'12 - Fat Free',
		'13 - Gluten Free',
		'14 - Sugar Free',
	],
	PuffedSnackType: ['Microwave Popcorn', 'Popcorn Kernel', 'Ready to Eat Popcorn'],
	FoodBeverageVariantAttributeName: ['count', 'countPerPack', 'flavor', 'size'],
	BootShaftCircumferenceUnit: ['cm', 'in', 'mm'],
	HeelHeightUnit: ['in', 'mm'],
	ShoeSizeSystem: [
		'EU Infant',
		"EU Kid's",
		"EU Men's",
		"EU Women's",
		'EU Youth',
		'UK Infant',
		"UK Kid's",
		"UK Men's",
		"UK Women's",
		'UK Youth',
		'US Infant',
		"US Kid's",
		"US Men's",
		"US Women's",
		'US Youth',
	],
	FootwearVariantAttributeName: [
		'color',
		'count',
		'countPerPack',
		'heelHeight',
		'material',
		'pattern',
		'shoeSize',
		'shoeWidth',
		'size',
		'sportsTeam',
	],
	FuelsLubricantsVariantAttributeName: ['count', 'countPerPack', 'size'],
	FuneralVariantAttributeName: ['color', 'count', 'countPerPack', 'material', 'occasion', 'pattern', 'shape', 'size'],
	IndecentSwatchVariantAttribute: [
		'assembledProductWidth',
		'baseColor',
		'baseFinish',
		'bedSize',
		'character',
		'color',
		'configuration',
		'count',
		'countPerPack',
		'cushionColor',
		'diameter',
		'finish',
		'Firmness',
		'frameColor',
		'material',
		'mattressFirmness',
		'mattressThickness',
		'mountType',
		'pattern',
		'shape',
		'size',
	],
	FurnitureVariantAttributeName: [
		'assembledProductWidth',
		'baseColor',
		'baseFinish',
		'bedSize',
		'character',
		'color',
		'configuration',
		'count',
		'countPerPack',
		'cushionColor',
		'diameter',
		'finish',
		'frameColor',
		'material',
		'mattressFirmness',
		'mattressThickness',
		'mountType',
		'pattern',
		'shape',
		'size',
		'sportsTeam',
	],
	ClearingWidthUnit: ['cm', 'ft', 'in'],
	FlowRateUnit: ['gpm'],
	HilariousSwatchVariantAttribute: [
		'assembledProductHeight',
		'assembledProductLength',
		'assembledProductWidth',
		'capacity',
		'color',
		'count',
		'countPerPack',
		'diameter',
		'finish',
		'homeDecorStyle',
		'material',
		'pattern',
		'shape',
		'size',
	],
	GardenPatioVariantAttributeName: [
		'assembledProductHeight',
		'assembledProductLength',
		'assembledProductWidth',
		'capacity',
		'color',
		'count',
		'countPerPack',
		'diameter',
		'finish',
		'homeDecorStyle',
		'material',
		'pattern',
		'shape',
		'size',
		'sportsTeam',
		'vaseIncluded',
	],
	GiftSupplyAwardsVariantAttributeName: [
		'color',
		'count',
		'countPerPack',
		'material',
		'occasion',
		'pattern',
		'shape',
		'size',
		'theme',
	],
	SideBurnerSizeUnit: ['sq in'],
	AmbitiousSwatchVariantAttribute: [
		'assembledProductHeight',
		'assembledProductLength',
		'assembledProductWidth',
		'capacity',
		'color',
		'count',
		'countPerPack',
		'finish',
		'homeDecorStyle',
		'material',
		'size',
		'sportsTeam',
	],
	GrillsOutdoorCookingVariantAttributeName: [
		'assembledProductHeight',
		'assembledProductLength',
		'assembledProductWidth',
		'capacity',
		'color',
		'count',
		'countPerPack',
		'finish',
		'homeDecorStyle',
		'size',
		'sportsTeam',
	],
	CunningSwatchVariantAttribute: [
		'assembledProductHeight',
		'assembledProductLength',
		'assembledProductWidth',
		'color',
		'count',
		'countPerPack',
		'finish',
		'grade',
		'mountType',
		'shape',
		'size',
		'workingLoadLimit',
	],
	HardwareVariantAttributeName: [
		'assembledProductHeight',
		'assembledProductLength',
		'assembledProductWidth',
		'color',
		'count',
		'countPerPack',
		'finish',
		'grade',
		'mountType',
		'shape',
		'size',
		'volts',
		'workingLoadLimit',
	],
	IngredientPreference: ['Cruelty-Free', 'Leaping Bunny', 'PETA Bunny', '100% Organic', 'Vegan'],
	HealthBeautyElectronicsVariantAttributeName: ['color', 'count', 'countPerPack', 'size'],
	HomeDecorKitchenOtherOrientation: ['Square'],
	MagentaSwatchVariantAttribute: [
		'academicInstitution',
		'accentColor',
		'assembledProductHeight',
		'assembledProductLength',
		'assembledProductWidth',
		'baseColor',
		'baseFinish',
		'capacity',
		'character',
		'color',
		'count',
		'countPerPack',
		'diameter',
		'fabricColor',
		'fabricMaterialName',
		'finish',
		'frameColor',
		'homeDecorStyle',
		'material',
		'pattern',
		'scent',
		'shape',
		'size',
		'sportsTeam',
	],
	HomeDecorKitchenOtherVariantAttributeName: [
		'academicInstitution',
		'accentColor',
		'assembledProductHeight',
		'assembledProductLength',
		'assembledProductWidth',
		'baseColor',
		'baseFinish',
		'bedSize',
		'capacity',
		'character',
		'color',
		'count',
		'countPerPack',
		'diameter',
		'fabricColor',
		'fabricMaterialName',
		'finish',
		'frameColor',
		'homeDecorStyle',
		'material',
		'pattern',
		'scent',
		'shape',
		'size',
		'sportsTeam',
	],
	VolumeCapacityUnit: ['cu cm', 'cu ft', 'cu in', 'fl oz', 'gal', 'L', 'ml', 'pt', 'qt'],
	WindowTreatmentSheerness: ['Blackout', 'Energy Efficient', 'Light Filtering', 'Room Darkening', 'Sheer'],
	HouseholdCleaningProductsSuppliesVariantAttributeName: [
		'color',
		'count',
		'countPerPack',
		'finish',
		'scent',
		'shape',
		'size',
	],
	InstrumentAccessoriesVariantAttributeName: ['color', 'count', 'countPerPack', 'material', 'pattern', 'sportsTeam'],
	AryStoneType: [
		'Alexandrite',
		'Amber',
		'Amethyst',
		'Ametrine',
		'Aquamarine',
		'Beryl',
		'Carnelian',
		"Cat's Eye",
		'Chalcedony',
		'Chrome Diopside',
		'Citrine',
		'Coral',
		'Crystal',
		'Cubic Zirconia',
		'Diamond',
		'Emerald',
		'Garnet',
		'Iolite',
		'Jade',
		'Kunzite',
		'Lapis Lazuli',
		'Malachite',
		'Moissanite',
		'Moonstone',
		'Morganite',
		'Mother of Pearl',
		'Onyx',
		'Opal',
		'Other Stone',
		'Pearl',
		'Peridot',
		'Quartz',
		'Rhodolite',
		'Rhodonite',
		'Rose Quartz',
		'Ruby',
		'Sapphire',
		'Sodalite',
		'Spinel',
		'Sunstone',
		'Tanzanite',
		"Tiger's Eye",
		'Topaz',
		'Tourmaline',
		'Tsavorite',
		'Turquoise',
		'White Sapphire',
		'Zircon',
	],
	EarringBack: [
		'Click Top',
		'Clip-On',
		'Clutchless',
		'Continuous Hoop',
		'Endless',
		'Euro Wire',
		'Fishhook',
		'French Wire',
		'Hinged',
		'Hoop',
		'La Pousette',
		'Latch Back',
		'Lever Back',
		'Omega Back',
		'Other',
		'Post With Friction Back',
		'Post With Snap Down',
		'Push Back',
		'Screw Back',
		'Shepherds Hook',
		'Thread Through',
	],
	BirthstoneMonth: [
		'April',
		'August',
		'December',
		'February',
		'January',
		'July',
		'June',
		'March',
		'May',
		'November',
		'October',
		'September',
	],
	BraceletStyle: [
		'Bangle',
		'Bead',
		'Cable',
		'Cape Cod',
		'Chain',
		'Charm',
		'Cord',
		'Cuff',
		'ID Bracelets',
		'Link',
		'Multi-Strand',
		'Other',
		'Stackable',
		'Stretch',
		'Tennis Bracelets',
		'Wrap',
	],
	CaratsUnit: ['ct'],
	ChainPattern: [
		'Anchor',
		'Ball',
		'Bar',
		'Basketweave',
		'Bead',
		'Belcher',
		'Beveled Herringbone',
		'Bismark',
		'Boston Link',
		'Bow-Tie Figaro',
		'Box',
		'Byzantine',
		'C-Chain',
		'Cable',
		'Cable Wire',
		'Cascade',
		'Cobra',
		'Cord',
		'Coreana',
		'Crisscross',
		'Cuban Link',
		'Curb',
		'Diamond Cut Figaro',
		'Double Cable',
		'Double Curb',
		'Draw Flat Cable',
		'Elongated Cable',
		'Fancy Double Link',
		'Figaro',
		'Flat Figaro',
		'Flat Gooseneck',
		'Franco',
		'French Rope',
		'Half Round Gooseneck',
		'Heart',
		'Herringbone',
		'Hexagon',
		'Hollow Mariner',
		'Lace',
		'Link',
		'Mariner',
		'Mesh',
		'Mirror',
		'Omega',
		'Open Cable',
		'Other',
		'Oval Curb',
		'Palma',
		'Parallel Curb',
		'Popcorn',
		'Puzzle',
		'Raspberry',
		'Rolo',
		'Rope',
		'Round Omega',
		'San Marco',
		'Serpentine',
		'Side-by-Side',
		'Singapore',
		'Snake',
		'Stocking Mesh',
		'Strand',
		'Tornado',
		'Track',
		'Triple Rope',
		'Twister Rope',
		'Twister Serpentine',
		'Wheat',
		'Wire Cable',
	],
	ClaspType: [
		'Ball',
		'Barrel Clasp',
		'Box',
		'Buckle',
		'Button-End',
		'Button Fly',
		'Button Toggle',
		'Concealed',
		'D Ring',
		'Elastic',
		'Fishhook',
		'Flat Solid Buckle',
		'Fold Over',
		'Hidden Safety Clasp',
		'Hook & Eye Clasp',
		'Hook & Loop Clasp',
		'Invisible Double-Locking',
		'Lobster Claw',
		'Magnetic Clasp',
		'No Clasp',
		'Other',
		'Push Button',
		'S Hook',
		'Screw',
		'Side Lock',
		'Snaps',
		'Spring Ring',
		'Toggle',
	],
	DiamondClarity: ['FL', 'I1', 'I2', 'I3', 'IF', 'Other', 'SI1', 'SI2', 'VS1', 'VS2', 'VVS1', 'VVS2'],
	DiamondColor: [
		'D',
		'D-E',
		'D-F',
		'E',
		'E-F',
		'F',
		'F-G',
		'G',
		'G-H',
		'H',
		'H-I',
		'I',
		'I-J',
		'J',
		'J-K',
		'K',
		'K-L',
		'L',
		'L-M',
		'M',
		'N-R',
		'Other',
		'S-Z',
	],
	DiamondCut: [
		'Asscher cut',
		'Baguette cut',
		'Cushion cut',
		'Emerald cut',
		'Fancy cut',
		'Heart cut',
		'Marquise cut',
		'Other cut',
		'Oval cut',
		'Pear cut',
		'Princess cut',
		'Radiant cut',
		'Round Brilliant cut',
		'Square cut',
	],
	EarringStyle: ['Chandelier', 'Dangling', 'Drop', 'Fake Gauge', 'Hoop', 'Stud', 'Teardrop', 'Threader'],
	PrimaryStoneShape: [
		'Asscher',
		'Baguette',
		'Cushion',
		'Emerald',
		'Heart',
		'Marquise',
		'Oval',
		'Pear',
		'Princess',
		'Radiant',
		'Round',
	],
	JewelrySetting: [
		'bar',
		'basket',
		'bead-set',
		'bezel',
		'bypass',
		'cathedral',
		'channel',
		'classic solitaire',
		'cluster',
		'cocktail',
		'designer',
		'eternity band',
		'flat top',
		'flush',
		'freedom',
		'guard',
		'gypsy',
		'half bezel',
		'halo',
		'hand-wired',
		'illusion',
		'invisible',
		'other',
		'pave',
		'prongs',
		'semimount',
		'shared prong',
		'side stone',
		'solitaire',
		'stackable',
		'strung',
		'tension mount',
		'2-prong',
		'3-prong',
		'3-stone',
		'4-prong',
		'6-prong',
		'trellis',
		'tricolor rolling',
		'two-tone freedom',
		'v-prong',
		'waterfall',
		'wrap',
	],
	NecklaceStyle: [
		'Bib',
		'Cascade',
		'Chain',
		'Choker',
		'Collar',
		'Initial',
		'Lariat',
		'Locket',
		'Multi Strand',
		'Other',
		'Pendant',
		'Sentiment & Symbols',
		'Single Strand',
		'Solitaire',
		'Y-necklace',
	],
	Religion: ['Buddhism', 'Christianity', 'Hinduism', 'Islam', 'Judaism', 'Other'],
	JewelryVariantAttributeName: [
		'birthstone',
		'carats',
		'chainLength',
		'color',
		'count',
		'countPerPack',
		'diameter',
		'gemstone',
		'metal',
		'metalPurity',
		'ringSize',
		'shape',
		'size',
		'sportsTeam',
		'style',
	],
	AverageFuelConsumptionUnit: ['mpg'],
	EngineDisplacementUnit: ['cc', 'CID'],
	FuelCapacityUnit: ['gal', 'L'],
	MaximumEnginePowerUnit: ['hp', 'kW'],
	LandVehiclesVariantAttributeName: ['color', 'count', 'engineModel', 'vehicleMake', 'vehicleModel', 'vehicleYear'],
	TopSpeedUnit: ['kph', 'mph'],
	LargeAppliancesVariantAttributeName: [
		'assembledProductHeight',
		'assembledProductLength',
		'assembledProductWidth',
		'capacity',
		'color',
		'finish',
		'homeDecorStyle',
		'material',
		'pattern',
		'shape',
		'size',
	],
	MedicalAidsEquipmentVariantAttributeName: [
		'color',
		'count',
		'countPerPack',
		'diameter',
		'medicineStrength',
		'shape',
		'size',
	],
	ActivityStage: ['Intra-Workout', 'Post-Workout', 'Pre-Workout'],
	FriskySwatchVariantAttribute: ['count', 'countPerPack', 'flavor', 'medicineStrength', 'size'],
	MedicineSupplementsVariantAttributeName: ['color', 'countPerPack', 'flavor', 'medicineStrength', 'size'],
	DurationUnit: ['min'],
	MPAARating: ['G', 'NC-17', 'Not Rated', 'PG', 'PG-13', 'R'],
	MoviesPhysicalMediaFormat: [
		'Blu-Ray',
		'CD',
		'Cassette Tape',
		'DVD',
		'Digital',
		'Digital HD',
		'LP',
		'miniDV Tape',
		'Printed Media',
		'3D Blu-ray',
		'4K Ultra HD',
		'8-Track Tape',
		'USB stick',
		'VHS Tape',
	],
	MusicCasesBagsVariantAttributeName: ['color', 'count', 'countPerPack', 'material', 'shape'],
	DrumSetCymbalType: [
		'Acoustic Cymbals',
		'Bell Cymbals',
		'China Cymbals',
		'Clash Cymbals',
		'Crash Cymbals',
		'Effect Cymbals',
		'Finger Cymbals',
		'Gong Cymbals',
		'Hi-Hat Cymbals',
		'Orchestral Cymbals',
		'Ride Cymbals',
		'Splash Cymbals',
		'Swish Cymbals',
	],
	GuitarType: ['Acoustic', 'Acoustic/Electric', 'Bass', 'Classical', 'Electric', 'Nylon', 'Ukulele'],
	KaraokeMachineType: ['Handheld Microphone', 'Stand Alone', 'System'],
	MusicalInstrumentsOrientation: ['Horizontal', 'Left', 'Right', 'Vertical'],
	SaxophoneType: [
		'Alto Saxophones',
		'Baritone Saxophones',
		'Bass Saxophones',
		'Sopranino Saxophones',
		'Soprano Saxophones',
		'Tenor Saxophones',
	],
	SoundKey: ['Bb', 'Bb/F Double', 'Bb/High F', 'C', 'Eb', 'F', 'F/Bb', 'F/Bb/F Alto'],
	CalendarTermUnit: ['months'],
	OverallExpansionUnit: ['inches'],
	PaperClipSize: ['Jumbo', 'No. 1', 'No. 2', 'No. 3'],
	PencilLeadDiameter: ['0.3mm', '0.4mm', '0.5mm', '0.7mm', '0.9mm', '2mm', '3.15mm', '3mm', '5.6mm', '5mm'],
	OfficeVariantAttributeName: [
		'capacity',
		'color',
		'count',
		'countPerPack',
		'envelopeSize',
		'material',
		'numberOfSheets',
		'paperSize',
		'shape',
		'size',
	],
	TabCut: ['1/2 cut', '1/3 cut', '1/5 cut', '2/5 cut - right of center', '2/5 cut - right position', 'undercut'],
	EyewearRim: ['Full-Rim', 'Half-Rim', 'Rimless', 'Semi-Rimless'],
	OpticalVariantAttributeName: ['color', 'count', 'countPerPack', 'shape', 'size', 'sportsTeam'],
	OperatingTemperatureUnit: ['ºC', 'ºF'],
	OpticsVariantAttributeName: [
		'assembledProductWeight',
		'color',
		'count',
		'countPerPack',
		'dexterity',
		'material',
		'size',
	],
	OtherVariantAttributeName: ['color', 'count', 'countPerPack', 'finish', 'shape', 'size'],
	PhotoAccessoriesVariantAttributeName: ['capacity', 'color', 'count', 'material', 'shape', 'size'],
	CEETier: ['CEE Tier I', 'CEE Tier II', 'CEE Tier III'],
	GallonsPerFlushUnit: ['gal'],
	PlumbingHVACVariantAttributeName: [
		'assembledProductHeight',
		'assembledProductLength',
		'assembledProductWidth',
		'color',
		'count',
		'countPerPack',
		'finish',
		'gallonsPerMinute',
		'shape',
		'size',
		'volts',
		'watts',
	],
	MaximumPrintResolutionUnit: ['dpi'],
	MonochromeColor: ['Color', 'Monochrome'],
	MischievousSwatchVariantAttribute: ['color', 'count', 'countPerPack', 'resolution', 'size'],
	PrintersScannersImagingVariantAttributeName: ['color', 'count', 'countPerPack', 'resolution'],
	FireExtinguisherClass: ['A', 'B', 'C', 'D', 'K'],
	WorkingPressureUnit: ['Bar', 'Pa', 'psi'],
	BraggadociousSwatchVariantAttribute: [
		'configuration',
		'count',
		'countPerPack',
		'digitalFileFormat',
		'edition',
		'operatingSystem',
		'physicalMediaFormat',
		'platform',
		'size',
		'version',
	],
	SoftwareVariantAttributeName: [
		'configuration',
		'count',
		'countPerPack',
		'digitalFileFormat',
		'operatingSystem',
		'physicalMediaFormat',
		'version',
	],
	SoundRecordingVariantAttributeName: ['audioPowerOutput', 'color', 'count', 'countPerPack', 'material'],
	AirGunPowerType: ['C02', 'Gas Piston', 'Precharged Pneumatic', 'Pump Action', 'Spring'],
	InsulationType: ['Down', 'Synthetic'],
	SportRecreationOtherVariantAttributeName: [
		'assembledProductWeight',
		'capacity',
		'clothingSize',
		'color',
		'compatibleDevices',
		'count',
		'countPerPack',
		'dexterity',
		'golfClubShaftFlex',
		'golfClubShaftType',
		'loft',
		'material',
		'minimumTemperature',
		'shaftLength',
		'shaftMaterial',
		'shape',
		'shoeSize',
		'size',
		'sportsLeague',
		'sportsTeam',
	],
	VelocityUnit: ['ft/s'],
	StorageVariantAttributeName: ['capacity', 'color', 'count', 'countPerPack', 'finish', 'shape', 'size'],
	RefreshRateUnit: ['Hz'],
	TentacledUnit: ['ms'],
	SwatchVariantAttribute1: [
		'color',
		'configuration',
		'count',
		'countPerPack',
		'edition',
		'hardDriveCapacity',
		'mountType',
		'platform',
		'ramMemory',
		'resolution',
		'screenSize',
		'size',
	],
	TVsVideoDisplaysVariantAttributeName: [
		'color',
		'configuration',
		'count',
		'countPerPack',
		'resolution',
		'screenSize',
		'size',
	],
	AverageAirConsumptionAt90PSIUnit: ['CFM'],
	BatteryCapacityUnit: ['Ah', 'mAh'],
	ImpactEnergyUnit: ['J'],
	MaximumWattsOutUnit: ['MWO'],
	NoLoadSpeedUnit: ['rpm'],
	SandingSpeedUnit: ['OPM', 'SFPM'],
	ToolsVariantAttributeName: [
		'amps',
		'assembledProductHeight',
		'assembledProductLength',
		'assembledProductWidth',
		'color',
		'count',
		'countPerPack',
		'finish',
		'lightBulbType',
		'shape',
		'size',
		'volts',
		'watts',
	],
	SwatchVariantAttribute2: [
		'assembledProductHeight',
		'assembledProductLength',
		'assembledProductWidth',
		'color',
		'count',
		'countPerPack',
		'shape',
		'size',
	],
	ToolsHardwareOtherVariantAttributeName: [
		'assembledProductHeight',
		'assembledProductLength',
		'assembledProductWidth',
		'color',
		'count',
		'countPerPack',
		'finish',
		'shape',
		'size',
	],
	MaximumSpeedUnit: ['mph'],
	ToysVariantAttributeName: [
		'capacity',
		'character',
		'color',
		'count',
		'countPerPack',
		'flavor',
		'shape',
		'size',
		'sportsTeam',
	],
	SwatchVariantAttribute3: ['color', 'count', 'diameter', 'size'],
	VehicleOtherVariantAttributeName: ['color', 'count', 'diameter', 'finish', 'shape', 'size'],
	AutomotivePartsDivision: ['direct replacement', 'motorcycle', 'oem replacement', 'performance part'],
	VehiclePartsAccessoriesVariantAttributeName: [
		'color',
		'count',
		'diameter',
		'finish',
		'shape',
		'size',
		'sportsTeam',
		'vehicleMake',
		'vehicleModel',
		'vehicleYear',
	],
	ESRBRating: ['Adult', 'Early Childhood', 'Everyone', 'Everyone 10+', 'Mature', 'Pending', 'Teen', 'Unrated'],
	VideoGamesPhysicalMediaFormat: [
		'Blu-Ray',
		'CD',
		'DVD',
		'Digital',
		'Digital HD',
		'Game Card',
		'miniDV Tape',
		'Printed Media',
		'3D Blu-ray',
		'4K Ultra HD',
		'USB stick',
	],
	VideoGamesVariantAttributeName: [
		'count',
		'countPerPack',
		'edition',
		'physicalMediaFormat',
		'platform',
		'sportsTeam',
	],
	VideoGameGenre: [
		'Action & Adventure',
		'Action Role-playing Game',
		'Adult Video Game',
		'Advergame',
		'Art Game',
		'Board Game',
		'Car Simulation',
		'Card Game',
		'Casual Game',
		'Christian Game',
		'City Simulation',
		'Construction and Management Simulation',
		'Educational Game',
		'Electronic Sports',
		'Exercise Game',
		'Flight Simulation',
		'Health & Fitness',
		'Horror',
		'Kids & Family',
		'Life Simulation',
		'Massively Multiplayer Online Game',
		'Military Vehicle Simulation',
		'Motion Game',
		'Music Game',
		'Party Game',
		'Programming Game',
		'Puzzle Game',
		'Racing Game',
		'Real-time Strategy',
		'Real-time Tactics',
		'Role-playing',
		'Sandbox Game',
		'Serious Game',
		'Simulation',
		'Sports Game',
		'Survival',
		'Survival Horror',
		'Tactical Role-playing Game',
		'Television Tie-in',
		'Tower Defense',
		'Trading Card Game',
		'Trivia Game',
		'Turn-based Strategy',
		'Turn-based Tactical',
		'X Games',
	],
	SwatchVariantAttribute4: ['count', 'countPerPack', 'mountType', 'resolution', 'screenSize', 'size'],
	VideoProjectorsVariantAttributeName: [
		'color',
		'count',
		'countPerPack',
		'mountType',
		'resolution',
		'screenSize',
		'size',
	],
	WatchesVariantAttributeName: [
		'color',
		'count',
		'countPerPack',
		'material',
		'plating',
		'sportsTeam',
		'watchBandMaterial',
		'watchStyle',
	],
	WatchBandMaterial: [
		'Carbon Fiber',
		'Copper',
		'Gold',
		'Gold-plated',
		'Leather',
		'Nylon',
		'Other',
		'Platinum',
		'Silicone',
		'Silver-plated',
		'Stainless Steel',
		'Sterling Silver',
		'Titanium',
		'Tungsten',
	],
	WatchCaseMaterial: [
		'Aluminum',
		'Carbon Fiber',
		'Ceramic',
		'Gold-plated',
		'Other',
		'Plastic',
		'Platinum',
		'PVD',
		'Rubber',
		'Silicone',
		'Stainless Steel',
		'14K Gold',
		'18K Gold',
		'Titanium',
	],
	WatchFaceShape: ['Oval', 'Rectangle', 'Round', 'Square', 'Tonneau'],
	WatchCrystalMaterial: ['Acrylic', 'Mineral', 'Other', 'Plastic', 'Sapphire', 'Synthetic Sapphire'],
	WatchMovement: ['Automatic', 'Manual', 'Other', 'Quartz'],
	WatchMovementType: [
		'Analog Quartz',
		'Automatic',
		'Japanese Quartz',
		'Manual',
		'Mechanical',
		'Smart Watch',
		'Swiss Quartz',
	],
	SwatchVariantAttribute5: ['color', 'engineModel', 'vehicleMake', 'vehicleModel', 'vehicleYear'],
	WatercraftVariantAttributeName: ['color', 'engineModel', 'size', 'vehicleMake', 'vehicleModel', 'vehicleYear'],
	WheelsWheelComponentsVariantAttributeName: ['color', 'count', 'diameter', 'finish', 'size'],
	Locale: ['en'],
	Mart: ['ASDA_GM', 'WALMART_CA', 'WALMART_US'],
	ProcessMode: ['MERGE', 'REPLACE'],
	SellingChannel: ['marketplacewfs'],
	SubCategory: [
		'animal_accessories',
		'animal_food',
		'animal_health_and_grooming',
		'animal_other',
		'art_and_craft_other',
		'baby_clothing',
		'baby_food',
		'baby_furniture',
		'baby_other',
		'baby_toys',
		'bedding',
		'building_supply',
		'cameras_and_lenses',
		'carriers_and_accessories_other',
		'cases_and_bags',
		'cell_phones',
		'ceremonial_clothing_and_accessories',
		'child_car_seats',
		'cleaning_and_chemical',
		'clothing_other',
		'computer_components',
		'computers',
		'costumes',
		'cycling',
		'decorations_and_favors',
		'electrical',
		'electronics_accessories',
		'electronics_cables',
		'electronics_other',
		'food_and_beverage_other',
		'footwear_other',
		'fuels_and_lubricants',
		'funeral',
		'furniture_other',
		'garden_and_patio_other',
		'gift_supply_and_awards',
		'grills_and_outdoor_cooking',
		'hardware',
		'health_and_beauty_electronics',
		'home_other',
		'instrument_accessories',
		'jewelry_other',
		'land_vehicles',
		'large_appliances',
		'medical_aids',
		'medicine_and_supplements',
		'movies',
		'music',
		'music_cases_and_bags',
		'musical_instruments',
		'office_other',
		'optical',
		'optics',
		'other_other',
		'personal_care',
		'photo_accessories',
		'plumbing_and_hvac',
		'printers_scanners_and_imaging',
		'safety_and_emergency',
		'software',
		'sound_and_recording',
		'sport_and_recreation_other',
		'storage',
		'tools',
		'tools_and_hardware_other',
		'toys_other',
		'tvs_and_video_displays',
		'vehicle_other',
		'vehicle_parts_and_accessories',
		'video_games',
		'video_projectors',
		'watches_other',
		'watercraft',
		'wheels_and_wheel_components',
	],
	Subset: ['EXTERNAL', 'INTERNAL'],
	SpecVersion: ['1.2'],
};
