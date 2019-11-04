import React from 'react';
import { navigate } from 'gatsby';

import { MdArrowForward as Icon } from 'react-icons/md';

import styles from './style.module.scss';

export default ({ data, style }) => {
  return (
    <a
      style={{ ...style }}
      className={styles.container}
      onClick={() => navigate(data.link)}
    >
      <article>
        <div className={styles.card__heading}>
          <span>{data.title}</span>
          <Icon color="#34d2d2" size="3rem" />
        </div>
        <p className={styles.card__description}>{data.description}</p>
      </article>
    </a>
  );
};
