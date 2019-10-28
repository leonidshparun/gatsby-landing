import React from 'react';

import avatar from 'src/assets/pics/avatar.png';

import styles from './style.module.scss';

export default ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.person}>
        <div className={styles.person__avatar}>
          <img src={avatar} alt={data.person.name} />
        </div>
        <div className={styles.person__info}>
          <h5>{data.person.name}</h5>
          <p>{data.person.details}</p>
        </div>
      </div>
      <div className={styles.feedback}>
        <p>{data.feedback}</p>
      </div>
    </div>
  );
};
