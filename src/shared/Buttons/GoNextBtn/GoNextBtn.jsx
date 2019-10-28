import React from 'react';

import { FaAngleDown } from 'react-icons/fa';
import { navigate } from 'gatsby';
import styles from './style.module.scss';

export default ({ link, type }) => {
  const className = `${styles.button} ${styles[type]}`;
  return (
    <button type="button" className={className} onClick={() => navigate(link)}>
      <FaAngleDown size="3rem" color="#34d2d2" />
    </button>
  );
};
