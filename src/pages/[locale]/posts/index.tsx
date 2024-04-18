import React, { FC } from 'react';

import { GetStaticProps } from 'next';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { getStaticPaths, getI18nProps } from '../../../lib/getStatic';

import { Container } from 'src/components/Container';
import { LandingLayout } from 'src/layouts/landing';
import { AllPosts } from 'src/pageComponents/posts/AllPosts/Posts';
import { getAllPostsByCategory } from 'src/stores/PostsStore/utils';

import style from './styles.module.scss';

const AllPostsPage: FC = () => {
  const { t } = useTranslation('Posts');

  return (
    <>
      <Head>
        <title>{t('posts.tabTitle')}</title>
      </Head>
      <LandingLayout>
        <div className={style.posts}>
          <Container type="large">
            <AllPosts />
          </Container>
        </div>
      </LandingLayout>
    </>
  );
};

export default AllPostsPage;

const getStaticProps: GetStaticProps = async (ctx) => {
  try {
    const allPosts = await getAllPostsByCategory();
    return {
      props: {
        ...(await getI18nProps(ctx, ['Common', 'Posts'])),
        initialState: {
          initialAllPosts: {
            allPosts
          }
        }
      }
    };
  } catch (err) {
    return { props: { errors: err.message } };
  }
};

export { getStaticPaths, getStaticProps };
