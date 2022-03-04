import { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { GlobalStyle } from '../app/styling/GlobalStyle';
import { GlobalThemeProvider } from '../app/styling/GlobalTheme';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { RestoreSession } from '../app/store/adapters/react/RestoreSession';
import { store } from '../app/store/configureStore';
import React, { ReactElement } from 'react';
import '../public/fonts/fonts.css';

const MyApp = function ({ Component, pageProps }: AppProps): ReactElement {
  return (
    <Provider store={ store }>
      <Head>
        <link
          href='/fonts/Dosis/Dosis-VariableFont_wght.ttf'
          as='font'
          rel='preload'
          type='font/ttf'
          crossOrigin=''
        />
      </Head>
      <GlobalThemeProvider>
        <GlobalStyle />
        <RestoreSession />
        <Component { ...pageProps } />
      </GlobalThemeProvider>
    </Provider>
  );
};

export default appWithTranslation(MyApp);
