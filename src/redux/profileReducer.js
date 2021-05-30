const ADD_NEW_POST = 'ADD-NEW-POST'
const UPDATE_TEXT = 'UPDATE-TEXT'

let initialState = {
            posts: [
                {id: 1, message: '111111', likes: 12},
                {id: 2, message: '222222', likes: 34},
                {id: 3, message: '333333', likes: 55},
                {id: 5, message: '444444', likes: 44},
                {id: 6, message: '555555', likes: 23},
                {id: 7, message: '666666', likes: 4},
            ],
            textAreaData: ' Hello from state.js',
        }

const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case(ADD_NEW_POST):
            let newPost = {
                id: state.posts.length + 1,
                message: state.textAreaData,
                likes: 0,
            }
            state.posts.push(newPost);
            state.textAreaData = '';
            return state;
        case(UPDATE_TEXT):
            state.textAreaData = action.newText;
            return state;
        default:
            return state;
    }
}


export const addPostAction = () => ({type: ADD_NEW_POST});
export const updateTextAction = (text) => ({type: UPDATE_TEXT, newText: text});

export default profileReducer;
