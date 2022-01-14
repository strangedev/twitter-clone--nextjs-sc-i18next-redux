import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../app/store/configureStore';
import React, { ReactElement } from 'react';

const MyApp = function ({ Component, pageProps }: AppProps): ReactElement {
  return (
    <Provider store={ store }>
      <Component { ...pageProps } />
    </Provider>
  );
};

export default MyApp;
