import React from 'react';
// import { NextPage } from 'next';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';

import { RootStoreProvider } from 'src/providers/RootStoreProvider';

import '../styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <RootStoreProvider initialState={pageProps.initialState}>
      <Component {...pageProps} />
    </RootStoreProvider>
  );
};

export default appWithTranslation(MyApp);
