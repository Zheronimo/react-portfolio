import React from 'react';
import Icon from '../icon/Icon';

import './socials.css';
const socials = [
  { link: 'https://www.facebook.com/zheronimo', id: 'fb' },
  { link: 'https://github.com/Zheronimo', id: 'gh' },
  {
    link: 'https://www.linkedin.com/in/%D0%B5%D0%B2%D0%B3%D0%B5%D0%BD%D0%B8%D0%B9-%D0%BA%D0%B8%D1%80%D0%B8%D1%87%D0%B5%D0%BD%D0%BA%D0%BE-3b2aa3146/',
    id: 'in',
  },
];

const Socials = () => {
  return (
    <ul className='socials'>
      {socials.map((icon) => {
        return (
          <li key={icon.id} className='socials__item'>
            <a href={icon.link} className='socials__link'>
              <Icon id={icon.id} />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;
