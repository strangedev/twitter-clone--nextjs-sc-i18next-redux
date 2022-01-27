import { Session } from '../../domainModel/Session';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SessionState {
  session?: Session;
}

const initialSessionState: SessionState = {};

const sessionSlice = createSlice({
  name: 'session',
  initialState: initialSessionState,
  reducers: {
    updateSession (state, { payload }: PayloadAction<Session>): SessionState {
      return {
        session: payload
      };
    }
  }
});

const {
  updateSession
} = sessionSlice.actions;

export type {
  SessionState
};
export {
  sessionSlice,
  updateSession
};
