import React, { useState, useCallback } from 'react';
import uniqid from 'uniqid';

import NavButton from 'src/shared/Buttons/NavButton/NavButton';
import GoNextBtn from 'src/shared/Buttons/GoNextBtn/GoNextBtn';
import breakpoints from 'src/styles/breakpoints';
import useMedia from 'src/hooks/useMedia';

import styles from './style.module.scss';

export default ({ data }) => {
  const [node, setNode] = useState(null);
  const ref = useCallback(el => {
    setNode(el);
  }, []);

  const sizes = useMedia(breakpoints, [6, 5, 4, 3, 2, 1, 1], 1);
  const showBackground = sizes >= 3;

  const bgConfig = {
    width: showBackground ? 150 * sizes : 'auto',
    height: showBackground ? 760 : 'calc(100vh - 13.6rem)'
  };

  return (
    <section
      ref={ref}
      className={styles.section}
      style={{ minHeight: bgConfig.height }}
    >
      {showBackground && (
        <div
          className={styles.background__container}
          style={{ width: bgConfig.width, height: bgConfig.height }}
        >
          <img src={data.bg} alt="bg" />
          <svg
            width={bgConfig.width}
            height={bgConfig.height}
            viewBox={`0 0 ${bgConfig.width} ${bgConfig.height}`}
          >
            <path
              d={`M ${bgConfig.width} 760 L ${bgConfig.width} 760 L 120 620 C 20 580 0 480 40 420 L 160 180 L 240 0 L 0 0 L 0 ${bgConfig.height} L ${bgConfig.width} ${bgConfig.height} L ${bgConfig.width} 760`}
              fill="white"
              fillOpacity="1"
            />
          </svg>
        </div>
      )}

      <div
        className={styles.content__container}
        style={{ paddingRight: showBackground ? bgConfig.width + 30 : 0 }}
      >
        <div className={styles.content}>
          <h2 className={styles.content__heading}>{data.heading}</h2>
          <p className={styles.content__text}>{data.text}</p>
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
