import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';

import Section from 'src/shared/Wrappers/Section/Section';
import Plates from 'src/components/Plates/Plates';

import styles from './style.module.scss';

export default () => {
  const { allContentfulCard } = useStaticQuery(graphql`
    {
      allContentfulCard(filter: { type: { eq: "solutions_services" } }) {
        edges {
          node {
            title
            description {
              description
            }
          }
        }
      }
    }
  `);
  const data = allContentfulCard.edges.map(item => ({
    title: item.node.title,
    description: item.node.description.description,
    link: '/'
  }));
  return (
    <Section
      label="Services"
      heading="Custom software development services we offer"
      css={styles.container}
    >
      <Plates content={data} wide />
    </Section>
  );
};
