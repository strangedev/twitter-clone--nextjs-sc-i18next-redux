import { defekt } from 'defekt';
import { InternalServerError } from '../../../commonErrors/InternalServerError';
import { Unauthorized } from '../../../commonErrors/Unauthorized';
import { UnexpectedError } from '../../../commonErrors/UnexpectedError';

class AccountNotFound extends defekt({ code: 'AccountNotFound' }) {}

type StartSessionError =
  | AccountNotFound
  | Unauthorized
  | InternalServerError
  | UnexpectedError;

export {
  AccountNotFound,
  Unauthorized,
  InternalServerError,
  UnexpectedError
};
export type {
  StartSessionError
};
