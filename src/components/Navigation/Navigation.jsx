import React from 'react';
import { Link } from 'gatsby';

import NavButton from 'src/shared/NavButton/NavButton';
import styles from './style.module.scss';

export default ({ menuLinks }) => {
  const navLinks = menuLinks.slice(0, menuLinks.length - 1);
  const extra = menuLinks[menuLinks.length - 1];
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigation__links}>
        {navLinks.map(link => (
          <li key={link.name}>
            <Link activeStyle={{ fontWeight: 600 }} to={link.link}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <NavButton text={extra.name} link={extra.link} type="b" />
    </nav>
  );
};
