import { createSlice } from '@reduxjs/toolkit';
import { Session } from '../../domainModel/Session';
import { startSession } from '../actions/sessions/startSession';
import { StartSessionError } from '../../api/client/calls/sessions/startSessionCommand/startSessionErrors';

interface SessionState {
  session?: Session;
  error?: StartSessionError;
}

const initialSessionState: SessionState = {};

/* eslint-disable no-param-reassign */
const sessionsSlice = createSlice({
  name: 'session',
  initialState: initialSessionState,
  reducers: {},
  extraReducers (builder): void {
    builder.
      addCase(startSession.fulfilled, (state, action): void => {
        state.session = action.payload;
        state.error = undefined;
      }).
      addCase(startSession.rejected, (state, action): void => {
        state.session = undefined;
        state.error = action.payload;
      });
  }
});
/* eslint-enable no-param-reassign */

export type {
  SessionState
};
export {
  sessionsSlice
};
