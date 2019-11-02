/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';

import uniqid from 'uniqid';
import Slider from 'react-slick';

import Button from '../Button/Button';
import styles from './style.module.scss';
import './slider.scss';

export default class SlickSLider extends Component {
  render() {
    const { items, cfg, slidesToShow, showControls } = this.props;
    const settings = {
      ...cfg,
      slidesToShow
    };

    return (
      <>
        {showControls && (
          <div className={styles.controls}>
            <Button
              action={() => {
                this.slider.slickPrev();
              }}
            />
            <Button
              action={() => {
                this.slider.slickNext();
              }}
            />
          </div>
        )}
        <div style={{ marginTop: '4rem' }}>
          <Slider
            ref={c => {
              this.slider = c;
            }}
            {...settings}
          >
            {items.map((item, idx) => (
              <div index={idx} key={uniqid()}>
                <div style={{ margin: 10 }}>{item}</div>
              </div>
            ))}
          </Slider>
        </div>
      </>
    );
  }
}
