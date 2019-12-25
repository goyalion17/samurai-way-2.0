let rerenderEntireTree = () => {
  console.log("State is changed");
};

let state = {
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
};

window.state = state;

export const addPost = () => {
  const newPost = {
    id: 5,
    message: state.profile.newPostText,
    likesCount: 12
  };
  state.profile.posts.push(newPost);
  state.profile.newPostText = "";
  rerenderEntireTree(state);
};

export const updateNewPostText = newText => {
  state.profile.newPostText = newText;
  rerenderEntireTree(state);
};

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
}

export default state;
