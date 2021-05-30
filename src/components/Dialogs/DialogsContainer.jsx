
import React from "react";
import {addMessageAction, updateMessageBodyAction} from "../../redux/dialogReducer";
import Dialogs from "./Dialogs";



function DialogsContainer(props) {
    let state = props.store.getState();




    let sentMessage = () => props.store.dispatch(addMessageAction());
    let updateMessageBody = (body) => props.store.dispatch(updateMessageBodyAction(body))

    return (
        <Dialogs  sentMessage={sentMessage}
                  updateMessageBody={updateMessageBody}
                  dialogs={state.dialogPage.dialogs}
                  messages={state.dialogPage.messages}
                  newMessageBody={state.dialogPage.newMessageBody}/>
    )
}

export default DialogsContainer;