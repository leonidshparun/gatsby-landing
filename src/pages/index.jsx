import React from 'react';

import Layout from 'src/components/Layout/Layout';

import Board from 'src/components/Pages/Main/Board/Board';
import Industries from 'src/components/Pages/Main/Industries/Industries';
import Progress from 'src/components/Progress/Progress';
import Testimonials from 'src/components/Pages/Main/Testimonials/Testimonials';
// import Portfolio from 'src/components/Pages/Main/Portfolio/Portfolio';
import AboutUs from 'src/components/Pages/Main/AboutUs/AboutUs';
import News from 'src/components/Pages/Main/News/News';
import Contacts from 'src/components/Contacts/Contacts';

import Background from 'src/assets/pics/bg/index.jpg';

const boardData = {
  heading: 'Custom Software Development Company',
  bg: Background,
  text: `CleverSoft provides price-competitive, robust and scalable software
            solutions to our customers, ranging from small firms to large
            enterprises and dynamic startups. We have extensive experience
            across a wide range of industries, including the financial, medical
            and trading sectors. As a leading global software development
            company, we pride ourselves on excelling in every client project we
            undertake.`,
  buttons: [{ text: 'Get free project estimate', link: '/contacts', type: 'c' }]
};

export default () => (
  <Layout>
    <Board data={boardData} />
    <Industries />
    <Progress />
    <Testimonials />
//    <Portfolio /> 
    <AboutUs />
    <News />
    <Contacts />
  </Layout>
);
