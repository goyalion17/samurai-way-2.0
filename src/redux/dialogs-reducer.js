const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
  messages: [
    { id: 1, message: "Привет" },
    { id: 2, message: "Ку" },
    { id: 3, message: "Хаюшки" }
  ],
  dialogs: [
    { id: 1, name: "Иринка" },
    { id: 2, name: "Вантик" },
    { id: 3, name: "Димыч" }
  ],
  newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body
      };
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: "",
        messages: [...state.messages, { id: 4, message: body }]
      };
    default:
      return state;
  }
};

export const sendMessageCreater = () => ({
  type: SEND_MESSAGE
});

export const updateNewMessageBodyCreater = body => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body
});

export default dialogsReducer;
