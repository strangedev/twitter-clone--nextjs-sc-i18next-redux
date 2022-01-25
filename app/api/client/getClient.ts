import { ApiClient } from './ApiClient';
import { FetchClient } from './FetchClient';
import { getAccount } from './routes/accounts/getAccount';
import { getAccountsTweets } from './routes/tweets/getAccountsTweets';
import { getEveryonesTweets } from './routes/tweets/getEveryonesTweets';

const getClient = function (fetchClient: FetchClient): ApiClient {
  return {
    accounts: {
      getAccount: getAccount(fetchClient)
    },
    tweets: {
      getEveryonesTweets: getEveryonesTweets(fetchClient),
      getAccountsTweets: getAccountsTweets(fetchClient)
    }
  };
};

export {
  getClient
};
