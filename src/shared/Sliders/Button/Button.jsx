import React from 'react';

import { MdArrowForward as Icon } from 'react-icons/md';

import styles from './style.module.scss';

const Button = ({ action }) => (
  <button
    className={styles.button}
    type="button"
    onClick={() => {
      action();
    }}
  >
    <Icon className={styles.icon} />
  </button>
);

export default Button;
