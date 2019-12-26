import React from "react";
import {
  addPostActionCreater,
  updateNewPostTextActionCreater
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

let mapStateToPtops = state => {
  return {
    posts: state.profile.posts,
    newPostText: state.profile.newPostText
  };
};

let mapDispatchToProps = dispatch => {
  return {
    updateNewPostText: text => {
      dispatch(updateNewPostTextActionCreater(text));
    },
    addPost: () => {
      dispatch(addPostActionCreater());
    }
  };
};

const MyPostsContainer = connect(mapStateToPtops, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
