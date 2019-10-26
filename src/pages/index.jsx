import React from 'react';

import Layout from 'src/components/Layout/Layout';

import Board from 'src/components/Pages/Main/Board/Board';
import Industries from 'src/components/Pages/Main/Industries/Industries';
import Statistics from 'src/components/Pages/Main/Statistics/Statistics';
import Testimonials from 'src/components/Pages/Main/Testimonials/Testimonials';
import Portfolio from 'src/components/Pages/Main/Portfolio/Portfolio';
import AboutUs from 'src/components/Pages/Main/AboutUs/AboutUs';
import News from 'src/components/Pages/Main/News/News';

export default () => (
  <Layout>
    <Board />
    <Industries />
    <Statistics />
    <Testimonials />
    <Portfolio />
    <AboutUs />
    <News />
  </Layout>
);
