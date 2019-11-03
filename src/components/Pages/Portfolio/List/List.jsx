import React from 'react';
import uniqid from 'uniqid';

import { StaticQuery, graphql } from 'gatsby';

import Section from 'src/shared/Wrappers/Section/Section';
import Tile from 'src/shared/Blocks/Tile/Tile';
import styles from './style.module.scss';

export default () => (
  <StaticQuery
    query={graphql`
      query Projects {
        allContentfulProject {
          edges {
            node {
              title
              image {
                fluid(maxWidth: 720) {
                  src
                }
              }
              client {
                title
                logo {
                  fluid(maxWidth: 120) {
                    src
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const {
        allContentfulProject: { edges }
      } = data;
      const items = edges
        .map(edge => {
          const {
            image: {
              fluid: { src: BgSrc }
            },
            title,
            client: {
              logo: {
                fluid: { src: logoSrc }
              }
            }
          } = edge.node;
          return { BgSrc, title, logoSrc };
        })
        .map(itemData => <Tile key={uniqid()} data={itemData} />);
      return (
        <Section heading="Portfolio" css={styles.container} noLabel>
          <div className={styles.list}>{items}</div>
        </Section>
      );
    }}
  />
);
