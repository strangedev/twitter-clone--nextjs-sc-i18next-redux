import { Account } from '../../../../../domainModel/Account';
import axios from 'axios';
import { FetchClient } from '../../../FetchClient';
import { getAccountResponseSchema } from './getAccountResponseSchema';
import { AccountNotFound, GetAccountError, InternalServerError, UnexpectedError } from './getAccountErrors';
import { error, value } from 'defekt';
import { ExecutorResult, RequestExecutor } from '../../../RequestExecutor';

type GetAccountQueryExecutor = RequestExecutor<Pick<Account, 'handle'>, Account, GetAccountError>;

const getAccountQuery = function (fetchClient: FetchClient): GetAccountQueryExecutor {
  return async ({ handle }): Promise<ExecutorResult<GetAccountQueryExecutor>> => {
    try {
      const response = await fetchClient.get(`/accounts/${handle}`);
      const parseAccountResult = getAccountResponseSchema.parse(response.data);

      if (parseAccountResult.hasError()) {
        return error(new UnexpectedError({ cause: parseAccountResult.error }));
      }

      return value(parseAccountResult.value);
    } catch (ex: unknown) {
      if (axios.isAxiosError(ex)) {
        if (ex.response && ex.response.status === 404) {
          return error(new AccountNotFound());
        }

        if (ex.response && ex.response.status === 500) {
          return error(new InternalServerError());
        }
      }

      return error(new UnexpectedError({ cause: ex }));
    }
  };
};

export type {
  GetAccountError
};
export {
  getAccountQuery
};
