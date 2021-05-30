
import {addMessageAction, updateMessageBodyAction} from "../../redux/dialogReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogPage.dialogs,
        messages: state.dialogPage.messages,
        newMessageBody: state.dialogPage.newMessageBody,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sentMessage: () => dispatch(addMessageAction()),
        updateMessageBody: (body) => dispatch(updateMessageBodyAction(body))

    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;