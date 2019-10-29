/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import Slider from 'react-slick';

import uniqid from 'uniqid';

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      arrows: false,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      pauseOnHover: false,
      cssEase: 'linear'
    };

    const { items, itemWidth, itemHeight } = this.props;
    return (
      <Slider {...settings}>
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
    );
  }
}
