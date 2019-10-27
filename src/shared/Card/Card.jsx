import React from 'react';
import { navigate } from 'gatsby';

import icon from 'src/images/right-arrow.svg';

import styles from './style.module.scss';

const handleClick = link => {
  navigate(link);
};

export default ({ data }) => {
  return (
    <a className={styles.container} onClick={() => handleClick(data.link)}>
      <article>
        <div className={styles.card__heading}>
          <span>{data.title}</span>
          <i>
            <img src={icon} alt={`go to ${data.link}`} width={24} />
          </i>
        </div>
        <p className={styles.card__description}>{data.description}</p>
      </article>
    </a>
  );
};
