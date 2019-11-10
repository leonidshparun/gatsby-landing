import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import uniqid from 'uniqid';

import Section from 'src/shared/Wrappers/Section/Section';
import InfoCard from 'src/shared/Blocks/InfoCard/InfoCard';

import styles from './style.module.scss';

export default () => {
  const { allContentfulCard } = useStaticQuery(graphql`
    {
      allContentfulCard(filter: { type: { eq: "industries_industries" } }) {
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
      noLabel
      heading="We develop custom solutions for the following industries"
      css={styles.container}
    >
      <div className={styles.content}>
        {data.map(item => (
          <InfoCard key={uniqid()} data={item} />
        ))}
      </div>
    </Section>
  );
};
