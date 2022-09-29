import React, { useState } from 'react';
import Skill from '../skill/Skill';
import './tabs.css';
import image from './upload.png';

const Tabs = (props) => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className='tabs'>
      <ul className='tabs__list'>
        <li className={toggleState === 1 ? 'tabs__item tabs__item--active' : 'tabs__item'}>
          <button className='tabs__nav' onClick={() => toggleTab(1)}>
            Обо мне
          </button>
        </li>
        <li className={toggleState === 2 ? 'tabs__item tabs__item--active' : 'tabs__item'}>
          <button className='tabs__nav' onClick={() => toggleTab(2)}>
            Блог
          </button>
        </li>
        <li className={toggleState === 3 ? 'tabs__item tabs__item--active' : 'tabs__item'}>
          <button className='tabs__nav' onClick={() => toggleTab(3)}>
            Мои работы
          </button>
        </li>
      </ul>
      <div className={toggleState === 1 ? 'tabs__content tabs__content--active' : 'tabs__content'}>
        <h2 className='tabs__title'>Страница "Обо мне"</h2>
        <div className='tabs__skills'>
          <Skill skills={props.skills} />
        </div>
        <button className='tabs__btn'>Сохранить</button>
      </div>
      <div className={toggleState === 2 ? 'tabs__content tabs__content--active' : 'tabs__content'}>
        <h2 className='tabs__title'>Страница "Блога"</h2>
        <form className='tabs__form'>
          <h3 className='tabs__desc'>Добавить запись</h3>
          <input type='text' className='tabs__input' placeholder='Название' />
          <input type='text' className='tabs__input' placeholder='Дата' />
          <textarea className='tabs__area' placeholder='Содержание'></textarea>
        </form>
        <button className='tabs__btn'>Добавить</button>
      </div>
      <div className={toggleState === 3 ? 'tabs__content tabs__content--active' : 'tabs__content'}>
        <h2 className='tabs__title'>Страница "Мои работы"</h2>
        <form className='tabs__form'>
          <h3 className='tabs__desc'>Добавить работу</h3>
          <input type='text' className='tabs__input' placeholder='Название прооекта' />
          <input type='text' className='tabs__input' placeholder='Технологии' />
          <div className='tabs__upload file-upload'>
            <label htmlFor='file-upload__input' className='file-upload__label'>
              <input id='file-upload__input' className='file-upload__input' type='file' />
              <img className='file-upload__img' src={image} alt='картинка загрузки' />
              <span className='file-upload__text'>Загрузить картинку</span>
            </label>
          </div>
        </form>
        <button className='tabs__btn'>Добавить</button>
      </div>
    </div>
  );
};

export default Tabs;
