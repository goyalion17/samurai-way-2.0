import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from 'react-router-dom';

const Dialogs = props => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + " " + s.active}>
          <NavLink to="/dialogs/1">Иринка</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/2">Вантик</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/3">Димыч</NavLink>
        </div>
      </div>

      <div className={s.messages}>
        <div className={s.message}>Привет</div>
        <div className={s.message}>Ку</div>
        <div className={s.message}>Хаюшки</div>
      </div>
    </div>
  );
};

export default Dialogs;
