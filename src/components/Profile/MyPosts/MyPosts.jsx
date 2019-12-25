import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = props => {
  let postsElemets = props.posts.map(p => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  const addPost = () => {
    let text = newPostElement.current.value;
  };

  return (
    <div className={s.postsBlock}>
      <div>
        <h4>My posts</h4>
        <div>
          <div>
            <textarea ref={newPostElement}></textarea>
          </div>
          <div>
            <button onClick={addPost}>Add post</button>
          </div>
        </div>
      </div>

      <div className={s.posts}>{postsElemets}</div>
    </div>
  );
};

export default MyPosts;
