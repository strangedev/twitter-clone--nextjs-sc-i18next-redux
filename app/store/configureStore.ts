import { accountsSlice } from './slices/accountsSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    accounts: accountsSlice.reducer
  }
});

export {
  store
};
