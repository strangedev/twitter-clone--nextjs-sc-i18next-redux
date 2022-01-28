import { ApiClient } from '../../../api/client/ApiClient';
import { createAsyncThunkForRequestExecutor } from '../createAsynkThunkForRequestExecutor';

const getEveryonesTweets = createAsyncThunkForRequestExecutor<ApiClient['tweets']['getEveryonesTweets']>(
  'actions/tweets/getEveryonesTweets',
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  async ({
    apiClient
  }, {
    rejectWithValue
  }) => {
    const getEveryonesTweetsResults = await apiClient.tweets.getEveryonesTweets();

    if (getEveryonesTweetsResults.hasError()) {
      return rejectWithValue(getEveryonesTweetsResults.error);
    }

    return getEveryonesTweetsResults.value;
  }
);

export {
  getEveryonesTweets
};
