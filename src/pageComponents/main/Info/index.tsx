import React, { FC } from 'react';
import { useTranslation } from 'next-i18next';
import cx from 'classnames';
import Image from 'next/image';

import { BLUR_IMAGE_B64 } from 'src/consts/static';

import style from './styles.module.scss';

interface Props {
  className?: string;
}

export const MainInfo: FC<Props> = ({ className }) => {
  const { t } = useTranslation('Common');

  return (
    <div className={cx(style.info, className)}>
      <h1 className={style.info__title}>{t('pages.index.pageTitle')}</h1>
      <div className={style.info__box}>
        <Image
          src="/Portfolio/img/photo.webp"
          className={style.info__image}
          width={180}
          height={180}
          alt="Picture of the author"
          placeholder="blur"
          blurDataURL={BLUR_IMAGE_B64}
          priority
        />
        <span className={style.info__description}>{t('pages.index.description')}</span>
      </div>
    </div>
  );
};
