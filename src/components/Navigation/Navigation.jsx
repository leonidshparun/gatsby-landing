import React from 'react';

import { headerNav } from 'src/config/navigation';

import { Link } from 'gatsby';

import NavButton from 'src/shared/Buttons/NavButton/NavButton';

import styles from './style.module.scss';

export default () => {
  const navLinks = headerNav.slice(0, headerNav.length - 1);
  const extra = headerNav[headerNav.length - 1];
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigation__links}>
        {navLinks.map(link => (
          <li key={link.title}>
            <Link activeStyle={{ color: '#34d2d2' }} to={link.link}>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
      <NavButton text={extra.title} link={extra.link} type="b" />
    </nav>
  );
};
