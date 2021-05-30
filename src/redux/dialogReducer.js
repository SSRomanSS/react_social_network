const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE'
const UPDATE_MESSAGE_BODY = 'UPDATE_MESSAGE_BODY'

const dialogReducer = (state, action) => {
    switch (action.type) {

           case(ADD_NEW_MESSAGE):
                let newMessage = {
                    message: state.newMessageBody,
                }
                state.messages.push(newMessage);
                state.newMessageBody = '';
                return state;
            case(UPDATE_MESSAGE_BODY):
                state.newMessageBody = action.newBody;
                return state;
            default:
                return state;

        }

}

export const addMessageAction = () => ({type: ADD_NEW_MESSAGE});
export const updateMessageBodyAction = (body) => ({type: UPDATE_MESSAGE_BODY, newBody: body});

export default dialogReducer;