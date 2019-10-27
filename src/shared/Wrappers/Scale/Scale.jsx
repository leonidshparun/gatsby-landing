import React from 'react';

import styles from './style.module.scss';

export default ({ children, bg }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>{children}</div>
      <img src={bg} alt="" />
    </div>
  );
};
