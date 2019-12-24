import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

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

ReactDOM.render(
  <App posts={posts} dialogs={dialogs} messages={messages} />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
