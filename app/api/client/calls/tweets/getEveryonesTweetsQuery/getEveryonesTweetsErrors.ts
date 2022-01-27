import { InternalServerError } from '../../../commonErrors/InternalServerError';
import { UnexpectedError } from '../../../commonErrors/UnexpectedError';

type GetEveryonesTweetsError = InternalServerError | UnexpectedError;

export {
  InternalServerError,
  UnexpectedError
};
export type {
  GetEveryonesTweetsError
};
