import React from 'react';

import Layout from 'src/components/Layout/Layout';

import Board from 'src/components/Board/Board';

import Solutions from 'src/components/Pages/Solutions/Solutions/Solutions';
import Portfolio from 'src/components/Pages/Main/Portfolio/Portfolio';
import Stack from 'src/components/Stack/Stack';
import Contacts from 'src/components/Contacts/Contacts';
import Background from 'src/assets/pics/bg/solutions.jpg';

const boardData = {
  heading: 'Custom Software Solutions Development',
  bg: Background,
  text:
    'Having 20 years of hands-on experience, CleverSoft offers a pool of software development engineers that provide best-in-class solutions for customers helping realize their full potential and improve day-to-day workflow.',
  buttons: [
    { text: 'Get project estimate', link: '/contacts', type: 'a' },
    { text: 'View portfolio', link: '/portfolio', type: 'd' }
  ]
};

export default () => (
  <Layout>
    <Board data={boardData} />
    <Solutions />
    <Portfolio />
    <Stack />
    <Contacts />
  </Layout>
);
