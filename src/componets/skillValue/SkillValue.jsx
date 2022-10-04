import React, { useState } from 'react';
import './skillValue.css';

const SkillValue = () => {
  const [skillValue, setSkillValue] = useState('');
  const handleSkillValue = (event) => {
    const value = event.target.value;
    if (value >= 0 && value <= 100) {
      return setSkillValue(value);
    } else {
      return setSkillValue('');
    }
  };
  return (
    <input
      id='skill__value'
      type='number'
      className='skill__value'
      value={skillValue}
      onChange={(event) => handleSkillValue(event)}
    />
  );
};

export default SkillValue;
