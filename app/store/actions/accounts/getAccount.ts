import { ApiClient } from '../../../api/client/ApiClient';
import { createAsyncThunkForRequestExecutor } from '../createAsynkThunkForRequestExecutor';

const getAccount = createAsyncThunkForRequestExecutor<ApiClient['accounts']['getAccount']>(
  'actions/accounts/getAccount',
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  async ({
    apiClient,
    parameters: {
      handle
    }
  }, {
    rejectWithValue
  }) => {
    const getAccountResult = await apiClient.accounts.getAccount({ handle });

    if (getAccountResult.hasError()) {
      return rejectWithValue(getAccountResult.error);
    }

    return getAccountResult.value;
  }
);

export {
  getAccount
};
