import React from 'react';

import uniqid from 'uniqid';

import Section from 'src/shared/Section/Section';
import Carousel from 'src/shared/SlickSlider/SlickSlider';
import NewsBlock from 'src/shared/NewsBlock/NewsBlock';

const content = [
  {
    title: 'CleverSoft is Again in the List of the Top Software Companies',
    date: '3 month ago',
    minutes: 1,
    text:
      'GoodFirms, a reliable Washington, D. C. based research firm, pools efforts to identify the most outstanding custom software development.'
  },
  {
    title: 'CleverSoft is Again in the List of the Top Software Companies',
    date: '8 month ago',
    minutes: 4,
    text:
      'CleverSoft is listed in the rating as a top 20 custom software development company by SoftwareWorld.'
  },
  {
    title: 'CleverSoft Complies With GDPR',
    date: '10 month ago',
    minutes: 3,
    text:
      'In May General Data Protection Regulation enters into force strengthening and unifying data protection for individuals in the European Union.'
  },
  {
    title: 'Intellexer News Monitoring Update',
    date: '1 year ago',
    minutes: 2,
    text:
      'Our R&D department has combined cutting-edge intellectual technologies and the results of semantic research to bring about a proprietary solution – Intellexer News Monitoring.'
  },
  {
    title:
      'Effective Agile Strategies Panel Discussion at CleverSoft Office in London',
    date: '2 year ago',
    minutes: 1,
    text:
      'On Feb 19th, 2018 CleverSoft hosted a panel discussion on Effective Agile Strategies.'
  }
];

export default () => {
  const items = content.map(data => <NewsBlock key={uniqid()} data={data} />);
  return (
    <Section label="News" heading="Latest news">
      <Carousel items={items} itemWidth={320} itemHeight={520} />
    </Section>
  );
};
