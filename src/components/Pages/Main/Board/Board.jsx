import React, { useState, useCallback } from 'react';

import uniqid from 'uniqid';
import NavButton from 'src/shared/Buttons/NavButton/NavButton';
import GoNextBtn from 'src/shared/Buttons/GoNextBtn/GoNextBtn';

import styles from './style.module.scss';

export default ({ data }) => {
  const [node, setNode] = useState(null);
  const ref = useCallback(el => {
    setNode(el);
  }, []);

  return (
    <section ref={ref} className={styles.section}>
      <div className={styles.background__container}>
        <img src={data.bg} alt="bg" />
        <svg
          className={styles.svg}
          width="1920"
          height="272"
          viewBox="0 0 1920 272"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 109.988V272H1920V0L230.014 210.174C155.089 219.492 80.1453 193.012 27.7097 138.693L0 109.988Z"
            fill="white"
          />
        </svg>
      </div>

      <div className={styles.content__container}>
        <div className={styles.content}>
          <h2>{data.heading}</h2>

          <p>{data.text}</p>

          <div className={styles.content__buttons}>
            {data.buttons.map(item => (
              <NavButton
                key={uniqid()}
                text={item.text}
                link={item.link}
                type={item.type}
              />
            ))}
          </div>
        </div>
      </div>

      <div className={styles.nav}>
        <GoNextBtn node={node} />
      </div>
    </section>
  );
};
