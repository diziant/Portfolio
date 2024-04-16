import React from 'react';
import { NextPage } from 'next';
import { Html, Head, Main, NextScript } from 'next/document';
import i18nextConfig from 'next-i18next.config';

const Document: NextPage = (props: any) => {
  const currentLocale = props.__NEXT_DATA__.query.locale || i18nextConfig.i18n.defaultLocale;

  return (
    <Html lang={currentLocale}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500;600&family=DM+Sans:wght@400;500;700&display=swap"
        />

        <meta
          name="keywords"
          content="token, tokens, stake, staking, defi, IDO, allocation, launchpad"
        />
        <meta name="description" content="Description" />
        <meta name="theme-color" content="#efefef" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
