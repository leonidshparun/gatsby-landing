import React from 'react';

import Section from 'src/shared/Wrappers/Section/Section';
import Plates from 'src/components/Plates/Plates';

import styles from './style.module.scss';

const platesData = [
  {
    title: 'Mobile Applications',
    link: '/',
    description:
      'We help you go mobile by creating unique apps with cross-device compatibility and an active layout. We also provide a cross-operating system check with our proprietary compatibility matrix. Our experts know how to turn the customer’s ideas into mobile apps that are easy to use, look appealing and smoothly perform on any device.'
  },
  {
    title: 'Web Applications',
    link: '/',
    description:
      'CleverSoft provides appealing web applications that offer high scalability, responsive design, and rich functionality. We always stay up to date with the latest web development trends and technologies to develop CMS-based and custom websites, web portals, web-enabled custom business applications, and web services.'
  },
  {
    title: 'Desktop Applications',
    link: '/',
    description:
      'Whatever your corporate environment, hardware and OS in place, we employ the appropriate technology, framework and language to deliver a turnkey solution. We create cross-platform enterprise desktop software, utilities, and plug-ins. To address your needs we develop custom applications such as document and knowledge management software, BI solutions and data analysis systems, ERP and CRM systems.'
  },
  {
    title: 'Cloud Applications',
    link: '/',
    description:
      'Businesses that want to gain extra reliability, scalability and data security, cut costs and boost mobility migrate to the cloud. We develop systems that are optimized for specific cloud service providers (Azure, AWS, Google cloud, etc.). We also develop cloud-based platforms and provide cloud migration services with complete or partial system reengineering, maintenance, and support services.'
  }
];

export default () => (
  <Section
    label="Solutions"
    heading="We provide custom software development of"
    css={styles.container}
  >
    <Plates content={platesData} />
  </Section>
);
