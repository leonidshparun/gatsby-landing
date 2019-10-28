import React from 'react';
import { StaticQuery, Link, graphql } from 'gatsby';

import Navigation from 'src/components/Navigation/Navigation';
import LogoWithName from 'src/shared/Logo/LogoWithName';

import styles from './style.module.scss';

export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => (
      <header className={styles.container}>
        <Link to="/">
          <h1>
            <LogoWithName
              name={data.site.siteMetadata.title}
              size={3}
              color="inherit"
            />
          </h1>
        </Link>
        <Navigation menuLinks={data.site.siteMetadata.menuLinks} />
      </header>
    )}
  />
);
