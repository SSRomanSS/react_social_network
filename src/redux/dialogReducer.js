const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE'
const UPDATE_MESSAGE_BODY = 'UPDATE_MESSAGE_BODY'

let initialState = {
    dialogs: [
        {id: 1, name: 'Oleg'},
        {id: 2, name: 'Roman'},
        {id: 3, name: 'Sasha'},
        {id: 5, name: 'Artem'},
        {id: 6, name: 'Dim'},
    ],
    messages: [
        {message: 'Hello'},
        {message: 'How are you?'},
        {message: 'Hi'},
        {message: 'Yo'},
        {message: 'Bye'},
    ],
    newMessageBody: '',
}

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {

        case(ADD_NEW_MESSAGE):
            return {
                ...state,
                messages: [...state.messages, state.newMessageBody],
                newMessageBody: ''
            };


        case(UPDATE_MESSAGE_BODY):

            return {
                ...state,
                newMessageBody: action.newBody
            };


        default:
            return state;

    }

}

export const addMessageAction = () => ({type: ADD_NEW_MESSAGE});
export const updateMessageBodyAction = (body) => ({type: UPDATE_MESSAGE_BODY, newBody: body});

export default dialogReducer;