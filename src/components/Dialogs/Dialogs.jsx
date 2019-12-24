import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = props => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = props => {
  return <div className={s.message}>{props.message}</div>;
};

const Dialogs = props => {
  let dialogsData = [
    { id: 1, name: "Иринка" },
    { id: 2, name: "Вантик" },
    { id: 3, name: "Димыч" }
  ];
  let messagesData = [
    { id: 1, message: "Привет" },
    { id: 2, message: "Ку" },
    { id: 3, message: "Хаюшки" }
  ];
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
      </div>

      <div className={s.messages}>
        <Message message={messagesData[0].message} />
      </div>
    </div>
  );
};

export default Dialogs;
