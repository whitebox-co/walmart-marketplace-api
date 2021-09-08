import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import { WalmartMarketplaceApi } from '../constants';

/**
 * Utility to Proxy any walmart api function
 *
 * For a better explanation of how this works visit the links below
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
 * https://javascript.plainenglish.io/javascript-how-to-intercept-function-and-method-calls-b9fd6507ff02
 */
const apiInterceptor = <T extends WalmartMarketplaceApi>(obj: T, fn: any) => {
	return new Proxy(obj, {
		get(target, prop) {
			if (typeof target[prop] === 'function') {
				return new Proxy(target[prop], {
					apply: (target, thisArg, argumentsList) => {
						fn(prop, argumentsList);
						return Reflect.apply(target, thisArg, argumentsList);
					},
				});
			} else {
				return Reflect.get(target, prop);
			}
		},
	});
};

/**
 * Utility to abstract request interceptor as implementation might be different for different places
 *
 * @param onFulfilled
 * @param onRejected
 * @returns {Promise} A request promise
 */
const requestInterceptor = (
	onFulfilled: (value: AxiosRequestConfig) => AxiosRequestConfig | Promise<AxiosRequestConfig>,
	onRejected: (error: any) => any
) => {
	return axios.interceptors.request.use(onFulfilled, onRejected);
};

/**
 * Utility to abstract response interceptor as implementation might be different for different places
 *
 * @param onFulfilled
 * @param onRejected
 * @returns {Promise} A request promise
 */
const responseInterceptor = (
	onFulfilled: (value: AxiosResponse<any>) => AxiosResponse<any> | Promise<AxiosResponse<any>>,
	onRejected: (error: any) => any
) => {
	axios.interceptors.response.use(onFulfilled, onRejected);
};

export { apiInterceptor, requestInterceptor, responseInterceptor };
