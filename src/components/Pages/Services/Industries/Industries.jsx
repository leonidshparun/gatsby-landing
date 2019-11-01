import React from 'react';

import Section from 'src/shared/Wrappers/Section/Section';
import Plates from 'src/components/Plates/Plates';

import NavButton from 'src/shared/Buttons/NavButton/NavButton';
import styles from './style.module.scss';

const platesData = [
  {
    title: ' Banking and Finance ',
    link: '/',
    description:
      'We provide custom app development services for the banking and finance industries. We build secure and reliable apps that aim to help you deal with lease, loan, and asset management, as well as market analysis and reporting. We create robust tools to optimize financial operations, enhance end-to-end security, and reduce fraud risks.'
  },
  {
    title: ' Trading ',
    link: '/',
    description:
      'We guarantee that you get a feature-rich trading application that provides security, reliability, and flawless performance. We build currency and cryptocurrency exchange apps and develop custom trading platforms and apps with instant access to real-time data on markets and incorporated reporting and charting tools.'
  },
  {
    title: ' Healthcare ',
    link: '/',
    description:
      'Healthcare players have to follow the established regulations and standards to deliver excellent services. Our custom applications are HIPAA compliant and meet the requirements of the ICD-10 coding system and the DICOM standard. We help healthcare providers, physicians and patients improve treatment results, manage medical practice, streamline doctor-patient communication, deal with payments, insurance, and claims.'
  },
  {
    title: ' Logistics and Transportation ',
    link: '/',
    description:
      'Custom applications in the logistics and transportation industry deal with the challenges that businesses face on a daily basis. We create ultimate solutions that perfectly fit any need and assist in supply chain management, route planning, mapping and navigation of various types of transport, fleet management and controlling, orders, and in-stock inventory management.'
  }
];

export default () => (
  <Section
    label="Industries"
    heading="Software development for"
    css={styles.container}
  >
    <Plates content={platesData} />

    <div className={styles.nav}>
      <NavButton text="See all industries" link="/" type="a" />
    </div>
  </Section>
);
