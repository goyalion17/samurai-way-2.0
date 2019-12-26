import React from "react";
import {
  addPostActionCreater,
  updateNewPostTextActionCreater
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {store => {
        let state = store.getState();
        const addPost = () => {
          store.dispatch(addPostActionCreater());
        };

        let onPostChange = text => {
          let action = updateNewPostTextActionCreater(text);
          store.dispatch(action);
        };

        return (
          <MyPosts
            updateNewPostText={onPostChange}
            addPost={addPost}
            posts={state.profile.posts}
            newPostText={state.profile.newPostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
