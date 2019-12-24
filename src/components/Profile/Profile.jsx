import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
      <div>
        <div>
          <img alt='avatar' src='https://klike.net/uploads/posts/2019-03/1551511784_4.jpg' />
        </div>

        <div>
          ava+description
        </div>

        <MyPosts />
      </div>
    )
  }

export default Profile;