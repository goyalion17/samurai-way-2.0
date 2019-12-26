import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
  addPostActionCreater,
  updateNewPostTextActionCreater
} from "./../../../redux/profile-reducer";

const MyPosts = props => {
  let postsElemets = props.posts.map(p => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  const addPost = () => {
    props.dispatch(addPostActionCreater());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreater(text);
    props.dispatch(action);
  };

  return (
    <div className={s.postsBlock}>
      <div>
        <h4>My posts</h4>
        <div>
          <div>
            <textarea
              onChange={onPostChange}
              ref={newPostElement}
              value={props.newPostText}
            />
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
