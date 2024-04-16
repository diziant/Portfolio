import React from 'react';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { getI18nProps, getStaticPaths } from '../../lib/getStatic';

import { LandingLayout } from 'src/layouts/landing';
import { Container } from 'src/components/Container';
import { BLUR_IMAGE_B64 } from 'src/consts/static';

import style from 'src/styles/index.module.scss';
import { GetStaticProps } from 'next';

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
            <h1 className={style.index__title}>{t('pages.index.pageTitle')}</h1>
            <div className={style.index__box}>
              <Image
                src="/img/photo.webp"
                className={style.index__image}
                width={180}
                height={180}
                alt="Picture of the author"
                placeholder="blur"
                blurDataURL={BLUR_IMAGE_B64}
                priority
              />
              <span className={style.index__description}>{t('pages.index.description')}</span>
            </div>
          </Container>
        </div>
      </LandingLayout>
    </>
  );
};

export default Index;

const getStaticProps: GetStaticProps = async (ctx) => {
  // const myBlurDataUrl = await getBase64('http://localhost:3000/img/photo.webp');

  return {
    props: {
      ...(await getI18nProps(ctx, ['Common']))
      // base64: myBlurDataUrl
    }
  };
};

export { getStaticPaths, getStaticProps };
