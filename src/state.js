let rerender

let state = {
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

}

export const setTextAreaData = function (data) {
    state.profilePage.textAreaData = data;
    rerender(state);
}

export const addPost = function (postText) {
    let newPost = {
        id: state.profilePage.posts.length + 1,
        message: postText,
        likes: 0,
    }
    state.profilePage.posts.push(newPost)
    setTextAreaData('')
    rerender(state)
}

export const subscribe = function (observer) {
    rerender = observer
}


export default state;