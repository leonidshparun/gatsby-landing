import React from 'react';

import { IoIosMenu, IoIosClose } from 'react-icons/io';
import styles from './style.module.scss';

export default ({ isActive, action }) => {
  return (
    <button className={styles.button} type="button" onClick={() => action()}>
      {isActive ? (
        <IoIosClose color="inherit" size="4rem" />
      ) : (
        <IoIosMenu color="inherit" size="4rem" />
      )}
    </button>
  );
};
