import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS = 'SET_TOTAL_USERS'
const TOGGLE_IS_FETCHED = 'TOGGLE_IS_FETCHED'

let initialState = {
    users: [],
    pageSize: 5,
    currentPage: 1,
    totalUsers: 0,
    isFetched: false
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case(FOLLOW):
            return {
                ...state,
                users: state.users.map((u) => {
                    if (action.userId === u.id) {
                        return {...u, followed: true,}
                    }
                    return u
                })
            };


        case(UNFOLLOW):
            return {
                ...state,
                users: state.users.map((u) => {
                    if (action.userId === u.id) {
                        return {...u, followed: false,}
                    }
                    return u
                })
            };
        case(SET_USERS):
            return {
                ...state,
                users: [...action.users]
            };
        case(SET_CURRENT_PAGE):
            return {
                ...state,
                currentPage: action.currentPage
            };
        case(SET_TOTAL_USERS):
            return {
                ...state,
                totalUsers: action.totalUsers
            };
        case(TOGGLE_IS_FETCHED):
            return {
                ...state,
                isFetched: action.isFetched
            };


        default:
            return state;
    }
}


export const followUser = (userId) => ({type: FOLLOW, userId: userId});
export const unfollowUser = (userId) => ({type: UNFOLLOW, userId: userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsers = (totalUsers) => ({type: SET_TOTAL_USERS, totalUsers});
export const setIsFetched = (isFetched) => ({type: TOGGLE_IS_FETCHED, isFetched});

export const getUsers = (pageSize, currentPage) => {
    return (dispatch) => {
        dispatch(setIsFetched(false))
        dispatch(setCurrentPage(currentPage));
        usersAPI.getUsers(pageSize, currentPage).then(data => {
            dispatch(setUsers(data.items));
            dispatch(setTotalUsers(data.totalCount))
            dispatch(setIsFetched(true))
        })
    }
}

export default usersReducer;
