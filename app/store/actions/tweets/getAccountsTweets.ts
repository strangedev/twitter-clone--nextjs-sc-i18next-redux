import { ApiClient } from '../../../api/client/ApiClient';
import { createAsyncThunkForRequestExecutor } from '../createAsynkThunkForRequestExecutor';

const getAccountsTweets = createAsyncThunkForRequestExecutor<ApiClient['tweets']['getAccountsTweets']>(
  'actions/tweets/getAccountsTweets',
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  async ({
    apiClient,
    parameters
  }, {
    rejectWithValue
  }) => {
    const getAccountsTweetsResult = await apiClient.tweets.getAccountsTweets(parameters);

    if (getAccountsTweetsResult.hasError()) {
      return rejectWithValue(getAccountsTweetsResult.error);
    }

    return getAccountsTweetsResult.value;
  }
);

export {
  getAccountsTweets
};
