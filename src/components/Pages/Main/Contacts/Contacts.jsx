import React from 'react';

import Section from 'src/shared/Wrappers/Section/Section';
import ContactForm from 'src/components/ContactForm/ContactForm';

import styles from './style.module.scss';

export default () => {
  return (
    <Section
      css={styles.container}
      label="Contact us"
      heading="Let’s get started with CleverSoft!"
    >
      <ContactForm />
    </Section>
  );
};
