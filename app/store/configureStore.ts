import { accountsSlice } from './slices/accountsSlice';
import { configureStore } from '@reduxjs/toolkit';
import { tweetsSlice } from './slices/tweetsSlice';

const store = configureStore({
  reducer: {
    accounts: accountsSlice.reducer,
    tweets: tweetsSlice.reducer
  }
});

export {
  store
};
