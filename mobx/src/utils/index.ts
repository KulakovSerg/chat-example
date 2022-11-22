import { ERROR_MEESSAGES } from './const';
import type { JSONObject } from './types';

export function formatLeadingZero(num: number) {
  return `${num < 10 ? '0' : ''}${num}`;
}

export function formatTime(isoString: string) {
  const date = new Date(Date.parse(isoString));
  return `${formatLeadingZero(date.getHours())}:${formatLeadingZero(date.getMinutes())}`;
}

export function makeDelayedPromise<T>(callback: () => T, delay: number): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(callback());
    }, delay);
  });
}

export function makeCancelablePromise<T>(
  promise: Promise<T>,
  abortController: AbortController,
): Promise<T> {
  return new Promise((resolve, reject) => {
    const { signal } = abortController;
    // TODO pass signal to promise fetch() instean listener
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const abortHandler = () => {
      signal.removeEventListener('abort', abortHandler);
      reject(new Error(ERROR_MEESSAGES.ABORTED));
    };
    return promise.then(resolve).catch(reject);
  });
}

export function stringifyKeyParams(params: JSONObject): string {
  return params ? JSON.stringify(params) : '';
}

export function makeCachedRequest<P, R, O>(
  method: (params: P, options: O) => Promise<R>,
  expirationTime: number,
  cache: {
    [key: string]: {
      time: number;
      data: R;
    };
  },
): (params: P, options: O) => Promise<R> {
  return async (params, options) => {
    const key = stringifyKeyParams(params as JSONObject);
    if (cache[key]) {
      const { time, data } = cache[key];
      const now = new Date().getTime();
      if (data && expirationTime + time > now) {
        return data;
      }
    }
    const data = await method(params, options);
    cache[key] = {
      time: new Date().getTime(),
      data,
    };
    return data;
  };
}

export function makeCachedObjectRequest<ID, R, O>(
  method: (params: ID[], options: O) => Promise<R>,
  expirationTime: number,
  cache: {
    [key: string]: {
      time: number;
      data: R;
    };
  },
): (params: ID[], options: O) => Promise<R> {
  // TODO realzation: ability to cache in Map<ID, JSONObject> with expiration
  return (params, options) => method(params, options);
}
