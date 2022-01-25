import { getAccount } from './routes/accounts/getAccount';
import { getAccountsTweets } from './routes/tweets/getAccountsTweets';
import { getEveryonesTweets } from './routes/tweets/getEveryonesTweets';

interface ApiClient {
  accounts: {
    getAccount: ReturnType<typeof getAccount>;
  };
  tweets: {
    getEveryonesTweets: ReturnType<typeof getEveryonesTweets>;
    getAccountsTweets: ReturnType<typeof getAccountsTweets>;
  };
}

export type {
  ApiClient
};
