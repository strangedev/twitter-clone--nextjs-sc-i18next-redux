import { Session } from '../../domainModel/Session';
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
    },
    endSession (): SessionState {
      return {};
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
      });
  }
});
/* eslint-enable no-param-reassign */

const {
  endSession,
  restoreSession
} = sessionsSlice.actions;

export type {
  SessionState
};
export {
  endSession,
  restoreSession,
  sessionsSlice
};
