import React from 'react';

import Layout from 'src/components/Layout/Layout';

import Board from 'src/components/Board/Board';

const boardData = {
  heading: 'Software Development Services',
  text:
    'With more than 20 years of experience, we do our best to provide outstanding custom software development services. By leveraging the latest tech stack and the best development practices, we help you bring your business to a new level. We pay close attention to detail and develop robust, feature-rich and user-oriented solutions.',
  buttons: [
    { text: 'Get project estimate', link: '/', type: 'a' },
    { text: 'View portfolio', link: '/', type: 'd' }
  ]
};

export default () => (
  <Layout>
    <Board data={boardData} />
  </Layout>
);
