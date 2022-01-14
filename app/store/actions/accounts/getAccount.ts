import { ApiClient } from '../../../api/client/ApiClient';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { RequestParameters } from '../../../api/client/RequestExecutor';
import { updateAccount } from '../../slices/accountsSlice';

const getAccount = createAsyncThunk(
  'actions/accounts/getAccount',
  async ({
    apiClient,
    parameters: {
      handle
    }
  }: {
    apiClient: ApiClient;
    parameters: RequestParameters<ApiClient['accounts']['getAccount']>;
  }, { dispatch }): Promise<void> => {
    const getAccountResult = await apiClient.accounts.getAccount({ handle });
    const account = getAccountResult.unwrapOrThrow();

    dispatch(updateAccount(account));
  }
);

export {
  getAccount
};
