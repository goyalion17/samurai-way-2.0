import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <img
        alt="avatar"
        src="https://klike.net/uploads/posts/2019-03/1551511784_4.jpg"
      />
      <div className={s.descriptionBlock}>ava+description</div>
    </div>
  );
};

export default ProfileInfo;
