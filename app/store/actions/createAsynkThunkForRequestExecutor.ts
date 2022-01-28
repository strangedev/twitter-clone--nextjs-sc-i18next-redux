import { ApiClient } from '../../api/client/ApiClient';
import { AsyncThunk, AsyncThunkPayloadCreator, createAsyncThunk } from '@reduxjs/toolkit';
import { ExecutorError, RequestParameters, ResponseData } from '../../api/client/RequestExecutor';

type ThunkParameters<TExecutor, TAdditionalParameters = unknown> =
  (RequestParameters<TExecutor> extends void ?
    TAdditionalParameters extends unknown ?
      unknown :
      {
        parameters: TAdditionalParameters;
      } :
    {
      parameters: (RequestParameters<TExecutor> & TAdditionalParameters);
    }
  ) & {
    apiClient: ApiClient;
  };

const createAsyncThunkForRequestExecutor = function <
  TExecutor,
  TAdditionalParameters = unknown,
  TAdditionalReturnValues = unknown,
  TParameters = ThunkParameters<TExecutor, TAdditionalParameters>,
  TReturnType = ResponseData<TExecutor> extends undefined ?
    TAdditionalReturnValues :
    (ResponseData<TExecutor> & TAdditionalReturnValues),
  TAsyncThunkConfig = { rejectValue: ExecutorError<TExecutor> }
> (typePrefix: string, payloadCreator: AsyncThunkPayloadCreator<TReturnType, TParameters, TAsyncThunkConfig>): AsyncThunk<TReturnType, TParameters, TAsyncThunkConfig> {
  return createAsyncThunk<TReturnType, TParameters, TAsyncThunkConfig>(typePrefix, payloadCreator);
};

export {
  createAsyncThunkForRequestExecutor
};

