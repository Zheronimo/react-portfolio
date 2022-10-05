import React from 'react';

import './user.css';
import avatar from './avatar.png';

const User = () => {
  return (
    <div className='user'>
      <div className='user__photo'>
        <div className='user__photo-avatar'>
          <img src={avatar} alt='фото пользователя' />
        </div>
      </div>
      <div className='user__name'>Евгений Кириченко</div>
      <div className='user__desc'>Личный сайт веб-разработчика</div>
    </div>
  );
};

export default User;
