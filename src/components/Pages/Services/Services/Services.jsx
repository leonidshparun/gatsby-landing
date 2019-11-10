import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';

import uniqid from 'uniqid';
import Section from 'src/shared/Wrappers/Section/Section';
import InfoCard from 'src/shared/Blocks/InfoCard/InfoCard';

import NavButton from 'src/shared/Buttons/NavButton/NavButton';
import styles from './style.module.scss';

export default () => {
  const { allContentfulCard } = useStaticQuery(graphql`
    {
      allContentfulCard(filter: { type: { eq: "services_services" } }) {
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
      <div className={styles.content}>
        {data.map(item => (
          <InfoCard key={uniqid()} data={item} />
        ))}
      </div>

      <div className={styles.nav}>
        <NavButton text="See all services" link="/" type="d" />
      </div>
    </Section>
  );
};
