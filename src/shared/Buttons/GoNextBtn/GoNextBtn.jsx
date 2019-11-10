import React from 'react';

import { FaAngleDown } from 'react-icons/fa';
import styles from './style.module.scss';

export default ({ node }) => {
  const goDownHandler = () => {
    const rect = node.getBoundingClientRect();
    window.scrollBy({ top: rect.bottom - 40, behavior: 'smooth' });
  };

  return (
    <button type="button" className={styles.button} onClick={goDownHandler}>
      <FaAngleDown size="3rem" color="#34d2d2" />
    </button>
  );
};
