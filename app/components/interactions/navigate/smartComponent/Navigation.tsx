import { endSession } from '../../../../store/actions/sessions/endSession';
import { Brand } from '../Brand';
import { NavigationEntry } from '../NavigationEntry';
import { useAppDispatch } from '../../../../store/typing';
import { useAuthentication } from '../../../../api/hooks/useAuthentication';
import { useRouter } from 'next/router';
import React, { Fragment, FunctionComponent, ReactElement } from 'react';

const Navigation: FunctionComponent = function (): ReactElement {
  const { isAuthenticated, session } = useAuthentication();
  const router = useRouter();
  const dispatch = useAppDispatch();

  return (
    <div>
      <Brand
        text='Twötter'
        href='/tweets'
      />
      {
        !isAuthenticated && (
          <NavigationEntry
            text='Login'
            onClick={
              (): void => {
                // eslint-disable-next-line @typescript-eslint/no-floating-promises
                router.push('/login');
              }
            }
          />
        )
      }
      {
        isAuthenticated && (
          <Fragment>
            <NavigationEntry
              text='My Account'
              onClick={
                (): void => {
                  // eslint-disable-next-line @typescript-eslint/no-floating-promises
                  router.push(`/accounts/${session?.handle}`);
                }
              }
            />
            <NavigationEntry
              text='Logout'
              onClick={
                (): void => {
                  // eslint-disable-next-line @typescript-eslint/no-floating-promises
                  dispatch(endSession());
                }
              }
            />
          </Fragment>
        )
      }
    </div>
  );
};

export {
  Navigation
};
