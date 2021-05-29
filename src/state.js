const ADD_NEW_POST = 'ADD-NEW-POST'
const UPDATE_TEXT = 'UPDATE-TEXT'
const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE'
const UPDATE_MESSAGE_BODY = 'UPDATE_MESSAGE_BODY'





let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: '111111', likes: 12},
                {id: 2, message: '222222', likes: 34},
                {id: 3, message: '333333', likes: 55},
                {id: 5, message: '444444', likes: 44},
                {id: 6, message: '555555', likes: 23},
                {id: 7, message: '666666', likes: 4},
            ],
            textAreaData: ' Hello from state.js',
        },

        messagesPage: {
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
        },
        sidebar: {
            friends: [
                {
                    avatar_url: 'https://pyxis.nymag.com/v1/imgs/e6c/02c/cbe672af6609198720b69efd475ab5f641-avatar-last-airbender.rsquare.w1200.jpg',
                    name: 'Oleg'
                },
                {
                    avatar_url: 'https://pyxis.nymag.com/v1/imgs/e6c/02c/cbe672af6609198720b69efd475ab5f641-avatar-last-airbender.rsquare.w1200.jpg',
                    name: 'Roman'
                },
                {
                    avatar_url: 'https://pyxis.nymag.com/v1/imgs/e6c/02c/cbe672af6609198720b69efd475ab5f641-avatar-last-airbender.rsquare.w1200.jpg',
                    name: 'Sasha'
                },
            ],
        }

    },
    getState() {
        return this._state;
    },
    render() {

    },

    dispatch(obj) {
        switch (obj.type) {
            case(ADD_NEW_POST):
                let newPost = {
                    id: this._state.profilePage.posts.length + 1,
                    message: this._state.profilePage.textAreaData,
                    likes: 0,
                }
                this._state.profilePage.posts.push(newPost);
                this._state.profilePage.textAreaData = '';
                this.rerender(this._state);
                break;
            case(UPDATE_TEXT):
                this._state.profilePage.textAreaData = obj.newText;
                this.rerender(this._state);
                break;
           case(ADD_NEW_MESSAGE):
                let newMessage = {
                    message: this._state.messagesPage.newMessageBody,
                }
                this._state.messagesPage.messages.push(newMessage);
                this._state.messagesPage.newMessageBody = '';
                this.rerender(this._state);
                break;
            case(UPDATE_MESSAGE_BODY):
                this._state.messagesPage.newMessageBody = obj.newBody;
                this.rerender(this._state);
                break;
            default:
                break;

        }
    },

    subscribe(observer) {
        this.rerender = observer;
    }

}

export const addPostAction = () => ({type: ADD_NEW_POST})
export const updateTextAction = (text) => ({type: UPDATE_TEXT, newText: text})

export const addMessageAction = () => ({type: ADD_NEW_MESSAGE})
export const updateMessageBodyAction = (body) => ({type: UPDATE_MESSAGE_BODY, newBody: body})





export default store;