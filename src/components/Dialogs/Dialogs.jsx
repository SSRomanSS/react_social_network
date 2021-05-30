import classes from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import React from "react";




function Dialogs(props) {

    let DialogsData = props.dialogs.map(el => <Dialog name={el.name} id={el.id}/>);
    let MessagesData = props.messages.map(el => <Message message={el.message}/>);


    let sentMessage = () => props.sentMessage()


    let updateMessageBody = (e) => props.updateMessageBody(e.target.value)

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
                    <textarea onChange={updateMessageBody} value={props.newMessageBody} placeholder={'Input message'}/>
                </div>
                <div>
                    <button onClick={sentMessage}>Sent</button>
                </div>
            </div>


        </div>
    )
}

export default Dialogs;