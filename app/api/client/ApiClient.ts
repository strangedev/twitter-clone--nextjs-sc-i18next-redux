import { getAccountQuery } from './calls/accounts/getAccountQuery/getAccountQuery';
import { getAccountsTweetsQuery } from './calls/tweets/getAccountsTweetsQuery/getAccountsTweetsQuery';
import { getEveryonesTweetsQuery } from './calls/tweets/getEveryonesTweetsQuery/getEveryonesTweetsQuery';
import { startSessionCommand } from './calls/sessions/startSessionCommand/startSessionCommand';

interface ApiClient {
  accounts: {
    getAccount: ReturnType<typeof getAccountQuery>;
  };
  sessions: {
    startSession: ReturnType<typeof startSessionCommand>;
  };
  tweets: {
    getEveryonesTweets: ReturnType<typeof getEveryonesTweetsQuery>;
    getAccountsTweets: ReturnType<typeof getAccountsTweetsQuery>;
  };
}

export type {
  ApiClient
};
