import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (      
        <div className={s.posts}>
          <div className={s.item}>
            <img alt='postAvatar' src='http://www.youloveit.ru/uploads/posts/2016-05/1463918114_youloveit_ru_ledi_bag_i_super_kot_novye_avatarki06.png' />
            {props.message}            
          
            <div>
              <span>{props.likesCount} likes</span>
            </div>
          </div>
        </div>
    )
  }

export default Post;