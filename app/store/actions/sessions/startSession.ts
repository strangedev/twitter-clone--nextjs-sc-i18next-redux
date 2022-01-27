import { ApiClient } from '../../../api/client/ApiClient';
import { createAsyncThunkForRequestExecutor } from '../createAsynkThunkForRequestExecutor';

const startSession = createAsyncThunkForRequestExecutor<ApiClient['sessions']['startSession']>(
  'actions/sessions/startSession',
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  async ({
    apiClient,
    parameters
  }, {
    rejectWithValue
  }) => {
    const startSessionResult = await apiClient.sessions.startSession({
      handle: parameters.handle,
      password: parameters.password
    });

    if (startSessionResult.hasError()) {
      return rejectWithValue(startSessionResult.error);
    }

    return startSessionResult.value;
  }
);

export {
  startSession
};
