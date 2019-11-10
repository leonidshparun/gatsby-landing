import React from 'react';

import Section from 'src/shared/Wrappers/Section/Section';
import SliderContent from 'src/shared/Sliders/SliderContent/Line/Line';

import useTechStackQuery from 'src/hooks/query/useTechStackQuery';

import breakpoints from 'src/styles/breakpoints';
import useMedia from 'src/hooks/useMedia';

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
  const slidesToShow = useMedia(breakpoints, [5, 5, 5, 5, 3, 3, 1], 1);
  return (
    <Section label="Tech stack" heading="Technologies we use">
      <div className={styles.container}>
        <SliderContent slidesToShow={slidesToShow} items={images} />
      </div>
    </Section>
  );
};
