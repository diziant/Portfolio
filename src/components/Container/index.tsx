import React, { FC } from 'react';
import cx from 'classnames';

import style from './styles.module.scss';

interface IContainerParams {
  type: 'large' | 'medium' | 'small';
  className?: string;
}

export const Container: FC<IContainerParams> = ({ children, type, className }) => (
  <div
    className={cx(className, style.container, {
      [style[`container_${type}`]]: type
    })}>
    {children}
  </div>
);
