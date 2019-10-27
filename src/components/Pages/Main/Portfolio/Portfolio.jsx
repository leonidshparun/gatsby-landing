import React from 'react';

import uniqid from 'uniqid';
import Section from 'src/shared/Section/Section';

import Carousel from 'src/shared/Carousel/Carousel';

import Tile from 'src/shared/Tile/Tile';
import NavButton from 'src/shared/NavButton/NavButton';

import styles from './style.module.scss';

const content = [
  { title: 'Automated Trading Application', customer: 'Acronis' },
  { title: 'Employee Communication Portal', customer: 'Waterway' },
  { title: 'Inventory Management Application', customer: 'LoopBooking' },
  { title: 'Cross Platform App', customer: 'CloudCall' },
  { title: 'Web and mobile trading platform', customer: 'CityIndex' }
];

export default () => {
  const items = content.map(data => <Tile key={uniqid()} data={data} />);
  return (
    <Section label="Portfolio" heading="Featured projects">
      <Carousel items={items} itemWidth={320} itemHeight={420} />
      <div className={styles.nav}>
        <NavButton text="View more case studies" link="/" />
      </div>
    </Section>
  );
};
