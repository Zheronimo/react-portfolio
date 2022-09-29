import React from 'react';
import './skill.css';

const Skill = (props) => {
  const skills = props.skills;
  const listItems = skills.map((item) => {
    return (
      <div key={item.title} className='skill'>
        <h3 key='1' className='skill__title'>
          {item.title}
        </h3>
        <ul className='skill__list'>
          {item.skill.map((item) => {
            return (
              <li key={item} className='skill__item'>
                <label htmlFor='skill__value' className='skill__name'>
                  {item}
                </label>
                <input id='skill__value' type='text' className='skill__value' />
                <span className='skill__percent'>%</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  });

  return <>{listItems}</>;
};

export default Skill;
