import React from 'react';
import s from '../ProfileInfo/ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src='https://viajareafilipinas.com/wp-content/uploads/2020/04/Playa-Blanca-Bor%C3%A1cay-2.jpg'/>
      </div>
      <div className={s.descriptionBlock}>
        avatar + description
      </div>

    </div>
  )
}

export default ProfileInfo;