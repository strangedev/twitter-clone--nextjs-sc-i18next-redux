import { ApiClient } from '../../../api/client/ApiClient';
import { createAsyncThunkForRequestExecutor } from '../createAsynkThunkForRequestExecutor';
import { storeSessionInLocalStorage } from '../../adapters/localstorage/session';

const startSession = createAsyncThunkForRequestExecutor<ApiClient['sessions']['startSession']>(
  'actions/sessions/startSession',
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  async ({
    apiClient,
    parameters
  }, {
    rejectWithValue
  }) => {
    const startSessionResult = await apiClient.sessions.startSession(parameters);

    if (startSessionResult.hasError()) {
      return rejectWithValue(startSessionResult.error);
    }

    const session = startSessionResult.value;

    storeSessionInLocalStorage(session);

    return session;
  }
);

export {
  startSession
};
