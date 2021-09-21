import { defaultParams } from '../index';

/**
 * Request helper to help with pagination for endpoints that implement the `nextCursor` functionality.
 *
 * Will recursively request the endpoint until the nextCursor is null and will then return a concatenated array of
 * requested data.
 *
 * @param {T} api The INSTANCE of an api (ex. ordersApi, inventoryApi, etc)
 * @param {string} methodName The name of the instanced method to use for request (ex. ordersApi.getAllOrders.name)
 * @param {object} requestParams The request parameters for the type of API.
 * @param {string} nextCursor Data returned from previous response to handle requesting next pagination records -       Optional and should be null for first call.
 *
 * Note: Please use with caution. It is possible for this to be long running and quickly consume your request
 * rate limits!
 *
 * @returns {Promise<T[]>} Array of data based on the endpoint requested
 */
const getAllRecursively = async <T>(
	api: T,
	methodName: string,
	requestParams = { limit: '100' },
	nextCursor?: string
): Promise<T[]> => {
	// parse out cursor params
	const nextCursorUrlParams = new URLSearchParams(nextCursor);

	// convert to array for library usage
	const query = {};
	for (const [key, value] of nextCursorUrlParams.entries()) {
		query[key] = value;
	}

	const options = nextCursor && {
		query,
	};

	// request data with cursor options if any
	const ordersResponse = await api[methodName](
		{
			...defaultParams,
			...requestParams,
		},
		options
	);

	//  recursively get new data
	const { meta, elements } = ordersResponse.data.list;
	let data = [...elements.order];

	if (meta.nextCursor) {
		const recursiveData = await getAllRecursively(api, methodName, requestParams, meta.nextCursor);
		data = [...data, ...recursiveData];
	}

	// return only data and no other response props
	return data;
};

export { getAllRecursively };
