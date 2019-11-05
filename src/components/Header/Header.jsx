import React from 'react';
import { StaticQuery, Link, graphql } from 'gatsby';

import Navigation from 'src/components/Navigation/Navigation';
import Logo from 'src/shared/Logo/LogoWithName';

import styles from './style.module.scss';

export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <header className={styles.container}>
        <Link to="/">
          <h1>
            <Logo
              name={data.site.siteMetadata.title}
              size={3.6}
              color="inherit"
            />
          </h1>
        </Link>
        <Navigation menuLinks={data.site.siteMetadata.menuLinks} />
      </header>
    )}
  />
);
