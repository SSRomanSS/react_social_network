import classes from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import React from "react";
import {Field, reduxForm} from 'redux-form'


function Dialogs(props) {

    let MessageForm = props => {
        // const {handleSubmit} = props
        return <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name={'newMessageBody'} placeholder={'Input message here'}/>
            </div>
            <div>
                <button>Add post</button>
            </div>


        </form>
    }

    let MessageReduxForm = reduxForm({
        // a unique name for the form
        form: 'message'
    })(MessageForm)

    let DialogsData = props.dialogs.map(el => <Dialog name={el.name} id={el.id}/>);
    let MessagesData = props.messages.map(el => <Message message={el.message}/>);

    let sentMessage = (data) => props.sentMessage(data.newMessageBody)



    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {DialogsData}

            </div>


            <div className={classes.messages}>
                {MessagesData}
            </div>


            <div className={classes.sentMessage}>
                <div>New message</div>
                <MessageReduxForm onSubmit={sentMessage}/>
            </div>


        </div>
    )
}

export default Dialogs;