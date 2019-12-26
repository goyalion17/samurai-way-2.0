import React from "react";
import {
  sendMessageCreater,
  updateNewMessageBodyCreater
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {store => {
        let state = store.getState().dialogs;

        let onSendMessageClick = () => {
          store.dispatch(sendMessageCreater());
        };

        let onNewMessageChange = body => {
          store.dispatch(updateNewMessageBodyCreater(body));
        };

        return (
          <Dialogs
            updateNewMessageBody={onNewMessageChange}
            sendMessage={onSendMessageClick}
            dialogs={state}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
