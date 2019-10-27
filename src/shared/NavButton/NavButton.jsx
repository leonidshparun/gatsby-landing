import React from 'react';

import { navigate } from 'gatsby';
import styles from './style.module.scss';

export default ({ text, link }) => (
  <a className={styles.button} onClick={() => navigate(link)}>
    <span className={styles.button__text}>{text}</span>
  </a>
);
