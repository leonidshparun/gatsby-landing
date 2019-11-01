import React from 'react';

import Section from 'src/shared/Wrappers/Section/Section';

import pic from 'src/assets/pics/office.jpg';
import pic2 from 'src/assets/pics/bg/bg5.jpg';

import styles from './style.module.scss';

const data = {
  vision:
    'Our commitment to work and serious goals and objectives have led to impressive results: we have successfully developed more than 840 projects in various industries implementing best practices for technology development. Moreover, the company has opened its office in San Diego for more effective interaction with the customers from North America. Since the time we entered new markets, the number of customers using our services has significantly increased. Today, EffectiveSoft is growing and evolving, providing its clients with diverse industry expertise and deep technology awareness.',
  mission: `“Looking beyond the possible” is more than just a motto to us. We do our best to combine the needs of our customers with the best practices and cutting-edge technologies to create a powerful custom-tailored solution. All our processes are transparent, and our mission is to ensure confidence in the development of tech solutions. We promote trust and safety making our business customers world-competitive. Last but not least, we always deliver on time and within budget.

Effectivesoft is the result of synergy between our teams and our customers. Our company culture is focused on excellent productivity, customer satisfaction, respect for team and individual achievements, and career prospects for our employees. We are genuinely proud of the fact that most of our customers have been staying with us for years, which is confirmed by their multiple testimonials.`
};

export default () => (
  <Section label="About us" heading="" css={styles.section}>
    <div className={`${styles.container} ${styles.vision}`}>
      <div className={styles.content__text}>
        <h2>Our vision</h2>
        <p>{data.vision}</p>
      </div>
      <div className={styles.content__media}>
        <img src={pic2} alt="vision" />
      </div>
    </div>

    <div className={`${styles.container} ${styles.mission}`}>
      <div className={styles.content__media}>
        <img src={pic} alt="mission" />
      </div>
      <div className={styles.content__text}>
        <h2>Our mission</h2>
        <p>{data.mission}</p>
      </div>
    </div>
  </Section>
);
