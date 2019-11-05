import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';

import uniqid from 'uniqid';

import Section from 'src/shared/Wrappers/Section/Section';
import InfoCard from 'src/shared/Blocks/InfoCard/InfoCard';

import styles from './style.module.scss';

export default () => {
  const { allContentfulCard } = useStaticQuery(graphql`
    {
      allContentfulCard(filter: { type: { eq: "expertise_industries" } }) {
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
    <Section label="Industries" heading="Our expertise">
      <div className={styles.container}>
        <p className={styles.text}>
          CleverSoft has a 20-year, proven track record of successfully
          delivering custom software to our esteemed clients. We have developed
          considerable expertise in the following industries:
        </p>
        <div className={styles.content}>
          {data.map(item => (
            <InfoCard key={uniqid()} data={item} />
          ))}
        </div>
      </div>
    </Section>
  );
};
