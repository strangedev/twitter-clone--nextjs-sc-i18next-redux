import { Result } from 'defekt';

type RequestExecutor<TParameters, TResponseData, TError extends Error> =
  (parameters: TParameters) => Promise<Result<TResponseData, TError>>;

type RequestParameters<TRequestExecutor> =
  TRequestExecutor extends RequestExecutor<infer TParameters, any, any> ?
    TParameters :
    never;

type ResponseData<TRequestExecutor> =
  TRequestExecutor extends RequestExecutor<any, infer TResponseData, any> ?
    TResponseData :
    never;

type ExecutorError<TRequestExecutor> =
  TRequestExecutor extends RequestExecutor<any, any, infer TError> ?
    TError :
    never;

type ExecutorResult<TRequestExecutor> =
  Result<ResponseData<TRequestExecutor>, ExecutorError<TRequestExecutor>>;

export type {
  ExecutorError,
  ExecutorResult,
  ResponseData,
  RequestParameters,
  RequestExecutor
};
