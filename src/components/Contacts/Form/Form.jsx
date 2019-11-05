import React from 'react';

import uniqid from 'uniqid';

import Button from 'src/shared/Buttons/NavButton/NavButton';

import styles from './style.module.scss';

const inputs = [
  {
    id: 'user_name',
    placeholder: 'Name *',
    type: 'text',
    class: ['contact__form_input', 'name', 'text'],
    tag: 'input'
  },
  {
    id: 'email',
    placeholder: 'E-mail *',
    type: 'email',
    class: ['contact__form_input', 'email', 'text'],
    tag: 'input'
  },
  {
    id: 'phone',
    placeholder: 'Phone number *',
    type: 'text',
    class: ['contact__form_input', 'phone', 'text'],
    tag: 'input'
  },
  {
    id: 'company',
    placeholder: 'Company',
    type: 'text',
    class: ['contact__form_input', 'company', 'text'],
    tag: 'input'
  },
  {
    id: 'message',
    placeholder: 'Message',
    type: 'text',
    class: ['contact__form_input', 'message', 'textarea'],
    tag: 'textarea',
    props: { rows: 10, cols: 40 }
  },
  {
    id: 'file',
    placeholder: 'file',
    type: 'file',
    class: ['contact__form_input', 'message', 'file'],
    tag: 'input'
  }
];

const inputProps = input => {
  return {
    type: input.type,
    name: input.id,
    placeholder: input.placeholder,
    value: '',
    id: input.id,
    onChange: () => {},
    ...input.props
  };
};

export default () => {
  return (
    <div className={styles.contact__form}>
      <h3>Send Us a Request</h3>
      <form>
        <div className={styles.contact_form_inputs}>
          {inputs.map(input => {
            const className = input.class.map(val => styles[val]).join(' ');
            return (
              <div key={uniqid()} className={className}>
                {React.createElement(input.tag || 'div', inputProps(input))}
              </div>
            );
          })}
        </div>
        <div style={{ paddingLeft: 10 }}>
          <Button text="Send" link="/" type="c" />
        </div>
      </form>
    </div>
  );
};
