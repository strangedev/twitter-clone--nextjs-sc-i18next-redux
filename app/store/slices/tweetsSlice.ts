import { Account } from '../../domainModel/Account';
import { createSlice } from '@reduxjs/toolkit';
import { getAccountsTweets } from '../actions/tweets/getAccountsTweets';
import { Tweet } from '../../domainModel/Tweet';

interface TweetsState {
  tweetsByAccount: Record<Account['handle'], Tweet[] | undefined>;
  allTweets: Tweet[];
}

const initialTweetsState: TweetsState = {
  tweetsByAccount: {},
  allTweets: []
};

/* eslint-disable no-param-reassign */
const tweetsSlice = createSlice({
  name: 'tweets',
  initialState: initialTweetsState,
  reducers: {},
  extraReducers (builder): void {
    builder.
      addCase(getAccountsTweets.fulfilled, (state, action): void => {
        state.tweetsByAccount[action.meta.arg.parameters.handle] = action.payload;
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
