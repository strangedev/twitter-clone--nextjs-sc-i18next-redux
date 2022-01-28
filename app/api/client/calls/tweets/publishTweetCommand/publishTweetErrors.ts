import { defekt } from 'defekt';
import { InternalServerError } from '../../../commonErrors/InternalServerError';
import { Unauthorized } from '../../../commonErrors/Unauthorized';
import { UnexpectedError } from '../../../commonErrors/UnexpectedError';

class TextTooLong extends defekt({ code: 'TextTooLong' }) {}

type PublishTweetError = TextTooLong | Unauthorized | InternalServerError | UnexpectedError;

export {
  InternalServerError,
  TextTooLong,
  Unauthorized,
  UnexpectedError
};
export type {
  PublishTweetError
};
