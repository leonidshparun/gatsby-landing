import React from 'react';
import { Link } from 'gatsby';

export default ({ menuLinks }) => (
  <nav>
    <ul>
      {menuLinks.map(link => (
        <li key={link.name}>
          <Link to={link.link}>{link.name}</Link>
        </li>
      ))}
    </ul>
  </nav>
);
