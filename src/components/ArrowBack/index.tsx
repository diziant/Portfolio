import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import cx from 'classnames';

import { IconArrowBack } from 'public/icon/static-icon';

import style from './styles.module.scss';

interface ICalculatorParams {
  className?: string;
  title?: string;
  href?: string;
}

export const ArrowBack: React.FC<ICalculatorParams> = ({ className, title, href }) => {
  const router = useRouter();

  const goBack = useCallback(() => {
    href ? router.push(`${href}`) : router.back();
  }, [router, href]);

  return (
    <div className={cx(style.back, className)}>
      <button aria-label="Button Back" className={style.back__arrow} onClick={goBack}>
        {IconArrowBack}
      </button>
      {title && <h1 className={style.back__title}>{title}</h1>}
    </div>
  );
};
