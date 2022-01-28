import { getAccountQuery } from './calls/accounts/getAccountQuery/getAccountQuery';
import { getAccountsTweetsQuery } from './calls/tweets/getAccountsTweetsQuery/getAccountsTweetsQuery';
import { getEveryonesTweetsQuery } from './calls/tweets/getEveryonesTweetsQuery/getEveryonesTweetsQuery';
import { publishTweetCommand } from './calls/tweets/publishTweetCommand/publishTweetCommand';
import { startSessionCommand } from './calls/sessions/startSessionCommand/startSessionCommand';

interface ApiClient {
  accounts: {
    getAccount: ReturnType<typeof getAccountQuery>;
  };
  sessions: {
    startSession: ReturnType<typeof startSessionCommand>;
  };
  tweets: {
    getAccountsTweets: ReturnType<typeof getAccountsTweetsQuery>;
    getEveryonesTweets: ReturnType<typeof getEveryonesTweetsQuery>;
    publishTweet: ReturnType<typeof publishTweetCommand>;
  };
}

export type {
  ApiClient
};
