/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';

import uniqid from 'uniqid';
import Slider from 'react-slick';

import { MdArrowForward as Icon } from 'react-icons/md';
import FeedbackBlock from 'src/shared/Blocks/FeedbackBlock/FeedbackBlock';

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
          <button type="button" onClick={() => this.slider.slickPrev()}>
            <Icon color="#34d2d2" size="3rem" />
          </button>
          <div style={{ width: '80%', zIndex: 1 }}>
            <Slider
              ref={c => {
                this.slider = c;
              }}
              {...settings}
              style={{ display: 'inline' }}
            >
              {items.map((item, idx) => (
                <div
                  style={{
                    textAlign: 'center'
                  }}
                  index={idx}
                  key={uniqid()}
                >
                  <div
                    style={{
                      minWidth: 170,
                      textAlign: 'center',
                      height: 36
                    }}
                  >
                    {item.company.name}
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <button type="button" onClick={() => this.slider.slickNext()}>
            <Icon color="#34d2d2" size="3rem" />
          </button>
          <div className={styles.frame}>
            <Frame size="16rem" color="#ccc" />
          </div>
        </div>

        <FeedbackBlock data={items[current]} />
      </>
    );
  }
}
