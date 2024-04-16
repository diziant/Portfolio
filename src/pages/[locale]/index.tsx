import React from 'react';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic';

import { LandingLayout } from 'src/layouts/landing';
import { Container } from 'src/components/Container';
import { MainInfo } from 'src/pageComponents/main/Info';

import style from 'src/styles/index.module.scss';

const Index = () => {
  const { t } = useTranslation('Common');
  return (
    <>
      <Head>
        <title>{t('pages.index.tabTitle')}</title>
      </Head>
      <LandingLayout>
        <div className={style.index}>
          <Container className={style.index__container} type="large">
            <MainInfo />
          </Container>
        </div>
      </LandingLayout>
    </>
  );
};

export default Index;

const getStaticProps = makeStaticProps(['Common']);

export { getStaticPaths, getStaticProps };
