import { defekt } from 'defekt';
import { InternalServerError } from '../../../commonErrors/InternalServerError';
import { UnexpectedError } from '../../../commonErrors/UnexpectedError';

class AccountNotFound extends defekt({ code: 'AccountNotFound' }) {}

type GetAccountError = AccountNotFound | InternalServerError | UnexpectedError;

export {
  AccountNotFound,
  InternalServerError,
  UnexpectedError
};
export type {
  GetAccountError
};
