import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = props => {
  let dialogs = [
    { id: 1, name: "Иринка" },
    { id: 2, name: "Вантик" },
    { id: 3, name: "Димыч" }
  ];

  let messages = [
    { id: 1, message: "Привет" },
    { id: 2, message: "Ку" },
    { id: 3, message: "Хаюшки" }
  ];

  let dialogsElement = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);

  let messagesElement = messages.map(m => <Message message={m.message} />);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElement}</div>

      <div className={s.messages}>{messagesElement}</div>
    </div>
  );
};

export default Dialogs;
