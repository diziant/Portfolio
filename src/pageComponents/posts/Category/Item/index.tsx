import React, { FC } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import { deletePost } from 'src/stores/PostsStore/utils';
import { usePostsStore } from 'src/providers/RootStoreProvider';

import { IconCloseModal } from 'public/icon/static-icon';

import style from './styles.module.scss';
import { Link } from 'src/components/Link';

interface Props {
  innerData: {
    id: string;
    title: string;
    userId: string;
    body: string;
  };
}

export const Item: FC<Props> = ({ innerData }) => {
  const { t } = useTranslation('Posts');

  const router = useRouter();
  const { getPosts } = usePostsStore();

  const onDelete = (e) => {
    e.stopPropagation();
    deletePost(innerData.id).then(() => getPosts());
  };

  return (
    <Link
      href={`/${router.query.locale}/posts/${innerData.id}`}
      className={style.item}
      key={innerData.id}>
      <span className={style.item__number}>{`${innerData.userId}.${innerData.id}`}</span>
      <div className={style.item__box}>
        <span>
          <b>{`${t('fields.title')} `}</b>
          {innerData.title}
        </span>
        <span>
          <b>{`${t('fields.body')} `}</b>
          {innerData.body}
        </span>
      </div>
      <div className={style.item__close} onClick={(e) => onDelete(e)}>
        {IconCloseModal}
      </div>
    </Link>
  );
};
