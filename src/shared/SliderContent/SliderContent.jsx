/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';

import uniqid from 'uniqid';

import { MdArrowForward as Icon } from 'react-icons/md';

import FeedbackBlock from 'src/shared/FeedbackBlock/FeedbackBlock';

import Slider from 'react-slick';

import styles from './style.module.scss';

const Active = () => {
  return (
    <svg
      width="197"
      height="142"
      viewBox="0 0 197 142"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d)">
        <path d="M16 10H181V90L99 120L16 90V10Z" fill="white" />
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="0"
          y="0"
          width="197"
          height="142"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="6" />
          <feGaussianBlur stdDeviation="8" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

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
          <button
            type="button"
            onClick={() => {
              this.slider.slickPrev();
            }}
          >
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
          <button
            type="button"
            onClick={() => {
              this.slider.slickNext();
            }}
          >
            <Icon color="#34d2d2" size="3rem" />
          </button>
          <div className={styles.active}>
            <Active size="16rem" color="#ccc" />
          </div>
        </div>

        <FeedbackBlock data={items[current]} />
      </>
    );
  }
}
