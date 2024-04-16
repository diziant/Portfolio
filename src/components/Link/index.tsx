import React, { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface Props {
  className?: string;
  skipLocaleHandling?: boolean;
  href: string;
  locale: any;
}

const LinkComponent: FC<Props> = ({ className, children, skipLocaleHandling, ...rest }) => {
  const router = useRouter();
  const locale = rest.locale || router.query.locale || '';

  let href = rest.href || router.asPath;
  if (href.indexOf('http') === 0) skipLocaleHandling = true;
  if (locale && !skipLocaleHandling) {
    href = href ? `/${locale}${href}` : router.pathname.replace('[locale]', locale);
  }

  return (
    <>
      <Link className={className} href={href}>
        <a {...rest}>{children}</a>
      </Link>
    </>
  );
};

export { LinkComponent as Link };
