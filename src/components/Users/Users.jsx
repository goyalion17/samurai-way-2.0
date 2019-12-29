import React from "react";
import s from "./Users.module.css";

const Users = props => {
    if(props.users.length === 0) {
        props.setUsers(
            [{
                id: 1,
                photoUrl: 'https://f3.upet.com/S_1EXdk8VjyZzCKl0.jpg',
                followed: false,
                fullName: "Irina",
                status: "Hi",
                location: { city: 'Moscow', country: 'Russia' }
              },
              {
                id: 2,
                photoUrl: 'https://f3.upet.com/S_1EXdk8VjyZzCKl0.jpg',
                followed: true,
                fullName: "Vanja",
                status: "Hello",
                location: { city: 'Minsk', country: 'Belarus' }
              },
              {
                id: 3,
                photoUrl: 'https://f3.upet.com/S_1EXdk8VjyZzCKl0.jpg',
                followed: false,
                fullName: "Slava",
                status: "Ку",
                location: { city: 'Kiev', country: 'Ukraine' }
              }]
        )
    }
    

  return (
    <div>
      {props.users.map(u => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} className={s.userPhoto} />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Follow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Unfollow
                </button>
              )}
            </div>
          </span>

          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.city}</div>
              <div>{u.location.country}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
