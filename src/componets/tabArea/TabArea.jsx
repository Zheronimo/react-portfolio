import React from 'react';
import './tabArea.css';

const TabArea = ({ placeholder }) => {
  return <textarea className='tabs__area' placeholder={placeholder}></textarea>;
};

export default TabArea;
