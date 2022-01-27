import { Account } from '../../app/components/entities/Account';
import { Account as AccountModel } from '../../app/domainModel/Account';
import { AccountsState } from '../../app/store/slices/accountsSlice';
import axios from 'axios';
import { BaseLayout } from '../../app/components/layout/BaseLayout';
import { FloatingTweetPublisher } from '../../app/components/interactions/publishTweet/smartComponent/FloatingTweetPublisher';
import { getAccount } from '../../app/store/actions/accounts/getAccount';
import { getAccountsTweets } from '../../app/store/actions/tweets/getAccountsTweets';
import { getClient } from '../../app/api/client/getClient';
import { Headline } from '../../app/components/typography/Headline';
import { Tweet } from '../../app/components/entities/Tweet';
import { Tweet as TweetModel } from '../../app/domainModel/Tweet';
import { TweetsState } from '../../app/store/slices/tweetsSlice';
import { useRouter } from 'next/router';
import { VerticalSpace } from '../../app/components/layout/VerticalSpace';
import React, { Fragment, FunctionComponent, ReactElement, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/store/typing';

const AccountPage: FunctionComponent = function (): ReactElement {
  const apiClient = getClient(axios.create({
    // eslint-disable-next-line @typescript-eslint/naming-convention
    baseURL: 'http://localhost:4000/'
  }));

  const router = useRouter();
  const { handle } = router.query;
  const dispatch = useAppDispatch();
  const { accounts } = useAppSelector((state): AccountsState => state.accounts);
  const { tweetsByAccount } = useAppSelector((state): TweetsState => state.tweets);
  let account: AccountModel | undefined;
  let tweets: TweetModel[] | undefined;

  if (typeof handle === 'string') {
    account = accounts[handle];
    tweets = tweetsByAccount[handle];
  }

  useEffect((): void => {
    if (account !== undefined || !handle || typeof handle !== 'string') {
      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    dispatch(getAccount({ apiClient, parameters: { handle }}));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ dispatch, account, handle ]);

  useEffect((): void => {
    if (tweets !== undefined || !handle || typeof handle !== 'string') {
      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    dispatch(getAccountsTweets({ apiClient, parameters: { handle }}));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ dispatch, tweets, handle ]);

  return (
    <BaseLayout
      topBar={
        <div>
          Twötter
        </div>
      }
      body={
        <Fragment>
          <Account account={ account } />

          <Headline>Twööts</Headline>

          {
            tweets?.map(
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

export default AccountPage;
