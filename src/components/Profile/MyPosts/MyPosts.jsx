import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = props => {
  let posts = [
    { id: 1, message: "Hi", likesCount: 15 },
    { id: 2, message: "Hello", likesCount: 45 },
    { id: 3, message: "Yo", likesCount: 27 },
    { id: 4, message: "What's up", likesCount: 9 }
  ];

  let postsElemets = posts.map( p => <Post message={p.message} likesCount={p.likesCount} />)

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

      <div className={s.posts}>{postsElemets}</div>
    </div>
  );
};

export default MyPosts;
