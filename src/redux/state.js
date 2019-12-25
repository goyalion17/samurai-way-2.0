import { rerenderEntireTree } from "./../render";

let state = {
  profile: {
    posts: [
      { id: 1, message: "Hi", likesCount: 15 },
      { id: 2, message: "Hello", likesCount: 45 },
      { id: 3, message: "Yo", likesCount: 27 },
      { id: 4, message: "What's up", likesCount: 9 }
    ]
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

export let addPost = postMessage => {
  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 12
  };
  state.profile.posts.push(newPost);
  rerenderEntireTree(state);
};

export default state;
