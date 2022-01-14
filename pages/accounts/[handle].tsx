import { Account } from '../../app/components/Account';
import { Account as AccountModel } from '../../app/domainModel/Account';
import { AccountsState } from '../../app/store/slices/accountsSlice';
import axios from 'axios';
import { getAccount } from '../../app/store/actions/accounts/getAccount';
import { getClient } from '../../app/api/client/getClient';
import { useRouter } from 'next/router';
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
  let account: AccountModel | undefined;

  if (typeof handle === 'string') {
    account = accounts[handle];
  }

  useEffect((): void => {
    if (account !== undefined || !handle || typeof handle !== 'string') {
      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    dispatch(getAccount({ apiClient, parameters: { handle }}));
  }, [ apiClient, dispatch, account, handle ]);

  return (
    <Fragment>
      { typeof account }
      { handle }
      <Account account={ account } />
    </Fragment>
  );
};

export default AccountPage;
