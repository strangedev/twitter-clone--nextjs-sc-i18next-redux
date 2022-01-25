import { Account } from '../../domainModel/Account';
import { Tweet } from '../../domainModel/Tweet';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TweetsState {
  tweetsByAccount: Record<Account['handle'], Tweet[] | undefined>;
  allTweets: Tweet[];
}

const initialTweetsState: TweetsState = {
  tweetsByAccount: {},
  allTweets: []
};

const tweetsSlice = createSlice({
  name: 'tweets',
  initialState: initialTweetsState,
  reducers: {
    updateTweetsByAccount (state, { payload }: PayloadAction<{ handle: Account['handle']; tweets: Tweet[] }>): TweetsState {
      return {
        ...state,
        tweetsByAccount: {
          ...state.tweetsByAccount,
          [payload.handle]: payload.tweets
        }
      };
    }
  }
});

const {
  updateTweetsByAccount
} = tweetsSlice.actions;

export type {
  TweetsState
};
export {
  tweetsSlice,
  updateTweetsByAccount
};
