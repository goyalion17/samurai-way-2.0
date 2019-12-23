import React from 'react';
import s from './Header.module.css';

const Header = () => {
  return (
      <div className={s.header}>
        <div>
          <img alt='header-logo' className={s.logo} src='https://i.pinimg.com/originals/84/b1/06/84b1065e798f61aa80b8670a4b6fbb4d.png' />
        </div>
      </div>
    )
  }

export default Header;