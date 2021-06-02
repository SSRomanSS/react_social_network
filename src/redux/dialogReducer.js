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
}

const dialogReducer = (state = initialState, action) => {

    switch (action.type) {

        case(ADD_NEW_MESSAGE):
            let newMessage = {message: action.newMessageBody}
            return {
                ...state,
                messages: [...state.messages, newMessage],

            };



        default:
            return state;

    }

}

export const addMessageAction = (newMessageBody) => ({type: ADD_NEW_MESSAGE, newMessageBody});


export default dialogReducer;