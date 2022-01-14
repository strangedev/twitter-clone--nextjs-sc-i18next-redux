import axios from 'axios';
import { FetchClient } from '../../FetchClient';
import { getEveryonesTweetsResponseSchema } from '../../../schema/tweets/getEveryonesTweetsResponseSchema';
import { InternalServerError } from '../../../error/InternalServerError';
import { RequestExecutor } from '../../RequestExecutor';
import { Tweet } from '../../../../domainModel/Tweet';
import { UnexpectedError } from '../../../error/UnexpectedError';
import { error, Result, value } from 'defekt';

type GetEveryonesTweetsError = InternalServerError | UnexpectedError;

const getEveryonesTweets = function (fetchClient: FetchClient): RequestExecutor<undefined, Tweet[], GetEveryonesTweetsError> {
  return async (): Promise<Result<Tweet[], GetEveryonesTweetsError>> => {
    try {
      const response = await fetchClient.get(`/tweets/everyone`);
      const parseTweetsResult = getEveryonesTweetsResponseSchema.parse(response.data);

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
  GetEveryonesTweetsError
};
export {
  getEveryonesTweets
};
