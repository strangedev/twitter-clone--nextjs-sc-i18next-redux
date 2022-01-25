import { Account } from '../../app/components/Account';
import { Account as AccountModel } from '../../app/domainModel/Account';
import { AccountsState } from '../../app/store/slices/accountsSlice';
import axios from 'axios';
import { BaseLayout } from '../../app/components/layout/BaseLayout';
import { getAccount } from '../../app/store/actions/accounts/getAccount';
import { getAccountsTweets } from '../../app/store/actions/tweets/getAccountsTweets';
import { getClient } from '../../app/api/client/getClient';
import { Tweet } from '../../app/components/Tweet';
import { Tweet as TweetModel } from '../../app/domainModel/Tweet';
import { useRouter } from 'next/router';
import React, { Fragment, FunctionComponent, ReactElement, useEffect } from 'react';
import { TweetsState } from '../../app/store/slices/tweetsSlice';
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
  }, [ dispatch, account, handle ]);

  useEffect((): void => {
    if (tweets !== undefined || !handle || typeof handle !== 'string') {
      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    dispatch(getAccountsTweets({ apiClient, parameters: { handle }}));
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
          { tweets?.map((tweet): ReactElement => <Tweet tweet={ tweet } key={ tweet.publishedAt } />) }
        </Fragment>
      }
    />
  );
};

export default AccountPage;
