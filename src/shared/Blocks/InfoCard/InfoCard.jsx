import React from 'react';
import { navigate } from 'gatsby';

import { MdArrowForward as Icon } from 'react-icons/md';
// import icon from 'src/assets/icons/right-arrow.inline.svg';

import styles from './style.module.scss';

export default ({ data }) => {
  return (
    <a className={styles.container} onClick={() => navigate(data.link)}>
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
