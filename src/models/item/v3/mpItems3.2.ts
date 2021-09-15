/* tslint:disable */
/* eslint-disable */

// To parse this data:
//
//   import { Convert, Animal, ArtAndCraftCategory, Baby, CarriersAndAccessoriesCategory, ClothingCategory, Electronics, FoodAndBeverageCategory, FootwearCategory, FurnitureCategory, GardenAndPatioCategory, HealthAndBeauty, Home, JewelryCategory, MPBulkRetire, MPItem, MPItemFeed, MPItemFeedHeader, MPLogistics, MPOffer, MPProduct, Media, MusicalInstrument, OccasionAndSeasonal, OfficeCategory, OtherCategory, Photography, SportAndRecreation, ToolsAndHardware, ToysCategory, Vehicle, WatchesCategory } from "./file";
//
//   const animal = Convert.toAnimal(json);
//   const artAndCraftCategory = Convert.toArtAndCraftCategory(json);
//   const baby = Convert.toBaby(json);
//   const carriersAndAccessoriesCategory = Convert.toCarriersAndAccessoriesCategory(json);
//   const clothingCategory = Convert.toClothingCategory(json);
//   const electronics = Convert.toElectronics(json);
//   const foodAndBeverageCategory = Convert.toFoodAndBeverageCategory(json);
//   const footwearCategory = Convert.toFootwearCategory(json);
//   const furnitureCategory = Convert.toFurnitureCategory(json);
//   const gardenAndPatioCategory = Convert.toGardenAndPatioCategory(json);
//   const healthAndBeauty = Convert.toHealthAndBeauty(json);
//   const home = Convert.toHome(json);
//   const jewelryCategory = Convert.toJewelryCategory(json);
//   const mPBulkRetire = Convert.toMPBulkRetire(json);
//   const mPItem = Convert.toMPItem(json);
//   const mPItemFeed = Convert.toMPItemFeed(json);
//   const mPItemFeedHeader = Convert.toMPItemFeedHeader(json);
//   const mPLogistics = Convert.toMPLogistics(json);
//   const mPOffer = Convert.toMPOffer(json);
//   const mPProduct = Convert.toMPProduct(json);
//   const media = Convert.toMedia(json);
//   const musicalInstrument = Convert.toMusicalInstrument(json);
//   const occasionAndSeasonal = Convert.toOccasionAndSeasonal(json);
//   const officeCategory = Convert.toOfficeCategory(json);
//   const otherCategory = Convert.toOtherCategory(json);
//   const photography = Convert.toPhotography(json);
//   const sportAndRecreation = Convert.toSportAndRecreation(json);
//   const toolsAndHardware = Convert.toToolsAndHardware(json);
//   const toysCategory = Convert.toToysCategory(json);
//   const vehicle = Convert.toVehicle(json);
//   const watchesCategory = Convert.toWatchesCategory(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Animal {
	$schema: string;
	type: ShippingWeightType;
	title: string;
	properties: AnimalProperties;
	oneOf: OneOf[];
	additionalProperties: boolean;
}

export interface OneOf {
	required: string[];
}

export interface AnimalProperties {
	AnimalHealthAndGrooming: AnimalHealthAndGrooming;
	AnimalAccessories: AnimalAccessoriesClass;
	AnimalFood: AnimalFood;
	AnimalEverythingElse: AnimalAccessoriesClass;
}

export interface AnimalAccessoriesClass {
	$schema: string;
	type: ShippingWeightType;
	properties: AnimalAccessoriesProperties;
	required: AnimalAccessoriesRequired[];
	additionalProperties: boolean;
}

export interface AnimalAccessoriesProperties {
	shortDescription: Sku;
	keyFeatures: FabricCareInstructions;
	brand: Sku;
	manufacturer: Sku;
	manufacturerPartNumber: Sku;
	modelNumber: Sku;
	multipackQuantity: MinimumAdvertisedPrice;
	countPerPack: MinimumAdvertisedPrice;
	count: Sku;
	pieceCount: MinimumAdvertisedPrice;
	mainImageUrl: Sku;
	productSecondaryImageURL: FabricCareInstructions;
	animalType: Sku;
	animalBreed: Sku;
	animalLifestage: Sku;
	minimumWeight: ShippingWeight;
	maximumWeight: ShippingWeight;
	petSize: Sku;
	capacity?: Sku;
	shape?: Sku;
	color: Sku;
	colorCategory: CountryOfOriginComponents;
	size: Sku;
	assembledProductLength: ShippingWeight;
	assembledProductWidth: ShippingWeight;
	assembledProductHeight: ShippingWeight;
	assembledProductWeight: ShippingWeight;
	variantGroupId: Sku;
	variantAttributeNames: CountryOfOriginComponents;
	isPrimaryVariant: ProcessMode;
	swatchImages: SwatchImages;
	isProp65WarningRequired: ProcessMode;
	prop65WarningText: Sku;
	smallPartsWarnings?: SmallPartsWarnings;
	batteryTechnologyType: ProcessMode;
	requiresTextileActLabeling: ProcessMode;
	countryOfOriginTextiles: ProcessMode;
	hasExpiration: ProcessMode;
	hasPricePerUnit: ProcessMode;
	pricePerUnitQuantity: MinimumAdvertisedPrice;
	pricePerUnitUom: ProcessMode;
	hasWarranty: ProcessMode;
	warrantyURL: Sku;
	warrantyText: Sku;
	hasFuelContainer: ProcessMode;
	material: Sku;
	fabricContent: FabricContent;
	fabricCareInstructions: FabricCareInstructions;
	globalBrandLicense: FabricCareInstructions;
	features?: FabricCareInstructions;
	keywords?: Sku;
	instructions: Sku;
	batteriesRequired: ProcessMode;
	batterySize?: Sku;
	character?: Sku;
	isFoldable: ProcessMode;
	isReflective?: ProcessMode;
	isRetractable?: ProcessMode;
	maximumTemperature?: ShippingWeight;
	minimumTemperature?: ShippingWeight;
	pattern: Sku;
	sportsLeague: Sku;
	sportsTeam: Sku;
	numberOfSteps?: MinimumAdvertisedPrice;
	isAerosol?: ProcessMode;
	hasBatteries?: ProcessMode;
	isChemical?: ProcessMode;
	shelfLife?: ShippingWeight;
	isPortable?: ProcessMode;
	autographedBy?: Sku;
	athlete?: Sku;
}

export interface Sku {
	type: PurpleType;
	title?: string;
	minLength: number;
	maxLength?: number;
	format?: SkuFormat;
}

export enum SkuFormat {
	URI = 'uri',
}

export enum PurpleType {
	Number = 'number',
	String = 'string',
}

export interface ShippingWeight {
	$schema: string;
	type: ShippingWeightType;
	title: string;
	properties: ShippingWeightProperties;
	required: ShippingWeightRequired[];
	additionalProperties: boolean;
}

export interface ShippingWeightProperties {
	unit: ShippingOverrideActionClass;
	measure: MinimumAdvertisedPrice;
}

export interface MinimumAdvertisedPrice {
	type: MinimumAdvertisedPriceType;
	minimum: number;
	maximum: number;
	exclusiveMaximum: boolean;
	multipleOf?: number;
	title?: string;
}

export enum MinimumAdvertisedPriceType {
	Integer = 'integer',
	Number = 'number',
}

export interface ShippingOverrideActionClass {
	type: PurpleType;
	enum: string[];
}

export enum ShippingWeightRequired {
	Measure = 'measure',
	Unit = 'unit',
}

export enum ShippingWeightType {
	Object = 'object',
}

export interface ProcessMode {
	type: PurpleType;
	title: string;
	enum: string[];
}

export interface CountryOfOriginComponents {
	$schema: string;
	type: CountryOfOriginComponentsType;
	title: CountryOfOriginComponentsTitle;
	items: ShippingOverrideActionClass;
	minItems: number;
}

export enum CountryOfOriginComponentsTitle {
	AgeGroup = 'Age Group',
	ColorCategory = 'Color Category',
	CountryOfOriginComponents = 'Country of Origin - Components',
	FireExtinguisherClasses = 'Fire Extinguisher Classes',
	GiftCardCategory = 'Gift Card Category',
	VariantAttributeNames = 'Variant Attribute Names',
	VideoGameGenre = 'Video Game Genre',
}

export enum CountryOfOriginComponentsType {
	Array = 'array',
}

export interface FabricCareInstructions {
	$schema: string;
	type: CountryOfOriginComponentsType;
	title: string;
	items: Sku;
	minItems: number;
}

export interface FabricContent {
	$schema: string;
	type: CountryOfOriginComponentsType;
	title: FabricContentTitle;
	items: FabricContentItems;
	minItems: number;
}

export interface FabricContentItems {
	$schema: string;
	type: ShippingWeightType;
	properties: PurpleProperties;
	required: ItemsRequired[];
	additionalProperties: boolean;
}

export interface PurpleProperties {
	materialName: Sku;
	materialPercentage: MinimumAdvertisedPrice;
}

export enum ItemsRequired {
	MaterialName = 'materialName',
}

export enum FabricContentTitle {
	FabricContent = 'Fabric Content',
}

export interface SmallPartsWarnings {
	$schema: string;
	type: CountryOfOriginComponentsType;
	title: SmallPartsWarningsTitle;
	items: SmallPartsWarningsItems;
	minItems: number;
}

export interface SmallPartsWarningsItems {
	type: MinimumAdvertisedPriceType;
	enum: number[];
}

export enum SmallPartsWarningsTitle {
	SmallPartsWarningCode = 'Small Parts Warning Code',
}

export interface SwatchImages {
	$schema: string;
	type: CountryOfOriginComponentsType;
	title: SwatchImagesTitle;
	items: SwatchImagesItems;
	minItems: number;
}

export interface SwatchImagesItems {
	$schema: string;
	type: ShippingWeightType;
	properties: FluffyProperties;
	additionalProperties: boolean;
}

export interface FluffyProperties {
	swatchVariantAttribute: Sku;
	swatchImageUrl: Sku;
}

export enum SwatchImagesTitle {
	SwatchImages = 'Swatch Images',
}

export enum AnimalAccessoriesRequired {
	Brand = 'brand',
	MainImageURL = 'mainImageUrl',
	RequiresTextileActLabeling = 'requiresTextileActLabeling',
	ShortDescription = 'shortDescription',
}

export interface AnimalFood {
	$schema: string;
	type: ShippingWeightType;
	properties: AnimalFoodProperties;
	required: AnimalAccessoriesRequired[];
	additionalProperties: boolean;
}

export interface AnimalFoodProperties {
	shortDescription: Sku;
	keyFeatures: FabricCareInstructions;
	brand: Sku;
	manufacturer: Sku;
	manufacturerPartNumber: Sku;
	modelNumber: Sku;
	multipackQuantity: MinimumAdvertisedPrice;
	countPerPack: MinimumAdvertisedPrice;
	count: Sku;
	mainImageUrl: Sku;
	productSecondaryImageURL: FabricCareInstructions;
	animalType: Sku;
	animalBreed: Sku;
	animalLifestage: Sku;
	minimumWeight: ShippingWeight;
	maximumWeight: ShippingWeight;
	petSize: Sku;
	size: Sku;
	petFoodForm: Sku;
	flavor: Sku;
	assembledProductLength: ShippingWeight;
	assembledProductWidth: ShippingWeight;
	assembledProductHeight: ShippingWeight;
	assembledProductWeight: ShippingWeight;
	variantGroupId: Sku;
	variantAttributeNames: CountryOfOriginComponents;
	isPrimaryVariant: ProcessMode;
	swatchImages: SwatchImages;
	isProp65WarningRequired: ProcessMode;
	prop65WarningText: Sku;
	hasExpiration: ProcessMode;
	hasPricePerUnit: ProcessMode;
	pricePerUnitQuantity: MinimumAdvertisedPrice;
	pricePerUnitUom: ProcessMode;
	hasGMOs: ProcessMode;
	hasWarranty: ProcessMode;
	warrantyURL: Sku;
	warrantyText: Sku;
	isNutritionFactsLabelRequired: ProcessMode;
	nutritionFactsLabel: Sku;
	nutritionIngredientsImage: Sku;
	feedingInstructions: Sku;
	animalHealthConcern: FabricCareInstructions;
	globalBrandLicense: FabricCareInstructions;
	features: FabricCareInstructions;
	keywords: Sku;
	instructions: Sku;
}

export interface AnimalHealthAndGrooming {
	$schema: string;
	type: ShippingWeightType;
	properties: AnimalHealthAndGroomingProperties;
	required: string[];
	additionalProperties: boolean;
}

export interface AnimalHealthAndGroomingProperties {
	pieceCount: MinimumAdvertisedPrice;
	shortDescription: Sku;
	keyFeatures: FabricCareInstructions;
	brand: Sku;
	manufacturer: Sku;
	manufacturerPartNumber: Sku;
	modelNumber: Sku;
	multipackQuantity: MinimumAdvertisedPrice;
	countPerPack: MinimumAdvertisedPrice;
	count: Sku;
	mainImageUrl: Sku;
	productSecondaryImageURL: FabricCareInstructions;
	animalType: Sku;
	animalBreed: Sku;
	animalLifestage: Sku;
	minimumWeight: ShippingWeight;
	maximumWeight: ShippingWeight;
	petSize: Sku;
	size: Sku;
	animalHealthConcern: FabricCareInstructions;
	dosage: Sku;
	assembledProductLength: ShippingWeight;
	assembledProductWidth: ShippingWeight;
	assembledProductHeight: ShippingWeight;
	assembledProductWeight: ShippingWeight;
	variantGroupId: Sku;
	variantAttributeNames: CountryOfOriginComponents;
	isPrimaryVariant: ProcessMode;
	swatchImages: SwatchImages;
	isProp65WarningRequired: ProcessMode;
	prop65WarningText: Sku;
	hasExpiration: ProcessMode;
	hasPricePerUnit: ProcessMode;
	pricePerUnitQuantity: MinimumAdvertisedPrice;
	pricePerUnitUom: ProcessMode;
	hasWarranty: ProcessMode;
	warrantyURL: Sku;
	warrantyText: Sku;
	isNutritionFactsLabelRequired: ProcessMode;
	nutritionFactsLabel: Sku;
	hasIngredientList: ProcessMode;
	ingredientListImage: Sku;
	ingredients: Sku;
	isDrugFactsLabelRequired: ProcessMode;
	drugFactsLabel: Sku;
	drugDosageInstructionsImage: Sku;
	drugActiveInactiveIngredientsImage: Sku;
	globalBrandLicense: FabricCareInstructions;
	activeIngredients: ActiveIngredients;
	inactiveIngredients: FabricCareInstructions;
	stopUseIndications: FabricCareInstructions;
	form: Sku;
	scent: Sku;
	hairLength: FabricCareInstructions;
	powerType: Sku;
	isDisposable: ProcessMode;
	features: FabricCareInstructions;
	keywords: Sku;
	instructions: Sku;
	isRetractable: ProcessMode;
}

export interface ActiveIngredients {
	$schema: string;
	type: CountryOfOriginComponentsType;
	title: string;
	items: ActiveIngredientsItems;
	minItems: number;
}

export interface ActiveIngredientsItems {
	$schema: string;
	type: ShippingWeightType;
	properties: TentacledProperties;
	required: string[];
	additionalProperties: boolean;
}

export interface TentacledProperties {
	activeIngredientName: Sku;
	activeIngredientPercentage: MinimumAdvertisedPrice;
}

export interface ArtAndCraftCategory {
	$schema: string;
	type: ShippingWeightType;
	title: string;
	properties: ArtAndCraftCategoryProperties;
	oneOf: OneOf[];
	additionalProperties: boolean;
}

export interface ArtAndCraftCategoryProperties {
	ArtAndCraft: ArtAndCraft;
}

export interface ArtAndCraft {
	$schema: string;
	type: ShippingWeightType;
	properties: ArtAndCraftProperties;
	required: AnimalAccessoriesRequired[];
	additionalProperties: boolean;
}

export interface ArtAndCraftProperties {
	shortDescription: Sku;
	keyFeatures: FabricCareInstructions;
	brand: Sku;
	manufacturer: Sku;
	manufacturerPartNumber: Sku;
	modelNumber: Sku;
	multipackQuantity: MinimumAdvertisedPrice;
	countPerPack: MinimumAdvertisedPrice;
	count: Sku;
	pieceCount: MinimumAdvertisedPrice;
	mainImageUrl: Sku;
	productSecondaryImageURL: FabricCareInstructions;
	color: Sku;
	colorCategory: CountryOfOriginComponents;
	material: Sku;
	pattern: Sku;
	size: Sku;
	metal: Sku;
	plating: Sku;
	finish: Sku;
	form: Sku;
	shape: Sku;
	scent: Sku;
	gender: ProcessMode;
	ageGroup: CountryOfOriginComponents;
	ageRange: AgeRange;
	artPaintType: Sku;
	assembledProductLength: ShippingWeight;
	assembledProductWidth: ShippingWeight;
	assembledProductHeight: ShippingWeight;
	assembledProductWeight: ShippingWeight;
	variantGroupId: Sku;
	variantAttributeNames: CountryOfOriginComponents;
	isPrimaryVariant: ProcessMode;
	swatchImages: SwatchImages;
	isProp65WarningRequired: ProcessMode;
	prop65WarningText: Sku;
	smallPartsWarnings: SmallPartsWarnings;
	batteryTechnologyType: ProcessMode;
	hasIngredientList: ProcessMode;
	ingredientListImage: Sku;
	ingredients: Sku;
	isAerosol: ProcessMode;
	isChemical: ProcessMode;
	compositeWoodCertificationCode: CompositeWoodCertificationCode;
	hasExpiration: ProcessMode;
	hasWarranty: ProcessMode;
	warrantyURL: Sku;
	warrantyText: Sku;
	hasFuelContainer: ProcessMode;
	fabricContent: FabricContent;
	fabricCareInstructions: FabricCareInstructions;
	capacity: Sku;
	diameter: ShippingWeight;
	culturalStyle: Sku;
	subject: Sku;
	theme: Sku;
	occasion: Sku;
	isAntique: ProcessMode;
	isCollectible: ProcessMode;
	character: Sku;
	isPowered: ProcessMode;
	powerType: Sku;
	isBulk: ProcessMode;
	isHandmade: ProcessMode;
	isSelfAdhesive: ProcessMode;
	isAntitarnish: ProcessMode;
	isReusable: ProcessMode;
	isRefillable: ProcessMode;
	isDisposable: ProcessMode;
	isRecyclable: ProcessMode;
	recommendedUses: FabricCareInstructions;
	recommendedSurfaces: FabricCareInstructions;
	chainLength: ShippingWeight;
	skillLevel: Sku;
	globalBrandLicense: FabricCareInstructions;
	features: FabricCareInstructions;
	keywords: Sku;
}

export interface AgeRange {
	$schema: string;
	type: ShippingWeightType;
	properties: AgeRangeProperties;
	additionalProperties: boolean;
}

export interface AgeRangeProperties {
	RangeMinimum: MinimumAdvertisedPrice;
	RangeMaximum: MinimumAdvertisedPrice;
	unit: ProcessMode;
}

export interface CompositeWoodCertificationCode {
	type: MinimumAdvertisedPriceType;
	title: string;
	enum: number[];
}

export interface Baby {
	$schema: string;
	type: ShippingWeightType;
	title: string;
	properties: BabyProperties;
	oneOf: OneOf[];
	additionalProperties: boolean;
}

export interface BabyProperties {
	BabyFood: BabyFood;
	BabyOther: BabyFurniture;
	ChildCarSeats: ChildCarSeats;
	BabyFurniture: BabyFurniture;
	BabyToys: BabyFurniture;
	BabyClothing: BabyClothing;
}

export interface BabyClothing {
	$schema: string;
	type: ShippingWeightType;
	properties: BabyClothingProperties;
	required: AnimalAccessoriesRequired[];
	additionalProperties: boolean;
}

export interface BabyClothingProperties {
	shortDescription: Sku;
	keyFeatures: FabricCareInstructions;
	brand: Sku;
	manufacturer: Sku;
	modelNumber: Sku;
	manufacturerPartNumber: Sku;
	multipackQuantity: MinimumAdvertisedPrice;
	countPerPack: MinimumAdvertisedPrice;
	count: Sku;
	pieceCount: MinimumAdvertisedPrice;
	mainImageUrl: Sku;
	productSecondaryImageURL: FabricCareInstructions;
	color: Sku;
	colorCategory: CountryOfOriginComponents;
	gender: ProcessMode;
	babyClothingSize: Sku;
	ageGroup: CountryOfOriginComponents;
	ageRange: AgeRange;
	minimumWeight: ShippingWeight;
	maximumWeight: ShippingWeight;
	season: Sku;
	scent: Sku;
	character: Sku;
	globalBrandLicense: FabricCareInstructions;
	pattern: Sku;
	shoeCategory: ProcessMode;
	shoeStyle: Sku;
	shoeSize: Sku;
	shoeWidth: Sku;
	shoeClosure: Sku;
	variantGroupId: Sku;
	variantAttributeNames: CountryOfOriginComponents;
	isPrimaryVariant: ProcessMode;
	swatchImages: SwatchImages;
	isProp65WarningRequired: ProcessMode;
	prop65WarningText: Sku;
	smallPartsWarnings: SmallPartsWarnings;
	requiresTextileActLabeling: ProcessMode;
	countryOfOriginTextiles: ProcessMode;
	fabricContent: FabricContent;
	fabricCareInstructions: FabricCareInstructions;
	sportsLeague: Sku;
	sportsTeam: Sku;
	theme: Sku;
	athlete: Sku;
	features: FabricCareInstructions;
	keywords: Sku;
}

export interface BabyFood {
	$schema: string;
	type: ShippingWeightType;
	properties: BabyFoodProperties;
	required: AnimalAccessoriesRequired[];
	additionalProperties: boolean;
}

export interface BabyFoodProperties {
	shortDescription: Sku;
	keyFeatures: FabricCareInstructions;
	brand: Sku;
	manufacturer: Sku;
	multipackQuantity: MinimumAdvertisedPrice;
	countPerPack: MinimumAdvertisedPrice;
	count: Sku;
	mainImageUrl: Sku;
	productSecondaryImageURL: FabricCareInstructions;
	flavor: Sku;
	meal: Sku;
	isReadyToEat: ProcessMode;
	size: Sku;
	ageGroup?: CountryOfOriginComponents;
	ageRange?: AgeRange;
	character: Sku;
	globalBrandLicense?: FabricCareInstructions;
	variantGroupId: Sku;
	variantAttributeNames: CountryOfOriginComponents;
	isPrimaryVariant: ProcessMode;
	swatchImages: SwatchImages;
	isProp65WarningRequired: ProcessMode;
	prop65WarningText: Sku;
	hasPricePerUnit: ProcessMode;
	pricePerUnitQuantity: MinimumAdvertisedPrice;
	pricePerUnitUom: ProcessMode;
	hasExpiration: ProcessMode;
	shelfLife?: ShippingWeight;
	isNutritionFactsLabelRequired: ProcessMode;
	nutritionFactsLabel: Sku;
	nutritionIngredientsImage: Sku;
	hasIngredientList?: ProcessMode;
	ingredientListImage?: Sku;
	ingredients: Sku;
	hasGMOs: ProcessMode;
	servingSize: Sku;
	servingsPerContainer: MinimumAdvertisedPrice;
	calories: ShippingWeight;
	caloriesFromFat: ShippingWeight;
	totalFat: ShippingWeight;
	totalFatPercentageDailyValue: MinimumAdvertisedPrice;
	fatCaloriesPerGram: ShippingWeight;
	totalCarbohydrate: ShippingWeight;
	totalCarbohydratePercentageDailyValue: MinimumAdvertisedPrice;
	carbohydrateCaloriesPerGram: ShippingWeight;
	nutrients: Nutrients;
	proteinCaloriesPerGram: ShippingWeight;
	totalProteinPercentageDailyValue: MinimumAdvertisedPrice;
	totalProtein: ShippingWeight;
	foodForm: Sku;
	containerType: FabricCareInstructions;
	isImitation: ProcessMode;
	usdaInspected: ProcessMode;
	hasHighFructoseCornSyrup: ProcessMode;
	fluidOuncesSupplying100Calories?: ShippingWeight;
	foodAllergenStatements: FabricCareInstructions;
	babyFoodPackaging?: Sku;
	babyFormulaStage?: FabricCareInstructions;
	babyFoodStage?: FabricCareInstructions;
	instructions: Sku;
	features?: FabricCareInstructions;
	keywords?: Sku;
	safeHandlingInstructions: Sku;
	cuisine: FabricCareInstructions;
	foodPreparationTips: FabricCareInstructions;
	foodStorageTips: FabricCareInstructions;
	manufacturerPartNumber?: Sku;
	modelNumber?: Sku;
	pieceCount?: MinimumAdvertisedPrice;
	isGmoFree?: ProcessMode;
	timeAged?: ShippingWeight;
	caffeineDesignation?: ProcessMode;
	spiceLevel?: Sku;
	isMadeInHomeKitchen?: ProcessMode;
	beefCut?: Sku;
	poultryCut?: Sku;
	releaseDate?: FeedDateClass;
}

export interface Nutrients {
	$schema: string;
	type: CountryOfOriginComponentsType;
	title: string;
	items: NutrientsItems;
	minItems: number;
}

export interface NutrientsItems {
	$schema: string;
	type: ShippingWeightType;
	properties: StickyProperties;
	required: string[];
	additionalProperties: boolean;
}

export interface StickyProperties {
	nutrientName: Sku;
	nutrientAmount: Sku;
	nutrientPercentageDailyValue: Sku;
	nutrientFootnote: Sku;
}

export interface FeedDateClass {
	type: PurpleType;
	title: string;
	format: FeedDateFormat;
}

export enum FeedDateFormat {
	DateTime = 'date-time',
}

export interface BabyFurniture {
	$schema: string;
	type: ShippingWeightType;
	properties: BabyFurnitureProperties;
	required: AnimalAccessoriesRequired[];
	additionalProperties: boolean;
}

export interface BabyFurnitureProperties {
	shortDescription: Sku;
	keyFeatures: FabricCareInstructions;
	brand: Sku;
	manufacturer: Sku;
	modelNumber: Sku;
	manufacturerPartNumber: Sku;
	multipackQuantity: MinimumAdvertisedPrice;
	countPerPack: MinimumAdvertisedPrice;
	count: Sku;
	pieceCount?: MinimumAdvertisedPrice;
	mainImageUrl: Sku;
	productSecondaryImageURL: FabricCareInstructions;
	color: Sku;
	colorCategory: CountryOfOriginComponents;
	gender: ProcessMode;
	size: Sku;
	ageGroup: CountryOfOriginComponents;
	ageRange?: AgeRange;
	minimumWeight?: ShippingWeight;
	maximumWeight?: ShippingWeight;
	material: Sku;
	pattern: Sku;
	character: Sku;
	globalBrandLicense: FabricCareInstructions;
	bedSize?: Sku;
	mattressFirmness?: Sku;
	fillMaterial?: FabricCareInstructions;
	finish?: Sku;
	shape?: Sku;
	isFoldable?: ProcessMode;
	isWheeled?: ProcessMode;
	homeDecorStyle?: Sku;
	assembledProductLength: ShippingWeight;
	assembledProductWidth: ShippingWeight;
	assembledProductHeight: ShippingWeight;
	assembledProductWeight: ShippingWeight;
	variantGroupId: Sku;
	variantAttributeNames: CountryOfOriginComponents;
	isPrimaryVariant: ProcessMode;
	swatchImages: SwatchImages;
	isProp65WarningRequired: ProcessMode;
	prop65WarningText: Sku;
	smallPartsWarnings: SmallPartsWarnings;
	requiresTextileActLabeling?: ProcessMode;
	countryOfOriginTextiles?: ProcessMode;
	hasWarranty: ProcessMode;
	warrantyURL: Sku;
	warrantyText: Sku;
	isAssemblyRequired?: ProcessMode;
	assemblyInstructions?: Sku;
	fabricContent: FabricContent;
	fabricCareInstructions: FabricCareInstructions;
	sportsLeague: Sku;
	sportsTeam: Sku;
	athlete: Sku;
	features: FabricCareInstructions;
	keywords: Sku;
	collection?: Sku;
	diaperSize?: Sku;
	diaposableBabyDiaperType?: FabricCareInstructions;
	scent?: Sku;
	batteryTechnologyType?: ProcessMode;
	hasPricePerUnit?: ProcessMode;
	pricePerUnitQuantity?: MinimumAdvertisedPrice;
	pricePerUnitUom?: ProcessMode;
	hasExpiration?: ProcessMode;
	hasIngredientList?: ProcessMode;
	ingredientListImage?: Sku;
	ingredients?: Sku;
	batteriesRequired?: ProcessMode;
	season?: Sku;
	educationalFocus?: FabricCareInstructions;
	theme?: Sku;
	makesNoise?: ProcessMode;
	awardsWon?: FabricCareInstructions;
	animalType?: Sku;
	isPowered?: ProcessMode;
	powerType?: Sku;
	screenSize?: ShippingWeight;
	bedPillowSize?: FabricCareInstructions;
	threadCount?: MinimumAdvertisedPrice;
	isSet?: ProcessMode;
	occasion?: Sku;
	bedStyle?: Sku;
	monogramLetter?: Sku;
}

export interface ChildCarSeats {
	$schema: string;
	type: ShippingWeightType;
	properties: ChildCarSeatsProperties;
	required: AnimalAccessoriesRequired[];
	additionalProperties: boolean;
}

export interface ChildCarSeatsProperties {
	shortDescription: Sku;
	keyFeatures: FabricCareInstructions;
	brand: Sku;
	manufacturer: Sku;
	modelNumber: Sku;
	manufacturerPartNumber: Sku;
	multipackQuantity: MinimumAdvertisedPrice;
	countPerPack: MinimumAdvertisedPrice;
	count: Sku;
	pieceCount: MinimumAdvertisedPrice;
	mainImageUrl: Sku;
	productSecondaryImageURL: FabricCareInstructions;
	color: Sku;
	colorCategory: CountryOfOriginComponents;
	pattern: Sku;
	material: Sku;
	gender: ProcessMode;
	size: Sku;
	ageGroup: CountryOfOriginComponents;
	ageRange: AgeRange;
	minimumWeight: ShippingWeight;
	maximumWeight: ShippingWeight;
	character: Sku;
	globalBrandLicense: FabricCareInstructions;
	isFoldable: ProcessMode;
	isWheeled: ProcessMode;
	strollerType: FabricCareInstructions;
	seatingCapacity: MinimumAdvertisedPrice;
	babyCarrierStyle: FabricCareInstructions;
	babyCarrierPosition: FabricCareInstructions;
	safetyHarnessStyle: ProcessMode;
	childWalkingHarnessStyle: Sku;
	travelSystemCompatibility: Sku;
	assembledProductLength: ShippingWeight;
	assembledProductWidth: ShippingWeight;
	assembledProductHeight: ShippingWeight;
	assembledProductWeight: ShippingWeight;
	variantGroupId: Sku;
	variantAttributeNames: CountryOfOriginComponents;
	isPrimaryVariant: ProcessMode;
	swatchImages: SwatchImages;
	isProp65WarningRequired: ProcessMode;
	prop65WarningText: Sku;
	smallPartsWarnings: SmallPartsWarnings;
	batteryTechnologyType: ProcessMode;
	hasWarranty: ProcessMode;
	warrantyURL: Sku;
	warrantyText: Sku;
	isAssemblyRequired: ProcessMode;
	assemblyInstructions: Sku;
	requiresTextileActLabeling: ProcessMode;
	countryOfOriginTextiles: ProcessMode;
	fabricContent: FabricContent;
	fabricCareInstructions: FabricCareInstructions;
	childCarSeatType: ProcessMode;
	facingDirection: Sku;
	forwardFacingMinimumWeight: ShippingWeight;
	forwardFacingMaximumWeight: ShippingWeight;
	rearFacingMinimumWeight: ShippingWeight;
	rearFacingMaximumWeight: ShippingWeight;
	hasLatchSystem: ProcessMode;
	carSeatBaseDepth: ShippingWeight;
	carSeatBaseWidth: ShippingWeight;
	carSeatMaxChildHeight: ShippingWeight;
	sportsLeague: Sku;
	sportsTeam: Sku;
	athlete: Sku;
	features: FabricCareInstructions;
	keywords: Sku;
}

export interface CarriersAndAccessoriesCategory {
	$schema: string;
	type: ShippingWeightType;
	title: string;
	properties: CarriersAndAccessoriesCategoryProperties;
	oneOf: OneOf[];
	additionalProperties: boolean;
}

export interface CarriersAndAccessoriesCategoryProperties {
	CasesAndBags: CarriersAndAccessories;
	CarriersAndAccessories: CarriersAndAccessories;
}

export interface CarriersAndAccessories {
	$schema: string;
	type: ShippingWeightType;
	properties: CarriersAndAccessoriesProperties;
	required: AnimalAccessoriesRequired[];
	additionalProperties: boolean;
}

export interface CarriersAndAccessoriesProperties {
	shortDescription: Sku;
	keyFeatures: FabricCareInstructions;
	brand: Sku;
	manufacturer: Sku;
	manufacturerPartNumber: Sku;
	modelNumber: Sku;
	multipackQuantity: MinimumAdvertisedPrice;
	countPerPack: MinimumAdvertisedPrice;
	pieceCount: MinimumAdvertisedPrice;
	count: Sku;
	mainImageUrl: Sku;
	productSecondaryImageURL: FabricCareInstructions;
	color: Sku;
	colorCategory: CountryOfOriginComponents;
	pattern: Sku;
	material: Sku;
	gender: ProcessMode;
	size: Sku;
	ageGroup: CountryOfOriginComponents;
	dimensions?: Sku;
	capacity: Sku;
	isWheeled: ProcessMode;
	numberOfWheels: MinimumAdvertisedPrice;
	character: Sku;
	assembledProductLength: ShippingWeight;
	assembledProductWidth: ShippingWeight;
	assembledProductHeight: ShippingWeight;
	assembledProductWeight: ShippingWeight;
	variantGroupId: Sku;
	variantAttributeNames: CountryOfOriginComponents;
	isPrimaryVariant: ProcessMode;
	swatchImages: SwatchImages;
	isProp65WarningRequired: ProcessMode;
	prop65WarningText: Sku;
	batteryTechnologyType: ProcessMode;
	hasWarranty: ProcessMode;
	warrantyURL: Sku;
	warrantyText: Sku;
	requiresTextileActLabeling: ProcessMode;
	countryOfOriginTextiles: ProcessMode;
	fabricContent: FabricContent;
	fabricCareInstructions: FabricCareInstructions;
	handleMaterial: FabricCareInstructions;
	handleType: Sku;
	zipperMaterial: Sku;
	lockingMechanism: Sku;
	leatherGrade: Sku;
	bagCaseFeature?: Sku;
	isWeatherResistant: ProcessMode;
	isWaterproof: ProcessMode;
	sportsLeague: Sku;
	sportsTeam: Sku;
	athlete: Sku;
	autographedBy: Sku;
	features: FabricCareInstructions;
	keywords: Sku;
	monogramLetter: Sku;
	isMadeFromRecycledMaterial: ProcessMode;
	recycledMaterialContent: RecycledMaterialContent;
	isFairTrade?: ProcessMode;
	designer: Sku;
	globalBrandLicense: FabricCareInstructions;
	isLined: ProcessMode;
	hardOrSoftCase?: ProcessMode;
	compatibleBrands?: FabricCareInstructions;
	compatibleDevices?: Sku;
	screenSize?: ShippingWeight;
	bagStyle?: Sku;
	shape?: Sku;
	maximumWeight?: ShippingWeight;
	finish?: Sku;
	numberOfCompartments?: MinimumAdvertisedPrice;
	hasRemovableStrap?: ProcessMode;
	fastenerType?: Sku;
	sport?: Sku;
	isReusable?: ProcessMode;
	isFoldable?: ProcessMode;
	recommendedUses?: FabricCareInstructions;
	occasion?: Sku;
}

export interface RecycledMaterialContent {
	$schema: string;
	type: CountryOfOriginComponentsType;
	title: string;
	items: RecycledMaterialContentItems;
	minItems: number;
}

export interface RecycledMaterialContentItems {
	$schema: string;
	type: ShippingWeightType;
	properties: IndigoProperties;
	required: string[];
	additionalProperties: boolean;
}

export interface IndigoProperties {
	recycledMaterial: Sku;
	percentageOfRecycledMaterial: MinimumAdvertisedPrice;
}

export interface ClothingCategory {
	$schema: string;
	type: ShippingWeightType;
	title: string;
	properties: ClothingCategoryProperties;
	oneOf: OneOf[];
	additionalProperties: boolean;
}

export interface ClothingCategoryProperties {
	Clothing: Clothing;
}

export interface Clothing {
	$schema: string;
	type: ShippingWeightType;
	properties: ClothingProperties;
	required: AnimalAccessoriesRequired[];
	additionalProperties: boolean;
}

export interface ClothingProperties {
	shortDescription: Sku;
	keyFeatures: FabricCareInstructions;
	brand: Sku;
	manufacturer: Sku;
	manufacturerPartNumber: Sku;
	multipackQuantity: MinimumAdvertisedPrice;
	countPerPack: MinimumAdvertisedPrice;
	count: Sku;
	pieceCount: MinimumAdvertisedPrice;
	modelNumber: Sku;
	mainImageUrl: Sku;
	productSecondaryImageURL: FabricCareInstructions;
	color: Sku;
	colorCategory: CountryOfOriginComponents;
	pattern: Sku;
	material: Sku;
	gender: ProcessMode;
	ageGroup: CountryOfOriginComponents;
	clothingSizeGroup: ProcessMode;
	clothingSize: Sku;
	isSet: ProcessMode;
	variantGroupId: Sku;
	variantAttributeNames: CountryOfOriginComponents;
	isPrimaryVariant: ProcessMode;
	swatchImages: SwatchImages;
	isProp65WarningRequired: ProcessMode;
	prop65WarningText: Sku;
	smallPartsWarnings: SmallPartsWarnings;
	requiresTextileActLabeling: ProcessMode;
	countryOfOriginTextiles: ProcessMode;
	batteryTechnologyType: ProcessMode;
	hasWarranty: ProcessMode;
	warrantyURL: Sku;
	warrantyText: Sku;
	clothingTopStyle: Sku;
	dressShirtSize: Sku;
	sleeveStyle: Sku;
	sleeveLengthStyle: ProcessMode;
	shirtNeckStyle: Sku;
	collarType: Sku;
	jacketStyle: Sku;
	suitBreastingStyle: ProcessMode;
	sweaterStyle: Sku;
	scarfStyle: Sku;
	upperBodyStrapConfiguration: Sku;
	hatSize: ProcessMode;
	hatStyle: Sku;
	braStyle: Sku;
	braSize: Sku;
	chestSize: ShippingWeight;
	pantRise: Sku;
	waistStyle: Sku;
	waistSize: ShippingWeight;
	pantySize: ProcessMode;
	skirtLength: ShippingWeight;
	legOpeningCut: ProcessMode;
	pantLegCut: Sku;
	jeanStyle: Sku;
	jeanWash: Sku;
	jeanFinish: Sku;
	pantSize: Sku;
	pantFit: Sku;
	pantStyle: Sku;
	beltStyle: Sku;
	beltBuckleStyle: Sku;
	pantyStyle: Sku;
	shortsStyle: Sku;
	skirtAndDressCut: Sku;
	skirtLengthStyle: Sku;
	hosieryStyle: Sku;
	tightsSheerness: ProcessMode;
	underwearStyle: Sku;
	sockSize: Sku;
	sockStyle: Sku;
	sockRise: ProcessMode;
	fabricContent: FabricContent;
	fabricCareInstructions: FabricCareInstructions;
	accentColor: Sku;
	clothingWeight: ProcessMode;
	clothingStyle: Sku;
	clothingFit: Sku;
	clothingCut: Sku;
	clothingLengthStyle: Sku;
	fastenerType: Sku;
	swimsuitStyle: Sku;
	dressStyle: Sku;
	gotsCertification: ProcessMode;
	theme: Sku;
	character: Sku;
	globalBrandLicense: FabricCareInstructions;
	sportsLeague: Sku;
	sportsTeam: Sku;
	occasion: Sku;
	activity: Sku;
	sport: Sku;
	season: Sku;
	weather: Sku;
	isMaternity: ProcessMode;
	academicInstitution: Sku;
	athlete: Sku;
	autographedBy: Sku;
	braBandSize: ShippingWeight;
	braCupSize: Sku;
	neckSize: ShippingWeight;
	sleeveLength: ShippingWeight;
	inseam: ShippingWeight;
	isMadeFromRecycledMaterial: ProcessMode;
	recycledMaterialContent: RecycledMaterialContent;
	features: FabricCareInstructions;
	keywords: Sku;
}

export interface Electronics {
	$schema: string;
	type: ShippingWeightType;
	title: string;
	properties: ElectronicsProperties;
	oneOf: OneOf[];
	additionalProperties: boolean;
}

export interface ElectronicsProperties {
	VideoProjectors: VideoProjectors;
	VideoGames: VideoGames;
	ElectronicsAccessories: ElectronicsAccessories;
	ComputerComponents: ComputerComponents;
	ElectronicsCables: ElectronicsCables;
	Software: Software;
	Computers: Computers;
	TVsAndVideoDisplays: TVsAndVideoDisplays;
	CellPhones: CellPhones;
	PrintersScannersAndImaging: PrintersScannersAndImaging;
	ElectronicsOther: ElectronicsOther;
}

export interface CellPhones {
	$schema: string;
	type: ShippingWeightType;
	properties: CellPhonesProperties;
	required: AnimalAccessoriesRequired[];
	additionalProperties: boolean;
}

export interface CellPhonesProperties {
	shortDescription: Sku;
	keyFeatures: FabricCareInstructions;
	brand: Sku;
	manufacturer: Sku;
	manufacturerPartNumber: Sku;
	modelNumber: Sku;
	multipackQuantity: MinimumAdvertisedPrice;
	countPerPack: MinimumAdvertisedPrice;
	count: Sku;
	mainImageUrl: Sku;
	productSecondaryImageURL: FabricCareInstructions;
	color: Sku;
	modelName: Sku;
	screenSize: ShippingWeight;
	mobileOperatingSystem: FabricCareInstructions;
	cellularNetworkTechnology: Sku;
	cellPhoneServiceProvider: Sku;
	hardDriveCapacity: ShippingWeight;
	frontFacingCameraMegapixels: ShippingWeight;
	rearCameraMegapixels: ShippingWeight;
	cellPhoneType: Sku;
	isProp65WarningRequired: ProcessMode;
	prop65WarningText: Sku;
	batteryTechnologyType: ProcessMode;
	hasWarranty: ProcessMode;
	warrantyURL: Sku;
	warrantyText: Sku;
	hasSignalBooster: ProcessMode;
	variantGroupId: Sku;
	variantAttributeNames: CountryOfOriginComponents;
	isPrimaryVariant: ProcessMode;
	swatchImages: SwatchImages;
	connections: FabricCareInstructions;
	memoryCardType: FabricCareInstructions;
	hasFlash: ProcessMode;
	batteryLife: ShippingWeight;
	talkTime: ShippingWeight;
	standbyTime: ShippingWeight;
	wirelessTechnologies: FabricCareInstructions;
	features: FabricCareInstructions;
	keywords: Sku;
}

export interface ComputerComponents {
	$schema: string;
	type: ShippingWeightType;
	properties: ComputerComponentsProperties;
	required: AnimalAccessoriesRequired[];
	additionalProperties: boolean;
}

export interface ComputerComponentsProperties {
	shortDescription: Sku;
	keyFeatures: FabricCareInstructions;
	brand: Sku;
	manufacturer: Sku;
	manufacturerPartNumber: Sku;
	modelNumber: Sku;
	multipackQuantity: MinimumAdvertisedPrice;
	countPerPack: MinimumAdvertisedPrice;
	pieceCount: MinimumAdvertisedPrice;
	mainImageUrl: Sku;
	productSecondaryImageURL: FabricCareInstructions;
	hardDriveCapacity: ShippingWeight;
	ramMemory: ShippingWeight;
	maximumRamSupported: ShippingWeight;
	internalExternal: ProcessMode;
	processorSpeed: ShippingWeight;
	processorType: FabricCareInstructions;
	isProp65WarningRequired: ProcessMode;
	prop65WarningText: Sku;
	hasWarranty: ProcessMode;
	warrantyURL: Sku;
	warrantyText: Sku;
	variantGroupId: Sku;
	variantAttributeNames: CountryOfOriginComponents;
	isPrimaryVariant: ProcessMode;
	swatchImages: SwatchImages;
	connections: FabricCareInstructions;
	isCordless: ProcessMode;
	memoryCardType: FabricCareInstructions;
	RAMSpeed: ShippingWeight;
	cpuSocketType: FabricCareInstructions;
	motherboardFormFactor: FabricCareInstructions;
	wirelessTechnologies: FabricCareInstructions;
	dataIntegrityCheck: ProcessMode;
	numberOfSpeakers: MinimumAdvertisedPrice;
	rackSize: Sku;
	RAIDlevel: ProcessMode;
	features: FabricCareInstructions;
	keywords: Sku;
	numberOfChannels: Sku;
	count: Sku;
}

export interface Computers {
	$schema: string;
	type: ShippingWeightType;
	properties: ComputersProperties;
	required: AnimalAccessoriesRequired[];
	additionalProperties: boolean;
}

export interface ComputersProperties {
	shortDescription: Sku;
	keyFeatures: FabricCareInstructions;
	brand: Sku;
	manufacturer: Sku;
	manufacturerPartNumber: Sku;
	modelNumber: Sku;
	multipackQuantity: MinimumAdvertisedPrice;
	countPerPack: MinimumAdvertisedPrice;
	count: Sku;
	mainImageUrl: Sku;
	productSecondaryImageURL: FabricCareInstructions;
	color: Sku;
	colorCategory: CountryOfOriginComponents;
	screenSize: ShippingWeight;
	resolution: Sku;
	displayTechnology: Sku;
	hardDriveCapacity: ShippingWeight;
	ramMemory: ShippingWeight;
	maximumRamSupported: ShippingWeight;
	internalExternal: ProcessMode;
	processorSpeed: ShippingWeight;
	processorType: FabricCareInstructions;
	computerStyle: Sku;
	frontFacingCameraMegapixels: ShippingWeight;
	rearCameraMegapixels: ShippingWeight;
	isProp65WarningRequired: ProcessMode;
	prop65WarningText: Sku;
	batteryTechnologyType: ProcessMode;
	hasWarranty: ProcessMode;
	warrantyURL: Sku;
	warrantyText: Sku;
	variantGroupId: Sku;
	variantAttributeNames: CountryOfOriginComponents;
	isPrimaryVariant: ProcessMode;
	swatchImages: SwatchImages;
	operatingSystem: FabricCareInstructions;
	RAMSpeed: ShippingWeight;
	hasTouchscreen: ProcessMode;
	connections: FabricCareInstructions;
	memoryCardType: FabricCareInstructions;
	opticalDrive: Sku;
	graphicsInformation: Sku;
	formFactor: Sku;
	hasSignalBooster: ProcessMode;
	wirelessTechnologies: FabricCareInstructions;
	batteryLife: ShippingWeight;
	dataIntegrityCheck: ProcessMode;
	isPortable: ProcessMode;
	features: FabricCareInstructions;
	keywords: Sku;
	numberOfChannels: Sku;
	globalBrandLicense: FabricCareInstructions;
	configuration: Sku;
	RAIDlevel: ProcessMode;
}

export interface ElectronicsAccessories {
	$schema: string;
	type: ShippingWeightType;
	properties: ElectronicsAccessoriesProperties;
	required: AnimalAccessoriesRequired[];
	additionalProperties: boolean;
}

export interface ElectronicsAccessoriesProperties {
	shortDescription: Sku;
	keyFeatures: FabricCareInstructions;
	brand: Sku;
	manufacturer: Sku;
	manufacturerPartNumber: Sku;
	modelNumber: Sku;
	multipackQuantity: MinimumAdvertisedPrice;
	countPerPack: MinimumAdvertisedPrice;
	count: Sku;
	pieceCount: MinimumAdvertisedPrice;
	mainImageUrl: Sku;
	productSecondaryImageURL: FabricCareInstructions;
	color: Sku;
	colorCategory: CountryOfOriginComponents;
	size: Sku;
	screenSize: ShippingWeight;
	compatibleBrands: FabricCareInstructions;
	compatibleDevices: Sku;
	assembledProductLength: ShippingWeight;
	assembledProductWidth: ShippingWeight;
	assembledProductHeight: ShippingWeight;
	assembledProductWeight: ShippingWeight;
	isProp65WarningRequired: ProcessMode;
	prop65WarningText: Sku;
	batteryTechnologyType: ProcessMode;
	isChemical: ProcessMode;
	variantGroupId: Sku;
	variantAttributeNames: CountryOfOriginComponents;
	isPrimaryVariant: ProcessMode;
	swatchImages: SwatchImages;
	connections: FabricCareInstructions;
	memoryCardType: FabricCareInstructions;
	opticalDrive: Sku;
	tvAndMonitorMountType: Sku;
	maximumLoadWeight: ShippingWeight;
	maximumScreenSize: ShippingWeight;
	minimumScreenSize: ShippingWeight;
	recordableMediaFormats: FabricCareInstructions;
	headphoneFeatures: FabricCareInstructions;
	wirelessTechnologies: FabricCareInstructions;
	audioFeatures: FabricCareInstructions;
	peakAudioPowerCapacity: ShippingWeight;
	audioPowerOutput: ShippingWeight;
	dataTransferRate: ShippingWeight;
	microphoneTechnology: Sku;
	numberOfSpeakers: MinimumAdvertisedPrice;
	mountingPattern: Sku;
	movementDetection: Sku;
	headphoneStyle: Sku;
	features: FabricCareInstructions;
	keywords: Sku;
}

export interface ElectronicsCables {
	$schema: string;
	type: ShippingWeightType;
	properties: ElectronicsCablesProperties;
	required: AnimalAccessoriesRequired[];
	additionalProperties: boolean;
}

export interface ElectronicsCablesProperties {
	shortDescription: Sku;
	keyFeatures: FabricCareInstructions;
	brand: Sku;
	manufacturer: Sku;
	manufacturerPartNumber: Sku;
	modelNumber: Sku;
	multipackQuantity: MinimumAdvertisedPrice;
	countPerPack: MinimumAdvertisedPrice;
	count: Sku;
	mainImageUrl: Sku;
	productSecondaryImageURL: FabricCareInstructions;
	color: Sku;
	cableLength: ShippingWeight;
	compatibleDevices: Sku;
	isProp65WarningRequired: ProcessMode;
	prop65WarningText: Sku;
	batteryTechnologyType: ProcessMode;
	variantGroupId: Sku;
	variantAttributeNames: CountryOfOriginComponents;
	isPrimaryVariant: ProcessMode;
	swatchImages: SwatchImages;
	numberOfTwistedPairsPerCable: MinimumAdvertisedPrice;
	connectorFinish: Sku;
	connections: FabricCareInstructions;
	dataTransferRate: ShippingWeight;
	features: FabricCareInstructions;
	keywords: Sku;
	numberOfChannels: Sku;
	globalBrandLicense: FabricCareInstructions;
}

export interface ElectronicsOther {
	$schema: string;
	type: ShippingWeightType;
	properties: ElectronicsOtherProperties;
	required: AnimalAccessoriesRequired[];
	additionalProperties: boolean;
}

export interface ElectronicsOtherProperties {
	shortDescription: Sku;
	keyFeatures: FabricCareInstructions;
	brand: Sku;
	manufacturer: Sku;
	manufacturerPartNumber: Sku;
	modelNumber: Sku;
	multipackQuantity: MinimumAdvertisedPrice;
	countPerPack: MinimumAdvertisedPrice;
	count: Sku;
	pieceCount: MinimumAdvertisedPrice;
	mainImageUrl: Sku;
	productSecondaryImageURL: FabricCareInstructions;
	platform: Sku;
	assembledProductLength: ShippingWeight;
	assembledProductWidth: ShippingWeight;
	assembledProductHeight: ShippingWeight;
	assembledProductWeight: ShippingWeight;
	isProp65WarningRequired: ProcessMode;
	prop65WarningText: Sku;
	batteryTechnologyType: ProcessMode;
	hasWarranty: ProcessMode;
	warrantyURL: Sku;
	warrantyText: Sku;
	variantGroupId: Sku;
	variantAttributeNames: CountryOfOriginComponents;
	isPrimaryVariant: ProcessMode;
	swatchImages: SwatchImages;
	color: Sku;
	colorCategory: CountryOfOriginComponents;
	connections: FabricCareInstructions;
	isCordless: ProcessMode;
	ageGroup: CountryOfOriginComponents;
	memoryCardType: FabricCareInstructions;
	wirelessTechnologies: FabricCareInstructions;
	audioFeatures: FabricCareInstructions;
	peakAudioPowerCapacity: ShippingWeight;
	audioPowerOutput: ShippingWeight;
	resolution: Sku;
	dataTransferRate: ShippingWeight;
	streamingServices: Sku;
	speakerDriver: Sku;
	numberOfSpeakers: MinimumAdvertisedPrice;
	impedance: Impedance;
	microphoneTechnology: Sku;
	digitalAudioFileFormat: FabricCareInstructions;
	isPortable: ProcessMode;
	features: FabricCareInstructions;
	keywords: Sku;
	numberOfChannels: Sku;
	supportedMediaFormats: Sku;
}

export interface Impedance {
	$schema: string;
	type: ShippingWeightType;
	title: string;
	properties: ImpedanceProperties;
	required: ShippingWeightRequired[];
	additionalProperties: boolean;
}

export interface ImpedanceProperties {
	unit: ShippingOverrideActionClass;
	measure: Measure;
}

export interface Measure {
	type: PurpleType;
	minLength: number;
}

export interface PrintersScannersAndImaging {
	$schema: string;
	type: ShippingWeightType;
	properties: PrintersScannersAndImagingProperties;
	required: AnimalAccessoriesRequired[];
	additionalProperties: boolean;
}

export interface PrintersScannersAndImagingProperties {
	shortDescription: Sku;
	keyFeatures: FabricCareInstructions;
	brand: Sku;
	manufacturer: Sku;
	manufacturerPartNumber: Sku;
	modelNumber: Sku;
	multipackQuantity: MinimumAdvertisedPrice;
	countPerPack: MinimumAdvertisedPrice;
	count: Sku;
	mainImageUrl: Sku;
	productSecondaryImageURL: FabricCareInstructions;
	monochromeColor: ProcessMode;
	printingTechnology: Sku;
	has3dCapabilities: ProcessMode;
	assembledProductLength: ShippingWeight;
	assembledProductWidth: ShippingWeight;
	assembledProductHeight: ShippingWeight;
	assembledProductWeight: ShippingWeight;
	isProp65WarningRequired: ProcessMode;
	prop65WarningText: Sku;
	batteryTechnologyType: ProcessMode;
	hasWarranty: ProcessMode;
	warrantyURL: Sku;
	warrantyText: Sku;
	variantGroupId: Sku;
	variantAttributeNames: CountryOfOriginComponents;
	isPrimaryVariant: ProcessMode;
	swatchImages: SwatchImages;
	color: Sku;
	connections: FabricCareInstructions;
	memoryCardType: FabricCareInstructions;
	hasAutomaticDocumentFeeder: ProcessMode;
	hasAutomaticTwoSidedPrinting: ProcessMode;
	colorPagesPerMinute: ShippingWeight;
	monochromePagesPerMinute: ShippingWeight;
	maximumDocumentSize: Sku;
	maximumPrintResolution: ShippingWeight;
	maximumScannerResolution: ShippingWeight;
	wirelessTechnologies: FabricCareInstructions;
	features: FabricCareInstructions;
	keywords: Sku;
}

export interface Software {
	$schema: string;
	type: ShippingWeightType;
	properties: SoftwareProperties;
	required: AnimalAccessoriesRequired[];
	additionalProperties: boolean;
}

export interface SoftwareProperties {
	shortDescription: Sku;
	keyFeatures: FabricCareInstructions;
	brand: Sku;
	manufacturer: Sku;
	manufacturerPartNumber: Sku;
	modelNumber: Sku;
	multipackQuantity: MinimumAdvertisedPrice;
	countPerPack: MinimumAdvertisedPrice;
	count: Sku;
	mainImageUrl: Sku;
	productSecondaryImageURL: FabricCareInstructions;
	softwareCategory: FabricCareInstructions;
	isProp65WarningRequired: ProcessMode;
	prop65WarningText: Sku;
	variantGroupId: Sku;
	variantAttributeNames: CountryOfOriginComponents;
	isPrimaryVariant: ProcessMode;
	swatchImages: SwatchImages;
	operatingSystem: FabricCareInstructions;
	systemRequirements: FabricCareInstructions;
	version: Sku;
	releaseDate: FeedDateClass;
	numberOfUsers: MinimumAdvertisedPrice;
	requiredPeripherals: Sku;
	educationalFocus: FabricCareInstructions;
	digitalFileFormat: Sku;
	physicalMediaFormat: Sku;
	features: FabricCareInstructions;
	keywords: Sku;
}

export interface TVsAndVideoDisplays {
	$schema: string;
	type: ShippingWeightType;
	properties: TVsAndVideoDisplaysProperties;
	required: AnimalAccessoriesRequired[];
	additionalProperties: boolean;
}

export interface TVsAndVideoDisplaysProperties {
	shortDescription: Sku;
	keyFeatures: FabricCareInstructions;
	brand: Sku;
	manufacturer: Sku;
	manufacturerPartNumber: Sku;
	modelNumber: Sku;
	multipackQuantity: MinimumAdvertisedPrice;
	countPerPack: MinimumAdvertisedPrice;
	count: Sku;
	mainImageUrl: Sku;
	productSecondaryImageURL: FabricCareInstructions;
	resolution: Sku;
	screenSize: ShippingWeight;
	displayTechnology: Sku;
	televisionType: FabricCareInstructions;
	assembledProductHeight: ShippingWeight;
	assembledProductLength: ShippingWeight;
	assembledProductWidth: ShippingWeight;
	assembledProductWeight: ShippingWeight;
	isProp65WarningRequired: ProcessMode;
	prop65WarningText: Sku;
	batteryTechnologyType: ProcessMode;
	hasWarranty: ProcessMode;
	warrantyURL: Sku;
	warrantyText: Sku;
	variantGroupId: Sku;
	variantAttributeNames: CountryOfOriginComponents;
	isPrimaryVariant: ProcessMode;
	swatchImages: SwatchImages;
	color: Sku;
	colorCategory: CountryOfOriginComponents;
	connections: FabricCareInstructions;
	memoryCardType: FabricCareInstructions;
	hasTouchscreen: ProcessMode;
	inputsAndOutputs: InputsAndOutputs;
	isEnergyStarCertified: ProcessMode;
	aspectRatio: Sku;
	nativeResolution: Sku;
	maximumContrastRatio: Sku;
	refreshRate: ShippingWeight;
	responseTime: ShippingWeight;
	backlightType: Sku;
	hasIntegratedSpeakers: ProcessMode;
	wirelessTechnologies: FabricCareInstructions;
	audioFeatures: FabricCareInstructions;
	peakAudioPowerCapacity: ShippingWeight;
	audioPowerOutput: ShippingWeight;
	features: FabricCareInstructions;
	keywords: Sku;
	streamingServices: Sku;
	mountingPattern: Sku;
}

export interface InputsAndOutputs {
	$schema: string;
	type: CountryOfOriginComponentsType;
	title: string;
	items: InputsAndOutputsItems;
	minItems: number;
}

export interface InputsAndOutputsItems {
	$schema: string;
	type: ShippingWeightType;
	properties: IndecentProperties;
	required: string[];
	additionalProperties: boolean;
}

export interface IndecentProperties {
	inputOutputType: Sku;
	inputOutputQuantity: MinimumAdvertisedPrice;
	inputOutputDirection: ProcessMode;
}

export interface VideoGames {
	$schema: string;
	type: ShippingWeightType;
	properties: VideoGamesProperties;
	required: string[];
	additionalProperties: boolean;
}

export interface VideoGamesProperties {
	shortDescription: Sku;
	keyFeatures: FabricCareInstructions;
	manufacturer: Sku;
	manufacturerPartNumber: Sku;
	modelNumber: Sku;
	multipackQuantity: MinimumAdvertisedPrice;
	countPerPack: MinimumAdvertisedPrice;
	count: Sku;
	mainImageUrl: Sku;
	productSecondaryImageURL: FabricCareInstructions;
	platform: Sku;
	videoGameGenre: CountryOfOriginComponents;
	esrbRating: ProcessMode;
	variantGroupId: Sku;
	variantAttributeNames: CountryOfOriginComponents;
	isPrimaryVariant: ProcessMode;
	swatchImages: SwatchImages;
	ratingReason: Sku;
	sport: Sku;
	edition: Sku;
	releaseDate: FeedDateClass;
	ageGroup: CountryOfOriginComponents;
	videoGameCollection: Sku;
	targetAudience: FabricCareInstructions;
	isOnlineMultiplayerAvailable: ProcessMode;
	isDownloadableContentAvailable: ProcessMode;
	requiredPeripherals: Sku;
	physicalMediaFormat: Sku;
	sportsLeague: Sku;
	sportsTeam: Sku;
	athlete: Sku;
	autographedBy: Sku;
	features: FabricCareInstructions;
	keywords: Sku;
	numberOfChannels: Sku;
	globalBrandLicense: FabricCareInstructions;
}

export interface VideoProjectors {
	$schema: string;
	type: ShippingWeightType;
	properties: VideoProjectorsProperties;
	required: AnimalAccessoriesRequired[];
	additionalProperties: boolean;
}

export interface VideoProjectorsProperties {
	shortDescription: Sku;
	keyFeatures: FabricCareInstructions;
	brand: Sku;
	manufacturer: Sku;
	manufacturerPartNumber: Sku;
	modelNumber: Sku;
	multipackQuantity: MinimumAdvertisedPrice;
	countPerPack: MinimumAdvertisedPrice;
	count: Sku;
	mainImageUrl: Sku;
	productSecondaryImageURL: FabricCareInstructions;
	resolution: Sku;
	displayTechnology: Sku;
	screenSize: ShippingWeight;
	brightness: ShippingWeight;
	aspectRatio: Sku;
	throwRatio: Sku;
	has3dCapabilities: ProcessMode;
	assembledProductHeight: ShippingWeight;
	assembledProductLength: ShippingWeight;
	assembledProductWeight: ShippingWeight;
	assembledProductWidth: ShippingWeight;
	hasBatteries: ProcessMode;
	batteryTechnologyType: ProcessMode;
	variantGroupId: Sku;
	variantAttributeNames: CountryOfOriginComponents;
	isPrimaryVariant: ProcessMode;
	swatchImages: SwatchImages;
	inputsAndOutputs: InputsAndOutputs;
	maximumContrastRatio: Sku;
	lampLife: ShippingWeight;
	hasIntegratedSpeakers: ProcessMode;
	wirelessTechnologies: FabricCareInstructions;
	nativeResolution: Sku;
	features: FabricCareInstructions;
	keywords: Sku;
}

export interface FoodAndBeverageCategory {
	$schema: string;
	type: ShippingWeightType;
	title: string;
	properties: FoodAndBeverageCategoryProperties;
	oneOf: OneOf[];
	additionalProperties: boolean;
}

export interface FoodAndBeverageCategoryProperties {
	AlcoholicBeverages: AlcoholicBeverages;
	FoodAndBeverage: BabyFood;
}

export interface AlcoholicBeverages {
	$schema: string;
	type: ShippingWeightType;
	properties: AlcoholicBeveragesProperties;
	required: AnimalAccessoriesRequired[];
	additionalProperties: boolean;
}

export interface AlcoholicBeveragesProperties {
	shortDescription: Sku;
	keyFeatures: FabricCareInstructions;
	brand: Sku;
	manufacturer: Sku;
	manufacturerPartNumber: Sku;
	modelNumber: Sku;
	multipackQuantity: MinimumAdvertisedPrice;
	countPerPack: MinimumAdvertisedPrice;
	count: Sku;
	mainImageUrl: Sku;
	productSecondaryImageURL: FabricCareInstructions;
	flavor: Sku;
	size: Sku;
	variantGroupId: Sku;
	variantAttributeNames: CountryOfOriginComponents;
	isPrimaryVariant: ProcessMode;
	swatchImages: SwatchImages;
	isProp65WarningRequired: ProcessMode;
	prop65WarningText: Sku;
	hasExpiration: ProcessMode;
	hasPricePerUnit: ProcessMode;
	pricePerUnitQuantity: MinimumAdvertisedPrice;
	pricePerUnitUom: ProcessMode;
	hasGMOs: ProcessMode;
	isNutritionFactsLabelRequired: ProcessMode;
	nutritionFactsLabel: Sku;
	nutritionIngredientsImage: Sku;
	alcoholContentByVolume: Sku;
	alcoholProof: Sku;
	alcoholClassAndType: Sku;
	neutralSpiritsColoringAndFlavoring: Sku;
	wineAppellation: Sku;
	wineVarietal: Sku;
	vintage: MinimumAdvertisedPrice;
	isNonGrape: ProcessMode;
	isEstateBottled: ProcessMode;
	containsSulfites: ProcessMode;
	timeAged: ShippingWeight;
	ingredients: Sku;
	containerType: FabricCareInstructions;
}

export interface FootwearCategory {
	$schema: string;
	type: ShippingWeightType;
	title: string;
	properties: FootwearCategoryProperties;
	oneOf: OneOf[];
	additionalProperties: boolean;
}

export interface FootwearCategoryProperties {
	Footwear: Footwear;
}

export interface Footwear {
	$schema: string;
	type: ShippingWeightType;
	properties: FootwearProperties;
	required: AnimalAccessoriesRequired[];
	additionalProperties: boolean;
}

export interface FootwearProperties {
	shortDescription: Sku;
	keyFeatures: FabricCareInstructions;
	brand: Sku;
	manufacturer: Sku;
	modelNumber: Sku;
	manufacturerPartNumber: Sku;
	multipackQuantity: MinimumAdvertisedPrice;
	countPerPack: MinimumAdvertisedPrice;
	count: Sku;
	mainImageUrl: Sku;
	productSecondaryImageURL: FabricCareInstructions;
	color: Sku;
	colorCategory: CountryOfOriginComponents;
	size: Sku;
	shoeSize: Sku;
	pattern: Sku;
	material: Sku;
	gender: ProcessMode;
	ageGroup: CountryOfOriginComponents;
	sport: Sku;
	shoeWidth: Sku;
	heelHeight: ShippingWeight;
	shoeStyle: Sku;
	casualAndDressShoeType: Sku;
	shoeClosure: Sku;
	isWaterResistant: ProcessMode;
	isOrthopedic: ProcessMode;
	variantGroupId: Sku;
	variantAttributeNames: CountryOfOriginComponents;
	isPrimaryVariant: ProcessMode;
	swatchImages: SwatchImages;
	isProp65WarningRequired: ProcessMode;
	prop65WarningText: Sku;
	smallPartsWarnings: SmallPartsWarnings;
	batteryTechnologyType: ProcessMode;
	requiresTextileActLabeling: ProcessMode;
	countryOfOriginTextiles: ProcessMode;
	hasWarranty: ProcessMode;
	warrantyURL: Sku;
	warrantyText: Sku;
	fabricContent: FabricContent;
	fabricCareInstructions: FabricCareInstructions;
	sportsLeague: Sku;
	sportsTeam: Sku;
	athlete: Sku;
	autographedBy: Sku;
	character: Sku;
	globalBrandLicense: FabricCareInstructions;
	occasion: Sku;
	recommendedLocations: FabricCareInstructions;
	features: FabricCareInstructions;
	keywords: Sku;
}

export interface FurnitureCategory {
	$schema: string;
	type: ShippingWeightType;
	title: string;
	properties: FurnitureCategoryProperties;
	oneOf: OneOf[];
	additionalProperties: boolean;
}

export interface FurnitureCategoryProperties {
	Furniture: Furniture;
}

export interface Furniture {
	$schema: string;
	type: ShippingWeightType;
	properties: FurnitureProperties;
	required: string[];
	additionalProperties: boolean;
}

export interface FurnitureProperties {
	pieceCount: MinimumAdvertisedPrice;
	shortDescription: Sku;
	keyFeatures: FabricCareInstructions;
	brand: Sku;
	manufacturer: Sku;
	modelNumber: Sku;
	manufacturerPartNumber: Sku;
	multipackQuantity: MinimumAdvertisedPrice;
	countPerPack: MinimumAdvertisedPrice;
	count: Sku;
	mainImageUrl: Sku;
	productSecondaryImageURL: FabricCareInstructions;
	color: Sku;
	colorCategory: CountryOfOriginComponents;
	finish: Sku;
	material: Sku;
	pattern: Sku;
	gender: ProcessMode;
	ageGroup: CountryOfOriginComponents;
	size: Sku;
	bedSize: Sku;
	homeDecorStyle: Sku;
	seatingCapacity: MinimumAdvertisedPrice;
	numberOfDrawers: MinimumAdvertisedPrice;
	numberOfShelves: MinimumAdvertisedPrice;
	collection: Sku;
	theme: Sku;
	shape: Sku;
	diameter: ShippingWeight;
	bedStyle: Sku;
	mountType: Sku;
	assembledProductLength: ShippingWeight;
	assembledProductWidth: ShippingWeight;
	assembledProductHeight: ShippingWeight;
	assembledProductWeight: ShippingWeight;
	variantGroupId: Sku;
	variantAttributeNames: CountryOfOriginComponents;
	isPrimaryVariant: ProcessMode;
	swatchImages: SwatchImages;
	isProp65WarningRequired: ProcessMode;
	prop65WarningText: Sku;
	requiresTextileActLabeling: ProcessMode;
	countryOfOriginTextiles: ProcessMode;
	hasWarranty: ProcessMode;
	warrantyURL: Sku;
	warrantyText: Sku;
	isLightingFactsLabelRequired: ProcessMode;
	lightingFactsLabel: Sku;
	isAssemblyRequired: ProcessMode;
	assemblyInstructions: Sku;
	fabricContent: FabricContent;
	fabricCareInstructions: FabricCareInstructions;
	fabricColor: Sku;
	accentColor: Sku;
	cushionColor: Sku;
	recommendedUses: FabricCareInstructions;
	recommendedRooms: FabricCareInstructions;
	recommendedLocations: FabricCareInstructions;
	mattressFirmness: Sku;
	mattressThickness: ShippingWeight;
	pumpIncluded: ProcessMode;
	fillMaterial: FabricCareInstructions;
	frameMaterial: FabricCareInstructions;
	seatMaterial: Sku;
	seatHeight: ShippingWeight;
	seatBackHeight: ShippingWeight;
	tableHeight: ShippingWeight;
	topMaterial: Sku;
	topDimensions: Sku;
	topFinish: Sku;
	hardwareFinish: Sku;
	baseMaterial: Sku;
	baseColor: Sku;
	baseFinish: Sku;
	doorOpeningStyle: Sku;
	doorStyle: Sku;
	slatWidth: ShippingWeight;
	numberOfHooks: MinimumAdvertisedPrice;
	headboardStyle: Sku;
	frameColor: Sku;
	isAntique: ProcessMode;
	isFoldable: ProcessMode;
	isInflatable: ProcessMode;
	isWheeled: ProcessMode;
	isIndustrial: ProcessMode;
	isPowered: ProcessMode;
	powerType: Sku;
	character: Sku;
	globalBrandLicense: FabricCareInstructions;
	sportsLeague: Sku;
	sportsTeam: Sku;
	athlete: Sku;
	autographedBy: Sku;
	features: FabricCareInstructions;
	keywords: Sku;
	configuration: Sku;
	numberOfPanels: MinimumAdvertisedPrice;
	seatBackStyle: Sku;
}

export interface GardenAndPatioCategory {
	$schema: string;
	type: ShippingWeightType;
	title: string;
	properties: GardenAndPatioCategoryProperties;
	oneOf: OneOf[];
	additionalProperties: boolean;
}

export interface GardenAndPatioCategoryProperties {
	GrillsAndOutdoorCooking: GrillsAndOutdoorCooking;
	GardenAndPatio: GardenAndPatio;
}

export interface GardenAndPatio {
	$schema: string;
	type: ShippingWeightType;
	properties: GardenAndPatioProperties;
	required: AnimalAccessoriesRequired[];
	additionalProperties: boolean;
}

export interface GardenAndPatioProperties {
	shortDescription: Sku;
	keyFeatures: FabricCareInstructions;
	brand: Sku;
	manufacturer: Sku;
	manufacturerPartNumber: Sku;
	modelNumber: Sku;
	multipackQuantity: MinimumAdvertisedPrice;
	countPerPack: MinimumAdvertisedPrice;
	count: Sku;
	pieceCount: MinimumAdvertisedPrice;
	mainImageUrl: Sku;
	productSecondaryImageURL: FabricCareInstructions;
	color: Sku;
	colorCategory: CountryOfOriginComponents;
	pattern: Sku;
	finish: Sku;
	shape: Sku;
	size: Sku;
	theme: Sku;
	assembledProductLength: ShippingWeight;
	assembledProductWidth: ShippingWeight;
	assembledProductHeight: ShippingWeight;
	assembledProductWeight: ShippingWeight;
	variantGroupId: Sku;
	variantAttributeNames: CountryOfOriginComponents;
	isPrimaryVariant: ProcessMode;
	swatchImages: SwatchImages;
	isProp65WarningRequired: ProcessMode;
	prop65WarningText: Sku;
	batteryTechnologyType: ProcessMode;
	requiresTextileActLabeling: ProcessMode;
	countryOfOriginTextiles: ProcessMode;
	hasWarranty: ProcessMode;
	warrantyURL: Sku;
	warrantyText: Sku;
	isLightingFactsLabelRequired: ProcessMode;
	hasFuelContainer: ProcessMode;
	isAssemblyRequired: ProcessMode;
	assemblyInstructions: Sku;
	isBulk: ProcessMode;
	maximumWeight: ShippingWeight;
	coverageArea: ShippingWeight;
	occasion: Sku;
	season: Sku;
	recommendedUses: FabricCareInstructions;
	recommendedLocations: FabricCareInstructions;
	fabricContent: FabricContent;
	material: Sku;
	frameMaterial: FabricCareInstructions;
	baseMaterial: Sku;
	isAntique: ProcessMode;
	isFoldable: ProcessMode;
	isWheeled: ProcessMode;
	isWeatherResistant: ProcessMode;
	isWaterproof: ProcessMode;
	isTearResistant: ProcessMode;
	powerType: Sku;
	lightBulbType: Sku;
	lightBulbColor: Sku;
	volts: ShippingWeight;
	watts: ShippingWeight;
	minimumTemperature: ShippingWeight;
	plantCategory: Sku;
	fuelType: Sku;
	cuttingWidth: ShippingWeight;
	clearingWidth: ShippingWeight;
	sprayPatterns: Sku;
	diameter: ShippingWeight;
	features: FabricCareInstructions;
	keywords: Sku;
	installationType: Sku;
	ageGroup: CountryOfOriginComponents;
	homeDecorStyle: Sku;
	character: Sku;
	isIndustrial: ProcessMode;
	isEnergyStarCertified: ProcessMode;
	hasRadiantHeat: ProcessMode;
	flowRate: ShippingWeight;
	hasAutomaticShutoff: ProcessMode;
	capacity: Sku;
	productVolume: Sku;
	cleaningCareAndMaintenance: Sku;
	globalBrandLicense: FabricCareInstructions;
	flooringMaterial: Sku;
	minimumClearance: ShippingWeight;
}

export interface GrillsAndOutdoorCooking {
	$schema: string;
	type: ShippingWeightType;
	properties: GrillsAndOutdoorCookingProperties;
	required: AnimalAccessoriesRequired[];
	additionalProperties: boolean;
}

export interface GrillsAndOutdoorCookingProperties {
	hasFuelContainer: ProcessMode;
	shortDescription: Sku;
	keyFeatures: FabricCareInstructions;
	brand: Sku;
	manufacturer: Sku;
	manufacturerPartNumber: Sku;
	modelNumber: Sku;
	multipackQuantity: MinimumAdvertisedPrice;
	countPerPack: MinimumAdvertisedPrice;
	count: Sku;
	pieceCount: MinimumAdvertisedPrice;
	mainImageUrl: Sku;
	productSecondaryImageURL: FabricCareInstructions;
	color: Sku;
	colorCategory: CountryOfOriginComponents;
	finish: Sku;
	numberOfBurners: MinimumAdvertisedPrice;
	sideBurnerSize: ShippingWeight;
	hasSideShelf: ProcessMode;
	hasCharcoalBasket: ProcessMode;
	hasTankTray: ProcessMode;
	totalCookingArea: ShippingWeight;
	size: Sku;
	assembledProductLength: ShippingWeight;
	assembledProductWidth: ShippingWeight;
	assembledProductHeight: ShippingWeight;
	assembledProductWeight: ShippingWeight;
	variantGroupId: Sku;
	variantAttributeNames: CountryOfOriginComponents;
	isPrimaryVariant: ProcessMode;
	swatchImages: SwatchImages;
	isProp65WarningRequired: ProcessMode;
	prop65WarningText: Sku;
	batteryTechnologyType: ProcessMode;
	hasWarranty: ProcessMode;
	warrantyURL: Sku;
	warrantyText: Sku;
	isAssemblyRequired: ProcessMode;
	assemblyInstructions: Sku;
	isBulk: ProcessMode;
	maximumWeight: ShippingWeight;
	recommendedUses: FabricCareInstructions;
	recommendedLocations: FabricCareInstructions;
	frameMaterial: FabricCareInstructions;
	isFoldable: ProcessMode;
	isWheeled: ProcessMode;
	isWeatherResistant: ProcessMode;
	isWaterproof: ProcessMode;
	powerType: Sku;
	minimumTemperature: ShippingWeight;
	btu: ShippingWeight;
	flavor: Sku;
	lifespan: ShippingWeight;
	fuelType: Sku;
	features: FabricCareInstructions;
	keywords: Sku;
	installationType: Sku;
	ageGroup: CountryOfOriginComponents;
	homeDecorStyle: Sku;
	isIndustrial: ProcessMode;
	isEnergyStarCertified: ProcessMode;
	hasRadiantHeat: ProcessMode;
	flowRate: ShippingWeight;
	hasAutomaticShutoff: ProcessMode;
	capacity: Sku;
	productVolume: Sku;
	cleaningCareAndMaintenance: Sku;
	globalBrandLicense: FabricCareInstructions;
	sportsTeam: Sku;
	sportsLeague: Sku;
}

export interface HealthAndBeauty {
	$schema: string;
	type: ShippingWeightType;
	title: string;
	properties: HealthAndBeautyProperties;
	oneOf: OneOf[];
	additionalProperties: boolean;
}

export interface HealthAndBeautyProperties {
	Optical: Optical;
	MedicalAids: HealthAndBeautyElectronics;
	PersonalCare: PersonalCare;
	HealthAndBeautyElectronics: HealthAndBeautyElectronics;
	MedicineAndSupplements: MedicineAndSupplements;
}

export interface HealthAndBeautyElectronics {
	$schema: string;
	type: ShippingWeightType;
	properties: HealthAndBeautyElectronicsProperties;
	required: AnimalAccessoriesRequired[];
	additionalProperties: boolean;
}

export interface HealthAndBeautyElectronicsProperties {
	shortDescription: Sku;
	keyFeatures: FabricCareInstructions;
	brand: Sku;
	manufacturer: Sku;
	manufacturerPartNumber: Sku;
	modelNumber: Sku;
	countPerPack: MinimumAdvertisedPrice;
	multipackQuantity: MinimumAdvertisedPrice;
	count: Sku;
	pieceCount: MinimumAdvertisedPrice;
	mainImageUrl: Sku;
	productSecondaryImageURL: FabricCareInstructions;
	color: Sku;
	colorCategory: CountryOfOriginComponents;
	material: Sku;
	gender: ProcessMode;
	ageGroup: CountryOfOriginComponents;
	size: Sku;
	compatibleBrands: FabricCareInstructions;
	assembledProductLength: ShippingWeight;
	assembledProductWidth: ShippingWeight;
	assembledProductHeight: ShippingWeight;
	assembledProductWeight: ShippingWeight;
	variantGroupId: Sku;
	variantAttributeNames: CountryOfOriginComponents;
	isPrimaryVariant: ProcessMode;
	swatchImages: SwatchImages;
	isProp65WarningRequired: ProcessMode;
	prop65WarningText: Sku;
	smallPartsWarnings: SmallPartsWarnings;
	batteryTechnologyType: ProcessMode;
	hasWarranty: ProcessMode;
	warrantyURL: Sku;
	warrantyText: Sku;
	isPowered: ProcessMode;
	powerType: Sku;
	flexibleSpendingAccountEligible: ProcessMode;
	recommendedUses: FabricCareInstructions;
	cleaningCareAndMaintenance: Sku;
	fabricContent: FabricContent;
	fabricCareInstructions: FabricCareInstructions;
	trackingMode?: Sku;
	features: FabricCareInstructions;
	keywords: Sku;
	bodyParts: FabricCareInstructions;
	collection: Sku;
	isSet: ProcessMode;
	isTravelSize: ProcessMode;
	isPortable: ProcessMode;
	isReusable: ProcessMode;
	isDisposable: ProcessMode;
	isCordless?: ProcessMode;
	hasAutomaticShutoff?: ProcessMode;
	healthConcerns?: FabricCareInstructions;
	diameter?: ShippingWeight;
	maximumWeight?: ShippingWeight;
	isLatexFree?: ProcessMode;
	isWaterproof?: ProcessMode;
	isFoldable?: ProcessMode;
	isInflatable?: ProcessMode;
	isWheeled?: ProcessMode;
	isIndustrial?: ProcessMode;
	driveSystem?: Sku;
	shape?: Sku;
}

export interface MedicineAndSupplements {
	$schema: string;
	type: ShippingWeightType;
	properties: MedicineAndSupplementsProperties;
	required: string[];
	additionalProperties: boolean;
}

export interface MedicineAndSupplementsProperties {
	shortDescription: Sku;
	keyFeatures: FabricCareInstructions;
	brand: Sku;
	manufacturer: Sku;
	manufacturerPartNumber: Sku;
	modelNumber: Sku;
	countPerPack: MinimumAdvertisedPrice;
	multipackQuantity: MinimumAdvertisedPrice;
	count: Sku;
	mainImageUrl: Sku;
	productSecondaryImageURL: FabricCareInstructions;
	flavor: Sku;
	size: Sku;
	ageGroup: CountryOfOriginComponents;
	gender: ProcessMode;
	bodyParts: FabricCareInstructions;
	healthConcerns: FabricCareInstructions;
	color: Sku;
	colorCategory: CountryOfOriginComponents;
	assembledProductLength: ShippingWeight;
	assembledProductWidth: ShippingWeight;
	assembledProductHeight: ShippingWeight;
	assembledProductWeight: ShippingWeight;
	variantGroupId: Sku;
	variantAttributeNames: CountryOfOriginComponents;
	isPrimaryVariant: ProcessMode;
	swatchImages: SwatchImages;
	isProp65WarningRequired: ProcessMode;
	prop65WarningText: Sku;
	hasPricePerUnit: ProcessMode;
	pricePerUnitQuantity: MinimumAdvertisedPrice;
	pricePerUnitUom: ProcessMode;
	isDrugFactsLabelRequired: ProcessMode;
	drugFactsLabel: Sku;
	drugDosageInstructionsImage: Sku;
	drugActiveInactiveIngredientsImage: Sku;
	isSupplementFactsLabelRequired: ProcessMode;
	supplementFactsLabel: Sku;
	supplementDosageInstructionsImage: Sku;
	supplementActiveInactiveIngredientsImage: Sku;
	isNutritionFactsLabelRequired: ProcessMode;
	nutritionFactsLabel: Sku;
	hasIngredientList: ProcessMode;
	ingredientListImage: Sku;
	ingredients: Sku;
	hasGMOs: ProcessMode;
	hasExpiration: ProcessMode;
	recommendedUses: FabricCareInstructions;
	globalBrandLicense: FabricCareInstructions;
	activeIngredients: ActiveIngredients;
	inactiveIngredients: FabricCareInstructions;
	form: Sku;
	instructions: Sku;
	dosage: Sku;
	stopUseIndications: FabricCareInstructions;
	medicineStrength: Sku;
	nationalDrugCode: Sku;
	nutrients: Nutrients;
	servingSize: Sku;
	features: FabricCareInstructions;
	keywords: Sku;
}

export interface Optical {
	$schema: string;
	type: ShippingWeightType;
	properties: OpticalProperties;
	required: AnimalAccessoriesRequired[];
	additionalProperties: boolean;
}

export interface OpticalProperties {
	shortDescription: Sku;
	keyFeatures: FabricCareInstructions;
	brand: Sku;
	manufacturer: Sku;
	manufacturerPartNumber: Sku;
	modelNumber: Sku;
	countPerPack: MinimumAdvertisedPrice;
	multipackQuantity: MinimumAdvertisedPrice;
	count: Sku;
	mainImageUrl: Sku;
	productSecondaryImageURL: FabricCareInstructions;
	color: Sku;
	colorCategory: CountryOfOriginComponents;
	shape: Sku;
	material: Sku;
	gender: ProcessMode;
	ageGroup: CountryOfOriginComponents;
	isAdultProduct: ProcessMode;
	collection: Sku;
	character: Sku;
	compatibleBrands: FabricCareInstructions;
	isSet: ProcessMode;
	assembledProductLength: ShippingWeight;
	assembledProductWidth: ShippingWeight;
	assembledProductHeight: ShippingWeight;
	assembledProductWeight: ShippingWeight;
	variantGroupId: Sku;
	variantAttributeNames: CountryOfOriginComponents;
	isPrimaryVariant: ProcessMode;
	swatchImages: SwatchImages;
	isProp65WarningRequired: ProcessMode;
	prop65WarningText: Sku;
	batteryTechnologyType: ProcessMode;
	hasWarranty: ProcessMode;
	warrantyURL: Sku;
	warrantyText: Sku;
	eyewearRimStyle: ProcessMode;
	hasAdaptiveLenses: ProcessMode;
	isPolarized: ProcessMode;
	isScratchResistant: ProcessMode;
	lensMaterial: Sku;
	lensTint: Sku;
	lensType: FabricCareInstructions;
	sunglassesStyle: Sku;
	uvRating: ShippingWeight;
	sportsLeague: Sku;
	sportsTeam: Sku;
	athlete: Sku;
	flexibleSpendingAccountEligible: ProcessMode;
	globalBrandLicense: FabricCareInstructions;
	features: FabricCareInstructions;
	keywords: Sku;
	cleaningCareAndMaintenance: Sku;
	eyewearLensFeature: FabricCareInstructions;
	eyewearFrameStyle: Sku;
}

export interface PersonalCare {
	$schema: string;
	type: ShippingWeightType;
	properties: PersonalCareProperties;
	required: string[];
	additionalProperties: boolean;
}

export interface PersonalCareProperties {
	shortDescription: Sku;
	keyFeatures: FabricCareInstructions;
	brand: Sku;
	manufacturer: Sku;
	manufacturerPartNumber: Sku;
	modelNumber: Sku;
	multipackQuantity: MinimumAdvertisedPrice;
	countPerPack: MinimumAdvertisedPrice;
	count: Sku;
	pieceCount: MinimumAdvertisedPrice;
	mainImageUrl: Sku;
	productSecondaryImageURL: FabricCareInstructions;
	color: Sku;
	colorCategory: CountryOfOriginComponents;
	gender: ProcessMode;
	size: Sku;
	ageGroup: CountryOfOriginComponents;
	bodyParts: FabricCareInstructions;
	collection: Sku;
	scent: Sku;
	flavor: Sku;
	assembledProductLength: ShippingWeight;
	assembledProductWidth: ShippingWeight;
	assembledProductHeight: ShippingWeight;
	assembledProductWeight: ShippingWeight;
	variantGroupId: Sku;
	variantAttributeNames: CountryOfOriginComponents;
	isPrimaryVariant: ProcessMode;
	swatchImages: SwatchImages;
	isProp65WarningRequired: ProcessMode;
	prop65WarningText: Sku;
	smallPartsWarnings: SmallPartsWarnings;
	batteryTechnologyType: ProcessMode;
	hasPricePerUnit: ProcessMode;
	pricePerUnitQuantity: MinimumAdvertisedPrice;
	pricePerUnitUom: ProcessMode;
	isDrugFactsLabelRequired: ProcessMode;
	drugFactsLabel: Sku;
	drugDosageInstructionsImage: Sku;
	drugActiveInactiveIngredientsImage: Sku;
	hasIngredientList: ProcessMode;
	ingredientListImage: Sku;
	ingredients: Sku;
	hasGMOs: ProcessMode;
	skinCareConcern: Sku;
	skinType: Sku;
	skinTone: Sku;
	spfValue: MinimumAdvertisedPrice;
	hairType: Sku;
	isAdultProduct: ProcessMode;
	recommendedUses: FabricCareInstructions;
	globalBrandLicense: FabricCareInstructions;
	activeIngredients: ActiveIngredients;
	inactiveIngredients: FabricCareInstructions;
	form: Sku;
	instructions: Sku;
	stopUseIndications: FabricCareInstructions;
	features: FabricCareInstructions;
	compatibleBrands: FabricCareInstructions;
	isSet: ProcessMode;
	isTravelSize: ProcessMode;
	isPortable: ProcessMode;
	isReusable: ProcessMode;
	isDisposable: ProcessMode;
	isPowered: ProcessMode;
	powerType: Sku;
	flexibleSpendingAccountEligible: ProcessMode;
	cleaningCareAndMaintenance: Sku;
	batteriesRequired: ProcessMode;
	resultTime: ShippingWeight;
	isNoncomodegenic: ProcessMode;
	isTinted: ProcessMode;
	isSelfTanning: ProcessMode;
	isWaterproof: ProcessMode;
	isUnscented: ProcessMode;
	absorbency: Sku;
	keywords: Sku;
	material: Sku;
	sportsLeague: Sku;
	sportsTeam: Sku;
	athlete: Sku;
	wigCapStyle: ProcessMode;
	hairColorCategory: ProcessMode;
}

export interface Home {
	$schema: string;
	type: ShippingWeightType;
	title: string;
	properties: HomeProperties;
	oneOf: OneOf[];
	additionalProperties: boolean;
}

export interface HomeProperties {
	Bedding: BabyFurniture;
	LargeAppliances: LargeAppliances;
	HomeOther: HomeOther;
}

export interface HomeOther {
	$schema: string;
	type: ShippingWeightType;
	properties: HomeOtherProperties;
	required: AnimalAccessoriesRequired[];
	additionalProperties: boolean;
}

export interface HomeOtherProperties {
	shortDescription: Sku;
	keyFeatures: FabricCareInstructions;
	brand: Sku;
	manufacturer: Sku;
	modelNumber: Sku;
	manufacturerPartNumber: Sku;
	multipackQuantity: MinimumAdvertisedPrice;
	countPerPack: MinimumAdvertisedPrice;
	count: Sku;
	pieceCount: MinimumAdvertisedPrice;
	mainImageUrl: Sku;
	productSecondaryImageURL: FabricCareInstructions;
	color: Sku;
	colorCategory: CountryOfOriginComponents;
	pattern: Sku;
	material: Sku;
	finish: Sku;
	ageGroup: CountryOfOriginComponents;
	gender: ProcessMode;
	size: Sku;
	threadCount: MinimumAdvertisedPrice;
	rugSize: Sku;
	rugStyle: FabricCareInstructions;
	curtainPanelStyle: Sku;
	scent: Sku;
	isPetFriendly: ProcessMode;
	fillMaterial: FabricCareInstructions;
	clockNumberType: Sku;
	homeDecorStyle: Sku;
	diameter: ShippingWeight;
	theme: Sku;
	character: Sku;
	globalBrandLicense: FabricCareInstructions;
	assembledProductLength: ShippingWeight;
	assembledProductWidth: ShippingWeight;
	assembledProductHeight: ShippingWeight;
	assembledProductWeight: ShippingWeight;
	variantGroupId: Sku;
	variantAttributeNames: CountryOfOriginComponents;
	isPrimaryVariant: ProcessMode;
	swatchImages: SwatchImages;
	isProp65WarningRequired: ProcessMode;
	prop65WarningText: Sku;
	smallPartsWarnings: SmallPartsWarnings;
	requiresTextileActLabeling: ProcessMode;
	countryOfOriginTextiles: ProcessMode;
	batteryTechnologyType: ProcessMode;
	hasWarranty: ProcessMode;
	warrantyURL: Sku;
	warrantyText: Sku;
	compositeWoodCertificationCode: CompositeWoodCertificationCode;
	hasFuelContainer: ProcessMode;
	isLightingFactsLabelRequired: ProcessMode;
	lightingFactsLabel: Sku;
	isAssemblyRequired: ProcessMode;
	assemblyInstructions: Sku;
	cleaningCareAndMaintenance: Sku;
	contaminantsRemoved: Sku;
	recommendedUses: FabricCareInstructions;
	recommendedRooms: FabricCareInstructions;
	fabricContent: FabricContent;
	fabricColor: Sku;
	fabricCareInstructions: FabricCareInstructions;
	curtainLength: ShippingWeight;
	powerType: Sku;
	volumeCapacity: ShippingWeight;
	shape: Sku;
	occasion: Sku;
	accentColor: Sku;
	bedStyle: Sku;
	hasPricePerUnit: ProcessMode;
	pricePerUnitQuantity: MinimumAdvertisedPrice;
	pricePerUnitUom: ProcessMode;
	baseColor: Sku;
	baseFinish: Sku;
	shadeMaterial: Sku;
	shadeStyle: Sku;
	collection: Sku;
	serviceCount: MinimumAdvertisedPrice;
	meal: Sku;
	frameColor: Sku;
	slatWidth: ShippingWeight;
	isSet: ProcessMode;
	features: FabricCareInstructions;
	keywords: Sku;
	academicInstitution: Sku;
	sportsLeague: Sku;
	sportsTeam: Sku;
	athlete: Sku;
}

export interface LargeAppliances {
	$schema: string;
	type: ShippingWeightType;
	properties: LargeAppliancesProperties;
	required: AnimalAccessoriesRequired[];
	additionalProperties: boolean;
}

export interface LargeAppliancesProperties {
	hasFuelContainer: ProcessMode;
	shortDescription: Sku;
	keyFeatures: FabricCareInstructions;
	brand: Sku;
	manufacturer: Sku;
	modelNumber: Sku;
	manufacturerPartNumber: Sku;
	mainImageUrl: Sku;
	productSecondaryImageURL: FabricCareInstructions;
	color: Sku;
	size: Sku;
	colorCategory: CountryOfOriginComponents;
	isSet: ProcessMode;
	capacity: Sku;
	pattern: Sku;
	finish: Sku;
	homeDecorStyle: Sku;
	material: Sku;
	isEnergyStarCertified: ProcessMode;
	assembledProductLength: ShippingWeight;
	assembledProductWidth: ShippingWeight;
	assembledProductHeight: ShippingWeight;
	assembledProductWeight: ShippingWeight;
	variantGroupId: Sku;
	variantAttributeNames: CountryOfOriginComponents;
	isPrimaryVariant: ProcessMode;
	swatchImages: SwatchImages;
	isProp65WarningRequired: ProcessMode;
	prop65WarningText: Sku;
	batteryTechnologyType: ProcessMode;
	hasCfl: ProcessMode;
	isLightingFactsLabelRequired: ProcessMode;
	lightingFactsLabel: Sku;
	isEnergyGuideLabelRequired: ProcessMode;
	energyGuideLabel: Sku;
	hasWarranty: ProcessMode;
	warrantyURL: Sku;
	warrantyText: Sku;
	isAssemblyRequired: ProcessMode;
	assemblyInstructions: Sku;
	cleaningCareAndMaintenance: Sku;
	recommendedUses: FabricCareInstructions;
	recommendedRooms: FabricCareInstructions;
	powerType: Sku;
	volts: ShippingWeight;
	watts: ShippingWeight;
	btu: ShippingWeight;
	isRemoteControlIncluded: ProcessMode;
	cordLength: ShippingWeight;
	maximumRoomSize: ShippingWeight;
	fuelType: Sku;
	isSmart: ProcessMode;
	runTime: ShippingWeight;
	hasAutomaticShutoff: ProcessMode;
	loadPosition: Sku;
	shape: Sku;
	collection: Sku;
	features: FabricCareInstructions;
	keywords: Sku;
}

export interface JewelryCategory {
	$schema: string;
	type: ShippingWeightType;
	title: string;
	properties: JewelryCategoryProperties;
	oneOf: OneOf[];
	additionalProperties: boolean;
}

export interface JewelryCategoryProperties {
	Jewelry: Jewelry;
}

export interface Jewelry {
	$schema: string;
	type: ShippingWeightType;
	properties: JewelryProperties;
	required: AnimalAccessoriesRequired[];
	additionalProperties: boolean;
}

export interface JewelryProperties {
	shortDescription: Sku;
	keyFeatures: FabricCareInstructions;
	brand: Sku;
	manufacturer: Sku;
	manufacturerPartNumber: Sku;
	modelNumber: Sku;
	multipackQuantity: MinimumAdvertisedPrice;
	countPerPack: MinimumAdvertisedPrice;
	count: Sku;
	mainImageUrl: Sku;
	productSecondaryImageURL: FabricCareInstructions;
	material: Sku;
	jewelryStyle: ProcessMode;
	metal: Sku;
	metalStamp: FabricCareInstructions;
	karats: ShippingWeight;
	plating: Sku;
	gender: ProcessMode;
	ageGroup: CountryOfOriginComponents;
	size: Sku;
	color: Sku;
	occasion: Sku;
	style: Sku;
	personalRelationship: FabricCareInstructions;
	variantGroupId: Sku;
	variantAttributeNames: CountryOfOriginComponents;
	isPrimaryVariant: ProcessMode;
	swatchImages: SwatchImages;
	isProp65WarningRequired: ProcessMode;
	prop65WarningText: Sku;
	smallPartsWarnings: SmallPartsWarnings;
	batteryTechnologyType: ProcessMode;
	hasWarranty: ProcessMode;
	warrantyURL: Sku;
	warrantyText: Sku;
	certificateNumber: FabricCareInstructions;
	birthstone: Sku;
	pattern: Sku;
	claspType: FabricCareInstructions;
	backFinding: Sku;
	jewelrySetting: FabricCareInstructions;
	earringStyle: Sku;
	earringFeature: FabricCareInstructions;
	braceletStyle: Sku;
	necklaceStyle: Sku;
	chainLength: ShippingWeight;
	chainPattern: FabricCareInstructions;
	globalBrandLicense: FabricCareInstructions;
	diamondClarity: Sku;
	diamondCut: Sku;
	carats: ShippingWeight;
	totalDiamondWeight: ShippingWeight;
	totalGemWeight: MinimumAdvertisedPrice;
	gemstoneCut: Sku;
	gemstone: Sku;
	gemstoneColor: Sku;
	gemstoneClarity: Sku;
	stoneCreationMethod: Sku;
	stoneTreatment: Sku;
	stoneHeight: ShippingWeight;
	stoneLength: ShippingWeight;
	stoneWidth: ShippingWeight;
	stoneDepthPercentage: MinimumAdvertisedPrice;
	stoneTablePercentage: MinimumAdvertisedPrice;
	stoneSymmetry: Sku;
	stonePolish: Sku;
	stoneGirdle: Sku;
	stoneCulet: Sku;
	stoneFluoresence: Sku;
	pearlType: FabricCareInstructions;
	pearlBodyColor: FabricCareInstructions;
	pearlLustre: FabricCareInstructions;
	pearlShape: FabricCareInstructions;
	pearlUniformity: FabricCareInstructions;
	pearlSurfaceBlemishes: FabricCareInstructions;
	pearlNacreThickness: ShippingWeight;
	pearlStringingMethod: FabricCareInstructions;
	sizePerPearl: ShippingWeight;
	numberOfPearls: MinimumAdvertisedPrice;
	inscription: Sku;
	isResizable: ProcessMode;
	ringSizingLowerRange: MinimumAdvertisedPrice;
	ringSizingUpperRange: MinimumAdvertisedPrice;
	ringStyle: FabricCareInstructions;
	ringSize: MinimumAdvertisedPrice;
	circumference: ShippingWeight;
	diameter: ShippingWeight;
	ringSizeStandard: ProcessMode;
	sportsLeague: Sku;
	sportsTeam: Sku;
	theme: Sku;
	americanWireGuage: CompositeWoodCertificationCode;
	athlete: Sku;
	features: FabricCareInstructions;
	keywords: Sku;
	isMadeFromRecycledMaterial: ProcessMode;
	recycledMaterialContent: RecycledMaterialContent;
	colorCategory: CountryOfOriginComponents;
	character: Sku;
	bodyParts: FabricCareInstructions;
	designer: Sku;
}

export interface MPBulkRetire {
	$schema: string;
	type: ShippingWeightType;
	properties: MPBulkRetireProperties;
	required: string[];
}

export interface MPBulkRetireProperties {
	RetireItemHeader: RetireItemHeader;
	RetireItem: RetireItem;
}

export interface RetireItem {
	type: CountryOfOriginComponentsType;
	items: Item[];
}

export interface Item {
	type: ShippingWeightType;
	properties: ItemProperties;
	required: string[];
}

export interface ItemProperties {
	sku: FeedDate;
}

export interface FeedDate {
	type: PurpleType;
}

export interface RetireItemHeader {
	type: ShippingWeightType;
	properties: RetireItemHeaderProperties;
	required: string[];
}

export interface RetireItemHeaderProperties {
	feedDate: FeedDate;
	version: FeedDate;
}

export interface MPItem {
	$schema: string;
	type: ShippingWeightType;
	title: string;
	properties: MPItemProperties;
	required: string[];
	additionalProperties: boolean;
}

export interface MPItemProperties {
	feedDate: FeedDateClass;
	processMode: ProcessMode;
	sku: Sku;
	productIdentifiers: ProductIdentifiers;
	MPProduct: MpOffer;
	MPOffer: MpOffer;
}

export interface MpOffer {
	$ref: string;
}

export interface ProductIdentifiers {
	$schema: string;
	type: CountryOfOriginComponentsType;
	title: string;
	items: ProductIdentifiersItems;
	minItems: number;
}

export interface ProductIdentifiersItems {
	$schema: string;
	type: ShippingWeightType;
	properties: HilariousProperties;
	required: string[];
	additionalProperties: boolean;
}

export interface HilariousProperties {
	productIdType: ProcessMode;
	productId: Sku;
}

export interface MPItemFeed {
	$schema: string;
	type: ShippingWeightType;
	title: string;
	properties: MPItemFeedProperties;
	required: string[];
	additionalProperties: boolean;
}

export interface MPItemFeedProperties {
	MPItemFeedHeader: MpOffer;
	MPItem: MPItemClass;
}

export interface MPItemClass {
	$schema: string;
	type: CountryOfOriginComponentsType;
	items: MpOffer;
	minItems: number;
	maxItems: number;
}

export interface MPItemFeedHeader {
	$schema: string;
	type: ShippingWeightType;
	properties: MPItemFeedHeaderProperties;
	required: string[];
	additionalProperties: boolean;
}

export interface MPItemFeedHeaderProperties {
	version: ProcessMode;
	requestId: Sku;
	requestBatchId: Sku;
	feedDate: FeedDateClass;
	mart: ProcessMode;
}

export interface MPLogistics {
	$schema: string;
	type: ShippingWeightType;
	properties: MPLogisticsProperties;
	additionalProperties: boolean;
}

export interface MPLogisticsProperties {
	countryOfOriginComponents: CountryOfOriginComponents;
	countryOfOriginAssembly: ProcessMode;
}

export interface MPOffer {
	$schema: string;
	type: ShippingWeightType;
	properties: MPOfferProperties;
	additionalProperties: boolean;
}

export interface MPOfferProperties {
	price: MinimumAdvertisedPrice;
	MinimumAdvertisedPrice: MinimumAdvertisedPrice;
	StartDate: FeedDateClass;
	EndDate: FeedDateClass;
	MustShipAlone: ProcessMode;
	ShippingWeight: ShippingWeight;
	ProductTaxCode: MinimumAdvertisedPrice;
	shipsInOriginalPackaging: ProcessMode;
	additionalOfferAttributes: AdditionalOfferAttributes;
	ShippingOverrides: ShippingOverrides;
	ShippingProgramOverrides: ShippingProgramOverrides;
	fulfillmentLagTime: Sku;
}

export interface ShippingOverrides {
	$schema: string;
	type: ShippingWeightType;
	properties: ShippingOverridesProperties;
}

export interface ShippingOverridesProperties {
	ShippingOverrideAction: ShippingOverrideActionClass;
	shippingOverride: ShippingOverride;
}

export interface ShippingOverride {
	$schema: string;
	type: CountryOfOriginComponentsType;
	title: string;
	items: ShippingOverrideItems;
}

export interface ShippingOverrideItems {
	$schema: string;
	type: ShippingWeightType;
	properties: AmbitiousProperties;
	required: string[];
	additionalProperties: boolean;
}

export interface AmbitiousProperties {
	ShippingOverrideIsShippingAllowed: ProcessMode;
	ShippingOverrideShipMethod: ProcessMode;
	ShippingOverrideShipRegion: ProcessMode;
	ShippingOverrideshipPrice: MinimumAdvertisedPrice;
}

export interface ShippingProgramOverrides {
	$schema: string;
	type: CountryOfOriginComponentsType;
	title: string;
	items: ShippingProgramOverridesItems;
}

export interface ShippingProgramOverridesItems {
	$schema: string;
	type: ShippingWeightType;
	properties: CunningProperties;
	additionalProperties: boolean;
}

export interface CunningProperties {
	twoDayShippingOverride: ProcessMode;
	twoDayShippingRegion: ProcessMode;
	twoDayShippingNortheastRegionStates: Sku;
	twoDayShippingMidwestRegionStates: Sku;
	twoDayShippingWestRegionStates: Sku;
	twoDayShippingSouthRegionStates: Sku;
}

export interface AdditionalOfferAttributes {
	$schema: string;
	type: CountryOfOriginComponentsType;
	title: string;
	items: AdditionalOfferAttributesItems;
	minItems: number;
}

export interface AdditionalOfferAttributesItems {
	$schema: string;
	type: ShippingWeightType;
	properties: MagentaProperties;
	additionalProperties: boolean;
}

export interface MagentaProperties {
	additionalOfferAttributeName: FabricCareInstructions;
	additionalOfferAttributeValue: FabricCareInstructions;
}

export interface MPProduct {
	$schema: string;
	type: ShippingWeightType;
	title: string;
	properties: MPProductProperties;
	required: string[];
	additionalProperties: boolean;
}

export interface MPProductProperties {
	productName: Sku;
	msrp: MinimumAdvertisedPrice;
	SkuUpdate: ProcessMode;
	ProductIdUpdate: ProcessMode;
	additionalProductAttributes: AdditionalProductAttributes;
	category: Category;
}

export interface AdditionalProductAttributes {
	$schema: string;
	type: CountryOfOriginComponentsType;
	title: string;
	items: AdditionalProductAttributesItems;
	minItems: number;
}

export interface AdditionalProductAttributesItems {
	$schema: string;
	type: ShippingWeightType;
	properties: FriskyProperties;
	additionalProperties: boolean;
}

export interface FriskyProperties {
	productAttributeName: Sku;
	productAttributeValue: FabricCareInstructions;
}

export interface Category {
	$schema: string;
	type: ShippingWeightType;
	title: string;
	properties: { [key: string]: MpOffer };
	oneOf: OneOf[];
	additionalProperties: boolean;
}

export interface Media {
	$schema: string;
	type: ShippingWeightType;
	title: string;
	properties: MediaProperties;
	oneOf: OneOf[];
	additionalProperties: boolean;
}

export interface MediaProperties {
	Movies: Movies;
	Music: Music;
	TVShows: Movies;
	BooksAndMagazines: BooksAndMagazines;
}

export interface BooksAndMagazines {
	$schema: string;
	type: ShippingWeightType;
	properties: BooksAndMagazinesProperties;
	required: AnimalAccessoriesRequired[];
	additionalProperties: boolean;
}

export interface BooksAndMagazinesProperties {
	shortDescription: Sku;
	keyFeatures: FabricCareInstructions;
	synopsis: Sku;
	multipackQuantity: MinimumAdvertisedPrice;
	countPerPack: MinimumAdvertisedPrice;
	count: Sku;
	mainImageUrl: Sku;
	productSecondaryImageURL: FabricCareInstructions;
	title: Sku;
	bookFormat: ProcessMode;
	author: FabricCareInstructions;
	publisher: Sku;
	publicationDate: FeedDateClass;
	originalPublicationDate: FeedDateClass;
	targetAudience: FabricCareInstructions;
	awardsWon: FabricCareInstructions;
	character: Sku;
	fictionNonfiction: ProcessMode;
	genre: Sku;
	subgenre: Sku;
	subject: Sku;
	seriesTitle: Sku;
	numberInSeries: MinimumAdvertisedPrice;
	issue: Sku;
	assembledProductLength: ShippingWeight;
	assembledProductWidth: ShippingWeight;
	assembledProductHeight: ShippingWeight;
	assembledProductWeight: ShippingWeight;
	variantGroupId: Sku;
	variantAttributeNames: CountryOfOriginComponents;
	isPrimaryVariant: ProcessMode;
	swatchImages: SwatchImages;
	smallPartsWarnings: SmallPartsWarnings;
	isAdultProduct: ProcessMode;
	edition: Sku;
	numberOfDiscs: MinimumAdvertisedPrice;
	originalLanguages: FabricCareInstructions;
	numberOfPages: MinimumAdvertisedPrice;
	isUnabridged: ProcessMode;
	isLargePrint: ProcessMode;
	readingLevel: Sku;
	editor: Sku;
	translator: Sku;
	translatedFrom: Sku;
	illustrator: Sku;
	bisacSubjectCodes: FabricCareInstructions;
	sportsLeague: Sku;
	sportsTeam: Sku;
	athlete: Sku;
	autographedBy: Sku;
	features: FabricCareInstructions;
	keywords: Sku;
}

export interface Movies {
	$schema: string;
	type: ShippingWeightType;
	properties: MoviesProperties;
	required: string[];
	additionalProperties: boolean;
}

export interface MoviesProperties {
	shortDescription: Sku;
	keyFeatures: FabricCareInstructions;
	synopsis: Sku;
	multipackQuantity: MinimumAdvertisedPrice;
	countPerPack: MinimumAdvertisedPrice;
	count: Sku;
	mainImageUrl: Sku;
	productSecondaryImageURL: FabricCareInstructions;
	title: Sku;
	physicalMediaFormat: ProcessMode;
	mpaaRating?: ProcessMode;
	ratingReason: Sku;
	movieGenre?: Sku;
	movieSubgenre?: Sku;
	seriesTitle: Sku;
	numberInSeries: MinimumAdvertisedPrice;
	director: Sku;
	actors: FabricCareInstructions;
	screenwriter: Sku;
	studioProductionCompany: Sku;
	targetAudience: FabricCareInstructions;
	awardsWon: FabricCareInstructions;
	character: Sku;
	variantGroupId: Sku;
	variantAttributeNames: CountryOfOriginComponents;
	isPrimaryVariant: ProcessMode;
	swatchImages: SwatchImages;
	duration: ShippingWeight;
	theatricalReleaseDate?: FeedDateClass;
	isDubbed: ProcessMode;
	dubbedLanguages: FabricCareInstructions;
	hasSubtitles: ProcessMode;
	subtitledLanguages: FabricCareInstructions;
	audioTrackCodec: Sku;
	aspectRatio: Sku;
	isAdultProduct: ProcessMode;
	originalLanguages: FabricCareInstructions;
	edition: Sku;
	numberOfDiscs: MinimumAdvertisedPrice;
	sportsLeague: Sku;
	sportsTeam: Sku;
	athlete: Sku;
	autographedBy?: Sku;
	features: FabricCareInstructions;
	keywords: Sku;
	tvRating?: Sku;
	tvShowGenre?: Sku;
	tvShowSubgenre?: Sku;
	tvNetwork?: Sku;
	tvShowSeason?: Sku;
	numberOfEpisodes?: MinimumAdvertisedPrice;
	episode?: MinimumAdvertisedPrice;
	releaseDate?: FeedDateClass;
	dvdReleaseDate?: FeedDateClass;
}

export interface Music {
	$schema: string;
	type: ShippingWeightType;
	properties: MusicProperties;
	required: AnimalAccessoriesRequired[];
	additionalProperties: boolean;
}

export interface MusicProperties {
	shortDescription: Sku;
	keyFeatures: FabricCareInstructions;
	synopsis: Sku;
	multipackQuantity: MinimumAdvertisedPrice;
	countPerPack: MinimumAdvertisedPrice;
	count: Sku;
	mainImageUrl: Sku;
	productSecondaryImageURL: FabricCareInstructions;
	title: Sku;
	physicalMediaFormat: ProcessMode;
	performer: FabricCareInstructions;
	songwriter: Sku;
	musicGenre: Sku;
	musicSubGenre: Sku;
	targetAudience: FabricCareInstructions;
	awardsWon: FabricCareInstructions;
	character: Sku;
	variantGroupId: Sku;
	variantAttributeNames: CountryOfOriginComponents;
	isPrimaryVariant: ProcessMode;
	swatchImages: SwatchImages;
	digitalAudioFileFormat: FabricCareInstructions;
	recordLabel: Sku;
	releaseDate: FeedDateClass;
	musicReleaseType: Sku;
	trackListings: TrackListings;
	numberOfTracks: MinimumAdvertisedPrice;
	musicProducer: Sku;
	seriesTitle: Sku;
	numberInSeries: MinimumAdvertisedPrice;
	isEdited: ProcessMode;
	isEnhanced: ProcessMode;
	edition: Sku;
	hasParentalAdvisoryLabel: ProcessMode;
	ratingReason: Sku;
	parentalAdvisoryLabelURL: FabricCareInstructions;
	numberOfDiscs: MinimumAdvertisedPrice;
	isAdultProduct: ProcessMode;
	originalLanguages: FabricCareInstructions;
	autographedBy: Sku;
	features: FabricCareInstructions;
	keywords: Sku;
}

export interface TrackListings {
	$schema: string;
	type: CountryOfOriginComponentsType;
	title: string;
	items: TrackListingsItems;
	minItems: number;
}

export interface TrackListingsItems {
	$schema: string;
	type: ShippingWeightType;
	properties: MischievousProperties;
	additionalProperties: boolean;
}

export interface MischievousProperties {
	trackNumber: MinimumAdvertisedPrice;
	trackName: Sku;
	trackDuration: Sku;
}

export interface MusicalInstrument {
	$schema: string;
	type: ShippingWeightType;
	title: string;
	properties: MusicalInstrumentProperties;
	oneOf: OneOf[];
	additionalProperties: boolean;
}

export interface MusicalInstrumentProperties {
	SoundAndRecording: MusicalInstruments;
	InstrumentAccessories: InstrumentAccessories;
	MusicalInstruments: MusicalInstruments;
	MusicCasesAndBags: MusicCasesAndBags;
}

export interface InstrumentAccessories {
	$schema: string;
	type: ShippingWeightType;
	properties: InstrumentAccessoriesProperties;
	required: AnimalAccessoriesRequired[];
	additionalProperties: boolean;
}

export interface InstrumentAccessoriesProperties {
	shortDescription: Sku;
	keyFeatures: FabricCareInstructions;
	brand: Sku;
	manufacturer: Sku;
	manufacturerPartNumber: Sku;
	modelNumber: Sku;
	multipackQuantity: MinimumAdvertisedPrice;
	countPerPack: MinimumAdvertisedPrice;
	count: Sku;
	pieceCount: MinimumAdvertisedPrice;
	mainImageUrl: Sku;
	productSecondaryImageURL: FabricCareInstructions;
	instrument: FabricCareInstructions;
	color: Sku;
	colorCategory: CountryOfOriginComponents;
	size: Sku;
	assembledProductLength: ShippingWeight;
	assembledProductWidth: ShippingWeight;
	assembledProductHeight: ShippingWeight;
	assembledProductWeight: ShippingWeight;
	variantGroupId: Sku;
	variantAttributeNames: CountryOfOriginComponents;
	isPrimaryVariant: ProcessMode;
	swatchImages: SwatchImages;
	smallPartsWarnings: SmallPartsWarnings;
	batteryTechnologyType: ProcessMode;
	hasWarranty: ProcessMode;
	warrantyURL: Sku;
	warrantyText: Sku;
	hasIngredientList: ProcessMode;
	ingredientListImage: Sku;
	ingredients: Sku;
	compositeWoodCertificationCode: CompositeWoodCertificationCode;
	isAerosol: ProcessMode;
	isChemical: ProcessMode;
	inputsAndOutputs: InputsAndOutputs;
	displayTechnology: Sku;
	wirelessTechnologies: FabricCareInstructions;
	hasBluetooth: ProcessMode;
	isRemoteControlIncluded: ProcessMode;
	batteryLife: ShippingWeight;
	pattern: Sku;
	material: Sku;
	isPortable: ProcessMode;
	recommendedUses: FabricCareInstructions;
	recommendedLocations: FabricCareInstructions;
	sportsLeague: Sku;
	sportsTeam: Sku;
	athlete: Sku;
	autographedBy: Sku;
	features: FabricCareInstructions;
	keywords: Sku;
}

export interface MusicCasesAndBags {
	$schema: string;
	type: ShippingWeightType;
	properties: MusicCasesAndBagsProperties;
	required: AnimalAccessoriesRequired[];
	additionalProperties: boolean;
}

export interface MusicCasesAndBagsProperties {
	shortDescription: Sku;
	keyFeatures: FabricCareInstructions;
	brand: Sku;
	manufacturer: Sku;
	manufacturerPartNumber: Sku;
	modelNumber: Sku;
	multipackQuantity: MinimumAdvertisedPrice;
	countPerPack: MinimumAdvertisedPrice;
	count: Sku;
	mainImageUrl: Sku;
	productSecondaryImageURL: FabricCareInstructions;
	instrument?: FabricCareInstructions;
	color: Sku;
	colorCategory?: CountryOfOriginComponents;
	size: Sku;
	assembledProductLength: ShippingWeight;
	assembledProductWidth: ShippingWeight;
	assembledProductHeight: ShippingWeight;
	assembledProductWeight: ShippingWeight;
	variantGroupId: Sku;
	variantAttributeNames: CountryOfOriginComponents;
	isPrimaryVariant: ProcessMode;
	swatchImages: SwatchImages;
	hasWarranty: ProcessMode;
	warrantyURL: Sku;
	warrantyText: Sku;
	fabricContent?: FabricContent;
	fabricCareInstructions?: FabricCareInstructions;
	shape?: Sku;
	hardOrSoftCase?: ProcessMode;
	isWheeled?: ProcessMode;
	material?: Sku;
	isPortable?: ProcessMode;
	recommendedUses?: FabricCareInstructions;
	recommendedLocations?: FabricCareInstructions;
	features: FabricCareInstructions;
	keywords: Sku;
	pieceCount?: MinimumAdvertisedPrice;
	globalBrandLicense?: FabricCareInstructions;
	isProp65WarningRequired?: ProcessMode;
	prop65WarningText?: Sku;
	batteryTechnologyType?: ProcessMode;
	hasFuelContainer?: ProcessMode;
	accessoriesIncluded?: FabricCareInstructions;
	isWaterproof?: ProcessMode;
	isFireResistant?: ProcessMode;
	cleaningCareAndMaintenance?: Sku;
	requiresTextileActLabeling?: ProcessMode;
	countryOfOriginTextiles?: ProcessMode;
	vehicleType?: Sku;
	sportsLeague?: Sku;
	sportsTeam?: Sku;
	athlete?: Sku;
	autographedBy?: Sku;
}

export interface MusicalInstruments {
	$schema: string;
	type: ShippingWeightType;
	properties: MusicalInstrumentsProperties;
	required: AnimalAccessoriesRequired[];
	additionalProperties: boolean;
}

export interface MusicalInstrumentsProperties {
	compositeWoodCertificationCode?: CompositeWoodCertificationCode;
	shortDescription: Sku;
	keyFeatures: FabricCareInstructions;
	brand: Sku;
	manufacturer: Sku;
	manufacturerPartNumber: Sku;
	modelNumber: Sku;
	multipackQuantity: MinimumAdvertisedPrice;
	countPerPack: MinimumAdvertisedPrice;
	count: Sku;
	mainImageUrl: Sku;
	productSecondaryImageURL: FabricCareInstructions;
	instrument?: FabricCareInstructions;
	musicalInstrumentFamily?: Sku;
	color: Sku;
	colorCategory: CountryOfOriginComponents;
	isAcoustic?: ProcessMode;
	isElectric?: ProcessMode;
	assembledProductLength: ShippingWeight;
	assembledProductWidth: ShippingWeight;
	assembledProductHeight: ShippingWeight;
	assembledProductWeight: ShippingWeight;
	variantGroupId: Sku;
	variantAttributeNames: CountryOfOriginComponents;
	isPrimaryVariant: ProcessMode;
	swatchImages: SwatchImages;
	smallPartsWarnings: SmallPartsWarnings;
	batteryTechnologyType: ProcessMode;
	hasWarranty: ProcessMode;
	warrantyURL: Sku;
	warrantyText: Sku;
	batteriesRequired: ProcessMode;
	audioPowerOutput: ShippingWeight;
	isPowered: ProcessMode;
	powerType: Sku;
	material: Sku;
	isPortable: ProcessMode;
	recommendedUses: FabricCareInstructions;
	recommendedLocations: FabricCareInstructions;
	inputsAndOutputs: InputsAndOutputs;
	displayTechnology?: Sku;
	hasBluetooth: ProcessMode;
	hasIntegratedSpeakers: ProcessMode;
	batteryLife: ShippingWeight;
	isFretted?: ProcessMode;
	isCollectible?: ProcessMode;
	ageGroup?: CountryOfOriginComponents;
	shape?: Sku;
	finish?: Sku;
	features: FabricCareInstructions;
	keywords: Sku;
	pieceCount?: MinimumAdvertisedPrice;
	equalizerControl?: Sku;
	wirelessTechnologies?: FabricCareInstructions;
	isRemoteControlIncluded?: ProcessMode;
	microphoneTechnology?: Sku;
	impedance?: Impedance;
}

export interface OccasionAndSeasonal {
	$schema: string;
	type: ShippingWeightType;
	title: string;
	properties: OccasionAndSeasonalProperties;
	oneOf: OneOf[];
	additionalProperties: boolean;
}

export interface OccasionAndSeasonalProperties {
	Funeral: CeremonialClothingAndAccessories;
	CeremonialClothingAndAccessories: CeremonialClothingAndAccessories;
	DecorationsAndFavors: DecorationsAndFavors;
	Costumes: CeremonialClothingAndAccessories;
	GiftSupplyAndAwards: CeremonialClothingAndAccessories;
}

export interface CeremonialClothingAndAccessories {
	$schema: string;
	type: ShippingWeightType;
	properties: CeremonialClothingAndAccessoriesProperties;
	required: AnimalAccessoriesRequired[];
	additionalProperties: boolean;
}

export interface CeremonialClothingAndAccessoriesProperties {
	shortDescription: Sku;
	keyFeatures: FabricCareInstructions;
	brand: Sku;
	manufacturer: Sku;
	manufacturerPartNumber: Sku;
	modelNumber: Sku;
	multipackQuantity: MinimumAdvertisedPrice;
	countPerPack: MinimumAdvertisedPrice;
	count: Sku;
	pieceCount: MinimumAdvertisedPrice;
	mainImageUrl: Sku;
	productSecondaryImageURL: FabricCareInstructions;
	material: Sku;
	color: Sku;
	colorCategory: CountryOfOriginComponents;
	pattern: Sku;
	occasion: Sku;
	clothingSize?: Sku;
	clothingSizeGroup?: ProcessMode;
	size: Sku;
	gender?: ProcessMode;
	globalBrandLicense: FabricCareInstructions;
	assembledProductLength: ShippingWeight;
	assembledProductWidth: ShippingWeight;
	assembledProductHeight: ShippingWeight;
	assembledProductWeight: ShippingWeight;
	variantGroupId: Sku;
	variantAttributeNames: CountryOfOriginComponents;
	isPrimaryVariant: ProcessMode;
	swatchImages: SwatchImages;
	isProp65WarningRequired: ProcessMode;
	prop65WarningText: Sku;
	requiresTextileActLabeling?: ProcessMode;
	countryOfOriginTextiles?: ProcessMode;
	fabricContent?: FabricContent;
	fabricCareInstructions?: FabricCareInstructions;
	recommendedUses: FabricCareInstructions;
	features: FabricCareInstructions;
	keywords: Sku;
	targetAudience?: FabricCareInstructions;
	theme?: Sku;
	character?: Sku;
	animalType?: Sku;
	smallPartsWarnings?: SmallPartsWarnings;
	hasIngredientList?: ProcessMode;
	ingredientListImage?: Sku;
	ingredients?: Sku;
	hasBatteries?: ProcessMode;
	batteryTechnologyType?: ProcessMode;
	isAerosol?: ProcessMode;
	wigStyles?: FabricCareInstructions;
	shape?: Sku;
	finish?: Sku;
	hasWarranty?: ProcessMode;
	isAssemblyRequired?: ProcessMode;
	assemblyInstructions?: Sku;
	sportsTeam?: Sku;
	sportsLeague?: Sku;
	sport?: Sku;
}

export interface DecorationsAndFavors {
	$schema: string;
	type: ShippingWeightType;
	properties: DecorationsAndFavorsProperties;
	required: AnimalAccessoriesRequired[];
	additionalProperties: boolean;
}

export interface DecorationsAndFavorsProperties {
	shortDescription: Sku;
	keyFeatures: FabricCareInstructions;
	brand: Sku;
	manufacturer: Sku;
	manufacturerPartNumber: Sku;
	modelNumber: Sku;
	multipackQuantity: MinimumAdvertisedPrice;
	countPerPack: MinimumAdvertisedPrice;
	count: Sku;
	pieceCount: MinimumAdvertisedPrice;
	mainImageUrl: Sku;
	productSecondaryImageURL: FabricCareInstructions;
	material: Sku;
	color: Sku;
	colorCategory: CountryOfOriginComponents;
	pattern: Sku;
	diameter: ShippingWeight;
	size: Sku;
	occasion: Sku;
	holidayLightingStyle: FabricCareInstructions;
	globalBrandLicense: FabricCareInstructions;
	theme: Sku;
	character: Sku;
	shape: Sku;
	finish: Sku;
	assembledProductLength: ShippingWeight;
	assembledProductWidth: ShippingWeight;
	assembledProductHeight: ShippingWeight;
	assembledProductWeight: ShippingWeight;
	variantGroupId: Sku;
	variantAttributeNames: CountryOfOriginComponents;
	isPrimaryVariant: ProcessMode;
	swatchImages: SwatchImages;
	isProp65WarningRequired: ProcessMode;
	prop65WarningText: Sku;
	smallPartsWarnings: SmallPartsWarnings;
	batteryTechnologyType: ProcessMode;
	hasExpiration: ProcessMode;
	hasIngredientList: ProcessMode;
	ingredientListImage: Sku;
	isAssemblyRequired: ProcessMode;
	assemblyInstructions: Sku;
	lightBulbType: Sku;
	lightBulbColor: Sku;
	numberOfLights: MinimumAdvertisedPrice;
	powerType: Sku;
	watts: ShippingWeight;
	recommendedUses: FabricCareInstructions;
	isInflatable: ProcessMode;
	sportsLeague: Sku;
	sportsTeam: Sku;
	athlete: Sku;
	autographedBy: Sku;
	features: FabricCareInstructions;
	keywords: Sku;
	isAnimated: ProcessMode;
	isAdultProduct: ProcessMode;
	ageGroup: CountryOfOriginComponents;
	gender: ProcessMode;
}

export interface OfficeCategory {
	$schema: string;
	type: ShippingWeightType;
	title: string;
	properties: OfficeCategoryProperties;
	oneOf: OneOf[];
	additionalProperties: boolean;
}

export interface OfficeCategoryProperties {
	Office: Office;
}

export interface Office {
	$schema: string;
	type: ShippingWeightType;
	properties: OfficeProperties;
	required: AnimalAccessoriesRequired[];
	additionalProperties: boolean;
}

export interface OfficeProperties {
	shortDescription: Sku;
	keyFeatures: FabricCareInstructions;
	brand: Sku;
	manufacturer: Sku;
	modelNumber: Sku;
	manufacturerPartNumber: Sku;
	multipackQuantity: MinimumAdvertisedPrice;
	countPerPack: MinimumAdvertisedPrice;
	count: Sku;
	pieceCount: MinimumAdvertisedPrice;
	mainImageUrl: Sku;
	productSecondaryImageURL: FabricCareInstructions;
	color: Sku;
	colorCategory: CountryOfOriginComponents;
	size: Sku;
	ageGroup: CountryOfOriginComponents;
	material: Sku;
	capacity: Sku;
	occasion: Sku;
	paperSize: Sku;
	assembledProductLength: ShippingWeight;
	assembledProductWidth: ShippingWeight;
	assembledProductHeight: ShippingWeight;
	assembledProductWeight: ShippingWeight;
	variantGroupId: Sku;
	variantAttributeNames: CountryOfOriginComponents;
	isPrimaryVariant: ProcessMode;
	swatchImages: SwatchImages;
	isProp65WarningRequired: ProcessMode;
	prop65WarningText: Sku;
	smallPartsWarnings: SmallPartsWarnings;
	batteryTechnologyType: ProcessMode;
	hasExpiration: ProcessMode;
	hasWarranty: ProcessMode;
	warrantyURL: Sku;
	warrantyText: Sku;
	isLightingFactsLabelRequired: ProcessMode;
	lightingFactsLabel: Sku;
	pattern: Sku;
	shape: Sku;
	finish: Sku;
	theme: Sku;
	globalBrandLicense: FabricCareInstructions;
	compatibleDevices: Sku;
	isPowered: ProcessMode;
	powerType: Sku;
	brightness: ShippingWeight;
	dexterity: Sku;
	systemOfMeasurement: Sku;
	holeSize: ShippingWeight;
	year: MinimumAdvertisedPrice;
	calendarFormat: Sku;
	calendarTerm: ShippingWeight;
	numberOfSheets: MinimumAdvertisedPrice;
	envelopeSize: MinimumAdvertisedPrice;
	inkColor: FabricCareInstructions;
	isRefillable: ProcessMode;
	isRetractable: ProcessMode;
	isIndustrial: ProcessMode;
	isAntiglare: ProcessMode;
	isMagnetic: ProcessMode;
	isTearResistant: ProcessMode;
	recommendedUses: FabricCareInstructions;
	hpprintercartridgeNumber: FabricCareInstructions;
	pencilLeadDiameter: Impedance;
	tabCut: ProcessMode;
	tabColor: Sku;
	isMadeFromRecycledMaterial: ProcessMode;
	isLined: ProcessMode;
	recycledMaterialContent: RecycledMaterialContent;
	overallExpansion: ShippingWeight;
	paperClipSize: ProcessMode;
	penPointSize: ShippingWeight;
}

export interface OtherCategory {
	$schema: string;
	type: ShippingWeightType;
	title: string;
	properties: OtherCategoryProperties;
	oneOf: OneOf[];
	additionalProperties: boolean;
}

export interface OtherCategoryProperties {
	Storage: Storage;
	giftCards: GiftCards;
	CleaningAndChemical: CleaningAndChemical;
	safetyAndEmergency: SafetyAndEmergency;
	fuelsAndLubricants: FuelsAndLubricants;
	Other: Other;
}

export interface CleaningAndChemical {
	$schema: string;
	type: ShippingWeightType;
	properties: CleaningAndChemicalProperties;
	required: AnimalAccessoriesRequired[];
	additionalProperties: boolean;
}

export interface CleaningAndChemicalProperties {
	shortDescription: Sku;
	keyFeatures: FabricCareInstructions;
	brand: Sku;
	manufacturer: Sku;
	manufacturerPartNumber: Sku;
	modelNumber: Sku;
	multipackQuantity: MinimumAdvertisedPrice;
	countPerPack: MinimumAdvertisedPrice;
	count: Sku;
	pieceCount: MinimumAdvertisedPrice;
	mainImageUrl: Sku;
	productSecondaryImageURL: FabricCareInstructions;
	recommendedSurfaces: FabricCareInstructions;
	recommendedRooms: FabricCareInstructions;
	recommendedLocations: FabricCareInstructions;
	size: Sku;
	material: Sku;
	finish: Sku;
	color: Sku;
	colorCategory: CountryOfOriginComponents;
	pattern: Sku;
	shape: Sku;
	isAssemblyRequired: ProcessMode;
	assemblyInstructions: Sku;
	assembledProductLength: ShippingWeight;
	assembledProductWidth: ShippingWeight;
	assembledProductHeight: ShippingWeight;
	assembledProductWeight: ShippingWeight;
	variantGroupId: Sku;
	variantAttributeNames: CountryOfOriginComponents;
	isPrimaryVariant: ProcessMode;
	swatchImages: SwatchImages;
	isProp65WarningRequired: ProcessMode;
	prop65WarningText: Sku;
	batteryTechnologyType: ProcessMode;
	hasExpiration: ProcessMode;
	hasPricePerUnit: ProcessMode;
	pricePerUnitUom: ProcessMode;
	pricePerUnitQuantity: MinimumAdvertisedPrice;
	hasIngredientList: ProcessMode;
	ingredientListImage: Sku;
	ingredients: Sku;
	hasFuelContainer: ProcessMode;
	fabricContent: FabricContent;
	isPowered: ProcessMode;
	powerType: Sku;
	volts: ShippingWeight;
	connections: FabricCareInstructions;
	activeIngredients: ActiveIngredients;
	inactiveIngredients: FabricCareInstructions;
	instructions: Sku;
	form: Sku;
	scent: Sku;
	fluidOunces: ShippingWeight;
	isRecyclable: ProcessMode;
	isFlammable: ProcessMode;
	isCombustible: ProcessMode;
	isBiodegradable: ProcessMode;
	isEnergyStarCertified: ProcessMode;
	handleLength: ShippingWeight;
	bladeWidth: ShippingWeight;
	bristleMaterial: Sku;
	cleaningPath: ShippingWeight;
	features: FabricCareInstructions;
	keywords: Sku;
}

export interface Other {
	$schema: string;
	type: ShippingWeightType;
	properties: OtherProperties;
	required: AnimalAccessoriesRequired[];
	additionalProperties: boolean;
}

export interface OtherProperties {
	shortDescription: Sku;
	keyFeatures: FabricCareInstructions;
	brand: Sku;
	manufacturer: Sku;
	manufacturerPartNumber: Sku;
	modelNumber: Sku;
	multipackQuantity: MinimumAdvertisedPrice;
	countPerPack: MinimumAdvertisedPrice;
	count: Sku;
	pieceCount: MinimumAdvertisedPrice;
	mainImageUrl: Sku;
	productSecondaryImageURL: FabricCareInstructions;
	material: Sku;
	finish: Sku;
	color: Sku;
	colorCategory: CountryOfOriginComponents;
	pattern: Sku;
	shape: Sku;
	size: Sku;
	assembledProductLength: ShippingWeight;
	assembledProductWidth: ShippingWeight;
	assembledProductHeight: ShippingWeight;
	assembledProductWeight: ShippingWeight;
	variantGroupId: Sku;
	variantAttributeNames: CountryOfOriginComponents;
	isPrimaryVariant: ProcessMode;
	swatchImages: SwatchImages;
	isProp65WarningRequired: ProcessMode;
	prop65WarningText: Sku;
	smallPartsWarnings: SmallPartsWarnings;
	hasIngredientList: ProcessMode;
	ingredientListImage: Sku;
	ingredients: Sku;
	hasFuelContainer: ProcessMode;
	requiresTextileActLabeling: ProcessMode;
	countryOfOriginTextiles: ProcessMode;
	features: FabricCareInstructions;
	keywords: Sku;
	isFoldable: ProcessMode;
	isRetractable: ProcessMode;
	isPortable: ProcessMode;
	isIndustrial: ProcessMode;
	systemOfMeasurement: Sku;
	gender: ProcessMode;
}

export interface Storage {
	$schema: string;
	type: ShippingWeightType;
	properties: StorageProperties;
	required: AnimalAccessoriesRequired[];
	additionalProperties: boolean;
}

export interface StorageProperties {
	shortDescription: Sku;
	keyFeatures: FabricCareInstructions;
	brand: Sku;
	manufacturer: Sku;
	manufacturerPartNumber: Sku;
	modelNumber: Sku;
	multipackQuantity: MinimumAdvertisedPrice;
	countPerPack: MinimumAdvertisedPrice;
	count: Sku;
	pieceCount: MinimumAdvertisedPrice;
	mainImageUrl: Sku;
	productSecondaryImageURL: FabricCareInstructions;
	material: Sku;
	finish: Sku;
	color: Sku;
	colorCategory: CountryOfOriginComponents;
	pattern: Sku;
	shape: Sku;
	size: Sku;
	recommendedRooms: FabricCareInstructions;
	recommendedLocations: FabricCareInstructions;
	assembledProductLength: ShippingWeight;
	assembledProductWidth: ShippingWeight;
	assembledProductHeight: ShippingWeight;
	assembledProductWeight: ShippingWeight;
	variantGroupId: Sku;
	variantAttributeNames: CountryOfOriginComponents;
	isPrimaryVariant: ProcessMode;
	swatchImages: SwatchImages;
	isProp65WarningRequired: ProcessMode;
	prop65WarningText: Sku;
	smallPartsWarnings: SmallPartsWarnings;
	batteryTechnologyType: ProcessMode;
	hasWarranty: ProcessMode;
	warrantyURL: Sku;
	warrantyText: Sku;
	isAssemblyRequired: ProcessMode;
	assemblyInstructions: Sku;
	fabricContent: FabricContent;
	fabricCareInstructions: FabricCareInstructions;
	collection: Sku;
	numberOfShelves: MinimumAdvertisedPrice;
	shelfStyle: Sku;
	shelfDepth: ShippingWeight;
	numberOfDrawers: MinimumAdvertisedPrice;
	drawerPosition: Sku;
	drawerDimensions: Sku;
	capacity: Sku;
	maximumWeight: ShippingWeight;
	recommendedUses: FabricCareInstructions;
	globalBrandLicense: FabricCareInstructions;
	features: FabricCareInstructions;
	keywords: Sku;
	isFoldable: ProcessMode;
	isRetractable: ProcessMode;
	isPortable: ProcessMode;
	isIndustrial: ProcessMode;
	systemOfMeasurement: Sku;
}

export interface FuelsAndLubricants {
	$schema: string;
	type: ShippingWeightType;
	properties: FuelsAndLubricantsProperties;
	required: AnimalAccessoriesRequired[];
	additionalProperties: boolean;
}

export interface FuelsAndLubricantsProperties {
	hasFuelContainer: ProcessMode;
	shortDescription: Sku;
	keyFeatures: FabricCareInstructions;
	brand: Sku;
	manufacturer: Sku;
	manufacturerPartNumber: Sku;
	modelNumber: Sku;
	multipackQuantity: MinimumAdvertisedPrice;
	countPerPack: MinimumAdvertisedPrice;
	count: Sku;
	mainImageUrl: Sku;
	productSecondaryImageURL: FabricCareInstructions;
	size: Sku;
	fuelType: Sku;
	fluidOunces: ShippingWeight;
	recommendedUses: FabricCareInstructions;
	variantGroupId: Sku;
	variantAttributeNames: CountryOfOriginComponents;
	isPrimaryVariant: ProcessMode;
	swatchImages: SwatchImages;
	isProp65WarningRequired: ProcessMode;
	prop65WarningText: Sku;
	hasExpiration: ProcessMode;
	hasPricePerUnit: ProcessMode;
	pricePerUnitUom: ProcessMode;
	pricePerUnitQuantity: MinimumAdvertisedPrice;
	instructions: Sku;
	form: Sku;
	isEnergyStarCertified: ProcessMode;
	isRefillable: ProcessMode;
	features: FabricCareInstructions;
	keywords: Sku;
	systemOfMeasurement: Sku;
}

export interface GiftCards {
	$schema: string;
	type: ShippingWeightType;
	properties: GiftCardsProperties;
	required: AnimalAccessoriesRequired[];
	additionalProperties: boolean;
}

export interface GiftCardsProperties {
	shortDescription: Sku;
	keyFeatures: FabricCareInstructions;
	brand: Sku;
	manufacturer: Sku;
	manufacturerPartNumber: Sku;
	modelNumber: Sku;
	multipackQuantity: MinimumAdvertisedPrice;
	countPerPack: MinimumAdvertisedPrice;
	count: Sku;
	mainImageUrl: Sku;
	productSecondaryImageURL: FabricCareInstructions;
	variantGroupId: Sku;
	variantAttributeNames: CountryOfOriginComponents;
	isPrimaryVariant: ProcessMode;
	swatchImages: SwatchImages;
	giftCardFormat: ProcessMode;
	giftCardCategory: CountryOfOriginComponents;
	giftCardAmount: MinimumAdvertisedPrice;
	occasion: Sku;
	globalBrandLicense: FabricCareInstructions;
	features: FabricCareInstructions;
	keywords: Sku;
	gender: ProcessMode;
	pattern: Sku;
	color: Sku;
	character: Sku;
}

export interface SafetyAndEmergency {
	$schema: string;
	type: ShippingWeightType;
	properties: SafetyAndEmergencyProperties;
	required: AnimalAccessoriesRequired[];
	additionalProperties: boolean;
}

export interface SafetyAndEmergencyProperties {
	shortDescription: Sku;
	keyFeatures: FabricCareInstructions;
	brand: Sku;
	manufacturer: Sku;
	manufacturerPartNumber: Sku;
	modelNumber: Sku;
	multipackQuantity: MinimumAdvertisedPrice;
	countPerPack: MinimumAdvertisedPrice;
	count: Sku;
	pieceCount: MinimumAdvertisedPrice;
	mainImageUrl: Sku;
	productSecondaryImageURL: FabricCareInstructions;
	recommendedSurfaces: FabricCareInstructions;
	recommendedLocations: FabricCareInstructions;
	size: Sku;
	assembledProductLength: ShippingWeight;
	assembledProductWidth: ShippingWeight;
	assembledProductHeight: ShippingWeight;
	assembledProductWeight: ShippingWeight;
	variantGroupId: Sku;
	variantAttributeNames: CountryOfOriginComponents;
	isPrimaryVariant: ProcessMode;
	swatchImages: SwatchImages;
	isProp65WarningRequired: ProcessMode;
	prop65WarningText: Sku;
	smallPartsWarnings: SmallPartsWarnings;
	batteryTechnologyType: ProcessMode;
	hasExpiration: ProcessMode;
	hasWarranty: ProcessMode;
	warrantyURL: Sku;
	warrantyText: Sku;
	hasFuelContainer: ProcessMode;
	hasIngredientList: ProcessMode;
	ingredientListImage: Sku;
	ingredients: Sku;
	isAssemblyRequired: ProcessMode;
	assemblyInstructions: Sku;
	instructions: Sku;
	form: Sku;
	fluidOunces: ShippingWeight;
	handleLength: ShippingWeight;
	isRefillable: ProcessMode;
	fireExtinguisherClasses: CountryOfOriginComponents;
	workingPressure: ShippingWeight;
	recommendedUses: FabricCareInstructions;
	isPowered: ProcessMode;
	powerType: Sku;
	features: FabricCareInstructions;
	keywords: Sku;
}

export interface Photography {
	$schema: string;
	type: ShippingWeightType;
	title: string;
	properties: PhotographyProperties;
	oneOf: OneOf[];
	additionalProperties: boolean;
}

export interface PhotographyProperties {
	PhotoAccessories: PhotoAccessories;
	CamerasAndLenses: CamerasAndLenses;
}

export interface CamerasAndLenses {
	$schema: string;
	type: ShippingWeightType;
	properties: CamerasAndLensesProperties;
	required: AnimalAccessoriesRequired[];
	additionalProperties: boolean;
}

export interface CamerasAndLensesProperties {
	shortDescription: Sku;
	keyFeatures: FabricCareInstructions;
	brand: Sku;
	manufacturer: Sku;
	manufacturerPartNumber: Sku;
	modelNumber: Sku;
	multipackQuantity: MinimumAdvertisedPrice;
	countPerPack: MinimumAdvertisedPrice;
	count: Sku;
	pieceCount: MinimumAdvertisedPrice;
	mainImageUrl: Sku;
	productSecondaryImageURL: FabricCareInstructions;
	numberOfMegapixels: ShippingWeight;
	digitalZoom: Sku;
	opticalZoom: Sku;
	magnification: Sku;
	sensorResolution: ShippingWeight;
	lensDiameter: ShippingWeight;
	lensCoating: Sku;
	lensFilterType: Sku;
	cameraLensType: Sku;
	hasFlash: ProcessMode;
	flashType: Sku;
	minimumShutterSpeed: ShippingWeight;
	maximumShutterSpeed: ShippingWeight;
	focusType: FabricCareInstructions;
	focalLength: Impedance;
	focalRatio: Sku;
	minimumAperture: Sku;
	maximumAperture: Sku;
	exposureModes: FabricCareInstructions;
	displayTechnology: Sku;
	displayResolution: Sku;
	screenSize: ShippingWeight;
	diameter: ShippingWeight;
	color: Sku;
	colorCategory: CountryOfOriginComponents;
	assembledProductLength: ShippingWeight;
	assembledProductWidth: ShippingWeight;
	assembledProductHeight: ShippingWeight;
	assembledProductWeight: ShippingWeight;
	variantGroupId: Sku;
	variantAttributeNames: CountryOfOriginComponents;
	isPrimaryVariant: ProcessMode;
	swatchImages: SwatchImages;
	isProp65WarningRequired: ProcessMode;
	prop65WarningText: Sku;
	batteryTechnologyType: ProcessMode;
	isAssemblyRequired: ProcessMode;
	assemblyInstructions: Sku;
	hasWarranty: ProcessMode;
	warrantyURL: Sku;
	warrantyText: Sku;
	accessoriesIncluded: FabricCareInstructions;
	hasTouchscreen: ProcessMode;
	hasMemoryCardSlot: ProcessMode;
	memoryCardType: FabricCareInstructions;
	recordableMediaFormats: FabricCareInstructions;
	wirelessTechnologies: FabricCareInstructions;
	connections: FabricCareInstructions;
	isPortable: ProcessMode;
	isWaterproof: ProcessMode;
	hasSelfTimer: ProcessMode;
	selfTimerDelay: SelfTimerDelay;
	standbyTime: ShippingWeight;
	fieldOfView: Sku;
	isParfocal: ProcessMode;
	shootingMode: Sku;
	microphoneIncluded: ProcessMode;
	hasHandle: ProcessMode;
	isMulticoated: ProcessMode;
	hasRedEyeReduction: ProcessMode;
	hasNightVision: ProcessMode;
	isFogResistant: ProcessMode;
	attachmentStyle: Sku;
	hasShoulderStrap: ProcessMode;
	compatibleBrands: FabricCareInstructions;
	compatibleDevices: Sku;
	material: Sku;
	cleaningCareAndMaintenance: Sku;
	globalBrandLicense: FabricCareInstructions;
	features: FabricCareInstructions;
	keywords: Sku;
}

export interface SelfTimerDelay {
	$schema: string;
	type: CountryOfOriginComponentsType;
	title: string;
	items: MinimumAdvertisedPrice;
	minItems: number;
}

export interface PhotoAccessories {
	$schema: string;
	type: ShippingWeightType;
	properties: PhotoAccessoriesProperties;
	required: AnimalAccessoriesRequired[];
	additionalProperties: boolean;
}

export interface PhotoAccessoriesProperties {
	shortDescription: Sku;
	keyFeatures: FabricCareInstructions;
	brand: Sku;
	manufacturer: Sku;
	manufacturerPartNumber: Sku;
	modelNumber: Sku;
	multipackQuantity: MinimumAdvertisedPrice;
	countPerPack: MinimumAdvertisedPrice;
	count: Sku;
	mainImageUrl: Sku;
	productSecondaryImageURL: FabricCareInstructions;
	compatibleBrands: FabricCareInstructions;
	compatibleDevices: Sku;
	color: Sku;
	colorCategory: CountryOfOriginComponents;
	material: Sku;
	memoryCardType: FabricCareInstructions;
	recordableMediaFormats: FabricCareInstructions;
	connections: FabricCareInstructions;
	size: Sku;
	assembledProductLength: ShippingWeight;
	assembledProductWidth: ShippingWeight;
	assembledProductHeight: ShippingWeight;
	assembledProductWeight: ShippingWeight;
	variantGroupId: Sku;
	variantAttributeNames: CountryOfOriginComponents;
	isPrimaryVariant: ProcessMode;
	swatchImages: SwatchImages;
	isProp65WarningRequired: ProcessMode;
	prop65WarningText: Sku;
	batteryTechnologyType: ProcessMode;
	hasWarranty: ProcessMode;
	warrantyURL: Sku;
	warrantyText: Sku;
	globalBrandLicense: FabricCareInstructions;
	isAssemblyRequired: ProcessMode;
	assemblyInstructions: Sku;
	wirelessTechnologies: FabricCareInstructions;
	displayTechnology: Sku;
	accessoriesIncluded: FabricCareInstructions;
	isWaterproof: ProcessMode;
	recommendedUses: FabricCareInstructions;
	cleaningCareAndMaintenance: Sku;
	shape: Sku;
	pattern: Sku;
	capacity: Sku;
	inputsAndOutputs: InputsAndOutputs;
	lightOutput: ShippingWeight;
	lightBulbType: Sku;
	volts: ShippingWeight;
	watts: ShippingWeight;
	features: FabricCareInstructions;
	keywords: Sku;
}

export interface SportAndRecreation {
	$schema: string;
	type: ShippingWeightType;
	title: string;
	properties: SportAndRecreationProperties;
	oneOf: OneOf[];
	additionalProperties: boolean;
}

export interface SportAndRecreationProperties {
	Cycling: Cycling;
	Optics: Optics;
	Weapons: Weapons;
	SportAndRecreationOther: SportAndRecreationOther;
}

export interface Cycling {
	$schema: string;
	type: ShippingWeightType;
	properties: CyclingProperties;
	required: AnimalAccessoriesRequired[];
	additionalProperties: boolean;
}

export interface CyclingProperties {
	hasFuelContainer: ProcessMode;
	shortDescription: Sku;
	keyFeatures: FabricCareInstructions;
	brand: Sku;
	manufacturer: Sku;
	manufacturerPartNumber: Sku;
	modelNumber: Sku;
	multipackQuantity: MinimumAdvertisedPrice;
	countPerPack: MinimumAdvertisedPrice;
	count: Sku;
	pieceCount: MinimumAdvertisedPrice;
	mainImageUrl: Sku;
	productSecondaryImageURL: FabricCareInstructions;
	color: Sku;
	colorCategory: CountryOfOriginComponents;
	gender: ProcessMode;
	size: Sku;
	ageGroup: CountryOfOriginComponents;
	ageRange: AgeRange;
	sport: Sku;
	bicycleFrameSize: ShippingWeight;
	bicycleWheelDiameter: ShippingWeight;
	bicycleTireSize: Sku;
	numberOfSpeeds: MinimumAdvertisedPrice;
	assembledProductLength: ShippingWeight;
	assembledProductWidth: ShippingWeight;
	assembledProductHeight: ShippingWeight;
	assembledProductWeight: ShippingWeight;
	variantGroupId: Sku;
	variantAttributeNames: CountryOfOriginComponents;
	isPrimaryVariant: ProcessMode;
	swatchImages: SwatchImages;
	isProp65WarningRequired: ProcessMode;
	prop65WarningText: Sku;
	smallPartsWarnings: SmallPartsWarnings;
	batteryTechnologyType: ProcessMode;
	hasExpiration: ProcessMode;
	shelfLife: ShippingWeight;
	requiresTextileActLabeling: ProcessMode;
	countryOfOriginTextiles: ProcessMode;
	hasWarranty: ProcessMode;
	warrantyURL: Sku;
	warrantyText: Sku;
	fabricContent: FabricContent;
	fabricCareInstructions: FabricCareInstructions;
	isAssemblyRequired: ProcessMode;
	assemblyInstructions: Sku;
	material: Sku;
	dexterity: Sku;
	globalBrandLicense: FabricCareInstructions;
	sportsLeague: Sku;
	sportsTeam: Sku;
	athlete: Sku;
	features: FabricCareInstructions;
	keywords: Sku;
	pattern: Sku;
	finish: Sku;
	shape: Sku;
	season: Sku;
	character: Sku;
	capacity: Sku;
	seatingCapacity: MinimumAdvertisedPrice;
	maximumWeight: ShippingWeight;
	wirelessTechnologies: FabricCareInstructions;
	isPortable: ProcessMode;
	isFoldable: ProcessMode;
	isWeatherResistant: ProcessMode;
	isWaterproof: ProcessMode;
	isPowered: ProcessMode;
	powerType: Sku;
	horsepower: ShippingWeight;
	tireDiameter: ShippingWeight;
	cleaningCareAndMaintenance: Sku;
	recommendedUses: FabricCareInstructions;
	lockType: Sku;
	lockingMechanism: Sku;
	recommendedLocations: FabricCareInstructions;
	lightBulbType: Sku;
}

export interface Optics {
	$schema: string;
	type: ShippingWeightType;
	properties: OpticsProperties;
	required: AnimalAccessoriesRequired[];
	additionalProperties: boolean;
}

export interface OpticsProperties {
	shortDescription: Sku;
	keyFeatures: FabricCareInstructions;
	brand: Sku;
	manufacturer: Sku;
	manufacturerPartNumber: Sku;
	modelNumber: Sku;
	multipackQuantity: MinimumAdvertisedPrice;
	countPerPack: MinimumAdvertisedPrice;
	count: Sku;
	pieceCount: MinimumAdvertisedPrice;
	mainImageUrl: Sku;
	productSecondaryImageURL: FabricCareInstructions;
	gender: ProcessMode;
	size: Sku;
	ageGroup: CountryOfOriginComponents;
	ageRange: AgeRange;
	digitalZoom: Sku;
	opticalZoom: Sku;
	lensDiameter: ShippingWeight;
	lensCoating: Sku;
	sensorResolution: ShippingWeight;
	magnification: Sku;
	focusType: FabricCareInstructions;
	fieldOfView: Sku;
	isParfocal: ProcessMode;
	focalRatio: Sku;
	displayTechnology: Sku;
	displayResolution: Sku;
	hasNightVision: ProcessMode;
	assembledProductLength: ShippingWeight;
	assembledProductWidth: ShippingWeight;
	assembledProductHeight: ShippingWeight;
	assembledProductWeight: ShippingWeight;
	variantGroupId: Sku;
	variantAttributeNames: CountryOfOriginComponents;
	isPrimaryVariant: ProcessMode;
	swatchImages: SwatchImages;
	isProp65WarningRequired: ProcessMode;
	prop65WarningText: Sku;
	batteryTechnologyType: ProcessMode;
	isChemical: ProcessMode;
	hasWarranty: ProcessMode;
	warrantyURL: Sku;
	warrantyText: Sku;
	isAssemblyRequired: ProcessMode;
	assemblyInstructions: Sku;
	material: Sku;
	dexterity: Sku;
	globalBrandLicense: FabricCareInstructions;
	screenSize: ShippingWeight;
	hasLcdScreen: ProcessMode;
	powerType: Sku;
	isMulticoated: ProcessMode;
	isLockable: ProcessMode;
	lockType: Sku;
	hasMemoryCardSlot: ProcessMode;
	isFogResistant: ProcessMode;
	operatingTemperature: ShippingWeight;
	hasDovetailBarSystem: ProcessMode;
	attachmentStyle: Sku;
	features: FabricCareInstructions;
	keywords: Sku;
	color: Sku;
	colorCategory: CountryOfOriginComponents;
	sport: Sku;
	pattern: Sku;
	wirelessTechnologies: FabricCareInstructions;
	isPortable: ProcessMode;
	isFoldable: ProcessMode;
	isWeatherResistant: ProcessMode;
	isWaterproof: ProcessMode;
	isPowered: ProcessMode;
	cleaningCareAndMaintenance: Sku;
	recommendedUses: FabricCareInstructions;
	recommendedLocations: FabricCareInstructions;
}

export interface SportAndRecreationOther {
	$schema: string;
	type: ShippingWeightType;
	properties: SportAndRecreationOtherProperties;
	required: AnimalAccessoriesRequired[];
	additionalProperties: boolean;
}

export interface SportAndRecreationOtherProperties {
	shortDescription: Sku;
	keyFeatures: FabricCareInstructions;
	brand: Sku;
	manufacturer: Sku;
	manufacturerPartNumber: Sku;
	modelNumber: Sku;
	multipackQuantity: MinimumAdvertisedPrice;
	countPerPack: MinimumAdvertisedPrice;
	count: Sku;
	pieceCount: MinimumAdvertisedPrice;
	mainImageUrl: Sku;
	productSecondaryImageURL: FabricCareInstructions;
	color: Sku;
	colorCategory: CountryOfOriginComponents;
	sport: Sku;
	gender: ProcessMode;
	size: Sku;
	ageGroup: CountryOfOriginComponents;
	ageRange: AgeRange;
	clothingSize: Sku;
	assembledProductLength: ShippingWeight;
	assembledProductWidth: ShippingWeight;
	assembledProductHeight: ShippingWeight;
	assembledProductWeight: ShippingWeight;
	variantGroupId: Sku;
	variantAttributeNames: CountryOfOriginComponents;
	isPrimaryVariant: ProcessMode;
	swatchImages: SwatchImages;
	isProp65WarningRequired: ProcessMode;
	prop65WarningText: Sku;
	smallPartsWarnings: SmallPartsWarnings;
	batteryTechnologyType: ProcessMode;
	hasExpiration: ProcessMode;
	shelfLife: ShippingWeight;
	requiresTextileActLabeling: ProcessMode;
	countryOfOriginTextiles: ProcessMode;
	hasWarranty: ProcessMode;
	warrantyURL: Sku;
	warrantyText: Sku;
	compositeWoodCertificationCode: CompositeWoodCertificationCode;
	hasFuelContainer: ProcessMode;
	fabricContent: FabricContent;
	fabricCareInstructions: FabricCareInstructions;
	shoeSize: Sku;
	sportsLeague: Sku;
	sportsTeam: Sku;
	isAssemblyRequired: ProcessMode;
	assemblyInstructions: Sku;
	driveSystem: Sku;
	strideLength: ShippingWeight;
	material: Sku;
	dexterity: Sku;
	globalBrandLicense: FabricCareInstructions;
	athlete: Sku;
	autographedBy: Sku;
	features: FabricCareInstructions;
	keywords: Sku;
	pattern: Sku;
	finish: Sku;
	shape: Sku;
	season: Sku;
	character: Sku;
	capacity: Sku;
	seatingCapacity: MinimumAdvertisedPrice;
	maximumWeight: ShippingWeight;
	maximumIncline: MinimumAdvertisedPrice;
	batDrop: Sku;
	fitnessGoal: Sku;
	footballSize: Sku;
	basketballSize: Sku;
	soccerBallSize: Sku;
	ballCoreMaterial: FabricCareInstructions;
	bladeType: Sku;
	animalType: Sku;
	tentType: Sku;
	fishingLocation: Sku;
	fishingLinePoundTest: ShippingWeight;
	wirelessTechnologies: FabricCareInstructions;
	hasAutomaticShutoff: ProcessMode;
	minimumTemperature: ShippingWeight;
	isMemorabilia: ProcessMode;
	isCollectible: ProcessMode;
	isPortable: ProcessMode;
	isFoldable: ProcessMode;
	isSpaceSaving: ProcessMode;
	isWheeled: ProcessMode;
	isTearResistant: ProcessMode;
	isWeatherResistant: ProcessMode;
	isWaterproof: ProcessMode;
	isPowered: ProcessMode;
	powerType: Sku;
	horsepower: ShippingWeight;
	velocity: ShippingWeight;
	tireDiameter: ShippingWeight;
	cleaningCareAndMaintenance: Sku;
	recommendedUses: FabricCareInstructions;
	recommendedLocations: FabricCareInstructions;
	compatibleDevices: Sku;
}

export interface Weapons {
	$schema: string;
	type: ShippingWeightType;
	properties: WeaponsProperties;
	required: AnimalAccessoriesRequired[];
	additionalProperties: boolean;
}

export interface WeaponsProperties {
	shortDescription: Sku;
	keyFeatures: FabricCareInstructions;
	brand: Sku;
	manufacturer: Sku;
	manufacturerPartNumber: Sku;
	modelNumber: Sku;
	multipackQuantity: MinimumAdvertisedPrice;
	countPerPack: MinimumAdvertisedPrice;
	count: Sku;
	mainImageUrl: Sku;
	productSecondaryImageURL: FabricCareInstructions;
	ammunitionType: Sku;
	sport: Sku;
	velocity: ShippingWeight;
	caliber: ShippingWeight;
	firearmAction: Sku;
	shotgunGauge: ShippingWeight;
	barrelLength: ShippingWeight;
	gender: ProcessMode;
	ageGroup: CountryOfOriginComponents;
	size: Sku;
	clothingSize: Sku;
	color: Sku;
	colorCategory: CountryOfOriginComponents;
	assembledProductLength: ShippingWeight;
	assembledProductWidth: ShippingWeight;
	assembledProductHeight: ShippingWeight;
	assembledProductWeight: ShippingWeight;
	variantGroupId: Sku;
	variantAttributeNames: CountryOfOriginComponents;
	isPrimaryVariant: ProcessMode;
	swatchImages: SwatchImages;
	isProp65WarningRequired: ProcessMode;
	prop65WarningText: Sku;
	batteryTechnologyType: ProcessMode;
	hasWarranty: ProcessMode;
	warrantyURL: Sku;
	warrantyText: Sku;
	hasFuelContainer: ProcessMode;
	material: Sku;
	dexterity: Sku;
	globalBrandLicense: FabricCareInstructions;
	isAssemblyRequired: ProcessMode;
	assemblyInstructions: Sku;
	firearmChamberLength: MinimumAdvertisedPrice;
	sportsLeague: Sku;
	sportsTeam: Sku;
	athlete: Sku;
	features: FabricCareInstructions;
	keywords: Sku;
	pattern: Sku;
	finish: Sku;
	shape: Sku;
	season: Sku;
	character: Sku;
	bladeType: Sku;
	animalType: Sku;
	wirelessTechnologies: FabricCareInstructions;
	isMemorabilia: ProcessMode;
	isCollectible: ProcessMode;
	isPortable: ProcessMode;
	isWeatherResistant: ProcessMode;
	isWaterproof: ProcessMode;
	isPowered: ProcessMode;
	compatibleDevices: Sku;
	powerType: Sku;
	cleaningCareAndMaintenance: Sku;
	recommendedUses: FabricCareInstructions;
	recommendedLocations: FabricCareInstructions;
}

export interface ToolsAndHardware {
	$schema: string;
	type: ShippingWeightType;
	title: string;
	properties: ToolsAndHardwareProperties;
	oneOf: OneOf[];
	additionalProperties: boolean;
}

export interface ToolsAndHardwareProperties {
	BuildingSupply: BuildingSupply;
	Hardware: Hardware;
	Tools: Tools;
	PlumbingAndHVAC: PlumbingAndHVAC;
	Electrical: Electrical;
	ToolsAndHardwareOther: MusicCasesAndBags;
}

export interface BuildingSupply {
	$schema: string;
	type: ShippingWeightType;
	properties: BuildingSupplyProperties;
	required: AnimalAccessoriesRequired[];
	additionalProperties: boolean;
}

export interface BuildingSupplyProperties {
	shortDescription: Sku;
	keyFeatures: FabricCareInstructions;
	brand: Sku;
	manufacturer: Sku;
	manufacturerPartNumber: Sku;
	modelNumber: Sku;
	multipackQuantity: MinimumAdvertisedPrice;
	countPerPack: MinimumAdvertisedPrice;
	count: Sku;
	pieceCount: MinimumAdvertisedPrice;
	mainImageUrl: Sku;
	productSecondaryImageURL: FabricCareInstructions;
	material: Sku;
	shape: Sku;
	globalBrandLicense: FabricCareInstructions;
	coverageArea: ShippingWeight;
	form: Sku;
	pattern: Sku;
	paintFinish: Sku;
	recommendedSurfaces: FabricCareInstructions;
	size: Sku;
	assembledProductLength: ShippingWeight;
	assembledProductWidth: ShippingWeight;
	assembledProductHeight: ShippingWeight;
	assembledProductWeight: ShippingWeight;
	rollLength: ShippingWeight;
	thickness: ShippingWeight;
	variantGroupId: Sku;
	variantAttributeNames: CountryOfOriginComponents;
	isPrimaryVariant: ProcessMode;
	swatchImages: SwatchImages;
	isProp65WarningRequired: ProcessMode;
	prop65WarningText: Sku;
	batteryTechnologyType: ProcessMode;
	hasWarranty: ProcessMode;
	warrantyURL: Sku;
	warrantyText: Sku;
	compositeWoodCertificationCode: CompositeWoodCertificationCode;
	hasFuelContainer: ProcessMode;
	hasIngredientList: ProcessMode;
	ingredientListImage: Sku;
	ingredients: Sku;
	accessoriesIncluded: FabricCareInstructions;
	color: Sku;
	colorCategory: CountryOfOriginComponents;
	doorOpeningStyle: Sku;
	isWaterproof: ProcessMode;
	isFireResistant: ProcessMode;
	cleaningCareAndMaintenance: Sku;
	recommendedUses: FabricCareInstructions;
	isMadeFromSustainableMaterials: ProcessMode;
	isMadeFromReclaimedMaterials: ProcessMode;
	isMadeFromRecycledMaterial: ProcessMode;
	recycledMaterialContent: RecycledMaterialContent;
	hasLowEmissivity: ProcessMode;
	powerType: Sku;
	isEnergyStarCertified: ProcessMode;
	pileHeight: ShippingWeight;
	grade: Sku;
	fineness: Sku;
	isOdorless: ProcessMode;
	vocLevel: MinimumAdvertisedPrice;
	features: FabricCareInstructions;
	keywords: Sku;
	dryTime: ShippingWeight;
	isPrefinished: ProcessMode;
	isReadyToUse: ProcessMode;
	isFastSetting: ProcessMode;
	isMoldResistant: ProcessMode;
	isCombustible: ProcessMode;
	isFlammable: ProcessMode;
	isBiodegradable: ProcessMode;
	isWaterSoluble: ProcessMode;
	peiRating: Sku;
	carpetStyle: Sku;
	acRating: ProcessMode;
	snowLoadRating: ShippingWeight;
	doorStyle: Sku;
}

export interface Electrical {
	$schema: string;
	type: ShippingWeightType;
	properties: ElectricalProperties;
	required: AnimalAccessoriesRequired[];
	additionalProperties: boolean;
}

export interface ElectricalProperties {
	lightBulbShape: ProcessMode;
	shortDescription: Sku;
	keyFeatures: FabricCareInstructions;
	brand: Sku;
	manufacturer: Sku;
	manufacturerPartNumber: Sku;
	modelNumber: Sku;
	multipackQuantity: MinimumAdvertisedPrice;
	countPerPack: MinimumAdvertisedPrice;
	count: Sku;
	pieceCount: MinimumAdvertisedPrice;
	mainImageUrl: Sku;
	productSecondaryImageURL: FabricCareInstructions;
	material: Sku;
	shape: Sku;
	globalBrandLicense: FabricCareInstructions;
	homeDecorStyle: Sku;
	brightness: ShippingWeight;
	powerType: Sku;
	size: Sku;
	assembledProductLength: ShippingWeight;
	assembledProductWidth: ShippingWeight;
	assembledProductHeight: ShippingWeight;
	assembledProductWeight: ShippingWeight;
	variantGroupId: Sku;
	variantAttributeNames: CountryOfOriginComponents;
	isPrimaryVariant: ProcessMode;
	swatchImages: SwatchImages;
	isProp65WarningRequired: ProcessMode;
	prop65WarningText: Sku;
	batteryTechnologyType: ProcessMode;
	hasWarranty: ProcessMode;
	warrantyURL: Sku;
	warrantyText: Sku;
	hasFuelContainer: ProcessMode;
	finish: Sku;
	pattern: Sku;
	isEnergyStarCertified: ProcessMode;
	maximumEnergySurgeRating: ShippingWeight;
	estimatedEnergyCostPerYear: ShippingWeight;
	compatibleConduitSizes: SelfTimerDelay;
	volts: ShippingWeight;
	amps: ShippingWeight;
	watts: ShippingWeight;
	lightBulbColor: Sku;
	numberOfLights: MinimumAdvertisedPrice;
	shadeMaterial: Sku;
	shadeStyle: Sku;
	accessoriesIncluded: FabricCareInstructions;
	color: Sku;
	colorCategory: CountryOfOriginComponents;
	baseColor: Sku;
	baseFinish: Sku;
	isWaterproof: ProcessMode;
	isFireResistant: ProcessMode;
	cleaningCareAndMaintenance: Sku;
	recommendedUses: FabricCareInstructions;
	impedance: Impedance;
	conductorMaterial: Sku;
	features: FabricCareInstructions;
	keywords: Sku;
	lightBulbBaseType: ProcessMode;
	electricalBallastFactor: ShippingWeight;
	beamAngle: ShippingWeight;
	beamSpread: ShippingWeight;
	horsepower: ShippingWeight;
	isDarkSkyCompliant: ProcessMode;
	colorTemperature: ShippingWeight;
	decibelRating: ShippingWeight;
	maximumRange: ShippingWeight;
	numberOfGangs: MinimumAdvertisedPrice;
	numberOfPoles: MinimumAdvertisedPrice;
	responseTime: ShippingWeight;
	americanWireGauge: ShippingWeight;
	mountType: Sku;
	isRatedForOutdoorUse: ProcessMode;
	lifespan: ShippingWeight;
	character: Sku;
	sportsLeague: Sku;
	sportsTeam: Sku;
	athlete: Sku;
}

export interface Hardware {
	$schema: string;
	type: ShippingWeightType;
	properties: HardwareProperties;
	required: AnimalAccessoriesRequired[];
	additionalProperties: boolean;
}

export interface HardwareProperties {
	shortDescription: Sku;
	keyFeatures: FabricCareInstructions;
	brand: Sku;
	manufacturer: Sku;
	manufacturerPartNumber: Sku;
	modelNumber: Sku;
	multipackQuantity: MinimumAdvertisedPrice;
	countPerPack: MinimumAdvertisedPrice;
	count: Sku;
	pieceCount: MinimumAdvertisedPrice;
	mainImageUrl: Sku;
	productSecondaryImageURL: FabricCareInstructions;
	material: Sku;
	shape: Sku;
	globalBrandLicense: FabricCareInstructions;
	homeDecorStyle: Sku;
	finish: Sku;
	mountType: Sku;
	threadStandard: Sku;
	size: Sku;
	assembledProductLength: ShippingWeight;
	assembledProductWidth: ShippingWeight;
	assembledProductHeight: ShippingWeight;
	assembledProductWeight: ShippingWeight;
	variantGroupId: Sku;
	variantAttributeNames: CountryOfOriginComponents;
	isPrimaryVariant: ProcessMode;
	swatchImages: SwatchImages;
	isProp65WarningRequired: ProcessMode;
	prop65WarningText: Sku;
	batteryTechnologyType: ProcessMode;
	hasWarranty: ProcessMode;
	warrantyURL: Sku;
	warrantyText: Sku;
	hasFuelContainer: ProcessMode;
	accessoriesIncluded: FabricCareInstructions;
	color: Sku;
	colorCategory: CountryOfOriginComponents;
	isWaterproof: ProcessMode;
	isFireResistant: ProcessMode;
	cleaningCareAndMaintenance: Sku;
	recommendedUses: FabricCareInstructions;
	isLockable: ProcessMode;
	lockType: Sku;
	lockingMechanism: Sku;
	backsetSize: ShippingWeight;
	maximumWeight: ShippingWeight;
	workingLoadLimit: ShippingWeight;
	alphanumericCharacter: Sku;
	features: FabricCareInstructions;
	keywords: Sku;
}

export interface PlumbingAndHVAC {
	$schema: string;
	type: ShippingWeightType;
	properties: PlumbingAndHVACProperties;
	required: AnimalAccessoriesRequired[];
	additionalProperties: boolean;
}

export interface PlumbingAndHVACProperties {
	shortDescription: Sku;
	keyFeatures: FabricCareInstructions;
	brand: Sku;
	manufacturer: Sku;
	manufacturerPartNumber: Sku;
	modelNumber: Sku;
	multipackQuantity: MinimumAdvertisedPrice;
	countPerPack: MinimumAdvertisedPrice;
	count: Sku;
	pieceCount: MinimumAdvertisedPrice;
	mainImageUrl: Sku;
	productSecondaryImageURL: FabricCareInstructions;
	material: Sku;
	shape: Sku;
	globalBrandLicense: FabricCareInstructions;
	size: Sku;
	homeDecorStyle: Sku;
	assembledProductLength: ShippingWeight;
	assembledProductWidth: ShippingWeight;
	assembledProductHeight: ShippingWeight;
	assembledProductWeight: ShippingWeight;
	variantGroupId: Sku;
	variantAttributeNames: CountryOfOriginComponents;
	isPrimaryVariant: ProcessMode;
	swatchImages: SwatchImages;
	isProp65WarningRequired: ProcessMode;
	prop65WarningText: Sku;
	batteryTechnologyType: ProcessMode;
	hasWarranty: ProcessMode;
	warrantyURL: Sku;
	warrantyText: Sku;
	hasFuelContainer: ProcessMode;
	accessoriesIncluded: FabricCareInstructions;
	color: Sku;
	colorCategory: CountryOfOriginComponents;
	isWaterproof: ProcessMode;
	isIndustrial: ProcessMode;
	isFireResistant: ProcessMode;
	cleaningCareAndMaintenance: Sku;
	recommendedUses: FabricCareInstructions;
	gallonsPerMinute: ShippingWeight;
	mervRating: Sku;
	fuelType: Sku;
	volts: ShippingWeight;
	watts: ShippingWeight;
	volumeCapacity: ShippingWeight;
	finish: Sku;
	numberOfBlades: MinimumAdvertisedPrice;
	sprayPatterns: Sku;
	roughInDistance: ShippingWeight;
	contaminantsRemoved: Sku;
	faucetHandleDesign: Sku;
	hardwareFinish: Sku;
	features: FabricCareInstructions;
	keywords: Sku;
	autographedBy: Sku;
	coverageArea: ShippingWeight;
	faucetDrillings: Sku;
	gallonsPerFlush: ShippingWeight;
	hasCeeCertification: ProcessMode;
	ceeTier: ProcessMode;
	horsepower: ShippingWeight;
	humidificationOutputPerDay: ShippingWeight;
	pintsOfMoistureRemovedPerDay: ShippingWeight;
}

export interface Tools {
	$schema: string;
	type: ShippingWeightType;
	properties: ToolsProperties;
	required: AnimalAccessoriesRequired[];
	additionalProperties: boolean;
}

export interface ToolsProperties {
	shortDescription: Sku;
	keyFeatures: FabricCareInstructions;
	brand: Sku;
	manufacturer: Sku;
	manufacturerPartNumber: Sku;
	modelNumber: Sku;
	multipackQuantity: MinimumAdvertisedPrice;
	countPerPack: MinimumAdvertisedPrice;
	count: Sku;
	pieceCount: MinimumAdvertisedPrice;
	mainImageUrl: Sku;
	productSecondaryImageURL: FabricCareInstructions;
	material: Sku;
	shape: Sku;
	size: Sku;
	globalBrandLicense: FabricCareInstructions;
	powerType: Sku;
	fuelType: Sku;
	bladeDiameter: ShippingWeight;
	bladeLength: ShippingWeight;
	bladeShank: Sku;
	shankSize: ShippingWeight;
	chuckType: Sku;
	chuckSize: ShippingWeight;
	arborDiameter: ShippingWeight;
	colletSize: ShippingWeight;
	spindleThread: Sku;
	discSize: ShippingWeight;
	sandingBeltSize: Sku;
	airInlet: ShippingWeight;
	averageAirConsumptionAt90PSI: ShippingWeight;
	cfmAt40Psi: ShippingWeight;
	cfmAt90Psi: ShippingWeight;
	volts: ShippingWeight;
	amps: ShippingWeight;
	assembledProductLength: ShippingWeight;
	assembledProductWidth: ShippingWeight;
	assembledProductHeight: ShippingWeight;
	assembledProductWeight: ShippingWeight;
	variantGroupId: Sku;
	variantAttributeNames: CountryOfOriginComponents;
	isPrimaryVariant: ProcessMode;
	swatchImages: SwatchImages;
	isProp65WarningRequired: ProcessMode;
	prop65WarningText: Sku;
	batteryTechnologyType: ProcessMode;
	hasWarranty: ProcessMode;
	warrantyURL: Sku;
	warrantyText: Sku;
	hasFuelContainer: ProcessMode;
	accessoriesIncluded: FabricCareInstructions;
	color: Sku;
	colorCategory: CountryOfOriginComponents;
	isWaterproof: ProcessMode;
	isIndustrial: ProcessMode;
	isFireResistant: ProcessMode;
	cleaningCareAndMaintenance: Sku;
	recommendedUses: FabricCareInstructions;
	numberOfBlades: MinimumAdvertisedPrice;
	bladeWidth: ShippingWeight;
	lightBulbType: Sku;
	gritSize: Sku;
	squareDriveSize: Impedance;
	socketDepth: ShippingWeight;
	numberOfSteps: MinimumAdvertisedPrice;
	numberOfPoints: MinimumAdvertisedPrice;
	features: FabricCareInstructions;
	keywords: Sku;
	handing: Sku;
	finish: Sku;
	cordLength: ShippingWeight;
	batteryCapacity: ShippingWeight;
	engineDisplacement: ShippingWeight;
	horsepower: ShippingWeight;
	decibelRating: ShippingWeight;
	maximumAirPressure: ShippingWeight;
	maximumWattsOut: ShippingWeight;
	torque: MinimumAdvertisedPrice;
	sandingSpeed: ShippingWeight;
	noLoadSpeed: ShippingWeight;
	strokeLength: ShippingWeight;
	strokesPerMinute: Sku;
	blowsPerMinute: Sku;
	impactEnergy: ShippingWeight;
	loadCapacity: ShippingWeight;
	volumeCapacity: ShippingWeight;
	teethPerInch: MinimumAdvertisedPrice;
	maximumJawOpening: ShippingWeight;
	tankConfiguration: Sku;
}

export interface ToysCategory {
	$schema: string;
	type: ShippingWeightType;
	title: string;
	properties: ToysCategoryProperties;
	oneOf: OneOf[];
	additionalProperties: boolean;
}

export interface ToysCategoryProperties {
	Toys: Toys;
}

export interface Toys {
	$schema: string;
	type: ShippingWeightType;
	properties: ToysProperties;
	required: AnimalAccessoriesRequired[];
	additionalProperties: boolean;
}

export interface ToysProperties {
	shortDescription: Sku;
	keyFeatures: FabricCareInstructions;
	brand: Sku;
	manufacturer: Sku;
	manufacturerPartNumber: Sku;
	modelNumber: Sku;
	multipackQuantity: MinimumAdvertisedPrice;
	countPerPack: MinimumAdvertisedPrice;
	count: Sku;
	pieceCount: MinimumAdvertisedPrice;
	mainImageUrl: Sku;
	productSecondaryImageURL: FabricCareInstructions;
	color: Sku;
	colorCategory: CountryOfOriginComponents;
	gender: ProcessMode;
	size: Sku;
	ageGroup: CountryOfOriginComponents;
	ageRange: AgeRange;
	targetAudience: FabricCareInstructions;
	educationalFocus: FabricCareInstructions;
	skillLevel: Sku;
	awardsWon: FabricCareInstructions;
	theme: Sku;
	character: Sku;
	activity: Sku;
	globalBrandLicense: FabricCareInstructions;
	numberOfPlayers: NumberOfPlayers;
	assembledProductLength: ShippingWeight;
	assembledProductWidth: ShippingWeight;
	assembledProductHeight: ShippingWeight;
	assembledProductWeight: ShippingWeight;
	variantGroupId: Sku;
	variantAttributeNames: CountryOfOriginComponents;
	isPrimaryVariant: ProcessMode;
	swatchImages: SwatchImages;
	isProp65WarningRequired: ProcessMode;
	prop65WarningText: Sku;
	smallPartsWarnings: SmallPartsWarnings;
	hasExpiration: ProcessMode;
	hasIngredientList: ProcessMode;
	ingredientListImage: Sku;
	batteryTechnologyType: ProcessMode;
	hasWarranty: ProcessMode;
	warrantyURL: Sku;
	warrantyText: Sku;
	requiresTextileActLabeling: ProcessMode;
	countryOfOriginTextiles: ProcessMode;
	fabricContent: FabricContent;
	fabricCareInstructions: FabricCareInstructions;
	isAssemblyRequired: ProcessMode;
	assemblyInstructions: Sku;
	material: Sku;
	finish: Sku;
	shape: Sku;
	occasion: Sku;
	sport: Sku;
	hairColorCategory: ProcessMode;
	skinTone: Sku;
	flavor: Sku;
	animalType: Sku;
	vehicleType: Sku;
	displayTechnology: Sku;
	screenSize: ShippingWeight;
	isPowered: ProcessMode;
	powerType: Sku;
	capacity: Sku;
	seatingCapacity: MinimumAdvertisedPrice;
	minimumWeight: ShippingWeight;
	maximumWeight: ShippingWeight;
	maximumSpeed: ShippingWeight;
	isTravelSize: ProcessMode;
	isInflatable: ProcessMode;
	fillMaterial: FabricCareInstructions;
	makesNoise: ProcessMode;
	sportsLeague: Sku;
	sportsTeam: Sku;
	athlete: Sku;
	features: FabricCareInstructions;
	keywords: Sku;
}

export interface NumberOfPlayers {
	$schema: string;
	type: ShippingWeightType;
	properties: NumberOfPlayersProperties;
	additionalProperties: boolean;
}

export interface NumberOfPlayersProperties {
	minimumNumberOfPlayers: MinimumAdvertisedPrice;
	maximumNumberOfPlayers: MinimumAdvertisedPrice;
}

export interface Vehicle {
	$schema: string;
	type: ShippingWeightType;
	title: string;
	properties: VehicleProperties;
	oneOf: OneOf[];
	additionalProperties: boolean;
}

export interface VehicleProperties {
	Tires: Tires;
	LandVehicles: LandVehicles;
	VehiclePartsAndAccessories: VehiclePartsAndAccessories;
	WheelsAndWheelComponents: WheelsAndWheelComponents;
	VehicleOther: MusicCasesAndBags;
	Watercraft: Watercraft;
}

export interface LandVehicles {
	$schema: string;
	type: ShippingWeightType;
	properties: LandVehiclesProperties;
	required: AnimalAccessoriesRequired[];
	additionalProperties: boolean;
}

export interface LandVehiclesProperties {
	shortDescription: Sku;
	keyFeatures: FabricCareInstructions;
	brand: Sku;
	manufacturer: Sku;
	manufacturerPartNumber: Sku;
	modelNumber: Sku;
	mainImageUrl: Sku;
	productSecondaryImageURL: FabricCareInstructions;
	color: Sku;
	vehicleType: Sku;
	vehicleYear: MinimumAdvertisedPrice;
	vehicleMake: Sku;
	vehicleModel: Sku;
	submodel: Sku;
	powertrain: Sku;
	drivetrain: Sku;
	transmissionDesignation: Sku;
	engineModel: Sku;
	engineDisplacement: ShippingWeight;
	boreStroke: Sku;
	inductionSystem: Sku;
	compressionRatio: Sku;
	maximumEnginePower: ShippingWeight;
	torque: MinimumAdvertisedPrice;
	acceleration: Sku;
	topSpeed: ShippingWeight;
	coolingSystem: Sku;
	fuelRequirement: Sku;
	fuelSystem: Sku;
	fuelCapacity: ShippingWeight;
	averageFuelConsumption: ShippingWeight;
	frontSuspension: Sku;
	rearSuspension: Sku;
	frontBrakes: Sku;
	rearBrakes: Sku;
	frontWheels: Sku;
	rearWheels: Sku;
	frontTires: Sku;
	rearTires: Sku;
	seatingCapacity: MinimumAdvertisedPrice;
	seatHeight: ShippingWeight;
	wheelbase: ShippingWeight;
	curbWeight: ShippingWeight;
	towingCapacity: ShippingWeight;
	assembledProductLength: ShippingWeight;
	assembledProductWidth: ShippingWeight;
	assembledProductHeight: ShippingWeight;
	variantGroupId: Sku;
	variantAttributeNames: CountryOfOriginComponents;
	isPrimaryVariant: ProcessMode;
	swatchImages: SwatchImages;
	isProp65WarningRequired: ProcessMode;
	prop65WarningText: Sku;
	batteryTechnologyType: ProcessMode;
	hasWarranty: ProcessMode;
	warrantyURL: Sku;
	warrantyText: Sku;
	hasFuelContainer: ProcessMode;
	compositeWoodCertificationCode: CompositeWoodCertificationCode;
	requiresTextileActLabeling: ProcessMode;
	countryOfOriginTextiles: ProcessMode;
	fabricContent: FabricContent;
	features: FabricCareInstructions;
	keywords: Sku;
}

export interface Tires {
	$schema: string;
	type: ShippingWeightType;
	properties: TiresProperties;
	required: string[];
	additionalProperties: boolean;
}

export interface TiresProperties {
	shortDescription: Sku;
	keyFeatures: FabricCareInstructions;
	brand: Sku;
	manufacturer: Sku;
	modelNumber: Sku;
	manufacturerPartNumber: Sku;
	multipackQuantity: MinimumAdvertisedPrice;
	countPerPack: MinimumAdvertisedPrice;
	count: Sku;
	mainImageUrl: Sku;
	productSecondaryImageURL: FabricCareInstructions;
	color: Sku;
	tireSize: Sku;
	vehicleClassDesignator: Sku;
	tireWidth: ShippingWeight;
	tireAspectRatio: MinimumAdvertisedPrice;
	tireSpeedRating: Sku;
	wheelDiameter: ShippingWeight;
	tireLoadRange: ProcessMode;
	overallDiameter: ShippingWeight;
	tireSeason: Sku;
	mudAndSnowRated: ProcessMode;
	isRunFlat: ProcessMode;
	constructionType: Sku;
	treadDepth: ShippingWeight;
	treadWidth: ShippingWeight;
	tireLoadIndex: MinimumAdvertisedPrice;
	tireTreadwearRating: MinimumAdvertisedPrice;
	tireTractionRating: ProcessMode;
	tireTemperatureRating: ProcessMode;
	tireSidewallStyle: Sku;
	maximumInflationPressure: ShippingWeight;
	uniformTireQualityGrade: Sku;
	tireType: Sku;
	assembledProductWeight: ShippingWeight;
	variantGroupId: Sku;
	variantAttributeNames: CountryOfOriginComponents;
	isPrimaryVariant: ProcessMode;
	swatchImages: SwatchImages;
	isProp65WarningRequired: ProcessMode;
	prop65WarningText: Sku;
	hasWarranty: ProcessMode;
	warrantyURL: Sku;
	warrantyText: Sku;
	features: FabricCareInstructions;
	keywords: Sku;
}

export interface VehiclePartsAndAccessories {
	$schema: string;
	type: ShippingWeightType;
	properties: VehiclePartsAndAccessoriesProperties;
	required: AnimalAccessoriesRequired[];
	additionalProperties: boolean;
}

export interface VehiclePartsAndAccessoriesProperties {
	shortDescription: Sku;
	keyFeatures: FabricCareInstructions;
	brand: Sku;
	manufacturer: Sku;
	manufacturerPartNumber: Sku;
	modelNumber: Sku;
	unitsPerConsumerUnit: MinimumAdvertisedPrice;
	multipackQuantity: MinimumAdvertisedPrice;
	countPerPack: MinimumAdvertisedPrice;
	count: Sku;
	pieceCount: MinimumAdvertisedPrice;
	mainImageUrl: Sku;
	productSecondaryImageURL: FabricCareInstructions;
	color: Sku;
	form: Sku;
	shape: Sku;
	size: Sku;
	finish: Sku;
	fillMaterial: FabricCareInstructions;
	compatibleCars: Sku;
	compatibleBrands: FabricCareInstructions;
	compatibleDevices: Sku;
	isPowered: ProcessMode;
	powerType: Sku;
	fluidOunces: ShippingWeight;
	amps: ShippingWeight;
	coldCrankAmp: ShippingWeight;
	beamSpread: ShippingWeight;
	beamAngle: ShippingWeight;
	inDashSystem: ProcessMode;
	interfaceType: FabricCareInstructions;
	displayTechnology: Sku;
	displayResolution: Sku;
	fastenerHeadType: Sku;
	connections: FabricCareInstructions;
	cableLength: ShippingWeight;
	chainLength: ShippingWeight;
	candlePower: ShippingWeight;
	fuelType: Sku;
	flashPoint: ShippingWeight;
	filterLife: ShippingWeight;
	lightBulbType: Sku;
	isLockable: ProcessMode;
	isReusable: ProcessMode;
	breakingStrength: ShippingWeight;
	maximumMotorSpeed: ShippingWeight;
	maximumTemperature: ShippingWeight;
	numberOfOutlets: MinimumAdvertisedPrice;
	receiverCompatibility: ShippingWeight;
	reserveCapacity: ShippingWeight;
	loadCapacity: ShippingWeight;
	horsepower: ShippingWeight;
	saeDotCompliant: ProcessMode;
	shackleClearance: ShippingWeight;
	shackleDiameter: ShippingWeight;
	shackleLength: ShippingWeight;
	shankLength: ShippingWeight;
	shearStrength: ShippingWeight;
	hitchClass: Sku;
	dropDistance: Impedance;
	assembledProductLength: ShippingWeight;
	assembledProductWidth: ShippingWeight;
	assembledProductHeight: ShippingWeight;
	assembledProductWeight: ShippingWeight;
	variantGroupId: Sku;
	variantAttributeNames: CountryOfOriginComponents;
	isPrimaryVariant: ProcessMode;
	swatchImages: SwatchImages;
	isProp65WarningRequired: ProcessMode;
	prop65WarningText: Sku;
	batteryTechnologyType: ProcessMode;
	isAerosol: ProcessMode;
	isChemical: ProcessMode;
	compositeWoodCertificationCode: CompositeWoodCertificationCode;
	hasWarranty: ProcessMode;
	warrantyURL: Sku;
	warrantyText: Sku;
	hasFuelContainer: ProcessMode;
	vehicleType: Sku;
	motorOilViscosity: Sku;
	fabricContent: FabricContent;
	fabricCareInstructions: FabricCareInstructions;
	sportsLeague: Sku;
	sportsTeam: Sku;
	athlete: Sku;
	autographedBy: Sku;
	features: FabricCareInstructions;
	keywords: Sku;
}

export interface Watercraft {
	$schema: string;
	type: ShippingWeightType;
	properties: WatercraftProperties;
	required: AnimalAccessoriesRequired[];
	additionalProperties: boolean;
}

export interface WatercraftProperties {
	shortDescription: Sku;
	keyFeatures: FabricCareInstructions;
	brand: Sku;
	manufacturer: Sku;
	mainImageUrl: Sku;
	productSecondaryImageURL: FabricCareInstructions;
	color: Sku;
	vehicleType: Sku;
	vehicleYear: MinimumAdvertisedPrice;
	vehicleMake: Sku;
	vehicleModel: Sku;
	submodel: Sku;
	engineLocation: Sku;
	engineModel: Sku;
	engineDisplacement: ShippingWeight;
	boreStroke: Sku;
	inductionSystem: Sku;
	compressionRatio: Sku;
	maximumEnginePower: ShippingWeight;
	propulsionSystem: Sku;
	coolingSystem: Sku;
	thrust: ShippingWeight;
	impellerPropeller: Sku;
	topSpeed: ShippingWeight;
	fuelRequirement: Sku;
	fuelSystem: Sku;
	fuelCapacity: ShippingWeight;
	averageFuelConsumption: ShippingWeight;
	hullLength: ShippingWeight;
	beam: ShippingWeight;
	airDraft: ShippingWeight;
	draft: ShippingWeight;
	dryWeight: ShippingWeight;
	waterCapacity: ShippingWeight;
	seatingCapacity: MinimumAdvertisedPrice;
	assembledProductLength: ShippingWeight;
	assembledProductWidth: ShippingWeight;
	assembledProductHeight: ShippingWeight;
	assembledProductWeight: ShippingWeight;
	variantGroupId: Sku;
	variantAttributeNames: CountryOfOriginComponents;
	isPrimaryVariant: ProcessMode;
	swatchImages: SwatchImages;
	isProp65WarningRequired: ProcessMode;
	prop65WarningText: Sku;
	smallPartsWarnings: SmallPartsWarnings;
	hasBatteries: ProcessMode;
	batteryTechnologyType: ProcessMode;
	hasWarranty: ProcessMode;
	warrantyURL: Sku;
	warrantyText: Sku;
	sportsLeague: Sku;
	athlete: Sku;
	features: FabricCareInstructions;
	keywords: Sku;
}

export interface WheelsAndWheelComponents {
	$schema: string;
	type: ShippingWeightType;
	properties: WheelsAndWheelComponentsProperties;
	required: AnimalAccessoriesRequired[];
	additionalProperties: boolean;
}

export interface WheelsAndWheelComponentsProperties {
	shortDescription: Sku;
	keyFeatures: FabricCareInstructions;
	brand: Sku;
	manufacturer: Sku;
	manufacturerPartNumber: Sku;
	modelNumber: Sku;
	multipackQuantity: MinimumAdvertisedPrice;
	countPerPack: MinimumAdvertisedPrice;
	count: Sku;
	mainImageUrl: Sku;
	productSecondaryImageURL: FabricCareInstructions;
	color: Sku;
	finish: Sku;
	material: Sku;
	vehicleRimSize: ShippingWeight;
	diameter: ShippingWeight;
	compatibleTireSize: Sku;
	numberOfSpokes: MinimumAdvertisedPrice;
	assembledProductLength: ShippingWeight;
	assembledProductWidth: ShippingWeight;
	assembledProductHeight: ShippingWeight;
	assembledProductWeight: ShippingWeight;
	variantGroupId: Sku;
	variantAttributeNames: CountryOfOriginComponents;
	isPrimaryVariant: ProcessMode;
	swatchImages: SwatchImages;
	isProp65WarningRequired: ProcessMode;
	prop65WarningText: Sku;
	batteryTechnologyType: ProcessMode;
	hasWarranty: ProcessMode;
	warrantyURL: Sku;
	warrantyText: Sku;
	features: FabricCareInstructions;
	keywords: Sku;
}

export interface WatchesCategory {
	$schema: string;
	type: ShippingWeightType;
	title: string;
	properties: WatchesCategoryProperties;
	oneOf: OneOf[];
	additionalProperties: boolean;
}

export interface WatchesCategoryProperties {
	Watches: Watches;
}

export interface Watches {
	$schema: string;
	type: ShippingWeightType;
	properties: WatchesProperties;
	required: AnimalAccessoriesRequired[];
	additionalProperties: boolean;
}

export interface WatchesProperties {
	shortDescription: Sku;
	keyFeatures: FabricCareInstructions;
	brand: Sku;
	manufacturer: Sku;
	modelNumber: Sku;
	manufacturerPartNumber: Sku;
	multipackQuantity: MinimumAdvertisedPrice;
	countPerPack: MinimumAdvertisedPrice;
	count: Sku;
	mainImageUrl: Sku;
	productSecondaryImageURL: FabricCareInstructions;
	gender: ProcessMode;
	size: Sku;
	ageGroup: CountryOfOriginComponents;
	material: Sku;
	color: Sku;
	colorCategory: CountryOfOriginComponents;
	metal: Sku;
	plating: Sku;
	watchStyle: Sku;
	watchFeatures: FabricCareInstructions;
	activity: Sku;
	watchCaseShape: Sku;
	gemstone: Sku;
	gemstoneShape: Sku;
	carats: ShippingWeight;
	displayTechnology: Sku;
	isWaterproof: ProcessMode;
	isWeatherResistant: ProcessMode;
	powerType: Sku;
	watchBandMaterial: Sku;
	assembledProductLength: ShippingWeight;
	assembledProductWidth: ShippingWeight;
	assembledProductHeight: ShippingWeight;
	assembledProductWeight: ShippingWeight;
	variantGroupId: Sku;
	variantAttributeNames: CountryOfOriginComponents;
	isPrimaryVariant: ProcessMode;
	swatchImages: SwatchImages;
	isProp65WarningRequired: ProcessMode;
	prop65WarningText: Sku;
	smallPartsWarnings: SmallPartsWarnings;
	batteryTechnologyType: ProcessMode;
	hasWarranty: ProcessMode;
	warrantyURL: Sku;
	warrantyText: Sku;
	pattern: Sku;
	theme: Sku;
	character: Sku;
	globalBrandLicense: FabricCareInstructions;
	occasion: Sku;
	batteryLife: ShippingWeight;
	sportsLeague: Sku;
	sportsTeam: Sku;
	athlete: Sku;
	autographedBy: Sku;
	features: FabricCareInstructions;
	keywords: Sku;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
	public static toAnimal(json: string): Animal {
		return cast(JSON.parse(json), r('Animal'));
	}

	public static animalToJson(value: Animal): string {
		return JSON.stringify(uncast(value, r('Animal')), null, 2);
	}

	public static toArtAndCraftCategory(json: string): ArtAndCraftCategory {
		return cast(JSON.parse(json), r('ArtAndCraftCategory'));
	}

	public static artAndCraftCategoryToJson(value: ArtAndCraftCategory): string {
		return JSON.stringify(uncast(value, r('ArtAndCraftCategory')), null, 2);
	}

	public static toBaby(json: string): Baby {
		return cast(JSON.parse(json), r('Baby'));
	}

	public static babyToJson(value: Baby): string {
		return JSON.stringify(uncast(value, r('Baby')), null, 2);
	}

	public static toCarriersAndAccessoriesCategory(json: string): CarriersAndAccessoriesCategory {
		return cast(JSON.parse(json), r('CarriersAndAccessoriesCategory'));
	}

	public static carriersAndAccessoriesCategoryToJson(value: CarriersAndAccessoriesCategory): string {
		return JSON.stringify(uncast(value, r('CarriersAndAccessoriesCategory')), null, 2);
	}

	public static toClothingCategory(json: string): ClothingCategory {
		return cast(JSON.parse(json), r('ClothingCategory'));
	}

	public static clothingCategoryToJson(value: ClothingCategory): string {
		return JSON.stringify(uncast(value, r('ClothingCategory')), null, 2);
	}

	public static toElectronics(json: string): Electronics {
		return cast(JSON.parse(json), r('Electronics'));
	}

	public static electronicsToJson(value: Electronics): string {
		return JSON.stringify(uncast(value, r('Electronics')), null, 2);
	}

	public static toFoodAndBeverageCategory(json: string): FoodAndBeverageCategory {
		return cast(JSON.parse(json), r('FoodAndBeverageCategory'));
	}

	public static foodAndBeverageCategoryToJson(value: FoodAndBeverageCategory): string {
		return JSON.stringify(uncast(value, r('FoodAndBeverageCategory')), null, 2);
	}

	public static toFootwearCategory(json: string): FootwearCategory {
		return cast(JSON.parse(json), r('FootwearCategory'));
	}

	public static footwearCategoryToJson(value: FootwearCategory): string {
		return JSON.stringify(uncast(value, r('FootwearCategory')), null, 2);
	}

	public static toFurnitureCategory(json: string): FurnitureCategory {
		return cast(JSON.parse(json), r('FurnitureCategory'));
	}

	public static furnitureCategoryToJson(value: FurnitureCategory): string {
		return JSON.stringify(uncast(value, r('FurnitureCategory')), null, 2);
	}

	public static toGardenAndPatioCategory(json: string): GardenAndPatioCategory {
		return cast(JSON.parse(json), r('GardenAndPatioCategory'));
	}

	public static gardenAndPatioCategoryToJson(value: GardenAndPatioCategory): string {
		return JSON.stringify(uncast(value, r('GardenAndPatioCategory')), null, 2);
	}

	public static toHealthAndBeauty(json: string): HealthAndBeauty {
		return cast(JSON.parse(json), r('HealthAndBeauty'));
	}

	public static healthAndBeautyToJson(value: HealthAndBeauty): string {
		return JSON.stringify(uncast(value, r('HealthAndBeauty')), null, 2);
	}

	public static toHome(json: string): Home {
		return cast(JSON.parse(json), r('Home'));
	}

	public static homeToJson(value: Home): string {
		return JSON.stringify(uncast(value, r('Home')), null, 2);
	}

	public static toJewelryCategory(json: string): JewelryCategory {
		return cast(JSON.parse(json), r('JewelryCategory'));
	}

	public static jewelryCategoryToJson(value: JewelryCategory): string {
		return JSON.stringify(uncast(value, r('JewelryCategory')), null, 2);
	}

	public static toMPBulkRetire(json: string): MPBulkRetire {
		return cast(JSON.parse(json), r('MPBulkRetire'));
	}

	public static mPBulkRetireToJson(value: MPBulkRetire): string {
		return JSON.stringify(uncast(value, r('MPBulkRetire')), null, 2);
	}

	public static toMPItem(json: string): MPItem {
		return cast(JSON.parse(json), r('MPItem'));
	}

	public static mPItemToJson(value: MPItem): string {
		return JSON.stringify(uncast(value, r('MPItem')), null, 2);
	}

	public static toMPItemFeed(json: string): MPItemFeed {
		return cast(JSON.parse(json), r('MPItemFeed'));
	}

	public static mPItemFeedToJson(value: MPItemFeed): string {
		return JSON.stringify(uncast(value, r('MPItemFeed')), null, 2);
	}

	public static toMPItemFeedHeader(json: string): MPItemFeedHeader {
		return cast(JSON.parse(json), r('MPItemFeedHeader'));
	}

	public static mPItemFeedHeaderToJson(value: MPItemFeedHeader): string {
		return JSON.stringify(uncast(value, r('MPItemFeedHeader')), null, 2);
	}

	public static toMPLogistics(json: string): MPLogistics {
		return cast(JSON.parse(json), r('MPLogistics'));
	}

	public static mPLogisticsToJson(value: MPLogistics): string {
		return JSON.stringify(uncast(value, r('MPLogistics')), null, 2);
	}

	public static toMPOffer(json: string): MPOffer {
		return cast(JSON.parse(json), r('MPOffer'));
	}

	public static mPOfferToJson(value: MPOffer): string {
		return JSON.stringify(uncast(value, r('MPOffer')), null, 2);
	}

	public static toMPProduct(json: string): MPProduct {
		return cast(JSON.parse(json), r('MPProduct'));
	}

	public static mPProductToJson(value: MPProduct): string {
		return JSON.stringify(uncast(value, r('MPProduct')), null, 2);
	}

	public static toMedia(json: string): Media {
		return cast(JSON.parse(json), r('Media'));
	}

	public static mediaToJson(value: Media): string {
		return JSON.stringify(uncast(value, r('Media')), null, 2);
	}

	public static toMusicalInstrument(json: string): MusicalInstrument {
		return cast(JSON.parse(json), r('MusicalInstrument'));
	}

	public static musicalInstrumentToJson(value: MusicalInstrument): string {
		return JSON.stringify(uncast(value, r('MusicalInstrument')), null, 2);
	}

	public static toOccasionAndSeasonal(json: string): OccasionAndSeasonal {
		return cast(JSON.parse(json), r('OccasionAndSeasonal'));
	}

	public static occasionAndSeasonalToJson(value: OccasionAndSeasonal): string {
		return JSON.stringify(uncast(value, r('OccasionAndSeasonal')), null, 2);
	}

	public static toOfficeCategory(json: string): OfficeCategory {
		return cast(JSON.parse(json), r('OfficeCategory'));
	}

	public static officeCategoryToJson(value: OfficeCategory): string {
		return JSON.stringify(uncast(value, r('OfficeCategory')), null, 2);
	}

	public static toOtherCategory(json: string): OtherCategory {
		return cast(JSON.parse(json), r('OtherCategory'));
	}

	public static otherCategoryToJson(value: OtherCategory): string {
		return JSON.stringify(uncast(value, r('OtherCategory')), null, 2);
	}

	public static toPhotography(json: string): Photography {
		return cast(JSON.parse(json), r('Photography'));
	}

	public static photographyToJson(value: Photography): string {
		return JSON.stringify(uncast(value, r('Photography')), null, 2);
	}

	public static toSportAndRecreation(json: string): SportAndRecreation {
		return cast(JSON.parse(json), r('SportAndRecreation'));
	}

	public static sportAndRecreationToJson(value: SportAndRecreation): string {
		return JSON.stringify(uncast(value, r('SportAndRecreation')), null, 2);
	}

	public static toToolsAndHardware(json: string): ToolsAndHardware {
		return cast(JSON.parse(json), r('ToolsAndHardware'));
	}

	public static toolsAndHardwareToJson(value: ToolsAndHardware): string {
		return JSON.stringify(uncast(value, r('ToolsAndHardware')), null, 2);
	}

	public static toToysCategory(json: string): ToysCategory {
		return cast(JSON.parse(json), r('ToysCategory'));
	}

	public static toysCategoryToJson(value: ToysCategory): string {
		return JSON.stringify(uncast(value, r('ToysCategory')), null, 2);
	}

	public static toVehicle(json: string): Vehicle {
		return cast(JSON.parse(json), r('Vehicle'));
	}

	public static vehicleToJson(value: Vehicle): string {
		return JSON.stringify(uncast(value, r('Vehicle')), null, 2);
	}

	public static toWatchesCategory(json: string): WatchesCategory {
		return cast(JSON.parse(json), r('WatchesCategory'));
	}

	public static watchesCategoryToJson(value: WatchesCategory): string {
		return JSON.stringify(uncast(value, r('WatchesCategory')), null, 2);
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
	Animal: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'title', js: 'title', typ: '' },
			{ json: 'properties', js: 'properties', typ: r('AnimalProperties') },
			{ json: 'oneOf', js: 'oneOf', typ: a(r('OneOf')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	OneOf: o([{ json: 'required', js: 'required', typ: a('') }], false),
	AnimalProperties: o(
		[
			{ json: 'AnimalHealthAndGrooming', js: 'AnimalHealthAndGrooming', typ: r('AnimalHealthAndGrooming') },
			{ json: 'AnimalAccessories', js: 'AnimalAccessories', typ: r('AnimalAccessoriesClass') },
			{ json: 'AnimalFood', js: 'AnimalFood', typ: r('AnimalFood') },
			{ json: 'AnimalEverythingElse', js: 'AnimalEverythingElse', typ: r('AnimalAccessoriesClass') },
		],
		false
	),
	AnimalAccessoriesClass: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('AnimalAccessoriesProperties') },
			{ json: 'required', js: 'required', typ: a(r('AnimalAccessoriesRequired')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	AnimalAccessoriesProperties: o(
		[
			{ json: 'shortDescription', js: 'shortDescription', typ: r('Sku') },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: r('FabricCareInstructions') },
			{ json: 'brand', js: 'brand', typ: r('Sku') },
			{ json: 'manufacturer', js: 'manufacturer', typ: r('Sku') },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: r('Sku') },
			{ json: 'modelNumber', js: 'modelNumber', typ: r('Sku') },
			{ json: 'multipackQuantity', js: 'multipackQuantity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'countPerPack', js: 'countPerPack', typ: r('MinimumAdvertisedPrice') },
			{ json: 'count', js: 'count', typ: r('Sku') },
			{ json: 'pieceCount', js: 'pieceCount', typ: r('MinimumAdvertisedPrice') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: r('Sku') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: r('FabricCareInstructions') },
			{ json: 'animalType', js: 'animalType', typ: r('Sku') },
			{ json: 'animalBreed', js: 'animalBreed', typ: r('Sku') },
			{ json: 'animalLifestage', js: 'animalLifestage', typ: r('Sku') },
			{ json: 'minimumWeight', js: 'minimumWeight', typ: r('ShippingWeight') },
			{ json: 'maximumWeight', js: 'maximumWeight', typ: r('ShippingWeight') },
			{ json: 'petSize', js: 'petSize', typ: r('Sku') },
			{ json: 'capacity', js: 'capacity', typ: u(undefined, r('Sku')) },
			{ json: 'shape', js: 'shape', typ: u(undefined, r('Sku')) },
			{ json: 'color', js: 'color', typ: r('Sku') },
			{ json: 'colorCategory', js: 'colorCategory', typ: r('CountryOfOriginComponents') },
			{ json: 'size', js: 'size', typ: r('Sku') },
			{ json: 'assembledProductLength', js: 'assembledProductLength', typ: r('ShippingWeight') },
			{ json: 'assembledProductWidth', js: 'assembledProductWidth', typ: r('ShippingWeight') },
			{ json: 'assembledProductHeight', js: 'assembledProductHeight', typ: r('ShippingWeight') },
			{ json: 'assembledProductWeight', js: 'assembledProductWeight', typ: r('ShippingWeight') },
			{ json: 'variantGroupId', js: 'variantGroupId', typ: r('Sku') },
			{ json: 'variantAttributeNames', js: 'variantAttributeNames', typ: r('CountryOfOriginComponents') },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: r('ProcessMode') },
			{ json: 'swatchImages', js: 'swatchImages', typ: r('SwatchImages') },
			{ json: 'isProp65WarningRequired', js: 'isProp65WarningRequired', typ: r('ProcessMode') },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: r('Sku') },
			{ json: 'smallPartsWarnings', js: 'smallPartsWarnings', typ: u(undefined, r('SmallPartsWarnings')) },
			{ json: 'batteryTechnologyType', js: 'batteryTechnologyType', typ: r('ProcessMode') },
			{ json: 'requiresTextileActLabeling', js: 'requiresTextileActLabeling', typ: r('ProcessMode') },
			{ json: 'countryOfOriginTextiles', js: 'countryOfOriginTextiles', typ: r('ProcessMode') },
			{ json: 'hasExpiration', js: 'hasExpiration', typ: r('ProcessMode') },
			{ json: 'hasPricePerUnit', js: 'hasPricePerUnit', typ: r('ProcessMode') },
			{ json: 'pricePerUnitQuantity', js: 'pricePerUnitQuantity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'pricePerUnitUom', js: 'pricePerUnitUom', typ: r('ProcessMode') },
			{ json: 'hasWarranty', js: 'hasWarranty', typ: r('ProcessMode') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: r('Sku') },
			{ json: 'warrantyText', js: 'warrantyText', typ: r('Sku') },
			{ json: 'hasFuelContainer', js: 'hasFuelContainer', typ: r('ProcessMode') },
			{ json: 'material', js: 'material', typ: r('Sku') },
			{ json: 'fabricContent', js: 'fabricContent', typ: r('FabricContent') },
			{ json: 'fabricCareInstructions', js: 'fabricCareInstructions', typ: r('FabricCareInstructions') },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: r('FabricCareInstructions') },
			{ json: 'features', js: 'features', typ: u(undefined, r('FabricCareInstructions')) },
			{ json: 'keywords', js: 'keywords', typ: u(undefined, r('Sku')) },
			{ json: 'instructions', js: 'instructions', typ: r('Sku') },
			{ json: 'batteriesRequired', js: 'batteriesRequired', typ: r('ProcessMode') },
			{ json: 'batterySize', js: 'batterySize', typ: u(undefined, r('Sku')) },
			{ json: 'character', js: 'character', typ: u(undefined, r('Sku')) },
			{ json: 'isFoldable', js: 'isFoldable', typ: r('ProcessMode') },
			{ json: 'isReflective', js: 'isReflective', typ: u(undefined, r('ProcessMode')) },
			{ json: 'isRetractable', js: 'isRetractable', typ: u(undefined, r('ProcessMode')) },
			{ json: 'maximumTemperature', js: 'maximumTemperature', typ: u(undefined, r('ShippingWeight')) },
			{ json: 'minimumTemperature', js: 'minimumTemperature', typ: u(undefined, r('ShippingWeight')) },
			{ json: 'pattern', js: 'pattern', typ: r('Sku') },
			{ json: 'sportsLeague', js: 'sportsLeague', typ: r('Sku') },
			{ json: 'sportsTeam', js: 'sportsTeam', typ: r('Sku') },
			{ json: 'numberOfSteps', js: 'numberOfSteps', typ: u(undefined, r('MinimumAdvertisedPrice')) },
			{ json: 'isAerosol', js: 'isAerosol', typ: u(undefined, r('ProcessMode')) },
			{ json: 'hasBatteries', js: 'hasBatteries', typ: u(undefined, r('ProcessMode')) },
			{ json: 'isChemical', js: 'isChemical', typ: u(undefined, r('ProcessMode')) },
			{ json: 'shelfLife', js: 'shelfLife', typ: u(undefined, r('ShippingWeight')) },
			{ json: 'isPortable', js: 'isPortable', typ: u(undefined, r('ProcessMode')) },
			{ json: 'autographedBy', js: 'autographedBy', typ: u(undefined, r('Sku')) },
			{ json: 'athlete', js: 'athlete', typ: u(undefined, r('Sku')) },
		],
		false
	),
	Sku: o(
		[
			{ json: 'type', js: 'type', typ: r('PurpleType') },
			{ json: 'title', js: 'title', typ: u(undefined, '') },
			{ json: 'minLength', js: 'minLength', typ: 0 },
			{ json: 'maxLength', js: 'maxLength', typ: u(undefined, 0) },
			{ json: 'format', js: 'format', typ: u(undefined, r('SkuFormat')) },
		],
		false
	),
	ShippingWeight: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'title', js: 'title', typ: '' },
			{ json: 'properties', js: 'properties', typ: r('ShippingWeightProperties') },
			{ json: 'required', js: 'required', typ: a(r('ShippingWeightRequired')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	ShippingWeightProperties: o(
		[
			{ json: 'unit', js: 'unit', typ: r('ShippingOverrideActionClass') },
			{ json: 'measure', js: 'measure', typ: r('MinimumAdvertisedPrice') },
		],
		false
	),
	MinimumAdvertisedPrice: o(
		[
			{ json: 'type', js: 'type', typ: r('MinimumAdvertisedPriceType') },
			{ json: 'minimum', js: 'minimum', typ: 0 },
			{ json: 'maximum', js: 'maximum', typ: 0 },
			{ json: 'exclusiveMaximum', js: 'exclusiveMaximum', typ: true },
			{ json: 'multipleOf', js: 'multipleOf', typ: u(undefined, 3.14) },
			{ json: 'title', js: 'title', typ: u(undefined, '') },
		],
		false
	),
	ShippingOverrideActionClass: o(
		[
			{ json: 'type', js: 'type', typ: r('PurpleType') },
			{ json: 'enum', js: 'enum', typ: a('') },
		],
		false
	),
	ProcessMode: o(
		[
			{ json: 'type', js: 'type', typ: r('PurpleType') },
			{ json: 'title', js: 'title', typ: '' },
			{ json: 'enum', js: 'enum', typ: a('') },
		],
		false
	),
	CountryOfOriginComponents: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('CountryOfOriginComponentsType') },
			{ json: 'title', js: 'title', typ: r('CountryOfOriginComponentsTitle') },
			{ json: 'items', js: 'items', typ: r('ShippingOverrideActionClass') },
			{ json: 'minItems', js: 'minItems', typ: 0 },
		],
		false
	),
	FabricCareInstructions: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('CountryOfOriginComponentsType') },
			{ json: 'title', js: 'title', typ: '' },
			{ json: 'items', js: 'items', typ: r('Sku') },
			{ json: 'minItems', js: 'minItems', typ: 0 },
		],
		false
	),
	FabricContent: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('CountryOfOriginComponentsType') },
			{ json: 'title', js: 'title', typ: r('FabricContentTitle') },
			{ json: 'items', js: 'items', typ: r('FabricContentItems') },
			{ json: 'minItems', js: 'minItems', typ: 0 },
		],
		false
	),
	FabricContentItems: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('PurpleProperties') },
			{ json: 'required', js: 'required', typ: a(r('ItemsRequired')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	PurpleProperties: o(
		[
			{ json: 'materialName', js: 'materialName', typ: r('Sku') },
			{ json: 'materialPercentage', js: 'materialPercentage', typ: r('MinimumAdvertisedPrice') },
		],
		false
	),
	SmallPartsWarnings: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('CountryOfOriginComponentsType') },
			{ json: 'title', js: 'title', typ: r('SmallPartsWarningsTitle') },
			{ json: 'items', js: 'items', typ: r('SmallPartsWarningsItems') },
			{ json: 'minItems', js: 'minItems', typ: 0 },
		],
		false
	),
	SmallPartsWarningsItems: o(
		[
			{ json: 'type', js: 'type', typ: r('MinimumAdvertisedPriceType') },
			{ json: 'enum', js: 'enum', typ: a(0) },
		],
		false
	),
	SwatchImages: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('CountryOfOriginComponentsType') },
			{ json: 'title', js: 'title', typ: r('SwatchImagesTitle') },
			{ json: 'items', js: 'items', typ: r('SwatchImagesItems') },
			{ json: 'minItems', js: 'minItems', typ: 0 },
		],
		false
	),
	SwatchImagesItems: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('FluffyProperties') },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	FluffyProperties: o(
		[
			{ json: 'swatchVariantAttribute', js: 'swatchVariantAttribute', typ: r('Sku') },
			{ json: 'swatchImageUrl', js: 'swatchImageUrl', typ: r('Sku') },
		],
		false
	),
	AnimalFood: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('AnimalFoodProperties') },
			{ json: 'required', js: 'required', typ: a(r('AnimalAccessoriesRequired')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	AnimalFoodProperties: o(
		[
			{ json: 'shortDescription', js: 'shortDescription', typ: r('Sku') },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: r('FabricCareInstructions') },
			{ json: 'brand', js: 'brand', typ: r('Sku') },
			{ json: 'manufacturer', js: 'manufacturer', typ: r('Sku') },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: r('Sku') },
			{ json: 'modelNumber', js: 'modelNumber', typ: r('Sku') },
			{ json: 'multipackQuantity', js: 'multipackQuantity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'countPerPack', js: 'countPerPack', typ: r('MinimumAdvertisedPrice') },
			{ json: 'count', js: 'count', typ: r('Sku') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: r('Sku') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: r('FabricCareInstructions') },
			{ json: 'animalType', js: 'animalType', typ: r('Sku') },
			{ json: 'animalBreed', js: 'animalBreed', typ: r('Sku') },
			{ json: 'animalLifestage', js: 'animalLifestage', typ: r('Sku') },
			{ json: 'minimumWeight', js: 'minimumWeight', typ: r('ShippingWeight') },
			{ json: 'maximumWeight', js: 'maximumWeight', typ: r('ShippingWeight') },
			{ json: 'petSize', js: 'petSize', typ: r('Sku') },
			{ json: 'size', js: 'size', typ: r('Sku') },
			{ json: 'petFoodForm', js: 'petFoodForm', typ: r('Sku') },
			{ json: 'flavor', js: 'flavor', typ: r('Sku') },
			{ json: 'assembledProductLength', js: 'assembledProductLength', typ: r('ShippingWeight') },
			{ json: 'assembledProductWidth', js: 'assembledProductWidth', typ: r('ShippingWeight') },
			{ json: 'assembledProductHeight', js: 'assembledProductHeight', typ: r('ShippingWeight') },
			{ json: 'assembledProductWeight', js: 'assembledProductWeight', typ: r('ShippingWeight') },
			{ json: 'variantGroupId', js: 'variantGroupId', typ: r('Sku') },
			{ json: 'variantAttributeNames', js: 'variantAttributeNames', typ: r('CountryOfOriginComponents') },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: r('ProcessMode') },
			{ json: 'swatchImages', js: 'swatchImages', typ: r('SwatchImages') },
			{ json: 'isProp65WarningRequired', js: 'isProp65WarningRequired', typ: r('ProcessMode') },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: r('Sku') },
			{ json: 'hasExpiration', js: 'hasExpiration', typ: r('ProcessMode') },
			{ json: 'hasPricePerUnit', js: 'hasPricePerUnit', typ: r('ProcessMode') },
			{ json: 'pricePerUnitQuantity', js: 'pricePerUnitQuantity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'pricePerUnitUom', js: 'pricePerUnitUom', typ: r('ProcessMode') },
			{ json: 'hasGMOs', js: 'hasGMOs', typ: r('ProcessMode') },
			{ json: 'hasWarranty', js: 'hasWarranty', typ: r('ProcessMode') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: r('Sku') },
			{ json: 'warrantyText', js: 'warrantyText', typ: r('Sku') },
			{ json: 'isNutritionFactsLabelRequired', js: 'isNutritionFactsLabelRequired', typ: r('ProcessMode') },
			{ json: 'nutritionFactsLabel', js: 'nutritionFactsLabel', typ: r('Sku') },
			{ json: 'nutritionIngredientsImage', js: 'nutritionIngredientsImage', typ: r('Sku') },
			{ json: 'feedingInstructions', js: 'feedingInstructions', typ: r('Sku') },
			{ json: 'animalHealthConcern', js: 'animalHealthConcern', typ: r('FabricCareInstructions') },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: r('FabricCareInstructions') },
			{ json: 'features', js: 'features', typ: r('FabricCareInstructions') },
			{ json: 'keywords', js: 'keywords', typ: r('Sku') },
			{ json: 'instructions', js: 'instructions', typ: r('Sku') },
		],
		false
	),
	AnimalHealthAndGrooming: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('AnimalHealthAndGroomingProperties') },
			{ json: 'required', js: 'required', typ: a('') },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	AnimalHealthAndGroomingProperties: o(
		[
			{ json: 'pieceCount', js: 'pieceCount', typ: r('MinimumAdvertisedPrice') },
			{ json: 'shortDescription', js: 'shortDescription', typ: r('Sku') },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: r('FabricCareInstructions') },
			{ json: 'brand', js: 'brand', typ: r('Sku') },
			{ json: 'manufacturer', js: 'manufacturer', typ: r('Sku') },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: r('Sku') },
			{ json: 'modelNumber', js: 'modelNumber', typ: r('Sku') },
			{ json: 'multipackQuantity', js: 'multipackQuantity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'countPerPack', js: 'countPerPack', typ: r('MinimumAdvertisedPrice') },
			{ json: 'count', js: 'count', typ: r('Sku') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: r('Sku') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: r('FabricCareInstructions') },
			{ json: 'animalType', js: 'animalType', typ: r('Sku') },
			{ json: 'animalBreed', js: 'animalBreed', typ: r('Sku') },
			{ json: 'animalLifestage', js: 'animalLifestage', typ: r('Sku') },
			{ json: 'minimumWeight', js: 'minimumWeight', typ: r('ShippingWeight') },
			{ json: 'maximumWeight', js: 'maximumWeight', typ: r('ShippingWeight') },
			{ json: 'petSize', js: 'petSize', typ: r('Sku') },
			{ json: 'size', js: 'size', typ: r('Sku') },
			{ json: 'animalHealthConcern', js: 'animalHealthConcern', typ: r('FabricCareInstructions') },
			{ json: 'dosage', js: 'dosage', typ: r('Sku') },
			{ json: 'assembledProductLength', js: 'assembledProductLength', typ: r('ShippingWeight') },
			{ json: 'assembledProductWidth', js: 'assembledProductWidth', typ: r('ShippingWeight') },
			{ json: 'assembledProductHeight', js: 'assembledProductHeight', typ: r('ShippingWeight') },
			{ json: 'assembledProductWeight', js: 'assembledProductWeight', typ: r('ShippingWeight') },
			{ json: 'variantGroupId', js: 'variantGroupId', typ: r('Sku') },
			{ json: 'variantAttributeNames', js: 'variantAttributeNames', typ: r('CountryOfOriginComponents') },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: r('ProcessMode') },
			{ json: 'swatchImages', js: 'swatchImages', typ: r('SwatchImages') },
			{ json: 'isProp65WarningRequired', js: 'isProp65WarningRequired', typ: r('ProcessMode') },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: r('Sku') },
			{ json: 'hasExpiration', js: 'hasExpiration', typ: r('ProcessMode') },
			{ json: 'hasPricePerUnit', js: 'hasPricePerUnit', typ: r('ProcessMode') },
			{ json: 'pricePerUnitQuantity', js: 'pricePerUnitQuantity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'pricePerUnitUom', js: 'pricePerUnitUom', typ: r('ProcessMode') },
			{ json: 'hasWarranty', js: 'hasWarranty', typ: r('ProcessMode') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: r('Sku') },
			{ json: 'warrantyText', js: 'warrantyText', typ: r('Sku') },
			{ json: 'isNutritionFactsLabelRequired', js: 'isNutritionFactsLabelRequired', typ: r('ProcessMode') },
			{ json: 'nutritionFactsLabel', js: 'nutritionFactsLabel', typ: r('Sku') },
			{ json: 'hasIngredientList', js: 'hasIngredientList', typ: r('ProcessMode') },
			{ json: 'ingredientListImage', js: 'ingredientListImage', typ: r('Sku') },
			{ json: 'ingredients', js: 'ingredients', typ: r('Sku') },
			{ json: 'isDrugFactsLabelRequired', js: 'isDrugFactsLabelRequired', typ: r('ProcessMode') },
			{ json: 'drugFactsLabel', js: 'drugFactsLabel', typ: r('Sku') },
			{ json: 'drugDosageInstructionsImage', js: 'drugDosageInstructionsImage', typ: r('Sku') },
			{ json: 'drugActiveInactiveIngredientsImage', js: 'drugActiveInactiveIngredientsImage', typ: r('Sku') },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: r('FabricCareInstructions') },
			{ json: 'activeIngredients', js: 'activeIngredients', typ: r('ActiveIngredients') },
			{ json: 'inactiveIngredients', js: 'inactiveIngredients', typ: r('FabricCareInstructions') },
			{ json: 'stopUseIndications', js: 'stopUseIndications', typ: r('FabricCareInstructions') },
			{ json: 'form', js: 'form', typ: r('Sku') },
			{ json: 'scent', js: 'scent', typ: r('Sku') },
			{ json: 'hairLength', js: 'hairLength', typ: r('FabricCareInstructions') },
			{ json: 'powerType', js: 'powerType', typ: r('Sku') },
			{ json: 'isDisposable', js: 'isDisposable', typ: r('ProcessMode') },
			{ json: 'features', js: 'features', typ: r('FabricCareInstructions') },
			{ json: 'keywords', js: 'keywords', typ: r('Sku') },
			{ json: 'instructions', js: 'instructions', typ: r('Sku') },
			{ json: 'isRetractable', js: 'isRetractable', typ: r('ProcessMode') },
		],
		false
	),
	ActiveIngredients: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('CountryOfOriginComponentsType') },
			{ json: 'title', js: 'title', typ: '' },
			{ json: 'items', js: 'items', typ: r('ActiveIngredientsItems') },
			{ json: 'minItems', js: 'minItems', typ: 0 },
		],
		false
	),
	ActiveIngredientsItems: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('TentacledProperties') },
			{ json: 'required', js: 'required', typ: a('') },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	TentacledProperties: o(
		[
			{ json: 'activeIngredientName', js: 'activeIngredientName', typ: r('Sku') },
			{ json: 'activeIngredientPercentage', js: 'activeIngredientPercentage', typ: r('MinimumAdvertisedPrice') },
		],
		false
	),
	ArtAndCraftCategory: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'title', js: 'title', typ: '' },
			{ json: 'properties', js: 'properties', typ: r('ArtAndCraftCategoryProperties') },
			{ json: 'oneOf', js: 'oneOf', typ: a(r('OneOf')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	ArtAndCraftCategoryProperties: o([{ json: 'ArtAndCraft', js: 'ArtAndCraft', typ: r('ArtAndCraft') }], false),
	ArtAndCraft: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('ArtAndCraftProperties') },
			{ json: 'required', js: 'required', typ: a(r('AnimalAccessoriesRequired')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	ArtAndCraftProperties: o(
		[
			{ json: 'shortDescription', js: 'shortDescription', typ: r('Sku') },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: r('FabricCareInstructions') },
			{ json: 'brand', js: 'brand', typ: r('Sku') },
			{ json: 'manufacturer', js: 'manufacturer', typ: r('Sku') },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: r('Sku') },
			{ json: 'modelNumber', js: 'modelNumber', typ: r('Sku') },
			{ json: 'multipackQuantity', js: 'multipackQuantity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'countPerPack', js: 'countPerPack', typ: r('MinimumAdvertisedPrice') },
			{ json: 'count', js: 'count', typ: r('Sku') },
			{ json: 'pieceCount', js: 'pieceCount', typ: r('MinimumAdvertisedPrice') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: r('Sku') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: r('FabricCareInstructions') },
			{ json: 'color', js: 'color', typ: r('Sku') },
			{ json: 'colorCategory', js: 'colorCategory', typ: r('CountryOfOriginComponents') },
			{ json: 'material', js: 'material', typ: r('Sku') },
			{ json: 'pattern', js: 'pattern', typ: r('Sku') },
			{ json: 'size', js: 'size', typ: r('Sku') },
			{ json: 'metal', js: 'metal', typ: r('Sku') },
			{ json: 'plating', js: 'plating', typ: r('Sku') },
			{ json: 'finish', js: 'finish', typ: r('Sku') },
			{ json: 'form', js: 'form', typ: r('Sku') },
			{ json: 'shape', js: 'shape', typ: r('Sku') },
			{ json: 'scent', js: 'scent', typ: r('Sku') },
			{ json: 'gender', js: 'gender', typ: r('ProcessMode') },
			{ json: 'ageGroup', js: 'ageGroup', typ: r('CountryOfOriginComponents') },
			{ json: 'ageRange', js: 'ageRange', typ: r('AgeRange') },
			{ json: 'artPaintType', js: 'artPaintType', typ: r('Sku') },
			{ json: 'assembledProductLength', js: 'assembledProductLength', typ: r('ShippingWeight') },
			{ json: 'assembledProductWidth', js: 'assembledProductWidth', typ: r('ShippingWeight') },
			{ json: 'assembledProductHeight', js: 'assembledProductHeight', typ: r('ShippingWeight') },
			{ json: 'assembledProductWeight', js: 'assembledProductWeight', typ: r('ShippingWeight') },
			{ json: 'variantGroupId', js: 'variantGroupId', typ: r('Sku') },
			{ json: 'variantAttributeNames', js: 'variantAttributeNames', typ: r('CountryOfOriginComponents') },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: r('ProcessMode') },
			{ json: 'swatchImages', js: 'swatchImages', typ: r('SwatchImages') },
			{ json: 'isProp65WarningRequired', js: 'isProp65WarningRequired', typ: r('ProcessMode') },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: r('Sku') },
			{ json: 'smallPartsWarnings', js: 'smallPartsWarnings', typ: r('SmallPartsWarnings') },
			{ json: 'batteryTechnologyType', js: 'batteryTechnologyType', typ: r('ProcessMode') },
			{ json: 'hasIngredientList', js: 'hasIngredientList', typ: r('ProcessMode') },
			{ json: 'ingredientListImage', js: 'ingredientListImage', typ: r('Sku') },
			{ json: 'ingredients', js: 'ingredients', typ: r('Sku') },
			{ json: 'isAerosol', js: 'isAerosol', typ: r('ProcessMode') },
			{ json: 'isChemical', js: 'isChemical', typ: r('ProcessMode') },
			{
				json: 'compositeWoodCertificationCode',
				js: 'compositeWoodCertificationCode',
				typ: r('CompositeWoodCertificationCode'),
			},
			{ json: 'hasExpiration', js: 'hasExpiration', typ: r('ProcessMode') },
			{ json: 'hasWarranty', js: 'hasWarranty', typ: r('ProcessMode') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: r('Sku') },
			{ json: 'warrantyText', js: 'warrantyText', typ: r('Sku') },
			{ json: 'hasFuelContainer', js: 'hasFuelContainer', typ: r('ProcessMode') },
			{ json: 'fabricContent', js: 'fabricContent', typ: r('FabricContent') },
			{ json: 'fabricCareInstructions', js: 'fabricCareInstructions', typ: r('FabricCareInstructions') },
			{ json: 'capacity', js: 'capacity', typ: r('Sku') },
			{ json: 'diameter', js: 'diameter', typ: r('ShippingWeight') },
			{ json: 'culturalStyle', js: 'culturalStyle', typ: r('Sku') },
			{ json: 'subject', js: 'subject', typ: r('Sku') },
			{ json: 'theme', js: 'theme', typ: r('Sku') },
			{ json: 'occasion', js: 'occasion', typ: r('Sku') },
			{ json: 'isAntique', js: 'isAntique', typ: r('ProcessMode') },
			{ json: 'isCollectible', js: 'isCollectible', typ: r('ProcessMode') },
			{ json: 'character', js: 'character', typ: r('Sku') },
			{ json: 'isPowered', js: 'isPowered', typ: r('ProcessMode') },
			{ json: 'powerType', js: 'powerType', typ: r('Sku') },
			{ json: 'isBulk', js: 'isBulk', typ: r('ProcessMode') },
			{ json: 'isHandmade', js: 'isHandmade', typ: r('ProcessMode') },
			{ json: 'isSelfAdhesive', js: 'isSelfAdhesive', typ: r('ProcessMode') },
			{ json: 'isAntitarnish', js: 'isAntitarnish', typ: r('ProcessMode') },
			{ json: 'isReusable', js: 'isReusable', typ: r('ProcessMode') },
			{ json: 'isRefillable', js: 'isRefillable', typ: r('ProcessMode') },
			{ json: 'isDisposable', js: 'isDisposable', typ: r('ProcessMode') },
			{ json: 'isRecyclable', js: 'isRecyclable', typ: r('ProcessMode') },
			{ json: 'recommendedUses', js: 'recommendedUses', typ: r('FabricCareInstructions') },
			{ json: 'recommendedSurfaces', js: 'recommendedSurfaces', typ: r('FabricCareInstructions') },
			{ json: 'chainLength', js: 'chainLength', typ: r('ShippingWeight') },
			{ json: 'skillLevel', js: 'skillLevel', typ: r('Sku') },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: r('FabricCareInstructions') },
			{ json: 'features', js: 'features', typ: r('FabricCareInstructions') },
			{ json: 'keywords', js: 'keywords', typ: r('Sku') },
		],
		false
	),
	AgeRange: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('AgeRangeProperties') },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	AgeRangeProperties: o(
		[
			{ json: 'RangeMinimum', js: 'RangeMinimum', typ: r('MinimumAdvertisedPrice') },
			{ json: 'RangeMaximum', js: 'RangeMaximum', typ: r('MinimumAdvertisedPrice') },
			{ json: 'unit', js: 'unit', typ: r('ProcessMode') },
		],
		false
	),
	CompositeWoodCertificationCode: o(
		[
			{ json: 'type', js: 'type', typ: r('MinimumAdvertisedPriceType') },
			{ json: 'title', js: 'title', typ: '' },
			{ json: 'enum', js: 'enum', typ: a(0) },
		],
		false
	),
	Baby: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'title', js: 'title', typ: '' },
			{ json: 'properties', js: 'properties', typ: r('BabyProperties') },
			{ json: 'oneOf', js: 'oneOf', typ: a(r('OneOf')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	BabyProperties: o(
		[
			{ json: 'BabyFood', js: 'BabyFood', typ: r('BabyFood') },
			{ json: 'BabyOther', js: 'BabyOther', typ: r('BabyFurniture') },
			{ json: 'ChildCarSeats', js: 'ChildCarSeats', typ: r('ChildCarSeats') },
			{ json: 'BabyFurniture', js: 'BabyFurniture', typ: r('BabyFurniture') },
			{ json: 'BabyToys', js: 'BabyToys', typ: r('BabyFurniture') },
			{ json: 'BabyClothing', js: 'BabyClothing', typ: r('BabyClothing') },
		],
		false
	),
	BabyClothing: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('BabyClothingProperties') },
			{ json: 'required', js: 'required', typ: a(r('AnimalAccessoriesRequired')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	BabyClothingProperties: o(
		[
			{ json: 'shortDescription', js: 'shortDescription', typ: r('Sku') },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: r('FabricCareInstructions') },
			{ json: 'brand', js: 'brand', typ: r('Sku') },
			{ json: 'manufacturer', js: 'manufacturer', typ: r('Sku') },
			{ json: 'modelNumber', js: 'modelNumber', typ: r('Sku') },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: r('Sku') },
			{ json: 'multipackQuantity', js: 'multipackQuantity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'countPerPack', js: 'countPerPack', typ: r('MinimumAdvertisedPrice') },
			{ json: 'count', js: 'count', typ: r('Sku') },
			{ json: 'pieceCount', js: 'pieceCount', typ: r('MinimumAdvertisedPrice') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: r('Sku') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: r('FabricCareInstructions') },
			{ json: 'color', js: 'color', typ: r('Sku') },
			{ json: 'colorCategory', js: 'colorCategory', typ: r('CountryOfOriginComponents') },
			{ json: 'gender', js: 'gender', typ: r('ProcessMode') },
			{ json: 'babyClothingSize', js: 'babyClothingSize', typ: r('Sku') },
			{ json: 'ageGroup', js: 'ageGroup', typ: r('CountryOfOriginComponents') },
			{ json: 'ageRange', js: 'ageRange', typ: r('AgeRange') },
			{ json: 'minimumWeight', js: 'minimumWeight', typ: r('ShippingWeight') },
			{ json: 'maximumWeight', js: 'maximumWeight', typ: r('ShippingWeight') },
			{ json: 'season', js: 'season', typ: r('Sku') },
			{ json: 'scent', js: 'scent', typ: r('Sku') },
			{ json: 'character', js: 'character', typ: r('Sku') },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: r('FabricCareInstructions') },
			{ json: 'pattern', js: 'pattern', typ: r('Sku') },
			{ json: 'shoeCategory', js: 'shoeCategory', typ: r('ProcessMode') },
			{ json: 'shoeStyle', js: 'shoeStyle', typ: r('Sku') },
			{ json: 'shoeSize', js: 'shoeSize', typ: r('Sku') },
			{ json: 'shoeWidth', js: 'shoeWidth', typ: r('Sku') },
			{ json: 'shoeClosure', js: 'shoeClosure', typ: r('Sku') },
			{ json: 'variantGroupId', js: 'variantGroupId', typ: r('Sku') },
			{ json: 'variantAttributeNames', js: 'variantAttributeNames', typ: r('CountryOfOriginComponents') },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: r('ProcessMode') },
			{ json: 'swatchImages', js: 'swatchImages', typ: r('SwatchImages') },
			{ json: 'isProp65WarningRequired', js: 'isProp65WarningRequired', typ: r('ProcessMode') },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: r('Sku') },
			{ json: 'smallPartsWarnings', js: 'smallPartsWarnings', typ: r('SmallPartsWarnings') },
			{ json: 'requiresTextileActLabeling', js: 'requiresTextileActLabeling', typ: r('ProcessMode') },
			{ json: 'countryOfOriginTextiles', js: 'countryOfOriginTextiles', typ: r('ProcessMode') },
			{ json: 'fabricContent', js: 'fabricContent', typ: r('FabricContent') },
			{ json: 'fabricCareInstructions', js: 'fabricCareInstructions', typ: r('FabricCareInstructions') },
			{ json: 'sportsLeague', js: 'sportsLeague', typ: r('Sku') },
			{ json: 'sportsTeam', js: 'sportsTeam', typ: r('Sku') },
			{ json: 'theme', js: 'theme', typ: r('Sku') },
			{ json: 'athlete', js: 'athlete', typ: r('Sku') },
			{ json: 'features', js: 'features', typ: r('FabricCareInstructions') },
			{ json: 'keywords', js: 'keywords', typ: r('Sku') },
		],
		false
	),
	BabyFood: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('BabyFoodProperties') },
			{ json: 'required', js: 'required', typ: a(r('AnimalAccessoriesRequired')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	BabyFoodProperties: o(
		[
			{ json: 'shortDescription', js: 'shortDescription', typ: r('Sku') },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: r('FabricCareInstructions') },
			{ json: 'brand', js: 'brand', typ: r('Sku') },
			{ json: 'manufacturer', js: 'manufacturer', typ: r('Sku') },
			{ json: 'multipackQuantity', js: 'multipackQuantity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'countPerPack', js: 'countPerPack', typ: r('MinimumAdvertisedPrice') },
			{ json: 'count', js: 'count', typ: r('Sku') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: r('Sku') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: r('FabricCareInstructions') },
			{ json: 'flavor', js: 'flavor', typ: r('Sku') },
			{ json: 'meal', js: 'meal', typ: r('Sku') },
			{ json: 'isReadyToEat', js: 'isReadyToEat', typ: r('ProcessMode') },
			{ json: 'size', js: 'size', typ: r('Sku') },
			{ json: 'ageGroup', js: 'ageGroup', typ: u(undefined, r('CountryOfOriginComponents')) },
			{ json: 'ageRange', js: 'ageRange', typ: u(undefined, r('AgeRange')) },
			{ json: 'character', js: 'character', typ: r('Sku') },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: u(undefined, r('FabricCareInstructions')) },
			{ json: 'variantGroupId', js: 'variantGroupId', typ: r('Sku') },
			{ json: 'variantAttributeNames', js: 'variantAttributeNames', typ: r('CountryOfOriginComponents') },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: r('ProcessMode') },
			{ json: 'swatchImages', js: 'swatchImages', typ: r('SwatchImages') },
			{ json: 'isProp65WarningRequired', js: 'isProp65WarningRequired', typ: r('ProcessMode') },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: r('Sku') },
			{ json: 'hasPricePerUnit', js: 'hasPricePerUnit', typ: r('ProcessMode') },
			{ json: 'pricePerUnitQuantity', js: 'pricePerUnitQuantity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'pricePerUnitUom', js: 'pricePerUnitUom', typ: r('ProcessMode') },
			{ json: 'hasExpiration', js: 'hasExpiration', typ: r('ProcessMode') },
			{ json: 'shelfLife', js: 'shelfLife', typ: u(undefined, r('ShippingWeight')) },
			{ json: 'isNutritionFactsLabelRequired', js: 'isNutritionFactsLabelRequired', typ: r('ProcessMode') },
			{ json: 'nutritionFactsLabel', js: 'nutritionFactsLabel', typ: r('Sku') },
			{ json: 'nutritionIngredientsImage', js: 'nutritionIngredientsImage', typ: r('Sku') },
			{ json: 'hasIngredientList', js: 'hasIngredientList', typ: u(undefined, r('ProcessMode')) },
			{ json: 'ingredientListImage', js: 'ingredientListImage', typ: u(undefined, r('Sku')) },
			{ json: 'ingredients', js: 'ingredients', typ: r('Sku') },
			{ json: 'hasGMOs', js: 'hasGMOs', typ: r('ProcessMode') },
			{ json: 'servingSize', js: 'servingSize', typ: r('Sku') },
			{ json: 'servingsPerContainer', js: 'servingsPerContainer', typ: r('MinimumAdvertisedPrice') },
			{ json: 'calories', js: 'calories', typ: r('ShippingWeight') },
			{ json: 'caloriesFromFat', js: 'caloriesFromFat', typ: r('ShippingWeight') },
			{ json: 'totalFat', js: 'totalFat', typ: r('ShippingWeight') },
			{
				json: 'totalFatPercentageDailyValue',
				js: 'totalFatPercentageDailyValue',
				typ: r('MinimumAdvertisedPrice'),
			},
			{ json: 'fatCaloriesPerGram', js: 'fatCaloriesPerGram', typ: r('ShippingWeight') },
			{ json: 'totalCarbohydrate', js: 'totalCarbohydrate', typ: r('ShippingWeight') },
			{
				json: 'totalCarbohydratePercentageDailyValue',
				js: 'totalCarbohydratePercentageDailyValue',
				typ: r('MinimumAdvertisedPrice'),
			},
			{ json: 'carbohydrateCaloriesPerGram', js: 'carbohydrateCaloriesPerGram', typ: r('ShippingWeight') },
			{ json: 'nutrients', js: 'nutrients', typ: r('Nutrients') },
			{ json: 'proteinCaloriesPerGram', js: 'proteinCaloriesPerGram', typ: r('ShippingWeight') },
			{
				json: 'totalProteinPercentageDailyValue',
				js: 'totalProteinPercentageDailyValue',
				typ: r('MinimumAdvertisedPrice'),
			},
			{ json: 'totalProtein', js: 'totalProtein', typ: r('ShippingWeight') },
			{ json: 'foodForm', js: 'foodForm', typ: r('Sku') },
			{ json: 'containerType', js: 'containerType', typ: r('FabricCareInstructions') },
			{ json: 'isImitation', js: 'isImitation', typ: r('ProcessMode') },
			{ json: 'usdaInspected', js: 'usdaInspected', typ: r('ProcessMode') },
			{ json: 'hasHighFructoseCornSyrup', js: 'hasHighFructoseCornSyrup', typ: r('ProcessMode') },
			{
				json: 'fluidOuncesSupplying100Calories',
				js: 'fluidOuncesSupplying100Calories',
				typ: u(undefined, r('ShippingWeight')),
			},
			{ json: 'foodAllergenStatements', js: 'foodAllergenStatements', typ: r('FabricCareInstructions') },
			{ json: 'babyFoodPackaging', js: 'babyFoodPackaging', typ: u(undefined, r('Sku')) },
			{ json: 'babyFormulaStage', js: 'babyFormulaStage', typ: u(undefined, r('FabricCareInstructions')) },
			{ json: 'babyFoodStage', js: 'babyFoodStage', typ: u(undefined, r('FabricCareInstructions')) },
			{ json: 'instructions', js: 'instructions', typ: r('Sku') },
			{ json: 'features', js: 'features', typ: u(undefined, r('FabricCareInstructions')) },
			{ json: 'keywords', js: 'keywords', typ: u(undefined, r('Sku')) },
			{ json: 'safeHandlingInstructions', js: 'safeHandlingInstructions', typ: r('Sku') },
			{ json: 'cuisine', js: 'cuisine', typ: r('FabricCareInstructions') },
			{ json: 'foodPreparationTips', js: 'foodPreparationTips', typ: r('FabricCareInstructions') },
			{ json: 'foodStorageTips', js: 'foodStorageTips', typ: r('FabricCareInstructions') },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: u(undefined, r('Sku')) },
			{ json: 'modelNumber', js: 'modelNumber', typ: u(undefined, r('Sku')) },
			{ json: 'pieceCount', js: 'pieceCount', typ: u(undefined, r('MinimumAdvertisedPrice')) },
			{ json: 'isGmoFree', js: 'isGmoFree', typ: u(undefined, r('ProcessMode')) },
			{ json: 'timeAged', js: 'timeAged', typ: u(undefined, r('ShippingWeight')) },
			{ json: 'caffeineDesignation', js: 'caffeineDesignation', typ: u(undefined, r('ProcessMode')) },
			{ json: 'spiceLevel', js: 'spiceLevel', typ: u(undefined, r('Sku')) },
			{ json: 'isMadeInHomeKitchen', js: 'isMadeInHomeKitchen', typ: u(undefined, r('ProcessMode')) },
			{ json: 'beefCut', js: 'beefCut', typ: u(undefined, r('Sku')) },
			{ json: 'poultryCut', js: 'poultryCut', typ: u(undefined, r('Sku')) },
			{ json: 'releaseDate', js: 'releaseDate', typ: u(undefined, r('FeedDateClass')) },
		],
		false
	),
	Nutrients: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('CountryOfOriginComponentsType') },
			{ json: 'title', js: 'title', typ: '' },
			{ json: 'items', js: 'items', typ: r('NutrientsItems') },
			{ json: 'minItems', js: 'minItems', typ: 0 },
		],
		false
	),
	NutrientsItems: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('StickyProperties') },
			{ json: 'required', js: 'required', typ: a('') },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	StickyProperties: o(
		[
			{ json: 'nutrientName', js: 'nutrientName', typ: r('Sku') },
			{ json: 'nutrientAmount', js: 'nutrientAmount', typ: r('Sku') },
			{ json: 'nutrientPercentageDailyValue', js: 'nutrientPercentageDailyValue', typ: r('Sku') },
			{ json: 'nutrientFootnote', js: 'nutrientFootnote', typ: r('Sku') },
		],
		false
	),
	FeedDateClass: o(
		[
			{ json: 'type', js: 'type', typ: r('PurpleType') },
			{ json: 'title', js: 'title', typ: '' },
			{ json: 'format', js: 'format', typ: r('FeedDateFormat') },
		],
		false
	),
	BabyFurniture: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('BabyFurnitureProperties') },
			{ json: 'required', js: 'required', typ: a(r('AnimalAccessoriesRequired')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	BabyFurnitureProperties: o(
		[
			{ json: 'shortDescription', js: 'shortDescription', typ: r('Sku') },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: r('FabricCareInstructions') },
			{ json: 'brand', js: 'brand', typ: r('Sku') },
			{ json: 'manufacturer', js: 'manufacturer', typ: r('Sku') },
			{ json: 'modelNumber', js: 'modelNumber', typ: r('Sku') },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: r('Sku') },
			{ json: 'multipackQuantity', js: 'multipackQuantity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'countPerPack', js: 'countPerPack', typ: r('MinimumAdvertisedPrice') },
			{ json: 'count', js: 'count', typ: r('Sku') },
			{ json: 'pieceCount', js: 'pieceCount', typ: u(undefined, r('MinimumAdvertisedPrice')) },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: r('Sku') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: r('FabricCareInstructions') },
			{ json: 'color', js: 'color', typ: r('Sku') },
			{ json: 'colorCategory', js: 'colorCategory', typ: r('CountryOfOriginComponents') },
			{ json: 'gender', js: 'gender', typ: r('ProcessMode') },
			{ json: 'size', js: 'size', typ: r('Sku') },
			{ json: 'ageGroup', js: 'ageGroup', typ: r('CountryOfOriginComponents') },
			{ json: 'ageRange', js: 'ageRange', typ: u(undefined, r('AgeRange')) },
			{ json: 'minimumWeight', js: 'minimumWeight', typ: u(undefined, r('ShippingWeight')) },
			{ json: 'maximumWeight', js: 'maximumWeight', typ: u(undefined, r('ShippingWeight')) },
			{ json: 'material', js: 'material', typ: r('Sku') },
			{ json: 'pattern', js: 'pattern', typ: r('Sku') },
			{ json: 'character', js: 'character', typ: r('Sku') },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: r('FabricCareInstructions') },
			{ json: 'bedSize', js: 'bedSize', typ: u(undefined, r('Sku')) },
			{ json: 'mattressFirmness', js: 'mattressFirmness', typ: u(undefined, r('Sku')) },
			{ json: 'fillMaterial', js: 'fillMaterial', typ: u(undefined, r('FabricCareInstructions')) },
			{ json: 'finish', js: 'finish', typ: u(undefined, r('Sku')) },
			{ json: 'shape', js: 'shape', typ: u(undefined, r('Sku')) },
			{ json: 'isFoldable', js: 'isFoldable', typ: u(undefined, r('ProcessMode')) },
			{ json: 'isWheeled', js: 'isWheeled', typ: u(undefined, r('ProcessMode')) },
			{ json: 'homeDecorStyle', js: 'homeDecorStyle', typ: u(undefined, r('Sku')) },
			{ json: 'assembledProductLength', js: 'assembledProductLength', typ: r('ShippingWeight') },
			{ json: 'assembledProductWidth', js: 'assembledProductWidth', typ: r('ShippingWeight') },
			{ json: 'assembledProductHeight', js: 'assembledProductHeight', typ: r('ShippingWeight') },
			{ json: 'assembledProductWeight', js: 'assembledProductWeight', typ: r('ShippingWeight') },
			{ json: 'variantGroupId', js: 'variantGroupId', typ: r('Sku') },
			{ json: 'variantAttributeNames', js: 'variantAttributeNames', typ: r('CountryOfOriginComponents') },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: r('ProcessMode') },
			{ json: 'swatchImages', js: 'swatchImages', typ: r('SwatchImages') },
			{ json: 'isProp65WarningRequired', js: 'isProp65WarningRequired', typ: r('ProcessMode') },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: r('Sku') },
			{ json: 'smallPartsWarnings', js: 'smallPartsWarnings', typ: r('SmallPartsWarnings') },
			{
				json: 'requiresTextileActLabeling',
				js: 'requiresTextileActLabeling',
				typ: u(undefined, r('ProcessMode')),
			},
			{ json: 'countryOfOriginTextiles', js: 'countryOfOriginTextiles', typ: u(undefined, r('ProcessMode')) },
			{ json: 'hasWarranty', js: 'hasWarranty', typ: r('ProcessMode') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: r('Sku') },
			{ json: 'warrantyText', js: 'warrantyText', typ: r('Sku') },
			{ json: 'isAssemblyRequired', js: 'isAssemblyRequired', typ: u(undefined, r('ProcessMode')) },
			{ json: 'assemblyInstructions', js: 'assemblyInstructions', typ: u(undefined, r('Sku')) },
			{ json: 'fabricContent', js: 'fabricContent', typ: r('FabricContent') },
			{ json: 'fabricCareInstructions', js: 'fabricCareInstructions', typ: r('FabricCareInstructions') },
			{ json: 'sportsLeague', js: 'sportsLeague', typ: r('Sku') },
			{ json: 'sportsTeam', js: 'sportsTeam', typ: r('Sku') },
			{ json: 'athlete', js: 'athlete', typ: r('Sku') },
			{ json: 'features', js: 'features', typ: r('FabricCareInstructions') },
			{ json: 'keywords', js: 'keywords', typ: r('Sku') },
			{ json: 'collection', js: 'collection', typ: u(undefined, r('Sku')) },
			{ json: 'diaperSize', js: 'diaperSize', typ: u(undefined, r('Sku')) },
			{
				json: 'diaposableBabyDiaperType',
				js: 'diaposableBabyDiaperType',
				typ: u(undefined, r('FabricCareInstructions')),
			},
			{ json: 'scent', js: 'scent', typ: u(undefined, r('Sku')) },
			{ json: 'batteryTechnologyType', js: 'batteryTechnologyType', typ: u(undefined, r('ProcessMode')) },
			{ json: 'hasPricePerUnit', js: 'hasPricePerUnit', typ: u(undefined, r('ProcessMode')) },
			{
				json: 'pricePerUnitQuantity',
				js: 'pricePerUnitQuantity',
				typ: u(undefined, r('MinimumAdvertisedPrice')),
			},
			{ json: 'pricePerUnitUom', js: 'pricePerUnitUom', typ: u(undefined, r('ProcessMode')) },
			{ json: 'hasExpiration', js: 'hasExpiration', typ: u(undefined, r('ProcessMode')) },
			{ json: 'hasIngredientList', js: 'hasIngredientList', typ: u(undefined, r('ProcessMode')) },
			{ json: 'ingredientListImage', js: 'ingredientListImage', typ: u(undefined, r('Sku')) },
			{ json: 'ingredients', js: 'ingredients', typ: u(undefined, r('Sku')) },
			{ json: 'batteriesRequired', js: 'batteriesRequired', typ: u(undefined, r('ProcessMode')) },
			{ json: 'season', js: 'season', typ: u(undefined, r('Sku')) },
			{ json: 'educationalFocus', js: 'educationalFocus', typ: u(undefined, r('FabricCareInstructions')) },
			{ json: 'theme', js: 'theme', typ: u(undefined, r('Sku')) },
			{ json: 'makesNoise', js: 'makesNoise', typ: u(undefined, r('ProcessMode')) },
			{ json: 'awardsWon', js: 'awardsWon', typ: u(undefined, r('FabricCareInstructions')) },
			{ json: 'animalType', js: 'animalType', typ: u(undefined, r('Sku')) },
			{ json: 'isPowered', js: 'isPowered', typ: u(undefined, r('ProcessMode')) },
			{ json: 'powerType', js: 'powerType', typ: u(undefined, r('Sku')) },
			{ json: 'screenSize', js: 'screenSize', typ: u(undefined, r('ShippingWeight')) },
			{ json: 'bedPillowSize', js: 'bedPillowSize', typ: u(undefined, r('FabricCareInstructions')) },
			{ json: 'threadCount', js: 'threadCount', typ: u(undefined, r('MinimumAdvertisedPrice')) },
			{ json: 'isSet', js: 'isSet', typ: u(undefined, r('ProcessMode')) },
			{ json: 'occasion', js: 'occasion', typ: u(undefined, r('Sku')) },
			{ json: 'bedStyle', js: 'bedStyle', typ: u(undefined, r('Sku')) },
			{ json: 'monogramLetter', js: 'monogramLetter', typ: u(undefined, r('Sku')) },
		],
		false
	),
	ChildCarSeats: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('ChildCarSeatsProperties') },
			{ json: 'required', js: 'required', typ: a(r('AnimalAccessoriesRequired')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	ChildCarSeatsProperties: o(
		[
			{ json: 'shortDescription', js: 'shortDescription', typ: r('Sku') },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: r('FabricCareInstructions') },
			{ json: 'brand', js: 'brand', typ: r('Sku') },
			{ json: 'manufacturer', js: 'manufacturer', typ: r('Sku') },
			{ json: 'modelNumber', js: 'modelNumber', typ: r('Sku') },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: r('Sku') },
			{ json: 'multipackQuantity', js: 'multipackQuantity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'countPerPack', js: 'countPerPack', typ: r('MinimumAdvertisedPrice') },
			{ json: 'count', js: 'count', typ: r('Sku') },
			{ json: 'pieceCount', js: 'pieceCount', typ: r('MinimumAdvertisedPrice') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: r('Sku') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: r('FabricCareInstructions') },
			{ json: 'color', js: 'color', typ: r('Sku') },
			{ json: 'colorCategory', js: 'colorCategory', typ: r('CountryOfOriginComponents') },
			{ json: 'pattern', js: 'pattern', typ: r('Sku') },
			{ json: 'material', js: 'material', typ: r('Sku') },
			{ json: 'gender', js: 'gender', typ: r('ProcessMode') },
			{ json: 'size', js: 'size', typ: r('Sku') },
			{ json: 'ageGroup', js: 'ageGroup', typ: r('CountryOfOriginComponents') },
			{ json: 'ageRange', js: 'ageRange', typ: r('AgeRange') },
			{ json: 'minimumWeight', js: 'minimumWeight', typ: r('ShippingWeight') },
			{ json: 'maximumWeight', js: 'maximumWeight', typ: r('ShippingWeight') },
			{ json: 'character', js: 'character', typ: r('Sku') },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: r('FabricCareInstructions') },
			{ json: 'isFoldable', js: 'isFoldable', typ: r('ProcessMode') },
			{ json: 'isWheeled', js: 'isWheeled', typ: r('ProcessMode') },
			{ json: 'strollerType', js: 'strollerType', typ: r('FabricCareInstructions') },
			{ json: 'seatingCapacity', js: 'seatingCapacity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'babyCarrierStyle', js: 'babyCarrierStyle', typ: r('FabricCareInstructions') },
			{ json: 'babyCarrierPosition', js: 'babyCarrierPosition', typ: r('FabricCareInstructions') },
			{ json: 'safetyHarnessStyle', js: 'safetyHarnessStyle', typ: r('ProcessMode') },
			{ json: 'childWalkingHarnessStyle', js: 'childWalkingHarnessStyle', typ: r('Sku') },
			{ json: 'travelSystemCompatibility', js: 'travelSystemCompatibility', typ: r('Sku') },
			{ json: 'assembledProductLength', js: 'assembledProductLength', typ: r('ShippingWeight') },
			{ json: 'assembledProductWidth', js: 'assembledProductWidth', typ: r('ShippingWeight') },
			{ json: 'assembledProductHeight', js: 'assembledProductHeight', typ: r('ShippingWeight') },
			{ json: 'assembledProductWeight', js: 'assembledProductWeight', typ: r('ShippingWeight') },
			{ json: 'variantGroupId', js: 'variantGroupId', typ: r('Sku') },
			{ json: 'variantAttributeNames', js: 'variantAttributeNames', typ: r('CountryOfOriginComponents') },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: r('ProcessMode') },
			{ json: 'swatchImages', js: 'swatchImages', typ: r('SwatchImages') },
			{ json: 'isProp65WarningRequired', js: 'isProp65WarningRequired', typ: r('ProcessMode') },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: r('Sku') },
			{ json: 'smallPartsWarnings', js: 'smallPartsWarnings', typ: r('SmallPartsWarnings') },
			{ json: 'batteryTechnologyType', js: 'batteryTechnologyType', typ: r('ProcessMode') },
			{ json: 'hasWarranty', js: 'hasWarranty', typ: r('ProcessMode') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: r('Sku') },
			{ json: 'warrantyText', js: 'warrantyText', typ: r('Sku') },
			{ json: 'isAssemblyRequired', js: 'isAssemblyRequired', typ: r('ProcessMode') },
			{ json: 'assemblyInstructions', js: 'assemblyInstructions', typ: r('Sku') },
			{ json: 'requiresTextileActLabeling', js: 'requiresTextileActLabeling', typ: r('ProcessMode') },
			{ json: 'countryOfOriginTextiles', js: 'countryOfOriginTextiles', typ: r('ProcessMode') },
			{ json: 'fabricContent', js: 'fabricContent', typ: r('FabricContent') },
			{ json: 'fabricCareInstructions', js: 'fabricCareInstructions', typ: r('FabricCareInstructions') },
			{ json: 'childCarSeatType', js: 'childCarSeatType', typ: r('ProcessMode') },
			{ json: 'facingDirection', js: 'facingDirection', typ: r('Sku') },
			{ json: 'forwardFacingMinimumWeight', js: 'forwardFacingMinimumWeight', typ: r('ShippingWeight') },
			{ json: 'forwardFacingMaximumWeight', js: 'forwardFacingMaximumWeight', typ: r('ShippingWeight') },
			{ json: 'rearFacingMinimumWeight', js: 'rearFacingMinimumWeight', typ: r('ShippingWeight') },
			{ json: 'rearFacingMaximumWeight', js: 'rearFacingMaximumWeight', typ: r('ShippingWeight') },
			{ json: 'hasLatchSystem', js: 'hasLatchSystem', typ: r('ProcessMode') },
			{ json: 'carSeatBaseDepth', js: 'carSeatBaseDepth', typ: r('ShippingWeight') },
			{ json: 'carSeatBaseWidth', js: 'carSeatBaseWidth', typ: r('ShippingWeight') },
			{ json: 'carSeatMaxChildHeight', js: 'carSeatMaxChildHeight', typ: r('ShippingWeight') },
			{ json: 'sportsLeague', js: 'sportsLeague', typ: r('Sku') },
			{ json: 'sportsTeam', js: 'sportsTeam', typ: r('Sku') },
			{ json: 'athlete', js: 'athlete', typ: r('Sku') },
			{ json: 'features', js: 'features', typ: r('FabricCareInstructions') },
			{ json: 'keywords', js: 'keywords', typ: r('Sku') },
		],
		false
	),
	CarriersAndAccessoriesCategory: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'title', js: 'title', typ: '' },
			{ json: 'properties', js: 'properties', typ: r('CarriersAndAccessoriesCategoryProperties') },
			{ json: 'oneOf', js: 'oneOf', typ: a(r('OneOf')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	CarriersAndAccessoriesCategoryProperties: o(
		[
			{ json: 'CasesAndBags', js: 'CasesAndBags', typ: r('CarriersAndAccessories') },
			{ json: 'CarriersAndAccessories', js: 'CarriersAndAccessories', typ: r('CarriersAndAccessories') },
		],
		false
	),
	CarriersAndAccessories: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('CarriersAndAccessoriesProperties') },
			{ json: 'required', js: 'required', typ: a(r('AnimalAccessoriesRequired')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	CarriersAndAccessoriesProperties: o(
		[
			{ json: 'shortDescription', js: 'shortDescription', typ: r('Sku') },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: r('FabricCareInstructions') },
			{ json: 'brand', js: 'brand', typ: r('Sku') },
			{ json: 'manufacturer', js: 'manufacturer', typ: r('Sku') },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: r('Sku') },
			{ json: 'modelNumber', js: 'modelNumber', typ: r('Sku') },
			{ json: 'multipackQuantity', js: 'multipackQuantity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'countPerPack', js: 'countPerPack', typ: r('MinimumAdvertisedPrice') },
			{ json: 'pieceCount', js: 'pieceCount', typ: r('MinimumAdvertisedPrice') },
			{ json: 'count', js: 'count', typ: r('Sku') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: r('Sku') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: r('FabricCareInstructions') },
			{ json: 'color', js: 'color', typ: r('Sku') },
			{ json: 'colorCategory', js: 'colorCategory', typ: r('CountryOfOriginComponents') },
			{ json: 'pattern', js: 'pattern', typ: r('Sku') },
			{ json: 'material', js: 'material', typ: r('Sku') },
			{ json: 'gender', js: 'gender', typ: r('ProcessMode') },
			{ json: 'size', js: 'size', typ: r('Sku') },
			{ json: 'ageGroup', js: 'ageGroup', typ: r('CountryOfOriginComponents') },
			{ json: 'dimensions', js: 'dimensions', typ: u(undefined, r('Sku')) },
			{ json: 'capacity', js: 'capacity', typ: r('Sku') },
			{ json: 'isWheeled', js: 'isWheeled', typ: r('ProcessMode') },
			{ json: 'numberOfWheels', js: 'numberOfWheels', typ: r('MinimumAdvertisedPrice') },
			{ json: 'character', js: 'character', typ: r('Sku') },
			{ json: 'assembledProductLength', js: 'assembledProductLength', typ: r('ShippingWeight') },
			{ json: 'assembledProductWidth', js: 'assembledProductWidth', typ: r('ShippingWeight') },
			{ json: 'assembledProductHeight', js: 'assembledProductHeight', typ: r('ShippingWeight') },
			{ json: 'assembledProductWeight', js: 'assembledProductWeight', typ: r('ShippingWeight') },
			{ json: 'variantGroupId', js: 'variantGroupId', typ: r('Sku') },
			{ json: 'variantAttributeNames', js: 'variantAttributeNames', typ: r('CountryOfOriginComponents') },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: r('ProcessMode') },
			{ json: 'swatchImages', js: 'swatchImages', typ: r('SwatchImages') },
			{ json: 'isProp65WarningRequired', js: 'isProp65WarningRequired', typ: r('ProcessMode') },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: r('Sku') },
			{ json: 'batteryTechnologyType', js: 'batteryTechnologyType', typ: r('ProcessMode') },
			{ json: 'hasWarranty', js: 'hasWarranty', typ: r('ProcessMode') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: r('Sku') },
			{ json: 'warrantyText', js: 'warrantyText', typ: r('Sku') },
			{ json: 'requiresTextileActLabeling', js: 'requiresTextileActLabeling', typ: r('ProcessMode') },
			{ json: 'countryOfOriginTextiles', js: 'countryOfOriginTextiles', typ: r('ProcessMode') },
			{ json: 'fabricContent', js: 'fabricContent', typ: r('FabricContent') },
			{ json: 'fabricCareInstructions', js: 'fabricCareInstructions', typ: r('FabricCareInstructions') },
			{ json: 'handleMaterial', js: 'handleMaterial', typ: r('FabricCareInstructions') },
			{ json: 'handleType', js: 'handleType', typ: r('Sku') },
			{ json: 'zipperMaterial', js: 'zipperMaterial', typ: r('Sku') },
			{ json: 'lockingMechanism', js: 'lockingMechanism', typ: r('Sku') },
			{ json: 'leatherGrade', js: 'leatherGrade', typ: r('Sku') },
			{ json: 'bagCaseFeature', js: 'bagCaseFeature', typ: u(undefined, r('Sku')) },
			{ json: 'isWeatherResistant', js: 'isWeatherResistant', typ: r('ProcessMode') },
			{ json: 'isWaterproof', js: 'isWaterproof', typ: r('ProcessMode') },
			{ json: 'sportsLeague', js: 'sportsLeague', typ: r('Sku') },
			{ json: 'sportsTeam', js: 'sportsTeam', typ: r('Sku') },
			{ json: 'athlete', js: 'athlete', typ: r('Sku') },
			{ json: 'autographedBy', js: 'autographedBy', typ: r('Sku') },
			{ json: 'features', js: 'features', typ: r('FabricCareInstructions') },
			{ json: 'keywords', js: 'keywords', typ: r('Sku') },
			{ json: 'monogramLetter', js: 'monogramLetter', typ: r('Sku') },
			{ json: 'isMadeFromRecycledMaterial', js: 'isMadeFromRecycledMaterial', typ: r('ProcessMode') },
			{ json: 'recycledMaterialContent', js: 'recycledMaterialContent', typ: r('RecycledMaterialContent') },
			{ json: 'isFairTrade', js: 'isFairTrade', typ: u(undefined, r('ProcessMode')) },
			{ json: 'designer', js: 'designer', typ: r('Sku') },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: r('FabricCareInstructions') },
			{ json: 'isLined', js: 'isLined', typ: r('ProcessMode') },
			{ json: 'hardOrSoftCase', js: 'hardOrSoftCase', typ: u(undefined, r('ProcessMode')) },
			{ json: 'compatibleBrands', js: 'compatibleBrands', typ: u(undefined, r('FabricCareInstructions')) },
			{ json: 'compatibleDevices', js: 'compatibleDevices', typ: u(undefined, r('Sku')) },
			{ json: 'screenSize', js: 'screenSize', typ: u(undefined, r('ShippingWeight')) },
			{ json: 'bagStyle', js: 'bagStyle', typ: u(undefined, r('Sku')) },
			{ json: 'shape', js: 'shape', typ: u(undefined, r('Sku')) },
			{ json: 'maximumWeight', js: 'maximumWeight', typ: u(undefined, r('ShippingWeight')) },
			{ json: 'finish', js: 'finish', typ: u(undefined, r('Sku')) },
			{
				json: 'numberOfCompartments',
				js: 'numberOfCompartments',
				typ: u(undefined, r('MinimumAdvertisedPrice')),
			},
			{ json: 'hasRemovableStrap', js: 'hasRemovableStrap', typ: u(undefined, r('ProcessMode')) },
			{ json: 'fastenerType', js: 'fastenerType', typ: u(undefined, r('Sku')) },
			{ json: 'sport', js: 'sport', typ: u(undefined, r('Sku')) },
			{ json: 'isReusable', js: 'isReusable', typ: u(undefined, r('ProcessMode')) },
			{ json: 'isFoldable', js: 'isFoldable', typ: u(undefined, r('ProcessMode')) },
			{ json: 'recommendedUses', js: 'recommendedUses', typ: u(undefined, r('FabricCareInstructions')) },
			{ json: 'occasion', js: 'occasion', typ: u(undefined, r('Sku')) },
		],
		false
	),
	RecycledMaterialContent: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('CountryOfOriginComponentsType') },
			{ json: 'title', js: 'title', typ: '' },
			{ json: 'items', js: 'items', typ: r('RecycledMaterialContentItems') },
			{ json: 'minItems', js: 'minItems', typ: 0 },
		],
		false
	),
	RecycledMaterialContentItems: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('IndigoProperties') },
			{ json: 'required', js: 'required', typ: a('') },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	IndigoProperties: o(
		[
			{ json: 'recycledMaterial', js: 'recycledMaterial', typ: r('Sku') },
			{
				json: 'percentageOfRecycledMaterial',
				js: 'percentageOfRecycledMaterial',
				typ: r('MinimumAdvertisedPrice'),
			},
		],
		false
	),
	ClothingCategory: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'title', js: 'title', typ: '' },
			{ json: 'properties', js: 'properties', typ: r('ClothingCategoryProperties') },
			{ json: 'oneOf', js: 'oneOf', typ: a(r('OneOf')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	ClothingCategoryProperties: o([{ json: 'Clothing', js: 'Clothing', typ: r('Clothing') }], false),
	Clothing: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('ClothingProperties') },
			{ json: 'required', js: 'required', typ: a(r('AnimalAccessoriesRequired')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	ClothingProperties: o(
		[
			{ json: 'shortDescription', js: 'shortDescription', typ: r('Sku') },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: r('FabricCareInstructions') },
			{ json: 'brand', js: 'brand', typ: r('Sku') },
			{ json: 'manufacturer', js: 'manufacturer', typ: r('Sku') },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: r('Sku') },
			{ json: 'multipackQuantity', js: 'multipackQuantity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'countPerPack', js: 'countPerPack', typ: r('MinimumAdvertisedPrice') },
			{ json: 'count', js: 'count', typ: r('Sku') },
			{ json: 'pieceCount', js: 'pieceCount', typ: r('MinimumAdvertisedPrice') },
			{ json: 'modelNumber', js: 'modelNumber', typ: r('Sku') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: r('Sku') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: r('FabricCareInstructions') },
			{ json: 'color', js: 'color', typ: r('Sku') },
			{ json: 'colorCategory', js: 'colorCategory', typ: r('CountryOfOriginComponents') },
			{ json: 'pattern', js: 'pattern', typ: r('Sku') },
			{ json: 'material', js: 'material', typ: r('Sku') },
			{ json: 'gender', js: 'gender', typ: r('ProcessMode') },
			{ json: 'ageGroup', js: 'ageGroup', typ: r('CountryOfOriginComponents') },
			{ json: 'clothingSizeGroup', js: 'clothingSizeGroup', typ: r('ProcessMode') },
			{ json: 'clothingSize', js: 'clothingSize', typ: r('Sku') },
			{ json: 'isSet', js: 'isSet', typ: r('ProcessMode') },
			{ json: 'variantGroupId', js: 'variantGroupId', typ: r('Sku') },
			{ json: 'variantAttributeNames', js: 'variantAttributeNames', typ: r('CountryOfOriginComponents') },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: r('ProcessMode') },
			{ json: 'swatchImages', js: 'swatchImages', typ: r('SwatchImages') },
			{ json: 'isProp65WarningRequired', js: 'isProp65WarningRequired', typ: r('ProcessMode') },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: r('Sku') },
			{ json: 'smallPartsWarnings', js: 'smallPartsWarnings', typ: r('SmallPartsWarnings') },
			{ json: 'requiresTextileActLabeling', js: 'requiresTextileActLabeling', typ: r('ProcessMode') },
			{ json: 'countryOfOriginTextiles', js: 'countryOfOriginTextiles', typ: r('ProcessMode') },
			{ json: 'batteryTechnologyType', js: 'batteryTechnologyType', typ: r('ProcessMode') },
			{ json: 'hasWarranty', js: 'hasWarranty', typ: r('ProcessMode') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: r('Sku') },
			{ json: 'warrantyText', js: 'warrantyText', typ: r('Sku') },
			{ json: 'clothingTopStyle', js: 'clothingTopStyle', typ: r('Sku') },
			{ json: 'dressShirtSize', js: 'dressShirtSize', typ: r('Sku') },
			{ json: 'sleeveStyle', js: 'sleeveStyle', typ: r('Sku') },
			{ json: 'sleeveLengthStyle', js: 'sleeveLengthStyle', typ: r('ProcessMode') },
			{ json: 'shirtNeckStyle', js: 'shirtNeckStyle', typ: r('Sku') },
			{ json: 'collarType', js: 'collarType', typ: r('Sku') },
			{ json: 'jacketStyle', js: 'jacketStyle', typ: r('Sku') },
			{ json: 'suitBreastingStyle', js: 'suitBreastingStyle', typ: r('ProcessMode') },
			{ json: 'sweaterStyle', js: 'sweaterStyle', typ: r('Sku') },
			{ json: 'scarfStyle', js: 'scarfStyle', typ: r('Sku') },
			{ json: 'upperBodyStrapConfiguration', js: 'upperBodyStrapConfiguration', typ: r('Sku') },
			{ json: 'hatSize', js: 'hatSize', typ: r('ProcessMode') },
			{ json: 'hatStyle', js: 'hatStyle', typ: r('Sku') },
			{ json: 'braStyle', js: 'braStyle', typ: r('Sku') },
			{ json: 'braSize', js: 'braSize', typ: r('Sku') },
			{ json: 'chestSize', js: 'chestSize', typ: r('ShippingWeight') },
			{ json: 'pantRise', js: 'pantRise', typ: r('Sku') },
			{ json: 'waistStyle', js: 'waistStyle', typ: r('Sku') },
			{ json: 'waistSize', js: 'waistSize', typ: r('ShippingWeight') },
			{ json: 'pantySize', js: 'pantySize', typ: r('ProcessMode') },
			{ json: 'skirtLength', js: 'skirtLength', typ: r('ShippingWeight') },
			{ json: 'legOpeningCut', js: 'legOpeningCut', typ: r('ProcessMode') },
			{ json: 'pantLegCut', js: 'pantLegCut', typ: r('Sku') },
			{ json: 'jeanStyle', js: 'jeanStyle', typ: r('Sku') },
			{ json: 'jeanWash', js: 'jeanWash', typ: r('Sku') },
			{ json: 'jeanFinish', js: 'jeanFinish', typ: r('Sku') },
			{ json: 'pantSize', js: 'pantSize', typ: r('Sku') },
			{ json: 'pantFit', js: 'pantFit', typ: r('Sku') },
			{ json: 'pantStyle', js: 'pantStyle', typ: r('Sku') },
			{ json: 'beltStyle', js: 'beltStyle', typ: r('Sku') },
			{ json: 'beltBuckleStyle', js: 'beltBuckleStyle', typ: r('Sku') },
			{ json: 'pantyStyle', js: 'pantyStyle', typ: r('Sku') },
			{ json: 'shortsStyle', js: 'shortsStyle', typ: r('Sku') },
			{ json: 'skirtAndDressCut', js: 'skirtAndDressCut', typ: r('Sku') },
			{ json: 'skirtLengthStyle', js: 'skirtLengthStyle', typ: r('Sku') },
			{ json: 'hosieryStyle', js: 'hosieryStyle', typ: r('Sku') },
			{ json: 'tightsSheerness', js: 'tightsSheerness', typ: r('ProcessMode') },
			{ json: 'underwearStyle', js: 'underwearStyle', typ: r('Sku') },
			{ json: 'sockSize', js: 'sockSize', typ: r('Sku') },
			{ json: 'sockStyle', js: 'sockStyle', typ: r('Sku') },
			{ json: 'sockRise', js: 'sockRise', typ: r('ProcessMode') },
			{ json: 'fabricContent', js: 'fabricContent', typ: r('FabricContent') },
			{ json: 'fabricCareInstructions', js: 'fabricCareInstructions', typ: r('FabricCareInstructions') },
			{ json: 'accentColor', js: 'accentColor', typ: r('Sku') },
			{ json: 'clothingWeight', js: 'clothingWeight', typ: r('ProcessMode') },
			{ json: 'clothingStyle', js: 'clothingStyle', typ: r('Sku') },
			{ json: 'clothingFit', js: 'clothingFit', typ: r('Sku') },
			{ json: 'clothingCut', js: 'clothingCut', typ: r('Sku') },
			{ json: 'clothingLengthStyle', js: 'clothingLengthStyle', typ: r('Sku') },
			{ json: 'fastenerType', js: 'fastenerType', typ: r('Sku') },
			{ json: 'swimsuitStyle', js: 'swimsuitStyle', typ: r('Sku') },
			{ json: 'dressStyle', js: 'dressStyle', typ: r('Sku') },
			{ json: 'gotsCertification', js: 'gotsCertification', typ: r('ProcessMode') },
			{ json: 'theme', js: 'theme', typ: r('Sku') },
			{ json: 'character', js: 'character', typ: r('Sku') },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: r('FabricCareInstructions') },
			{ json: 'sportsLeague', js: 'sportsLeague', typ: r('Sku') },
			{ json: 'sportsTeam', js: 'sportsTeam', typ: r('Sku') },
			{ json: 'occasion', js: 'occasion', typ: r('Sku') },
			{ json: 'activity', js: 'activity', typ: r('Sku') },
			{ json: 'sport', js: 'sport', typ: r('Sku') },
			{ json: 'season', js: 'season', typ: r('Sku') },
			{ json: 'weather', js: 'weather', typ: r('Sku') },
			{ json: 'isMaternity', js: 'isMaternity', typ: r('ProcessMode') },
			{ json: 'academicInstitution', js: 'academicInstitution', typ: r('Sku') },
			{ json: 'athlete', js: 'athlete', typ: r('Sku') },
			{ json: 'autographedBy', js: 'autographedBy', typ: r('Sku') },
			{ json: 'braBandSize', js: 'braBandSize', typ: r('ShippingWeight') },
			{ json: 'braCupSize', js: 'braCupSize', typ: r('Sku') },
			{ json: 'neckSize', js: 'neckSize', typ: r('ShippingWeight') },
			{ json: 'sleeveLength', js: 'sleeveLength', typ: r('ShippingWeight') },
			{ json: 'inseam', js: 'inseam', typ: r('ShippingWeight') },
			{ json: 'isMadeFromRecycledMaterial', js: 'isMadeFromRecycledMaterial', typ: r('ProcessMode') },
			{ json: 'recycledMaterialContent', js: 'recycledMaterialContent', typ: r('RecycledMaterialContent') },
			{ json: 'features', js: 'features', typ: r('FabricCareInstructions') },
			{ json: 'keywords', js: 'keywords', typ: r('Sku') },
		],
		false
	),
	Electronics: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'title', js: 'title', typ: '' },
			{ json: 'properties', js: 'properties', typ: r('ElectronicsProperties') },
			{ json: 'oneOf', js: 'oneOf', typ: a(r('OneOf')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	ElectronicsProperties: o(
		[
			{ json: 'VideoProjectors', js: 'VideoProjectors', typ: r('VideoProjectors') },
			{ json: 'VideoGames', js: 'VideoGames', typ: r('VideoGames') },
			{ json: 'ElectronicsAccessories', js: 'ElectronicsAccessories', typ: r('ElectronicsAccessories') },
			{ json: 'ComputerComponents', js: 'ComputerComponents', typ: r('ComputerComponents') },
			{ json: 'ElectronicsCables', js: 'ElectronicsCables', typ: r('ElectronicsCables') },
			{ json: 'Software', js: 'Software', typ: r('Software') },
			{ json: 'Computers', js: 'Computers', typ: r('Computers') },
			{ json: 'TVsAndVideoDisplays', js: 'TVsAndVideoDisplays', typ: r('TVsAndVideoDisplays') },
			{ json: 'CellPhones', js: 'CellPhones', typ: r('CellPhones') },
			{
				json: 'PrintersScannersAndImaging',
				js: 'PrintersScannersAndImaging',
				typ: r('PrintersScannersAndImaging'),
			},
			{ json: 'ElectronicsOther', js: 'ElectronicsOther', typ: r('ElectronicsOther') },
		],
		false
	),
	CellPhones: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('CellPhonesProperties') },
			{ json: 'required', js: 'required', typ: a(r('AnimalAccessoriesRequired')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	CellPhonesProperties: o(
		[
			{ json: 'shortDescription', js: 'shortDescription', typ: r('Sku') },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: r('FabricCareInstructions') },
			{ json: 'brand', js: 'brand', typ: r('Sku') },
			{ json: 'manufacturer', js: 'manufacturer', typ: r('Sku') },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: r('Sku') },
			{ json: 'modelNumber', js: 'modelNumber', typ: r('Sku') },
			{ json: 'multipackQuantity', js: 'multipackQuantity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'countPerPack', js: 'countPerPack', typ: r('MinimumAdvertisedPrice') },
			{ json: 'count', js: 'count', typ: r('Sku') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: r('Sku') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: r('FabricCareInstructions') },
			{ json: 'color', js: 'color', typ: r('Sku') },
			{ json: 'modelName', js: 'modelName', typ: r('Sku') },
			{ json: 'screenSize', js: 'screenSize', typ: r('ShippingWeight') },
			{ json: 'mobileOperatingSystem', js: 'mobileOperatingSystem', typ: r('FabricCareInstructions') },
			{ json: 'cellularNetworkTechnology', js: 'cellularNetworkTechnology', typ: r('Sku') },
			{ json: 'cellPhoneServiceProvider', js: 'cellPhoneServiceProvider', typ: r('Sku') },
			{ json: 'hardDriveCapacity', js: 'hardDriveCapacity', typ: r('ShippingWeight') },
			{ json: 'frontFacingCameraMegapixels', js: 'frontFacingCameraMegapixels', typ: r('ShippingWeight') },
			{ json: 'rearCameraMegapixels', js: 'rearCameraMegapixels', typ: r('ShippingWeight') },
			{ json: 'cellPhoneType', js: 'cellPhoneType', typ: r('Sku') },
			{ json: 'isProp65WarningRequired', js: 'isProp65WarningRequired', typ: r('ProcessMode') },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: r('Sku') },
			{ json: 'batteryTechnologyType', js: 'batteryTechnologyType', typ: r('ProcessMode') },
			{ json: 'hasWarranty', js: 'hasWarranty', typ: r('ProcessMode') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: r('Sku') },
			{ json: 'warrantyText', js: 'warrantyText', typ: r('Sku') },
			{ json: 'hasSignalBooster', js: 'hasSignalBooster', typ: r('ProcessMode') },
			{ json: 'variantGroupId', js: 'variantGroupId', typ: r('Sku') },
			{ json: 'variantAttributeNames', js: 'variantAttributeNames', typ: r('CountryOfOriginComponents') },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: r('ProcessMode') },
			{ json: 'swatchImages', js: 'swatchImages', typ: r('SwatchImages') },
			{ json: 'connections', js: 'connections', typ: r('FabricCareInstructions') },
			{ json: 'memoryCardType', js: 'memoryCardType', typ: r('FabricCareInstructions') },
			{ json: 'hasFlash', js: 'hasFlash', typ: r('ProcessMode') },
			{ json: 'batteryLife', js: 'batteryLife', typ: r('ShippingWeight') },
			{ json: 'talkTime', js: 'talkTime', typ: r('ShippingWeight') },
			{ json: 'standbyTime', js: 'standbyTime', typ: r('ShippingWeight') },
			{ json: 'wirelessTechnologies', js: 'wirelessTechnologies', typ: r('FabricCareInstructions') },
			{ json: 'features', js: 'features', typ: r('FabricCareInstructions') },
			{ json: 'keywords', js: 'keywords', typ: r('Sku') },
		],
		false
	),
	ComputerComponents: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('ComputerComponentsProperties') },
			{ json: 'required', js: 'required', typ: a(r('AnimalAccessoriesRequired')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	ComputerComponentsProperties: o(
		[
			{ json: 'shortDescription', js: 'shortDescription', typ: r('Sku') },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: r('FabricCareInstructions') },
			{ json: 'brand', js: 'brand', typ: r('Sku') },
			{ json: 'manufacturer', js: 'manufacturer', typ: r('Sku') },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: r('Sku') },
			{ json: 'modelNumber', js: 'modelNumber', typ: r('Sku') },
			{ json: 'multipackQuantity', js: 'multipackQuantity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'countPerPack', js: 'countPerPack', typ: r('MinimumAdvertisedPrice') },
			{ json: 'pieceCount', js: 'pieceCount', typ: r('MinimumAdvertisedPrice') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: r('Sku') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: r('FabricCareInstructions') },
			{ json: 'hardDriveCapacity', js: 'hardDriveCapacity', typ: r('ShippingWeight') },
			{ json: 'ramMemory', js: 'ramMemory', typ: r('ShippingWeight') },
			{ json: 'maximumRamSupported', js: 'maximumRamSupported', typ: r('ShippingWeight') },
			{ json: 'internalExternal', js: 'internalExternal', typ: r('ProcessMode') },
			{ json: 'processorSpeed', js: 'processorSpeed', typ: r('ShippingWeight') },
			{ json: 'processorType', js: 'processorType', typ: r('FabricCareInstructions') },
			{ json: 'isProp65WarningRequired', js: 'isProp65WarningRequired', typ: r('ProcessMode') },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: r('Sku') },
			{ json: 'hasWarranty', js: 'hasWarranty', typ: r('ProcessMode') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: r('Sku') },
			{ json: 'warrantyText', js: 'warrantyText', typ: r('Sku') },
			{ json: 'variantGroupId', js: 'variantGroupId', typ: r('Sku') },
			{ json: 'variantAttributeNames', js: 'variantAttributeNames', typ: r('CountryOfOriginComponents') },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: r('ProcessMode') },
			{ json: 'swatchImages', js: 'swatchImages', typ: r('SwatchImages') },
			{ json: 'connections', js: 'connections', typ: r('FabricCareInstructions') },
			{ json: 'isCordless', js: 'isCordless', typ: r('ProcessMode') },
			{ json: 'memoryCardType', js: 'memoryCardType', typ: r('FabricCareInstructions') },
			{ json: 'RAMSpeed', js: 'RAMSpeed', typ: r('ShippingWeight') },
			{ json: 'cpuSocketType', js: 'cpuSocketType', typ: r('FabricCareInstructions') },
			{ json: 'motherboardFormFactor', js: 'motherboardFormFactor', typ: r('FabricCareInstructions') },
			{ json: 'wirelessTechnologies', js: 'wirelessTechnologies', typ: r('FabricCareInstructions') },
			{ json: 'dataIntegrityCheck', js: 'dataIntegrityCheck', typ: r('ProcessMode') },
			{ json: 'numberOfSpeakers', js: 'numberOfSpeakers', typ: r('MinimumAdvertisedPrice') },
			{ json: 'rackSize', js: 'rackSize', typ: r('Sku') },
			{ json: 'RAIDlevel', js: 'RAIDlevel', typ: r('ProcessMode') },
			{ json: 'features', js: 'features', typ: r('FabricCareInstructions') },
			{ json: 'keywords', js: 'keywords', typ: r('Sku') },
			{ json: 'numberOfChannels', js: 'numberOfChannels', typ: r('Sku') },
			{ json: 'count', js: 'count', typ: r('Sku') },
		],
		false
	),
	Computers: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('ComputersProperties') },
			{ json: 'required', js: 'required', typ: a(r('AnimalAccessoriesRequired')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	ComputersProperties: o(
		[
			{ json: 'shortDescription', js: 'shortDescription', typ: r('Sku') },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: r('FabricCareInstructions') },
			{ json: 'brand', js: 'brand', typ: r('Sku') },
			{ json: 'manufacturer', js: 'manufacturer', typ: r('Sku') },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: r('Sku') },
			{ json: 'modelNumber', js: 'modelNumber', typ: r('Sku') },
			{ json: 'multipackQuantity', js: 'multipackQuantity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'countPerPack', js: 'countPerPack', typ: r('MinimumAdvertisedPrice') },
			{ json: 'count', js: 'count', typ: r('Sku') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: r('Sku') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: r('FabricCareInstructions') },
			{ json: 'color', js: 'color', typ: r('Sku') },
			{ json: 'colorCategory', js: 'colorCategory', typ: r('CountryOfOriginComponents') },
			{ json: 'screenSize', js: 'screenSize', typ: r('ShippingWeight') },
			{ json: 'resolution', js: 'resolution', typ: r('Sku') },
			{ json: 'displayTechnology', js: 'displayTechnology', typ: r('Sku') },
			{ json: 'hardDriveCapacity', js: 'hardDriveCapacity', typ: r('ShippingWeight') },
			{ json: 'ramMemory', js: 'ramMemory', typ: r('ShippingWeight') },
			{ json: 'maximumRamSupported', js: 'maximumRamSupported', typ: r('ShippingWeight') },
			{ json: 'internalExternal', js: 'internalExternal', typ: r('ProcessMode') },
			{ json: 'processorSpeed', js: 'processorSpeed', typ: r('ShippingWeight') },
			{ json: 'processorType', js: 'processorType', typ: r('FabricCareInstructions') },
			{ json: 'computerStyle', js: 'computerStyle', typ: r('Sku') },
			{ json: 'frontFacingCameraMegapixels', js: 'frontFacingCameraMegapixels', typ: r('ShippingWeight') },
			{ json: 'rearCameraMegapixels', js: 'rearCameraMegapixels', typ: r('ShippingWeight') },
			{ json: 'isProp65WarningRequired', js: 'isProp65WarningRequired', typ: r('ProcessMode') },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: r('Sku') },
			{ json: 'batteryTechnologyType', js: 'batteryTechnologyType', typ: r('ProcessMode') },
			{ json: 'hasWarranty', js: 'hasWarranty', typ: r('ProcessMode') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: r('Sku') },
			{ json: 'warrantyText', js: 'warrantyText', typ: r('Sku') },
			{ json: 'variantGroupId', js: 'variantGroupId', typ: r('Sku') },
			{ json: 'variantAttributeNames', js: 'variantAttributeNames', typ: r('CountryOfOriginComponents') },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: r('ProcessMode') },
			{ json: 'swatchImages', js: 'swatchImages', typ: r('SwatchImages') },
			{ json: 'operatingSystem', js: 'operatingSystem', typ: r('FabricCareInstructions') },
			{ json: 'RAMSpeed', js: 'RAMSpeed', typ: r('ShippingWeight') },
			{ json: 'hasTouchscreen', js: 'hasTouchscreen', typ: r('ProcessMode') },
			{ json: 'connections', js: 'connections', typ: r('FabricCareInstructions') },
			{ json: 'memoryCardType', js: 'memoryCardType', typ: r('FabricCareInstructions') },
			{ json: 'opticalDrive', js: 'opticalDrive', typ: r('Sku') },
			{ json: 'graphicsInformation', js: 'graphicsInformation', typ: r('Sku') },
			{ json: 'formFactor', js: 'formFactor', typ: r('Sku') },
			{ json: 'hasSignalBooster', js: 'hasSignalBooster', typ: r('ProcessMode') },
			{ json: 'wirelessTechnologies', js: 'wirelessTechnologies', typ: r('FabricCareInstructions') },
			{ json: 'batteryLife', js: 'batteryLife', typ: r('ShippingWeight') },
			{ json: 'dataIntegrityCheck', js: 'dataIntegrityCheck', typ: r('ProcessMode') },
			{ json: 'isPortable', js: 'isPortable', typ: r('ProcessMode') },
			{ json: 'features', js: 'features', typ: r('FabricCareInstructions') },
			{ json: 'keywords', js: 'keywords', typ: r('Sku') },
			{ json: 'numberOfChannels', js: 'numberOfChannels', typ: r('Sku') },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: r('FabricCareInstructions') },
			{ json: 'configuration', js: 'configuration', typ: r('Sku') },
			{ json: 'RAIDlevel', js: 'RAIDlevel', typ: r('ProcessMode') },
		],
		false
	),
	ElectronicsAccessories: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('ElectronicsAccessoriesProperties') },
			{ json: 'required', js: 'required', typ: a(r('AnimalAccessoriesRequired')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	ElectronicsAccessoriesProperties: o(
		[
			{ json: 'shortDescription', js: 'shortDescription', typ: r('Sku') },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: r('FabricCareInstructions') },
			{ json: 'brand', js: 'brand', typ: r('Sku') },
			{ json: 'manufacturer', js: 'manufacturer', typ: r('Sku') },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: r('Sku') },
			{ json: 'modelNumber', js: 'modelNumber', typ: r('Sku') },
			{ json: 'multipackQuantity', js: 'multipackQuantity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'countPerPack', js: 'countPerPack', typ: r('MinimumAdvertisedPrice') },
			{ json: 'count', js: 'count', typ: r('Sku') },
			{ json: 'pieceCount', js: 'pieceCount', typ: r('MinimumAdvertisedPrice') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: r('Sku') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: r('FabricCareInstructions') },
			{ json: 'color', js: 'color', typ: r('Sku') },
			{ json: 'colorCategory', js: 'colorCategory', typ: r('CountryOfOriginComponents') },
			{ json: 'size', js: 'size', typ: r('Sku') },
			{ json: 'screenSize', js: 'screenSize', typ: r('ShippingWeight') },
			{ json: 'compatibleBrands', js: 'compatibleBrands', typ: r('FabricCareInstructions') },
			{ json: 'compatibleDevices', js: 'compatibleDevices', typ: r('Sku') },
			{ json: 'assembledProductLength', js: 'assembledProductLength', typ: r('ShippingWeight') },
			{ json: 'assembledProductWidth', js: 'assembledProductWidth', typ: r('ShippingWeight') },
			{ json: 'assembledProductHeight', js: 'assembledProductHeight', typ: r('ShippingWeight') },
			{ json: 'assembledProductWeight', js: 'assembledProductWeight', typ: r('ShippingWeight') },
			{ json: 'isProp65WarningRequired', js: 'isProp65WarningRequired', typ: r('ProcessMode') },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: r('Sku') },
			{ json: 'batteryTechnologyType', js: 'batteryTechnologyType', typ: r('ProcessMode') },
			{ json: 'isChemical', js: 'isChemical', typ: r('ProcessMode') },
			{ json: 'variantGroupId', js: 'variantGroupId', typ: r('Sku') },
			{ json: 'variantAttributeNames', js: 'variantAttributeNames', typ: r('CountryOfOriginComponents') },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: r('ProcessMode') },
			{ json: 'swatchImages', js: 'swatchImages', typ: r('SwatchImages') },
			{ json: 'connections', js: 'connections', typ: r('FabricCareInstructions') },
			{ json: 'memoryCardType', js: 'memoryCardType', typ: r('FabricCareInstructions') },
			{ json: 'opticalDrive', js: 'opticalDrive', typ: r('Sku') },
			{ json: 'tvAndMonitorMountType', js: 'tvAndMonitorMountType', typ: r('Sku') },
			{ json: 'maximumLoadWeight', js: 'maximumLoadWeight', typ: r('ShippingWeight') },
			{ json: 'maximumScreenSize', js: 'maximumScreenSize', typ: r('ShippingWeight') },
			{ json: 'minimumScreenSize', js: 'minimumScreenSize', typ: r('ShippingWeight') },
			{ json: 'recordableMediaFormats', js: 'recordableMediaFormats', typ: r('FabricCareInstructions') },
			{ json: 'headphoneFeatures', js: 'headphoneFeatures', typ: r('FabricCareInstructions') },
			{ json: 'wirelessTechnologies', js: 'wirelessTechnologies', typ: r('FabricCareInstructions') },
			{ json: 'audioFeatures', js: 'audioFeatures', typ: r('FabricCareInstructions') },
			{ json: 'peakAudioPowerCapacity', js: 'peakAudioPowerCapacity', typ: r('ShippingWeight') },
			{ json: 'audioPowerOutput', js: 'audioPowerOutput', typ: r('ShippingWeight') },
			{ json: 'dataTransferRate', js: 'dataTransferRate', typ: r('ShippingWeight') },
			{ json: 'microphoneTechnology', js: 'microphoneTechnology', typ: r('Sku') },
			{ json: 'numberOfSpeakers', js: 'numberOfSpeakers', typ: r('MinimumAdvertisedPrice') },
			{ json: 'mountingPattern', js: 'mountingPattern', typ: r('Sku') },
			{ json: 'movementDetection', js: 'movementDetection', typ: r('Sku') },
			{ json: 'headphoneStyle', js: 'headphoneStyle', typ: r('Sku') },
			{ json: 'features', js: 'features', typ: r('FabricCareInstructions') },
			{ json: 'keywords', js: 'keywords', typ: r('Sku') },
		],
		false
	),
	ElectronicsCables: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('ElectronicsCablesProperties') },
			{ json: 'required', js: 'required', typ: a(r('AnimalAccessoriesRequired')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	ElectronicsCablesProperties: o(
		[
			{ json: 'shortDescription', js: 'shortDescription', typ: r('Sku') },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: r('FabricCareInstructions') },
			{ json: 'brand', js: 'brand', typ: r('Sku') },
			{ json: 'manufacturer', js: 'manufacturer', typ: r('Sku') },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: r('Sku') },
			{ json: 'modelNumber', js: 'modelNumber', typ: r('Sku') },
			{ json: 'multipackQuantity', js: 'multipackQuantity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'countPerPack', js: 'countPerPack', typ: r('MinimumAdvertisedPrice') },
			{ json: 'count', js: 'count', typ: r('Sku') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: r('Sku') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: r('FabricCareInstructions') },
			{ json: 'color', js: 'color', typ: r('Sku') },
			{ json: 'cableLength', js: 'cableLength', typ: r('ShippingWeight') },
			{ json: 'compatibleDevices', js: 'compatibleDevices', typ: r('Sku') },
			{ json: 'isProp65WarningRequired', js: 'isProp65WarningRequired', typ: r('ProcessMode') },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: r('Sku') },
			{ json: 'batteryTechnologyType', js: 'batteryTechnologyType', typ: r('ProcessMode') },
			{ json: 'variantGroupId', js: 'variantGroupId', typ: r('Sku') },
			{ json: 'variantAttributeNames', js: 'variantAttributeNames', typ: r('CountryOfOriginComponents') },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: r('ProcessMode') },
			{ json: 'swatchImages', js: 'swatchImages', typ: r('SwatchImages') },
			{
				json: 'numberOfTwistedPairsPerCable',
				js: 'numberOfTwistedPairsPerCable',
				typ: r('MinimumAdvertisedPrice'),
			},
			{ json: 'connectorFinish', js: 'connectorFinish', typ: r('Sku') },
			{ json: 'connections', js: 'connections', typ: r('FabricCareInstructions') },
			{ json: 'dataTransferRate', js: 'dataTransferRate', typ: r('ShippingWeight') },
			{ json: 'features', js: 'features', typ: r('FabricCareInstructions') },
			{ json: 'keywords', js: 'keywords', typ: r('Sku') },
			{ json: 'numberOfChannels', js: 'numberOfChannels', typ: r('Sku') },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: r('FabricCareInstructions') },
		],
		false
	),
	ElectronicsOther: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('ElectronicsOtherProperties') },
			{ json: 'required', js: 'required', typ: a(r('AnimalAccessoriesRequired')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	ElectronicsOtherProperties: o(
		[
			{ json: 'shortDescription', js: 'shortDescription', typ: r('Sku') },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: r('FabricCareInstructions') },
			{ json: 'brand', js: 'brand', typ: r('Sku') },
			{ json: 'manufacturer', js: 'manufacturer', typ: r('Sku') },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: r('Sku') },
			{ json: 'modelNumber', js: 'modelNumber', typ: r('Sku') },
			{ json: 'multipackQuantity', js: 'multipackQuantity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'countPerPack', js: 'countPerPack', typ: r('MinimumAdvertisedPrice') },
			{ json: 'count', js: 'count', typ: r('Sku') },
			{ json: 'pieceCount', js: 'pieceCount', typ: r('MinimumAdvertisedPrice') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: r('Sku') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: r('FabricCareInstructions') },
			{ json: 'platform', js: 'platform', typ: r('Sku') },
			{ json: 'assembledProductLength', js: 'assembledProductLength', typ: r('ShippingWeight') },
			{ json: 'assembledProductWidth', js: 'assembledProductWidth', typ: r('ShippingWeight') },
			{ json: 'assembledProductHeight', js: 'assembledProductHeight', typ: r('ShippingWeight') },
			{ json: 'assembledProductWeight', js: 'assembledProductWeight', typ: r('ShippingWeight') },
			{ json: 'isProp65WarningRequired', js: 'isProp65WarningRequired', typ: r('ProcessMode') },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: r('Sku') },
			{ json: 'batteryTechnologyType', js: 'batteryTechnologyType', typ: r('ProcessMode') },
			{ json: 'hasWarranty', js: 'hasWarranty', typ: r('ProcessMode') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: r('Sku') },
			{ json: 'warrantyText', js: 'warrantyText', typ: r('Sku') },
			{ json: 'variantGroupId', js: 'variantGroupId', typ: r('Sku') },
			{ json: 'variantAttributeNames', js: 'variantAttributeNames', typ: r('CountryOfOriginComponents') },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: r('ProcessMode') },
			{ json: 'swatchImages', js: 'swatchImages', typ: r('SwatchImages') },
			{ json: 'color', js: 'color', typ: r('Sku') },
			{ json: 'colorCategory', js: 'colorCategory', typ: r('CountryOfOriginComponents') },
			{ json: 'connections', js: 'connections', typ: r('FabricCareInstructions') },
			{ json: 'isCordless', js: 'isCordless', typ: r('ProcessMode') },
			{ json: 'ageGroup', js: 'ageGroup', typ: r('CountryOfOriginComponents') },
			{ json: 'memoryCardType', js: 'memoryCardType', typ: r('FabricCareInstructions') },
			{ json: 'wirelessTechnologies', js: 'wirelessTechnologies', typ: r('FabricCareInstructions') },
			{ json: 'audioFeatures', js: 'audioFeatures', typ: r('FabricCareInstructions') },
			{ json: 'peakAudioPowerCapacity', js: 'peakAudioPowerCapacity', typ: r('ShippingWeight') },
			{ json: 'audioPowerOutput', js: 'audioPowerOutput', typ: r('ShippingWeight') },
			{ json: 'resolution', js: 'resolution', typ: r('Sku') },
			{ json: 'dataTransferRate', js: 'dataTransferRate', typ: r('ShippingWeight') },
			{ json: 'streamingServices', js: 'streamingServices', typ: r('Sku') },
			{ json: 'speakerDriver', js: 'speakerDriver', typ: r('Sku') },
			{ json: 'numberOfSpeakers', js: 'numberOfSpeakers', typ: r('MinimumAdvertisedPrice') },
			{ json: 'impedance', js: 'impedance', typ: r('Impedance') },
			{ json: 'microphoneTechnology', js: 'microphoneTechnology', typ: r('Sku') },
			{ json: 'digitalAudioFileFormat', js: 'digitalAudioFileFormat', typ: r('FabricCareInstructions') },
			{ json: 'isPortable', js: 'isPortable', typ: r('ProcessMode') },
			{ json: 'features', js: 'features', typ: r('FabricCareInstructions') },
			{ json: 'keywords', js: 'keywords', typ: r('Sku') },
			{ json: 'numberOfChannels', js: 'numberOfChannels', typ: r('Sku') },
			{ json: 'supportedMediaFormats', js: 'supportedMediaFormats', typ: r('Sku') },
		],
		false
	),
	Impedance: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'title', js: 'title', typ: '' },
			{ json: 'properties', js: 'properties', typ: r('ImpedanceProperties') },
			{ json: 'required', js: 'required', typ: a(r('ShippingWeightRequired')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	ImpedanceProperties: o(
		[
			{ json: 'unit', js: 'unit', typ: r('ShippingOverrideActionClass') },
			{ json: 'measure', js: 'measure', typ: r('Measure') },
		],
		false
	),
	Measure: o(
		[
			{ json: 'type', js: 'type', typ: r('PurpleType') },
			{ json: 'minLength', js: 'minLength', typ: 0 },
		],
		false
	),
	PrintersScannersAndImaging: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('PrintersScannersAndImagingProperties') },
			{ json: 'required', js: 'required', typ: a(r('AnimalAccessoriesRequired')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	PrintersScannersAndImagingProperties: o(
		[
			{ json: 'shortDescription', js: 'shortDescription', typ: r('Sku') },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: r('FabricCareInstructions') },
			{ json: 'brand', js: 'brand', typ: r('Sku') },
			{ json: 'manufacturer', js: 'manufacturer', typ: r('Sku') },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: r('Sku') },
			{ json: 'modelNumber', js: 'modelNumber', typ: r('Sku') },
			{ json: 'multipackQuantity', js: 'multipackQuantity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'countPerPack', js: 'countPerPack', typ: r('MinimumAdvertisedPrice') },
			{ json: 'count', js: 'count', typ: r('Sku') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: r('Sku') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: r('FabricCareInstructions') },
			{ json: 'monochromeColor', js: 'monochromeColor', typ: r('ProcessMode') },
			{ json: 'printingTechnology', js: 'printingTechnology', typ: r('Sku') },
			{ json: 'has3dCapabilities', js: 'has3dCapabilities', typ: r('ProcessMode') },
			{ json: 'assembledProductLength', js: 'assembledProductLength', typ: r('ShippingWeight') },
			{ json: 'assembledProductWidth', js: 'assembledProductWidth', typ: r('ShippingWeight') },
			{ json: 'assembledProductHeight', js: 'assembledProductHeight', typ: r('ShippingWeight') },
			{ json: 'assembledProductWeight', js: 'assembledProductWeight', typ: r('ShippingWeight') },
			{ json: 'isProp65WarningRequired', js: 'isProp65WarningRequired', typ: r('ProcessMode') },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: r('Sku') },
			{ json: 'batteryTechnologyType', js: 'batteryTechnologyType', typ: r('ProcessMode') },
			{ json: 'hasWarranty', js: 'hasWarranty', typ: r('ProcessMode') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: r('Sku') },
			{ json: 'warrantyText', js: 'warrantyText', typ: r('Sku') },
			{ json: 'variantGroupId', js: 'variantGroupId', typ: r('Sku') },
			{ json: 'variantAttributeNames', js: 'variantAttributeNames', typ: r('CountryOfOriginComponents') },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: r('ProcessMode') },
			{ json: 'swatchImages', js: 'swatchImages', typ: r('SwatchImages') },
			{ json: 'color', js: 'color', typ: r('Sku') },
			{ json: 'connections', js: 'connections', typ: r('FabricCareInstructions') },
			{ json: 'memoryCardType', js: 'memoryCardType', typ: r('FabricCareInstructions') },
			{ json: 'hasAutomaticDocumentFeeder', js: 'hasAutomaticDocumentFeeder', typ: r('ProcessMode') },
			{ json: 'hasAutomaticTwoSidedPrinting', js: 'hasAutomaticTwoSidedPrinting', typ: r('ProcessMode') },
			{ json: 'colorPagesPerMinute', js: 'colorPagesPerMinute', typ: r('ShippingWeight') },
			{ json: 'monochromePagesPerMinute', js: 'monochromePagesPerMinute', typ: r('ShippingWeight') },
			{ json: 'maximumDocumentSize', js: 'maximumDocumentSize', typ: r('Sku') },
			{ json: 'maximumPrintResolution', js: 'maximumPrintResolution', typ: r('ShippingWeight') },
			{ json: 'maximumScannerResolution', js: 'maximumScannerResolution', typ: r('ShippingWeight') },
			{ json: 'wirelessTechnologies', js: 'wirelessTechnologies', typ: r('FabricCareInstructions') },
			{ json: 'features', js: 'features', typ: r('FabricCareInstructions') },
			{ json: 'keywords', js: 'keywords', typ: r('Sku') },
		],
		false
	),
	Software: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('SoftwareProperties') },
			{ json: 'required', js: 'required', typ: a(r('AnimalAccessoriesRequired')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	SoftwareProperties: o(
		[
			{ json: 'shortDescription', js: 'shortDescription', typ: r('Sku') },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: r('FabricCareInstructions') },
			{ json: 'brand', js: 'brand', typ: r('Sku') },
			{ json: 'manufacturer', js: 'manufacturer', typ: r('Sku') },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: r('Sku') },
			{ json: 'modelNumber', js: 'modelNumber', typ: r('Sku') },
			{ json: 'multipackQuantity', js: 'multipackQuantity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'countPerPack', js: 'countPerPack', typ: r('MinimumAdvertisedPrice') },
			{ json: 'count', js: 'count', typ: r('Sku') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: r('Sku') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: r('FabricCareInstructions') },
			{ json: 'softwareCategory', js: 'softwareCategory', typ: r('FabricCareInstructions') },
			{ json: 'isProp65WarningRequired', js: 'isProp65WarningRequired', typ: r('ProcessMode') },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: r('Sku') },
			{ json: 'variantGroupId', js: 'variantGroupId', typ: r('Sku') },
			{ json: 'variantAttributeNames', js: 'variantAttributeNames', typ: r('CountryOfOriginComponents') },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: r('ProcessMode') },
			{ json: 'swatchImages', js: 'swatchImages', typ: r('SwatchImages') },
			{ json: 'operatingSystem', js: 'operatingSystem', typ: r('FabricCareInstructions') },
			{ json: 'systemRequirements', js: 'systemRequirements', typ: r('FabricCareInstructions') },
			{ json: 'version', js: 'version', typ: r('Sku') },
			{ json: 'releaseDate', js: 'releaseDate', typ: r('FeedDateClass') },
			{ json: 'numberOfUsers', js: 'numberOfUsers', typ: r('MinimumAdvertisedPrice') },
			{ json: 'requiredPeripherals', js: 'requiredPeripherals', typ: r('Sku') },
			{ json: 'educationalFocus', js: 'educationalFocus', typ: r('FabricCareInstructions') },
			{ json: 'digitalFileFormat', js: 'digitalFileFormat', typ: r('Sku') },
			{ json: 'physicalMediaFormat', js: 'physicalMediaFormat', typ: r('Sku') },
			{ json: 'features', js: 'features', typ: r('FabricCareInstructions') },
			{ json: 'keywords', js: 'keywords', typ: r('Sku') },
		],
		false
	),
	TVsAndVideoDisplays: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('TVsAndVideoDisplaysProperties') },
			{ json: 'required', js: 'required', typ: a(r('AnimalAccessoriesRequired')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	TVsAndVideoDisplaysProperties: o(
		[
			{ json: 'shortDescription', js: 'shortDescription', typ: r('Sku') },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: r('FabricCareInstructions') },
			{ json: 'brand', js: 'brand', typ: r('Sku') },
			{ json: 'manufacturer', js: 'manufacturer', typ: r('Sku') },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: r('Sku') },
			{ json: 'modelNumber', js: 'modelNumber', typ: r('Sku') },
			{ json: 'multipackQuantity', js: 'multipackQuantity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'countPerPack', js: 'countPerPack', typ: r('MinimumAdvertisedPrice') },
			{ json: 'count', js: 'count', typ: r('Sku') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: r('Sku') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: r('FabricCareInstructions') },
			{ json: 'resolution', js: 'resolution', typ: r('Sku') },
			{ json: 'screenSize', js: 'screenSize', typ: r('ShippingWeight') },
			{ json: 'displayTechnology', js: 'displayTechnology', typ: r('Sku') },
			{ json: 'televisionType', js: 'televisionType', typ: r('FabricCareInstructions') },
			{ json: 'assembledProductHeight', js: 'assembledProductHeight', typ: r('ShippingWeight') },
			{ json: 'assembledProductLength', js: 'assembledProductLength', typ: r('ShippingWeight') },
			{ json: 'assembledProductWidth', js: 'assembledProductWidth', typ: r('ShippingWeight') },
			{ json: 'assembledProductWeight', js: 'assembledProductWeight', typ: r('ShippingWeight') },
			{ json: 'isProp65WarningRequired', js: 'isProp65WarningRequired', typ: r('ProcessMode') },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: r('Sku') },
			{ json: 'batteryTechnologyType', js: 'batteryTechnologyType', typ: r('ProcessMode') },
			{ json: 'hasWarranty', js: 'hasWarranty', typ: r('ProcessMode') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: r('Sku') },
			{ json: 'warrantyText', js: 'warrantyText', typ: r('Sku') },
			{ json: 'variantGroupId', js: 'variantGroupId', typ: r('Sku') },
			{ json: 'variantAttributeNames', js: 'variantAttributeNames', typ: r('CountryOfOriginComponents') },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: r('ProcessMode') },
			{ json: 'swatchImages', js: 'swatchImages', typ: r('SwatchImages') },
			{ json: 'color', js: 'color', typ: r('Sku') },
			{ json: 'colorCategory', js: 'colorCategory', typ: r('CountryOfOriginComponents') },
			{ json: 'connections', js: 'connections', typ: r('FabricCareInstructions') },
			{ json: 'memoryCardType', js: 'memoryCardType', typ: r('FabricCareInstructions') },
			{ json: 'hasTouchscreen', js: 'hasTouchscreen', typ: r('ProcessMode') },
			{ json: 'inputsAndOutputs', js: 'inputsAndOutputs', typ: r('InputsAndOutputs') },
			{ json: 'isEnergyStarCertified', js: 'isEnergyStarCertified', typ: r('ProcessMode') },
			{ json: 'aspectRatio', js: 'aspectRatio', typ: r('Sku') },
			{ json: 'nativeResolution', js: 'nativeResolution', typ: r('Sku') },
			{ json: 'maximumContrastRatio', js: 'maximumContrastRatio', typ: r('Sku') },
			{ json: 'refreshRate', js: 'refreshRate', typ: r('ShippingWeight') },
			{ json: 'responseTime', js: 'responseTime', typ: r('ShippingWeight') },
			{ json: 'backlightType', js: 'backlightType', typ: r('Sku') },
			{ json: 'hasIntegratedSpeakers', js: 'hasIntegratedSpeakers', typ: r('ProcessMode') },
			{ json: 'wirelessTechnologies', js: 'wirelessTechnologies', typ: r('FabricCareInstructions') },
			{ json: 'audioFeatures', js: 'audioFeatures', typ: r('FabricCareInstructions') },
			{ json: 'peakAudioPowerCapacity', js: 'peakAudioPowerCapacity', typ: r('ShippingWeight') },
			{ json: 'audioPowerOutput', js: 'audioPowerOutput', typ: r('ShippingWeight') },
			{ json: 'features', js: 'features', typ: r('FabricCareInstructions') },
			{ json: 'keywords', js: 'keywords', typ: r('Sku') },
			{ json: 'streamingServices', js: 'streamingServices', typ: r('Sku') },
			{ json: 'mountingPattern', js: 'mountingPattern', typ: r('Sku') },
		],
		false
	),
	InputsAndOutputs: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('CountryOfOriginComponentsType') },
			{ json: 'title', js: 'title', typ: '' },
			{ json: 'items', js: 'items', typ: r('InputsAndOutputsItems') },
			{ json: 'minItems', js: 'minItems', typ: 0 },
		],
		false
	),
	InputsAndOutputsItems: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('IndecentProperties') },
			{ json: 'required', js: 'required', typ: a('') },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	IndecentProperties: o(
		[
			{ json: 'inputOutputType', js: 'inputOutputType', typ: r('Sku') },
			{ json: 'inputOutputQuantity', js: 'inputOutputQuantity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'inputOutputDirection', js: 'inputOutputDirection', typ: r('ProcessMode') },
		],
		false
	),
	VideoGames: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('VideoGamesProperties') },
			{ json: 'required', js: 'required', typ: a('') },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	VideoGamesProperties: o(
		[
			{ json: 'shortDescription', js: 'shortDescription', typ: r('Sku') },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: r('FabricCareInstructions') },
			{ json: 'manufacturer', js: 'manufacturer', typ: r('Sku') },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: r('Sku') },
			{ json: 'modelNumber', js: 'modelNumber', typ: r('Sku') },
			{ json: 'multipackQuantity', js: 'multipackQuantity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'countPerPack', js: 'countPerPack', typ: r('MinimumAdvertisedPrice') },
			{ json: 'count', js: 'count', typ: r('Sku') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: r('Sku') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: r('FabricCareInstructions') },
			{ json: 'platform', js: 'platform', typ: r('Sku') },
			{ json: 'videoGameGenre', js: 'videoGameGenre', typ: r('CountryOfOriginComponents') },
			{ json: 'esrbRating', js: 'esrbRating', typ: r('ProcessMode') },
			{ json: 'variantGroupId', js: 'variantGroupId', typ: r('Sku') },
			{ json: 'variantAttributeNames', js: 'variantAttributeNames', typ: r('CountryOfOriginComponents') },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: r('ProcessMode') },
			{ json: 'swatchImages', js: 'swatchImages', typ: r('SwatchImages') },
			{ json: 'ratingReason', js: 'ratingReason', typ: r('Sku') },
			{ json: 'sport', js: 'sport', typ: r('Sku') },
			{ json: 'edition', js: 'edition', typ: r('Sku') },
			{ json: 'releaseDate', js: 'releaseDate', typ: r('FeedDateClass') },
			{ json: 'ageGroup', js: 'ageGroup', typ: r('CountryOfOriginComponents') },
			{ json: 'videoGameCollection', js: 'videoGameCollection', typ: r('Sku') },
			{ json: 'targetAudience', js: 'targetAudience', typ: r('FabricCareInstructions') },
			{ json: 'isOnlineMultiplayerAvailable', js: 'isOnlineMultiplayerAvailable', typ: r('ProcessMode') },
			{ json: 'isDownloadableContentAvailable', js: 'isDownloadableContentAvailable', typ: r('ProcessMode') },
			{ json: 'requiredPeripherals', js: 'requiredPeripherals', typ: r('Sku') },
			{ json: 'physicalMediaFormat', js: 'physicalMediaFormat', typ: r('Sku') },
			{ json: 'sportsLeague', js: 'sportsLeague', typ: r('Sku') },
			{ json: 'sportsTeam', js: 'sportsTeam', typ: r('Sku') },
			{ json: 'athlete', js: 'athlete', typ: r('Sku') },
			{ json: 'autographedBy', js: 'autographedBy', typ: r('Sku') },
			{ json: 'features', js: 'features', typ: r('FabricCareInstructions') },
			{ json: 'keywords', js: 'keywords', typ: r('Sku') },
			{ json: 'numberOfChannels', js: 'numberOfChannels', typ: r('Sku') },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: r('FabricCareInstructions') },
		],
		false
	),
	VideoProjectors: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('VideoProjectorsProperties') },
			{ json: 'required', js: 'required', typ: a(r('AnimalAccessoriesRequired')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	VideoProjectorsProperties: o(
		[
			{ json: 'shortDescription', js: 'shortDescription', typ: r('Sku') },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: r('FabricCareInstructions') },
			{ json: 'brand', js: 'brand', typ: r('Sku') },
			{ json: 'manufacturer', js: 'manufacturer', typ: r('Sku') },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: r('Sku') },
			{ json: 'modelNumber', js: 'modelNumber', typ: r('Sku') },
			{ json: 'multipackQuantity', js: 'multipackQuantity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'countPerPack', js: 'countPerPack', typ: r('MinimumAdvertisedPrice') },
			{ json: 'count', js: 'count', typ: r('Sku') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: r('Sku') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: r('FabricCareInstructions') },
			{ json: 'resolution', js: 'resolution', typ: r('Sku') },
			{ json: 'displayTechnology', js: 'displayTechnology', typ: r('Sku') },
			{ json: 'screenSize', js: 'screenSize', typ: r('ShippingWeight') },
			{ json: 'brightness', js: 'brightness', typ: r('ShippingWeight') },
			{ json: 'aspectRatio', js: 'aspectRatio', typ: r('Sku') },
			{ json: 'throwRatio', js: 'throwRatio', typ: r('Sku') },
			{ json: 'has3dCapabilities', js: 'has3dCapabilities', typ: r('ProcessMode') },
			{ json: 'assembledProductHeight', js: 'assembledProductHeight', typ: r('ShippingWeight') },
			{ json: 'assembledProductLength', js: 'assembledProductLength', typ: r('ShippingWeight') },
			{ json: 'assembledProductWeight', js: 'assembledProductWeight', typ: r('ShippingWeight') },
			{ json: 'assembledProductWidth', js: 'assembledProductWidth', typ: r('ShippingWeight') },
			{ json: 'hasBatteries', js: 'hasBatteries', typ: r('ProcessMode') },
			{ json: 'batteryTechnologyType', js: 'batteryTechnologyType', typ: r('ProcessMode') },
			{ json: 'variantGroupId', js: 'variantGroupId', typ: r('Sku') },
			{ json: 'variantAttributeNames', js: 'variantAttributeNames', typ: r('CountryOfOriginComponents') },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: r('ProcessMode') },
			{ json: 'swatchImages', js: 'swatchImages', typ: r('SwatchImages') },
			{ json: 'inputsAndOutputs', js: 'inputsAndOutputs', typ: r('InputsAndOutputs') },
			{ json: 'maximumContrastRatio', js: 'maximumContrastRatio', typ: r('Sku') },
			{ json: 'lampLife', js: 'lampLife', typ: r('ShippingWeight') },
			{ json: 'hasIntegratedSpeakers', js: 'hasIntegratedSpeakers', typ: r('ProcessMode') },
			{ json: 'wirelessTechnologies', js: 'wirelessTechnologies', typ: r('FabricCareInstructions') },
			{ json: 'nativeResolution', js: 'nativeResolution', typ: r('Sku') },
			{ json: 'features', js: 'features', typ: r('FabricCareInstructions') },
			{ json: 'keywords', js: 'keywords', typ: r('Sku') },
		],
		false
	),
	FoodAndBeverageCategory: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'title', js: 'title', typ: '' },
			{ json: 'properties', js: 'properties', typ: r('FoodAndBeverageCategoryProperties') },
			{ json: 'oneOf', js: 'oneOf', typ: a(r('OneOf')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	FoodAndBeverageCategoryProperties: o(
		[
			{ json: 'AlcoholicBeverages', js: 'AlcoholicBeverages', typ: r('AlcoholicBeverages') },
			{ json: 'FoodAndBeverage', js: 'FoodAndBeverage', typ: r('BabyFood') },
		],
		false
	),
	AlcoholicBeverages: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('AlcoholicBeveragesProperties') },
			{ json: 'required', js: 'required', typ: a(r('AnimalAccessoriesRequired')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	AlcoholicBeveragesProperties: o(
		[
			{ json: 'shortDescription', js: 'shortDescription', typ: r('Sku') },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: r('FabricCareInstructions') },
			{ json: 'brand', js: 'brand', typ: r('Sku') },
			{ json: 'manufacturer', js: 'manufacturer', typ: r('Sku') },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: r('Sku') },
			{ json: 'modelNumber', js: 'modelNumber', typ: r('Sku') },
			{ json: 'multipackQuantity', js: 'multipackQuantity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'countPerPack', js: 'countPerPack', typ: r('MinimumAdvertisedPrice') },
			{ json: 'count', js: 'count', typ: r('Sku') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: r('Sku') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: r('FabricCareInstructions') },
			{ json: 'flavor', js: 'flavor', typ: r('Sku') },
			{ json: 'size', js: 'size', typ: r('Sku') },
			{ json: 'variantGroupId', js: 'variantGroupId', typ: r('Sku') },
			{ json: 'variantAttributeNames', js: 'variantAttributeNames', typ: r('CountryOfOriginComponents') },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: r('ProcessMode') },
			{ json: 'swatchImages', js: 'swatchImages', typ: r('SwatchImages') },
			{ json: 'isProp65WarningRequired', js: 'isProp65WarningRequired', typ: r('ProcessMode') },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: r('Sku') },
			{ json: 'hasExpiration', js: 'hasExpiration', typ: r('ProcessMode') },
			{ json: 'hasPricePerUnit', js: 'hasPricePerUnit', typ: r('ProcessMode') },
			{ json: 'pricePerUnitQuantity', js: 'pricePerUnitQuantity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'pricePerUnitUom', js: 'pricePerUnitUom', typ: r('ProcessMode') },
			{ json: 'hasGMOs', js: 'hasGMOs', typ: r('ProcessMode') },
			{ json: 'isNutritionFactsLabelRequired', js: 'isNutritionFactsLabelRequired', typ: r('ProcessMode') },
			{ json: 'nutritionFactsLabel', js: 'nutritionFactsLabel', typ: r('Sku') },
			{ json: 'nutritionIngredientsImage', js: 'nutritionIngredientsImage', typ: r('Sku') },
			{ json: 'alcoholContentByVolume', js: 'alcoholContentByVolume', typ: r('Sku') },
			{ json: 'alcoholProof', js: 'alcoholProof', typ: r('Sku') },
			{ json: 'alcoholClassAndType', js: 'alcoholClassAndType', typ: r('Sku') },
			{ json: 'neutralSpiritsColoringAndFlavoring', js: 'neutralSpiritsColoringAndFlavoring', typ: r('Sku') },
			{ json: 'wineAppellation', js: 'wineAppellation', typ: r('Sku') },
			{ json: 'wineVarietal', js: 'wineVarietal', typ: r('Sku') },
			{ json: 'vintage', js: 'vintage', typ: r('MinimumAdvertisedPrice') },
			{ json: 'isNonGrape', js: 'isNonGrape', typ: r('ProcessMode') },
			{ json: 'isEstateBottled', js: 'isEstateBottled', typ: r('ProcessMode') },
			{ json: 'containsSulfites', js: 'containsSulfites', typ: r('ProcessMode') },
			{ json: 'timeAged', js: 'timeAged', typ: r('ShippingWeight') },
			{ json: 'ingredients', js: 'ingredients', typ: r('Sku') },
			{ json: 'containerType', js: 'containerType', typ: r('FabricCareInstructions') },
		],
		false
	),
	FootwearCategory: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'title', js: 'title', typ: '' },
			{ json: 'properties', js: 'properties', typ: r('FootwearCategoryProperties') },
			{ json: 'oneOf', js: 'oneOf', typ: a(r('OneOf')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	FootwearCategoryProperties: o([{ json: 'Footwear', js: 'Footwear', typ: r('Footwear') }], false),
	Footwear: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('FootwearProperties') },
			{ json: 'required', js: 'required', typ: a(r('AnimalAccessoriesRequired')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	FootwearProperties: o(
		[
			{ json: 'shortDescription', js: 'shortDescription', typ: r('Sku') },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: r('FabricCareInstructions') },
			{ json: 'brand', js: 'brand', typ: r('Sku') },
			{ json: 'manufacturer', js: 'manufacturer', typ: r('Sku') },
			{ json: 'modelNumber', js: 'modelNumber', typ: r('Sku') },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: r('Sku') },
			{ json: 'multipackQuantity', js: 'multipackQuantity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'countPerPack', js: 'countPerPack', typ: r('MinimumAdvertisedPrice') },
			{ json: 'count', js: 'count', typ: r('Sku') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: r('Sku') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: r('FabricCareInstructions') },
			{ json: 'color', js: 'color', typ: r('Sku') },
			{ json: 'colorCategory', js: 'colorCategory', typ: r('CountryOfOriginComponents') },
			{ json: 'size', js: 'size', typ: r('Sku') },
			{ json: 'shoeSize', js: 'shoeSize', typ: r('Sku') },
			{ json: 'pattern', js: 'pattern', typ: r('Sku') },
			{ json: 'material', js: 'material', typ: r('Sku') },
			{ json: 'gender', js: 'gender', typ: r('ProcessMode') },
			{ json: 'ageGroup', js: 'ageGroup', typ: r('CountryOfOriginComponents') },
			{ json: 'sport', js: 'sport', typ: r('Sku') },
			{ json: 'shoeWidth', js: 'shoeWidth', typ: r('Sku') },
			{ json: 'heelHeight', js: 'heelHeight', typ: r('ShippingWeight') },
			{ json: 'shoeStyle', js: 'shoeStyle', typ: r('Sku') },
			{ json: 'casualAndDressShoeType', js: 'casualAndDressShoeType', typ: r('Sku') },
			{ json: 'shoeClosure', js: 'shoeClosure', typ: r('Sku') },
			{ json: 'isWaterResistant', js: 'isWaterResistant', typ: r('ProcessMode') },
			{ json: 'isOrthopedic', js: 'isOrthopedic', typ: r('ProcessMode') },
			{ json: 'variantGroupId', js: 'variantGroupId', typ: r('Sku') },
			{ json: 'variantAttributeNames', js: 'variantAttributeNames', typ: r('CountryOfOriginComponents') },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: r('ProcessMode') },
			{ json: 'swatchImages', js: 'swatchImages', typ: r('SwatchImages') },
			{ json: 'isProp65WarningRequired', js: 'isProp65WarningRequired', typ: r('ProcessMode') },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: r('Sku') },
			{ json: 'smallPartsWarnings', js: 'smallPartsWarnings', typ: r('SmallPartsWarnings') },
			{ json: 'batteryTechnologyType', js: 'batteryTechnologyType', typ: r('ProcessMode') },
			{ json: 'requiresTextileActLabeling', js: 'requiresTextileActLabeling', typ: r('ProcessMode') },
			{ json: 'countryOfOriginTextiles', js: 'countryOfOriginTextiles', typ: r('ProcessMode') },
			{ json: 'hasWarranty', js: 'hasWarranty', typ: r('ProcessMode') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: r('Sku') },
			{ json: 'warrantyText', js: 'warrantyText', typ: r('Sku') },
			{ json: 'fabricContent', js: 'fabricContent', typ: r('FabricContent') },
			{ json: 'fabricCareInstructions', js: 'fabricCareInstructions', typ: r('FabricCareInstructions') },
			{ json: 'sportsLeague', js: 'sportsLeague', typ: r('Sku') },
			{ json: 'sportsTeam', js: 'sportsTeam', typ: r('Sku') },
			{ json: 'athlete', js: 'athlete', typ: r('Sku') },
			{ json: 'autographedBy', js: 'autographedBy', typ: r('Sku') },
			{ json: 'character', js: 'character', typ: r('Sku') },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: r('FabricCareInstructions') },
			{ json: 'occasion', js: 'occasion', typ: r('Sku') },
			{ json: 'recommendedLocations', js: 'recommendedLocations', typ: r('FabricCareInstructions') },
			{ json: 'features', js: 'features', typ: r('FabricCareInstructions') },
			{ json: 'keywords', js: 'keywords', typ: r('Sku') },
		],
		false
	),
	FurnitureCategory: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'title', js: 'title', typ: '' },
			{ json: 'properties', js: 'properties', typ: r('FurnitureCategoryProperties') },
			{ json: 'oneOf', js: 'oneOf', typ: a(r('OneOf')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	FurnitureCategoryProperties: o([{ json: 'Furniture', js: 'Furniture', typ: r('Furniture') }], false),
	Furniture: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('FurnitureProperties') },
			{ json: 'required', js: 'required', typ: a('') },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	FurnitureProperties: o(
		[
			{ json: 'pieceCount', js: 'pieceCount', typ: r('MinimumAdvertisedPrice') },
			{ json: 'shortDescription', js: 'shortDescription', typ: r('Sku') },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: r('FabricCareInstructions') },
			{ json: 'brand', js: 'brand', typ: r('Sku') },
			{ json: 'manufacturer', js: 'manufacturer', typ: r('Sku') },
			{ json: 'modelNumber', js: 'modelNumber', typ: r('Sku') },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: r('Sku') },
			{ json: 'multipackQuantity', js: 'multipackQuantity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'countPerPack', js: 'countPerPack', typ: r('MinimumAdvertisedPrice') },
			{ json: 'count', js: 'count', typ: r('Sku') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: r('Sku') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: r('FabricCareInstructions') },
			{ json: 'color', js: 'color', typ: r('Sku') },
			{ json: 'colorCategory', js: 'colorCategory', typ: r('CountryOfOriginComponents') },
			{ json: 'finish', js: 'finish', typ: r('Sku') },
			{ json: 'material', js: 'material', typ: r('Sku') },
			{ json: 'pattern', js: 'pattern', typ: r('Sku') },
			{ json: 'gender', js: 'gender', typ: r('ProcessMode') },
			{ json: 'ageGroup', js: 'ageGroup', typ: r('CountryOfOriginComponents') },
			{ json: 'size', js: 'size', typ: r('Sku') },
			{ json: 'bedSize', js: 'bedSize', typ: r('Sku') },
			{ json: 'homeDecorStyle', js: 'homeDecorStyle', typ: r('Sku') },
			{ json: 'seatingCapacity', js: 'seatingCapacity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'numberOfDrawers', js: 'numberOfDrawers', typ: r('MinimumAdvertisedPrice') },
			{ json: 'numberOfShelves', js: 'numberOfShelves', typ: r('MinimumAdvertisedPrice') },
			{ json: 'collection', js: 'collection', typ: r('Sku') },
			{ json: 'theme', js: 'theme', typ: r('Sku') },
			{ json: 'shape', js: 'shape', typ: r('Sku') },
			{ json: 'diameter', js: 'diameter', typ: r('ShippingWeight') },
			{ json: 'bedStyle', js: 'bedStyle', typ: r('Sku') },
			{ json: 'mountType', js: 'mountType', typ: r('Sku') },
			{ json: 'assembledProductLength', js: 'assembledProductLength', typ: r('ShippingWeight') },
			{ json: 'assembledProductWidth', js: 'assembledProductWidth', typ: r('ShippingWeight') },
			{ json: 'assembledProductHeight', js: 'assembledProductHeight', typ: r('ShippingWeight') },
			{ json: 'assembledProductWeight', js: 'assembledProductWeight', typ: r('ShippingWeight') },
			{ json: 'variantGroupId', js: 'variantGroupId', typ: r('Sku') },
			{ json: 'variantAttributeNames', js: 'variantAttributeNames', typ: r('CountryOfOriginComponents') },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: r('ProcessMode') },
			{ json: 'swatchImages', js: 'swatchImages', typ: r('SwatchImages') },
			{ json: 'isProp65WarningRequired', js: 'isProp65WarningRequired', typ: r('ProcessMode') },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: r('Sku') },
			{ json: 'requiresTextileActLabeling', js: 'requiresTextileActLabeling', typ: r('ProcessMode') },
			{ json: 'countryOfOriginTextiles', js: 'countryOfOriginTextiles', typ: r('ProcessMode') },
			{ json: 'hasWarranty', js: 'hasWarranty', typ: r('ProcessMode') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: r('Sku') },
			{ json: 'warrantyText', js: 'warrantyText', typ: r('Sku') },
			{ json: 'isLightingFactsLabelRequired', js: 'isLightingFactsLabelRequired', typ: r('ProcessMode') },
			{ json: 'lightingFactsLabel', js: 'lightingFactsLabel', typ: r('Sku') },
			{ json: 'isAssemblyRequired', js: 'isAssemblyRequired', typ: r('ProcessMode') },
			{ json: 'assemblyInstructions', js: 'assemblyInstructions', typ: r('Sku') },
			{ json: 'fabricContent', js: 'fabricContent', typ: r('FabricContent') },
			{ json: 'fabricCareInstructions', js: 'fabricCareInstructions', typ: r('FabricCareInstructions') },
			{ json: 'fabricColor', js: 'fabricColor', typ: r('Sku') },
			{ json: 'accentColor', js: 'accentColor', typ: r('Sku') },
			{ json: 'cushionColor', js: 'cushionColor', typ: r('Sku') },
			{ json: 'recommendedUses', js: 'recommendedUses', typ: r('FabricCareInstructions') },
			{ json: 'recommendedRooms', js: 'recommendedRooms', typ: r('FabricCareInstructions') },
			{ json: 'recommendedLocations', js: 'recommendedLocations', typ: r('FabricCareInstructions') },
			{ json: 'mattressFirmness', js: 'mattressFirmness', typ: r('Sku') },
			{ json: 'mattressThickness', js: 'mattressThickness', typ: r('ShippingWeight') },
			{ json: 'pumpIncluded', js: 'pumpIncluded', typ: r('ProcessMode') },
			{ json: 'fillMaterial', js: 'fillMaterial', typ: r('FabricCareInstructions') },
			{ json: 'frameMaterial', js: 'frameMaterial', typ: r('FabricCareInstructions') },
			{ json: 'seatMaterial', js: 'seatMaterial', typ: r('Sku') },
			{ json: 'seatHeight', js: 'seatHeight', typ: r('ShippingWeight') },
			{ json: 'seatBackHeight', js: 'seatBackHeight', typ: r('ShippingWeight') },
			{ json: 'tableHeight', js: 'tableHeight', typ: r('ShippingWeight') },
			{ json: 'topMaterial', js: 'topMaterial', typ: r('Sku') },
			{ json: 'topDimensions', js: 'topDimensions', typ: r('Sku') },
			{ json: 'topFinish', js: 'topFinish', typ: r('Sku') },
			{ json: 'hardwareFinish', js: 'hardwareFinish', typ: r('Sku') },
			{ json: 'baseMaterial', js: 'baseMaterial', typ: r('Sku') },
			{ json: 'baseColor', js: 'baseColor', typ: r('Sku') },
			{ json: 'baseFinish', js: 'baseFinish', typ: r('Sku') },
			{ json: 'doorOpeningStyle', js: 'doorOpeningStyle', typ: r('Sku') },
			{ json: 'doorStyle', js: 'doorStyle', typ: r('Sku') },
			{ json: 'slatWidth', js: 'slatWidth', typ: r('ShippingWeight') },
			{ json: 'numberOfHooks', js: 'numberOfHooks', typ: r('MinimumAdvertisedPrice') },
			{ json: 'headboardStyle', js: 'headboardStyle', typ: r('Sku') },
			{ json: 'frameColor', js: 'frameColor', typ: r('Sku') },
			{ json: 'isAntique', js: 'isAntique', typ: r('ProcessMode') },
			{ json: 'isFoldable', js: 'isFoldable', typ: r('ProcessMode') },
			{ json: 'isInflatable', js: 'isInflatable', typ: r('ProcessMode') },
			{ json: 'isWheeled', js: 'isWheeled', typ: r('ProcessMode') },
			{ json: 'isIndustrial', js: 'isIndustrial', typ: r('ProcessMode') },
			{ json: 'isPowered', js: 'isPowered', typ: r('ProcessMode') },
			{ json: 'powerType', js: 'powerType', typ: r('Sku') },
			{ json: 'character', js: 'character', typ: r('Sku') },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: r('FabricCareInstructions') },
			{ json: 'sportsLeague', js: 'sportsLeague', typ: r('Sku') },
			{ json: 'sportsTeam', js: 'sportsTeam', typ: r('Sku') },
			{ json: 'athlete', js: 'athlete', typ: r('Sku') },
			{ json: 'autographedBy', js: 'autographedBy', typ: r('Sku') },
			{ json: 'features', js: 'features', typ: r('FabricCareInstructions') },
			{ json: 'keywords', js: 'keywords', typ: r('Sku') },
			{ json: 'configuration', js: 'configuration', typ: r('Sku') },
			{ json: 'numberOfPanels', js: 'numberOfPanels', typ: r('MinimumAdvertisedPrice') },
			{ json: 'seatBackStyle', js: 'seatBackStyle', typ: r('Sku') },
		],
		false
	),
	GardenAndPatioCategory: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'title', js: 'title', typ: '' },
			{ json: 'properties', js: 'properties', typ: r('GardenAndPatioCategoryProperties') },
			{ json: 'oneOf', js: 'oneOf', typ: a(r('OneOf')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	GardenAndPatioCategoryProperties: o(
		[
			{ json: 'GrillsAndOutdoorCooking', js: 'GrillsAndOutdoorCooking', typ: r('GrillsAndOutdoorCooking') },
			{ json: 'GardenAndPatio', js: 'GardenAndPatio', typ: r('GardenAndPatio') },
		],
		false
	),
	GardenAndPatio: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('GardenAndPatioProperties') },
			{ json: 'required', js: 'required', typ: a(r('AnimalAccessoriesRequired')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	GardenAndPatioProperties: o(
		[
			{ json: 'shortDescription', js: 'shortDescription', typ: r('Sku') },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: r('FabricCareInstructions') },
			{ json: 'brand', js: 'brand', typ: r('Sku') },
			{ json: 'manufacturer', js: 'manufacturer', typ: r('Sku') },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: r('Sku') },
			{ json: 'modelNumber', js: 'modelNumber', typ: r('Sku') },
			{ json: 'multipackQuantity', js: 'multipackQuantity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'countPerPack', js: 'countPerPack', typ: r('MinimumAdvertisedPrice') },
			{ json: 'count', js: 'count', typ: r('Sku') },
			{ json: 'pieceCount', js: 'pieceCount', typ: r('MinimumAdvertisedPrice') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: r('Sku') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: r('FabricCareInstructions') },
			{ json: 'color', js: 'color', typ: r('Sku') },
			{ json: 'colorCategory', js: 'colorCategory', typ: r('CountryOfOriginComponents') },
			{ json: 'pattern', js: 'pattern', typ: r('Sku') },
			{ json: 'finish', js: 'finish', typ: r('Sku') },
			{ json: 'shape', js: 'shape', typ: r('Sku') },
			{ json: 'size', js: 'size', typ: r('Sku') },
			{ json: 'theme', js: 'theme', typ: r('Sku') },
			{ json: 'assembledProductLength', js: 'assembledProductLength', typ: r('ShippingWeight') },
			{ json: 'assembledProductWidth', js: 'assembledProductWidth', typ: r('ShippingWeight') },
			{ json: 'assembledProductHeight', js: 'assembledProductHeight', typ: r('ShippingWeight') },
			{ json: 'assembledProductWeight', js: 'assembledProductWeight', typ: r('ShippingWeight') },
			{ json: 'variantGroupId', js: 'variantGroupId', typ: r('Sku') },
			{ json: 'variantAttributeNames', js: 'variantAttributeNames', typ: r('CountryOfOriginComponents') },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: r('ProcessMode') },
			{ json: 'swatchImages', js: 'swatchImages', typ: r('SwatchImages') },
			{ json: 'isProp65WarningRequired', js: 'isProp65WarningRequired', typ: r('ProcessMode') },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: r('Sku') },
			{ json: 'batteryTechnologyType', js: 'batteryTechnologyType', typ: r('ProcessMode') },
			{ json: 'requiresTextileActLabeling', js: 'requiresTextileActLabeling', typ: r('ProcessMode') },
			{ json: 'countryOfOriginTextiles', js: 'countryOfOriginTextiles', typ: r('ProcessMode') },
			{ json: 'hasWarranty', js: 'hasWarranty', typ: r('ProcessMode') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: r('Sku') },
			{ json: 'warrantyText', js: 'warrantyText', typ: r('Sku') },
			{ json: 'isLightingFactsLabelRequired', js: 'isLightingFactsLabelRequired', typ: r('ProcessMode') },
			{ json: 'hasFuelContainer', js: 'hasFuelContainer', typ: r('ProcessMode') },
			{ json: 'isAssemblyRequired', js: 'isAssemblyRequired', typ: r('ProcessMode') },
			{ json: 'assemblyInstructions', js: 'assemblyInstructions', typ: r('Sku') },
			{ json: 'isBulk', js: 'isBulk', typ: r('ProcessMode') },
			{ json: 'maximumWeight', js: 'maximumWeight', typ: r('ShippingWeight') },
			{ json: 'coverageArea', js: 'coverageArea', typ: r('ShippingWeight') },
			{ json: 'occasion', js: 'occasion', typ: r('Sku') },
			{ json: 'season', js: 'season', typ: r('Sku') },
			{ json: 'recommendedUses', js: 'recommendedUses', typ: r('FabricCareInstructions') },
			{ json: 'recommendedLocations', js: 'recommendedLocations', typ: r('FabricCareInstructions') },
			{ json: 'fabricContent', js: 'fabricContent', typ: r('FabricContent') },
			{ json: 'material', js: 'material', typ: r('Sku') },
			{ json: 'frameMaterial', js: 'frameMaterial', typ: r('FabricCareInstructions') },
			{ json: 'baseMaterial', js: 'baseMaterial', typ: r('Sku') },
			{ json: 'isAntique', js: 'isAntique', typ: r('ProcessMode') },
			{ json: 'isFoldable', js: 'isFoldable', typ: r('ProcessMode') },
			{ json: 'isWheeled', js: 'isWheeled', typ: r('ProcessMode') },
			{ json: 'isWeatherResistant', js: 'isWeatherResistant', typ: r('ProcessMode') },
			{ json: 'isWaterproof', js: 'isWaterproof', typ: r('ProcessMode') },
			{ json: 'isTearResistant', js: 'isTearResistant', typ: r('ProcessMode') },
			{ json: 'powerType', js: 'powerType', typ: r('Sku') },
			{ json: 'lightBulbType', js: 'lightBulbType', typ: r('Sku') },
			{ json: 'lightBulbColor', js: 'lightBulbColor', typ: r('Sku') },
			{ json: 'volts', js: 'volts', typ: r('ShippingWeight') },
			{ json: 'watts', js: 'watts', typ: r('ShippingWeight') },
			{ json: 'minimumTemperature', js: 'minimumTemperature', typ: r('ShippingWeight') },
			{ json: 'plantCategory', js: 'plantCategory', typ: r('Sku') },
			{ json: 'fuelType', js: 'fuelType', typ: r('Sku') },
			{ json: 'cuttingWidth', js: 'cuttingWidth', typ: r('ShippingWeight') },
			{ json: 'clearingWidth', js: 'clearingWidth', typ: r('ShippingWeight') },
			{ json: 'sprayPatterns', js: 'sprayPatterns', typ: r('Sku') },
			{ json: 'diameter', js: 'diameter', typ: r('ShippingWeight') },
			{ json: 'features', js: 'features', typ: r('FabricCareInstructions') },
			{ json: 'keywords', js: 'keywords', typ: r('Sku') },
			{ json: 'installationType', js: 'installationType', typ: r('Sku') },
			{ json: 'ageGroup', js: 'ageGroup', typ: r('CountryOfOriginComponents') },
			{ json: 'homeDecorStyle', js: 'homeDecorStyle', typ: r('Sku') },
			{ json: 'character', js: 'character', typ: r('Sku') },
			{ json: 'isIndustrial', js: 'isIndustrial', typ: r('ProcessMode') },
			{ json: 'isEnergyStarCertified', js: 'isEnergyStarCertified', typ: r('ProcessMode') },
			{ json: 'hasRadiantHeat', js: 'hasRadiantHeat', typ: r('ProcessMode') },
			{ json: 'flowRate', js: 'flowRate', typ: r('ShippingWeight') },
			{ json: 'hasAutomaticShutoff', js: 'hasAutomaticShutoff', typ: r('ProcessMode') },
			{ json: 'capacity', js: 'capacity', typ: r('Sku') },
			{ json: 'productVolume', js: 'productVolume', typ: r('Sku') },
			{ json: 'cleaningCareAndMaintenance', js: 'cleaningCareAndMaintenance', typ: r('Sku') },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: r('FabricCareInstructions') },
			{ json: 'flooringMaterial', js: 'flooringMaterial', typ: r('Sku') },
			{ json: 'minimumClearance', js: 'minimumClearance', typ: r('ShippingWeight') },
		],
		false
	),
	GrillsAndOutdoorCooking: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('GrillsAndOutdoorCookingProperties') },
			{ json: 'required', js: 'required', typ: a(r('AnimalAccessoriesRequired')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	GrillsAndOutdoorCookingProperties: o(
		[
			{ json: 'hasFuelContainer', js: 'hasFuelContainer', typ: r('ProcessMode') },
			{ json: 'shortDescription', js: 'shortDescription', typ: r('Sku') },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: r('FabricCareInstructions') },
			{ json: 'brand', js: 'brand', typ: r('Sku') },
			{ json: 'manufacturer', js: 'manufacturer', typ: r('Sku') },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: r('Sku') },
			{ json: 'modelNumber', js: 'modelNumber', typ: r('Sku') },
			{ json: 'multipackQuantity', js: 'multipackQuantity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'countPerPack', js: 'countPerPack', typ: r('MinimumAdvertisedPrice') },
			{ json: 'count', js: 'count', typ: r('Sku') },
			{ json: 'pieceCount', js: 'pieceCount', typ: r('MinimumAdvertisedPrice') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: r('Sku') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: r('FabricCareInstructions') },
			{ json: 'color', js: 'color', typ: r('Sku') },
			{ json: 'colorCategory', js: 'colorCategory', typ: r('CountryOfOriginComponents') },
			{ json: 'finish', js: 'finish', typ: r('Sku') },
			{ json: 'numberOfBurners', js: 'numberOfBurners', typ: r('MinimumAdvertisedPrice') },
			{ json: 'sideBurnerSize', js: 'sideBurnerSize', typ: r('ShippingWeight') },
			{ json: 'hasSideShelf', js: 'hasSideShelf', typ: r('ProcessMode') },
			{ json: 'hasCharcoalBasket', js: 'hasCharcoalBasket', typ: r('ProcessMode') },
			{ json: 'hasTankTray', js: 'hasTankTray', typ: r('ProcessMode') },
			{ json: 'totalCookingArea', js: 'totalCookingArea', typ: r('ShippingWeight') },
			{ json: 'size', js: 'size', typ: r('Sku') },
			{ json: 'assembledProductLength', js: 'assembledProductLength', typ: r('ShippingWeight') },
			{ json: 'assembledProductWidth', js: 'assembledProductWidth', typ: r('ShippingWeight') },
			{ json: 'assembledProductHeight', js: 'assembledProductHeight', typ: r('ShippingWeight') },
			{ json: 'assembledProductWeight', js: 'assembledProductWeight', typ: r('ShippingWeight') },
			{ json: 'variantGroupId', js: 'variantGroupId', typ: r('Sku') },
			{ json: 'variantAttributeNames', js: 'variantAttributeNames', typ: r('CountryOfOriginComponents') },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: r('ProcessMode') },
			{ json: 'swatchImages', js: 'swatchImages', typ: r('SwatchImages') },
			{ json: 'isProp65WarningRequired', js: 'isProp65WarningRequired', typ: r('ProcessMode') },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: r('Sku') },
			{ json: 'batteryTechnologyType', js: 'batteryTechnologyType', typ: r('ProcessMode') },
			{ json: 'hasWarranty', js: 'hasWarranty', typ: r('ProcessMode') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: r('Sku') },
			{ json: 'warrantyText', js: 'warrantyText', typ: r('Sku') },
			{ json: 'isAssemblyRequired', js: 'isAssemblyRequired', typ: r('ProcessMode') },
			{ json: 'assemblyInstructions', js: 'assemblyInstructions', typ: r('Sku') },
			{ json: 'isBulk', js: 'isBulk', typ: r('ProcessMode') },
			{ json: 'maximumWeight', js: 'maximumWeight', typ: r('ShippingWeight') },
			{ json: 'recommendedUses', js: 'recommendedUses', typ: r('FabricCareInstructions') },
			{ json: 'recommendedLocations', js: 'recommendedLocations', typ: r('FabricCareInstructions') },
			{ json: 'frameMaterial', js: 'frameMaterial', typ: r('FabricCareInstructions') },
			{ json: 'isFoldable', js: 'isFoldable', typ: r('ProcessMode') },
			{ json: 'isWheeled', js: 'isWheeled', typ: r('ProcessMode') },
			{ json: 'isWeatherResistant', js: 'isWeatherResistant', typ: r('ProcessMode') },
			{ json: 'isWaterproof', js: 'isWaterproof', typ: r('ProcessMode') },
			{ json: 'powerType', js: 'powerType', typ: r('Sku') },
			{ json: 'minimumTemperature', js: 'minimumTemperature', typ: r('ShippingWeight') },
			{ json: 'btu', js: 'btu', typ: r('ShippingWeight') },
			{ json: 'flavor', js: 'flavor', typ: r('Sku') },
			{ json: 'lifespan', js: 'lifespan', typ: r('ShippingWeight') },
			{ json: 'fuelType', js: 'fuelType', typ: r('Sku') },
			{ json: 'features', js: 'features', typ: r('FabricCareInstructions') },
			{ json: 'keywords', js: 'keywords', typ: r('Sku') },
			{ json: 'installationType', js: 'installationType', typ: r('Sku') },
			{ json: 'ageGroup', js: 'ageGroup', typ: r('CountryOfOriginComponents') },
			{ json: 'homeDecorStyle', js: 'homeDecorStyle', typ: r('Sku') },
			{ json: 'isIndustrial', js: 'isIndustrial', typ: r('ProcessMode') },
			{ json: 'isEnergyStarCertified', js: 'isEnergyStarCertified', typ: r('ProcessMode') },
			{ json: 'hasRadiantHeat', js: 'hasRadiantHeat', typ: r('ProcessMode') },
			{ json: 'flowRate', js: 'flowRate', typ: r('ShippingWeight') },
			{ json: 'hasAutomaticShutoff', js: 'hasAutomaticShutoff', typ: r('ProcessMode') },
			{ json: 'capacity', js: 'capacity', typ: r('Sku') },
			{ json: 'productVolume', js: 'productVolume', typ: r('Sku') },
			{ json: 'cleaningCareAndMaintenance', js: 'cleaningCareAndMaintenance', typ: r('Sku') },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: r('FabricCareInstructions') },
			{ json: 'sportsTeam', js: 'sportsTeam', typ: r('Sku') },
			{ json: 'sportsLeague', js: 'sportsLeague', typ: r('Sku') },
		],
		false
	),
	HealthAndBeauty: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'title', js: 'title', typ: '' },
			{ json: 'properties', js: 'properties', typ: r('HealthAndBeautyProperties') },
			{ json: 'oneOf', js: 'oneOf', typ: a(r('OneOf')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	HealthAndBeautyProperties: o(
		[
			{ json: 'Optical', js: 'Optical', typ: r('Optical') },
			{ json: 'MedicalAids', js: 'MedicalAids', typ: r('HealthAndBeautyElectronics') },
			{ json: 'PersonalCare', js: 'PersonalCare', typ: r('PersonalCare') },
			{
				json: 'HealthAndBeautyElectronics',
				js: 'HealthAndBeautyElectronics',
				typ: r('HealthAndBeautyElectronics'),
			},
			{ json: 'MedicineAndSupplements', js: 'MedicineAndSupplements', typ: r('MedicineAndSupplements') },
		],
		false
	),
	HealthAndBeautyElectronics: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('HealthAndBeautyElectronicsProperties') },
			{ json: 'required', js: 'required', typ: a(r('AnimalAccessoriesRequired')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	HealthAndBeautyElectronicsProperties: o(
		[
			{ json: 'shortDescription', js: 'shortDescription', typ: r('Sku') },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: r('FabricCareInstructions') },
			{ json: 'brand', js: 'brand', typ: r('Sku') },
			{ json: 'manufacturer', js: 'manufacturer', typ: r('Sku') },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: r('Sku') },
			{ json: 'modelNumber', js: 'modelNumber', typ: r('Sku') },
			{ json: 'countPerPack', js: 'countPerPack', typ: r('MinimumAdvertisedPrice') },
			{ json: 'multipackQuantity', js: 'multipackQuantity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'count', js: 'count', typ: r('Sku') },
			{ json: 'pieceCount', js: 'pieceCount', typ: r('MinimumAdvertisedPrice') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: r('Sku') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: r('FabricCareInstructions') },
			{ json: 'color', js: 'color', typ: r('Sku') },
			{ json: 'colorCategory', js: 'colorCategory', typ: r('CountryOfOriginComponents') },
			{ json: 'material', js: 'material', typ: r('Sku') },
			{ json: 'gender', js: 'gender', typ: r('ProcessMode') },
			{ json: 'ageGroup', js: 'ageGroup', typ: r('CountryOfOriginComponents') },
			{ json: 'size', js: 'size', typ: r('Sku') },
			{ json: 'compatibleBrands', js: 'compatibleBrands', typ: r('FabricCareInstructions') },
			{ json: 'assembledProductLength', js: 'assembledProductLength', typ: r('ShippingWeight') },
			{ json: 'assembledProductWidth', js: 'assembledProductWidth', typ: r('ShippingWeight') },
			{ json: 'assembledProductHeight', js: 'assembledProductHeight', typ: r('ShippingWeight') },
			{ json: 'assembledProductWeight', js: 'assembledProductWeight', typ: r('ShippingWeight') },
			{ json: 'variantGroupId', js: 'variantGroupId', typ: r('Sku') },
			{ json: 'variantAttributeNames', js: 'variantAttributeNames', typ: r('CountryOfOriginComponents') },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: r('ProcessMode') },
			{ json: 'swatchImages', js: 'swatchImages', typ: r('SwatchImages') },
			{ json: 'isProp65WarningRequired', js: 'isProp65WarningRequired', typ: r('ProcessMode') },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: r('Sku') },
			{ json: 'smallPartsWarnings', js: 'smallPartsWarnings', typ: r('SmallPartsWarnings') },
			{ json: 'batteryTechnologyType', js: 'batteryTechnologyType', typ: r('ProcessMode') },
			{ json: 'hasWarranty', js: 'hasWarranty', typ: r('ProcessMode') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: r('Sku') },
			{ json: 'warrantyText', js: 'warrantyText', typ: r('Sku') },
			{ json: 'isPowered', js: 'isPowered', typ: r('ProcessMode') },
			{ json: 'powerType', js: 'powerType', typ: r('Sku') },
			{ json: 'flexibleSpendingAccountEligible', js: 'flexibleSpendingAccountEligible', typ: r('ProcessMode') },
			{ json: 'recommendedUses', js: 'recommendedUses', typ: r('FabricCareInstructions') },
			{ json: 'cleaningCareAndMaintenance', js: 'cleaningCareAndMaintenance', typ: r('Sku') },
			{ json: 'fabricContent', js: 'fabricContent', typ: r('FabricContent') },
			{ json: 'fabricCareInstructions', js: 'fabricCareInstructions', typ: r('FabricCareInstructions') },
			{ json: 'trackingMode', js: 'trackingMode', typ: u(undefined, r('Sku')) },
			{ json: 'features', js: 'features', typ: r('FabricCareInstructions') },
			{ json: 'keywords', js: 'keywords', typ: r('Sku') },
			{ json: 'bodyParts', js: 'bodyParts', typ: r('FabricCareInstructions') },
			{ json: 'collection', js: 'collection', typ: r('Sku') },
			{ json: 'isSet', js: 'isSet', typ: r('ProcessMode') },
			{ json: 'isTravelSize', js: 'isTravelSize', typ: r('ProcessMode') },
			{ json: 'isPortable', js: 'isPortable', typ: r('ProcessMode') },
			{ json: 'isReusable', js: 'isReusable', typ: r('ProcessMode') },
			{ json: 'isDisposable', js: 'isDisposable', typ: r('ProcessMode') },
			{ json: 'isCordless', js: 'isCordless', typ: u(undefined, r('ProcessMode')) },
			{ json: 'hasAutomaticShutoff', js: 'hasAutomaticShutoff', typ: u(undefined, r('ProcessMode')) },
			{ json: 'healthConcerns', js: 'healthConcerns', typ: u(undefined, r('FabricCareInstructions')) },
			{ json: 'diameter', js: 'diameter', typ: u(undefined, r('ShippingWeight')) },
			{ json: 'maximumWeight', js: 'maximumWeight', typ: u(undefined, r('ShippingWeight')) },
			{ json: 'isLatexFree', js: 'isLatexFree', typ: u(undefined, r('ProcessMode')) },
			{ json: 'isWaterproof', js: 'isWaterproof', typ: u(undefined, r('ProcessMode')) },
			{ json: 'isFoldable', js: 'isFoldable', typ: u(undefined, r('ProcessMode')) },
			{ json: 'isInflatable', js: 'isInflatable', typ: u(undefined, r('ProcessMode')) },
			{ json: 'isWheeled', js: 'isWheeled', typ: u(undefined, r('ProcessMode')) },
			{ json: 'isIndustrial', js: 'isIndustrial', typ: u(undefined, r('ProcessMode')) },
			{ json: 'driveSystem', js: 'driveSystem', typ: u(undefined, r('Sku')) },
			{ json: 'shape', js: 'shape', typ: u(undefined, r('Sku')) },
		],
		false
	),
	MedicineAndSupplements: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('MedicineAndSupplementsProperties') },
			{ json: 'required', js: 'required', typ: a('') },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	MedicineAndSupplementsProperties: o(
		[
			{ json: 'shortDescription', js: 'shortDescription', typ: r('Sku') },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: r('FabricCareInstructions') },
			{ json: 'brand', js: 'brand', typ: r('Sku') },
			{ json: 'manufacturer', js: 'manufacturer', typ: r('Sku') },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: r('Sku') },
			{ json: 'modelNumber', js: 'modelNumber', typ: r('Sku') },
			{ json: 'countPerPack', js: 'countPerPack', typ: r('MinimumAdvertisedPrice') },
			{ json: 'multipackQuantity', js: 'multipackQuantity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'count', js: 'count', typ: r('Sku') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: r('Sku') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: r('FabricCareInstructions') },
			{ json: 'flavor', js: 'flavor', typ: r('Sku') },
			{ json: 'size', js: 'size', typ: r('Sku') },
			{ json: 'ageGroup', js: 'ageGroup', typ: r('CountryOfOriginComponents') },
			{ json: 'gender', js: 'gender', typ: r('ProcessMode') },
			{ json: 'bodyParts', js: 'bodyParts', typ: r('FabricCareInstructions') },
			{ json: 'healthConcerns', js: 'healthConcerns', typ: r('FabricCareInstructions') },
			{ json: 'color', js: 'color', typ: r('Sku') },
			{ json: 'colorCategory', js: 'colorCategory', typ: r('CountryOfOriginComponents') },
			{ json: 'assembledProductLength', js: 'assembledProductLength', typ: r('ShippingWeight') },
			{ json: 'assembledProductWidth', js: 'assembledProductWidth', typ: r('ShippingWeight') },
			{ json: 'assembledProductHeight', js: 'assembledProductHeight', typ: r('ShippingWeight') },
			{ json: 'assembledProductWeight', js: 'assembledProductWeight', typ: r('ShippingWeight') },
			{ json: 'variantGroupId', js: 'variantGroupId', typ: r('Sku') },
			{ json: 'variantAttributeNames', js: 'variantAttributeNames', typ: r('CountryOfOriginComponents') },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: r('ProcessMode') },
			{ json: 'swatchImages', js: 'swatchImages', typ: r('SwatchImages') },
			{ json: 'isProp65WarningRequired', js: 'isProp65WarningRequired', typ: r('ProcessMode') },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: r('Sku') },
			{ json: 'hasPricePerUnit', js: 'hasPricePerUnit', typ: r('ProcessMode') },
			{ json: 'pricePerUnitQuantity', js: 'pricePerUnitQuantity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'pricePerUnitUom', js: 'pricePerUnitUom', typ: r('ProcessMode') },
			{ json: 'isDrugFactsLabelRequired', js: 'isDrugFactsLabelRequired', typ: r('ProcessMode') },
			{ json: 'drugFactsLabel', js: 'drugFactsLabel', typ: r('Sku') },
			{ json: 'drugDosageInstructionsImage', js: 'drugDosageInstructionsImage', typ: r('Sku') },
			{ json: 'drugActiveInactiveIngredientsImage', js: 'drugActiveInactiveIngredientsImage', typ: r('Sku') },
			{ json: 'isSupplementFactsLabelRequired', js: 'isSupplementFactsLabelRequired', typ: r('ProcessMode') },
			{ json: 'supplementFactsLabel', js: 'supplementFactsLabel', typ: r('Sku') },
			{ json: 'supplementDosageInstructionsImage', js: 'supplementDosageInstructionsImage', typ: r('Sku') },
			{
				json: 'supplementActiveInactiveIngredientsImage',
				js: 'supplementActiveInactiveIngredientsImage',
				typ: r('Sku'),
			},
			{ json: 'isNutritionFactsLabelRequired', js: 'isNutritionFactsLabelRequired', typ: r('ProcessMode') },
			{ json: 'nutritionFactsLabel', js: 'nutritionFactsLabel', typ: r('Sku') },
			{ json: 'hasIngredientList', js: 'hasIngredientList', typ: r('ProcessMode') },
			{ json: 'ingredientListImage', js: 'ingredientListImage', typ: r('Sku') },
			{ json: 'ingredients', js: 'ingredients', typ: r('Sku') },
			{ json: 'hasGMOs', js: 'hasGMOs', typ: r('ProcessMode') },
			{ json: 'hasExpiration', js: 'hasExpiration', typ: r('ProcessMode') },
			{ json: 'recommendedUses', js: 'recommendedUses', typ: r('FabricCareInstructions') },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: r('FabricCareInstructions') },
			{ json: 'activeIngredients', js: 'activeIngredients', typ: r('ActiveIngredients') },
			{ json: 'inactiveIngredients', js: 'inactiveIngredients', typ: r('FabricCareInstructions') },
			{ json: 'form', js: 'form', typ: r('Sku') },
			{ json: 'instructions', js: 'instructions', typ: r('Sku') },
			{ json: 'dosage', js: 'dosage', typ: r('Sku') },
			{ json: 'stopUseIndications', js: 'stopUseIndications', typ: r('FabricCareInstructions') },
			{ json: 'medicineStrength', js: 'medicineStrength', typ: r('Sku') },
			{ json: 'nationalDrugCode', js: 'nationalDrugCode', typ: r('Sku') },
			{ json: 'nutrients', js: 'nutrients', typ: r('Nutrients') },
			{ json: 'servingSize', js: 'servingSize', typ: r('Sku') },
			{ json: 'features', js: 'features', typ: r('FabricCareInstructions') },
			{ json: 'keywords', js: 'keywords', typ: r('Sku') },
		],
		false
	),
	Optical: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('OpticalProperties') },
			{ json: 'required', js: 'required', typ: a(r('AnimalAccessoriesRequired')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	OpticalProperties: o(
		[
			{ json: 'shortDescription', js: 'shortDescription', typ: r('Sku') },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: r('FabricCareInstructions') },
			{ json: 'brand', js: 'brand', typ: r('Sku') },
			{ json: 'manufacturer', js: 'manufacturer', typ: r('Sku') },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: r('Sku') },
			{ json: 'modelNumber', js: 'modelNumber', typ: r('Sku') },
			{ json: 'countPerPack', js: 'countPerPack', typ: r('MinimumAdvertisedPrice') },
			{ json: 'multipackQuantity', js: 'multipackQuantity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'count', js: 'count', typ: r('Sku') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: r('Sku') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: r('FabricCareInstructions') },
			{ json: 'color', js: 'color', typ: r('Sku') },
			{ json: 'colorCategory', js: 'colorCategory', typ: r('CountryOfOriginComponents') },
			{ json: 'shape', js: 'shape', typ: r('Sku') },
			{ json: 'material', js: 'material', typ: r('Sku') },
			{ json: 'gender', js: 'gender', typ: r('ProcessMode') },
			{ json: 'ageGroup', js: 'ageGroup', typ: r('CountryOfOriginComponents') },
			{ json: 'isAdultProduct', js: 'isAdultProduct', typ: r('ProcessMode') },
			{ json: 'collection', js: 'collection', typ: r('Sku') },
			{ json: 'character', js: 'character', typ: r('Sku') },
			{ json: 'compatibleBrands', js: 'compatibleBrands', typ: r('FabricCareInstructions') },
			{ json: 'isSet', js: 'isSet', typ: r('ProcessMode') },
			{ json: 'assembledProductLength', js: 'assembledProductLength', typ: r('ShippingWeight') },
			{ json: 'assembledProductWidth', js: 'assembledProductWidth', typ: r('ShippingWeight') },
			{ json: 'assembledProductHeight', js: 'assembledProductHeight', typ: r('ShippingWeight') },
			{ json: 'assembledProductWeight', js: 'assembledProductWeight', typ: r('ShippingWeight') },
			{ json: 'variantGroupId', js: 'variantGroupId', typ: r('Sku') },
			{ json: 'variantAttributeNames', js: 'variantAttributeNames', typ: r('CountryOfOriginComponents') },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: r('ProcessMode') },
			{ json: 'swatchImages', js: 'swatchImages', typ: r('SwatchImages') },
			{ json: 'isProp65WarningRequired', js: 'isProp65WarningRequired', typ: r('ProcessMode') },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: r('Sku') },
			{ json: 'batteryTechnologyType', js: 'batteryTechnologyType', typ: r('ProcessMode') },
			{ json: 'hasWarranty', js: 'hasWarranty', typ: r('ProcessMode') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: r('Sku') },
			{ json: 'warrantyText', js: 'warrantyText', typ: r('Sku') },
			{ json: 'eyewearRimStyle', js: 'eyewearRimStyle', typ: r('ProcessMode') },
			{ json: 'hasAdaptiveLenses', js: 'hasAdaptiveLenses', typ: r('ProcessMode') },
			{ json: 'isPolarized', js: 'isPolarized', typ: r('ProcessMode') },
			{ json: 'isScratchResistant', js: 'isScratchResistant', typ: r('ProcessMode') },
			{ json: 'lensMaterial', js: 'lensMaterial', typ: r('Sku') },
			{ json: 'lensTint', js: 'lensTint', typ: r('Sku') },
			{ json: 'lensType', js: 'lensType', typ: r('FabricCareInstructions') },
			{ json: 'sunglassesStyle', js: 'sunglassesStyle', typ: r('Sku') },
			{ json: 'uvRating', js: 'uvRating', typ: r('ShippingWeight') },
			{ json: 'sportsLeague', js: 'sportsLeague', typ: r('Sku') },
			{ json: 'sportsTeam', js: 'sportsTeam', typ: r('Sku') },
			{ json: 'athlete', js: 'athlete', typ: r('Sku') },
			{ json: 'flexibleSpendingAccountEligible', js: 'flexibleSpendingAccountEligible', typ: r('ProcessMode') },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: r('FabricCareInstructions') },
			{ json: 'features', js: 'features', typ: r('FabricCareInstructions') },
			{ json: 'keywords', js: 'keywords', typ: r('Sku') },
			{ json: 'cleaningCareAndMaintenance', js: 'cleaningCareAndMaintenance', typ: r('Sku') },
			{ json: 'eyewearLensFeature', js: 'eyewearLensFeature', typ: r('FabricCareInstructions') },
			{ json: 'eyewearFrameStyle', js: 'eyewearFrameStyle', typ: r('Sku') },
		],
		false
	),
	PersonalCare: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('PersonalCareProperties') },
			{ json: 'required', js: 'required', typ: a('') },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	PersonalCareProperties: o(
		[
			{ json: 'shortDescription', js: 'shortDescription', typ: r('Sku') },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: r('FabricCareInstructions') },
			{ json: 'brand', js: 'brand', typ: r('Sku') },
			{ json: 'manufacturer', js: 'manufacturer', typ: r('Sku') },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: r('Sku') },
			{ json: 'modelNumber', js: 'modelNumber', typ: r('Sku') },
			{ json: 'multipackQuantity', js: 'multipackQuantity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'countPerPack', js: 'countPerPack', typ: r('MinimumAdvertisedPrice') },
			{ json: 'count', js: 'count', typ: r('Sku') },
			{ json: 'pieceCount', js: 'pieceCount', typ: r('MinimumAdvertisedPrice') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: r('Sku') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: r('FabricCareInstructions') },
			{ json: 'color', js: 'color', typ: r('Sku') },
			{ json: 'colorCategory', js: 'colorCategory', typ: r('CountryOfOriginComponents') },
			{ json: 'gender', js: 'gender', typ: r('ProcessMode') },
			{ json: 'size', js: 'size', typ: r('Sku') },
			{ json: 'ageGroup', js: 'ageGroup', typ: r('CountryOfOriginComponents') },
			{ json: 'bodyParts', js: 'bodyParts', typ: r('FabricCareInstructions') },
			{ json: 'collection', js: 'collection', typ: r('Sku') },
			{ json: 'scent', js: 'scent', typ: r('Sku') },
			{ json: 'flavor', js: 'flavor', typ: r('Sku') },
			{ json: 'assembledProductLength', js: 'assembledProductLength', typ: r('ShippingWeight') },
			{ json: 'assembledProductWidth', js: 'assembledProductWidth', typ: r('ShippingWeight') },
			{ json: 'assembledProductHeight', js: 'assembledProductHeight', typ: r('ShippingWeight') },
			{ json: 'assembledProductWeight', js: 'assembledProductWeight', typ: r('ShippingWeight') },
			{ json: 'variantGroupId', js: 'variantGroupId', typ: r('Sku') },
			{ json: 'variantAttributeNames', js: 'variantAttributeNames', typ: r('CountryOfOriginComponents') },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: r('ProcessMode') },
			{ json: 'swatchImages', js: 'swatchImages', typ: r('SwatchImages') },
			{ json: 'isProp65WarningRequired', js: 'isProp65WarningRequired', typ: r('ProcessMode') },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: r('Sku') },
			{ json: 'smallPartsWarnings', js: 'smallPartsWarnings', typ: r('SmallPartsWarnings') },
			{ json: 'batteryTechnologyType', js: 'batteryTechnologyType', typ: r('ProcessMode') },
			{ json: 'hasPricePerUnit', js: 'hasPricePerUnit', typ: r('ProcessMode') },
			{ json: 'pricePerUnitQuantity', js: 'pricePerUnitQuantity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'pricePerUnitUom', js: 'pricePerUnitUom', typ: r('ProcessMode') },
			{ json: 'isDrugFactsLabelRequired', js: 'isDrugFactsLabelRequired', typ: r('ProcessMode') },
			{ json: 'drugFactsLabel', js: 'drugFactsLabel', typ: r('Sku') },
			{ json: 'drugDosageInstructionsImage', js: 'drugDosageInstructionsImage', typ: r('Sku') },
			{ json: 'drugActiveInactiveIngredientsImage', js: 'drugActiveInactiveIngredientsImage', typ: r('Sku') },
			{ json: 'hasIngredientList', js: 'hasIngredientList', typ: r('ProcessMode') },
			{ json: 'ingredientListImage', js: 'ingredientListImage', typ: r('Sku') },
			{ json: 'ingredients', js: 'ingredients', typ: r('Sku') },
			{ json: 'hasGMOs', js: 'hasGMOs', typ: r('ProcessMode') },
			{ json: 'skinCareConcern', js: 'skinCareConcern', typ: r('Sku') },
			{ json: 'skinType', js: 'skinType', typ: r('Sku') },
			{ json: 'skinTone', js: 'skinTone', typ: r('Sku') },
			{ json: 'spfValue', js: 'spfValue', typ: r('MinimumAdvertisedPrice') },
			{ json: 'hairType', js: 'hairType', typ: r('Sku') },
			{ json: 'isAdultProduct', js: 'isAdultProduct', typ: r('ProcessMode') },
			{ json: 'recommendedUses', js: 'recommendedUses', typ: r('FabricCareInstructions') },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: r('FabricCareInstructions') },
			{ json: 'activeIngredients', js: 'activeIngredients', typ: r('ActiveIngredients') },
			{ json: 'inactiveIngredients', js: 'inactiveIngredients', typ: r('FabricCareInstructions') },
			{ json: 'form', js: 'form', typ: r('Sku') },
			{ json: 'instructions', js: 'instructions', typ: r('Sku') },
			{ json: 'stopUseIndications', js: 'stopUseIndications', typ: r('FabricCareInstructions') },
			{ json: 'features', js: 'features', typ: r('FabricCareInstructions') },
			{ json: 'compatibleBrands', js: 'compatibleBrands', typ: r('FabricCareInstructions') },
			{ json: 'isSet', js: 'isSet', typ: r('ProcessMode') },
			{ json: 'isTravelSize', js: 'isTravelSize', typ: r('ProcessMode') },
			{ json: 'isPortable', js: 'isPortable', typ: r('ProcessMode') },
			{ json: 'isReusable', js: 'isReusable', typ: r('ProcessMode') },
			{ json: 'isDisposable', js: 'isDisposable', typ: r('ProcessMode') },
			{ json: 'isPowered', js: 'isPowered', typ: r('ProcessMode') },
			{ json: 'powerType', js: 'powerType', typ: r('Sku') },
			{ json: 'flexibleSpendingAccountEligible', js: 'flexibleSpendingAccountEligible', typ: r('ProcessMode') },
			{ json: 'cleaningCareAndMaintenance', js: 'cleaningCareAndMaintenance', typ: r('Sku') },
			{ json: 'batteriesRequired', js: 'batteriesRequired', typ: r('ProcessMode') },
			{ json: 'resultTime', js: 'resultTime', typ: r('ShippingWeight') },
			{ json: 'isNoncomodegenic', js: 'isNoncomodegenic', typ: r('ProcessMode') },
			{ json: 'isTinted', js: 'isTinted', typ: r('ProcessMode') },
			{ json: 'isSelfTanning', js: 'isSelfTanning', typ: r('ProcessMode') },
			{ json: 'isWaterproof', js: 'isWaterproof', typ: r('ProcessMode') },
			{ json: 'isUnscented', js: 'isUnscented', typ: r('ProcessMode') },
			{ json: 'absorbency', js: 'absorbency', typ: r('Sku') },
			{ json: 'keywords', js: 'keywords', typ: r('Sku') },
			{ json: 'material', js: 'material', typ: r('Sku') },
			{ json: 'sportsLeague', js: 'sportsLeague', typ: r('Sku') },
			{ json: 'sportsTeam', js: 'sportsTeam', typ: r('Sku') },
			{ json: 'athlete', js: 'athlete', typ: r('Sku') },
			{ json: 'wigCapStyle', js: 'wigCapStyle', typ: r('ProcessMode') },
			{ json: 'hairColorCategory', js: 'hairColorCategory', typ: r('ProcessMode') },
		],
		false
	),
	Home: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'title', js: 'title', typ: '' },
			{ json: 'properties', js: 'properties', typ: r('HomeProperties') },
			{ json: 'oneOf', js: 'oneOf', typ: a(r('OneOf')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	HomeProperties: o(
		[
			{ json: 'Bedding', js: 'Bedding', typ: r('BabyFurniture') },
			{ json: 'LargeAppliances', js: 'LargeAppliances', typ: r('LargeAppliances') },
			{ json: 'HomeOther', js: 'HomeOther', typ: r('HomeOther') },
		],
		false
	),
	HomeOther: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('HomeOtherProperties') },
			{ json: 'required', js: 'required', typ: a(r('AnimalAccessoriesRequired')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	HomeOtherProperties: o(
		[
			{ json: 'shortDescription', js: 'shortDescription', typ: r('Sku') },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: r('FabricCareInstructions') },
			{ json: 'brand', js: 'brand', typ: r('Sku') },
			{ json: 'manufacturer', js: 'manufacturer', typ: r('Sku') },
			{ json: 'modelNumber', js: 'modelNumber', typ: r('Sku') },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: r('Sku') },
			{ json: 'multipackQuantity', js: 'multipackQuantity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'countPerPack', js: 'countPerPack', typ: r('MinimumAdvertisedPrice') },
			{ json: 'count', js: 'count', typ: r('Sku') },
			{ json: 'pieceCount', js: 'pieceCount', typ: r('MinimumAdvertisedPrice') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: r('Sku') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: r('FabricCareInstructions') },
			{ json: 'color', js: 'color', typ: r('Sku') },
			{ json: 'colorCategory', js: 'colorCategory', typ: r('CountryOfOriginComponents') },
			{ json: 'pattern', js: 'pattern', typ: r('Sku') },
			{ json: 'material', js: 'material', typ: r('Sku') },
			{ json: 'finish', js: 'finish', typ: r('Sku') },
			{ json: 'ageGroup', js: 'ageGroup', typ: r('CountryOfOriginComponents') },
			{ json: 'gender', js: 'gender', typ: r('ProcessMode') },
			{ json: 'size', js: 'size', typ: r('Sku') },
			{ json: 'threadCount', js: 'threadCount', typ: r('MinimumAdvertisedPrice') },
			{ json: 'rugSize', js: 'rugSize', typ: r('Sku') },
			{ json: 'rugStyle', js: 'rugStyle', typ: r('FabricCareInstructions') },
			{ json: 'curtainPanelStyle', js: 'curtainPanelStyle', typ: r('Sku') },
			{ json: 'scent', js: 'scent', typ: r('Sku') },
			{ json: 'isPetFriendly', js: 'isPetFriendly', typ: r('ProcessMode') },
			{ json: 'fillMaterial', js: 'fillMaterial', typ: r('FabricCareInstructions') },
			{ json: 'clockNumberType', js: 'clockNumberType', typ: r('Sku') },
			{ json: 'homeDecorStyle', js: 'homeDecorStyle', typ: r('Sku') },
			{ json: 'diameter', js: 'diameter', typ: r('ShippingWeight') },
			{ json: 'theme', js: 'theme', typ: r('Sku') },
			{ json: 'character', js: 'character', typ: r('Sku') },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: r('FabricCareInstructions') },
			{ json: 'assembledProductLength', js: 'assembledProductLength', typ: r('ShippingWeight') },
			{ json: 'assembledProductWidth', js: 'assembledProductWidth', typ: r('ShippingWeight') },
			{ json: 'assembledProductHeight', js: 'assembledProductHeight', typ: r('ShippingWeight') },
			{ json: 'assembledProductWeight', js: 'assembledProductWeight', typ: r('ShippingWeight') },
			{ json: 'variantGroupId', js: 'variantGroupId', typ: r('Sku') },
			{ json: 'variantAttributeNames', js: 'variantAttributeNames', typ: r('CountryOfOriginComponents') },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: r('ProcessMode') },
			{ json: 'swatchImages', js: 'swatchImages', typ: r('SwatchImages') },
			{ json: 'isProp65WarningRequired', js: 'isProp65WarningRequired', typ: r('ProcessMode') },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: r('Sku') },
			{ json: 'smallPartsWarnings', js: 'smallPartsWarnings', typ: r('SmallPartsWarnings') },
			{ json: 'requiresTextileActLabeling', js: 'requiresTextileActLabeling', typ: r('ProcessMode') },
			{ json: 'countryOfOriginTextiles', js: 'countryOfOriginTextiles', typ: r('ProcessMode') },
			{ json: 'batteryTechnologyType', js: 'batteryTechnologyType', typ: r('ProcessMode') },
			{ json: 'hasWarranty', js: 'hasWarranty', typ: r('ProcessMode') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: r('Sku') },
			{ json: 'warrantyText', js: 'warrantyText', typ: r('Sku') },
			{
				json: 'compositeWoodCertificationCode',
				js: 'compositeWoodCertificationCode',
				typ: r('CompositeWoodCertificationCode'),
			},
			{ json: 'hasFuelContainer', js: 'hasFuelContainer', typ: r('ProcessMode') },
			{ json: 'isLightingFactsLabelRequired', js: 'isLightingFactsLabelRequired', typ: r('ProcessMode') },
			{ json: 'lightingFactsLabel', js: 'lightingFactsLabel', typ: r('Sku') },
			{ json: 'isAssemblyRequired', js: 'isAssemblyRequired', typ: r('ProcessMode') },
			{ json: 'assemblyInstructions', js: 'assemblyInstructions', typ: r('Sku') },
			{ json: 'cleaningCareAndMaintenance', js: 'cleaningCareAndMaintenance', typ: r('Sku') },
			{ json: 'contaminantsRemoved', js: 'contaminantsRemoved', typ: r('Sku') },
			{ json: 'recommendedUses', js: 'recommendedUses', typ: r('FabricCareInstructions') },
			{ json: 'recommendedRooms', js: 'recommendedRooms', typ: r('FabricCareInstructions') },
			{ json: 'fabricContent', js: 'fabricContent', typ: r('FabricContent') },
			{ json: 'fabricColor', js: 'fabricColor', typ: r('Sku') },
			{ json: 'fabricCareInstructions', js: 'fabricCareInstructions', typ: r('FabricCareInstructions') },
			{ json: 'curtainLength', js: 'curtainLength', typ: r('ShippingWeight') },
			{ json: 'powerType', js: 'powerType', typ: r('Sku') },
			{ json: 'volumeCapacity', js: 'volumeCapacity', typ: r('ShippingWeight') },
			{ json: 'shape', js: 'shape', typ: r('Sku') },
			{ json: 'occasion', js: 'occasion', typ: r('Sku') },
			{ json: 'accentColor', js: 'accentColor', typ: r('Sku') },
			{ json: 'bedStyle', js: 'bedStyle', typ: r('Sku') },
			{ json: 'hasPricePerUnit', js: 'hasPricePerUnit', typ: r('ProcessMode') },
			{ json: 'pricePerUnitQuantity', js: 'pricePerUnitQuantity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'pricePerUnitUom', js: 'pricePerUnitUom', typ: r('ProcessMode') },
			{ json: 'baseColor', js: 'baseColor', typ: r('Sku') },
			{ json: 'baseFinish', js: 'baseFinish', typ: r('Sku') },
			{ json: 'shadeMaterial', js: 'shadeMaterial', typ: r('Sku') },
			{ json: 'shadeStyle', js: 'shadeStyle', typ: r('Sku') },
			{ json: 'collection', js: 'collection', typ: r('Sku') },
			{ json: 'serviceCount', js: 'serviceCount', typ: r('MinimumAdvertisedPrice') },
			{ json: 'meal', js: 'meal', typ: r('Sku') },
			{ json: 'frameColor', js: 'frameColor', typ: r('Sku') },
			{ json: 'slatWidth', js: 'slatWidth', typ: r('ShippingWeight') },
			{ json: 'isSet', js: 'isSet', typ: r('ProcessMode') },
			{ json: 'features', js: 'features', typ: r('FabricCareInstructions') },
			{ json: 'keywords', js: 'keywords', typ: r('Sku') },
			{ json: 'academicInstitution', js: 'academicInstitution', typ: r('Sku') },
			{ json: 'sportsLeague', js: 'sportsLeague', typ: r('Sku') },
			{ json: 'sportsTeam', js: 'sportsTeam', typ: r('Sku') },
			{ json: 'athlete', js: 'athlete', typ: r('Sku') },
		],
		false
	),
	LargeAppliances: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('LargeAppliancesProperties') },
			{ json: 'required', js: 'required', typ: a(r('AnimalAccessoriesRequired')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	LargeAppliancesProperties: o(
		[
			{ json: 'hasFuelContainer', js: 'hasFuelContainer', typ: r('ProcessMode') },
			{ json: 'shortDescription', js: 'shortDescription', typ: r('Sku') },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: r('FabricCareInstructions') },
			{ json: 'brand', js: 'brand', typ: r('Sku') },
			{ json: 'manufacturer', js: 'manufacturer', typ: r('Sku') },
			{ json: 'modelNumber', js: 'modelNumber', typ: r('Sku') },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: r('Sku') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: r('Sku') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: r('FabricCareInstructions') },
			{ json: 'color', js: 'color', typ: r('Sku') },
			{ json: 'size', js: 'size', typ: r('Sku') },
			{ json: 'colorCategory', js: 'colorCategory', typ: r('CountryOfOriginComponents') },
			{ json: 'isSet', js: 'isSet', typ: r('ProcessMode') },
			{ json: 'capacity', js: 'capacity', typ: r('Sku') },
			{ json: 'pattern', js: 'pattern', typ: r('Sku') },
			{ json: 'finish', js: 'finish', typ: r('Sku') },
			{ json: 'homeDecorStyle', js: 'homeDecorStyle', typ: r('Sku') },
			{ json: 'material', js: 'material', typ: r('Sku') },
			{ json: 'isEnergyStarCertified', js: 'isEnergyStarCertified', typ: r('ProcessMode') },
			{ json: 'assembledProductLength', js: 'assembledProductLength', typ: r('ShippingWeight') },
			{ json: 'assembledProductWidth', js: 'assembledProductWidth', typ: r('ShippingWeight') },
			{ json: 'assembledProductHeight', js: 'assembledProductHeight', typ: r('ShippingWeight') },
			{ json: 'assembledProductWeight', js: 'assembledProductWeight', typ: r('ShippingWeight') },
			{ json: 'variantGroupId', js: 'variantGroupId', typ: r('Sku') },
			{ json: 'variantAttributeNames', js: 'variantAttributeNames', typ: r('CountryOfOriginComponents') },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: r('ProcessMode') },
			{ json: 'swatchImages', js: 'swatchImages', typ: r('SwatchImages') },
			{ json: 'isProp65WarningRequired', js: 'isProp65WarningRequired', typ: r('ProcessMode') },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: r('Sku') },
			{ json: 'batteryTechnologyType', js: 'batteryTechnologyType', typ: r('ProcessMode') },
			{ json: 'hasCfl', js: 'hasCfl', typ: r('ProcessMode') },
			{ json: 'isLightingFactsLabelRequired', js: 'isLightingFactsLabelRequired', typ: r('ProcessMode') },
			{ json: 'lightingFactsLabel', js: 'lightingFactsLabel', typ: r('Sku') },
			{ json: 'isEnergyGuideLabelRequired', js: 'isEnergyGuideLabelRequired', typ: r('ProcessMode') },
			{ json: 'energyGuideLabel', js: 'energyGuideLabel', typ: r('Sku') },
			{ json: 'hasWarranty', js: 'hasWarranty', typ: r('ProcessMode') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: r('Sku') },
			{ json: 'warrantyText', js: 'warrantyText', typ: r('Sku') },
			{ json: 'isAssemblyRequired', js: 'isAssemblyRequired', typ: r('ProcessMode') },
			{ json: 'assemblyInstructions', js: 'assemblyInstructions', typ: r('Sku') },
			{ json: 'cleaningCareAndMaintenance', js: 'cleaningCareAndMaintenance', typ: r('Sku') },
			{ json: 'recommendedUses', js: 'recommendedUses', typ: r('FabricCareInstructions') },
			{ json: 'recommendedRooms', js: 'recommendedRooms', typ: r('FabricCareInstructions') },
			{ json: 'powerType', js: 'powerType', typ: r('Sku') },
			{ json: 'volts', js: 'volts', typ: r('ShippingWeight') },
			{ json: 'watts', js: 'watts', typ: r('ShippingWeight') },
			{ json: 'btu', js: 'btu', typ: r('ShippingWeight') },
			{ json: 'isRemoteControlIncluded', js: 'isRemoteControlIncluded', typ: r('ProcessMode') },
			{ json: 'cordLength', js: 'cordLength', typ: r('ShippingWeight') },
			{ json: 'maximumRoomSize', js: 'maximumRoomSize', typ: r('ShippingWeight') },
			{ json: 'fuelType', js: 'fuelType', typ: r('Sku') },
			{ json: 'isSmart', js: 'isSmart', typ: r('ProcessMode') },
			{ json: 'runTime', js: 'runTime', typ: r('ShippingWeight') },
			{ json: 'hasAutomaticShutoff', js: 'hasAutomaticShutoff', typ: r('ProcessMode') },
			{ json: 'loadPosition', js: 'loadPosition', typ: r('Sku') },
			{ json: 'shape', js: 'shape', typ: r('Sku') },
			{ json: 'collection', js: 'collection', typ: r('Sku') },
			{ json: 'features', js: 'features', typ: r('FabricCareInstructions') },
			{ json: 'keywords', js: 'keywords', typ: r('Sku') },
		],
		false
	),
	JewelryCategory: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'title', js: 'title', typ: '' },
			{ json: 'properties', js: 'properties', typ: r('JewelryCategoryProperties') },
			{ json: 'oneOf', js: 'oneOf', typ: a(r('OneOf')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	JewelryCategoryProperties: o([{ json: 'Jewelry', js: 'Jewelry', typ: r('Jewelry') }], false),
	Jewelry: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('JewelryProperties') },
			{ json: 'required', js: 'required', typ: a(r('AnimalAccessoriesRequired')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	JewelryProperties: o(
		[
			{ json: 'shortDescription', js: 'shortDescription', typ: r('Sku') },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: r('FabricCareInstructions') },
			{ json: 'brand', js: 'brand', typ: r('Sku') },
			{ json: 'manufacturer', js: 'manufacturer', typ: r('Sku') },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: r('Sku') },
			{ json: 'modelNumber', js: 'modelNumber', typ: r('Sku') },
			{ json: 'multipackQuantity', js: 'multipackQuantity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'countPerPack', js: 'countPerPack', typ: r('MinimumAdvertisedPrice') },
			{ json: 'count', js: 'count', typ: r('Sku') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: r('Sku') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: r('FabricCareInstructions') },
			{ json: 'material', js: 'material', typ: r('Sku') },
			{ json: 'jewelryStyle', js: 'jewelryStyle', typ: r('ProcessMode') },
			{ json: 'metal', js: 'metal', typ: r('Sku') },
			{ json: 'metalStamp', js: 'metalStamp', typ: r('FabricCareInstructions') },
			{ json: 'karats', js: 'karats', typ: r('ShippingWeight') },
			{ json: 'plating', js: 'plating', typ: r('Sku') },
			{ json: 'gender', js: 'gender', typ: r('ProcessMode') },
			{ json: 'ageGroup', js: 'ageGroup', typ: r('CountryOfOriginComponents') },
			{ json: 'size', js: 'size', typ: r('Sku') },
			{ json: 'color', js: 'color', typ: r('Sku') },
			{ json: 'occasion', js: 'occasion', typ: r('Sku') },
			{ json: 'style', js: 'style', typ: r('Sku') },
			{ json: 'personalRelationship', js: 'personalRelationship', typ: r('FabricCareInstructions') },
			{ json: 'variantGroupId', js: 'variantGroupId', typ: r('Sku') },
			{ json: 'variantAttributeNames', js: 'variantAttributeNames', typ: r('CountryOfOriginComponents') },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: r('ProcessMode') },
			{ json: 'swatchImages', js: 'swatchImages', typ: r('SwatchImages') },
			{ json: 'isProp65WarningRequired', js: 'isProp65WarningRequired', typ: r('ProcessMode') },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: r('Sku') },
			{ json: 'smallPartsWarnings', js: 'smallPartsWarnings', typ: r('SmallPartsWarnings') },
			{ json: 'batteryTechnologyType', js: 'batteryTechnologyType', typ: r('ProcessMode') },
			{ json: 'hasWarranty', js: 'hasWarranty', typ: r('ProcessMode') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: r('Sku') },
			{ json: 'warrantyText', js: 'warrantyText', typ: r('Sku') },
			{ json: 'certificateNumber', js: 'certificateNumber', typ: r('FabricCareInstructions') },
			{ json: 'birthstone', js: 'birthstone', typ: r('Sku') },
			{ json: 'pattern', js: 'pattern', typ: r('Sku') },
			{ json: 'claspType', js: 'claspType', typ: r('FabricCareInstructions') },
			{ json: 'backFinding', js: 'backFinding', typ: r('Sku') },
			{ json: 'jewelrySetting', js: 'jewelrySetting', typ: r('FabricCareInstructions') },
			{ json: 'earringStyle', js: 'earringStyle', typ: r('Sku') },
			{ json: 'earringFeature', js: 'earringFeature', typ: r('FabricCareInstructions') },
			{ json: 'braceletStyle', js: 'braceletStyle', typ: r('Sku') },
			{ json: 'necklaceStyle', js: 'necklaceStyle', typ: r('Sku') },
			{ json: 'chainLength', js: 'chainLength', typ: r('ShippingWeight') },
			{ json: 'chainPattern', js: 'chainPattern', typ: r('FabricCareInstructions') },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: r('FabricCareInstructions') },
			{ json: 'diamondClarity', js: 'diamondClarity', typ: r('Sku') },
			{ json: 'diamondCut', js: 'diamondCut', typ: r('Sku') },
			{ json: 'carats', js: 'carats', typ: r('ShippingWeight') },
			{ json: 'totalDiamondWeight', js: 'totalDiamondWeight', typ: r('ShippingWeight') },
			{ json: 'totalGemWeight', js: 'totalGemWeight', typ: r('MinimumAdvertisedPrice') },
			{ json: 'gemstoneCut', js: 'gemstoneCut', typ: r('Sku') },
			{ json: 'gemstone', js: 'gemstone', typ: r('Sku') },
			{ json: 'gemstoneColor', js: 'gemstoneColor', typ: r('Sku') },
			{ json: 'gemstoneClarity', js: 'gemstoneClarity', typ: r('Sku') },
			{ json: 'stoneCreationMethod', js: 'stoneCreationMethod', typ: r('Sku') },
			{ json: 'stoneTreatment', js: 'stoneTreatment', typ: r('Sku') },
			{ json: 'stoneHeight', js: 'stoneHeight', typ: r('ShippingWeight') },
			{ json: 'stoneLength', js: 'stoneLength', typ: r('ShippingWeight') },
			{ json: 'stoneWidth', js: 'stoneWidth', typ: r('ShippingWeight') },
			{ json: 'stoneDepthPercentage', js: 'stoneDepthPercentage', typ: r('MinimumAdvertisedPrice') },
			{ json: 'stoneTablePercentage', js: 'stoneTablePercentage', typ: r('MinimumAdvertisedPrice') },
			{ json: 'stoneSymmetry', js: 'stoneSymmetry', typ: r('Sku') },
			{ json: 'stonePolish', js: 'stonePolish', typ: r('Sku') },
			{ json: 'stoneGirdle', js: 'stoneGirdle', typ: r('Sku') },
			{ json: 'stoneCulet', js: 'stoneCulet', typ: r('Sku') },
			{ json: 'stoneFluoresence', js: 'stoneFluoresence', typ: r('Sku') },
			{ json: 'pearlType', js: 'pearlType', typ: r('FabricCareInstructions') },
			{ json: 'pearlBodyColor', js: 'pearlBodyColor', typ: r('FabricCareInstructions') },
			{ json: 'pearlLustre', js: 'pearlLustre', typ: r('FabricCareInstructions') },
			{ json: 'pearlShape', js: 'pearlShape', typ: r('FabricCareInstructions') },
			{ json: 'pearlUniformity', js: 'pearlUniformity', typ: r('FabricCareInstructions') },
			{ json: 'pearlSurfaceBlemishes', js: 'pearlSurfaceBlemishes', typ: r('FabricCareInstructions') },
			{ json: 'pearlNacreThickness', js: 'pearlNacreThickness', typ: r('ShippingWeight') },
			{ json: 'pearlStringingMethod', js: 'pearlStringingMethod', typ: r('FabricCareInstructions') },
			{ json: 'sizePerPearl', js: 'sizePerPearl', typ: r('ShippingWeight') },
			{ json: 'numberOfPearls', js: 'numberOfPearls', typ: r('MinimumAdvertisedPrice') },
			{ json: 'inscription', js: 'inscription', typ: r('Sku') },
			{ json: 'isResizable', js: 'isResizable', typ: r('ProcessMode') },
			{ json: 'ringSizingLowerRange', js: 'ringSizingLowerRange', typ: r('MinimumAdvertisedPrice') },
			{ json: 'ringSizingUpperRange', js: 'ringSizingUpperRange', typ: r('MinimumAdvertisedPrice') },
			{ json: 'ringStyle', js: 'ringStyle', typ: r('FabricCareInstructions') },
			{ json: 'ringSize', js: 'ringSize', typ: r('MinimumAdvertisedPrice') },
			{ json: 'circumference', js: 'circumference', typ: r('ShippingWeight') },
			{ json: 'diameter', js: 'diameter', typ: r('ShippingWeight') },
			{ json: 'ringSizeStandard', js: 'ringSizeStandard', typ: r('ProcessMode') },
			{ json: 'sportsLeague', js: 'sportsLeague', typ: r('Sku') },
			{ json: 'sportsTeam', js: 'sportsTeam', typ: r('Sku') },
			{ json: 'theme', js: 'theme', typ: r('Sku') },
			{ json: 'americanWireGuage', js: 'americanWireGuage', typ: r('CompositeWoodCertificationCode') },
			{ json: 'athlete', js: 'athlete', typ: r('Sku') },
			{ json: 'features', js: 'features', typ: r('FabricCareInstructions') },
			{ json: 'keywords', js: 'keywords', typ: r('Sku') },
			{ json: 'isMadeFromRecycledMaterial', js: 'isMadeFromRecycledMaterial', typ: r('ProcessMode') },
			{ json: 'recycledMaterialContent', js: 'recycledMaterialContent', typ: r('RecycledMaterialContent') },
			{ json: 'colorCategory', js: 'colorCategory', typ: r('CountryOfOriginComponents') },
			{ json: 'character', js: 'character', typ: r('Sku') },
			{ json: 'bodyParts', js: 'bodyParts', typ: r('FabricCareInstructions') },
			{ json: 'designer', js: 'designer', typ: r('Sku') },
		],
		false
	),
	MPBulkRetire: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('MPBulkRetireProperties') },
			{ json: 'required', js: 'required', typ: a('') },
		],
		false
	),
	MPBulkRetireProperties: o(
		[
			{ json: 'RetireItemHeader', js: 'RetireItemHeader', typ: r('RetireItemHeader') },
			{ json: 'RetireItem', js: 'RetireItem', typ: r('RetireItem') },
		],
		false
	),
	RetireItem: o(
		[
			{ json: 'type', js: 'type', typ: r('CountryOfOriginComponentsType') },
			{ json: 'items', js: 'items', typ: a(r('Item')) },
		],
		false
	),
	Item: o(
		[
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('ItemProperties') },
			{ json: 'required', js: 'required', typ: a('') },
		],
		false
	),
	ItemProperties: o([{ json: 'sku', js: 'sku', typ: r('FeedDate') }], false),
	FeedDate: o([{ json: 'type', js: 'type', typ: r('PurpleType') }], false),
	RetireItemHeader: o(
		[
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('RetireItemHeaderProperties') },
			{ json: 'required', js: 'required', typ: a('') },
		],
		false
	),
	RetireItemHeaderProperties: o(
		[
			{ json: 'feedDate', js: 'feedDate', typ: r('FeedDate') },
			{ json: 'version', js: 'version', typ: r('FeedDate') },
		],
		false
	),
	MPItem: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'title', js: 'title', typ: '' },
			{ json: 'properties', js: 'properties', typ: r('MPItemProperties') },
			{ json: 'required', js: 'required', typ: a('') },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	MPItemProperties: o(
		[
			{ json: 'feedDate', js: 'feedDate', typ: r('FeedDateClass') },
			{ json: 'processMode', js: 'processMode', typ: r('ProcessMode') },
			{ json: 'sku', js: 'sku', typ: r('Sku') },
			{ json: 'productIdentifiers', js: 'productIdentifiers', typ: r('ProductIdentifiers') },
			{ json: 'MPProduct', js: 'MPProduct', typ: r('MpOffer') },
			{ json: 'MPOffer', js: 'MPOffer', typ: r('MpOffer') },
		],
		false
	),
	MpOffer: o([{ json: '$ref', js: '$ref', typ: '' }], false),
	ProductIdentifiers: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('CountryOfOriginComponentsType') },
			{ json: 'title', js: 'title', typ: '' },
			{ json: 'items', js: 'items', typ: r('ProductIdentifiersItems') },
			{ json: 'minItems', js: 'minItems', typ: 0 },
		],
		false
	),
	ProductIdentifiersItems: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('HilariousProperties') },
			{ json: 'required', js: 'required', typ: a('') },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	HilariousProperties: o(
		[
			{ json: 'productIdType', js: 'productIdType', typ: r('ProcessMode') },
			{ json: 'productId', js: 'productId', typ: r('Sku') },
		],
		false
	),
	MPItemFeed: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'title', js: 'title', typ: '' },
			{ json: 'properties', js: 'properties', typ: r('MPItemFeedProperties') },
			{ json: 'required', js: 'required', typ: a('') },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	MPItemFeedProperties: o(
		[
			{ json: 'MPItemFeedHeader', js: 'MPItemFeedHeader', typ: r('MpOffer') },
			{ json: 'MPItem', js: 'MPItem', typ: r('MPItemClass') },
		],
		false
	),
	MPItemClass: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('CountryOfOriginComponentsType') },
			{ json: 'items', js: 'items', typ: r('MpOffer') },
			{ json: 'minItems', js: 'minItems', typ: 0 },
			{ json: 'maxItems', js: 'maxItems', typ: 0 },
		],
		false
	),
	MPItemFeedHeader: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('MPItemFeedHeaderProperties') },
			{ json: 'required', js: 'required', typ: a('') },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	MPItemFeedHeaderProperties: o(
		[
			{ json: 'version', js: 'version', typ: r('ProcessMode') },
			{ json: 'requestId', js: 'requestId', typ: r('Sku') },
			{ json: 'requestBatchId', js: 'requestBatchId', typ: r('Sku') },
			{ json: 'feedDate', js: 'feedDate', typ: r('FeedDateClass') },
			{ json: 'mart', js: 'mart', typ: r('ProcessMode') },
		],
		false
	),
	MPLogistics: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('MPLogisticsProperties') },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	MPLogisticsProperties: o(
		[
			{ json: 'countryOfOriginComponents', js: 'countryOfOriginComponents', typ: r('CountryOfOriginComponents') },
			{ json: 'countryOfOriginAssembly', js: 'countryOfOriginAssembly', typ: r('ProcessMode') },
		],
		false
	),
	MPOffer: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('MPOfferProperties') },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	MPOfferProperties: o(
		[
			{ json: 'price', js: 'price', typ: r('MinimumAdvertisedPrice') },
			{ json: 'MinimumAdvertisedPrice', js: 'MinimumAdvertisedPrice', typ: r('MinimumAdvertisedPrice') },
			{ json: 'StartDate', js: 'StartDate', typ: r('FeedDateClass') },
			{ json: 'EndDate', js: 'EndDate', typ: r('FeedDateClass') },
			{ json: 'MustShipAlone', js: 'MustShipAlone', typ: r('ProcessMode') },
			{ json: 'ShippingWeight', js: 'ShippingWeight', typ: r('ShippingWeight') },
			{ json: 'ProductTaxCode', js: 'ProductTaxCode', typ: r('MinimumAdvertisedPrice') },
			{ json: 'shipsInOriginalPackaging', js: 'shipsInOriginalPackaging', typ: r('ProcessMode') },
			{ json: 'additionalOfferAttributes', js: 'additionalOfferAttributes', typ: r('AdditionalOfferAttributes') },
			{ json: 'ShippingOverrides', js: 'ShippingOverrides', typ: r('ShippingOverrides') },
			{ json: 'ShippingProgramOverrides', js: 'ShippingProgramOverrides', typ: r('ShippingProgramOverrides') },
			{ json: 'fulfillmentLagTime', js: 'fulfillmentLagTime', typ: r('Sku') },
		],
		false
	),
	ShippingOverrides: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('ShippingOverridesProperties') },
		],
		false
	),
	ShippingOverridesProperties: o(
		[
			{ json: 'ShippingOverrideAction', js: 'ShippingOverrideAction', typ: r('ShippingOverrideActionClass') },
			{ json: 'shippingOverride', js: 'shippingOverride', typ: r('ShippingOverride') },
		],
		false
	),
	ShippingOverride: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('CountryOfOriginComponentsType') },
			{ json: 'title', js: 'title', typ: '' },
			{ json: 'items', js: 'items', typ: r('ShippingOverrideItems') },
		],
		false
	),
	ShippingOverrideItems: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('AmbitiousProperties') },
			{ json: 'required', js: 'required', typ: a('') },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	AmbitiousProperties: o(
		[
			{
				json: 'ShippingOverrideIsShippingAllowed',
				js: 'ShippingOverrideIsShippingAllowed',
				typ: r('ProcessMode'),
			},
			{ json: 'ShippingOverrideShipMethod', js: 'ShippingOverrideShipMethod', typ: r('ProcessMode') },
			{ json: 'ShippingOverrideShipRegion', js: 'ShippingOverrideShipRegion', typ: r('ProcessMode') },
			{ json: 'ShippingOverrideshipPrice', js: 'ShippingOverrideshipPrice', typ: r('MinimumAdvertisedPrice') },
		],
		false
	),
	ShippingProgramOverrides: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('CountryOfOriginComponentsType') },
			{ json: 'title', js: 'title', typ: '' },
			{ json: 'items', js: 'items', typ: r('ShippingProgramOverridesItems') },
		],
		false
	),
	ShippingProgramOverridesItems: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('CunningProperties') },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	CunningProperties: o(
		[
			{ json: 'twoDayShippingOverride', js: 'twoDayShippingOverride', typ: r('ProcessMode') },
			{ json: 'twoDayShippingRegion', js: 'twoDayShippingRegion', typ: r('ProcessMode') },
			{ json: 'twoDayShippingNortheastRegionStates', js: 'twoDayShippingNortheastRegionStates', typ: r('Sku') },
			{ json: 'twoDayShippingMidwestRegionStates', js: 'twoDayShippingMidwestRegionStates', typ: r('Sku') },
			{ json: 'twoDayShippingWestRegionStates', js: 'twoDayShippingWestRegionStates', typ: r('Sku') },
			{ json: 'twoDayShippingSouthRegionStates', js: 'twoDayShippingSouthRegionStates', typ: r('Sku') },
		],
		false
	),
	AdditionalOfferAttributes: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('CountryOfOriginComponentsType') },
			{ json: 'title', js: 'title', typ: '' },
			{ json: 'items', js: 'items', typ: r('AdditionalOfferAttributesItems') },
			{ json: 'minItems', js: 'minItems', typ: 0 },
		],
		false
	),
	AdditionalOfferAttributesItems: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('MagentaProperties') },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	MagentaProperties: o(
		[
			{
				json: 'additionalOfferAttributeName',
				js: 'additionalOfferAttributeName',
				typ: r('FabricCareInstructions'),
			},
			{
				json: 'additionalOfferAttributeValue',
				js: 'additionalOfferAttributeValue',
				typ: r('FabricCareInstructions'),
			},
		],
		false
	),
	MPProduct: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'title', js: 'title', typ: '' },
			{ json: 'properties', js: 'properties', typ: r('MPProductProperties') },
			{ json: 'required', js: 'required', typ: a('') },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	MPProductProperties: o(
		[
			{ json: 'productName', js: 'productName', typ: r('Sku') },
			{ json: 'msrp', js: 'msrp', typ: r('MinimumAdvertisedPrice') },
			{ json: 'SkuUpdate', js: 'SkuUpdate', typ: r('ProcessMode') },
			{ json: 'ProductIdUpdate', js: 'ProductIdUpdate', typ: r('ProcessMode') },
			{
				json: 'additionalProductAttributes',
				js: 'additionalProductAttributes',
				typ: r('AdditionalProductAttributes'),
			},
			{ json: 'category', js: 'category', typ: r('Category') },
		],
		false
	),
	AdditionalProductAttributes: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('CountryOfOriginComponentsType') },
			{ json: 'title', js: 'title', typ: '' },
			{ json: 'items', js: 'items', typ: r('AdditionalProductAttributesItems') },
			{ json: 'minItems', js: 'minItems', typ: 0 },
		],
		false
	),
	AdditionalProductAttributesItems: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('FriskyProperties') },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	FriskyProperties: o(
		[
			{ json: 'productAttributeName', js: 'productAttributeName', typ: r('Sku') },
			{ json: 'productAttributeValue', js: 'productAttributeValue', typ: r('FabricCareInstructions') },
		],
		false
	),
	Category: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'title', js: 'title', typ: '' },
			{ json: 'properties', js: 'properties', typ: m(r('MpOffer')) },
			{ json: 'oneOf', js: 'oneOf', typ: a(r('OneOf')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	Media: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'title', js: 'title', typ: '' },
			{ json: 'properties', js: 'properties', typ: r('MediaProperties') },
			{ json: 'oneOf', js: 'oneOf', typ: a(r('OneOf')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	MediaProperties: o(
		[
			{ json: 'Movies', js: 'Movies', typ: r('Movies') },
			{ json: 'Music', js: 'Music', typ: r('Music') },
			{ json: 'TVShows', js: 'TVShows', typ: r('Movies') },
			{ json: 'BooksAndMagazines', js: 'BooksAndMagazines', typ: r('BooksAndMagazines') },
		],
		false
	),
	BooksAndMagazines: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('BooksAndMagazinesProperties') },
			{ json: 'required', js: 'required', typ: a(r('AnimalAccessoriesRequired')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	BooksAndMagazinesProperties: o(
		[
			{ json: 'shortDescription', js: 'shortDescription', typ: r('Sku') },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: r('FabricCareInstructions') },
			{ json: 'synopsis', js: 'synopsis', typ: r('Sku') },
			{ json: 'multipackQuantity', js: 'multipackQuantity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'countPerPack', js: 'countPerPack', typ: r('MinimumAdvertisedPrice') },
			{ json: 'count', js: 'count', typ: r('Sku') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: r('Sku') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: r('FabricCareInstructions') },
			{ json: 'title', js: 'title', typ: r('Sku') },
			{ json: 'bookFormat', js: 'bookFormat', typ: r('ProcessMode') },
			{ json: 'author', js: 'author', typ: r('FabricCareInstructions') },
			{ json: 'publisher', js: 'publisher', typ: r('Sku') },
			{ json: 'publicationDate', js: 'publicationDate', typ: r('FeedDateClass') },
			{ json: 'originalPublicationDate', js: 'originalPublicationDate', typ: r('FeedDateClass') },
			{ json: 'targetAudience', js: 'targetAudience', typ: r('FabricCareInstructions') },
			{ json: 'awardsWon', js: 'awardsWon', typ: r('FabricCareInstructions') },
			{ json: 'character', js: 'character', typ: r('Sku') },
			{ json: 'fictionNonfiction', js: 'fictionNonfiction', typ: r('ProcessMode') },
			{ json: 'genre', js: 'genre', typ: r('Sku') },
			{ json: 'subgenre', js: 'subgenre', typ: r('Sku') },
			{ json: 'subject', js: 'subject', typ: r('Sku') },
			{ json: 'seriesTitle', js: 'seriesTitle', typ: r('Sku') },
			{ json: 'numberInSeries', js: 'numberInSeries', typ: r('MinimumAdvertisedPrice') },
			{ json: 'issue', js: 'issue', typ: r('Sku') },
			{ json: 'assembledProductLength', js: 'assembledProductLength', typ: r('ShippingWeight') },
			{ json: 'assembledProductWidth', js: 'assembledProductWidth', typ: r('ShippingWeight') },
			{ json: 'assembledProductHeight', js: 'assembledProductHeight', typ: r('ShippingWeight') },
			{ json: 'assembledProductWeight', js: 'assembledProductWeight', typ: r('ShippingWeight') },
			{ json: 'variantGroupId', js: 'variantGroupId', typ: r('Sku') },
			{ json: 'variantAttributeNames', js: 'variantAttributeNames', typ: r('CountryOfOriginComponents') },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: r('ProcessMode') },
			{ json: 'swatchImages', js: 'swatchImages', typ: r('SwatchImages') },
			{ json: 'smallPartsWarnings', js: 'smallPartsWarnings', typ: r('SmallPartsWarnings') },
			{ json: 'isAdultProduct', js: 'isAdultProduct', typ: r('ProcessMode') },
			{ json: 'edition', js: 'edition', typ: r('Sku') },
			{ json: 'numberOfDiscs', js: 'numberOfDiscs', typ: r('MinimumAdvertisedPrice') },
			{ json: 'originalLanguages', js: 'originalLanguages', typ: r('FabricCareInstructions') },
			{ json: 'numberOfPages', js: 'numberOfPages', typ: r('MinimumAdvertisedPrice') },
			{ json: 'isUnabridged', js: 'isUnabridged', typ: r('ProcessMode') },
			{ json: 'isLargePrint', js: 'isLargePrint', typ: r('ProcessMode') },
			{ json: 'readingLevel', js: 'readingLevel', typ: r('Sku') },
			{ json: 'editor', js: 'editor', typ: r('Sku') },
			{ json: 'translator', js: 'translator', typ: r('Sku') },
			{ json: 'translatedFrom', js: 'translatedFrom', typ: r('Sku') },
			{ json: 'illustrator', js: 'illustrator', typ: r('Sku') },
			{ json: 'bisacSubjectCodes', js: 'bisacSubjectCodes', typ: r('FabricCareInstructions') },
			{ json: 'sportsLeague', js: 'sportsLeague', typ: r('Sku') },
			{ json: 'sportsTeam', js: 'sportsTeam', typ: r('Sku') },
			{ json: 'athlete', js: 'athlete', typ: r('Sku') },
			{ json: 'autographedBy', js: 'autographedBy', typ: r('Sku') },
			{ json: 'features', js: 'features', typ: r('FabricCareInstructions') },
			{ json: 'keywords', js: 'keywords', typ: r('Sku') },
		],
		false
	),
	Movies: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('MoviesProperties') },
			{ json: 'required', js: 'required', typ: a('') },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	MoviesProperties: o(
		[
			{ json: 'shortDescription', js: 'shortDescription', typ: r('Sku') },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: r('FabricCareInstructions') },
			{ json: 'synopsis', js: 'synopsis', typ: r('Sku') },
			{ json: 'multipackQuantity', js: 'multipackQuantity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'countPerPack', js: 'countPerPack', typ: r('MinimumAdvertisedPrice') },
			{ json: 'count', js: 'count', typ: r('Sku') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: r('Sku') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: r('FabricCareInstructions') },
			{ json: 'title', js: 'title', typ: r('Sku') },
			{ json: 'physicalMediaFormat', js: 'physicalMediaFormat', typ: r('ProcessMode') },
			{ json: 'mpaaRating', js: 'mpaaRating', typ: u(undefined, r('ProcessMode')) },
			{ json: 'ratingReason', js: 'ratingReason', typ: r('Sku') },
			{ json: 'movieGenre', js: 'movieGenre', typ: u(undefined, r('Sku')) },
			{ json: 'movieSubgenre', js: 'movieSubgenre', typ: u(undefined, r('Sku')) },
			{ json: 'seriesTitle', js: 'seriesTitle', typ: r('Sku') },
			{ json: 'numberInSeries', js: 'numberInSeries', typ: r('MinimumAdvertisedPrice') },
			{ json: 'director', js: 'director', typ: r('Sku') },
			{ json: 'actors', js: 'actors', typ: r('FabricCareInstructions') },
			{ json: 'screenwriter', js: 'screenwriter', typ: r('Sku') },
			{ json: 'studioProductionCompany', js: 'studioProductionCompany', typ: r('Sku') },
			{ json: 'targetAudience', js: 'targetAudience', typ: r('FabricCareInstructions') },
			{ json: 'awardsWon', js: 'awardsWon', typ: r('FabricCareInstructions') },
			{ json: 'character', js: 'character', typ: r('Sku') },
			{ json: 'variantGroupId', js: 'variantGroupId', typ: r('Sku') },
			{ json: 'variantAttributeNames', js: 'variantAttributeNames', typ: r('CountryOfOriginComponents') },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: r('ProcessMode') },
			{ json: 'swatchImages', js: 'swatchImages', typ: r('SwatchImages') },
			{ json: 'duration', js: 'duration', typ: r('ShippingWeight') },
			{ json: 'theatricalReleaseDate', js: 'theatricalReleaseDate', typ: u(undefined, r('FeedDateClass')) },
			{ json: 'isDubbed', js: 'isDubbed', typ: r('ProcessMode') },
			{ json: 'dubbedLanguages', js: 'dubbedLanguages', typ: r('FabricCareInstructions') },
			{ json: 'hasSubtitles', js: 'hasSubtitles', typ: r('ProcessMode') },
			{ json: 'subtitledLanguages', js: 'subtitledLanguages', typ: r('FabricCareInstructions') },
			{ json: 'audioTrackCodec', js: 'audioTrackCodec', typ: r('Sku') },
			{ json: 'aspectRatio', js: 'aspectRatio', typ: r('Sku') },
			{ json: 'isAdultProduct', js: 'isAdultProduct', typ: r('ProcessMode') },
			{ json: 'originalLanguages', js: 'originalLanguages', typ: r('FabricCareInstructions') },
			{ json: 'edition', js: 'edition', typ: r('Sku') },
			{ json: 'numberOfDiscs', js: 'numberOfDiscs', typ: r('MinimumAdvertisedPrice') },
			{ json: 'sportsLeague', js: 'sportsLeague', typ: r('Sku') },
			{ json: 'sportsTeam', js: 'sportsTeam', typ: r('Sku') },
			{ json: 'athlete', js: 'athlete', typ: r('Sku') },
			{ json: 'autographedBy', js: 'autographedBy', typ: u(undefined, r('Sku')) },
			{ json: 'features', js: 'features', typ: r('FabricCareInstructions') },
			{ json: 'keywords', js: 'keywords', typ: r('Sku') },
			{ json: 'tvRating', js: 'tvRating', typ: u(undefined, r('Sku')) },
			{ json: 'tvShowGenre', js: 'tvShowGenre', typ: u(undefined, r('Sku')) },
			{ json: 'tvShowSubgenre', js: 'tvShowSubgenre', typ: u(undefined, r('Sku')) },
			{ json: 'tvNetwork', js: 'tvNetwork', typ: u(undefined, r('Sku')) },
			{ json: 'tvShowSeason', js: 'tvShowSeason', typ: u(undefined, r('Sku')) },
			{ json: 'numberOfEpisodes', js: 'numberOfEpisodes', typ: u(undefined, r('MinimumAdvertisedPrice')) },
			{ json: 'episode', js: 'episode', typ: u(undefined, r('MinimumAdvertisedPrice')) },
			{ json: 'releaseDate', js: 'releaseDate', typ: u(undefined, r('FeedDateClass')) },
			{ json: 'dvdReleaseDate', js: 'dvdReleaseDate', typ: u(undefined, r('FeedDateClass')) },
		],
		false
	),
	Music: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('MusicProperties') },
			{ json: 'required', js: 'required', typ: a(r('AnimalAccessoriesRequired')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	MusicProperties: o(
		[
			{ json: 'shortDescription', js: 'shortDescription', typ: r('Sku') },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: r('FabricCareInstructions') },
			{ json: 'synopsis', js: 'synopsis', typ: r('Sku') },
			{ json: 'multipackQuantity', js: 'multipackQuantity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'countPerPack', js: 'countPerPack', typ: r('MinimumAdvertisedPrice') },
			{ json: 'count', js: 'count', typ: r('Sku') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: r('Sku') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: r('FabricCareInstructions') },
			{ json: 'title', js: 'title', typ: r('Sku') },
			{ json: 'physicalMediaFormat', js: 'physicalMediaFormat', typ: r('ProcessMode') },
			{ json: 'performer', js: 'performer', typ: r('FabricCareInstructions') },
			{ json: 'songwriter', js: 'songwriter', typ: r('Sku') },
			{ json: 'musicGenre', js: 'musicGenre', typ: r('Sku') },
			{ json: 'musicSubGenre', js: 'musicSubGenre', typ: r('Sku') },
			{ json: 'targetAudience', js: 'targetAudience', typ: r('FabricCareInstructions') },
			{ json: 'awardsWon', js: 'awardsWon', typ: r('FabricCareInstructions') },
			{ json: 'character', js: 'character', typ: r('Sku') },
			{ json: 'variantGroupId', js: 'variantGroupId', typ: r('Sku') },
			{ json: 'variantAttributeNames', js: 'variantAttributeNames', typ: r('CountryOfOriginComponents') },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: r('ProcessMode') },
			{ json: 'swatchImages', js: 'swatchImages', typ: r('SwatchImages') },
			{ json: 'digitalAudioFileFormat', js: 'digitalAudioFileFormat', typ: r('FabricCareInstructions') },
			{ json: 'recordLabel', js: 'recordLabel', typ: r('Sku') },
			{ json: 'releaseDate', js: 'releaseDate', typ: r('FeedDateClass') },
			{ json: 'musicReleaseType', js: 'musicReleaseType', typ: r('Sku') },
			{ json: 'trackListings', js: 'trackListings', typ: r('TrackListings') },
			{ json: 'numberOfTracks', js: 'numberOfTracks', typ: r('MinimumAdvertisedPrice') },
			{ json: 'musicProducer', js: 'musicProducer', typ: r('Sku') },
			{ json: 'seriesTitle', js: 'seriesTitle', typ: r('Sku') },
			{ json: 'numberInSeries', js: 'numberInSeries', typ: r('MinimumAdvertisedPrice') },
			{ json: 'isEdited', js: 'isEdited', typ: r('ProcessMode') },
			{ json: 'isEnhanced', js: 'isEnhanced', typ: r('ProcessMode') },
			{ json: 'edition', js: 'edition', typ: r('Sku') },
			{ json: 'hasParentalAdvisoryLabel', js: 'hasParentalAdvisoryLabel', typ: r('ProcessMode') },
			{ json: 'ratingReason', js: 'ratingReason', typ: r('Sku') },
			{ json: 'parentalAdvisoryLabelURL', js: 'parentalAdvisoryLabelURL', typ: r('FabricCareInstructions') },
			{ json: 'numberOfDiscs', js: 'numberOfDiscs', typ: r('MinimumAdvertisedPrice') },
			{ json: 'isAdultProduct', js: 'isAdultProduct', typ: r('ProcessMode') },
			{ json: 'originalLanguages', js: 'originalLanguages', typ: r('FabricCareInstructions') },
			{ json: 'autographedBy', js: 'autographedBy', typ: r('Sku') },
			{ json: 'features', js: 'features', typ: r('FabricCareInstructions') },
			{ json: 'keywords', js: 'keywords', typ: r('Sku') },
		],
		false
	),
	TrackListings: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('CountryOfOriginComponentsType') },
			{ json: 'title', js: 'title', typ: '' },
			{ json: 'items', js: 'items', typ: r('TrackListingsItems') },
			{ json: 'minItems', js: 'minItems', typ: 0 },
		],
		false
	),
	TrackListingsItems: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('MischievousProperties') },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	MischievousProperties: o(
		[
			{ json: 'trackNumber', js: 'trackNumber', typ: r('MinimumAdvertisedPrice') },
			{ json: 'trackName', js: 'trackName', typ: r('Sku') },
			{ json: 'trackDuration', js: 'trackDuration', typ: r('Sku') },
		],
		false
	),
	MusicalInstrument: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'title', js: 'title', typ: '' },
			{ json: 'properties', js: 'properties', typ: r('MusicalInstrumentProperties') },
			{ json: 'oneOf', js: 'oneOf', typ: a(r('OneOf')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	MusicalInstrumentProperties: o(
		[
			{ json: 'SoundAndRecording', js: 'SoundAndRecording', typ: r('MusicalInstruments') },
			{ json: 'InstrumentAccessories', js: 'InstrumentAccessories', typ: r('InstrumentAccessories') },
			{ json: 'MusicalInstruments', js: 'MusicalInstruments', typ: r('MusicalInstruments') },
			{ json: 'MusicCasesAndBags', js: 'MusicCasesAndBags', typ: r('MusicCasesAndBags') },
		],
		false
	),
	InstrumentAccessories: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('InstrumentAccessoriesProperties') },
			{ json: 'required', js: 'required', typ: a(r('AnimalAccessoriesRequired')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	InstrumentAccessoriesProperties: o(
		[
			{ json: 'shortDescription', js: 'shortDescription', typ: r('Sku') },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: r('FabricCareInstructions') },
			{ json: 'brand', js: 'brand', typ: r('Sku') },
			{ json: 'manufacturer', js: 'manufacturer', typ: r('Sku') },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: r('Sku') },
			{ json: 'modelNumber', js: 'modelNumber', typ: r('Sku') },
			{ json: 'multipackQuantity', js: 'multipackQuantity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'countPerPack', js: 'countPerPack', typ: r('MinimumAdvertisedPrice') },
			{ json: 'count', js: 'count', typ: r('Sku') },
			{ json: 'pieceCount', js: 'pieceCount', typ: r('MinimumAdvertisedPrice') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: r('Sku') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: r('FabricCareInstructions') },
			{ json: 'instrument', js: 'instrument', typ: r('FabricCareInstructions') },
			{ json: 'color', js: 'color', typ: r('Sku') },
			{ json: 'colorCategory', js: 'colorCategory', typ: r('CountryOfOriginComponents') },
			{ json: 'size', js: 'size', typ: r('Sku') },
			{ json: 'assembledProductLength', js: 'assembledProductLength', typ: r('ShippingWeight') },
			{ json: 'assembledProductWidth', js: 'assembledProductWidth', typ: r('ShippingWeight') },
			{ json: 'assembledProductHeight', js: 'assembledProductHeight', typ: r('ShippingWeight') },
			{ json: 'assembledProductWeight', js: 'assembledProductWeight', typ: r('ShippingWeight') },
			{ json: 'variantGroupId', js: 'variantGroupId', typ: r('Sku') },
			{ json: 'variantAttributeNames', js: 'variantAttributeNames', typ: r('CountryOfOriginComponents') },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: r('ProcessMode') },
			{ json: 'swatchImages', js: 'swatchImages', typ: r('SwatchImages') },
			{ json: 'smallPartsWarnings', js: 'smallPartsWarnings', typ: r('SmallPartsWarnings') },
			{ json: 'batteryTechnologyType', js: 'batteryTechnologyType', typ: r('ProcessMode') },
			{ json: 'hasWarranty', js: 'hasWarranty', typ: r('ProcessMode') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: r('Sku') },
			{ json: 'warrantyText', js: 'warrantyText', typ: r('Sku') },
			{ json: 'hasIngredientList', js: 'hasIngredientList', typ: r('ProcessMode') },
			{ json: 'ingredientListImage', js: 'ingredientListImage', typ: r('Sku') },
			{ json: 'ingredients', js: 'ingredients', typ: r('Sku') },
			{
				json: 'compositeWoodCertificationCode',
				js: 'compositeWoodCertificationCode',
				typ: r('CompositeWoodCertificationCode'),
			},
			{ json: 'isAerosol', js: 'isAerosol', typ: r('ProcessMode') },
			{ json: 'isChemical', js: 'isChemical', typ: r('ProcessMode') },
			{ json: 'inputsAndOutputs', js: 'inputsAndOutputs', typ: r('InputsAndOutputs') },
			{ json: 'displayTechnology', js: 'displayTechnology', typ: r('Sku') },
			{ json: 'wirelessTechnologies', js: 'wirelessTechnologies', typ: r('FabricCareInstructions') },
			{ json: 'hasBluetooth', js: 'hasBluetooth', typ: r('ProcessMode') },
			{ json: 'isRemoteControlIncluded', js: 'isRemoteControlIncluded', typ: r('ProcessMode') },
			{ json: 'batteryLife', js: 'batteryLife', typ: r('ShippingWeight') },
			{ json: 'pattern', js: 'pattern', typ: r('Sku') },
			{ json: 'material', js: 'material', typ: r('Sku') },
			{ json: 'isPortable', js: 'isPortable', typ: r('ProcessMode') },
			{ json: 'recommendedUses', js: 'recommendedUses', typ: r('FabricCareInstructions') },
			{ json: 'recommendedLocations', js: 'recommendedLocations', typ: r('FabricCareInstructions') },
			{ json: 'sportsLeague', js: 'sportsLeague', typ: r('Sku') },
			{ json: 'sportsTeam', js: 'sportsTeam', typ: r('Sku') },
			{ json: 'athlete', js: 'athlete', typ: r('Sku') },
			{ json: 'autographedBy', js: 'autographedBy', typ: r('Sku') },
			{ json: 'features', js: 'features', typ: r('FabricCareInstructions') },
			{ json: 'keywords', js: 'keywords', typ: r('Sku') },
		],
		false
	),
	MusicCasesAndBags: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('MusicCasesAndBagsProperties') },
			{ json: 'required', js: 'required', typ: a(r('AnimalAccessoriesRequired')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	MusicCasesAndBagsProperties: o(
		[
			{ json: 'shortDescription', js: 'shortDescription', typ: r('Sku') },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: r('FabricCareInstructions') },
			{ json: 'brand', js: 'brand', typ: r('Sku') },
			{ json: 'manufacturer', js: 'manufacturer', typ: r('Sku') },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: r('Sku') },
			{ json: 'modelNumber', js: 'modelNumber', typ: r('Sku') },
			{ json: 'multipackQuantity', js: 'multipackQuantity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'countPerPack', js: 'countPerPack', typ: r('MinimumAdvertisedPrice') },
			{ json: 'count', js: 'count', typ: r('Sku') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: r('Sku') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: r('FabricCareInstructions') },
			{ json: 'instrument', js: 'instrument', typ: u(undefined, r('FabricCareInstructions')) },
			{ json: 'color', js: 'color', typ: r('Sku') },
			{ json: 'colorCategory', js: 'colorCategory', typ: u(undefined, r('CountryOfOriginComponents')) },
			{ json: 'size', js: 'size', typ: r('Sku') },
			{ json: 'assembledProductLength', js: 'assembledProductLength', typ: r('ShippingWeight') },
			{ json: 'assembledProductWidth', js: 'assembledProductWidth', typ: r('ShippingWeight') },
			{ json: 'assembledProductHeight', js: 'assembledProductHeight', typ: r('ShippingWeight') },
			{ json: 'assembledProductWeight', js: 'assembledProductWeight', typ: r('ShippingWeight') },
			{ json: 'variantGroupId', js: 'variantGroupId', typ: r('Sku') },
			{ json: 'variantAttributeNames', js: 'variantAttributeNames', typ: r('CountryOfOriginComponents') },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: r('ProcessMode') },
			{ json: 'swatchImages', js: 'swatchImages', typ: r('SwatchImages') },
			{ json: 'hasWarranty', js: 'hasWarranty', typ: r('ProcessMode') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: r('Sku') },
			{ json: 'warrantyText', js: 'warrantyText', typ: r('Sku') },
			{ json: 'fabricContent', js: 'fabricContent', typ: u(undefined, r('FabricContent')) },
			{
				json: 'fabricCareInstructions',
				js: 'fabricCareInstructions',
				typ: u(undefined, r('FabricCareInstructions')),
			},
			{ json: 'shape', js: 'shape', typ: u(undefined, r('Sku')) },
			{ json: 'hardOrSoftCase', js: 'hardOrSoftCase', typ: u(undefined, r('ProcessMode')) },
			{ json: 'isWheeled', js: 'isWheeled', typ: u(undefined, r('ProcessMode')) },
			{ json: 'material', js: 'material', typ: u(undefined, r('Sku')) },
			{ json: 'isPortable', js: 'isPortable', typ: u(undefined, r('ProcessMode')) },
			{ json: 'recommendedUses', js: 'recommendedUses', typ: u(undefined, r('FabricCareInstructions')) },
			{
				json: 'recommendedLocations',
				js: 'recommendedLocations',
				typ: u(undefined, r('FabricCareInstructions')),
			},
			{ json: 'features', js: 'features', typ: r('FabricCareInstructions') },
			{ json: 'keywords', js: 'keywords', typ: r('Sku') },
			{ json: 'pieceCount', js: 'pieceCount', typ: u(undefined, r('MinimumAdvertisedPrice')) },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: u(undefined, r('FabricCareInstructions')) },
			{ json: 'isProp65WarningRequired', js: 'isProp65WarningRequired', typ: u(undefined, r('ProcessMode')) },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: u(undefined, r('Sku')) },
			{ json: 'batteryTechnologyType', js: 'batteryTechnologyType', typ: u(undefined, r('ProcessMode')) },
			{ json: 'hasFuelContainer', js: 'hasFuelContainer', typ: u(undefined, r('ProcessMode')) },
			{ json: 'accessoriesIncluded', js: 'accessoriesIncluded', typ: u(undefined, r('FabricCareInstructions')) },
			{ json: 'isWaterproof', js: 'isWaterproof', typ: u(undefined, r('ProcessMode')) },
			{ json: 'isFireResistant', js: 'isFireResistant', typ: u(undefined, r('ProcessMode')) },
			{ json: 'cleaningCareAndMaintenance', js: 'cleaningCareAndMaintenance', typ: u(undefined, r('Sku')) },
			{
				json: 'requiresTextileActLabeling',
				js: 'requiresTextileActLabeling',
				typ: u(undefined, r('ProcessMode')),
			},
			{ json: 'countryOfOriginTextiles', js: 'countryOfOriginTextiles', typ: u(undefined, r('ProcessMode')) },
			{ json: 'vehicleType', js: 'vehicleType', typ: u(undefined, r('Sku')) },
			{ json: 'sportsLeague', js: 'sportsLeague', typ: u(undefined, r('Sku')) },
			{ json: 'sportsTeam', js: 'sportsTeam', typ: u(undefined, r('Sku')) },
			{ json: 'athlete', js: 'athlete', typ: u(undefined, r('Sku')) },
			{ json: 'autographedBy', js: 'autographedBy', typ: u(undefined, r('Sku')) },
		],
		false
	),
	MusicalInstruments: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('MusicalInstrumentsProperties') },
			{ json: 'required', js: 'required', typ: a(r('AnimalAccessoriesRequired')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	MusicalInstrumentsProperties: o(
		[
			{
				json: 'compositeWoodCertificationCode',
				js: 'compositeWoodCertificationCode',
				typ: u(undefined, r('CompositeWoodCertificationCode')),
			},
			{ json: 'shortDescription', js: 'shortDescription', typ: r('Sku') },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: r('FabricCareInstructions') },
			{ json: 'brand', js: 'brand', typ: r('Sku') },
			{ json: 'manufacturer', js: 'manufacturer', typ: r('Sku') },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: r('Sku') },
			{ json: 'modelNumber', js: 'modelNumber', typ: r('Sku') },
			{ json: 'multipackQuantity', js: 'multipackQuantity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'countPerPack', js: 'countPerPack', typ: r('MinimumAdvertisedPrice') },
			{ json: 'count', js: 'count', typ: r('Sku') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: r('Sku') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: r('FabricCareInstructions') },
			{ json: 'instrument', js: 'instrument', typ: u(undefined, r('FabricCareInstructions')) },
			{ json: 'musicalInstrumentFamily', js: 'musicalInstrumentFamily', typ: u(undefined, r('Sku')) },
			{ json: 'color', js: 'color', typ: r('Sku') },
			{ json: 'colorCategory', js: 'colorCategory', typ: r('CountryOfOriginComponents') },
			{ json: 'isAcoustic', js: 'isAcoustic', typ: u(undefined, r('ProcessMode')) },
			{ json: 'isElectric', js: 'isElectric', typ: u(undefined, r('ProcessMode')) },
			{ json: 'assembledProductLength', js: 'assembledProductLength', typ: r('ShippingWeight') },
			{ json: 'assembledProductWidth', js: 'assembledProductWidth', typ: r('ShippingWeight') },
			{ json: 'assembledProductHeight', js: 'assembledProductHeight', typ: r('ShippingWeight') },
			{ json: 'assembledProductWeight', js: 'assembledProductWeight', typ: r('ShippingWeight') },
			{ json: 'variantGroupId', js: 'variantGroupId', typ: r('Sku') },
			{ json: 'variantAttributeNames', js: 'variantAttributeNames', typ: r('CountryOfOriginComponents') },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: r('ProcessMode') },
			{ json: 'swatchImages', js: 'swatchImages', typ: r('SwatchImages') },
			{ json: 'smallPartsWarnings', js: 'smallPartsWarnings', typ: r('SmallPartsWarnings') },
			{ json: 'batteryTechnologyType', js: 'batteryTechnologyType', typ: r('ProcessMode') },
			{ json: 'hasWarranty', js: 'hasWarranty', typ: r('ProcessMode') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: r('Sku') },
			{ json: 'warrantyText', js: 'warrantyText', typ: r('Sku') },
			{ json: 'batteriesRequired', js: 'batteriesRequired', typ: r('ProcessMode') },
			{ json: 'audioPowerOutput', js: 'audioPowerOutput', typ: r('ShippingWeight') },
			{ json: 'isPowered', js: 'isPowered', typ: r('ProcessMode') },
			{ json: 'powerType', js: 'powerType', typ: r('Sku') },
			{ json: 'material', js: 'material', typ: r('Sku') },
			{ json: 'isPortable', js: 'isPortable', typ: r('ProcessMode') },
			{ json: 'recommendedUses', js: 'recommendedUses', typ: r('FabricCareInstructions') },
			{ json: 'recommendedLocations', js: 'recommendedLocations', typ: r('FabricCareInstructions') },
			{ json: 'inputsAndOutputs', js: 'inputsAndOutputs', typ: r('InputsAndOutputs') },
			{ json: 'displayTechnology', js: 'displayTechnology', typ: u(undefined, r('Sku')) },
			{ json: 'hasBluetooth', js: 'hasBluetooth', typ: r('ProcessMode') },
			{ json: 'hasIntegratedSpeakers', js: 'hasIntegratedSpeakers', typ: r('ProcessMode') },
			{ json: 'batteryLife', js: 'batteryLife', typ: r('ShippingWeight') },
			{ json: 'isFretted', js: 'isFretted', typ: u(undefined, r('ProcessMode')) },
			{ json: 'isCollectible', js: 'isCollectible', typ: u(undefined, r('ProcessMode')) },
			{ json: 'ageGroup', js: 'ageGroup', typ: u(undefined, r('CountryOfOriginComponents')) },
			{ json: 'shape', js: 'shape', typ: u(undefined, r('Sku')) },
			{ json: 'finish', js: 'finish', typ: u(undefined, r('Sku')) },
			{ json: 'features', js: 'features', typ: r('FabricCareInstructions') },
			{ json: 'keywords', js: 'keywords', typ: r('Sku') },
			{ json: 'pieceCount', js: 'pieceCount', typ: u(undefined, r('MinimumAdvertisedPrice')) },
			{ json: 'equalizerControl', js: 'equalizerControl', typ: u(undefined, r('Sku')) },
			{
				json: 'wirelessTechnologies',
				js: 'wirelessTechnologies',
				typ: u(undefined, r('FabricCareInstructions')),
			},
			{ json: 'isRemoteControlIncluded', js: 'isRemoteControlIncluded', typ: u(undefined, r('ProcessMode')) },
			{ json: 'microphoneTechnology', js: 'microphoneTechnology', typ: u(undefined, r('Sku')) },
			{ json: 'impedance', js: 'impedance', typ: u(undefined, r('Impedance')) },
		],
		false
	),
	OccasionAndSeasonal: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'title', js: 'title', typ: '' },
			{ json: 'properties', js: 'properties', typ: r('OccasionAndSeasonalProperties') },
			{ json: 'oneOf', js: 'oneOf', typ: a(r('OneOf')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	OccasionAndSeasonalProperties: o(
		[
			{ json: 'Funeral', js: 'Funeral', typ: r('CeremonialClothingAndAccessories') },
			{
				json: 'CeremonialClothingAndAccessories',
				js: 'CeremonialClothingAndAccessories',
				typ: r('CeremonialClothingAndAccessories'),
			},
			{ json: 'DecorationsAndFavors', js: 'DecorationsAndFavors', typ: r('DecorationsAndFavors') },
			{ json: 'Costumes', js: 'Costumes', typ: r('CeremonialClothingAndAccessories') },
			{ json: 'GiftSupplyAndAwards', js: 'GiftSupplyAndAwards', typ: r('CeremonialClothingAndAccessories') },
		],
		false
	),
	CeremonialClothingAndAccessories: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('CeremonialClothingAndAccessoriesProperties') },
			{ json: 'required', js: 'required', typ: a(r('AnimalAccessoriesRequired')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	CeremonialClothingAndAccessoriesProperties: o(
		[
			{ json: 'shortDescription', js: 'shortDescription', typ: r('Sku') },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: r('FabricCareInstructions') },
			{ json: 'brand', js: 'brand', typ: r('Sku') },
			{ json: 'manufacturer', js: 'manufacturer', typ: r('Sku') },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: r('Sku') },
			{ json: 'modelNumber', js: 'modelNumber', typ: r('Sku') },
			{ json: 'multipackQuantity', js: 'multipackQuantity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'countPerPack', js: 'countPerPack', typ: r('MinimumAdvertisedPrice') },
			{ json: 'count', js: 'count', typ: r('Sku') },
			{ json: 'pieceCount', js: 'pieceCount', typ: r('MinimumAdvertisedPrice') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: r('Sku') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: r('FabricCareInstructions') },
			{ json: 'material', js: 'material', typ: r('Sku') },
			{ json: 'color', js: 'color', typ: r('Sku') },
			{ json: 'colorCategory', js: 'colorCategory', typ: r('CountryOfOriginComponents') },
			{ json: 'pattern', js: 'pattern', typ: r('Sku') },
			{ json: 'occasion', js: 'occasion', typ: r('Sku') },
			{ json: 'clothingSize', js: 'clothingSize', typ: u(undefined, r('Sku')) },
			{ json: 'clothingSizeGroup', js: 'clothingSizeGroup', typ: u(undefined, r('ProcessMode')) },
			{ json: 'size', js: 'size', typ: r('Sku') },
			{ json: 'gender', js: 'gender', typ: u(undefined, r('ProcessMode')) },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: r('FabricCareInstructions') },
			{ json: 'assembledProductLength', js: 'assembledProductLength', typ: r('ShippingWeight') },
			{ json: 'assembledProductWidth', js: 'assembledProductWidth', typ: r('ShippingWeight') },
			{ json: 'assembledProductHeight', js: 'assembledProductHeight', typ: r('ShippingWeight') },
			{ json: 'assembledProductWeight', js: 'assembledProductWeight', typ: r('ShippingWeight') },
			{ json: 'variantGroupId', js: 'variantGroupId', typ: r('Sku') },
			{ json: 'variantAttributeNames', js: 'variantAttributeNames', typ: r('CountryOfOriginComponents') },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: r('ProcessMode') },
			{ json: 'swatchImages', js: 'swatchImages', typ: r('SwatchImages') },
			{ json: 'isProp65WarningRequired', js: 'isProp65WarningRequired', typ: r('ProcessMode') },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: r('Sku') },
			{
				json: 'requiresTextileActLabeling',
				js: 'requiresTextileActLabeling',
				typ: u(undefined, r('ProcessMode')),
			},
			{ json: 'countryOfOriginTextiles', js: 'countryOfOriginTextiles', typ: u(undefined, r('ProcessMode')) },
			{ json: 'fabricContent', js: 'fabricContent', typ: u(undefined, r('FabricContent')) },
			{
				json: 'fabricCareInstructions',
				js: 'fabricCareInstructions',
				typ: u(undefined, r('FabricCareInstructions')),
			},
			{ json: 'recommendedUses', js: 'recommendedUses', typ: r('FabricCareInstructions') },
			{ json: 'features', js: 'features', typ: r('FabricCareInstructions') },
			{ json: 'keywords', js: 'keywords', typ: r('Sku') },
			{ json: 'targetAudience', js: 'targetAudience', typ: u(undefined, r('FabricCareInstructions')) },
			{ json: 'theme', js: 'theme', typ: u(undefined, r('Sku')) },
			{ json: 'character', js: 'character', typ: u(undefined, r('Sku')) },
			{ json: 'animalType', js: 'animalType', typ: u(undefined, r('Sku')) },
			{ json: 'smallPartsWarnings', js: 'smallPartsWarnings', typ: u(undefined, r('SmallPartsWarnings')) },
			{ json: 'hasIngredientList', js: 'hasIngredientList', typ: u(undefined, r('ProcessMode')) },
			{ json: 'ingredientListImage', js: 'ingredientListImage', typ: u(undefined, r('Sku')) },
			{ json: 'ingredients', js: 'ingredients', typ: u(undefined, r('Sku')) },
			{ json: 'hasBatteries', js: 'hasBatteries', typ: u(undefined, r('ProcessMode')) },
			{ json: 'batteryTechnologyType', js: 'batteryTechnologyType', typ: u(undefined, r('ProcessMode')) },
			{ json: 'isAerosol', js: 'isAerosol', typ: u(undefined, r('ProcessMode')) },
			{ json: 'wigStyles', js: 'wigStyles', typ: u(undefined, r('FabricCareInstructions')) },
			{ json: 'shape', js: 'shape', typ: u(undefined, r('Sku')) },
			{ json: 'finish', js: 'finish', typ: u(undefined, r('Sku')) },
			{ json: 'hasWarranty', js: 'hasWarranty', typ: u(undefined, r('ProcessMode')) },
			{ json: 'isAssemblyRequired', js: 'isAssemblyRequired', typ: u(undefined, r('ProcessMode')) },
			{ json: 'assemblyInstructions', js: 'assemblyInstructions', typ: u(undefined, r('Sku')) },
			{ json: 'sportsTeam', js: 'sportsTeam', typ: u(undefined, r('Sku')) },
			{ json: 'sportsLeague', js: 'sportsLeague', typ: u(undefined, r('Sku')) },
			{ json: 'sport', js: 'sport', typ: u(undefined, r('Sku')) },
		],
		false
	),
	DecorationsAndFavors: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('DecorationsAndFavorsProperties') },
			{ json: 'required', js: 'required', typ: a(r('AnimalAccessoriesRequired')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	DecorationsAndFavorsProperties: o(
		[
			{ json: 'shortDescription', js: 'shortDescription', typ: r('Sku') },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: r('FabricCareInstructions') },
			{ json: 'brand', js: 'brand', typ: r('Sku') },
			{ json: 'manufacturer', js: 'manufacturer', typ: r('Sku') },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: r('Sku') },
			{ json: 'modelNumber', js: 'modelNumber', typ: r('Sku') },
			{ json: 'multipackQuantity', js: 'multipackQuantity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'countPerPack', js: 'countPerPack', typ: r('MinimumAdvertisedPrice') },
			{ json: 'count', js: 'count', typ: r('Sku') },
			{ json: 'pieceCount', js: 'pieceCount', typ: r('MinimumAdvertisedPrice') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: r('Sku') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: r('FabricCareInstructions') },
			{ json: 'material', js: 'material', typ: r('Sku') },
			{ json: 'color', js: 'color', typ: r('Sku') },
			{ json: 'colorCategory', js: 'colorCategory', typ: r('CountryOfOriginComponents') },
			{ json: 'pattern', js: 'pattern', typ: r('Sku') },
			{ json: 'diameter', js: 'diameter', typ: r('ShippingWeight') },
			{ json: 'size', js: 'size', typ: r('Sku') },
			{ json: 'occasion', js: 'occasion', typ: r('Sku') },
			{ json: 'holidayLightingStyle', js: 'holidayLightingStyle', typ: r('FabricCareInstructions') },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: r('FabricCareInstructions') },
			{ json: 'theme', js: 'theme', typ: r('Sku') },
			{ json: 'character', js: 'character', typ: r('Sku') },
			{ json: 'shape', js: 'shape', typ: r('Sku') },
			{ json: 'finish', js: 'finish', typ: r('Sku') },
			{ json: 'assembledProductLength', js: 'assembledProductLength', typ: r('ShippingWeight') },
			{ json: 'assembledProductWidth', js: 'assembledProductWidth', typ: r('ShippingWeight') },
			{ json: 'assembledProductHeight', js: 'assembledProductHeight', typ: r('ShippingWeight') },
			{ json: 'assembledProductWeight', js: 'assembledProductWeight', typ: r('ShippingWeight') },
			{ json: 'variantGroupId', js: 'variantGroupId', typ: r('Sku') },
			{ json: 'variantAttributeNames', js: 'variantAttributeNames', typ: r('CountryOfOriginComponents') },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: r('ProcessMode') },
			{ json: 'swatchImages', js: 'swatchImages', typ: r('SwatchImages') },
			{ json: 'isProp65WarningRequired', js: 'isProp65WarningRequired', typ: r('ProcessMode') },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: r('Sku') },
			{ json: 'smallPartsWarnings', js: 'smallPartsWarnings', typ: r('SmallPartsWarnings') },
			{ json: 'batteryTechnologyType', js: 'batteryTechnologyType', typ: r('ProcessMode') },
			{ json: 'hasExpiration', js: 'hasExpiration', typ: r('ProcessMode') },
			{ json: 'hasIngredientList', js: 'hasIngredientList', typ: r('ProcessMode') },
			{ json: 'ingredientListImage', js: 'ingredientListImage', typ: r('Sku') },
			{ json: 'isAssemblyRequired', js: 'isAssemblyRequired', typ: r('ProcessMode') },
			{ json: 'assemblyInstructions', js: 'assemblyInstructions', typ: r('Sku') },
			{ json: 'lightBulbType', js: 'lightBulbType', typ: r('Sku') },
			{ json: 'lightBulbColor', js: 'lightBulbColor', typ: r('Sku') },
			{ json: 'numberOfLights', js: 'numberOfLights', typ: r('MinimumAdvertisedPrice') },
			{ json: 'powerType', js: 'powerType', typ: r('Sku') },
			{ json: 'watts', js: 'watts', typ: r('ShippingWeight') },
			{ json: 'recommendedUses', js: 'recommendedUses', typ: r('FabricCareInstructions') },
			{ json: 'isInflatable', js: 'isInflatable', typ: r('ProcessMode') },
			{ json: 'sportsLeague', js: 'sportsLeague', typ: r('Sku') },
			{ json: 'sportsTeam', js: 'sportsTeam', typ: r('Sku') },
			{ json: 'athlete', js: 'athlete', typ: r('Sku') },
			{ json: 'autographedBy', js: 'autographedBy', typ: r('Sku') },
			{ json: 'features', js: 'features', typ: r('FabricCareInstructions') },
			{ json: 'keywords', js: 'keywords', typ: r('Sku') },
			{ json: 'isAnimated', js: 'isAnimated', typ: r('ProcessMode') },
			{ json: 'isAdultProduct', js: 'isAdultProduct', typ: r('ProcessMode') },
			{ json: 'ageGroup', js: 'ageGroup', typ: r('CountryOfOriginComponents') },
			{ json: 'gender', js: 'gender', typ: r('ProcessMode') },
		],
		false
	),
	OfficeCategory: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'title', js: 'title', typ: '' },
			{ json: 'properties', js: 'properties', typ: r('OfficeCategoryProperties') },
			{ json: 'oneOf', js: 'oneOf', typ: a(r('OneOf')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	OfficeCategoryProperties: o([{ json: 'Office', js: 'Office', typ: r('Office') }], false),
	Office: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('OfficeProperties') },
			{ json: 'required', js: 'required', typ: a(r('AnimalAccessoriesRequired')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	OfficeProperties: o(
		[
			{ json: 'shortDescription', js: 'shortDescription', typ: r('Sku') },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: r('FabricCareInstructions') },
			{ json: 'brand', js: 'brand', typ: r('Sku') },
			{ json: 'manufacturer', js: 'manufacturer', typ: r('Sku') },
			{ json: 'modelNumber', js: 'modelNumber', typ: r('Sku') },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: r('Sku') },
			{ json: 'multipackQuantity', js: 'multipackQuantity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'countPerPack', js: 'countPerPack', typ: r('MinimumAdvertisedPrice') },
			{ json: 'count', js: 'count', typ: r('Sku') },
			{ json: 'pieceCount', js: 'pieceCount', typ: r('MinimumAdvertisedPrice') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: r('Sku') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: r('FabricCareInstructions') },
			{ json: 'color', js: 'color', typ: r('Sku') },
			{ json: 'colorCategory', js: 'colorCategory', typ: r('CountryOfOriginComponents') },
			{ json: 'size', js: 'size', typ: r('Sku') },
			{ json: 'ageGroup', js: 'ageGroup', typ: r('CountryOfOriginComponents') },
			{ json: 'material', js: 'material', typ: r('Sku') },
			{ json: 'capacity', js: 'capacity', typ: r('Sku') },
			{ json: 'occasion', js: 'occasion', typ: r('Sku') },
			{ json: 'paperSize', js: 'paperSize', typ: r('Sku') },
			{ json: 'assembledProductLength', js: 'assembledProductLength', typ: r('ShippingWeight') },
			{ json: 'assembledProductWidth', js: 'assembledProductWidth', typ: r('ShippingWeight') },
			{ json: 'assembledProductHeight', js: 'assembledProductHeight', typ: r('ShippingWeight') },
			{ json: 'assembledProductWeight', js: 'assembledProductWeight', typ: r('ShippingWeight') },
			{ json: 'variantGroupId', js: 'variantGroupId', typ: r('Sku') },
			{ json: 'variantAttributeNames', js: 'variantAttributeNames', typ: r('CountryOfOriginComponents') },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: r('ProcessMode') },
			{ json: 'swatchImages', js: 'swatchImages', typ: r('SwatchImages') },
			{ json: 'isProp65WarningRequired', js: 'isProp65WarningRequired', typ: r('ProcessMode') },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: r('Sku') },
			{ json: 'smallPartsWarnings', js: 'smallPartsWarnings', typ: r('SmallPartsWarnings') },
			{ json: 'batteryTechnologyType', js: 'batteryTechnologyType', typ: r('ProcessMode') },
			{ json: 'hasExpiration', js: 'hasExpiration', typ: r('ProcessMode') },
			{ json: 'hasWarranty', js: 'hasWarranty', typ: r('ProcessMode') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: r('Sku') },
			{ json: 'warrantyText', js: 'warrantyText', typ: r('Sku') },
			{ json: 'isLightingFactsLabelRequired', js: 'isLightingFactsLabelRequired', typ: r('ProcessMode') },
			{ json: 'lightingFactsLabel', js: 'lightingFactsLabel', typ: r('Sku') },
			{ json: 'pattern', js: 'pattern', typ: r('Sku') },
			{ json: 'shape', js: 'shape', typ: r('Sku') },
			{ json: 'finish', js: 'finish', typ: r('Sku') },
			{ json: 'theme', js: 'theme', typ: r('Sku') },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: r('FabricCareInstructions') },
			{ json: 'compatibleDevices', js: 'compatibleDevices', typ: r('Sku') },
			{ json: 'isPowered', js: 'isPowered', typ: r('ProcessMode') },
			{ json: 'powerType', js: 'powerType', typ: r('Sku') },
			{ json: 'brightness', js: 'brightness', typ: r('ShippingWeight') },
			{ json: 'dexterity', js: 'dexterity', typ: r('Sku') },
			{ json: 'systemOfMeasurement', js: 'systemOfMeasurement', typ: r('Sku') },
			{ json: 'holeSize', js: 'holeSize', typ: r('ShippingWeight') },
			{ json: 'year', js: 'year', typ: r('MinimumAdvertisedPrice') },
			{ json: 'calendarFormat', js: 'calendarFormat', typ: r('Sku') },
			{ json: 'calendarTerm', js: 'calendarTerm', typ: r('ShippingWeight') },
			{ json: 'numberOfSheets', js: 'numberOfSheets', typ: r('MinimumAdvertisedPrice') },
			{ json: 'envelopeSize', js: 'envelopeSize', typ: r('MinimumAdvertisedPrice') },
			{ json: 'inkColor', js: 'inkColor', typ: r('FabricCareInstructions') },
			{ json: 'isRefillable', js: 'isRefillable', typ: r('ProcessMode') },
			{ json: 'isRetractable', js: 'isRetractable', typ: r('ProcessMode') },
			{ json: 'isIndustrial', js: 'isIndustrial', typ: r('ProcessMode') },
			{ json: 'isAntiglare', js: 'isAntiglare', typ: r('ProcessMode') },
			{ json: 'isMagnetic', js: 'isMagnetic', typ: r('ProcessMode') },
			{ json: 'isTearResistant', js: 'isTearResistant', typ: r('ProcessMode') },
			{ json: 'recommendedUses', js: 'recommendedUses', typ: r('FabricCareInstructions') },
			{ json: 'hpprintercartridgeNumber', js: 'hpprintercartridgeNumber', typ: r('FabricCareInstructions') },
			{ json: 'pencilLeadDiameter', js: 'pencilLeadDiameter', typ: r('Impedance') },
			{ json: 'tabCut', js: 'tabCut', typ: r('ProcessMode') },
			{ json: 'tabColor', js: 'tabColor', typ: r('Sku') },
			{ json: 'isMadeFromRecycledMaterial', js: 'isMadeFromRecycledMaterial', typ: r('ProcessMode') },
			{ json: 'isLined', js: 'isLined', typ: r('ProcessMode') },
			{ json: 'recycledMaterialContent', js: 'recycledMaterialContent', typ: r('RecycledMaterialContent') },
			{ json: 'overallExpansion', js: 'overallExpansion', typ: r('ShippingWeight') },
			{ json: 'paperClipSize', js: 'paperClipSize', typ: r('ProcessMode') },
			{ json: 'penPointSize', js: 'penPointSize', typ: r('ShippingWeight') },
		],
		false
	),
	OtherCategory: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'title', js: 'title', typ: '' },
			{ json: 'properties', js: 'properties', typ: r('OtherCategoryProperties') },
			{ json: 'oneOf', js: 'oneOf', typ: a(r('OneOf')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	OtherCategoryProperties: o(
		[
			{ json: 'Storage', js: 'Storage', typ: r('Storage') },
			{ json: 'giftCards', js: 'giftCards', typ: r('GiftCards') },
			{ json: 'CleaningAndChemical', js: 'CleaningAndChemical', typ: r('CleaningAndChemical') },
			{ json: 'safetyAndEmergency', js: 'safetyAndEmergency', typ: r('SafetyAndEmergency') },
			{ json: 'fuelsAndLubricants', js: 'fuelsAndLubricants', typ: r('FuelsAndLubricants') },
			{ json: 'Other', js: 'Other', typ: r('Other') },
		],
		false
	),
	CleaningAndChemical: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('CleaningAndChemicalProperties') },
			{ json: 'required', js: 'required', typ: a(r('AnimalAccessoriesRequired')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	CleaningAndChemicalProperties: o(
		[
			{ json: 'shortDescription', js: 'shortDescription', typ: r('Sku') },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: r('FabricCareInstructions') },
			{ json: 'brand', js: 'brand', typ: r('Sku') },
			{ json: 'manufacturer', js: 'manufacturer', typ: r('Sku') },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: r('Sku') },
			{ json: 'modelNumber', js: 'modelNumber', typ: r('Sku') },
			{ json: 'multipackQuantity', js: 'multipackQuantity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'countPerPack', js: 'countPerPack', typ: r('MinimumAdvertisedPrice') },
			{ json: 'count', js: 'count', typ: r('Sku') },
			{ json: 'pieceCount', js: 'pieceCount', typ: r('MinimumAdvertisedPrice') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: r('Sku') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: r('FabricCareInstructions') },
			{ json: 'recommendedSurfaces', js: 'recommendedSurfaces', typ: r('FabricCareInstructions') },
			{ json: 'recommendedRooms', js: 'recommendedRooms', typ: r('FabricCareInstructions') },
			{ json: 'recommendedLocations', js: 'recommendedLocations', typ: r('FabricCareInstructions') },
			{ json: 'size', js: 'size', typ: r('Sku') },
			{ json: 'material', js: 'material', typ: r('Sku') },
			{ json: 'finish', js: 'finish', typ: r('Sku') },
			{ json: 'color', js: 'color', typ: r('Sku') },
			{ json: 'colorCategory', js: 'colorCategory', typ: r('CountryOfOriginComponents') },
			{ json: 'pattern', js: 'pattern', typ: r('Sku') },
			{ json: 'shape', js: 'shape', typ: r('Sku') },
			{ json: 'isAssemblyRequired', js: 'isAssemblyRequired', typ: r('ProcessMode') },
			{ json: 'assemblyInstructions', js: 'assemblyInstructions', typ: r('Sku') },
			{ json: 'assembledProductLength', js: 'assembledProductLength', typ: r('ShippingWeight') },
			{ json: 'assembledProductWidth', js: 'assembledProductWidth', typ: r('ShippingWeight') },
			{ json: 'assembledProductHeight', js: 'assembledProductHeight', typ: r('ShippingWeight') },
			{ json: 'assembledProductWeight', js: 'assembledProductWeight', typ: r('ShippingWeight') },
			{ json: 'variantGroupId', js: 'variantGroupId', typ: r('Sku') },
			{ json: 'variantAttributeNames', js: 'variantAttributeNames', typ: r('CountryOfOriginComponents') },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: r('ProcessMode') },
			{ json: 'swatchImages', js: 'swatchImages', typ: r('SwatchImages') },
			{ json: 'isProp65WarningRequired', js: 'isProp65WarningRequired', typ: r('ProcessMode') },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: r('Sku') },
			{ json: 'batteryTechnologyType', js: 'batteryTechnologyType', typ: r('ProcessMode') },
			{ json: 'hasExpiration', js: 'hasExpiration', typ: r('ProcessMode') },
			{ json: 'hasPricePerUnit', js: 'hasPricePerUnit', typ: r('ProcessMode') },
			{ json: 'pricePerUnitUom', js: 'pricePerUnitUom', typ: r('ProcessMode') },
			{ json: 'pricePerUnitQuantity', js: 'pricePerUnitQuantity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'hasIngredientList', js: 'hasIngredientList', typ: r('ProcessMode') },
			{ json: 'ingredientListImage', js: 'ingredientListImage', typ: r('Sku') },
			{ json: 'ingredients', js: 'ingredients', typ: r('Sku') },
			{ json: 'hasFuelContainer', js: 'hasFuelContainer', typ: r('ProcessMode') },
			{ json: 'fabricContent', js: 'fabricContent', typ: r('FabricContent') },
			{ json: 'isPowered', js: 'isPowered', typ: r('ProcessMode') },
			{ json: 'powerType', js: 'powerType', typ: r('Sku') },
			{ json: 'volts', js: 'volts', typ: r('ShippingWeight') },
			{ json: 'connections', js: 'connections', typ: r('FabricCareInstructions') },
			{ json: 'activeIngredients', js: 'activeIngredients', typ: r('ActiveIngredients') },
			{ json: 'inactiveIngredients', js: 'inactiveIngredients', typ: r('FabricCareInstructions') },
			{ json: 'instructions', js: 'instructions', typ: r('Sku') },
			{ json: 'form', js: 'form', typ: r('Sku') },
			{ json: 'scent', js: 'scent', typ: r('Sku') },
			{ json: 'fluidOunces', js: 'fluidOunces', typ: r('ShippingWeight') },
			{ json: 'isRecyclable', js: 'isRecyclable', typ: r('ProcessMode') },
			{ json: 'isFlammable', js: 'isFlammable', typ: r('ProcessMode') },
			{ json: 'isCombustible', js: 'isCombustible', typ: r('ProcessMode') },
			{ json: 'isBiodegradable', js: 'isBiodegradable', typ: r('ProcessMode') },
			{ json: 'isEnergyStarCertified', js: 'isEnergyStarCertified', typ: r('ProcessMode') },
			{ json: 'handleLength', js: 'handleLength', typ: r('ShippingWeight') },
			{ json: 'bladeWidth', js: 'bladeWidth', typ: r('ShippingWeight') },
			{ json: 'bristleMaterial', js: 'bristleMaterial', typ: r('Sku') },
			{ json: 'cleaningPath', js: 'cleaningPath', typ: r('ShippingWeight') },
			{ json: 'features', js: 'features', typ: r('FabricCareInstructions') },
			{ json: 'keywords', js: 'keywords', typ: r('Sku') },
		],
		false
	),
	Other: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('OtherProperties') },
			{ json: 'required', js: 'required', typ: a(r('AnimalAccessoriesRequired')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	OtherProperties: o(
		[
			{ json: 'shortDescription', js: 'shortDescription', typ: r('Sku') },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: r('FabricCareInstructions') },
			{ json: 'brand', js: 'brand', typ: r('Sku') },
			{ json: 'manufacturer', js: 'manufacturer', typ: r('Sku') },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: r('Sku') },
			{ json: 'modelNumber', js: 'modelNumber', typ: r('Sku') },
			{ json: 'multipackQuantity', js: 'multipackQuantity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'countPerPack', js: 'countPerPack', typ: r('MinimumAdvertisedPrice') },
			{ json: 'count', js: 'count', typ: r('Sku') },
			{ json: 'pieceCount', js: 'pieceCount', typ: r('MinimumAdvertisedPrice') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: r('Sku') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: r('FabricCareInstructions') },
			{ json: 'material', js: 'material', typ: r('Sku') },
			{ json: 'finish', js: 'finish', typ: r('Sku') },
			{ json: 'color', js: 'color', typ: r('Sku') },
			{ json: 'colorCategory', js: 'colorCategory', typ: r('CountryOfOriginComponents') },
			{ json: 'pattern', js: 'pattern', typ: r('Sku') },
			{ json: 'shape', js: 'shape', typ: r('Sku') },
			{ json: 'size', js: 'size', typ: r('Sku') },
			{ json: 'assembledProductLength', js: 'assembledProductLength', typ: r('ShippingWeight') },
			{ json: 'assembledProductWidth', js: 'assembledProductWidth', typ: r('ShippingWeight') },
			{ json: 'assembledProductHeight', js: 'assembledProductHeight', typ: r('ShippingWeight') },
			{ json: 'assembledProductWeight', js: 'assembledProductWeight', typ: r('ShippingWeight') },
			{ json: 'variantGroupId', js: 'variantGroupId', typ: r('Sku') },
			{ json: 'variantAttributeNames', js: 'variantAttributeNames', typ: r('CountryOfOriginComponents') },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: r('ProcessMode') },
			{ json: 'swatchImages', js: 'swatchImages', typ: r('SwatchImages') },
			{ json: 'isProp65WarningRequired', js: 'isProp65WarningRequired', typ: r('ProcessMode') },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: r('Sku') },
			{ json: 'smallPartsWarnings', js: 'smallPartsWarnings', typ: r('SmallPartsWarnings') },
			{ json: 'hasIngredientList', js: 'hasIngredientList', typ: r('ProcessMode') },
			{ json: 'ingredientListImage', js: 'ingredientListImage', typ: r('Sku') },
			{ json: 'ingredients', js: 'ingredients', typ: r('Sku') },
			{ json: 'hasFuelContainer', js: 'hasFuelContainer', typ: r('ProcessMode') },
			{ json: 'requiresTextileActLabeling', js: 'requiresTextileActLabeling', typ: r('ProcessMode') },
			{ json: 'countryOfOriginTextiles', js: 'countryOfOriginTextiles', typ: r('ProcessMode') },
			{ json: 'features', js: 'features', typ: r('FabricCareInstructions') },
			{ json: 'keywords', js: 'keywords', typ: r('Sku') },
			{ json: 'isFoldable', js: 'isFoldable', typ: r('ProcessMode') },
			{ json: 'isRetractable', js: 'isRetractable', typ: r('ProcessMode') },
			{ json: 'isPortable', js: 'isPortable', typ: r('ProcessMode') },
			{ json: 'isIndustrial', js: 'isIndustrial', typ: r('ProcessMode') },
			{ json: 'systemOfMeasurement', js: 'systemOfMeasurement', typ: r('Sku') },
			{ json: 'gender', js: 'gender', typ: r('ProcessMode') },
		],
		false
	),
	Storage: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('StorageProperties') },
			{ json: 'required', js: 'required', typ: a(r('AnimalAccessoriesRequired')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	StorageProperties: o(
		[
			{ json: 'shortDescription', js: 'shortDescription', typ: r('Sku') },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: r('FabricCareInstructions') },
			{ json: 'brand', js: 'brand', typ: r('Sku') },
			{ json: 'manufacturer', js: 'manufacturer', typ: r('Sku') },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: r('Sku') },
			{ json: 'modelNumber', js: 'modelNumber', typ: r('Sku') },
			{ json: 'multipackQuantity', js: 'multipackQuantity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'countPerPack', js: 'countPerPack', typ: r('MinimumAdvertisedPrice') },
			{ json: 'count', js: 'count', typ: r('Sku') },
			{ json: 'pieceCount', js: 'pieceCount', typ: r('MinimumAdvertisedPrice') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: r('Sku') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: r('FabricCareInstructions') },
			{ json: 'material', js: 'material', typ: r('Sku') },
			{ json: 'finish', js: 'finish', typ: r('Sku') },
			{ json: 'color', js: 'color', typ: r('Sku') },
			{ json: 'colorCategory', js: 'colorCategory', typ: r('CountryOfOriginComponents') },
			{ json: 'pattern', js: 'pattern', typ: r('Sku') },
			{ json: 'shape', js: 'shape', typ: r('Sku') },
			{ json: 'size', js: 'size', typ: r('Sku') },
			{ json: 'recommendedRooms', js: 'recommendedRooms', typ: r('FabricCareInstructions') },
			{ json: 'recommendedLocations', js: 'recommendedLocations', typ: r('FabricCareInstructions') },
			{ json: 'assembledProductLength', js: 'assembledProductLength', typ: r('ShippingWeight') },
			{ json: 'assembledProductWidth', js: 'assembledProductWidth', typ: r('ShippingWeight') },
			{ json: 'assembledProductHeight', js: 'assembledProductHeight', typ: r('ShippingWeight') },
			{ json: 'assembledProductWeight', js: 'assembledProductWeight', typ: r('ShippingWeight') },
			{ json: 'variantGroupId', js: 'variantGroupId', typ: r('Sku') },
			{ json: 'variantAttributeNames', js: 'variantAttributeNames', typ: r('CountryOfOriginComponents') },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: r('ProcessMode') },
			{ json: 'swatchImages', js: 'swatchImages', typ: r('SwatchImages') },
			{ json: 'isProp65WarningRequired', js: 'isProp65WarningRequired', typ: r('ProcessMode') },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: r('Sku') },
			{ json: 'smallPartsWarnings', js: 'smallPartsWarnings', typ: r('SmallPartsWarnings') },
			{ json: 'batteryTechnologyType', js: 'batteryTechnologyType', typ: r('ProcessMode') },
			{ json: 'hasWarranty', js: 'hasWarranty', typ: r('ProcessMode') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: r('Sku') },
			{ json: 'warrantyText', js: 'warrantyText', typ: r('Sku') },
			{ json: 'isAssemblyRequired', js: 'isAssemblyRequired', typ: r('ProcessMode') },
			{ json: 'assemblyInstructions', js: 'assemblyInstructions', typ: r('Sku') },
			{ json: 'fabricContent', js: 'fabricContent', typ: r('FabricContent') },
			{ json: 'fabricCareInstructions', js: 'fabricCareInstructions', typ: r('FabricCareInstructions') },
			{ json: 'collection', js: 'collection', typ: r('Sku') },
			{ json: 'numberOfShelves', js: 'numberOfShelves', typ: r('MinimumAdvertisedPrice') },
			{ json: 'shelfStyle', js: 'shelfStyle', typ: r('Sku') },
			{ json: 'shelfDepth', js: 'shelfDepth', typ: r('ShippingWeight') },
			{ json: 'numberOfDrawers', js: 'numberOfDrawers', typ: r('MinimumAdvertisedPrice') },
			{ json: 'drawerPosition', js: 'drawerPosition', typ: r('Sku') },
			{ json: 'drawerDimensions', js: 'drawerDimensions', typ: r('Sku') },
			{ json: 'capacity', js: 'capacity', typ: r('Sku') },
			{ json: 'maximumWeight', js: 'maximumWeight', typ: r('ShippingWeight') },
			{ json: 'recommendedUses', js: 'recommendedUses', typ: r('FabricCareInstructions') },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: r('FabricCareInstructions') },
			{ json: 'features', js: 'features', typ: r('FabricCareInstructions') },
			{ json: 'keywords', js: 'keywords', typ: r('Sku') },
			{ json: 'isFoldable', js: 'isFoldable', typ: r('ProcessMode') },
			{ json: 'isRetractable', js: 'isRetractable', typ: r('ProcessMode') },
			{ json: 'isPortable', js: 'isPortable', typ: r('ProcessMode') },
			{ json: 'isIndustrial', js: 'isIndustrial', typ: r('ProcessMode') },
			{ json: 'systemOfMeasurement', js: 'systemOfMeasurement', typ: r('Sku') },
		],
		false
	),
	FuelsAndLubricants: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('FuelsAndLubricantsProperties') },
			{ json: 'required', js: 'required', typ: a(r('AnimalAccessoriesRequired')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	FuelsAndLubricantsProperties: o(
		[
			{ json: 'hasFuelContainer', js: 'hasFuelContainer', typ: r('ProcessMode') },
			{ json: 'shortDescription', js: 'shortDescription', typ: r('Sku') },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: r('FabricCareInstructions') },
			{ json: 'brand', js: 'brand', typ: r('Sku') },
			{ json: 'manufacturer', js: 'manufacturer', typ: r('Sku') },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: r('Sku') },
			{ json: 'modelNumber', js: 'modelNumber', typ: r('Sku') },
			{ json: 'multipackQuantity', js: 'multipackQuantity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'countPerPack', js: 'countPerPack', typ: r('MinimumAdvertisedPrice') },
			{ json: 'count', js: 'count', typ: r('Sku') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: r('Sku') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: r('FabricCareInstructions') },
			{ json: 'size', js: 'size', typ: r('Sku') },
			{ json: 'fuelType', js: 'fuelType', typ: r('Sku') },
			{ json: 'fluidOunces', js: 'fluidOunces', typ: r('ShippingWeight') },
			{ json: 'recommendedUses', js: 'recommendedUses', typ: r('FabricCareInstructions') },
			{ json: 'variantGroupId', js: 'variantGroupId', typ: r('Sku') },
			{ json: 'variantAttributeNames', js: 'variantAttributeNames', typ: r('CountryOfOriginComponents') },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: r('ProcessMode') },
			{ json: 'swatchImages', js: 'swatchImages', typ: r('SwatchImages') },
			{ json: 'isProp65WarningRequired', js: 'isProp65WarningRequired', typ: r('ProcessMode') },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: r('Sku') },
			{ json: 'hasExpiration', js: 'hasExpiration', typ: r('ProcessMode') },
			{ json: 'hasPricePerUnit', js: 'hasPricePerUnit', typ: r('ProcessMode') },
			{ json: 'pricePerUnitUom', js: 'pricePerUnitUom', typ: r('ProcessMode') },
			{ json: 'pricePerUnitQuantity', js: 'pricePerUnitQuantity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'instructions', js: 'instructions', typ: r('Sku') },
			{ json: 'form', js: 'form', typ: r('Sku') },
			{ json: 'isEnergyStarCertified', js: 'isEnergyStarCertified', typ: r('ProcessMode') },
			{ json: 'isRefillable', js: 'isRefillable', typ: r('ProcessMode') },
			{ json: 'features', js: 'features', typ: r('FabricCareInstructions') },
			{ json: 'keywords', js: 'keywords', typ: r('Sku') },
			{ json: 'systemOfMeasurement', js: 'systemOfMeasurement', typ: r('Sku') },
		],
		false
	),
	GiftCards: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('GiftCardsProperties') },
			{ json: 'required', js: 'required', typ: a(r('AnimalAccessoriesRequired')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	GiftCardsProperties: o(
		[
			{ json: 'shortDescription', js: 'shortDescription', typ: r('Sku') },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: r('FabricCareInstructions') },
			{ json: 'brand', js: 'brand', typ: r('Sku') },
			{ json: 'manufacturer', js: 'manufacturer', typ: r('Sku') },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: r('Sku') },
			{ json: 'modelNumber', js: 'modelNumber', typ: r('Sku') },
			{ json: 'multipackQuantity', js: 'multipackQuantity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'countPerPack', js: 'countPerPack', typ: r('MinimumAdvertisedPrice') },
			{ json: 'count', js: 'count', typ: r('Sku') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: r('Sku') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: r('FabricCareInstructions') },
			{ json: 'variantGroupId', js: 'variantGroupId', typ: r('Sku') },
			{ json: 'variantAttributeNames', js: 'variantAttributeNames', typ: r('CountryOfOriginComponents') },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: r('ProcessMode') },
			{ json: 'swatchImages', js: 'swatchImages', typ: r('SwatchImages') },
			{ json: 'giftCardFormat', js: 'giftCardFormat', typ: r('ProcessMode') },
			{ json: 'giftCardCategory', js: 'giftCardCategory', typ: r('CountryOfOriginComponents') },
			{ json: 'giftCardAmount', js: 'giftCardAmount', typ: r('MinimumAdvertisedPrice') },
			{ json: 'occasion', js: 'occasion', typ: r('Sku') },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: r('FabricCareInstructions') },
			{ json: 'features', js: 'features', typ: r('FabricCareInstructions') },
			{ json: 'keywords', js: 'keywords', typ: r('Sku') },
			{ json: 'gender', js: 'gender', typ: r('ProcessMode') },
			{ json: 'pattern', js: 'pattern', typ: r('Sku') },
			{ json: 'color', js: 'color', typ: r('Sku') },
			{ json: 'character', js: 'character', typ: r('Sku') },
		],
		false
	),
	SafetyAndEmergency: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('SafetyAndEmergencyProperties') },
			{ json: 'required', js: 'required', typ: a(r('AnimalAccessoriesRequired')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	SafetyAndEmergencyProperties: o(
		[
			{ json: 'shortDescription', js: 'shortDescription', typ: r('Sku') },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: r('FabricCareInstructions') },
			{ json: 'brand', js: 'brand', typ: r('Sku') },
			{ json: 'manufacturer', js: 'manufacturer', typ: r('Sku') },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: r('Sku') },
			{ json: 'modelNumber', js: 'modelNumber', typ: r('Sku') },
			{ json: 'multipackQuantity', js: 'multipackQuantity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'countPerPack', js: 'countPerPack', typ: r('MinimumAdvertisedPrice') },
			{ json: 'count', js: 'count', typ: r('Sku') },
			{ json: 'pieceCount', js: 'pieceCount', typ: r('MinimumAdvertisedPrice') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: r('Sku') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: r('FabricCareInstructions') },
			{ json: 'recommendedSurfaces', js: 'recommendedSurfaces', typ: r('FabricCareInstructions') },
			{ json: 'recommendedLocations', js: 'recommendedLocations', typ: r('FabricCareInstructions') },
			{ json: 'size', js: 'size', typ: r('Sku') },
			{ json: 'assembledProductLength', js: 'assembledProductLength', typ: r('ShippingWeight') },
			{ json: 'assembledProductWidth', js: 'assembledProductWidth', typ: r('ShippingWeight') },
			{ json: 'assembledProductHeight', js: 'assembledProductHeight', typ: r('ShippingWeight') },
			{ json: 'assembledProductWeight', js: 'assembledProductWeight', typ: r('ShippingWeight') },
			{ json: 'variantGroupId', js: 'variantGroupId', typ: r('Sku') },
			{ json: 'variantAttributeNames', js: 'variantAttributeNames', typ: r('CountryOfOriginComponents') },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: r('ProcessMode') },
			{ json: 'swatchImages', js: 'swatchImages', typ: r('SwatchImages') },
			{ json: 'isProp65WarningRequired', js: 'isProp65WarningRequired', typ: r('ProcessMode') },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: r('Sku') },
			{ json: 'smallPartsWarnings', js: 'smallPartsWarnings', typ: r('SmallPartsWarnings') },
			{ json: 'batteryTechnologyType', js: 'batteryTechnologyType', typ: r('ProcessMode') },
			{ json: 'hasExpiration', js: 'hasExpiration', typ: r('ProcessMode') },
			{ json: 'hasWarranty', js: 'hasWarranty', typ: r('ProcessMode') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: r('Sku') },
			{ json: 'warrantyText', js: 'warrantyText', typ: r('Sku') },
			{ json: 'hasFuelContainer', js: 'hasFuelContainer', typ: r('ProcessMode') },
			{ json: 'hasIngredientList', js: 'hasIngredientList', typ: r('ProcessMode') },
			{ json: 'ingredientListImage', js: 'ingredientListImage', typ: r('Sku') },
			{ json: 'ingredients', js: 'ingredients', typ: r('Sku') },
			{ json: 'isAssemblyRequired', js: 'isAssemblyRequired', typ: r('ProcessMode') },
			{ json: 'assemblyInstructions', js: 'assemblyInstructions', typ: r('Sku') },
			{ json: 'instructions', js: 'instructions', typ: r('Sku') },
			{ json: 'form', js: 'form', typ: r('Sku') },
			{ json: 'fluidOunces', js: 'fluidOunces', typ: r('ShippingWeight') },
			{ json: 'handleLength', js: 'handleLength', typ: r('ShippingWeight') },
			{ json: 'isRefillable', js: 'isRefillable', typ: r('ProcessMode') },
			{ json: 'fireExtinguisherClasses', js: 'fireExtinguisherClasses', typ: r('CountryOfOriginComponents') },
			{ json: 'workingPressure', js: 'workingPressure', typ: r('ShippingWeight') },
			{ json: 'recommendedUses', js: 'recommendedUses', typ: r('FabricCareInstructions') },
			{ json: 'isPowered', js: 'isPowered', typ: r('ProcessMode') },
			{ json: 'powerType', js: 'powerType', typ: r('Sku') },
			{ json: 'features', js: 'features', typ: r('FabricCareInstructions') },
			{ json: 'keywords', js: 'keywords', typ: r('Sku') },
		],
		false
	),
	Photography: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'title', js: 'title', typ: '' },
			{ json: 'properties', js: 'properties', typ: r('PhotographyProperties') },
			{ json: 'oneOf', js: 'oneOf', typ: a(r('OneOf')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	PhotographyProperties: o(
		[
			{ json: 'PhotoAccessories', js: 'PhotoAccessories', typ: r('PhotoAccessories') },
			{ json: 'CamerasAndLenses', js: 'CamerasAndLenses', typ: r('CamerasAndLenses') },
		],
		false
	),
	CamerasAndLenses: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('CamerasAndLensesProperties') },
			{ json: 'required', js: 'required', typ: a(r('AnimalAccessoriesRequired')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	CamerasAndLensesProperties: o(
		[
			{ json: 'shortDescription', js: 'shortDescription', typ: r('Sku') },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: r('FabricCareInstructions') },
			{ json: 'brand', js: 'brand', typ: r('Sku') },
			{ json: 'manufacturer', js: 'manufacturer', typ: r('Sku') },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: r('Sku') },
			{ json: 'modelNumber', js: 'modelNumber', typ: r('Sku') },
			{ json: 'multipackQuantity', js: 'multipackQuantity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'countPerPack', js: 'countPerPack', typ: r('MinimumAdvertisedPrice') },
			{ json: 'count', js: 'count', typ: r('Sku') },
			{ json: 'pieceCount', js: 'pieceCount', typ: r('MinimumAdvertisedPrice') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: r('Sku') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: r('FabricCareInstructions') },
			{ json: 'numberOfMegapixels', js: 'numberOfMegapixels', typ: r('ShippingWeight') },
			{ json: 'digitalZoom', js: 'digitalZoom', typ: r('Sku') },
			{ json: 'opticalZoom', js: 'opticalZoom', typ: r('Sku') },
			{ json: 'magnification', js: 'magnification', typ: r('Sku') },
			{ json: 'sensorResolution', js: 'sensorResolution', typ: r('ShippingWeight') },
			{ json: 'lensDiameter', js: 'lensDiameter', typ: r('ShippingWeight') },
			{ json: 'lensCoating', js: 'lensCoating', typ: r('Sku') },
			{ json: 'lensFilterType', js: 'lensFilterType', typ: r('Sku') },
			{ json: 'cameraLensType', js: 'cameraLensType', typ: r('Sku') },
			{ json: 'hasFlash', js: 'hasFlash', typ: r('ProcessMode') },
			{ json: 'flashType', js: 'flashType', typ: r('Sku') },
			{ json: 'minimumShutterSpeed', js: 'minimumShutterSpeed', typ: r('ShippingWeight') },
			{ json: 'maximumShutterSpeed', js: 'maximumShutterSpeed', typ: r('ShippingWeight') },
			{ json: 'focusType', js: 'focusType', typ: r('FabricCareInstructions') },
			{ json: 'focalLength', js: 'focalLength', typ: r('Impedance') },
			{ json: 'focalRatio', js: 'focalRatio', typ: r('Sku') },
			{ json: 'minimumAperture', js: 'minimumAperture', typ: r('Sku') },
			{ json: 'maximumAperture', js: 'maximumAperture', typ: r('Sku') },
			{ json: 'exposureModes', js: 'exposureModes', typ: r('FabricCareInstructions') },
			{ json: 'displayTechnology', js: 'displayTechnology', typ: r('Sku') },
			{ json: 'displayResolution', js: 'displayResolution', typ: r('Sku') },
			{ json: 'screenSize', js: 'screenSize', typ: r('ShippingWeight') },
			{ json: 'diameter', js: 'diameter', typ: r('ShippingWeight') },
			{ json: 'color', js: 'color', typ: r('Sku') },
			{ json: 'colorCategory', js: 'colorCategory', typ: r('CountryOfOriginComponents') },
			{ json: 'assembledProductLength', js: 'assembledProductLength', typ: r('ShippingWeight') },
			{ json: 'assembledProductWidth', js: 'assembledProductWidth', typ: r('ShippingWeight') },
			{ json: 'assembledProductHeight', js: 'assembledProductHeight', typ: r('ShippingWeight') },
			{ json: 'assembledProductWeight', js: 'assembledProductWeight', typ: r('ShippingWeight') },
			{ json: 'variantGroupId', js: 'variantGroupId', typ: r('Sku') },
			{ json: 'variantAttributeNames', js: 'variantAttributeNames', typ: r('CountryOfOriginComponents') },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: r('ProcessMode') },
			{ json: 'swatchImages', js: 'swatchImages', typ: r('SwatchImages') },
			{ json: 'isProp65WarningRequired', js: 'isProp65WarningRequired', typ: r('ProcessMode') },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: r('Sku') },
			{ json: 'batteryTechnologyType', js: 'batteryTechnologyType', typ: r('ProcessMode') },
			{ json: 'isAssemblyRequired', js: 'isAssemblyRequired', typ: r('ProcessMode') },
			{ json: 'assemblyInstructions', js: 'assemblyInstructions', typ: r('Sku') },
			{ json: 'hasWarranty', js: 'hasWarranty', typ: r('ProcessMode') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: r('Sku') },
			{ json: 'warrantyText', js: 'warrantyText', typ: r('Sku') },
			{ json: 'accessoriesIncluded', js: 'accessoriesIncluded', typ: r('FabricCareInstructions') },
			{ json: 'hasTouchscreen', js: 'hasTouchscreen', typ: r('ProcessMode') },
			{ json: 'hasMemoryCardSlot', js: 'hasMemoryCardSlot', typ: r('ProcessMode') },
			{ json: 'memoryCardType', js: 'memoryCardType', typ: r('FabricCareInstructions') },
			{ json: 'recordableMediaFormats', js: 'recordableMediaFormats', typ: r('FabricCareInstructions') },
			{ json: 'wirelessTechnologies', js: 'wirelessTechnologies', typ: r('FabricCareInstructions') },
			{ json: 'connections', js: 'connections', typ: r('FabricCareInstructions') },
			{ json: 'isPortable', js: 'isPortable', typ: r('ProcessMode') },
			{ json: 'isWaterproof', js: 'isWaterproof', typ: r('ProcessMode') },
			{ json: 'hasSelfTimer', js: 'hasSelfTimer', typ: r('ProcessMode') },
			{ json: 'selfTimerDelay', js: 'selfTimerDelay', typ: r('SelfTimerDelay') },
			{ json: 'standbyTime', js: 'standbyTime', typ: r('ShippingWeight') },
			{ json: 'fieldOfView', js: 'fieldOfView', typ: r('Sku') },
			{ json: 'isParfocal', js: 'isParfocal', typ: r('ProcessMode') },
			{ json: 'shootingMode', js: 'shootingMode', typ: r('Sku') },
			{ json: 'microphoneIncluded', js: 'microphoneIncluded', typ: r('ProcessMode') },
			{ json: 'hasHandle', js: 'hasHandle', typ: r('ProcessMode') },
			{ json: 'isMulticoated', js: 'isMulticoated', typ: r('ProcessMode') },
			{ json: 'hasRedEyeReduction', js: 'hasRedEyeReduction', typ: r('ProcessMode') },
			{ json: 'hasNightVision', js: 'hasNightVision', typ: r('ProcessMode') },
			{ json: 'isFogResistant', js: 'isFogResistant', typ: r('ProcessMode') },
			{ json: 'attachmentStyle', js: 'attachmentStyle', typ: r('Sku') },
			{ json: 'hasShoulderStrap', js: 'hasShoulderStrap', typ: r('ProcessMode') },
			{ json: 'compatibleBrands', js: 'compatibleBrands', typ: r('FabricCareInstructions') },
			{ json: 'compatibleDevices', js: 'compatibleDevices', typ: r('Sku') },
			{ json: 'material', js: 'material', typ: r('Sku') },
			{ json: 'cleaningCareAndMaintenance', js: 'cleaningCareAndMaintenance', typ: r('Sku') },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: r('FabricCareInstructions') },
			{ json: 'features', js: 'features', typ: r('FabricCareInstructions') },
			{ json: 'keywords', js: 'keywords', typ: r('Sku') },
		],
		false
	),
	SelfTimerDelay: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('CountryOfOriginComponentsType') },
			{ json: 'title', js: 'title', typ: '' },
			{ json: 'items', js: 'items', typ: r('MinimumAdvertisedPrice') },
			{ json: 'minItems', js: 'minItems', typ: 0 },
		],
		false
	),
	PhotoAccessories: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('PhotoAccessoriesProperties') },
			{ json: 'required', js: 'required', typ: a(r('AnimalAccessoriesRequired')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	PhotoAccessoriesProperties: o(
		[
			{ json: 'shortDescription', js: 'shortDescription', typ: r('Sku') },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: r('FabricCareInstructions') },
			{ json: 'brand', js: 'brand', typ: r('Sku') },
			{ json: 'manufacturer', js: 'manufacturer', typ: r('Sku') },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: r('Sku') },
			{ json: 'modelNumber', js: 'modelNumber', typ: r('Sku') },
			{ json: 'multipackQuantity', js: 'multipackQuantity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'countPerPack', js: 'countPerPack', typ: r('MinimumAdvertisedPrice') },
			{ json: 'count', js: 'count', typ: r('Sku') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: r('Sku') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: r('FabricCareInstructions') },
			{ json: 'compatibleBrands', js: 'compatibleBrands', typ: r('FabricCareInstructions') },
			{ json: 'compatibleDevices', js: 'compatibleDevices', typ: r('Sku') },
			{ json: 'color', js: 'color', typ: r('Sku') },
			{ json: 'colorCategory', js: 'colorCategory', typ: r('CountryOfOriginComponents') },
			{ json: 'material', js: 'material', typ: r('Sku') },
			{ json: 'memoryCardType', js: 'memoryCardType', typ: r('FabricCareInstructions') },
			{ json: 'recordableMediaFormats', js: 'recordableMediaFormats', typ: r('FabricCareInstructions') },
			{ json: 'connections', js: 'connections', typ: r('FabricCareInstructions') },
			{ json: 'size', js: 'size', typ: r('Sku') },
			{ json: 'assembledProductLength', js: 'assembledProductLength', typ: r('ShippingWeight') },
			{ json: 'assembledProductWidth', js: 'assembledProductWidth', typ: r('ShippingWeight') },
			{ json: 'assembledProductHeight', js: 'assembledProductHeight', typ: r('ShippingWeight') },
			{ json: 'assembledProductWeight', js: 'assembledProductWeight', typ: r('ShippingWeight') },
			{ json: 'variantGroupId', js: 'variantGroupId', typ: r('Sku') },
			{ json: 'variantAttributeNames', js: 'variantAttributeNames', typ: r('CountryOfOriginComponents') },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: r('ProcessMode') },
			{ json: 'swatchImages', js: 'swatchImages', typ: r('SwatchImages') },
			{ json: 'isProp65WarningRequired', js: 'isProp65WarningRequired', typ: r('ProcessMode') },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: r('Sku') },
			{ json: 'batteryTechnologyType', js: 'batteryTechnologyType', typ: r('ProcessMode') },
			{ json: 'hasWarranty', js: 'hasWarranty', typ: r('ProcessMode') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: r('Sku') },
			{ json: 'warrantyText', js: 'warrantyText', typ: r('Sku') },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: r('FabricCareInstructions') },
			{ json: 'isAssemblyRequired', js: 'isAssemblyRequired', typ: r('ProcessMode') },
			{ json: 'assemblyInstructions', js: 'assemblyInstructions', typ: r('Sku') },
			{ json: 'wirelessTechnologies', js: 'wirelessTechnologies', typ: r('FabricCareInstructions') },
			{ json: 'displayTechnology', js: 'displayTechnology', typ: r('Sku') },
			{ json: 'accessoriesIncluded', js: 'accessoriesIncluded', typ: r('FabricCareInstructions') },
			{ json: 'isWaterproof', js: 'isWaterproof', typ: r('ProcessMode') },
			{ json: 'recommendedUses', js: 'recommendedUses', typ: r('FabricCareInstructions') },
			{ json: 'cleaningCareAndMaintenance', js: 'cleaningCareAndMaintenance', typ: r('Sku') },
			{ json: 'shape', js: 'shape', typ: r('Sku') },
			{ json: 'pattern', js: 'pattern', typ: r('Sku') },
			{ json: 'capacity', js: 'capacity', typ: r('Sku') },
			{ json: 'inputsAndOutputs', js: 'inputsAndOutputs', typ: r('InputsAndOutputs') },
			{ json: 'lightOutput', js: 'lightOutput', typ: r('ShippingWeight') },
			{ json: 'lightBulbType', js: 'lightBulbType', typ: r('Sku') },
			{ json: 'volts', js: 'volts', typ: r('ShippingWeight') },
			{ json: 'watts', js: 'watts', typ: r('ShippingWeight') },
			{ json: 'features', js: 'features', typ: r('FabricCareInstructions') },
			{ json: 'keywords', js: 'keywords', typ: r('Sku') },
		],
		false
	),
	SportAndRecreation: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'title', js: 'title', typ: '' },
			{ json: 'properties', js: 'properties', typ: r('SportAndRecreationProperties') },
			{ json: 'oneOf', js: 'oneOf', typ: a(r('OneOf')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	SportAndRecreationProperties: o(
		[
			{ json: 'Cycling', js: 'Cycling', typ: r('Cycling') },
			{ json: 'Optics', js: 'Optics', typ: r('Optics') },
			{ json: 'Weapons', js: 'Weapons', typ: r('Weapons') },
			{ json: 'SportAndRecreationOther', js: 'SportAndRecreationOther', typ: r('SportAndRecreationOther') },
		],
		false
	),
	Cycling: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('CyclingProperties') },
			{ json: 'required', js: 'required', typ: a(r('AnimalAccessoriesRequired')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	CyclingProperties: o(
		[
			{ json: 'hasFuelContainer', js: 'hasFuelContainer', typ: r('ProcessMode') },
			{ json: 'shortDescription', js: 'shortDescription', typ: r('Sku') },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: r('FabricCareInstructions') },
			{ json: 'brand', js: 'brand', typ: r('Sku') },
			{ json: 'manufacturer', js: 'manufacturer', typ: r('Sku') },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: r('Sku') },
			{ json: 'modelNumber', js: 'modelNumber', typ: r('Sku') },
			{ json: 'multipackQuantity', js: 'multipackQuantity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'countPerPack', js: 'countPerPack', typ: r('MinimumAdvertisedPrice') },
			{ json: 'count', js: 'count', typ: r('Sku') },
			{ json: 'pieceCount', js: 'pieceCount', typ: r('MinimumAdvertisedPrice') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: r('Sku') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: r('FabricCareInstructions') },
			{ json: 'color', js: 'color', typ: r('Sku') },
			{ json: 'colorCategory', js: 'colorCategory', typ: r('CountryOfOriginComponents') },
			{ json: 'gender', js: 'gender', typ: r('ProcessMode') },
			{ json: 'size', js: 'size', typ: r('Sku') },
			{ json: 'ageGroup', js: 'ageGroup', typ: r('CountryOfOriginComponents') },
			{ json: 'ageRange', js: 'ageRange', typ: r('AgeRange') },
			{ json: 'sport', js: 'sport', typ: r('Sku') },
			{ json: 'bicycleFrameSize', js: 'bicycleFrameSize', typ: r('ShippingWeight') },
			{ json: 'bicycleWheelDiameter', js: 'bicycleWheelDiameter', typ: r('ShippingWeight') },
			{ json: 'bicycleTireSize', js: 'bicycleTireSize', typ: r('Sku') },
			{ json: 'numberOfSpeeds', js: 'numberOfSpeeds', typ: r('MinimumAdvertisedPrice') },
			{ json: 'assembledProductLength', js: 'assembledProductLength', typ: r('ShippingWeight') },
			{ json: 'assembledProductWidth', js: 'assembledProductWidth', typ: r('ShippingWeight') },
			{ json: 'assembledProductHeight', js: 'assembledProductHeight', typ: r('ShippingWeight') },
			{ json: 'assembledProductWeight', js: 'assembledProductWeight', typ: r('ShippingWeight') },
			{ json: 'variantGroupId', js: 'variantGroupId', typ: r('Sku') },
			{ json: 'variantAttributeNames', js: 'variantAttributeNames', typ: r('CountryOfOriginComponents') },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: r('ProcessMode') },
			{ json: 'swatchImages', js: 'swatchImages', typ: r('SwatchImages') },
			{ json: 'isProp65WarningRequired', js: 'isProp65WarningRequired', typ: r('ProcessMode') },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: r('Sku') },
			{ json: 'smallPartsWarnings', js: 'smallPartsWarnings', typ: r('SmallPartsWarnings') },
			{ json: 'batteryTechnologyType', js: 'batteryTechnologyType', typ: r('ProcessMode') },
			{ json: 'hasExpiration', js: 'hasExpiration', typ: r('ProcessMode') },
			{ json: 'shelfLife', js: 'shelfLife', typ: r('ShippingWeight') },
			{ json: 'requiresTextileActLabeling', js: 'requiresTextileActLabeling', typ: r('ProcessMode') },
			{ json: 'countryOfOriginTextiles', js: 'countryOfOriginTextiles', typ: r('ProcessMode') },
			{ json: 'hasWarranty', js: 'hasWarranty', typ: r('ProcessMode') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: r('Sku') },
			{ json: 'warrantyText', js: 'warrantyText', typ: r('Sku') },
			{ json: 'fabricContent', js: 'fabricContent', typ: r('FabricContent') },
			{ json: 'fabricCareInstructions', js: 'fabricCareInstructions', typ: r('FabricCareInstructions') },
			{ json: 'isAssemblyRequired', js: 'isAssemblyRequired', typ: r('ProcessMode') },
			{ json: 'assemblyInstructions', js: 'assemblyInstructions', typ: r('Sku') },
			{ json: 'material', js: 'material', typ: r('Sku') },
			{ json: 'dexterity', js: 'dexterity', typ: r('Sku') },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: r('FabricCareInstructions') },
			{ json: 'sportsLeague', js: 'sportsLeague', typ: r('Sku') },
			{ json: 'sportsTeam', js: 'sportsTeam', typ: r('Sku') },
			{ json: 'athlete', js: 'athlete', typ: r('Sku') },
			{ json: 'features', js: 'features', typ: r('FabricCareInstructions') },
			{ json: 'keywords', js: 'keywords', typ: r('Sku') },
			{ json: 'pattern', js: 'pattern', typ: r('Sku') },
			{ json: 'finish', js: 'finish', typ: r('Sku') },
			{ json: 'shape', js: 'shape', typ: r('Sku') },
			{ json: 'season', js: 'season', typ: r('Sku') },
			{ json: 'character', js: 'character', typ: r('Sku') },
			{ json: 'capacity', js: 'capacity', typ: r('Sku') },
			{ json: 'seatingCapacity', js: 'seatingCapacity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'maximumWeight', js: 'maximumWeight', typ: r('ShippingWeight') },
			{ json: 'wirelessTechnologies', js: 'wirelessTechnologies', typ: r('FabricCareInstructions') },
			{ json: 'isPortable', js: 'isPortable', typ: r('ProcessMode') },
			{ json: 'isFoldable', js: 'isFoldable', typ: r('ProcessMode') },
			{ json: 'isWeatherResistant', js: 'isWeatherResistant', typ: r('ProcessMode') },
			{ json: 'isWaterproof', js: 'isWaterproof', typ: r('ProcessMode') },
			{ json: 'isPowered', js: 'isPowered', typ: r('ProcessMode') },
			{ json: 'powerType', js: 'powerType', typ: r('Sku') },
			{ json: 'horsepower', js: 'horsepower', typ: r('ShippingWeight') },
			{ json: 'tireDiameter', js: 'tireDiameter', typ: r('ShippingWeight') },
			{ json: 'cleaningCareAndMaintenance', js: 'cleaningCareAndMaintenance', typ: r('Sku') },
			{ json: 'recommendedUses', js: 'recommendedUses', typ: r('FabricCareInstructions') },
			{ json: 'lockType', js: 'lockType', typ: r('Sku') },
			{ json: 'lockingMechanism', js: 'lockingMechanism', typ: r('Sku') },
			{ json: 'recommendedLocations', js: 'recommendedLocations', typ: r('FabricCareInstructions') },
			{ json: 'lightBulbType', js: 'lightBulbType', typ: r('Sku') },
		],
		false
	),
	Optics: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('OpticsProperties') },
			{ json: 'required', js: 'required', typ: a(r('AnimalAccessoriesRequired')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	OpticsProperties: o(
		[
			{ json: 'shortDescription', js: 'shortDescription', typ: r('Sku') },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: r('FabricCareInstructions') },
			{ json: 'brand', js: 'brand', typ: r('Sku') },
			{ json: 'manufacturer', js: 'manufacturer', typ: r('Sku') },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: r('Sku') },
			{ json: 'modelNumber', js: 'modelNumber', typ: r('Sku') },
			{ json: 'multipackQuantity', js: 'multipackQuantity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'countPerPack', js: 'countPerPack', typ: r('MinimumAdvertisedPrice') },
			{ json: 'count', js: 'count', typ: r('Sku') },
			{ json: 'pieceCount', js: 'pieceCount', typ: r('MinimumAdvertisedPrice') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: r('Sku') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: r('FabricCareInstructions') },
			{ json: 'gender', js: 'gender', typ: r('ProcessMode') },
			{ json: 'size', js: 'size', typ: r('Sku') },
			{ json: 'ageGroup', js: 'ageGroup', typ: r('CountryOfOriginComponents') },
			{ json: 'ageRange', js: 'ageRange', typ: r('AgeRange') },
			{ json: 'digitalZoom', js: 'digitalZoom', typ: r('Sku') },
			{ json: 'opticalZoom', js: 'opticalZoom', typ: r('Sku') },
			{ json: 'lensDiameter', js: 'lensDiameter', typ: r('ShippingWeight') },
			{ json: 'lensCoating', js: 'lensCoating', typ: r('Sku') },
			{ json: 'sensorResolution', js: 'sensorResolution', typ: r('ShippingWeight') },
			{ json: 'magnification', js: 'magnification', typ: r('Sku') },
			{ json: 'focusType', js: 'focusType', typ: r('FabricCareInstructions') },
			{ json: 'fieldOfView', js: 'fieldOfView', typ: r('Sku') },
			{ json: 'isParfocal', js: 'isParfocal', typ: r('ProcessMode') },
			{ json: 'focalRatio', js: 'focalRatio', typ: r('Sku') },
			{ json: 'displayTechnology', js: 'displayTechnology', typ: r('Sku') },
			{ json: 'displayResolution', js: 'displayResolution', typ: r('Sku') },
			{ json: 'hasNightVision', js: 'hasNightVision', typ: r('ProcessMode') },
			{ json: 'assembledProductLength', js: 'assembledProductLength', typ: r('ShippingWeight') },
			{ json: 'assembledProductWidth', js: 'assembledProductWidth', typ: r('ShippingWeight') },
			{ json: 'assembledProductHeight', js: 'assembledProductHeight', typ: r('ShippingWeight') },
			{ json: 'assembledProductWeight', js: 'assembledProductWeight', typ: r('ShippingWeight') },
			{ json: 'variantGroupId', js: 'variantGroupId', typ: r('Sku') },
			{ json: 'variantAttributeNames', js: 'variantAttributeNames', typ: r('CountryOfOriginComponents') },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: r('ProcessMode') },
			{ json: 'swatchImages', js: 'swatchImages', typ: r('SwatchImages') },
			{ json: 'isProp65WarningRequired', js: 'isProp65WarningRequired', typ: r('ProcessMode') },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: r('Sku') },
			{ json: 'batteryTechnologyType', js: 'batteryTechnologyType', typ: r('ProcessMode') },
			{ json: 'isChemical', js: 'isChemical', typ: r('ProcessMode') },
			{ json: 'hasWarranty', js: 'hasWarranty', typ: r('ProcessMode') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: r('Sku') },
			{ json: 'warrantyText', js: 'warrantyText', typ: r('Sku') },
			{ json: 'isAssemblyRequired', js: 'isAssemblyRequired', typ: r('ProcessMode') },
			{ json: 'assemblyInstructions', js: 'assemblyInstructions', typ: r('Sku') },
			{ json: 'material', js: 'material', typ: r('Sku') },
			{ json: 'dexterity', js: 'dexterity', typ: r('Sku') },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: r('FabricCareInstructions') },
			{ json: 'screenSize', js: 'screenSize', typ: r('ShippingWeight') },
			{ json: 'hasLcdScreen', js: 'hasLcdScreen', typ: r('ProcessMode') },
			{ json: 'powerType', js: 'powerType', typ: r('Sku') },
			{ json: 'isMulticoated', js: 'isMulticoated', typ: r('ProcessMode') },
			{ json: 'isLockable', js: 'isLockable', typ: r('ProcessMode') },
			{ json: 'lockType', js: 'lockType', typ: r('Sku') },
			{ json: 'hasMemoryCardSlot', js: 'hasMemoryCardSlot', typ: r('ProcessMode') },
			{ json: 'isFogResistant', js: 'isFogResistant', typ: r('ProcessMode') },
			{ json: 'operatingTemperature', js: 'operatingTemperature', typ: r('ShippingWeight') },
			{ json: 'hasDovetailBarSystem', js: 'hasDovetailBarSystem', typ: r('ProcessMode') },
			{ json: 'attachmentStyle', js: 'attachmentStyle', typ: r('Sku') },
			{ json: 'features', js: 'features', typ: r('FabricCareInstructions') },
			{ json: 'keywords', js: 'keywords', typ: r('Sku') },
			{ json: 'color', js: 'color', typ: r('Sku') },
			{ json: 'colorCategory', js: 'colorCategory', typ: r('CountryOfOriginComponents') },
			{ json: 'sport', js: 'sport', typ: r('Sku') },
			{ json: 'pattern', js: 'pattern', typ: r('Sku') },
			{ json: 'wirelessTechnologies', js: 'wirelessTechnologies', typ: r('FabricCareInstructions') },
			{ json: 'isPortable', js: 'isPortable', typ: r('ProcessMode') },
			{ json: 'isFoldable', js: 'isFoldable', typ: r('ProcessMode') },
			{ json: 'isWeatherResistant', js: 'isWeatherResistant', typ: r('ProcessMode') },
			{ json: 'isWaterproof', js: 'isWaterproof', typ: r('ProcessMode') },
			{ json: 'isPowered', js: 'isPowered', typ: r('ProcessMode') },
			{ json: 'cleaningCareAndMaintenance', js: 'cleaningCareAndMaintenance', typ: r('Sku') },
			{ json: 'recommendedUses', js: 'recommendedUses', typ: r('FabricCareInstructions') },
			{ json: 'recommendedLocations', js: 'recommendedLocations', typ: r('FabricCareInstructions') },
		],
		false
	),
	SportAndRecreationOther: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('SportAndRecreationOtherProperties') },
			{ json: 'required', js: 'required', typ: a(r('AnimalAccessoriesRequired')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	SportAndRecreationOtherProperties: o(
		[
			{ json: 'shortDescription', js: 'shortDescription', typ: r('Sku') },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: r('FabricCareInstructions') },
			{ json: 'brand', js: 'brand', typ: r('Sku') },
			{ json: 'manufacturer', js: 'manufacturer', typ: r('Sku') },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: r('Sku') },
			{ json: 'modelNumber', js: 'modelNumber', typ: r('Sku') },
			{ json: 'multipackQuantity', js: 'multipackQuantity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'countPerPack', js: 'countPerPack', typ: r('MinimumAdvertisedPrice') },
			{ json: 'count', js: 'count', typ: r('Sku') },
			{ json: 'pieceCount', js: 'pieceCount', typ: r('MinimumAdvertisedPrice') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: r('Sku') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: r('FabricCareInstructions') },
			{ json: 'color', js: 'color', typ: r('Sku') },
			{ json: 'colorCategory', js: 'colorCategory', typ: r('CountryOfOriginComponents') },
			{ json: 'sport', js: 'sport', typ: r('Sku') },
			{ json: 'gender', js: 'gender', typ: r('ProcessMode') },
			{ json: 'size', js: 'size', typ: r('Sku') },
			{ json: 'ageGroup', js: 'ageGroup', typ: r('CountryOfOriginComponents') },
			{ json: 'ageRange', js: 'ageRange', typ: r('AgeRange') },
			{ json: 'clothingSize', js: 'clothingSize', typ: r('Sku') },
			{ json: 'assembledProductLength', js: 'assembledProductLength', typ: r('ShippingWeight') },
			{ json: 'assembledProductWidth', js: 'assembledProductWidth', typ: r('ShippingWeight') },
			{ json: 'assembledProductHeight', js: 'assembledProductHeight', typ: r('ShippingWeight') },
			{ json: 'assembledProductWeight', js: 'assembledProductWeight', typ: r('ShippingWeight') },
			{ json: 'variantGroupId', js: 'variantGroupId', typ: r('Sku') },
			{ json: 'variantAttributeNames', js: 'variantAttributeNames', typ: r('CountryOfOriginComponents') },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: r('ProcessMode') },
			{ json: 'swatchImages', js: 'swatchImages', typ: r('SwatchImages') },
			{ json: 'isProp65WarningRequired', js: 'isProp65WarningRequired', typ: r('ProcessMode') },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: r('Sku') },
			{ json: 'smallPartsWarnings', js: 'smallPartsWarnings', typ: r('SmallPartsWarnings') },
			{ json: 'batteryTechnologyType', js: 'batteryTechnologyType', typ: r('ProcessMode') },
			{ json: 'hasExpiration', js: 'hasExpiration', typ: r('ProcessMode') },
			{ json: 'shelfLife', js: 'shelfLife', typ: r('ShippingWeight') },
			{ json: 'requiresTextileActLabeling', js: 'requiresTextileActLabeling', typ: r('ProcessMode') },
			{ json: 'countryOfOriginTextiles', js: 'countryOfOriginTextiles', typ: r('ProcessMode') },
			{ json: 'hasWarranty', js: 'hasWarranty', typ: r('ProcessMode') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: r('Sku') },
			{ json: 'warrantyText', js: 'warrantyText', typ: r('Sku') },
			{
				json: 'compositeWoodCertificationCode',
				js: 'compositeWoodCertificationCode',
				typ: r('CompositeWoodCertificationCode'),
			},
			{ json: 'hasFuelContainer', js: 'hasFuelContainer', typ: r('ProcessMode') },
			{ json: 'fabricContent', js: 'fabricContent', typ: r('FabricContent') },
			{ json: 'fabricCareInstructions', js: 'fabricCareInstructions', typ: r('FabricCareInstructions') },
			{ json: 'shoeSize', js: 'shoeSize', typ: r('Sku') },
			{ json: 'sportsLeague', js: 'sportsLeague', typ: r('Sku') },
			{ json: 'sportsTeam', js: 'sportsTeam', typ: r('Sku') },
			{ json: 'isAssemblyRequired', js: 'isAssemblyRequired', typ: r('ProcessMode') },
			{ json: 'assemblyInstructions', js: 'assemblyInstructions', typ: r('Sku') },
			{ json: 'driveSystem', js: 'driveSystem', typ: r('Sku') },
			{ json: 'strideLength', js: 'strideLength', typ: r('ShippingWeight') },
			{ json: 'material', js: 'material', typ: r('Sku') },
			{ json: 'dexterity', js: 'dexterity', typ: r('Sku') },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: r('FabricCareInstructions') },
			{ json: 'athlete', js: 'athlete', typ: r('Sku') },
			{ json: 'autographedBy', js: 'autographedBy', typ: r('Sku') },
			{ json: 'features', js: 'features', typ: r('FabricCareInstructions') },
			{ json: 'keywords', js: 'keywords', typ: r('Sku') },
			{ json: 'pattern', js: 'pattern', typ: r('Sku') },
			{ json: 'finish', js: 'finish', typ: r('Sku') },
			{ json: 'shape', js: 'shape', typ: r('Sku') },
			{ json: 'season', js: 'season', typ: r('Sku') },
			{ json: 'character', js: 'character', typ: r('Sku') },
			{ json: 'capacity', js: 'capacity', typ: r('Sku') },
			{ json: 'seatingCapacity', js: 'seatingCapacity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'maximumWeight', js: 'maximumWeight', typ: r('ShippingWeight') },
			{ json: 'maximumIncline', js: 'maximumIncline', typ: r('MinimumAdvertisedPrice') },
			{ json: 'batDrop', js: 'batDrop', typ: r('Sku') },
			{ json: 'fitnessGoal', js: 'fitnessGoal', typ: r('Sku') },
			{ json: 'footballSize', js: 'footballSize', typ: r('Sku') },
			{ json: 'basketballSize', js: 'basketballSize', typ: r('Sku') },
			{ json: 'soccerBallSize', js: 'soccerBallSize', typ: r('Sku') },
			{ json: 'ballCoreMaterial', js: 'ballCoreMaterial', typ: r('FabricCareInstructions') },
			{ json: 'bladeType', js: 'bladeType', typ: r('Sku') },
			{ json: 'animalType', js: 'animalType', typ: r('Sku') },
			{ json: 'tentType', js: 'tentType', typ: r('Sku') },
			{ json: 'fishingLocation', js: 'fishingLocation', typ: r('Sku') },
			{ json: 'fishingLinePoundTest', js: 'fishingLinePoundTest', typ: r('ShippingWeight') },
			{ json: 'wirelessTechnologies', js: 'wirelessTechnologies', typ: r('FabricCareInstructions') },
			{ json: 'hasAutomaticShutoff', js: 'hasAutomaticShutoff', typ: r('ProcessMode') },
			{ json: 'minimumTemperature', js: 'minimumTemperature', typ: r('ShippingWeight') },
			{ json: 'isMemorabilia', js: 'isMemorabilia', typ: r('ProcessMode') },
			{ json: 'isCollectible', js: 'isCollectible', typ: r('ProcessMode') },
			{ json: 'isPortable', js: 'isPortable', typ: r('ProcessMode') },
			{ json: 'isFoldable', js: 'isFoldable', typ: r('ProcessMode') },
			{ json: 'isSpaceSaving', js: 'isSpaceSaving', typ: r('ProcessMode') },
			{ json: 'isWheeled', js: 'isWheeled', typ: r('ProcessMode') },
			{ json: 'isTearResistant', js: 'isTearResistant', typ: r('ProcessMode') },
			{ json: 'isWeatherResistant', js: 'isWeatherResistant', typ: r('ProcessMode') },
			{ json: 'isWaterproof', js: 'isWaterproof', typ: r('ProcessMode') },
			{ json: 'isPowered', js: 'isPowered', typ: r('ProcessMode') },
			{ json: 'powerType', js: 'powerType', typ: r('Sku') },
			{ json: 'horsepower', js: 'horsepower', typ: r('ShippingWeight') },
			{ json: 'velocity', js: 'velocity', typ: r('ShippingWeight') },
			{ json: 'tireDiameter', js: 'tireDiameter', typ: r('ShippingWeight') },
			{ json: 'cleaningCareAndMaintenance', js: 'cleaningCareAndMaintenance', typ: r('Sku') },
			{ json: 'recommendedUses', js: 'recommendedUses', typ: r('FabricCareInstructions') },
			{ json: 'recommendedLocations', js: 'recommendedLocations', typ: r('FabricCareInstructions') },
			{ json: 'compatibleDevices', js: 'compatibleDevices', typ: r('Sku') },
		],
		false
	),
	Weapons: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('WeaponsProperties') },
			{ json: 'required', js: 'required', typ: a(r('AnimalAccessoriesRequired')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	WeaponsProperties: o(
		[
			{ json: 'shortDescription', js: 'shortDescription', typ: r('Sku') },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: r('FabricCareInstructions') },
			{ json: 'brand', js: 'brand', typ: r('Sku') },
			{ json: 'manufacturer', js: 'manufacturer', typ: r('Sku') },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: r('Sku') },
			{ json: 'modelNumber', js: 'modelNumber', typ: r('Sku') },
			{ json: 'multipackQuantity', js: 'multipackQuantity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'countPerPack', js: 'countPerPack', typ: r('MinimumAdvertisedPrice') },
			{ json: 'count', js: 'count', typ: r('Sku') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: r('Sku') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: r('FabricCareInstructions') },
			{ json: 'ammunitionType', js: 'ammunitionType', typ: r('Sku') },
			{ json: 'sport', js: 'sport', typ: r('Sku') },
			{ json: 'velocity', js: 'velocity', typ: r('ShippingWeight') },
			{ json: 'caliber', js: 'caliber', typ: r('ShippingWeight') },
			{ json: 'firearmAction', js: 'firearmAction', typ: r('Sku') },
			{ json: 'shotgunGauge', js: 'shotgunGauge', typ: r('ShippingWeight') },
			{ json: 'barrelLength', js: 'barrelLength', typ: r('ShippingWeight') },
			{ json: 'gender', js: 'gender', typ: r('ProcessMode') },
			{ json: 'ageGroup', js: 'ageGroup', typ: r('CountryOfOriginComponents') },
			{ json: 'size', js: 'size', typ: r('Sku') },
			{ json: 'clothingSize', js: 'clothingSize', typ: r('Sku') },
			{ json: 'color', js: 'color', typ: r('Sku') },
			{ json: 'colorCategory', js: 'colorCategory', typ: r('CountryOfOriginComponents') },
			{ json: 'assembledProductLength', js: 'assembledProductLength', typ: r('ShippingWeight') },
			{ json: 'assembledProductWidth', js: 'assembledProductWidth', typ: r('ShippingWeight') },
			{ json: 'assembledProductHeight', js: 'assembledProductHeight', typ: r('ShippingWeight') },
			{ json: 'assembledProductWeight', js: 'assembledProductWeight', typ: r('ShippingWeight') },
			{ json: 'variantGroupId', js: 'variantGroupId', typ: r('Sku') },
			{ json: 'variantAttributeNames', js: 'variantAttributeNames', typ: r('CountryOfOriginComponents') },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: r('ProcessMode') },
			{ json: 'swatchImages', js: 'swatchImages', typ: r('SwatchImages') },
			{ json: 'isProp65WarningRequired', js: 'isProp65WarningRequired', typ: r('ProcessMode') },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: r('Sku') },
			{ json: 'batteryTechnologyType', js: 'batteryTechnologyType', typ: r('ProcessMode') },
			{ json: 'hasWarranty', js: 'hasWarranty', typ: r('ProcessMode') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: r('Sku') },
			{ json: 'warrantyText', js: 'warrantyText', typ: r('Sku') },
			{ json: 'hasFuelContainer', js: 'hasFuelContainer', typ: r('ProcessMode') },
			{ json: 'material', js: 'material', typ: r('Sku') },
			{ json: 'dexterity', js: 'dexterity', typ: r('Sku') },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: r('FabricCareInstructions') },
			{ json: 'isAssemblyRequired', js: 'isAssemblyRequired', typ: r('ProcessMode') },
			{ json: 'assemblyInstructions', js: 'assemblyInstructions', typ: r('Sku') },
			{ json: 'firearmChamberLength', js: 'firearmChamberLength', typ: r('MinimumAdvertisedPrice') },
			{ json: 'sportsLeague', js: 'sportsLeague', typ: r('Sku') },
			{ json: 'sportsTeam', js: 'sportsTeam', typ: r('Sku') },
			{ json: 'athlete', js: 'athlete', typ: r('Sku') },
			{ json: 'features', js: 'features', typ: r('FabricCareInstructions') },
			{ json: 'keywords', js: 'keywords', typ: r('Sku') },
			{ json: 'pattern', js: 'pattern', typ: r('Sku') },
			{ json: 'finish', js: 'finish', typ: r('Sku') },
			{ json: 'shape', js: 'shape', typ: r('Sku') },
			{ json: 'season', js: 'season', typ: r('Sku') },
			{ json: 'character', js: 'character', typ: r('Sku') },
			{ json: 'bladeType', js: 'bladeType', typ: r('Sku') },
			{ json: 'animalType', js: 'animalType', typ: r('Sku') },
			{ json: 'wirelessTechnologies', js: 'wirelessTechnologies', typ: r('FabricCareInstructions') },
			{ json: 'isMemorabilia', js: 'isMemorabilia', typ: r('ProcessMode') },
			{ json: 'isCollectible', js: 'isCollectible', typ: r('ProcessMode') },
			{ json: 'isPortable', js: 'isPortable', typ: r('ProcessMode') },
			{ json: 'isWeatherResistant', js: 'isWeatherResistant', typ: r('ProcessMode') },
			{ json: 'isWaterproof', js: 'isWaterproof', typ: r('ProcessMode') },
			{ json: 'isPowered', js: 'isPowered', typ: r('ProcessMode') },
			{ json: 'compatibleDevices', js: 'compatibleDevices', typ: r('Sku') },
			{ json: 'powerType', js: 'powerType', typ: r('Sku') },
			{ json: 'cleaningCareAndMaintenance', js: 'cleaningCareAndMaintenance', typ: r('Sku') },
			{ json: 'recommendedUses', js: 'recommendedUses', typ: r('FabricCareInstructions') },
			{ json: 'recommendedLocations', js: 'recommendedLocations', typ: r('FabricCareInstructions') },
		],
		false
	),
	ToolsAndHardware: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'title', js: 'title', typ: '' },
			{ json: 'properties', js: 'properties', typ: r('ToolsAndHardwareProperties') },
			{ json: 'oneOf', js: 'oneOf', typ: a(r('OneOf')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	ToolsAndHardwareProperties: o(
		[
			{ json: 'BuildingSupply', js: 'BuildingSupply', typ: r('BuildingSupply') },
			{ json: 'Hardware', js: 'Hardware', typ: r('Hardware') },
			{ json: 'Tools', js: 'Tools', typ: r('Tools') },
			{ json: 'PlumbingAndHVAC', js: 'PlumbingAndHVAC', typ: r('PlumbingAndHVAC') },
			{ json: 'Electrical', js: 'Electrical', typ: r('Electrical') },
			{ json: 'ToolsAndHardwareOther', js: 'ToolsAndHardwareOther', typ: r('MusicCasesAndBags') },
		],
		false
	),
	BuildingSupply: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('BuildingSupplyProperties') },
			{ json: 'required', js: 'required', typ: a(r('AnimalAccessoriesRequired')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	BuildingSupplyProperties: o(
		[
			{ json: 'shortDescription', js: 'shortDescription', typ: r('Sku') },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: r('FabricCareInstructions') },
			{ json: 'brand', js: 'brand', typ: r('Sku') },
			{ json: 'manufacturer', js: 'manufacturer', typ: r('Sku') },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: r('Sku') },
			{ json: 'modelNumber', js: 'modelNumber', typ: r('Sku') },
			{ json: 'multipackQuantity', js: 'multipackQuantity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'countPerPack', js: 'countPerPack', typ: r('MinimumAdvertisedPrice') },
			{ json: 'count', js: 'count', typ: r('Sku') },
			{ json: 'pieceCount', js: 'pieceCount', typ: r('MinimumAdvertisedPrice') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: r('Sku') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: r('FabricCareInstructions') },
			{ json: 'material', js: 'material', typ: r('Sku') },
			{ json: 'shape', js: 'shape', typ: r('Sku') },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: r('FabricCareInstructions') },
			{ json: 'coverageArea', js: 'coverageArea', typ: r('ShippingWeight') },
			{ json: 'form', js: 'form', typ: r('Sku') },
			{ json: 'pattern', js: 'pattern', typ: r('Sku') },
			{ json: 'paintFinish', js: 'paintFinish', typ: r('Sku') },
			{ json: 'recommendedSurfaces', js: 'recommendedSurfaces', typ: r('FabricCareInstructions') },
			{ json: 'size', js: 'size', typ: r('Sku') },
			{ json: 'assembledProductLength', js: 'assembledProductLength', typ: r('ShippingWeight') },
			{ json: 'assembledProductWidth', js: 'assembledProductWidth', typ: r('ShippingWeight') },
			{ json: 'assembledProductHeight', js: 'assembledProductHeight', typ: r('ShippingWeight') },
			{ json: 'assembledProductWeight', js: 'assembledProductWeight', typ: r('ShippingWeight') },
			{ json: 'rollLength', js: 'rollLength', typ: r('ShippingWeight') },
			{ json: 'thickness', js: 'thickness', typ: r('ShippingWeight') },
			{ json: 'variantGroupId', js: 'variantGroupId', typ: r('Sku') },
			{ json: 'variantAttributeNames', js: 'variantAttributeNames', typ: r('CountryOfOriginComponents') },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: r('ProcessMode') },
			{ json: 'swatchImages', js: 'swatchImages', typ: r('SwatchImages') },
			{ json: 'isProp65WarningRequired', js: 'isProp65WarningRequired', typ: r('ProcessMode') },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: r('Sku') },
			{ json: 'batteryTechnologyType', js: 'batteryTechnologyType', typ: r('ProcessMode') },
			{ json: 'hasWarranty', js: 'hasWarranty', typ: r('ProcessMode') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: r('Sku') },
			{ json: 'warrantyText', js: 'warrantyText', typ: r('Sku') },
			{
				json: 'compositeWoodCertificationCode',
				js: 'compositeWoodCertificationCode',
				typ: r('CompositeWoodCertificationCode'),
			},
			{ json: 'hasFuelContainer', js: 'hasFuelContainer', typ: r('ProcessMode') },
			{ json: 'hasIngredientList', js: 'hasIngredientList', typ: r('ProcessMode') },
			{ json: 'ingredientListImage', js: 'ingredientListImage', typ: r('Sku') },
			{ json: 'ingredients', js: 'ingredients', typ: r('Sku') },
			{ json: 'accessoriesIncluded', js: 'accessoriesIncluded', typ: r('FabricCareInstructions') },
			{ json: 'color', js: 'color', typ: r('Sku') },
			{ json: 'colorCategory', js: 'colorCategory', typ: r('CountryOfOriginComponents') },
			{ json: 'doorOpeningStyle', js: 'doorOpeningStyle', typ: r('Sku') },
			{ json: 'isWaterproof', js: 'isWaterproof', typ: r('ProcessMode') },
			{ json: 'isFireResistant', js: 'isFireResistant', typ: r('ProcessMode') },
			{ json: 'cleaningCareAndMaintenance', js: 'cleaningCareAndMaintenance', typ: r('Sku') },
			{ json: 'recommendedUses', js: 'recommendedUses', typ: r('FabricCareInstructions') },
			{ json: 'isMadeFromSustainableMaterials', js: 'isMadeFromSustainableMaterials', typ: r('ProcessMode') },
			{ json: 'isMadeFromReclaimedMaterials', js: 'isMadeFromReclaimedMaterials', typ: r('ProcessMode') },
			{ json: 'isMadeFromRecycledMaterial', js: 'isMadeFromRecycledMaterial', typ: r('ProcessMode') },
			{ json: 'recycledMaterialContent', js: 'recycledMaterialContent', typ: r('RecycledMaterialContent') },
			{ json: 'hasLowEmissivity', js: 'hasLowEmissivity', typ: r('ProcessMode') },
			{ json: 'powerType', js: 'powerType', typ: r('Sku') },
			{ json: 'isEnergyStarCertified', js: 'isEnergyStarCertified', typ: r('ProcessMode') },
			{ json: 'pileHeight', js: 'pileHeight', typ: r('ShippingWeight') },
			{ json: 'grade', js: 'grade', typ: r('Sku') },
			{ json: 'fineness', js: 'fineness', typ: r('Sku') },
			{ json: 'isOdorless', js: 'isOdorless', typ: r('ProcessMode') },
			{ json: 'vocLevel', js: 'vocLevel', typ: r('MinimumAdvertisedPrice') },
			{ json: 'features', js: 'features', typ: r('FabricCareInstructions') },
			{ json: 'keywords', js: 'keywords', typ: r('Sku') },
			{ json: 'dryTime', js: 'dryTime', typ: r('ShippingWeight') },
			{ json: 'isPrefinished', js: 'isPrefinished', typ: r('ProcessMode') },
			{ json: 'isReadyToUse', js: 'isReadyToUse', typ: r('ProcessMode') },
			{ json: 'isFastSetting', js: 'isFastSetting', typ: r('ProcessMode') },
			{ json: 'isMoldResistant', js: 'isMoldResistant', typ: r('ProcessMode') },
			{ json: 'isCombustible', js: 'isCombustible', typ: r('ProcessMode') },
			{ json: 'isFlammable', js: 'isFlammable', typ: r('ProcessMode') },
			{ json: 'isBiodegradable', js: 'isBiodegradable', typ: r('ProcessMode') },
			{ json: 'isWaterSoluble', js: 'isWaterSoluble', typ: r('ProcessMode') },
			{ json: 'peiRating', js: 'peiRating', typ: r('Sku') },
			{ json: 'carpetStyle', js: 'carpetStyle', typ: r('Sku') },
			{ json: 'acRating', js: 'acRating', typ: r('ProcessMode') },
			{ json: 'snowLoadRating', js: 'snowLoadRating', typ: r('ShippingWeight') },
			{ json: 'doorStyle', js: 'doorStyle', typ: r('Sku') },
		],
		false
	),
	Electrical: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('ElectricalProperties') },
			{ json: 'required', js: 'required', typ: a(r('AnimalAccessoriesRequired')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	ElectricalProperties: o(
		[
			{ json: 'lightBulbShape', js: 'lightBulbShape', typ: r('ProcessMode') },
			{ json: 'shortDescription', js: 'shortDescription', typ: r('Sku') },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: r('FabricCareInstructions') },
			{ json: 'brand', js: 'brand', typ: r('Sku') },
			{ json: 'manufacturer', js: 'manufacturer', typ: r('Sku') },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: r('Sku') },
			{ json: 'modelNumber', js: 'modelNumber', typ: r('Sku') },
			{ json: 'multipackQuantity', js: 'multipackQuantity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'countPerPack', js: 'countPerPack', typ: r('MinimumAdvertisedPrice') },
			{ json: 'count', js: 'count', typ: r('Sku') },
			{ json: 'pieceCount', js: 'pieceCount', typ: r('MinimumAdvertisedPrice') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: r('Sku') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: r('FabricCareInstructions') },
			{ json: 'material', js: 'material', typ: r('Sku') },
			{ json: 'shape', js: 'shape', typ: r('Sku') },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: r('FabricCareInstructions') },
			{ json: 'homeDecorStyle', js: 'homeDecorStyle', typ: r('Sku') },
			{ json: 'brightness', js: 'brightness', typ: r('ShippingWeight') },
			{ json: 'powerType', js: 'powerType', typ: r('Sku') },
			{ json: 'size', js: 'size', typ: r('Sku') },
			{ json: 'assembledProductLength', js: 'assembledProductLength', typ: r('ShippingWeight') },
			{ json: 'assembledProductWidth', js: 'assembledProductWidth', typ: r('ShippingWeight') },
			{ json: 'assembledProductHeight', js: 'assembledProductHeight', typ: r('ShippingWeight') },
			{ json: 'assembledProductWeight', js: 'assembledProductWeight', typ: r('ShippingWeight') },
			{ json: 'variantGroupId', js: 'variantGroupId', typ: r('Sku') },
			{ json: 'variantAttributeNames', js: 'variantAttributeNames', typ: r('CountryOfOriginComponents') },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: r('ProcessMode') },
			{ json: 'swatchImages', js: 'swatchImages', typ: r('SwatchImages') },
			{ json: 'isProp65WarningRequired', js: 'isProp65WarningRequired', typ: r('ProcessMode') },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: r('Sku') },
			{ json: 'batteryTechnologyType', js: 'batteryTechnologyType', typ: r('ProcessMode') },
			{ json: 'hasWarranty', js: 'hasWarranty', typ: r('ProcessMode') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: r('Sku') },
			{ json: 'warrantyText', js: 'warrantyText', typ: r('Sku') },
			{ json: 'hasFuelContainer', js: 'hasFuelContainer', typ: r('ProcessMode') },
			{ json: 'finish', js: 'finish', typ: r('Sku') },
			{ json: 'pattern', js: 'pattern', typ: r('Sku') },
			{ json: 'isEnergyStarCertified', js: 'isEnergyStarCertified', typ: r('ProcessMode') },
			{ json: 'maximumEnergySurgeRating', js: 'maximumEnergySurgeRating', typ: r('ShippingWeight') },
			{ json: 'estimatedEnergyCostPerYear', js: 'estimatedEnergyCostPerYear', typ: r('ShippingWeight') },
			{ json: 'compatibleConduitSizes', js: 'compatibleConduitSizes', typ: r('SelfTimerDelay') },
			{ json: 'volts', js: 'volts', typ: r('ShippingWeight') },
			{ json: 'amps', js: 'amps', typ: r('ShippingWeight') },
			{ json: 'watts', js: 'watts', typ: r('ShippingWeight') },
			{ json: 'lightBulbColor', js: 'lightBulbColor', typ: r('Sku') },
			{ json: 'numberOfLights', js: 'numberOfLights', typ: r('MinimumAdvertisedPrice') },
			{ json: 'shadeMaterial', js: 'shadeMaterial', typ: r('Sku') },
			{ json: 'shadeStyle', js: 'shadeStyle', typ: r('Sku') },
			{ json: 'accessoriesIncluded', js: 'accessoriesIncluded', typ: r('FabricCareInstructions') },
			{ json: 'color', js: 'color', typ: r('Sku') },
			{ json: 'colorCategory', js: 'colorCategory', typ: r('CountryOfOriginComponents') },
			{ json: 'baseColor', js: 'baseColor', typ: r('Sku') },
			{ json: 'baseFinish', js: 'baseFinish', typ: r('Sku') },
			{ json: 'isWaterproof', js: 'isWaterproof', typ: r('ProcessMode') },
			{ json: 'isFireResistant', js: 'isFireResistant', typ: r('ProcessMode') },
			{ json: 'cleaningCareAndMaintenance', js: 'cleaningCareAndMaintenance', typ: r('Sku') },
			{ json: 'recommendedUses', js: 'recommendedUses', typ: r('FabricCareInstructions') },
			{ json: 'impedance', js: 'impedance', typ: r('Impedance') },
			{ json: 'conductorMaterial', js: 'conductorMaterial', typ: r('Sku') },
			{ json: 'features', js: 'features', typ: r('FabricCareInstructions') },
			{ json: 'keywords', js: 'keywords', typ: r('Sku') },
			{ json: 'lightBulbBaseType', js: 'lightBulbBaseType', typ: r('ProcessMode') },
			{ json: 'electricalBallastFactor', js: 'electricalBallastFactor', typ: r('ShippingWeight') },
			{ json: 'beamAngle', js: 'beamAngle', typ: r('ShippingWeight') },
			{ json: 'beamSpread', js: 'beamSpread', typ: r('ShippingWeight') },
			{ json: 'horsepower', js: 'horsepower', typ: r('ShippingWeight') },
			{ json: 'isDarkSkyCompliant', js: 'isDarkSkyCompliant', typ: r('ProcessMode') },
			{ json: 'colorTemperature', js: 'colorTemperature', typ: r('ShippingWeight') },
			{ json: 'decibelRating', js: 'decibelRating', typ: r('ShippingWeight') },
			{ json: 'maximumRange', js: 'maximumRange', typ: r('ShippingWeight') },
			{ json: 'numberOfGangs', js: 'numberOfGangs', typ: r('MinimumAdvertisedPrice') },
			{ json: 'numberOfPoles', js: 'numberOfPoles', typ: r('MinimumAdvertisedPrice') },
			{ json: 'responseTime', js: 'responseTime', typ: r('ShippingWeight') },
			{ json: 'americanWireGauge', js: 'americanWireGauge', typ: r('ShippingWeight') },
			{ json: 'mountType', js: 'mountType', typ: r('Sku') },
			{ json: 'isRatedForOutdoorUse', js: 'isRatedForOutdoorUse', typ: r('ProcessMode') },
			{ json: 'lifespan', js: 'lifespan', typ: r('ShippingWeight') },
			{ json: 'character', js: 'character', typ: r('Sku') },
			{ json: 'sportsLeague', js: 'sportsLeague', typ: r('Sku') },
			{ json: 'sportsTeam', js: 'sportsTeam', typ: r('Sku') },
			{ json: 'athlete', js: 'athlete', typ: r('Sku') },
		],
		false
	),
	Hardware: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('HardwareProperties') },
			{ json: 'required', js: 'required', typ: a(r('AnimalAccessoriesRequired')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	HardwareProperties: o(
		[
			{ json: 'shortDescription', js: 'shortDescription', typ: r('Sku') },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: r('FabricCareInstructions') },
			{ json: 'brand', js: 'brand', typ: r('Sku') },
			{ json: 'manufacturer', js: 'manufacturer', typ: r('Sku') },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: r('Sku') },
			{ json: 'modelNumber', js: 'modelNumber', typ: r('Sku') },
			{ json: 'multipackQuantity', js: 'multipackQuantity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'countPerPack', js: 'countPerPack', typ: r('MinimumAdvertisedPrice') },
			{ json: 'count', js: 'count', typ: r('Sku') },
			{ json: 'pieceCount', js: 'pieceCount', typ: r('MinimumAdvertisedPrice') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: r('Sku') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: r('FabricCareInstructions') },
			{ json: 'material', js: 'material', typ: r('Sku') },
			{ json: 'shape', js: 'shape', typ: r('Sku') },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: r('FabricCareInstructions') },
			{ json: 'homeDecorStyle', js: 'homeDecorStyle', typ: r('Sku') },
			{ json: 'finish', js: 'finish', typ: r('Sku') },
			{ json: 'mountType', js: 'mountType', typ: r('Sku') },
			{ json: 'threadStandard', js: 'threadStandard', typ: r('Sku') },
			{ json: 'size', js: 'size', typ: r('Sku') },
			{ json: 'assembledProductLength', js: 'assembledProductLength', typ: r('ShippingWeight') },
			{ json: 'assembledProductWidth', js: 'assembledProductWidth', typ: r('ShippingWeight') },
			{ json: 'assembledProductHeight', js: 'assembledProductHeight', typ: r('ShippingWeight') },
			{ json: 'assembledProductWeight', js: 'assembledProductWeight', typ: r('ShippingWeight') },
			{ json: 'variantGroupId', js: 'variantGroupId', typ: r('Sku') },
			{ json: 'variantAttributeNames', js: 'variantAttributeNames', typ: r('CountryOfOriginComponents') },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: r('ProcessMode') },
			{ json: 'swatchImages', js: 'swatchImages', typ: r('SwatchImages') },
			{ json: 'isProp65WarningRequired', js: 'isProp65WarningRequired', typ: r('ProcessMode') },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: r('Sku') },
			{ json: 'batteryTechnologyType', js: 'batteryTechnologyType', typ: r('ProcessMode') },
			{ json: 'hasWarranty', js: 'hasWarranty', typ: r('ProcessMode') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: r('Sku') },
			{ json: 'warrantyText', js: 'warrantyText', typ: r('Sku') },
			{ json: 'hasFuelContainer', js: 'hasFuelContainer', typ: r('ProcessMode') },
			{ json: 'accessoriesIncluded', js: 'accessoriesIncluded', typ: r('FabricCareInstructions') },
			{ json: 'color', js: 'color', typ: r('Sku') },
			{ json: 'colorCategory', js: 'colorCategory', typ: r('CountryOfOriginComponents') },
			{ json: 'isWaterproof', js: 'isWaterproof', typ: r('ProcessMode') },
			{ json: 'isFireResistant', js: 'isFireResistant', typ: r('ProcessMode') },
			{ json: 'cleaningCareAndMaintenance', js: 'cleaningCareAndMaintenance', typ: r('Sku') },
			{ json: 'recommendedUses', js: 'recommendedUses', typ: r('FabricCareInstructions') },
			{ json: 'isLockable', js: 'isLockable', typ: r('ProcessMode') },
			{ json: 'lockType', js: 'lockType', typ: r('Sku') },
			{ json: 'lockingMechanism', js: 'lockingMechanism', typ: r('Sku') },
			{ json: 'backsetSize', js: 'backsetSize', typ: r('ShippingWeight') },
			{ json: 'maximumWeight', js: 'maximumWeight', typ: r('ShippingWeight') },
			{ json: 'workingLoadLimit', js: 'workingLoadLimit', typ: r('ShippingWeight') },
			{ json: 'alphanumericCharacter', js: 'alphanumericCharacter', typ: r('Sku') },
			{ json: 'features', js: 'features', typ: r('FabricCareInstructions') },
			{ json: 'keywords', js: 'keywords', typ: r('Sku') },
		],
		false
	),
	PlumbingAndHVAC: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('PlumbingAndHVACProperties') },
			{ json: 'required', js: 'required', typ: a(r('AnimalAccessoriesRequired')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	PlumbingAndHVACProperties: o(
		[
			{ json: 'shortDescription', js: 'shortDescription', typ: r('Sku') },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: r('FabricCareInstructions') },
			{ json: 'brand', js: 'brand', typ: r('Sku') },
			{ json: 'manufacturer', js: 'manufacturer', typ: r('Sku') },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: r('Sku') },
			{ json: 'modelNumber', js: 'modelNumber', typ: r('Sku') },
			{ json: 'multipackQuantity', js: 'multipackQuantity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'countPerPack', js: 'countPerPack', typ: r('MinimumAdvertisedPrice') },
			{ json: 'count', js: 'count', typ: r('Sku') },
			{ json: 'pieceCount', js: 'pieceCount', typ: r('MinimumAdvertisedPrice') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: r('Sku') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: r('FabricCareInstructions') },
			{ json: 'material', js: 'material', typ: r('Sku') },
			{ json: 'shape', js: 'shape', typ: r('Sku') },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: r('FabricCareInstructions') },
			{ json: 'size', js: 'size', typ: r('Sku') },
			{ json: 'homeDecorStyle', js: 'homeDecorStyle', typ: r('Sku') },
			{ json: 'assembledProductLength', js: 'assembledProductLength', typ: r('ShippingWeight') },
			{ json: 'assembledProductWidth', js: 'assembledProductWidth', typ: r('ShippingWeight') },
			{ json: 'assembledProductHeight', js: 'assembledProductHeight', typ: r('ShippingWeight') },
			{ json: 'assembledProductWeight', js: 'assembledProductWeight', typ: r('ShippingWeight') },
			{ json: 'variantGroupId', js: 'variantGroupId', typ: r('Sku') },
			{ json: 'variantAttributeNames', js: 'variantAttributeNames', typ: r('CountryOfOriginComponents') },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: r('ProcessMode') },
			{ json: 'swatchImages', js: 'swatchImages', typ: r('SwatchImages') },
			{ json: 'isProp65WarningRequired', js: 'isProp65WarningRequired', typ: r('ProcessMode') },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: r('Sku') },
			{ json: 'batteryTechnologyType', js: 'batteryTechnologyType', typ: r('ProcessMode') },
			{ json: 'hasWarranty', js: 'hasWarranty', typ: r('ProcessMode') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: r('Sku') },
			{ json: 'warrantyText', js: 'warrantyText', typ: r('Sku') },
			{ json: 'hasFuelContainer', js: 'hasFuelContainer', typ: r('ProcessMode') },
			{ json: 'accessoriesIncluded', js: 'accessoriesIncluded', typ: r('FabricCareInstructions') },
			{ json: 'color', js: 'color', typ: r('Sku') },
			{ json: 'colorCategory', js: 'colorCategory', typ: r('CountryOfOriginComponents') },
			{ json: 'isWaterproof', js: 'isWaterproof', typ: r('ProcessMode') },
			{ json: 'isIndustrial', js: 'isIndustrial', typ: r('ProcessMode') },
			{ json: 'isFireResistant', js: 'isFireResistant', typ: r('ProcessMode') },
			{ json: 'cleaningCareAndMaintenance', js: 'cleaningCareAndMaintenance', typ: r('Sku') },
			{ json: 'recommendedUses', js: 'recommendedUses', typ: r('FabricCareInstructions') },
			{ json: 'gallonsPerMinute', js: 'gallonsPerMinute', typ: r('ShippingWeight') },
			{ json: 'mervRating', js: 'mervRating', typ: r('Sku') },
			{ json: 'fuelType', js: 'fuelType', typ: r('Sku') },
			{ json: 'volts', js: 'volts', typ: r('ShippingWeight') },
			{ json: 'watts', js: 'watts', typ: r('ShippingWeight') },
			{ json: 'volumeCapacity', js: 'volumeCapacity', typ: r('ShippingWeight') },
			{ json: 'finish', js: 'finish', typ: r('Sku') },
			{ json: 'numberOfBlades', js: 'numberOfBlades', typ: r('MinimumAdvertisedPrice') },
			{ json: 'sprayPatterns', js: 'sprayPatterns', typ: r('Sku') },
			{ json: 'roughInDistance', js: 'roughInDistance', typ: r('ShippingWeight') },
			{ json: 'contaminantsRemoved', js: 'contaminantsRemoved', typ: r('Sku') },
			{ json: 'faucetHandleDesign', js: 'faucetHandleDesign', typ: r('Sku') },
			{ json: 'hardwareFinish', js: 'hardwareFinish', typ: r('Sku') },
			{ json: 'features', js: 'features', typ: r('FabricCareInstructions') },
			{ json: 'keywords', js: 'keywords', typ: r('Sku') },
			{ json: 'autographedBy', js: 'autographedBy', typ: r('Sku') },
			{ json: 'coverageArea', js: 'coverageArea', typ: r('ShippingWeight') },
			{ json: 'faucetDrillings', js: 'faucetDrillings', typ: r('Sku') },
			{ json: 'gallonsPerFlush', js: 'gallonsPerFlush', typ: r('ShippingWeight') },
			{ json: 'hasCeeCertification', js: 'hasCeeCertification', typ: r('ProcessMode') },
			{ json: 'ceeTier', js: 'ceeTier', typ: r('ProcessMode') },
			{ json: 'horsepower', js: 'horsepower', typ: r('ShippingWeight') },
			{ json: 'humidificationOutputPerDay', js: 'humidificationOutputPerDay', typ: r('ShippingWeight') },
			{ json: 'pintsOfMoistureRemovedPerDay', js: 'pintsOfMoistureRemovedPerDay', typ: r('ShippingWeight') },
		],
		false
	),
	Tools: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('ToolsProperties') },
			{ json: 'required', js: 'required', typ: a(r('AnimalAccessoriesRequired')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	ToolsProperties: o(
		[
			{ json: 'shortDescription', js: 'shortDescription', typ: r('Sku') },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: r('FabricCareInstructions') },
			{ json: 'brand', js: 'brand', typ: r('Sku') },
			{ json: 'manufacturer', js: 'manufacturer', typ: r('Sku') },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: r('Sku') },
			{ json: 'modelNumber', js: 'modelNumber', typ: r('Sku') },
			{ json: 'multipackQuantity', js: 'multipackQuantity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'countPerPack', js: 'countPerPack', typ: r('MinimumAdvertisedPrice') },
			{ json: 'count', js: 'count', typ: r('Sku') },
			{ json: 'pieceCount', js: 'pieceCount', typ: r('MinimumAdvertisedPrice') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: r('Sku') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: r('FabricCareInstructions') },
			{ json: 'material', js: 'material', typ: r('Sku') },
			{ json: 'shape', js: 'shape', typ: r('Sku') },
			{ json: 'size', js: 'size', typ: r('Sku') },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: r('FabricCareInstructions') },
			{ json: 'powerType', js: 'powerType', typ: r('Sku') },
			{ json: 'fuelType', js: 'fuelType', typ: r('Sku') },
			{ json: 'bladeDiameter', js: 'bladeDiameter', typ: r('ShippingWeight') },
			{ json: 'bladeLength', js: 'bladeLength', typ: r('ShippingWeight') },
			{ json: 'bladeShank', js: 'bladeShank', typ: r('Sku') },
			{ json: 'shankSize', js: 'shankSize', typ: r('ShippingWeight') },
			{ json: 'chuckType', js: 'chuckType', typ: r('Sku') },
			{ json: 'chuckSize', js: 'chuckSize', typ: r('ShippingWeight') },
			{ json: 'arborDiameter', js: 'arborDiameter', typ: r('ShippingWeight') },
			{ json: 'colletSize', js: 'colletSize', typ: r('ShippingWeight') },
			{ json: 'spindleThread', js: 'spindleThread', typ: r('Sku') },
			{ json: 'discSize', js: 'discSize', typ: r('ShippingWeight') },
			{ json: 'sandingBeltSize', js: 'sandingBeltSize', typ: r('Sku') },
			{ json: 'airInlet', js: 'airInlet', typ: r('ShippingWeight') },
			{ json: 'averageAirConsumptionAt90PSI', js: 'averageAirConsumptionAt90PSI', typ: r('ShippingWeight') },
			{ json: 'cfmAt40Psi', js: 'cfmAt40Psi', typ: r('ShippingWeight') },
			{ json: 'cfmAt90Psi', js: 'cfmAt90Psi', typ: r('ShippingWeight') },
			{ json: 'volts', js: 'volts', typ: r('ShippingWeight') },
			{ json: 'amps', js: 'amps', typ: r('ShippingWeight') },
			{ json: 'assembledProductLength', js: 'assembledProductLength', typ: r('ShippingWeight') },
			{ json: 'assembledProductWidth', js: 'assembledProductWidth', typ: r('ShippingWeight') },
			{ json: 'assembledProductHeight', js: 'assembledProductHeight', typ: r('ShippingWeight') },
			{ json: 'assembledProductWeight', js: 'assembledProductWeight', typ: r('ShippingWeight') },
			{ json: 'variantGroupId', js: 'variantGroupId', typ: r('Sku') },
			{ json: 'variantAttributeNames', js: 'variantAttributeNames', typ: r('CountryOfOriginComponents') },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: r('ProcessMode') },
			{ json: 'swatchImages', js: 'swatchImages', typ: r('SwatchImages') },
			{ json: 'isProp65WarningRequired', js: 'isProp65WarningRequired', typ: r('ProcessMode') },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: r('Sku') },
			{ json: 'batteryTechnologyType', js: 'batteryTechnologyType', typ: r('ProcessMode') },
			{ json: 'hasWarranty', js: 'hasWarranty', typ: r('ProcessMode') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: r('Sku') },
			{ json: 'warrantyText', js: 'warrantyText', typ: r('Sku') },
			{ json: 'hasFuelContainer', js: 'hasFuelContainer', typ: r('ProcessMode') },
			{ json: 'accessoriesIncluded', js: 'accessoriesIncluded', typ: r('FabricCareInstructions') },
			{ json: 'color', js: 'color', typ: r('Sku') },
			{ json: 'colorCategory', js: 'colorCategory', typ: r('CountryOfOriginComponents') },
			{ json: 'isWaterproof', js: 'isWaterproof', typ: r('ProcessMode') },
			{ json: 'isIndustrial', js: 'isIndustrial', typ: r('ProcessMode') },
			{ json: 'isFireResistant', js: 'isFireResistant', typ: r('ProcessMode') },
			{ json: 'cleaningCareAndMaintenance', js: 'cleaningCareAndMaintenance', typ: r('Sku') },
			{ json: 'recommendedUses', js: 'recommendedUses', typ: r('FabricCareInstructions') },
			{ json: 'numberOfBlades', js: 'numberOfBlades', typ: r('MinimumAdvertisedPrice') },
			{ json: 'bladeWidth', js: 'bladeWidth', typ: r('ShippingWeight') },
			{ json: 'lightBulbType', js: 'lightBulbType', typ: r('Sku') },
			{ json: 'gritSize', js: 'gritSize', typ: r('Sku') },
			{ json: 'squareDriveSize', js: 'squareDriveSize', typ: r('Impedance') },
			{ json: 'socketDepth', js: 'socketDepth', typ: r('ShippingWeight') },
			{ json: 'numberOfSteps', js: 'numberOfSteps', typ: r('MinimumAdvertisedPrice') },
			{ json: 'numberOfPoints', js: 'numberOfPoints', typ: r('MinimumAdvertisedPrice') },
			{ json: 'features', js: 'features', typ: r('FabricCareInstructions') },
			{ json: 'keywords', js: 'keywords', typ: r('Sku') },
			{ json: 'handing', js: 'handing', typ: r('Sku') },
			{ json: 'finish', js: 'finish', typ: r('Sku') },
			{ json: 'cordLength', js: 'cordLength', typ: r('ShippingWeight') },
			{ json: 'batteryCapacity', js: 'batteryCapacity', typ: r('ShippingWeight') },
			{ json: 'engineDisplacement', js: 'engineDisplacement', typ: r('ShippingWeight') },
			{ json: 'horsepower', js: 'horsepower', typ: r('ShippingWeight') },
			{ json: 'decibelRating', js: 'decibelRating', typ: r('ShippingWeight') },
			{ json: 'maximumAirPressure', js: 'maximumAirPressure', typ: r('ShippingWeight') },
			{ json: 'maximumWattsOut', js: 'maximumWattsOut', typ: r('ShippingWeight') },
			{ json: 'torque', js: 'torque', typ: r('MinimumAdvertisedPrice') },
			{ json: 'sandingSpeed', js: 'sandingSpeed', typ: r('ShippingWeight') },
			{ json: 'noLoadSpeed', js: 'noLoadSpeed', typ: r('ShippingWeight') },
			{ json: 'strokeLength', js: 'strokeLength', typ: r('ShippingWeight') },
			{ json: 'strokesPerMinute', js: 'strokesPerMinute', typ: r('Sku') },
			{ json: 'blowsPerMinute', js: 'blowsPerMinute', typ: r('Sku') },
			{ json: 'impactEnergy', js: 'impactEnergy', typ: r('ShippingWeight') },
			{ json: 'loadCapacity', js: 'loadCapacity', typ: r('ShippingWeight') },
			{ json: 'volumeCapacity', js: 'volumeCapacity', typ: r('ShippingWeight') },
			{ json: 'teethPerInch', js: 'teethPerInch', typ: r('MinimumAdvertisedPrice') },
			{ json: 'maximumJawOpening', js: 'maximumJawOpening', typ: r('ShippingWeight') },
			{ json: 'tankConfiguration', js: 'tankConfiguration', typ: r('Sku') },
		],
		false
	),
	ToysCategory: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'title', js: 'title', typ: '' },
			{ json: 'properties', js: 'properties', typ: r('ToysCategoryProperties') },
			{ json: 'oneOf', js: 'oneOf', typ: a(r('OneOf')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	ToysCategoryProperties: o([{ json: 'Toys', js: 'Toys', typ: r('Toys') }], false),
	Toys: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('ToysProperties') },
			{ json: 'required', js: 'required', typ: a(r('AnimalAccessoriesRequired')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	ToysProperties: o(
		[
			{ json: 'shortDescription', js: 'shortDescription', typ: r('Sku') },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: r('FabricCareInstructions') },
			{ json: 'brand', js: 'brand', typ: r('Sku') },
			{ json: 'manufacturer', js: 'manufacturer', typ: r('Sku') },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: r('Sku') },
			{ json: 'modelNumber', js: 'modelNumber', typ: r('Sku') },
			{ json: 'multipackQuantity', js: 'multipackQuantity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'countPerPack', js: 'countPerPack', typ: r('MinimumAdvertisedPrice') },
			{ json: 'count', js: 'count', typ: r('Sku') },
			{ json: 'pieceCount', js: 'pieceCount', typ: r('MinimumAdvertisedPrice') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: r('Sku') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: r('FabricCareInstructions') },
			{ json: 'color', js: 'color', typ: r('Sku') },
			{ json: 'colorCategory', js: 'colorCategory', typ: r('CountryOfOriginComponents') },
			{ json: 'gender', js: 'gender', typ: r('ProcessMode') },
			{ json: 'size', js: 'size', typ: r('Sku') },
			{ json: 'ageGroup', js: 'ageGroup', typ: r('CountryOfOriginComponents') },
			{ json: 'ageRange', js: 'ageRange', typ: r('AgeRange') },
			{ json: 'targetAudience', js: 'targetAudience', typ: r('FabricCareInstructions') },
			{ json: 'educationalFocus', js: 'educationalFocus', typ: r('FabricCareInstructions') },
			{ json: 'skillLevel', js: 'skillLevel', typ: r('Sku') },
			{ json: 'awardsWon', js: 'awardsWon', typ: r('FabricCareInstructions') },
			{ json: 'theme', js: 'theme', typ: r('Sku') },
			{ json: 'character', js: 'character', typ: r('Sku') },
			{ json: 'activity', js: 'activity', typ: r('Sku') },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: r('FabricCareInstructions') },
			{ json: 'numberOfPlayers', js: 'numberOfPlayers', typ: r('NumberOfPlayers') },
			{ json: 'assembledProductLength', js: 'assembledProductLength', typ: r('ShippingWeight') },
			{ json: 'assembledProductWidth', js: 'assembledProductWidth', typ: r('ShippingWeight') },
			{ json: 'assembledProductHeight', js: 'assembledProductHeight', typ: r('ShippingWeight') },
			{ json: 'assembledProductWeight', js: 'assembledProductWeight', typ: r('ShippingWeight') },
			{ json: 'variantGroupId', js: 'variantGroupId', typ: r('Sku') },
			{ json: 'variantAttributeNames', js: 'variantAttributeNames', typ: r('CountryOfOriginComponents') },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: r('ProcessMode') },
			{ json: 'swatchImages', js: 'swatchImages', typ: r('SwatchImages') },
			{ json: 'isProp65WarningRequired', js: 'isProp65WarningRequired', typ: r('ProcessMode') },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: r('Sku') },
			{ json: 'smallPartsWarnings', js: 'smallPartsWarnings', typ: r('SmallPartsWarnings') },
			{ json: 'hasExpiration', js: 'hasExpiration', typ: r('ProcessMode') },
			{ json: 'hasIngredientList', js: 'hasIngredientList', typ: r('ProcessMode') },
			{ json: 'ingredientListImage', js: 'ingredientListImage', typ: r('Sku') },
			{ json: 'batteryTechnologyType', js: 'batteryTechnologyType', typ: r('ProcessMode') },
			{ json: 'hasWarranty', js: 'hasWarranty', typ: r('ProcessMode') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: r('Sku') },
			{ json: 'warrantyText', js: 'warrantyText', typ: r('Sku') },
			{ json: 'requiresTextileActLabeling', js: 'requiresTextileActLabeling', typ: r('ProcessMode') },
			{ json: 'countryOfOriginTextiles', js: 'countryOfOriginTextiles', typ: r('ProcessMode') },
			{ json: 'fabricContent', js: 'fabricContent', typ: r('FabricContent') },
			{ json: 'fabricCareInstructions', js: 'fabricCareInstructions', typ: r('FabricCareInstructions') },
			{ json: 'isAssemblyRequired', js: 'isAssemblyRequired', typ: r('ProcessMode') },
			{ json: 'assemblyInstructions', js: 'assemblyInstructions', typ: r('Sku') },
			{ json: 'material', js: 'material', typ: r('Sku') },
			{ json: 'finish', js: 'finish', typ: r('Sku') },
			{ json: 'shape', js: 'shape', typ: r('Sku') },
			{ json: 'occasion', js: 'occasion', typ: r('Sku') },
			{ json: 'sport', js: 'sport', typ: r('Sku') },
			{ json: 'hairColorCategory', js: 'hairColorCategory', typ: r('ProcessMode') },
			{ json: 'skinTone', js: 'skinTone', typ: r('Sku') },
			{ json: 'flavor', js: 'flavor', typ: r('Sku') },
			{ json: 'animalType', js: 'animalType', typ: r('Sku') },
			{ json: 'vehicleType', js: 'vehicleType', typ: r('Sku') },
			{ json: 'displayTechnology', js: 'displayTechnology', typ: r('Sku') },
			{ json: 'screenSize', js: 'screenSize', typ: r('ShippingWeight') },
			{ json: 'isPowered', js: 'isPowered', typ: r('ProcessMode') },
			{ json: 'powerType', js: 'powerType', typ: r('Sku') },
			{ json: 'capacity', js: 'capacity', typ: r('Sku') },
			{ json: 'seatingCapacity', js: 'seatingCapacity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'minimumWeight', js: 'minimumWeight', typ: r('ShippingWeight') },
			{ json: 'maximumWeight', js: 'maximumWeight', typ: r('ShippingWeight') },
			{ json: 'maximumSpeed', js: 'maximumSpeed', typ: r('ShippingWeight') },
			{ json: 'isTravelSize', js: 'isTravelSize', typ: r('ProcessMode') },
			{ json: 'isInflatable', js: 'isInflatable', typ: r('ProcessMode') },
			{ json: 'fillMaterial', js: 'fillMaterial', typ: r('FabricCareInstructions') },
			{ json: 'makesNoise', js: 'makesNoise', typ: r('ProcessMode') },
			{ json: 'sportsLeague', js: 'sportsLeague', typ: r('Sku') },
			{ json: 'sportsTeam', js: 'sportsTeam', typ: r('Sku') },
			{ json: 'athlete', js: 'athlete', typ: r('Sku') },
			{ json: 'features', js: 'features', typ: r('FabricCareInstructions') },
			{ json: 'keywords', js: 'keywords', typ: r('Sku') },
		],
		false
	),
	NumberOfPlayers: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('NumberOfPlayersProperties') },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	NumberOfPlayersProperties: o(
		[
			{ json: 'minimumNumberOfPlayers', js: 'minimumNumberOfPlayers', typ: r('MinimumAdvertisedPrice') },
			{ json: 'maximumNumberOfPlayers', js: 'maximumNumberOfPlayers', typ: r('MinimumAdvertisedPrice') },
		],
		false
	),
	Vehicle: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'title', js: 'title', typ: '' },
			{ json: 'properties', js: 'properties', typ: r('VehicleProperties') },
			{ json: 'oneOf', js: 'oneOf', typ: a(r('OneOf')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	VehicleProperties: o(
		[
			{ json: 'Tires', js: 'Tires', typ: r('Tires') },
			{ json: 'LandVehicles', js: 'LandVehicles', typ: r('LandVehicles') },
			{
				json: 'VehiclePartsAndAccessories',
				js: 'VehiclePartsAndAccessories',
				typ: r('VehiclePartsAndAccessories'),
			},
			{ json: 'WheelsAndWheelComponents', js: 'WheelsAndWheelComponents', typ: r('WheelsAndWheelComponents') },
			{ json: 'VehicleOther', js: 'VehicleOther', typ: r('MusicCasesAndBags') },
			{ json: 'Watercraft', js: 'Watercraft', typ: r('Watercraft') },
		],
		false
	),
	LandVehicles: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('LandVehiclesProperties') },
			{ json: 'required', js: 'required', typ: a(r('AnimalAccessoriesRequired')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	LandVehiclesProperties: o(
		[
			{ json: 'shortDescription', js: 'shortDescription', typ: r('Sku') },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: r('FabricCareInstructions') },
			{ json: 'brand', js: 'brand', typ: r('Sku') },
			{ json: 'manufacturer', js: 'manufacturer', typ: r('Sku') },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: r('Sku') },
			{ json: 'modelNumber', js: 'modelNumber', typ: r('Sku') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: r('Sku') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: r('FabricCareInstructions') },
			{ json: 'color', js: 'color', typ: r('Sku') },
			{ json: 'vehicleType', js: 'vehicleType', typ: r('Sku') },
			{ json: 'vehicleYear', js: 'vehicleYear', typ: r('MinimumAdvertisedPrice') },
			{ json: 'vehicleMake', js: 'vehicleMake', typ: r('Sku') },
			{ json: 'vehicleModel', js: 'vehicleModel', typ: r('Sku') },
			{ json: 'submodel', js: 'submodel', typ: r('Sku') },
			{ json: 'powertrain', js: 'powertrain', typ: r('Sku') },
			{ json: 'drivetrain', js: 'drivetrain', typ: r('Sku') },
			{ json: 'transmissionDesignation', js: 'transmissionDesignation', typ: r('Sku') },
			{ json: 'engineModel', js: 'engineModel', typ: r('Sku') },
			{ json: 'engineDisplacement', js: 'engineDisplacement', typ: r('ShippingWeight') },
			{ json: 'boreStroke', js: 'boreStroke', typ: r('Sku') },
			{ json: 'inductionSystem', js: 'inductionSystem', typ: r('Sku') },
			{ json: 'compressionRatio', js: 'compressionRatio', typ: r('Sku') },
			{ json: 'maximumEnginePower', js: 'maximumEnginePower', typ: r('ShippingWeight') },
			{ json: 'torque', js: 'torque', typ: r('MinimumAdvertisedPrice') },
			{ json: 'acceleration', js: 'acceleration', typ: r('Sku') },
			{ json: 'topSpeed', js: 'topSpeed', typ: r('ShippingWeight') },
			{ json: 'coolingSystem', js: 'coolingSystem', typ: r('Sku') },
			{ json: 'fuelRequirement', js: 'fuelRequirement', typ: r('Sku') },
			{ json: 'fuelSystem', js: 'fuelSystem', typ: r('Sku') },
			{ json: 'fuelCapacity', js: 'fuelCapacity', typ: r('ShippingWeight') },
			{ json: 'averageFuelConsumption', js: 'averageFuelConsumption', typ: r('ShippingWeight') },
			{ json: 'frontSuspension', js: 'frontSuspension', typ: r('Sku') },
			{ json: 'rearSuspension', js: 'rearSuspension', typ: r('Sku') },
			{ json: 'frontBrakes', js: 'frontBrakes', typ: r('Sku') },
			{ json: 'rearBrakes', js: 'rearBrakes', typ: r('Sku') },
			{ json: 'frontWheels', js: 'frontWheels', typ: r('Sku') },
			{ json: 'rearWheels', js: 'rearWheels', typ: r('Sku') },
			{ json: 'frontTires', js: 'frontTires', typ: r('Sku') },
			{ json: 'rearTires', js: 'rearTires', typ: r('Sku') },
			{ json: 'seatingCapacity', js: 'seatingCapacity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'seatHeight', js: 'seatHeight', typ: r('ShippingWeight') },
			{ json: 'wheelbase', js: 'wheelbase', typ: r('ShippingWeight') },
			{ json: 'curbWeight', js: 'curbWeight', typ: r('ShippingWeight') },
			{ json: 'towingCapacity', js: 'towingCapacity', typ: r('ShippingWeight') },
			{ json: 'assembledProductLength', js: 'assembledProductLength', typ: r('ShippingWeight') },
			{ json: 'assembledProductWidth', js: 'assembledProductWidth', typ: r('ShippingWeight') },
			{ json: 'assembledProductHeight', js: 'assembledProductHeight', typ: r('ShippingWeight') },
			{ json: 'variantGroupId', js: 'variantGroupId', typ: r('Sku') },
			{ json: 'variantAttributeNames', js: 'variantAttributeNames', typ: r('CountryOfOriginComponents') },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: r('ProcessMode') },
			{ json: 'swatchImages', js: 'swatchImages', typ: r('SwatchImages') },
			{ json: 'isProp65WarningRequired', js: 'isProp65WarningRequired', typ: r('ProcessMode') },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: r('Sku') },
			{ json: 'batteryTechnologyType', js: 'batteryTechnologyType', typ: r('ProcessMode') },
			{ json: 'hasWarranty', js: 'hasWarranty', typ: r('ProcessMode') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: r('Sku') },
			{ json: 'warrantyText', js: 'warrantyText', typ: r('Sku') },
			{ json: 'hasFuelContainer', js: 'hasFuelContainer', typ: r('ProcessMode') },
			{
				json: 'compositeWoodCertificationCode',
				js: 'compositeWoodCertificationCode',
				typ: r('CompositeWoodCertificationCode'),
			},
			{ json: 'requiresTextileActLabeling', js: 'requiresTextileActLabeling', typ: r('ProcessMode') },
			{ json: 'countryOfOriginTextiles', js: 'countryOfOriginTextiles', typ: r('ProcessMode') },
			{ json: 'fabricContent', js: 'fabricContent', typ: r('FabricContent') },
			{ json: 'features', js: 'features', typ: r('FabricCareInstructions') },
			{ json: 'keywords', js: 'keywords', typ: r('Sku') },
		],
		false
	),
	Tires: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('TiresProperties') },
			{ json: 'required', js: 'required', typ: a('') },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	TiresProperties: o(
		[
			{ json: 'shortDescription', js: 'shortDescription', typ: r('Sku') },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: r('FabricCareInstructions') },
			{ json: 'brand', js: 'brand', typ: r('Sku') },
			{ json: 'manufacturer', js: 'manufacturer', typ: r('Sku') },
			{ json: 'modelNumber', js: 'modelNumber', typ: r('Sku') },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: r('Sku') },
			{ json: 'multipackQuantity', js: 'multipackQuantity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'countPerPack', js: 'countPerPack', typ: r('MinimumAdvertisedPrice') },
			{ json: 'count', js: 'count', typ: r('Sku') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: r('Sku') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: r('FabricCareInstructions') },
			{ json: 'color', js: 'color', typ: r('Sku') },
			{ json: 'tireSize', js: 'tireSize', typ: r('Sku') },
			{ json: 'vehicleClassDesignator', js: 'vehicleClassDesignator', typ: r('Sku') },
			{ json: 'tireWidth', js: 'tireWidth', typ: r('ShippingWeight') },
			{ json: 'tireAspectRatio', js: 'tireAspectRatio', typ: r('MinimumAdvertisedPrice') },
			{ json: 'tireSpeedRating', js: 'tireSpeedRating', typ: r('Sku') },
			{ json: 'wheelDiameter', js: 'wheelDiameter', typ: r('ShippingWeight') },
			{ json: 'tireLoadRange', js: 'tireLoadRange', typ: r('ProcessMode') },
			{ json: 'overallDiameter', js: 'overallDiameter', typ: r('ShippingWeight') },
			{ json: 'tireSeason', js: 'tireSeason', typ: r('Sku') },
			{ json: 'mudAndSnowRated', js: 'mudAndSnowRated', typ: r('ProcessMode') },
			{ json: 'isRunFlat', js: 'isRunFlat', typ: r('ProcessMode') },
			{ json: 'constructionType', js: 'constructionType', typ: r('Sku') },
			{ json: 'treadDepth', js: 'treadDepth', typ: r('ShippingWeight') },
			{ json: 'treadWidth', js: 'treadWidth', typ: r('ShippingWeight') },
			{ json: 'tireLoadIndex', js: 'tireLoadIndex', typ: r('MinimumAdvertisedPrice') },
			{ json: 'tireTreadwearRating', js: 'tireTreadwearRating', typ: r('MinimumAdvertisedPrice') },
			{ json: 'tireTractionRating', js: 'tireTractionRating', typ: r('ProcessMode') },
			{ json: 'tireTemperatureRating', js: 'tireTemperatureRating', typ: r('ProcessMode') },
			{ json: 'tireSidewallStyle', js: 'tireSidewallStyle', typ: r('Sku') },
			{ json: 'maximumInflationPressure', js: 'maximumInflationPressure', typ: r('ShippingWeight') },
			{ json: 'uniformTireQualityGrade', js: 'uniformTireQualityGrade', typ: r('Sku') },
			{ json: 'tireType', js: 'tireType', typ: r('Sku') },
			{ json: 'assembledProductWeight', js: 'assembledProductWeight', typ: r('ShippingWeight') },
			{ json: 'variantGroupId', js: 'variantGroupId', typ: r('Sku') },
			{ json: 'variantAttributeNames', js: 'variantAttributeNames', typ: r('CountryOfOriginComponents') },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: r('ProcessMode') },
			{ json: 'swatchImages', js: 'swatchImages', typ: r('SwatchImages') },
			{ json: 'isProp65WarningRequired', js: 'isProp65WarningRequired', typ: r('ProcessMode') },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: r('Sku') },
			{ json: 'hasWarranty', js: 'hasWarranty', typ: r('ProcessMode') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: r('Sku') },
			{ json: 'warrantyText', js: 'warrantyText', typ: r('Sku') },
			{ json: 'features', js: 'features', typ: r('FabricCareInstructions') },
			{ json: 'keywords', js: 'keywords', typ: r('Sku') },
		],
		false
	),
	VehiclePartsAndAccessories: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('VehiclePartsAndAccessoriesProperties') },
			{ json: 'required', js: 'required', typ: a(r('AnimalAccessoriesRequired')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	VehiclePartsAndAccessoriesProperties: o(
		[
			{ json: 'shortDescription', js: 'shortDescription', typ: r('Sku') },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: r('FabricCareInstructions') },
			{ json: 'brand', js: 'brand', typ: r('Sku') },
			{ json: 'manufacturer', js: 'manufacturer', typ: r('Sku') },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: r('Sku') },
			{ json: 'modelNumber', js: 'modelNumber', typ: r('Sku') },
			{ json: 'unitsPerConsumerUnit', js: 'unitsPerConsumerUnit', typ: r('MinimumAdvertisedPrice') },
			{ json: 'multipackQuantity', js: 'multipackQuantity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'countPerPack', js: 'countPerPack', typ: r('MinimumAdvertisedPrice') },
			{ json: 'count', js: 'count', typ: r('Sku') },
			{ json: 'pieceCount', js: 'pieceCount', typ: r('MinimumAdvertisedPrice') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: r('Sku') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: r('FabricCareInstructions') },
			{ json: 'color', js: 'color', typ: r('Sku') },
			{ json: 'form', js: 'form', typ: r('Sku') },
			{ json: 'shape', js: 'shape', typ: r('Sku') },
			{ json: 'size', js: 'size', typ: r('Sku') },
			{ json: 'finish', js: 'finish', typ: r('Sku') },
			{ json: 'fillMaterial', js: 'fillMaterial', typ: r('FabricCareInstructions') },
			{ json: 'compatibleCars', js: 'compatibleCars', typ: r('Sku') },
			{ json: 'compatibleBrands', js: 'compatibleBrands', typ: r('FabricCareInstructions') },
			{ json: 'compatibleDevices', js: 'compatibleDevices', typ: r('Sku') },
			{ json: 'isPowered', js: 'isPowered', typ: r('ProcessMode') },
			{ json: 'powerType', js: 'powerType', typ: r('Sku') },
			{ json: 'fluidOunces', js: 'fluidOunces', typ: r('ShippingWeight') },
			{ json: 'amps', js: 'amps', typ: r('ShippingWeight') },
			{ json: 'coldCrankAmp', js: 'coldCrankAmp', typ: r('ShippingWeight') },
			{ json: 'beamSpread', js: 'beamSpread', typ: r('ShippingWeight') },
			{ json: 'beamAngle', js: 'beamAngle', typ: r('ShippingWeight') },
			{ json: 'inDashSystem', js: 'inDashSystem', typ: r('ProcessMode') },
			{ json: 'interfaceType', js: 'interfaceType', typ: r('FabricCareInstructions') },
			{ json: 'displayTechnology', js: 'displayTechnology', typ: r('Sku') },
			{ json: 'displayResolution', js: 'displayResolution', typ: r('Sku') },
			{ json: 'fastenerHeadType', js: 'fastenerHeadType', typ: r('Sku') },
			{ json: 'connections', js: 'connections', typ: r('FabricCareInstructions') },
			{ json: 'cableLength', js: 'cableLength', typ: r('ShippingWeight') },
			{ json: 'chainLength', js: 'chainLength', typ: r('ShippingWeight') },
			{ json: 'candlePower', js: 'candlePower', typ: r('ShippingWeight') },
			{ json: 'fuelType', js: 'fuelType', typ: r('Sku') },
			{ json: 'flashPoint', js: 'flashPoint', typ: r('ShippingWeight') },
			{ json: 'filterLife', js: 'filterLife', typ: r('ShippingWeight') },
			{ json: 'lightBulbType', js: 'lightBulbType', typ: r('Sku') },
			{ json: 'isLockable', js: 'isLockable', typ: r('ProcessMode') },
			{ json: 'isReusable', js: 'isReusable', typ: r('ProcessMode') },
			{ json: 'breakingStrength', js: 'breakingStrength', typ: r('ShippingWeight') },
			{ json: 'maximumMotorSpeed', js: 'maximumMotorSpeed', typ: r('ShippingWeight') },
			{ json: 'maximumTemperature', js: 'maximumTemperature', typ: r('ShippingWeight') },
			{ json: 'numberOfOutlets', js: 'numberOfOutlets', typ: r('MinimumAdvertisedPrice') },
			{ json: 'receiverCompatibility', js: 'receiverCompatibility', typ: r('ShippingWeight') },
			{ json: 'reserveCapacity', js: 'reserveCapacity', typ: r('ShippingWeight') },
			{ json: 'loadCapacity', js: 'loadCapacity', typ: r('ShippingWeight') },
			{ json: 'horsepower', js: 'horsepower', typ: r('ShippingWeight') },
			{ json: 'saeDotCompliant', js: 'saeDotCompliant', typ: r('ProcessMode') },
			{ json: 'shackleClearance', js: 'shackleClearance', typ: r('ShippingWeight') },
			{ json: 'shackleDiameter', js: 'shackleDiameter', typ: r('ShippingWeight') },
			{ json: 'shackleLength', js: 'shackleLength', typ: r('ShippingWeight') },
			{ json: 'shankLength', js: 'shankLength', typ: r('ShippingWeight') },
			{ json: 'shearStrength', js: 'shearStrength', typ: r('ShippingWeight') },
			{ json: 'hitchClass', js: 'hitchClass', typ: r('Sku') },
			{ json: 'dropDistance', js: 'dropDistance', typ: r('Impedance') },
			{ json: 'assembledProductLength', js: 'assembledProductLength', typ: r('ShippingWeight') },
			{ json: 'assembledProductWidth', js: 'assembledProductWidth', typ: r('ShippingWeight') },
			{ json: 'assembledProductHeight', js: 'assembledProductHeight', typ: r('ShippingWeight') },
			{ json: 'assembledProductWeight', js: 'assembledProductWeight', typ: r('ShippingWeight') },
			{ json: 'variantGroupId', js: 'variantGroupId', typ: r('Sku') },
			{ json: 'variantAttributeNames', js: 'variantAttributeNames', typ: r('CountryOfOriginComponents') },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: r('ProcessMode') },
			{ json: 'swatchImages', js: 'swatchImages', typ: r('SwatchImages') },
			{ json: 'isProp65WarningRequired', js: 'isProp65WarningRequired', typ: r('ProcessMode') },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: r('Sku') },
			{ json: 'batteryTechnologyType', js: 'batteryTechnologyType', typ: r('ProcessMode') },
			{ json: 'isAerosol', js: 'isAerosol', typ: r('ProcessMode') },
			{ json: 'isChemical', js: 'isChemical', typ: r('ProcessMode') },
			{
				json: 'compositeWoodCertificationCode',
				js: 'compositeWoodCertificationCode',
				typ: r('CompositeWoodCertificationCode'),
			},
			{ json: 'hasWarranty', js: 'hasWarranty', typ: r('ProcessMode') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: r('Sku') },
			{ json: 'warrantyText', js: 'warrantyText', typ: r('Sku') },
			{ json: 'hasFuelContainer', js: 'hasFuelContainer', typ: r('ProcessMode') },
			{ json: 'vehicleType', js: 'vehicleType', typ: r('Sku') },
			{ json: 'motorOilViscosity', js: 'motorOilViscosity', typ: r('Sku') },
			{ json: 'fabricContent', js: 'fabricContent', typ: r('FabricContent') },
			{ json: 'fabricCareInstructions', js: 'fabricCareInstructions', typ: r('FabricCareInstructions') },
			{ json: 'sportsLeague', js: 'sportsLeague', typ: r('Sku') },
			{ json: 'sportsTeam', js: 'sportsTeam', typ: r('Sku') },
			{ json: 'athlete', js: 'athlete', typ: r('Sku') },
			{ json: 'autographedBy', js: 'autographedBy', typ: r('Sku') },
			{ json: 'features', js: 'features', typ: r('FabricCareInstructions') },
			{ json: 'keywords', js: 'keywords', typ: r('Sku') },
		],
		false
	),
	Watercraft: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('WatercraftProperties') },
			{ json: 'required', js: 'required', typ: a(r('AnimalAccessoriesRequired')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	WatercraftProperties: o(
		[
			{ json: 'shortDescription', js: 'shortDescription', typ: r('Sku') },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: r('FabricCareInstructions') },
			{ json: 'brand', js: 'brand', typ: r('Sku') },
			{ json: 'manufacturer', js: 'manufacturer', typ: r('Sku') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: r('Sku') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: r('FabricCareInstructions') },
			{ json: 'color', js: 'color', typ: r('Sku') },
			{ json: 'vehicleType', js: 'vehicleType', typ: r('Sku') },
			{ json: 'vehicleYear', js: 'vehicleYear', typ: r('MinimumAdvertisedPrice') },
			{ json: 'vehicleMake', js: 'vehicleMake', typ: r('Sku') },
			{ json: 'vehicleModel', js: 'vehicleModel', typ: r('Sku') },
			{ json: 'submodel', js: 'submodel', typ: r('Sku') },
			{ json: 'engineLocation', js: 'engineLocation', typ: r('Sku') },
			{ json: 'engineModel', js: 'engineModel', typ: r('Sku') },
			{ json: 'engineDisplacement', js: 'engineDisplacement', typ: r('ShippingWeight') },
			{ json: 'boreStroke', js: 'boreStroke', typ: r('Sku') },
			{ json: 'inductionSystem', js: 'inductionSystem', typ: r('Sku') },
			{ json: 'compressionRatio', js: 'compressionRatio', typ: r('Sku') },
			{ json: 'maximumEnginePower', js: 'maximumEnginePower', typ: r('ShippingWeight') },
			{ json: 'propulsionSystem', js: 'propulsionSystem', typ: r('Sku') },
			{ json: 'coolingSystem', js: 'coolingSystem', typ: r('Sku') },
			{ json: 'thrust', js: 'thrust', typ: r('ShippingWeight') },
			{ json: 'impellerPropeller', js: 'impellerPropeller', typ: r('Sku') },
			{ json: 'topSpeed', js: 'topSpeed', typ: r('ShippingWeight') },
			{ json: 'fuelRequirement', js: 'fuelRequirement', typ: r('Sku') },
			{ json: 'fuelSystem', js: 'fuelSystem', typ: r('Sku') },
			{ json: 'fuelCapacity', js: 'fuelCapacity', typ: r('ShippingWeight') },
			{ json: 'averageFuelConsumption', js: 'averageFuelConsumption', typ: r('ShippingWeight') },
			{ json: 'hullLength', js: 'hullLength', typ: r('ShippingWeight') },
			{ json: 'beam', js: 'beam', typ: r('ShippingWeight') },
			{ json: 'airDraft', js: 'airDraft', typ: r('ShippingWeight') },
			{ json: 'draft', js: 'draft', typ: r('ShippingWeight') },
			{ json: 'dryWeight', js: 'dryWeight', typ: r('ShippingWeight') },
			{ json: 'waterCapacity', js: 'waterCapacity', typ: r('ShippingWeight') },
			{ json: 'seatingCapacity', js: 'seatingCapacity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'assembledProductLength', js: 'assembledProductLength', typ: r('ShippingWeight') },
			{ json: 'assembledProductWidth', js: 'assembledProductWidth', typ: r('ShippingWeight') },
			{ json: 'assembledProductHeight', js: 'assembledProductHeight', typ: r('ShippingWeight') },
			{ json: 'assembledProductWeight', js: 'assembledProductWeight', typ: r('ShippingWeight') },
			{ json: 'variantGroupId', js: 'variantGroupId', typ: r('Sku') },
			{ json: 'variantAttributeNames', js: 'variantAttributeNames', typ: r('CountryOfOriginComponents') },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: r('ProcessMode') },
			{ json: 'swatchImages', js: 'swatchImages', typ: r('SwatchImages') },
			{ json: 'isProp65WarningRequired', js: 'isProp65WarningRequired', typ: r('ProcessMode') },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: r('Sku') },
			{ json: 'smallPartsWarnings', js: 'smallPartsWarnings', typ: r('SmallPartsWarnings') },
			{ json: 'hasBatteries', js: 'hasBatteries', typ: r('ProcessMode') },
			{ json: 'batteryTechnologyType', js: 'batteryTechnologyType', typ: r('ProcessMode') },
			{ json: 'hasWarranty', js: 'hasWarranty', typ: r('ProcessMode') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: r('Sku') },
			{ json: 'warrantyText', js: 'warrantyText', typ: r('Sku') },
			{ json: 'sportsLeague', js: 'sportsLeague', typ: r('Sku') },
			{ json: 'athlete', js: 'athlete', typ: r('Sku') },
			{ json: 'features', js: 'features', typ: r('FabricCareInstructions') },
			{ json: 'keywords', js: 'keywords', typ: r('Sku') },
		],
		false
	),
	WheelsAndWheelComponents: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('WheelsAndWheelComponentsProperties') },
			{ json: 'required', js: 'required', typ: a(r('AnimalAccessoriesRequired')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	WheelsAndWheelComponentsProperties: o(
		[
			{ json: 'shortDescription', js: 'shortDescription', typ: r('Sku') },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: r('FabricCareInstructions') },
			{ json: 'brand', js: 'brand', typ: r('Sku') },
			{ json: 'manufacturer', js: 'manufacturer', typ: r('Sku') },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: r('Sku') },
			{ json: 'modelNumber', js: 'modelNumber', typ: r('Sku') },
			{ json: 'multipackQuantity', js: 'multipackQuantity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'countPerPack', js: 'countPerPack', typ: r('MinimumAdvertisedPrice') },
			{ json: 'count', js: 'count', typ: r('Sku') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: r('Sku') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: r('FabricCareInstructions') },
			{ json: 'color', js: 'color', typ: r('Sku') },
			{ json: 'finish', js: 'finish', typ: r('Sku') },
			{ json: 'material', js: 'material', typ: r('Sku') },
			{ json: 'vehicleRimSize', js: 'vehicleRimSize', typ: r('ShippingWeight') },
			{ json: 'diameter', js: 'diameter', typ: r('ShippingWeight') },
			{ json: 'compatibleTireSize', js: 'compatibleTireSize', typ: r('Sku') },
			{ json: 'numberOfSpokes', js: 'numberOfSpokes', typ: r('MinimumAdvertisedPrice') },
			{ json: 'assembledProductLength', js: 'assembledProductLength', typ: r('ShippingWeight') },
			{ json: 'assembledProductWidth', js: 'assembledProductWidth', typ: r('ShippingWeight') },
			{ json: 'assembledProductHeight', js: 'assembledProductHeight', typ: r('ShippingWeight') },
			{ json: 'assembledProductWeight', js: 'assembledProductWeight', typ: r('ShippingWeight') },
			{ json: 'variantGroupId', js: 'variantGroupId', typ: r('Sku') },
			{ json: 'variantAttributeNames', js: 'variantAttributeNames', typ: r('CountryOfOriginComponents') },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: r('ProcessMode') },
			{ json: 'swatchImages', js: 'swatchImages', typ: r('SwatchImages') },
			{ json: 'isProp65WarningRequired', js: 'isProp65WarningRequired', typ: r('ProcessMode') },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: r('Sku') },
			{ json: 'batteryTechnologyType', js: 'batteryTechnologyType', typ: r('ProcessMode') },
			{ json: 'hasWarranty', js: 'hasWarranty', typ: r('ProcessMode') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: r('Sku') },
			{ json: 'warrantyText', js: 'warrantyText', typ: r('Sku') },
			{ json: 'features', js: 'features', typ: r('FabricCareInstructions') },
			{ json: 'keywords', js: 'keywords', typ: r('Sku') },
		],
		false
	),
	WatchesCategory: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'title', js: 'title', typ: '' },
			{ json: 'properties', js: 'properties', typ: r('WatchesCategoryProperties') },
			{ json: 'oneOf', js: 'oneOf', typ: a(r('OneOf')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	WatchesCategoryProperties: o([{ json: 'Watches', js: 'Watches', typ: r('Watches') }], false),
	Watches: o(
		[
			{ json: '$schema', js: '$schema', typ: '' },
			{ json: 'type', js: 'type', typ: r('ShippingWeightType') },
			{ json: 'properties', js: 'properties', typ: r('WatchesProperties') },
			{ json: 'required', js: 'required', typ: a(r('AnimalAccessoriesRequired')) },
			{ json: 'additionalProperties', js: 'additionalProperties', typ: true },
		],
		false
	),
	WatchesProperties: o(
		[
			{ json: 'shortDescription', js: 'shortDescription', typ: r('Sku') },
			{ json: 'keyFeatures', js: 'keyFeatures', typ: r('FabricCareInstructions') },
			{ json: 'brand', js: 'brand', typ: r('Sku') },
			{ json: 'manufacturer', js: 'manufacturer', typ: r('Sku') },
			{ json: 'modelNumber', js: 'modelNumber', typ: r('Sku') },
			{ json: 'manufacturerPartNumber', js: 'manufacturerPartNumber', typ: r('Sku') },
			{ json: 'multipackQuantity', js: 'multipackQuantity', typ: r('MinimumAdvertisedPrice') },
			{ json: 'countPerPack', js: 'countPerPack', typ: r('MinimumAdvertisedPrice') },
			{ json: 'count', js: 'count', typ: r('Sku') },
			{ json: 'mainImageUrl', js: 'mainImageUrl', typ: r('Sku') },
			{ json: 'productSecondaryImageURL', js: 'productSecondaryImageURL', typ: r('FabricCareInstructions') },
			{ json: 'gender', js: 'gender', typ: r('ProcessMode') },
			{ json: 'size', js: 'size', typ: r('Sku') },
			{ json: 'ageGroup', js: 'ageGroup', typ: r('CountryOfOriginComponents') },
			{ json: 'material', js: 'material', typ: r('Sku') },
			{ json: 'color', js: 'color', typ: r('Sku') },
			{ json: 'colorCategory', js: 'colorCategory', typ: r('CountryOfOriginComponents') },
			{ json: 'metal', js: 'metal', typ: r('Sku') },
			{ json: 'plating', js: 'plating', typ: r('Sku') },
			{ json: 'watchStyle', js: 'watchStyle', typ: r('Sku') },
			{ json: 'watchFeatures', js: 'watchFeatures', typ: r('FabricCareInstructions') },
			{ json: 'activity', js: 'activity', typ: r('Sku') },
			{ json: 'watchCaseShape', js: 'watchCaseShape', typ: r('Sku') },
			{ json: 'gemstone', js: 'gemstone', typ: r('Sku') },
			{ json: 'gemstoneShape', js: 'gemstoneShape', typ: r('Sku') },
			{ json: 'carats', js: 'carats', typ: r('ShippingWeight') },
			{ json: 'displayTechnology', js: 'displayTechnology', typ: r('Sku') },
			{ json: 'isWaterproof', js: 'isWaterproof', typ: r('ProcessMode') },
			{ json: 'isWeatherResistant', js: 'isWeatherResistant', typ: r('ProcessMode') },
			{ json: 'powerType', js: 'powerType', typ: r('Sku') },
			{ json: 'watchBandMaterial', js: 'watchBandMaterial', typ: r('Sku') },
			{ json: 'assembledProductLength', js: 'assembledProductLength', typ: r('ShippingWeight') },
			{ json: 'assembledProductWidth', js: 'assembledProductWidth', typ: r('ShippingWeight') },
			{ json: 'assembledProductHeight', js: 'assembledProductHeight', typ: r('ShippingWeight') },
			{ json: 'assembledProductWeight', js: 'assembledProductWeight', typ: r('ShippingWeight') },
			{ json: 'variantGroupId', js: 'variantGroupId', typ: r('Sku') },
			{ json: 'variantAttributeNames', js: 'variantAttributeNames', typ: r('CountryOfOriginComponents') },
			{ json: 'isPrimaryVariant', js: 'isPrimaryVariant', typ: r('ProcessMode') },
			{ json: 'swatchImages', js: 'swatchImages', typ: r('SwatchImages') },
			{ json: 'isProp65WarningRequired', js: 'isProp65WarningRequired', typ: r('ProcessMode') },
			{ json: 'prop65WarningText', js: 'prop65WarningText', typ: r('Sku') },
			{ json: 'smallPartsWarnings', js: 'smallPartsWarnings', typ: r('SmallPartsWarnings') },
			{ json: 'batteryTechnologyType', js: 'batteryTechnologyType', typ: r('ProcessMode') },
			{ json: 'hasWarranty', js: 'hasWarranty', typ: r('ProcessMode') },
			{ json: 'warrantyURL', js: 'warrantyURL', typ: r('Sku') },
			{ json: 'warrantyText', js: 'warrantyText', typ: r('Sku') },
			{ json: 'pattern', js: 'pattern', typ: r('Sku') },
			{ json: 'theme', js: 'theme', typ: r('Sku') },
			{ json: 'character', js: 'character', typ: r('Sku') },
			{ json: 'globalBrandLicense', js: 'globalBrandLicense', typ: r('FabricCareInstructions') },
			{ json: 'occasion', js: 'occasion', typ: r('Sku') },
			{ json: 'batteryLife', js: 'batteryLife', typ: r('ShippingWeight') },
			{ json: 'sportsLeague', js: 'sportsLeague', typ: r('Sku') },
			{ json: 'sportsTeam', js: 'sportsTeam', typ: r('Sku') },
			{ json: 'athlete', js: 'athlete', typ: r('Sku') },
			{ json: 'autographedBy', js: 'autographedBy', typ: r('Sku') },
			{ json: 'features', js: 'features', typ: r('FabricCareInstructions') },
			{ json: 'keywords', js: 'keywords', typ: r('Sku') },
		],
		false
	),
	SkuFormat: ['uri'],
	PurpleType: ['number', 'string'],
	MinimumAdvertisedPriceType: ['integer', 'number'],
	ShippingWeightRequired: ['measure', 'unit'],
	ShippingWeightType: ['object'],
	CountryOfOriginComponentsTitle: [
		'Age Group',
		'Color Category',
		'Country of Origin - Components',
		'Fire Extinguisher Classes',
		'Gift Card Category',
		'Variant Attribute Names',
		'Video Game Genre',
	],
	CountryOfOriginComponentsType: ['array'],
	ItemsRequired: ['materialName'],
	FabricContentTitle: ['Fabric Content'],
	SmallPartsWarningsTitle: ['Small Parts Warning Code'],
	SwatchImagesTitle: ['Swatch Images'],
	AnimalAccessoriesRequired: ['brand', 'mainImageUrl', 'requiresTextileActLabeling', 'shortDescription'],
	FeedDateFormat: ['date-time'],
};
