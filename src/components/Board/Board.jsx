import React from 'react';

import uniqid from 'uniqid';

import NavButton from 'src/shared/Buttons/NavButton/NavButton';
import GoNextBtn from 'src/shared/Buttons/GoNextBtn/GoNextBtn';

import useMedia from 'src/hooks/useMedia';

import BG from 'src/assets/pics/bg/bg5.jpg';
import styles from './style.module.scss';

const breakpoints = [
  '(min-width: 1600px)',
  '(min-width: 1400px)',
  '(min-width: 1200px)',
  '(min-width: 1000px)',
  '(min-width: 800px)'
];

export default ({ data }) => {
  const sizes = useMedia(breakpoints, [6, 5, 4, 3, 2], 2);

  const bgSize = {
    width: sizes <= 2 ? 'auto' : 150 * sizes,
    height: sizes <= 2 ? 'calc(100vh - 7.6rem - 6rem)' : 760
  };

  return (
    <section className={styles.container} style={{ minHeight: bgSize.height }}>
      <div
        className={styles.inner}
        style={{ paddingRight: sizes > 2 ? bgSize.width + 30 : 0 }}
      >
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

      {sizes >= 3 && (
        <div
          className={styles.bg}
          style={{ width: bgSize.width, height: bgSize.height }}
        >
          <img src={BG} alt="bg" />
          <svg
            width={bgSize.width}
            height={bgSize.height}
            viewBox={`0 0 ${bgSize.width} ${bgSize.height}`}
          >
            <path
              d={`M ${bgSize.width} 760 L ${bgSize.width} 760 L 120 620 C 20 580 0 480 40 420 L 160 180 L 240 0 L 0 0 L 0 ${bgSize.height} L ${bgSize.width} ${bgSize.height} L ${bgSize.width} 760`}
              fill="white"
              fillOpacity="1"
            />
            <path
              d={`M ${bgSize.width} 760 L ${bgSize.width} 760 L 120 620 C 20 580 0 480 40 420 L 160 180 L 240 0 L ${bgSize.width} 0 L ${bgSize.width} 760 `}
              fill="rgb(24, 67, 140)"
              fillOpacity="0.7"
            />
          </svg>
        </div>
      )}
      <div className={styles.nav}>
        <GoNextBtn link="/#industries" />
      </div>
    </section>
  );
};
