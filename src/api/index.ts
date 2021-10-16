import axios, { AxiosResponse } from 'axios';

import { ListType, RequestConfigType } from 'types/requests.interface';
import { ApiConfig } from 'api/APIConfig';

const instance = axios.create({
  baseURL: ApiConfig.baseURL,
  timeout: ApiConfig.timeout,
});

const responseBody = (response: AxiosResponse) => response.data;

export const requestsTypes = {
  get: (url: string) => instance.get(url).then(responseBody),
  // post, put, delete, .. can be added here
};

export const requestCreator = (config: RequestConfigType) => {
  const { method, url } = config;

  return (): Promise<Array<ListType>> => requestsTypes[method](url);
};
