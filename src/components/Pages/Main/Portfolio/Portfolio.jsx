import React from 'react';

import uniqid from 'uniqid';
import Section from 'src/shared/Section/Section';
import Tile from 'src/shared/Tile/Tile';
import NavButton from 'src/shared/NavButton/NavButton';

import styles from './style.module.scss';

const content = [
  { title: 'Automated Trading Application', customer: 'Acronis' },
  { title: 'Employee Communication Portal', customer: 'Waterway' },
  { title: 'Inventory Management Application', customer: 'LoopBooking' }
  // { title: 'Cloud Backup Storage', customer: 'HospitalPortal' }
];

export default () => (
  <Section label="Portfolio" heading="Featured projects">
    <div className={styles.content}>
      {content.map(data => (
        <Tile key={uniqid()} data={data} />
      ))}
      <div className={styles.nav}>
        <NavButton text="View more case studies" link="/" />
      </div>
    </div>
  </Section>
);
