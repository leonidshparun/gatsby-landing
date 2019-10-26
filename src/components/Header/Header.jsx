import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Navigation from '../Navigation/Navigation';
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
        <h1>{data.site.siteMetadata.title}</h1>
        <Navigation menuLinks={data.site.siteMetadata.menuLinks} />
      </header>
    )}
  />
);
