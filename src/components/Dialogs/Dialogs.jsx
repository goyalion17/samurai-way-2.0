import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import {
  updateNewMessageBodyCreater,
  sendMessageCreater
} from "./../../redux/dialogs-reducer";

const Dialogs = props => {
  let state = props.store.getState().dialogs;

  let dialogsElement = state.dialogs.map(d => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElement = state.messages.map(m => (
    <Message message={m.message} />
  ));

  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreater());
  };

  let onNewMessageChange = e => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreater(body));
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
