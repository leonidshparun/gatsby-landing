import React from 'react';

import Layout from 'src/components/Layout/Layout';

import Board from 'src/components/Board/Board';
import Content from 'src/components/Pages/Industries/Content/Content';
import Stack from 'src/components/Stack/Stack';
import Contacts from 'src/components/Contacts/Contacts';
import Background from 'src/assets/pics/bg/industries.jpg';

const boardData = {
  heading: 'Industries',
  bg: Background,
  text:
    'CleverSoft provides best-in-class solutions across a number of industry verticals and helps businesses realize their potential and improve workflow. Our considerable experience in software development reinforced by a deep knowledge of the industries we work with allows us to add value to the projects and consider every detail so that our solutions comply with generally accepted standards.',
  buttons: [
    { text: 'Get project estimate', link: '/contacts', type: 'a' },
    { text: 'View portfolio', link: '/portfolio', type: 'd' }
  ]
};

export default () => (
  <Layout>
    <Board data={boardData} />
    <Content />
    <Stack />
    <Contacts />
  </Layout>
);
