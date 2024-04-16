import React, { FC } from 'react';
// import { NextPage } from 'next';
import { appWithTranslation } from 'next-i18next';

import { RootStoreProvider } from 'src/providers/RootStoreProvider';

import '../styles/global.css';

interface Props {
  Component: any;
  pageProps: any;
}

const MyApp: FC<Props> = ({ Component, pageProps }) => {
  return (
    <RootStoreProvider initialState={pageProps.initialState}>
      <Component {...pageProps} />
    </RootStoreProvider>
  );
};

export default appWithTranslation(MyApp);
