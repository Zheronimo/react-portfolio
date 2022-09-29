import React from 'react';
import Tabs from '../../componets/tabs/Tabs';

import './admin.css';

const Admin = (props) => {
  return (
    <div className='admin'>
      <div className='admin__wrap'></div>
      <header className='admin__header'>
        <h1 className='admin__title'>Панель администрирования</h1>
        <a href='/' className='admin__link'>
          Вернуться на сайт
        </a>
      </header>
      <main className='admin__content'>
        <Tabs skills={props.skills} />
      </main>
    </div>
  );
};

export default Admin;
