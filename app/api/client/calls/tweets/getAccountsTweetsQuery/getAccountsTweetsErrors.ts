import { InternalServerError } from '../../../commonErrors/InternalServerError';
import { UnexpectedError } from '../../../commonErrors/UnexpectedError';

type GetAccountsTweetsError = InternalServerError | UnexpectedError;

export {
  InternalServerError,
  UnexpectedError
};
export type {
  GetAccountsTweetsError
};
