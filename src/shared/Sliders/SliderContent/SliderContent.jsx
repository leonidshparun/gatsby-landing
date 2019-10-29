/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';

import uniqid from 'uniqid';
import Slider from 'react-slick';

import FeedbackBlock from 'src/shared/Blocks/FeedbackBlock/FeedbackBlock';

import Button from '../Button/Button';
import Frame from './Frame/Frame';

import styles from './style.module.scss';

export default class SlickSLider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0
    };
  }

  render() {
    const slidesToShow = 5;
    const middleIndex = Math.floor(slidesToShow / 2);

    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow,
      slidesToScroll: 1,
      beforeChange: (current, next) => this.setState({ activeSlide: next })
    };

    const { items } = this.props;
    const { activeSlide } = this.state;

    const current = (activeSlide + middleIndex) % items.length;

    return (
      <>
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
                  <div style={{ textAlign: 'center' }}>{item.company.name}</div>
                </div>
              ))}
            </Slider>
          </div>
          <Button
            action={() => {
              this.slider.slickNext();
            }}
          />
          <div className={styles.frame}>
            <Frame size="16rem" color="#ccc" />
          </div>
        </div>

        <FeedbackBlock data={items[current]} />
      </>
    );
  }
}
