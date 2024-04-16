import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import languageDetector from 'src/lib/languageDetector';
import cx from 'classnames';

import style from './styles.module.scss';

interface ILanguageSwitherParams {
  className?: string;
  locale: string;
  href?: string;
}

const LanguageSwitchLink = ({ locale, className, ...rest }: ILanguageSwitherParams) => {
  const router = useRouter();

  let href = rest.href || router.asPath;
  let pName = router.pathname;
  Object.keys(router.query).forEach((k) => {
    if (k === 'locale') {
      pName = pName.replace(`[${k}]`, locale);
      return;
    }
    pName = pName.replace(`[${k}]`, router.query[k] as any);
  });
  if (locale) {
    href = rest.href ? `/${locale}${rest.href}` : pName;
  }

  return (
    <Link
      className={cx(className, {
        [style.languageSwitcher_current]: router.query.locale === locale
      })}
      href={href}
      onClick={() => languageDetector.cache(locale)}>
      {locale}
    </Link>
  );
};

export default LanguageSwitchLink;
