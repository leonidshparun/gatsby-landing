import React from 'react';

import uniqid from 'uniqid';

import NavButton from 'src/shared/Buttons/NavButton/NavButton';
import breakpoints from 'src/styles/breakpoints';
import useMedia from 'src/hooks/useMedia';

import BG from 'src/assets/pics/bg/bg5.jpg';
import styles from './style.module.scss';

import GoNextButton from './GoNextButton/GoNextButton';

export default ({ data }) => {
  const sizes = useMedia(breakpoints, [6, 5, 4, 3, 2, 1], 2);
  const showBackground = sizes >= 3;

  const bgConfig = {
    width: showBackground ? 150 * sizes : 'auto',
    height: showBackground ? 760 : 'calc(100vh - 7.6rem - 6rem)'
  };

  return (
    <section
      className={styles.container}
      style={{ minHeight: bgConfig.height }}
    >
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

      {showBackground && (
        <div
          className={styles.background__container}
          style={{ width: bgConfig.width, height: bgConfig.height }}
        >
          <img src={BG} alt="bg" />
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
            <path
              d={`M ${bgConfig.width} 760 L ${bgConfig.width} 760 L 120 620 C 20 580 0 480 40 420 L 160 180 L 240 0 L ${bgConfig.width} 0 L ${bgConfig.width} 760 `}
              fill="rgb(24, 67, 140)"
              fillOpacity="0.7"
            />
          </svg>
        </div>
      )}

      <GoNextButton link="/" />
    </section>
  );
};
