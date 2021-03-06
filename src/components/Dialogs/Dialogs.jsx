import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = props => {
  let state = props.dialogs;

  let dialogsElement = state.dialogs.map(d => (
    <DialogItem name={d.name} key={d.id} id={d.id} />
  ));

  let messagesElement = state.messages.map(m => (
    <Message message={m.message} key={m.id} />
  ));

  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  };

  let onNewMessageChange = e => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };

  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>{dialogsElement}</div>

        <div className={s.messages}>
          <div>{messagesElement}</div>
          <div>
            <div>
              <textarea
                value={newMessageBody}
                onChange={onNewMessageChange}
                placeholder="Enter your message"
              />
            </div>
            <div>
              <button onClick={onSendMessageClick}>Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
