import { Account } from '../../../../domainModel/Account';
import axios from 'axios';
import { FetchClient } from '../../FetchClient';
import { getAccountsTweetsResponseSchema } from '../../../schema/tweets/getAccountsTweetsResponseSchema';
import { InternalServerError } from '../../../error/InternalServerError';
import { RequestExecutor } from '../../RequestExecutor';
import { Tweet } from '../../../../domainModel/Tweet';
import { UnexpectedError } from '../../../error/UnexpectedError';
import { error, Result, value } from 'defekt';

type GetAccountsTweetsError = InternalServerError | UnexpectedError;

const getAccountsTweets = function (fetchClient: FetchClient): RequestExecutor<Pick<Account, 'handle'>, Tweet[], GetAccountsTweetsError> {
  return async ({ handle }): Promise<Result<Tweet[], GetAccountsTweetsError>> => {
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

export type {
  GetAccountsTweetsError
};
export {
  getAccountsTweets
};
