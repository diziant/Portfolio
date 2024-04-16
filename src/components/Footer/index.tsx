import React, { FC } from 'react';
import { useTranslation } from 'next-i18next';
// import { useRouter } from 'next/router';
import cx from 'classnames';

import style from './styles.module.scss';
import { Container } from '../Container';

interface Props {
  className?: string;
}

export const Footer: FC<Props> = ({ className }) => {
  // const router = useRouter();
  const { t } = useTranslation('Common');

  return (
    <footer className={cx(style.footer, className)}>
      <Container className={style.footer__container} type="large">
        <span className={style.footer__title}>{t('layout.footer.title')}</span>
      </Container>
    </footer>
  );
};
