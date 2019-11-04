import React from 'react';

import Section from 'src/shared/Wrappers/Section/Section';
import SliderContent from 'src/shared/Sliders/SliderContent/Line/SliderContent';

import useTechStackQuery from 'src/hooks/query/useTechStackQuery';

import styles from './style.module.scss';

export default () => {
  const data = useTechStackQuery();
  const images = data.map(edge => {
    const {
      logo: { fluid },
      title
    } = edge.node;
    return <img src={fluid.src} alt={title} />;
  });
  return (
    <Section label="Tech stack" heading="Technologies we use">
      <div className={styles.container}>
        <SliderContent items={images} />
      </div>
    </Section>
  );
};
