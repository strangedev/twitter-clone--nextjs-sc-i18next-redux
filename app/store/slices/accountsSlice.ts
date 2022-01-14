import { Account } from '../../domainModel/Account';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AccountsState {
  accounts: Record<Account['handle'], Account>;
}

const initialAccountsState: AccountsState = {
  accounts: {}
};

const accountsSlice = createSlice({
  name: 'accounts',
  initialState: initialAccountsState,
  reducers: {
    updateAccount (state, { payload }: PayloadAction<Account>): AccountsState {
      return {
        ...state,
        accounts: {
          ...state.accounts,
          [payload.handle]: payload
        }
      };
    }
  }
});

const {
  updateAccount
} = accountsSlice.actions;

export type {
  AccountsState
};
export {
  accountsSlice,
  updateAccount
};
