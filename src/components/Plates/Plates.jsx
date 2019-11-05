import React from 'react';

import uniqid from 'uniqid';

import InfoCard from 'src/shared/Blocks/InfoCard/InfoCard';
import styles from './style.module.scss';

export default ({ content, wide }) => (
  <div className={styles.content}>
    {content.map(data => (
      <InfoCard
        style={{
          width: !wide ? 'calc(50% - 20px)' : '100%',
          minHeight: !wide ? '25rem' : '20rem',
          marginBottom: 20
        }}
        key={uniqid()}
        data={data}
      />
    ))}
  </div>
);
