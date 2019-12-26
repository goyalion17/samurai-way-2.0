import React from "react";
import { sendMessageCreater, updateNewMessageBodyCreater } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = props => {
  let state = props.store.getState().dialogs;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreater());
  };

  let onNewMessageChange = body => {
    props.store.dispatch(updateNewMessageBodyCreater(body));
  };

  return (
    <Dialogs
      updateNewMessageBody={onNewMessageChange}
      sendMessage={onSendMessageClick}
      dialogs={state}
    />
  );
};

export default DialogsContainer;
