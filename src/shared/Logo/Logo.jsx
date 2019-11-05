import React from 'react';

import { GiClover } from 'react-icons/gi';

const Logo = ({ name, size, color }) => (
  <>
    <GiClover size={`${size}rem`} color={color} />
    {name && (
      <span
        style={{
          fontSize: `${size}rem`,
          color,
          marginLeft: 4,
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 600
        }}
      >{`${name}`}</span>
    )}
  </>
);

export default Logo;
