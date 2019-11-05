import React from 'react';

import uniqid from 'uniqid';

import {
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlinePrinter
} from 'react-icons/ai';

import styles from './style.module.scss';

const departments = [
  {
    pos: 'USA Headquarters',
    dep: 'CleverSoft Corporation',
    phone: ' 1-800-200-9999',
    fax: ' 1-888-888-8888',
    adress: 'EffectiveSoft Ltd, London, United Kingdom',
    email: 'ask@cleversoft.usa.com'
  },
  {
    pos: 'UK Representatives',
    dep: 'CleverSoft Ltd.',
    phone: '+44 292 233 373',
    fax: '+44 252 323 373',
    adress: 'EffectiveSoft Ltd, London, United Kingdom',
    email: 'ask@cleversoft.uk.com'
  }
];

export default () => (
  <div className={styles.contact__info}>
    {departments.map(data => (
      <div key={uniqid()} className={styles.wrapper}>
        <h3>{data.pos}</h3>
        <div className={styles.inner__desc}>
          <h4>{data.dep}</h4>
          <p>{data.adress}</p>
        </div>

        <div className={styles.inner__links}>
          <div>
            <AiOutlinePhone size="3rem" />
            <a href={`tel:${data.phone}`}>{data.phone}</a>
          </div>
          <div>
            <AiOutlinePrinter size="3rem" />
            <a href={`tel:${data.fax}`}>{data.fax}</a>
          </div>
          <div>
            <AiOutlineMail size="3rem" />
            <a href={`mailto:${data.email}`}>{data.email}</a>
          </div>
        </div>
      </div>
    ))}
  </div>
);
