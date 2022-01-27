import { getAccountQuery } from './routes/accounts/getAccounts/getAccountQuery';
import { getAccountsTweetsQuery } from './routes/tweets/getAccountsTweetsQuery/getAccountsTweetsQuery';
import { getEveryonesTweetsQuery } from './routes/tweets/getEveryonesTweetsQuery/getEveryonesTweetsQuery';

interface ApiClient {
  accounts: {
    getAccount: ReturnType<typeof getAccountQuery>;
  };
  tweets: {
    getEveryonesTweets: ReturnType<typeof getEveryonesTweetsQuery>;
    getAccountsTweets: ReturnType<typeof getAccountsTweetsQuery>;
  };
}

export type {
  ApiClient
};
