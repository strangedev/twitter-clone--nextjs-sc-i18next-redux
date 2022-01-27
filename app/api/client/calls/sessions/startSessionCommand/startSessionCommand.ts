import axios from 'axios';
import { FetchClient } from '../../../FetchClient';
import { Session } from '../../../../../domainModel/Session';
import { startSessionResponseSchema } from './startSessionResponseSchema';
import { AccountNotFound, InternalServerError, StartSessionError, Unauthorized, UnexpectedError } from './startSessionErrors';
import { error, value } from 'defekt';
import { ExecutorResult, RequestExecutor } from '../../../RequestExecutor';
import { startSessionRequestSchema, StartSessionRequestSchema } from './startSessionRequestSchema';

type StartSessionCommandExecutor =
  RequestExecutor<StartSessionRequestSchema, Session, StartSessionError>;

const startSessionCommand = function (fetchClient: FetchClient): StartSessionCommandExecutor {
  return async ({
    handle,
    password
  }): Promise<ExecutorResult<StartSessionCommandExecutor>> => {
    try {
      const payload = startSessionRequestSchema.
        parse({ handle, password }).
        unwrapOrThrow();
      const response = await fetchClient.post('sessions/start', payload);
      const parseSessionResult = startSessionResponseSchema.parse(response.data);

      if (parseSessionResult.hasError()) {
        return error(new UnexpectedError({
          cause: parseSessionResult.error
        }));
      }

      return value(parseSessionResult.value);
    } catch (ex: unknown) {
      if (axios.isAxiosError(ex) && ex.response) {
        if (ex.response.status === 500) {
          return error(new InternalServerError());
        }
        if (ex.response.status === 404) {
          return error(new AccountNotFound());
        }
        if (ex.response.status === 401) {
          return error(new Unauthorized());
        }
      }

      return error(new UnexpectedError({ cause: ex }));
    }
  };
};

export {
  startSessionCommand
};
