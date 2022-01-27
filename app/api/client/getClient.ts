import { ApiClient } from './ApiClient';
import { FetchClient } from './FetchClient';
import { getAccountQuery } from './calls/accounts/getAccountQuery/getAccountQuery';
import { getAccountsTweetsQuery } from './calls/tweets/getAccountsTweetsQuery/getAccountsTweetsQuery';
import { getEveryonesTweetsQuery } from './calls/tweets/getEveryonesTweetsQuery/getEveryonesTweetsQuery';
import { startSessionCommand } from './calls/sessions/startSessionCommand/startSessionCommand';

const getClient = function (fetchClient: FetchClient): ApiClient {
  return {
    accounts: {
      getAccount: getAccountQuery(fetchClient)
    },
    sessions: {
      startSession: startSessionCommand(fetchClient)
    },
    tweets: {
      getEveryonesTweets: getEveryonesTweetsQuery(fetchClient),
      getAccountsTweets: getAccountsTweetsQuery(fetchClient)
    }
  };
};

export {
  getClient
};
