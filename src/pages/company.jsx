import React from 'react';

import Layout from 'src/components/Layout/Layout';

import Board from 'src/components/Board/Board';
import Slogan from 'src/components/Slogan/Slogan';
import Progress from 'src/components/Progress/Progress';
import History from 'src/components/Pages/Company/History/History';
import Mission from 'src/components/Pages/Company/Mission/Mission';
import Clients from 'src/components/Pages/Company/Clients/Clients';

const boardData = {
  heading: 'Custom Software Development Company',
  text:
    'CleverSoft provides price-competitive, robust and scalable software solutions to our customers, ranging from small firms to large enterprises and dynamic startups. We have extensive experience across a wide range of industries, including the financial, medical and trading sectors. As a leading global software development company, we pride ourselves on excelling in every client project we undertake.',
  buttons: [
    { text: 'Get free project estimate', link: '/', type: 'a' },
    { text: 'View portfolio', link: '/', type: 'd' }
  ]
};

export default () => (
  <Layout>
    <Board data={boardData} />
    <Slogan />
    <History />
    <Progress />
    <Mission />
    <Clients />
  </Layout>
);
