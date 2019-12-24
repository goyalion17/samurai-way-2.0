import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = props => {
  return (
    <div>
      <div>
        My posts
        <div>
          <textarea></textarea>
          <button>Add post</button>
        </div>
      </div>

      <Post message="Hi" likesCount="15" />
      <Post message="Hello" likesCount="45" />
    </div>
  );
};

export default MyPosts;
