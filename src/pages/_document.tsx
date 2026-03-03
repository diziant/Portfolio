import React from 'react';
import { Html, Head, Main, NextScript, DocumentProps } from 'next/document';
import i18nextConfig from 'next-i18next.config';

const Document = (props: DocumentProps) => {
  const currentLocale =
    (props.__NEXT_DATA__.query.locale as string) || i18nextConfig.i18n.defaultLocale;

  return (
    <Html lang={currentLocale}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500;600&family=DM+Sans:wght@400;500;700&display=swap"
        />

        <meta name="theme-color" content="#efefef" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <meta property="title" content="Info: Folomeev Egor" key="title" />
        <meta
          name="description"
          content="Just a little information about my way, I’ll also try to expand it with examples of what seems interesting"
        />
        <meta
          name="keywords"
          content="Portfolio, CV, Egor Folomeev, information about projects, resume, history"
        />

        <meta property="og:title" content="Info: Folomeev Egor" />
        <meta property="og:site_name" content="Info" />
        <meta property="og:url" content="https://diziant.github.io/Portfolio/" />
        <meta
          property="og:image"
          content="https://lh3.googleusercontent.com/a/ACg8ocKvME3WZlCMWqQrW3FE6dPHk-jfgionqJQYa9o1cRk-HsQ5eFKj=s128-c"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Info: Folomeev Egor" />
        <meta
          name="twitter:description"
          content="Just a little information about my way, I’ll also try to expand it with examples of what seems interesting"
        />
        <meta
          name="twitter:image"
          content="https://lh3.googleusercontent.com/a/ACg8ocKvME3WZlCMWqQrW3FE6dPHk-jfgionqJQYa9o1cRk-HsQ5eFKj=s128-c"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
