/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';

import FeedbackBlock from 'src/shared/Blocks/FeedbackBlock/FeedbackBlock';
import Line from './Line/SliderContent';

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

    const updateFeedbackBlock = (current, next) =>
      this.setState({ activeSlide: next });

    const { items } = this.props;
    const { activeSlide } = this.state;

    const current = (activeSlide + middleIndex) % items.length;

    const itemsForLine = items.map(item => item.company.name);

    return (
      <>
        <Line withFrame action={updateFeedbackBlock} items={itemsForLine} />

        <FeedbackBlock data={items[current]} />
      </>
    );
  }
}
