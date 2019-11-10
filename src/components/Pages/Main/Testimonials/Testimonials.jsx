import React from 'react';

import useFeedbackQuery from 'src/hooks/query/useFeedbackQuery';

import Section from 'src/shared/Wrappers/Section/Section';
import SliderContent from 'src/shared/Sliders/SliderContent/SliderContent';

import breakpoints from 'src/styles/breakpoints';
import useMedia from 'src/hooks/useMedia';

export default () => {
  const data = useFeedbackQuery();
  const queryData = data.map(edge => {
    const {
      person: {
        image: {
          fixed: { src }
        },
        name,
        position,
        company: {
          logo: {
            fixed: { src: companyLogoSrc }
          }
        }
      },
      text: {
        content: [
          {
            content: [{ value }]
          }
        ]
      },
      company
    } = edge.node;
    return {
      person: { name, position, src },
      feedback: value,
      company: { name: company, companyLogoSrc }
    };
  });

  const slidesToShow = useMedia(breakpoints, [5, 5, 5, 5, 3, 3, 1], 1);
  return (
    <Section label="Testimonials" heading="Our customers say">
      <div>
        <SliderContent
          slidesToShow={slidesToShow}
          items={queryData}
          itemWidth={100}
          itemHeight={100}
        />
      </div>
    </Section>
  );
};
