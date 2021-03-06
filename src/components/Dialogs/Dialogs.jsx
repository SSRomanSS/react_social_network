import classes from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import React from "react";
import {Field, reduxForm} from 'redux-form'
import {customFormFields} from "../common/Forms/FormFields";
import {maxLength, required} from "../../utils/validators";


function Dialogs(props) {

    let length10 = maxLength(10)

    let MessageForm = props => {
        // const {handleSubmit} = props
        return <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={customFormFields}
                       name={'newMessageBody'}
                       placeholder={'Input message here'}
                       validate={[required, length10]}/>
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