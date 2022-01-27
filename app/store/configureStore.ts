import { accountsSlice } from './slices/accountsSlice';
import { configureStore } from '@reduxjs/toolkit';
import { sessionsSlice } from './slices/sessionsSlice';
import { tweetsSlice } from './slices/tweetsSlice';

const store = configureStore({
  reducer: {
    accounts: accountsSlice.reducer,
    tweets: tweetsSlice.reducer,
    sessions: sessionsSlice.reducer
  }
});

export {
  store
};
