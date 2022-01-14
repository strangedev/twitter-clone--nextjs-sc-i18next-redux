import { FetchClient } from './FetchClient';
import { RequestExecutor } from './RequestExecutor';

type RequestExecutorFactory<TRequest, TResponseData, TError extends Error> = (fetchClient: FetchClient) => RequestExecutor<TRequest, TResponseData, TError>;

export type {
  RequestExecutorFactory
};
