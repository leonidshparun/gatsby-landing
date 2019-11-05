import React from 'react';

import Section from 'src/shared/Wrappers/Section/Section';

import styles from './style.module.scss';

export default () => (
  <Section
    label="About us"
    noHeading
    heading="Our history"
    css={styles.section}
  >
    <div className={styles.container}>
      <h2>Our history</h2>
      <p>
        Founded in 2001, CleverSoft acted as a product owner of a scientific
        system for our first client that had reached out to us because they
        needed guidance and necessary expertise to do that. We created
        requirements, established development processes and standards, and
        partly planned the marketing strategy. The product turned out to be
        innovative, and we built a computer-based training system for users, as
        well as established benchmarks to improve user experience. That product
        was a big win for both CleverSoft and our customer.
      </p>
    </div>
  </Section>
);
