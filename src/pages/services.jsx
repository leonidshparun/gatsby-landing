import React from 'react';

import Layout from 'src/components/Layout/Layout';

import Board from 'src/components/Board/Board';
import Solutions from 'src/components/Pages/Services/Solutions/Solutions';
import Services from 'src/components/Pages/Services/Services/Services';
import Industries from 'src/components/Pages/Services/Industries/Industries';
import Stack from 'src/components/Stack/Stack';
import Contacts from 'src/components/Contacts/Contacts';

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
    <Solutions />
    <Services />
    <Industries />
    <Stack />
    <Contacts />
  </Layout>
);
