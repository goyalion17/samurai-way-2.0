const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

let initialState = {
  posts: [
    { id: 1, message: "Hi", likesCount: 15 },
    { id: 2, message: "Hello", likesCount: 45 },
    { id: 3, message: "Yo", likesCount: 27 },
    { id: 4, message: "What's up", likesCount: 9 }
  ],
  newPostText: "it-codeis"
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 12
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ""
      };
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText
      };
    default:
      return state;
  }
};

export const addPostActionCreater = () => ({
  type: ADD_POST
});

export const updateNewPostTextActionCreater = text => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
});

export default profileReducer;
