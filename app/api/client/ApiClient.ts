import { Account } from '../../domainModel/Account';
import { GetAccountError } from './routes/accounts/getAccount';
import { GetEveryonesTweetsError } from './routes/tweets/getEveryonesTweets';
import { RequestExecutor } from './RequestExecutor';
import { Tweet } from '../../domainModel/Tweet';

interface ApiClient {
  accounts: {
    getAccount: RequestExecutor<Pick<Account, 'handle'>, Account, GetAccountError>;
  };
  tweets: {
    getEveryonesTweets: RequestExecutor<undefined, Tweet[], GetEveryonesTweetsError>;
  };
}

export type {
  ApiClient
};
