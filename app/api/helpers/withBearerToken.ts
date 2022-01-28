import { AxiosRequestConfig } from 'axios';

const withBearerToken = function (token: string, config?: AxiosRequestConfig): AxiosRequestConfig {
  return {
    ...config,
    headers: {
      ...config?.headers,
      Authorization: `Bearer ${token}`
    }
  };
};

type WithBearerToken<TRequestExecutorParameters> = {
  token: string;
} & TRequestExecutorParameters;

export type {
  WithBearerToken
};
export {
  withBearerToken
};
