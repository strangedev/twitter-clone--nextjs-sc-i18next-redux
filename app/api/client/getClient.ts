import { ApiClient } from './ApiClient';
import { FetchClient } from './FetchClient';
import { getAccountQuery } from './calls/accounts/getAccountQuery/getAccountQuery';
import { getAccountsTweetsQuery } from './calls/tweets/getAccountsTweetsQuery/getAccountsTweetsQuery';
import { getEveryonesTweetsQuery } from './calls/tweets/getEveryonesTweetsQuery/getEveryonesTweetsQuery';
import { publishTweetCommand } from './calls/tweets/publishTweetCommand/publishTweetCommand';
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
      getAccountsTweets: getAccountsTweetsQuery(fetchClient),
      getEveryonesTweets: getEveryonesTweetsQuery(fetchClient),
      publishTweet: publishTweetCommand(fetchClient)
    }
  };
};

export {
  getClient
};
