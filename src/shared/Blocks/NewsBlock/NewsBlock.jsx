import React from 'react';
import { navigate } from 'gatsby';

import Scale from 'src/shared/Wrappers/Scale/Scale';

import background from 'src/assets/pics/tile-placeholder.jpg';

import styles from './style.module.scss';

export default ({ data }) => {
  return (
    <a className={styles.container} onClick={() => navigate(data.link)}>
      <div className={styles.image__container}>
        <Scale bg={background} />
      </div>
      <article>
        <div className={styles.card__heading}>
          <span>{data.title}</span>
        </div>
        <p className={styles.card__description}>{data.text}</p>
        <div className={styles.card__details}>
          <span>{data.date}</span>
          <span>{`${data.minutes} min read`}</span>
        </div>
      </article>
    </a>
  );
};
