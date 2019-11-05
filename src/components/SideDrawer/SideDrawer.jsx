import React from 'react';

import { Link } from 'gatsby';

import styles from './style.module.scss';

export default ({ isVisible, links }) => {
  return (
    <nav className={styles.navigation} style={{ left: isVisible ? 0 : -320 }}>
      <ul className={styles.navigation__links}>
        {links.map(link => (
          <li key={link.title}>
            <Link activeStyle={{ color: '#34d2d2' }} to={link.link}>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
