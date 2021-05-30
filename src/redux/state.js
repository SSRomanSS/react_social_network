import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";



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

        dialogsPage: {
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

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action)
        this.rerender(this._state);
    },

    subscribe(observer) {
        this.rerender = observer;
    }

}


export default store;