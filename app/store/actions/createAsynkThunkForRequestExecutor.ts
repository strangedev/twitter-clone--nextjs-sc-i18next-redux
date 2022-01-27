import { ApiClient } from '../../api/client/ApiClient';
import { AsyncThunk, AsyncThunkPayloadCreator, createAsyncThunk } from '@reduxjs/toolkit';
import { ExecutorError, RequestParameters, ResponseData } from '../../api/client/RequestExecutor';

interface ThunkParameters<TExecutor> {
  apiClient: ApiClient;
  parameters: RequestParameters<TExecutor>
}

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

