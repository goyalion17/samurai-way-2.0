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
      ]
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
    if (action.type === "ADD_POST") {
      const newPost = {
        id: 5,
        message: this._state.profile.newPostText,
        likesCount: 12
      };
      this._state.profile.posts.push(newPost);
      this._state.profile.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE_NEW_POST_TEXT") {
      this._state.profile.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  }
};

export default store;

window.store = store;
