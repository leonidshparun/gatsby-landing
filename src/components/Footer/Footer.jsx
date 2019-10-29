import React from 'react';

import { footerNav } from 'src/config/navigation';
import { Link } from 'gatsby';

import {
  FaLinkedinIn as li,
  FaTwitter as tw,
  FaFacebookF as fb
} from 'react-icons/fa';

import styles from './style.module.scss';

const socials = [
  { title: 'Linkedin', link: '/', icon: li },
  { title: 'Facebook', link: '/', icon: fb },
  { title: 'Twitter', link: '/', icon: tw }
];

export default () => (
  <footer className={styles.container}>
    <div className={styles.wrapper}>
      <p>© 2019 All rights reserved</p>
      <ul className={styles.navigation__links}>
        {footerNav.map(link => (
          <li key={link.title}>
            <Link to={link.link}>{link.title}</Link>
          </li>
        ))}
      </ul>

      <ul className={styles.navigation__social}>
        {socials.map(link => (
          <li key={link.title}>
            <Link to={link.link}>{link.icon()}</Link>
          </li>
        ))}
      </ul>
    </div>
  </footer>
);
