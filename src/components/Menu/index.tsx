import React, { FC } from 'react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import cx from 'classnames';

import { EMenuLinkFlag, TMenu } from 'src/types/posts';

import { LINK_CV, LINK_CV_EN, LINK_LINKEDIN } from 'src/consts/static';

import style from './styles.module.scss';

interface Props {
  className?: string;
}

export const Menu: FC<Props> = ({ className }) => {
  const { t } = useTranslation('Common');

  const router = useRouter();

  const menu = [
    {
      id: 1,
      name: `${t('layout.menu.someWords')}`,
      url: `/${router.query.locale}`,
      tab: true
    },
    {
      id: 2,
      name: `${t('layout.menu.allPosts')}`,
      url: `/${router.query.locale}/posts`,
      tab: true
    },
    {
      id: 3,
      name: `${t('layout.menu.linkedin')}`,
      url: LINK_LINKEDIN,
      flag: EMenuLinkFlag.LINKED_IN
    },
    // {
    //   id: 4,
    //   name: `${t('layout.menu.hh')}`,
    //   url: LINK_HH,
    //   flag: EMenuLinkFlag.HH
    // },
    {
      id: 5,
      name: `${t('layout.menu.cv')}`,
      url: router.query.locale === 'en' ? LINK_CV_EN : LINK_CV,
      flag: EMenuLinkFlag.CV
    }
  ];

  const renderLink = (item: TMenu) => {
    if (item.tab) {
      return (
        <Link
          href={item.url!}
          className={cx(style.menu__link, {
            [style.menu__link_active]: `/${router.pathname.split('/')?.[1]}` === item.url
          })}>
          {item.name}
        </Link>
      );
    }

    return (
      <a
        className={cx(style.menu__link, { [style[`menu__link_${item.flag}`]]: item.flag })}
        href={item.url}
        target="_blank"
        rel="noreferrer">
        {item.name}
      </a>
    );
  };

  const renderItem = (item: TMenu) => {
    return (
      <li key={item.id} className={style.menu__item}>
        {renderLink(item)}
      </li>
    );
  };

  return (
    <nav className={cx(style.menu, className)}>
      <ul className={style.menu__list}>{menu.map(renderItem)}</ul>
    </nav>
  );
};
