import React from 'react';

import uniqid from 'uniqid';

import styles from './style.module.scss';

const progress = [
  { value: '20', label: 'years of experience in the IT field' },
  { value: '250+', label: 'in-house experts' },
  { value: '500+', label: 'clients across the globe' },
  { value: '840', label: 'projects in different business domains' }
];

export default () => (
  <section className={styles.container}>
    <div className={styles.wrapper}>
      <ul className={styles.progress__container}>
        {progress.map(item => (
          <li key={uniqid()} className={styles.progress__item}>
            <p className={styles.progress__item_value}>{item.value}</p>
            <p className={styles.progress__item_label}>{item.label}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
