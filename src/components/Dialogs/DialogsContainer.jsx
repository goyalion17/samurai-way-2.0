import React from "react";
import { connect } from "react-redux";
import { sendMessageCreater, updateNewMessageBodyCreater } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

let mapStateToPtops = state => {
  return {
    dialogs: state.dialogs
  };
};

let mapDispatchToProps = dispatch => {
  return {
    updateNewMessageBody: () => {
      dispatch(sendMessageCreater());
    },
    sendMessage: body => {
      dispatch(updateNewMessageBodyCreater(body));
    }
  };
};

const DialogsContainer = connect(mapStateToPtops, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
