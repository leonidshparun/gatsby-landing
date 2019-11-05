import React from 'react';

import Section from 'src/shared/Wrappers/Section/Section';

import Form from './Form/Form';
import Contacts from './Contacts/Contacts';

import styles from './style.module.scss';

export default () => {
  return (
    <Section
      css={styles.container}
      label="Contact us"
      heading="Let’s get started with CleverSoft!"
    >
      <div className={styles.wrapper}>
        <Contacts />
        <Form />
      </div>
    </Section>
  );
};
