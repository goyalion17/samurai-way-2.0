import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";

const App = props => {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <div className="app-wrapper-content">
        <Route
          path="/profile"
          render={() => (
            <Profile state={props.state.profile} dispatch={props.dispatch} />
          )}
        />
        <Route
          path="/dialogs"
          render={() => <Dialogs state={props.state.dialogs} />}
        />
        {/* <Route path="/news" render={ () => <News />} />
          <Route path="/music" render={ () => <Music />} />
          <Route path="/settings" render={ () => <Settings />} /> */}
      </div>
    </div>
  );
};

export default App;

// Компонента - это функция, которая принимает props и возвращает jsx
