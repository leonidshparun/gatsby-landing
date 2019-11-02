import React from 'react';

import LogoIcon from './LogoIcon';

const LogoWithName = ({ name, size, color }) => (
  <>
    <LogoIcon size={`${size}rem`} color={color} />
    <span
      style={{
        fontSize: `${size}rem`,
        color,
        marginLeft: 4,
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 600
      }}
    >{` ${name}`}</span>
  </>
);

export default LogoWithName;
