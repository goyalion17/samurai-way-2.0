import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = props => {
  let dialogsElement = props.state.dialogs.map(d => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElement = props.state.messages.map(m => (
    <Message message={m.message} />
  ));

  let newMessageElement = React.createRef();

  let addMessage = () => {
    let text = newMessageElement.current.value;
    return alert(text);
  }

  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>{dialogsElement}</div>

        <div className={s.messages}>{messagesElement}</div>
      </div>
      <div>
        <textarea ref={newMessageElement}></textarea>
      </div>
      <button onClick={addMessage}>Add message</button>
    </div>
  );
};

export default Dialogs;
