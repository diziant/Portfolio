import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic';

import { LandingLayout } from 'src/layouts/landing';
import { Container } from 'src/components/Container';

import style from 'src/styles/index.module.scss';

const Custom404Page: NextPage = () => {
  const { t } = useTranslation('Common');

  const router = useRouter();

  return (
    <>
      <Head>
        <title>{t('pages.404.pageTitle')}</title>
      </Head>
      <LandingLayout>
        <div className={style.notFound}>
          <Container className={style.notFound__container} type="large">
            <h1 className={style.notFound__title}>{t('pages.404.description')}</h1>
            <Link className={style.notFound__link} href={`/${router.query.locale}`}>
              {t('pages.404.button')}
            </Link>
          </Container>
        </div>
      </LandingLayout>
    </>
  );
};

export default Custom404Page;

const getStaticProps = makeStaticProps(['Common']);
export { getStaticPaths, getStaticProps };
