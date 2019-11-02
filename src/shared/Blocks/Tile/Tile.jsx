import React from 'react';
import { navigate } from 'gatsby';

import background from 'src/assets/pics/tile-placeholder.jpg';

import styles from './style.module.scss';

export default ({ data, width }) => {
  return (
    <a
      style={{ width }}
      className={styles.container}
      onClick={() => navigate(data.link)}
    >
      <article>
        <div className={styles.content}>
          <p className={styles.content__customer}>{data.customer}</p>
          <p className={styles.content__title}>{data.title}</p>
        </div>
        <img src={background} alt="" />
      </article>
    </a>
  );
};
