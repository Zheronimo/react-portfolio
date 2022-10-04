import React from 'react';
import './TabInput.css';

const TabInput = ({ type, placeholder }) => {
  return <input type={type} className='tabs__input' placeholder={placeholder} />;
};

export default TabInput;
