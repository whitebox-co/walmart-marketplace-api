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

export { apiInterceptor };
