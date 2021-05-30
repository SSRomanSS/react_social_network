const ADD_NEW_POST = 'ADD-NEW-POST'
const UPDATE_TEXT = 'UPDATE-TEXT'

const profileReducer = (state, action) => {
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
