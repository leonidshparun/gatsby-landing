/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';

import uniqid from 'uniqid';
import Slider from 'react-slick';

import Button from '../../Button/Button';
import Frame from '../Frame/Frame';

import styles from './style.module.scss';

export default class SlickSLider extends Component {
  render() {
    const slidesToShow = 5;

    const { items, withFrame, action } = this.props;
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow,
      slidesToScroll: 1,
      beforeChange: action || null
    };

    return (
      <div className={styles.container}>
        <Button
          action={() => {
            this.slider.slickPrev();
          }}
        />
        <div style={{ width: '80%', zIndex: 1 }}>
          <Slider
            ref={c => {
              this.slider = c;
            }}
            {...settings}
            style={{ display: 'inline' }}
          >
            {items.map((item, idx) => (
              <div index={idx} key={uniqid()}>
                <div style={{ textAlign: 'center' }}>{item}</div>
              </div>
            ))}
          </Slider>
        </div>
        <Button
          action={() => {
            this.slider.slickNext();
          }}
        />
        {withFrame ? (
          <div className={styles.frame}>
            <Frame size="16rem" color="#ccc" />
          </div>
        ) : null}
      </div>
    );
  }
}
