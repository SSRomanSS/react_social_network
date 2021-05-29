import classes from './Dialog.module.css'
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


export default Dialog;