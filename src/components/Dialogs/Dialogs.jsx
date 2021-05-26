import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

function Dialog(props) {
    return (
        <NavLink to={`/dialogs/${props.id}`}>
            <div className={classes.dialog}>
                {props.name}
            </div>
        </NavLink>
    )
}

function Message(props) {
    return (
        <div className={classes.message}>
            {props.message}
        </div>
    )
}





function Dialogs() {

    let DialogsData = [
    {id: '1', name: 'Oleg'},
    {id: '2', name: 'Roman'},
    {id: '3', name: 'Sasha'},
    {id: '5', name: 'Artem'},
    {id: '6', name: 'Dim'},
]
    let MessagesData = [
    {message: 'Hello'},
    {message: 'How are you?'},
    {message: 'Hi'},
    {message: 'Yo'},
    {message: 'Bye'},
]


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                { DialogsData.map(el => <Dialog name={el.name} id={el.id}/>) }

            </div>
            <div className={classes.messages}>
                { MessagesData.map(el => <Message message={el.message}/>) }
            </div>

        </div>
    )
}

export default Dialogs;