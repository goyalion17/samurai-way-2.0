import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
  _state: {
    profile: {
      posts: [
        { id: 1, message: "Hi", likesCount: 15 },
        { id: 2, message: "Hello", likesCount: 45 },
        { id: 3, message: "Yo", likesCount: 27 },
        { id: 4, message: "What's up", likesCount: 9 }
      ],
      newPostText: "it-codeis"
    },

    dialogs: {
      messages: [
        { id: 1, message: "Привет" },
        { id: 2, message: "Ку" },
        { id: 3, message: "Хаюшки" }
      ],
      dialogs: [
        { id: 1, name: "Иринка" },
        { id: 2, name: "Вантик" },
        { id: 3, name: "Димыч" }
      ],
      newMessageBody: ""
    }
  },
  _callSubscriber() {
    console.log("State is changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profile = profileReducer(this._state.profile, action);
    this._state.dialogs = dialogsReducer(this._state.dialogs, action);

    this._callSubscriber(this._state);
  }
};

export default store;

window.store = store;

// action  - это объект, у которого, как минимум, есть свойство type
// reducer - это чистая функция, которая принимает state и action и возвращает новый state
