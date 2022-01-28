import axios from 'axios';
import { BaseLayout } from '../app/components/layout/BaseLayout';
import { FloatingTweetPublisher } from '../app/components/interactions/publishTweet/smartComponent/FloatingTweetPublisher';
import { getClient } from '../app/api/client/getClient';
import { getEveryonesTweets } from '../app/store/actions/tweets/getEveryonesTweets';
import { Headline } from '../app/components/typography/Headline';
import { Navigation } from '../app/components/interactions/navigation/smartComponent/Navigation';
import { Tweet } from '../app/components/entities/Tweet';
import { TweetsState } from '../app/store/slices/tweetsSlice';
import { VerticalSpace } from '../app/components/layout/VerticalSpace';
import React, { Fragment, FunctionComponent, ReactElement, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/store/typing';

const TweetsPage: FunctionComponent = function (): ReactElement {
  const apiClient = getClient(axios.create({
    // eslint-disable-next-line @typescript-eslint/naming-convention
    baseURL: 'http://localhost:4000/'
  }));

  const dispatch = useAppDispatch();
  const { allTweets } = useAppSelector((state): TweetsState => state.tweets);

  useEffect((): void => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    dispatch(getEveryonesTweets({ apiClient }));
  }, []);

  return (
    <BaseLayout
      topBar={ <Navigation /> }
      body={
        <Fragment>
          <Headline>Twööts</Headline>

          {
            allTweets.map(
              (tweet): ReactElement => (
                <VerticalSpace key={ tweet.publishedAt }>
                  <Tweet tweet={ tweet } />
                </VerticalSpace>
              )
            )
          }

          <FloatingTweetPublisher />
        </Fragment>
      }
    />
  );
};

export default TweetsPage;
