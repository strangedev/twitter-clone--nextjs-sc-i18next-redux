import { ApiClient } from '../../api/client/ApiClient';
import { AsyncThunk, AsyncThunkPayloadCreator, createAsyncThunk } from '@reduxjs/toolkit';
import { ExecutorError, RequestParameters, ResponseData } from '../../api/client/RequestExecutor';

type ThunkParameters<TExecutor> =
  (RequestParameters<TExecutor> extends undefined ?
    unknown :
    {
      parameters: RequestParameters<TExecutor>;
    }
  ) & {
    apiClient: ApiClient;
  };

const createAsyncThunkForRequestExecutor = function <
  TExecutor,
  TParameters = ThunkParameters<TExecutor>,
  TReturnType = ResponseData<TExecutor>,
  TAsyncThunkConfig = { rejectValue: ExecutorError<TExecutor> }
> (typePrefix: string, payloadCreator: AsyncThunkPayloadCreator<TReturnType, TParameters, TAsyncThunkConfig>): AsyncThunk<TReturnType, TParameters, TAsyncThunkConfig> {
  return createAsyncThunk<TReturnType, TParameters, TAsyncThunkConfig>(typePrefix, payloadCreator);
};

export {
  createAsyncThunkForRequestExecutor
};

