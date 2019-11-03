import React from 'react';

import { StaticQuery, graphql } from 'gatsby';

import Section from 'src/shared/Wrappers/Section/Section';
import SliderContent from 'src/shared/Sliders/SliderContent/Line/SliderContent';

import styles from './style.module.scss';

export default () => (
  <StaticQuery
    query={graphql`
      query TechStack {
        allContentfulTechStack {
          edges {
            node {
              title
              logo {
                fluid(maxWidth: 200) {
                  src
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const {
        allContentfulTechStack: { edges }
      } = data;
      const images = edges.map(edge => {
        const {
          logo: { fluid },
          title
        } = edge.node;
        return <img src={fluid.src} alt={title} />;
      });
      return (
        <Section label="Tech stack" heading="Technologies we use">
          <div className={styles.container}>
            <SliderContent items={images} />
          </div>
        </Section>
      );
    }}
  />
);
