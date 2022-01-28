import { Session } from '../../domainModel/Session';
import { endSession } from '../actions/sessions/endSession';
import { startSession } from '../actions/sessions/startSession';
import { StartSessionError } from '../../api/client/calls/sessions/startSessionCommand/startSessionErrors';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SessionState {
  session?: Session;
  error?: StartSessionError;
}

const initialSessionState: SessionState = {};

/* eslint-disable no-param-reassign */
const sessionsSlice = createSlice({
  name: 'session',
  initialState: initialSessionState,
  reducers: {
    restoreSession (state, action: PayloadAction<Session>): SessionState {
      return {
        session: action.payload
      };
    }
  },
  extraReducers (builder): void {
    builder.
      addCase(startSession.fulfilled, (state, action): void => {
        state.session = action.payload;
        state.error = undefined;
      }).
      addCase(startSession.rejected, (state, action): void => {
        state.session = undefined;
        state.error = action.payload;
      }).
      addCase(endSession.fulfilled, (state): void => {
        state.session = undefined;
      });
  }
});
/* eslint-enable no-param-reassign */

const {
  restoreSession
} = sessionsSlice.actions;

export type {
  SessionState
};
export {
  restoreSession,
  sessionsSlice
};
