import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import { usePostsStore } from 'src/providers/RootStoreProvider';
import { ArrowBack } from 'src/components/ArrowBack';

import style from './styles.module.scss';

const ContainerPostInfo: FC = () => {
  const { t } = useTranslation('Posts');

  const router = useRouter();

  const { currentPost } = usePostsStore();

  return (
    <div className={style['post-info']}>
      <ArrowBack
        className={style['post-info__header']}
        title={`${t('post.tabTitle')} ${currentPost.id}`}
        href={`/${router.query.locale}/posts`}
      />
      <div className={style['post-info__box']}>
        <h2 className={style['post-info__title']}>{`${t('category')} ${currentPost.userId}`}</h2>
        <div className={style['post-info__container']}>
          <div className={style['post-info__field']}>
            <b>{`${t('fields.title')} `}</b>
            {currentPost.title}
          </div>
          <div className={style['post-info__field']}>
            <b>{`${t('fields.body')} `}</b>
            {currentPost.body}
          </div>
        </div>
      </div>
    </div>
  );
};

export const PostInfo = observer(ContainerPostInfo);
