import { Brand } from '../Brand';
import { NavigationEntry } from '../NavigationEntry';
import { useAuthentication } from '../../../../api/hooks/useAuthentication';
import React, { Fragment, FunctionComponent, ReactElement } from 'react';

const Navigation: FunctionComponent = function (): ReactElement {
  const { isAuthenticated, session } = useAuthentication();

  return (
    <Fragment>
      <Brand
        text='Twötter'
        href='/tweets'
      />
      {
        !isAuthenticated && (
          <NavigationEntry
            text='Login'
            href='/login'
          />
        )
      }
      {
        isAuthenticated && (
          <NavigationEntry
            text='My Account'
            href={ `/accounts/${session?.handle}` }
          />
        )
      }
    </Fragment>
  );
};

export {
  Navigation
};
