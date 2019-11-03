import React from 'react';

import { StaticQuery, graphql } from 'gatsby';

import Section from 'src/shared/Wrappers/Section/Section';
import SliderContent from 'src/shared/Sliders/SliderContent/SliderContent';

export default () => (
  <StaticQuery
    query={graphql`
      query Feedback {
        allContentfulFeedback {
          edges {
            node {
              company
              text {
                content {
                  content {
                    value
                  }
                }
                text
              }
              person {
                image {
                  fixed {
                    src
                  }
                }
                name
                position
                company {
                  logo {
                    fixed {
                      src
                    }
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
        allContentfulFeedback: { edges }
      } = data;
      const queryData = edges.map(edge => {
        const {
          person: {
            image: {
              fixed: { src }
            },
            name,
            position,
            company: {
              logo: {
                fixed: { src: companyLogoSrc }
              }
            }
          },
          text: {
            content: [
              {
                content: [{ value }]
              }
            ]
          },
          company
        } = edge.node;
        return {
          person: { name, position, src },
          feedback: value,
          company: { name: company, companyLogoSrc }
        };
      });
      console.log(queryData);

      return (
        <Section label="Testimonials" heading="Our customers say">
          <div>
            <SliderContent items={queryData} itemWidth={100} itemHeight={100} />
          </div>
        </Section>
      );
    }}
  />
);
