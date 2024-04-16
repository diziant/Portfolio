import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import i18nextConfig from 'next-i18next.config';
import cx from 'classnames';

import { Container } from '../Container';
import { Menu } from '../Menu';
import LanguageSwitcher from '../LanguageSwicher';

import style from './styles.module.scss';

interface Props {
  className?: string;
}

export const Header: FC<Props> = ({ className }) => {
  const { t } = useTranslation('Common');

  const [fixedHeader, setFixedHeader] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollYOffset = 42;

    const { position: htmlPosition, overflow: htmlOverflow } = document.documentElement.style;

    const isScrollDisabled = htmlPosition === 'fixed' && htmlOverflow === 'hidden';

    if (window.scrollY > scrollYOffset || isScrollDisabled) {
      return setFixedHeader(true);
    }
    return setFixedHeader(false);
  };

  return (
    <header className={cx(style.header, { [style.header_fixed]: fixedHeader }, className)}>
      <Container className={style.header__container} type="large">
        <div className={style.header__box}>
          <span className={style.header__title}>{t('layout.header.title')}</span>
          <div className={style.header__lang}>
            {i18nextConfig.i18n.locales.map((locale) => {
              return (
                <LanguageSwitcher
                  className={style['header__lang-item']}
                  locale={locale}
                  key={locale}
                />
              );
            })}
          </div>
        </div>
        <Menu />
      </Container>
    </header>
  );
};
