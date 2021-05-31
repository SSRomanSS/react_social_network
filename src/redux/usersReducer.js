const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'


let initialState = {
    users: [
        {id: 1, fullName: 'Ivan', avatarUrl: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y', followed: false, status: 'Life is good!!', location: {country: 'Ukraine', city: 'Lviv'}},
        {id: 2, fullName: 'Sergey', avatarUrl: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y', followed: true, status: 'Life is good!!', location: {country: 'Ukraine', city: 'Dnipro'}},
        {id: 3, fullName: 'Oleg', avatarUrl: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y', followed: true, status: 'Life is good!!', location: {country: 'USA', city: 'Boston'}},
        {id: 4, fullName: 'Dasha', avatarUrl: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y', followed: true, status: 'Life is good!!', location: {country: 'Germany', city: 'Berlin'}},

    ],
    textAreaData: ' Hello from state.js',
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
                users: [...state.users, ...action.user]
            }


        default:
            return state;
    }
}


export const followUserAction = (userId) => ({type: FOLLOW, userId: userId});
export const unfollowUserAction = (userId) => ({type: UNFOLLOW, userId: userId});
export const setUsersAction = (users) => ({type: SET_USERS, users});

export default usersReducer;
