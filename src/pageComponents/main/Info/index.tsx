import React, { FC } from 'react';
import { useTranslation, Trans } from 'next-i18next';
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
        <div className={cx(style.info__description, style.info__intro)}>
          <Trans
            i18nKey="pages.index.description.intro"
            ns="Common"
            components={{ b: <strong className={style.info__highlight} /> }}
          />
        </div>
      </div>
      <div className={style.info__description}>
        <span className={style.info__upd}>{t('pages.index.description.chapter1.upd')}</span>
        <h2 className={style.info__sub}>{t('pages.index.description.chapter1.title')}</h2>
        <Trans
          i18nKey="pages.index.description.chapter1.description"
          ns="Common"
          components={{ b: <strong className={style.info__highlight} /> }}
        />
        <span className={style.info__upd}>{t('pages.index.description.chapter2.upd')}</span>
        <h2 className={style.info__sub}>{t('pages.index.description.chapter2.title')}</h2>
        <Trans
          i18nKey="pages.index.description.chapter2.description"
          ns="Common"
          components={{ b: <strong className={style.info__highlight} /> }}
        />
        <span className={style.info__upd}>{t('pages.index.description.chapter3.upd')}</span>
        <h2 className={style.info__sub}>{t('pages.index.description.chapter3.title')}</h2>
        <Trans
          i18nKey="pages.index.description.chapter3.description"
          ns="Common"
          components={{ b: <strong className={style.info__highlight} /> }}
        />
        <span className={style.info__upd}>{t('pages.index.description.chapter4.upd')}</span>
        <h2 className={style.info__sub}>{t('pages.index.description.chapter4.title')}</h2>
        <Trans
          i18nKey="pages.index.description.chapter4.description"
          ns="Common"
          components={{ b: <strong className={style.info__highlight} /> }}
        />
        <span className={style.info__upd}>{t('pages.index.description.chapter5.upd')}</span>
        <h2 className={style.info__sub}>{t('pages.index.description.chapter5.title')}</h2>
        <Trans
          i18nKey="pages.index.description.chapter5.description"
          ns="Common"
          components={{ b: <strong className={style.info__highlight} /> }}
        />
        <span className={style.info__upd}>{t('pages.index.description.chapter6.upd')}</span>
        <h2 className={style.info__sub}>{t('pages.index.description.chapter6.title')}</h2>
        <Trans
          i18nKey="pages.index.description.chapter6.description"
          ns="Common"
          components={{ b: <strong className={style.info__highlight} /> }}
        />
      </div>
    </div>
  );
};
