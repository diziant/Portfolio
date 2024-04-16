import React, { FC } from 'react';
import cx from 'classnames';
import { useTranslation } from 'next-i18next';

import { TPostsByCategory } from 'src/types/posts';
import { Item } from './Item';

import style from './styles.module.scss';

interface Props {
  categoryId: TPostsByCategory[0];
  categoryData: TPostsByCategory[1];
  classNames?: string;
}

export const Category: FC<Props> = ({ categoryId, categoryData, classNames }) => {
  const { t } = useTranslation('Posts');

  const renderPart = (innerData, index) => {
    return <Item innerData={innerData} key={index} />;
  };

  return (
    <div className={cx(style.category, classNames)}>
      <h2 className={style.category__title}>{`${t('category')} ${categoryId}`}</h2>
      <div className={style.category__box}>{categoryData?.map(renderPart)}</div>
    </div>
  );
};
