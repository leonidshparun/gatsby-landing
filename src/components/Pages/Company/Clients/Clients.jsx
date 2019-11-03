import React from 'react';

import { StaticQuery, graphql } from 'gatsby';

import Section from 'src/shared/Wrappers/Section/Section';
import SliderContent from 'src/shared/Sliders/SliderContent/Line/SliderContent';

export default () => (
  <StaticQuery
    query={graphql`
      query Clients {
        allContentfulClient {
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
        allContentfulClient: { edges }
      } = data;
      const images = edges.map(edge => {
        const {
          logo: { fluid },
          title
        } = edge.node;
        return <img src={fluid.src} alt={title} />;
      });
      return (
        <Section label="Our clients" heading="We have won the trust of:">
          <SliderContent items={images} />
        </Section>
      );
    }}
  />
);
