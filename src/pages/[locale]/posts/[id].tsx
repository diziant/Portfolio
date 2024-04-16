import React, { FC } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import i18nextConfig from 'next-i18next.config';
import { getI18nProps } from '../../../lib/getStatic';

import { LandingLayout } from 'src/layouts/landing';
import { Container } from 'src/components/Container';
import { PostInfo } from 'src/pageComponents/post/PostInfo';
import { getAllPosts, getCurrentPost } from 'src/stores/PostsStore/utils';
import { usePostsStore } from 'src/providers/RootStoreProvider';

import style from './styles.module.scss';

const CurrentPostPage: FC = () => {
  const { t } = useTranslation('Posts');

  const { currentPost } = usePostsStore();

  return (
    <>
      <Head>
        <title>{`${t('post.tabTitle')} #${currentPost.id}`}</title>
      </Head>
      <LandingLayout>
        <div className={style.post}>
          <Container type="large">
            <PostInfo />
          </Container>
        </div>
      </LandingLayout>
    </>
  );
};

export default CurrentPostPage;

const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();

  return {
    paths: posts
      .map((item) =>
        i18nextConfig.i18n.locales.map((lng) => ({
          params: {
            locale: lng,
            id: item.id.toString()
          }
        }))
      )
      .reduce((ret, curr) => {
        ret = ret.concat(curr);
        return ret;
      }, []),
    fallback: false
  };
};

const getStaticProps: GetStaticProps = async (ctx) => {
  try {
    const currentPost = await getCurrentPost(ctx.params.id);

    console.log(currentPost, 'currentPostcurrentPost');

    return {
      props: {
        ...(await getI18nProps(ctx, ['Common', 'Posts'])),
        initialState: {
          initialCurrentPost: {
            currentPost
          }
        }
      }
    };
  } catch (err: any) {
    return { props: { errors: err.message } };
  }
};

export { getStaticPaths, getStaticProps };
