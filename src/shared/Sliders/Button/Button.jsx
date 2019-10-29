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
    <Icon color="#34d2d2" size="3rem" />
  </button>
);

export default Button;
