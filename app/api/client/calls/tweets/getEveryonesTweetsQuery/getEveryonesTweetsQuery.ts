import axios from 'axios';
import { FetchClient } from '../../../FetchClient';
import { getEveryonesTweetsResponseSchema } from './getEveryonesTweetsResponseSchema';
import { Tweet } from '../../../../../domainModel/Tweet';
import { error, value } from 'defekt';
import { ExecutorResult, RequestExecutor } from '../../../RequestExecutor';
import { GetEveryonesTweetsError, InternalServerError, UnexpectedError } from './getEveryonesTweetsErrors';

type GetEveryonesTweetsQueryExecutor = RequestExecutor<undefined, Tweet[], GetEveryonesTweetsError>;

const getEveryonesTweetsQuery = function (fetchClient: FetchClient): GetEveryonesTweetsQueryExecutor {
  return async (): Promise<ExecutorResult<GetEveryonesTweetsQueryExecutor>> => {
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
  getEveryonesTweetsQuery
};
