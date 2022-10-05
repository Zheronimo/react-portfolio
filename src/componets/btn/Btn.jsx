import React from 'react';
import './btn.css';

const Btn = ({ link, text, className, onClick }) => {
  return (
    <a href={link} className={className} onClick={onClick}>
      {text}
    </a>
  );
};

export default Btn;
