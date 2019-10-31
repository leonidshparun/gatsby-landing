import React from 'react';

import NavButton from 'src/shared/Buttons/NavButton/NavButton';

import GoNextBtn from 'src/shared/Buttons/GoNextBtn/GoNextBtn';

import styles from './style.module.scss';

export default () => (
  <section className={styles.container}>
    <div className={styles.outer}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <h2>Custom Software Development Company</h2>

          <p>
            CleverSoft provides price-competitive, robust and scalable software
            solutions to our customers, ranging from small firms to large
            enterprises and dynamic startups. We have extensive experience
            across a wide range of industries, including the financial, medical
            and trading sectors. As a leading global software development
            company, we pride ourselves on excelling in every client project we
            undertake.
          </p>
          <NavButton text="Get free project estimate" link="/" type="b" />
        </div>
      </div>
    </div>

    <div className={styles.nav}>
      <GoNextBtn link="/#industries" />
    </div>
  </section>
);
