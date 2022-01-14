import { Result } from 'defekt';

type RequestExecutor<TParameters, TResponseData, TError extends Error> = (parameters: TParameters) => Promise<Result<TResponseData, TError>>;

type RequestParameters<TRequestExecutor> = TRequestExecutor extends RequestExecutor<infer TParameters, any, any> ? TParameters : never;
type ResponseData<TRequestExecutor> = TRequestExecutor extends RequestExecutor<any, infer TResponseData, any> ? TResponseData : never;

export type {
  ResponseData,
  RequestParameters,
  RequestExecutor
};
