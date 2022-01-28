import { createAsyncThunk } from '@reduxjs/toolkit';
import { deleteSessionFromLocalStorage } from '../../adapters/localstorage/session';

const endSession = createAsyncThunk(
  'actions/sessions/endSession',
  (): void => {
    deleteSessionFromLocalStorage();
  }
);

export {
  endSession
};
