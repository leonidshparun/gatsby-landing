import React from 'react';

import Section from 'src/shared/Wrappers/Section/Section';
import SliderContent from 'src/shared/Sliders/SliderContent/Line/SliderContent';

import styles from './style.module.scss';

function importAll(r) {
  const images = {};
  r.keys().forEach(item => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}

const images = importAll(
  require.context('src/assets/pics/tech', false, /\.(png|jpe?g|svg)$/)
);

const stackData = Object.entries(images).map(image => (
  <img src={image[1]} alt={image[0]} />
));

export default () => {
  return (
    <Section label="Tech stack" heading="Technologies we use">
      <div className={styles.container}>
        <SliderContent items={stackData} />
      </div>
    </Section>
  );
};
