import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';

const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <div>
          <img className='logo' src='https://i.pinimg.com/originals/84/b1/06/84b1065e798f61aa80b8670a4b6fbb4d.png' />
        </div>
      </header>

      <nav className='nav'>
        <div><a>Profile</a></div>
        <div><a>Messages</a></div>
        <div><a>News</a></div>
        <div><a>Music</a></div>
        <div><a>Settings</a></div>
      </nav>

      <div className='content'>
        <div>
          <img src='https://klike.net/uploads/posts/2019-03/1551511784_4.jpg' />
        </div>

        <div>
          ava+description
        </div>

        <div>
          My posts
          <div>
            New Post
          </div>
        </div>

        <div>
          post 1
        </div>
        <div>
          post 2
        </div>
      </div>
    </div>      
    )
  }

export default App;

// Компонента - это функция, которая принимает props и возвращает jsx