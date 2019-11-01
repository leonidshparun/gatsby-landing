import React from 'react';

import Layout from 'src/components/Layout/Layout';

import Board from 'src/components/Board/Board';
import Plates from 'src/components/Plates/Plates';
import Stack from 'src/components/Pages/Industries/Stack/Stack';

const boardData = {
  heading: 'Industries',
  text:
    'CleverSoft provides best-in-class solutions across a number of industry verticals and helps businesses realize their potential and improve workflow. Our considerable experience in software development reinforced by a deep knowledge of the industries we work with allows us to add value to the projects and consider every detail so that our solutions comply with generally accepted standards.',
  buttons: [
    { text: 'Get project estimate', link: '/', type: 'a' },
    { text: 'View portfolio', link: '/', type: 'd' }
  ]
};

const platesData = [
  {
    title: 'Healthcare',
    link: '/',
    description:
      'We leverage our wide experience to build custom HIPAA compliant and PHI secured software for hospitals, clinics, biotech companies, laboratories, pharma suppliers, medical equipment manufacturers, etc. We have expertise in building custom diagnostics and imaging software, EMR and EHR systems, practice management solutions, BI/ analytics systems, laboratory management systems, and more.'
  },
  {
    title: 'Trading',
    link: '/',
    description:
      'Traders and brokerages, trust funds, investment institutions, and financial establishments opt for high-quality solutions, and our seasoned experts are ready to meet them halfway and provide bespoke trading platforms, mobile apps for various platforms, analytical solutions, trading automation software, and more.'
  },
  {
    title: 'Banking and Finance',
    link: '/',
    description:
      'We are ready to assist financial establishments in providing tailor-made software to meet specific industry needs. We have expertise in building banking front- and back-office, business financial systems, risk management solutions, analytics software, payment and billing applications, etc. Our experts take advantage of the latest tech trends, including blockchain, AI and BI, to provide the most secure and reliable solutions to customers.'
  },
  {
    title: 'Telecommunications',
    link: '/',
    description:
      'The growing demand for fast connectivity, constantly changing security standards plus continuing device updates have resulted in a great need for high-quality telecom software. We develop business support systems, operations support systems, productivity and QoS solutions, digital media platforms, value-added services, and other telecom solutions.'
  },
  {
    title: 'Logistics and Transportation',
    link: '/',
    description:
      'Since 2000, we have been providing the logistics and transportation industry with advanced custom-tailored software: solutions for fleet, vehicle, containers and cargos management; navigation, routing optimization, controlling and mapping systems;  planning, booking and accounting applications; BI and reporting systems; warehouse management solutions, and more.'
  },
  {
    title: 'Education',
    link: '/',
    description:
      'To help our customers keep up to date with modern requirements for education, we provide custom learning management systems optimized for use with mobile devices and desktop computers. We deliver web solutions for all types of educational institutions. Leveraging our industry expertise , we develop platforms for online learning, as well as employee training solutions, learning management systems, scheduling, billing, and more.'
  },
  {
    title: 'Entertainment ',
    link: '/',
    description:
      'We offer custom solutions for companies engaged in the entertainment industry: media broadcasting and advertising companies, news agencies, gaming companies, music and movies studios, etc. We also embrace recent technology trends, including virtual and augmented reality, to help our customers draw a new audience and better engage existing users.'
  },
  {
    title: 'E-commerce',
    link: '/',
    description:
      'EffectiveSoft knows how to help online businesses to succeed by delivering custom e-commerce solutions. We have relevant experience in building e-commerce web and mobile-enabled systems, B2C/B2B e-commerce portals, e-shops, online marketplaces, and execution management systems, We are known experts in order tracking, BI/analytics, payment gateways development and integration, etc.'
  }
];

export default () => (
  <Layout>
    <Board data={boardData} />
    <Plates content={platesData} />
    <Stack />
  </Layout>
);
