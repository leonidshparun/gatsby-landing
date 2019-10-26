import React from 'react';

import styles from './style.module.scss';

export default ({ children }) => (
  <main className={styles.container}>{children}</main>
);
