import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = props => {
  return (
    <div className={s.postsBlock}>
      <div>
        <h4>My posts</h4>
        <div>
          <div>
            <textarea></textarea>
          </div>
          <div>
            <button>Add post</button>
          </div>
        </div>
      </div>

      <div className={s.posts}>
        <Post message="Hi" likesCount="15" />
        <Post message="Hello" likesCount="45" />
      </div>
    </div>
  );
};

export default MyPosts;
