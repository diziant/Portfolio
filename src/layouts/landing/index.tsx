import React, { FC } from 'react';

import { Footer } from 'src/components/Footer';
import { Header } from 'src/components/Header';

import style from './styles.module.scss';

export const LandingLayout: FC = ({ children }) => {
  return (
    <div className={style.body}>
      <Header />
      <main className={style.main}>{children}</main>
      <Footer />
    </div>
  );
};
