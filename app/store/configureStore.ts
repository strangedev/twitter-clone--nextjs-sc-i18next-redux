import { accountsSlice } from './slices/accountsSlice';
import { configureStore } from '@reduxjs/toolkit';
import { sessionSlice } from './slices/sessionSlice';
import { tweetsSlice } from './slices/tweetsSlice';

const store = configureStore({
  reducer: {
    accounts: accountsSlice.reducer,
    tweets: tweetsSlice.reducer,
    session: sessionSlice.reducer
  }
});

export {
  store
};
