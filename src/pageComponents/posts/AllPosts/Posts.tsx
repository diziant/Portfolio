import React from 'react';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

import { usePostsStore } from 'src/providers/RootStoreProvider';
import { Category } from 'src/pageComponents/posts/Category';
import { ArrowBack } from 'src/components/ArrowBack';
import { TPostsByCategory } from 'src/types/posts';

import style from './styles.module.scss';

const ContainerPosts = () => {
  const { t } = useTranslation('Posts');

  const router = useRouter();

  const store = usePostsStore();

  const renderItem = (
    [categoryId, categoryData]: [TPostsByCategory[0], TPostsByCategory[1]],
    index: number
  ) => {
    return (
      <Category
        classNames={style['all-posts__category']}
        categoryId={categoryId}
        categoryData={categoryData}
        key={index}
      />
    );
  };

  return (
    <div className={style['all-posts']}>
      <ArrowBack
        className={style['all-posts__header']}
        title={`${t('posts.pageTitle')}`}
        href={`/${router.query.locale}`}
      />
      <div className={style['all-posts__box']}>{store.allPosts.map(renderItem)}</div>
    </div>
  );
};

export const AllPosts = observer(ContainerPosts);
