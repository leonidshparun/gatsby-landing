import React from 'react';

import styles from './style.module.scss';

export default ({ children, label, heading }) => (
  <section className={styles.container}>
    <div className={styles.wrapper}>
      <div className={styles.label}>{label}</div>
      <h2>{heading}</h2>
      {children}
    </div>
  </section>
);
