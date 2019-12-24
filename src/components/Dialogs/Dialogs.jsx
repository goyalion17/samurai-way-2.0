import React from "react";
import s from "./Dialogs.module.css";

const Dialogs = props => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + " " + s.active}>Иринка</div>
        <div className={s.dialog}>Вантик</div>
        <div className={s.dialog}>Димыч</div>
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
