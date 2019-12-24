import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route, BrowserRouter } from "react-router-dom";

const App = props => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="app-wrapper-content">
          <Route
            path="/profile"
            render={() => <Profile state={props.state.profile} />}
          />
          <Route
            path="/dialogs"
            render={() => (
              <Dialogs state={props.state.dialogs} />
            )}
          />
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
