import { Account } from '../../domainModel/Account';
import { createSlice } from '@reduxjs/toolkit';
import { getAccount } from '../actions/accounts/getAccount';

interface AccountsState {
  accounts: Record<Account['handle'], Account>;
}

const initialAccountsState: AccountsState = {
  accounts: {}
};

/* eslint-disable no-param-reassign */
const accountsSlice = createSlice({
  name: 'accounts',
  initialState: initialAccountsState,
  reducers: {},
  extraReducers (builder): void {
    builder.
      addCase(getAccount.fulfilled, (state, action): void => {
        state.accounts[action.payload.handle] = action.payload;
      });
  }
});
/* eslint-enable no-param-reassign */

export type {
  AccountsState
};
export {
  accountsSlice
};
