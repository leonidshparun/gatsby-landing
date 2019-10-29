import React from 'react';

import styles from './style.module.scss';

import Form from './Form/Form';
import Contacts from './Contacts/Contacts';

export default () => {
  return (
    <div className={styles.container}>
      <Contacts />
      <Form />
    </div>
  );
};
