import React from 'react';

import styles from './style.module.scss';

export default ({ children, label, heading, css, noLabel, noHeading }) => (
  <section
    id={`${label}`.toLowerCase()}
    className={`${styles.container} ${css}`}
  >
    <div className={styles.wrapper}>
      {!noLabel && <div className={styles.label}>{label}</div>}
      {!noHeading && <h2>{heading}</h2>}
      {children}
    </div>
  </section>
);
