import { ApiClient } from '../../../api/client/ApiClient';
import { createAsyncThunkForRequestExecutor } from '../createAsynkThunkForRequestExecutor';
import { getEveryonesTweets } from './getEveryonesTweets';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const publishTweet = createAsyncThunkForRequestExecutor<ApiClient['tweets']['publishTweet']>('actions/tweets/publishTweet', async ({
  apiClient,
  parameters
}, {
  dispatch,
  rejectWithValue
}) => {
  const publishTweetResult = await apiClient.tweets.publishTweet(parameters);

  if (publishTweetResult.hasError()) {
    return rejectWithValue(publishTweetResult.error);
  }

  await dispatch(getEveryonesTweets({ apiClient }));

  return publishTweetResult.value;
});

export {
  publishTweet
};
