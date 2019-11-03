import React from 'react';

import { StaticQuery, graphql } from 'gatsby';

import uniqid from 'uniqid';

import Section from 'src/shared/Wrappers/Section/Section';
import SliderSimple from 'src/shared/Sliders/SliderSimple/SliderSimple';
import Tile from 'src/shared/Blocks/Tile/Tile';
import NavButton from 'src/shared/Buttons/NavButton/NavButton';

import { slider_controls as cfg } from 'src/config/sliders';
import styles from './style.module.scss';

export default () => (
  <StaticQuery
    query={graphql`
      query Project {
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
        .map(itemData => <Tile width={320} key={uniqid()} data={itemData} />);
      return (
        <Section
          label="Portfolio"
          heading="Featured projects"
          css={styles.container}
        >
          <SliderSimple showControls items={items} cfg={cfg} slidesToShow={3} />
          <div className={styles.nav}>
            <NavButton text="View more case studies" link="/" type="a" />
          </div>
        </Section>
      );
    }}
  />
);
