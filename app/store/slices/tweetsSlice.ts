import { createSlice } from '@reduxjs/toolkit';
import { getAccountsTweets } from '../actions/tweets/getAccountsTweets';
import { getEveryonesTweets } from '../actions/tweets/getEveryonesTweets';
import { isNotByAccount } from '../../domainModel/predicates/Tweet/isNotByAccount';
import { Tweet } from '../../domainModel/Tweet';

interface TweetsState {
  tweets: Tweet[];
}

const initialTweetsState: TweetsState = {
  tweets: []
};

/* eslint-disable no-param-reassign */
const tweetsSlice = createSlice({
  name: 'tweets',
  initialState: initialTweetsState,
  reducers: {},
  extraReducers (builder): void {
    builder.
      addCase(getAccountsTweets.fulfilled, (state, action): void => {
        const { handle } = action.meta.arg.parameters;

        state.tweets = [
          ...state.tweets.filter(isNotByAccount(handle)),
          ...action.payload
        ];
      }).
      addCase(getEveryonesTweets.fulfilled, (state, action): void => {
        state.tweets = action.payload;
      });
  }
});
/* eslint-enable no-param-reassign */

export type {
  TweetsState
};
export {
  tweetsSlice
};
