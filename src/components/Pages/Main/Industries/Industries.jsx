import React from 'react';

import uniqid from 'uniqid';

import Section from 'src/shared/Section/Section';
import Card from 'src/shared/Card/Card';

import styles from './style.module.scss';

const content = [
  {
    title: 'Healthcare',
    description:
      'Our custom medical software allows institutions to better manage complex data, improving patient outcomes and streamlining workflow.',
    link: '/'
  },
  {
    title: 'Finance',
    description:
      'Our vast experience in designing fintech solutions means we can deliver a secure, compliant IT ecosystem that lets you grow your business.',
    link: '/'
  },
  {
    title: 'Trading',
    description:
      'We build, customize and integrate trading solutions which allow end users to trade instruments ranging from stocks to crypto.',
    link: '/'
  }
];

export default () => (
  <Section label="Industries" heading="Our expertise">
    <div className={styles.container}>
      <p className={styles.text}>
        CleverSoft has a 20-year, proven track record of successfully delivering
        custom software to our esteemed clients. We have developed considerable
        expertise in the following industries:
      </p>
      <div className={styles.content}>
        {content.map(data => (
          <Card key={uniqid()} data={data} />
        ))}
      </div>
    </div>
  </Section>
);
