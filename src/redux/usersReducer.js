const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS = 'SET_TOTAL_USERS'

let initialState = {
    users: [],
    pageSize: 5,
    currentPage: 1,
    totalUsers: 0
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


        default:
            return state;
    }
}


export const followUserAction = (userId) => ({type: FOLLOW, userId: userId});
export const unfollowUserAction = (userId) => ({type: UNFOLLOW, userId: userId});
export const setUsersAction = (users) => ({type: SET_USERS, users});
export const setCurrentPageAction = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersAction = (totalUsers) => ({type: SET_TOTAL_USERS, totalUsers});

export default usersReducer;
