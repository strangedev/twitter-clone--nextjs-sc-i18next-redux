import { AppProps } from 'next/app';
import { GlobalStyle } from '../app/styling/GlobalStyle';
import { Provider } from 'react-redux';
import { SettingsProvider } from '../app/styling/settingsContext';
import { store } from '../app/store/configureStore';
import React, { ReactElement } from 'react';

const MyApp = function ({ Component, pageProps }: AppProps): ReactElement {
  return (
    <Provider store={ store }>
      <GlobalStyle />
      <SettingsProvider>
        <Component { ...pageProps } />
      </SettingsProvider>
    </Provider>
  );
};

export default MyApp;
