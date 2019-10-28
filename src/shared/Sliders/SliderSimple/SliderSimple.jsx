/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';

import uniqid from 'uniqid';

import { MdArrowForward as Icon } from 'react-icons/md';

import Slider from 'react-slick';

import styles from './style.module.scss';
import './slider.scss';

export default class SlickSLider extends Component {
  render() {
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };

    const { items, itemWidth, itemHeight } = this.props;
    return (
      <>
        <div className={styles.controls}>
          <button
            type="button"
            onClick={() => {
              this.slider.slickPrev();
            }}
          >
            <Icon color="#34d2d2" size="3rem" />
          </button>
          <button
            type="button"
            onClick={() => {
              this.slider.slickNext();
            }}
          >
            <Icon color="#34d2d2" size="3rem" />
          </button>
        </div>
        <Slider
          ref={c => {
            this.slider = c;
          }}
          {...settings}
        >
          {items.map((item, idx) => (
            <div index={idx} key={uniqid()}>
              <div
                style={{
                  width: itemWidth,
                  height: itemHeight,
                  margin: 10
                }}
              >
                {item}
              </div>
            </div>
          ))}
        </Slider>
      </>
    );
  }
}
