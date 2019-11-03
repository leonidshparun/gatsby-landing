import React from 'react';
import { navigate } from 'gatsby';

import styles from './style.module.scss';

export default ({ data, width }) => {
  const { BgSrc, title, logoSrc } = data;
  return (
    <a
      style={{ width }}
      className={styles.container}
      onClick={() => navigate(data.link)}
    >
      <article>
        <div className={styles.content}>
          <div className={styles.content__customer}>
            <img src={logoSrc} alt="" width={120} />
          </div>
          <p className={styles.content__title}>{title}</p>
        </div>
        <img src={BgSrc} alt="" />
      </article>
    </a>
  );
};
