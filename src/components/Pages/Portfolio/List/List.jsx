import React from 'react';
import uniqid from 'uniqid';

import Section from 'src/shared/Wrappers/Section/Section';
import Tile from 'src/shared/Blocks/Tile/Tile';
import styles from './style.module.scss';

const content = [
  { title: 'Automated Trading Application', customer: 'Acronis' },
  { title: 'Employee Communication Portal', customer: 'Waterway' },
  { title: 'Inventory Management Application', customer: 'LoopBooking' },
  { title: 'Cross Platform App', customer: 'CloudCall' },
  { title: 'Web and mobile trading platform', customer: 'CityIndex' },
  { title: 'Cross Platform App', customer: 'CloudCall' },
  { title: 'Web and mobile trading platform', customer: 'CityIndex' },
  { title: 'Web and mobile trading platform', customer: 'CityIndex' }
];

export default () => {
  return (
    <Section heading="Portfolio" css={styles.container} noLabel>
      <div className={styles.list}>
        {content.map(data => (
          <Tile key={uniqid()} data={data} />
        ))}
      </div>
    </Section>
  );
};
