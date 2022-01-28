import axios from 'axios';
import { FetchClient } from '../../../FetchClient';
import { error, value } from 'defekt';
import { ExecutorResult, RequestExecutor } from '../../../RequestExecutor';
import { InternalServerError, PublishTweetError, TextTooLong, Unauthorized, UnexpectedError } from './publishTweetErrors';
import { publishTweetRequestSchema, PublishTweetRequestSchema } from './publishTweetRequestSchema';
import { withBearerToken, WithBearerToken } from '../../../../helpers/withBearerToken';

type PublishTweetCommandExecutor =
  RequestExecutor<WithBearerToken<PublishTweetRequestSchema>, undefined, PublishTweetError>;

const publishTweetCommand = function (fetchClient: FetchClient): PublishTweetCommandExecutor {
  return async ({
    text,
    token
  }): Promise<ExecutorResult<PublishTweetCommandExecutor>> => {
    try {
      if (text.length > 240) {
        return error(new TextTooLong({
          data: { text }
        }));
      }

      const payload = publishTweetRequestSchema.
        parse({ text }).
        unwrapOrThrow();

      console.log(withBearerToken(token));

      await fetchClient.post(
        'tweets/publish',
        payload,
        withBearerToken(token)
      );

      return value();
    } catch (ex: unknown) {
      if (axios.isAxiosError(ex) && ex.response) {
        if (ex.response.status === 500) {
          return error(new InternalServerError());
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
  publishTweetCommand
};
