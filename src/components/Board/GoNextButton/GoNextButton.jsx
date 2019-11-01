import React from 'react';

import { FaAngleDown } from 'react-icons/fa';
import { navigate } from 'gatsby';

import styles from './style.module.scss';

export default ({ link }) => (
  <div className={styles.container}>
    <button
      type="button"
      className={styles.button}
      onClick={() => navigate(link)}
    >
      <FaAngleDown size="3rem" />
    </button>
  </div>
);
