import React, { useState } from 'react';

import uniqid from 'uniqid';

import icon from 'src/assets/icons/right-arrow.inline.svg';

import styles from './style.module.scss';

const Carousel = ({ items, itemWidth, itemHeight }) => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const totalElements = items.length;
  const ItemsInView = 3;

  const space = 40;
  const wrapperPadding = 10;

  const sliderWidth = totalElements * itemWidth + (totalElements - 1) * space;
  const visibleWidth =
    ItemsInView * itemWidth + (ItemsInView - 1) * space + wrapperPadding * 2;

  return (
    <>
      <div className={styles.controls}>
        <button
          disabled={currentIdx <= 0}
          type="button"
          onClick={() => setCurrentIdx(currentIdx - 1)}
        >
          <img src={icon} alt="prev item" width={24} />
        </button>
        <button
          disabled={currentIdx >= totalElements - ItemsInView}
          type="button"
          onClick={() => setCurrentIdx(currentIdx + 1)}
        >
          <img src={icon} alt="next item" width={24} />
        </button>
      </div>

      <div
        className={styles.wrapper}
        style={{
          width: visibleWidth,
          padding: wrapperPadding
        }}
      >
        <div
          className={styles.content}
          style={{
            width: sliderWidth,
            transform: `translateX(${currentIdx * -(itemWidth + space)}px)`
          }}
        >
          {items.map(item => (
            <div
              className={styles.item__wrapper}
              key={uniqid()}
              style={{
                width: itemWidth,
                height: itemHeight
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Carousel;
