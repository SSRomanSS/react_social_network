import {profileAPI} from "../api/api";

const ADD_NEW_POST = 'ADD-NEW-POST'
const UPDATE_TEXT = 'UPDATE-TEXT'
const FETCH_PROFILE_INFO = 'FETCH_PROFILE_INFO'

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
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case(ADD_NEW_POST):
            let newPost = {
                id: state.posts.length + 1,
                message: state.textAreaData,
                likes: 0,
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                textAreaData: ''
            };


        case(UPDATE_TEXT):
            return {
                ...state,
                textAreaData: action.newText
            };
        case(FETCH_PROFILE_INFO):
            return {
                ...state,
                profile: action.profile,
            };


        default:
            return state;
    }
}


export const addPost = () => ({type: ADD_NEW_POST});
export const updateText = (text) => ({type: UPDATE_TEXT, newText: text});
export const updateProfileInfo = (profile) => ({type: FETCH_PROFILE_INFO, profile});

export const getProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId)
            .then((data) => {
                dispatch(updateProfileInfo(data.data));
            })
    }
}


export default profileReducer;
