import React from 'react';

import styles from './style.module.scss';

export default () => (
  <section className={styles.container}>
    <div className={styles.wrapper}>
      <svg
        className={styles.slogan__svg}
        width="500"
        height="160"
        viewBox="0 0 500 160"
      >
        <defs>
          <linearGradient
            x1="-4.99999"
            y1="-2.61463"
            x2="506.376"
            y2="76.0353"
            id="gradient"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#005FAF" />
            <stop offset="1" stopColor="#34D2D2" />
          </linearGradient>
        </defs>
        <text fill="url(#gradient)" x="0" y="50" textAnchor="middle">
          <tspan x="250">Looking beyond</tspan>
          <tspan x="250" y="125">
            the possible
          </tspan>
        </text>
      </svg>
    </div>
  </section>
);
