import classes from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import React from "react";
import {addMessageAction, updateMessageBodyAction} from "../../state";



function Dialogs(props) {

    let DialogsData = props.state.dialogs.map(el => <Dialog name={el.name} id={el.id}/>);
    let MessagesData = props.state.messages.map(el => <Message message={el.message}/>);


    let sentMessage = () => props.dispatch(addMessageAction());
    let updateMessageBody = (e) => props.dispatch(updateMessageBodyAction(e.target.value))

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                { DialogsData }

            </div>


            <div className={classes.messages}>
                { MessagesData }
            </div>


            <div className={classes.sentMessage}>
                <div>New message</div>
                <div>
                    <textarea onChange={updateMessageBody} value={props.state.newMessageBody} placeholder={'Input message'}/>
                </div>
                <div>
                    <button onClick={sentMessage}>Sent</button>
                </div>
            </div>


        </div>
    )
}

export default Dialogs;