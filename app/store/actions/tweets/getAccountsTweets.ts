import { ApiClient } from '../../../api/client/ApiClient';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { RequestParameters } from '../../../api/client/RequestExecutor';
import { updateTweetsByAccount } from '../../slices/tweetsSlice';

const getAccountsTweets = createAsyncThunk(
  'actions/tweets/getAccountsTweets',
  async ({
    apiClient,
    parameters: {
      handle
    }
  }: {
    apiClient: ApiClient;
    parameters: RequestParameters<ApiClient['tweets']['getAccountsTweets']>;
  }, { dispatch }): Promise<void> => {
    const getAccountsTweetsResult = await apiClient.tweets.getAccountsTweets({ handle });
    const tweets = getAccountsTweetsResult.unwrapOrThrow();

    dispatch(updateTweetsByAccount({ handle, tweets }));
  }
);

export {
  getAccountsTweets
};
