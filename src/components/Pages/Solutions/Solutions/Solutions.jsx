import React from 'react';

import Section from 'src/shared/Wrappers/Section/Section';
import Plates from 'src/components/Plates/Plates';

import styles from './style.module.scss';

const platesData = [
  {
    title: ' ERP Systems  ',
    link: '/',
    description:
      ' ERP Systems enterprise software development for various industry verticals, having learned all the requirements, standards and minor nuances, which helps us successfully share our knowledge of enterprise resource planning. We develop custom ERP software, build their individual components, and offer implementation services. Our custom ERP software allows getting a set of business management tools and brings value to every functional area of enterprise.'
  },
  {
    title: '  Document Management Systems ',
    link: '/',
    description:
      'Document management software converts documents into valuable data that are subsequently used in the workflow. This software also speeds up decision-making and helps businesses go paperless thus making their workflow more secure and cheaper. We deliver custom systems that help manage complex business processes, provide complete visibility of the company’s document flow and productivity of the personnel.'
  },
  {
    title: '  Data Storage and Archiving Software ',
    link: '/',
    description:
      'Enterprises produce and utilize large amounts of data and face the problems of data storage and archiving. Our software engineers have first-hand experience in building secure and expandable storage software that enables long-term data retention and frees up operational storage space, which eventually improves workflow efficiency and flexibility and reduces costs.'
  },
  {
    title: ' Infrastructure Management   ',
    link: '/',
    description:
      'Enterprises have a complex infrastructure to manage and monitor. In the cases when even implementing inventory management is problematic, infrastructure management software come in handy. Such software connects all the systems and employees within an organization, supports business transactions and processes, ensures data storage, processing, reporting, and more.'
  },
  {
    title: ' CRM  ',
    link: '/',
    description:
      'Сustomer relationship management systems assist marketing, sales and business development departments in sales enablement, lead management, marketing automation, customer service improvement, data analytics, reporting, etc. We build CRM systems from scratch as well as customize, integrate and re-implement the existing systems.'
  },
  {
    title: '  Logistics & Supply Chain Management  ',
    link: '/',
    description:
      'As a technology leader, CleverSoft understands the needs of logistics specialists and specifics of logistics departments within large companies. We integrate logistics software into the single corporate ERP system that helps manage logistics and transportation as well as engages third-party logistics services.'
  },
  {
    title: ' Financial Software ',
    link: '/',
    description:
      'Financial departments of large enterprises require sophisticated and secure analytical software to analyze sales, cash flow, overall return, and operating income. This software identifies fraud and ensures an operational and strategic analysis and real-time analytics. Such systems also provide assistance in making accurate forecasts and taking strategic decisions.'
  }
];

export default () => (
  <Section
    label="Services"
    heading="Custom software development services we offer"
    css={styles.container}
  >
    <Plates content={platesData} wide />
  </Section>
);
