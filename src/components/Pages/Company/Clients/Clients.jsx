import React from 'react';

import Section from 'src/shared/Wrappers/Section/Section';
import SliderContent from 'src/shared/Sliders/SliderContent/Line/SliderContent';

import useClientsQuery from 'src/hooks/query/useClientsQuery';

import styles from './style.module.scss';

export default () => {
  const data = useClientsQuery();
  const images = data.map(edge => {
    const {
      logo: { fluid, description },
      title
    } = edge.node;
    return (
      <div className={styles.image_wrapper}>
        <img
          src={fluid.src}
          alt={title}
          style={{ filter: description === 'inv' ? 'invert(1)' : '' }}
        />
      </div>
    );
  });
  return (
    <Section
      css={styles.container}
      label="Our clients"
      heading="We have won the trust of:"
    >
      <SliderContent items={images} />
    </Section>
  );
};
