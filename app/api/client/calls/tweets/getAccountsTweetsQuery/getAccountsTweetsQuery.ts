import { Account } from '../../../../../domainModel/Account';
import axios from 'axios';
import { FetchClient } from '../../../FetchClient';
import { getAccountsTweetsResponseSchema } from './getAccountsTweetsResponseSchema';
import { Tweet } from '../../../../../domainModel/Tweet';
import { error, value } from 'defekt';
import { ExecutorResult, RequestExecutor } from '../../../RequestExecutor';
import { GetAccountsTweetsError, InternalServerError, UnexpectedError } from './getAccountsTweetsErrors';

type GetAccountsTweetsQueryExecutor = RequestExecutor<Pick<Account, 'handle'>, Tweet[], GetAccountsTweetsError>;

const getAccountsTweetsQuery = function (fetchClient: FetchClient): GetAccountsTweetsQueryExecutor {
  return async ({ handle }): Promise<ExecutorResult<GetAccountsTweetsQueryExecutor>> => {
    try {
      const response = await fetchClient.get(`/tweets/byAccount/${handle}`);
      const parseTweetsResult = getAccountsTweetsResponseSchema.parse(response.data);

      if (parseTweetsResult.hasError()) {
        return error(new UnexpectedError({ cause: parseTweetsResult.error }));
      }

      return value(parseTweetsResult.value);
    } catch (ex: unknown) {
      if (axios.isAxiosError(ex) && ex.response && ex.response.status === 500) {
        return error(new InternalServerError());
      }

      return error(new UnexpectedError({ cause: ex }));
    }
  };
};

export {
  getAccountsTweetsQuery
};
