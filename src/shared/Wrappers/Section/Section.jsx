import React from 'react';

import styles from './style.module.scss';

export default ({ children, label, heading, css, noLabel, noHeading }) => {
  const className = css ? `${styles.container} ${css}` : styles.container;
  return (
    <section id={`${label}`.toLowerCase()} className={className}>
      <div className={styles.wrapper}>
        {!noLabel && <div className={styles.label}>{label}</div>}
        {!noHeading && <h2>{heading}</h2>}
        {children}
      </div>
    </section>
  );
};
