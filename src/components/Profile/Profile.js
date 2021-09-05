import React from 'react';
import s from '../Profile/Profile.module.css';
import MyPosts from '../MyPosts/MyPosts';

const Profile = () => {
  return (
    <div>
      <div>
        <img src='https://viajareafilipinas.com/wp-content/uploads/2020/04/Playa-Blanca-Bor%C3%A1cay-2.jpg'/>
      </div>
      <div>
        avatar + description
      </div>
      <MyPosts/>
    </div>
  )
}

export default Profile;