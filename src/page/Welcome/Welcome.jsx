import React from 'react';
import Btn from '../../componets/btn/Btn';
import Socials from '../../componets/socials/Socials';

import User from '../../componets/user/User';

import './welcome.css';

const Welcome = () => {
  return (
    <div className='welcome'>
      <a href='/' className='welcome__link'>
        Авторизироваться
      </a>
      <div className='welcom__content'>
        <div className='welcome__user'>
          <User />
          <Socials />
          <div className='welcome__btn'>
            <Btn link='/' text='Мои работы' className='btn btn--border' />
            <Btn link='/' text='Обо мне' className='btn btn--border' />
            <Btn link='/' text='Блог' className='btn' />
          </div>
        </div>
      </div>
      <footer className='welcome__footer'>
        <p>© Кириченко Евгений | Создано с любовью в LoftSchool | 2018</p>
      </footer>
    </div>
  );
};

export default Welcome;
