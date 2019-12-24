import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route, BrowserRouter } from "react-router-dom";

const App = props => {
  let posts = [
    { id: 1, message: "Hi", likesCount: 15 },
    { id: 2, message: "Hello", likesCount: 45 },
    { id: 3, message: "Yo", likesCount: 27 },
    { id: 4, message: "What's up", likesCount: 9 }
  ];

  let dialogs = [
    { id: 1, name: "Иринка" },
    { id: 2, name: "Вантик" },
    { id: 3, name: "Димыч" }
  ];

  let messages = [
    { id: 1, message: "Привет" },
    { id: 2, message: "Ку" },
    { id: 3, message: "Хаюшки" }
  ];
  
  return (
    <BrowserRouter>
    
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="app-wrapper-content">
          <Route path="/profile" render={ () => <Profile posts={posts} />} />
          <Route path="/dialogs" render={ () => <Dialogs dialogs={dialogs} messages={messages} />} />
          {/* <Route path="/news" render={ () => <News />} />
          <Route path="/music" render={ () => <Music />} />
          <Route path="/settings" render={ () => <Settings />} /> */}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

// Компонента - это функция, которая принимает props и возвращает jsx
