import React from 'react';

import Layout from 'src/components/Layout/Layout';

import Board from 'src/components/Board/Board';

const boardData = {
  heading: 'Custom Software Solutions Development',
  text:
    'Having 20 years of hands-on experience, CleverSoft offers a pool of software development engineers that provide best-in-class solutions for customers helping realize their full potential and improve day-to-day workflow.',
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
