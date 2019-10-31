import React from 'react';
import uniqid from 'uniqid';

import Section from 'src/shared/Wrappers/Section/Section';
import SliderSimple from 'src/shared/Sliders/SliderSimple/SliderSimple';
import Tile from 'src/shared/Blocks/Tile/Tile';
import NavButton from 'src/shared/Buttons/NavButton/NavButton';

import { slider_controls as cfg } from 'src/config/sliders';
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
    <Section
      label="Portfolio"
      heading="Featured projects"
      css={styles.container}
    >
      <SliderSimple showControls items={items} cfg={cfg} slidesToShow={3} />
      <div className={styles.nav}>
        <NavButton text="View more case studies" link="/" type="a" />
      </div>
    </Section>
  );
};
