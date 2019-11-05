import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import styles from './style.module.scss';

export default ({ children }) => (
  <>
    <Header />
    <main className={styles.container}>{children}</main>
    <Footer />
  </>
);
