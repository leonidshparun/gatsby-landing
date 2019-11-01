import React from 'react';

import uniqid from 'uniqid';

import Section from 'src/shared/Wrappers/Section/Section';

import InfoCard from 'src/shared/Blocks/InfoCard/InfoCard';
import styles from './style.module.scss';

export default ({ content }) => {
  return (
    <Section
      css={styles.container}
      label="#"
      heading="We develop custom solutions for the following industries:"
      noLabel
    >
      <div className={styles.content}>
        {content.map(data => (
          <InfoCard
            style={{
              width: 'calc(50% - 20px)',
              marginBottom: 20
            }}
            key={uniqid()}
            data={data}
          />
        ))}
      </div>
    </Section>
  );
};
