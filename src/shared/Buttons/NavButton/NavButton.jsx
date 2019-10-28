import React from 'react';

import { navigate } from 'gatsby';
import styles from './style.module.scss';

export default ({ text, link, type }) => {
  const className = `${styles.button} ${styles[type]}`;
  return (
    <a className={className} onClick={() => navigate(link)}>
      <span className={styles.button__text}>{text}</span>
    </a>
  );
};
