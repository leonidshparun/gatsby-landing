import React from 'react';

import Section from 'src/shared/Wrappers/Section/Section';
import Plates from 'src/components/Plates/Plates';

import NavButton from 'src/shared/Buttons/NavButton/NavButton';
import styles from './style.module.scss';

const platesData = [
  {
    title: ' IT Consulting ',
    link: '/',
    description:
      'Having successfully completed a variety of projects for different industries and domains, we know all the bottlenecks of the development process as well as risks related to deployment and maintenance of custom applications. To avoid unnecessary costs and ensure a high quality of the developed systems, we provide comprehensive IT consulting services and actionable recommendations.'
  },
  {
    title: '  Business Analysis ',
    link: '/',
    description:
      'Business analysis is a milestone of a software development process as it helps to shape the project from the very start and facilitate communication between the project stakeholders. Our highly-qualified business analysts check background information, set business objectives, gather and document project requirements, identify and solve business problems and, if needed, suggest technical solutions.'
  },
  {
    title: '  System Analysis  ',
    link: '/',
    description:
      'Having relevant experience, we provide our customers with system requirements specifications - documentation that describes all the functions of a future solution. A specification includes various elements, determines the core business processes and the key performance features of the product.'
  },
  {
    title: ' Software Prototyping ',
    link: '/',
    description:
      'Software prototyping occupies a special place among our services as it helps us demonstrate the prototype of the future application to the customer. Prototyping proves to be mutually beneficial to both developers and customers helping them better understand the system`s requirements and estimate the scope of work.'
  }
];

export default () => (
  <Section
    label="Services"
    heading="Custom software development services we offer"
    css={styles.container}
  >
    <Plates content={platesData} wide />

    <div className={styles.nav}>
      <NavButton text="See all services" link="/" type="d" />
    </div>
  </Section>
);
