import { Account } from '../../../../domainModel/Account';
import axios from 'axios';
import { FetchClient } from '../../FetchClient';
import { getAccountResponseSchema } from '../../../schema/accounts/getAccountResponseSchema';
import { InternalServerError } from '../../../error/InternalServerError';
import { RequestExecutor } from '../../RequestExecutor';
import { UnexpectedError } from '../../../error/UnexpectedError';
import { defekt, error, Result, value } from 'defekt';

class AccountNotFound extends defekt({ code: 'AccountNotFound' }) {}

type GetAccountError = AccountNotFound | InternalServerError | UnexpectedError;

const getAccount = function (fetchClient: FetchClient): RequestExecutor<Pick<Account, 'handle'>, Account, GetAccountError> {
  return async ({ handle }): Promise<Result<Account, GetAccountError>> => {
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
  getAccount
};
