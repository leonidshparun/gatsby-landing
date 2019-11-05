import React from 'react';
import { navigate } from 'gatsby';
import { FiMail } from 'react-icons/fi';

import NavButton from 'src/shared/Buttons/NavButton/NavButton';

import styles from './style.module.scss';

export default ({ isFull, extra }) => {
  return isFull ? (
    <NavButton text={extra.title} link={extra.link} type="b" />
  ) : (
    <button
      type="button"
      onClick={() => navigate(extra.link)}
      className={styles.contact__button}
    >
      <FiMail link={extra.link} size="3.4rem" color="inherit" />
    </button>
  );
};
