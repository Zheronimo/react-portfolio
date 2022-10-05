import React, { useState } from 'react';
import Btn from '../../componets/btn/Btn';
import Socials from '../../componets/socials/Socials';
import User from '../../componets/user/User';

import './welcome.css';

const Welcome = () => {
  const [rotateUser, setRotateUser] = useState('welcome__user');
  const [rotateAutor, setRotateAutor] = useState('welcome__autor');

  const flipCart = (e) => {
    e.preventDefault();
    rotateUser === 'welcome__user'
      ? setRotateUser('welcome__user welcome__user--rotate')
      : setRotateUser('welcome__user');
    rotateAutor === 'welcome__autor'
      ? setRotateAutor('welcome__autor welcome__autor--rotate')
      : setRotateAutor('welcome__autor');
  };

  return (
    <div className='welcome'>
      {/* <a href='/' className='welcome__link'>
        Авторизироваться
      </a> */}
      <Btn
        link='/'
        text='Авторизоваться'
        className='btn btn--radius welcome__link'
        onClick={flipCart}
      />
      <div className='welcom__content'>
        <div className={rotateUser}>
          <User />
          <Socials />
          <div className='welcome__btn'>
            <Btn link='/' text='Мои работы' className='btn btn--border' />
            <Btn link='/' text='Обо мне' className='btn btn--border' />
            <Btn link='/' text='Блог' className='btn' />
          </div>
        </div>
        <div className={rotateAutor}>
          <h1>АВтор</h1>
        </div>
      </div>
      <footer className='welcome__footer'>
        <p>© Кириченко Евгений | Создано с любовью в LoftSchool | 2018</p>
      </footer>
    </div>
  );
};

export default Welcome;
