const axios = require('axios')

const client = axios.create(
    {
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    }
);

export const usersAPI = {
    getUsers(pageSize, currentPage) {
        return client.get(`users?count=${pageSize}&page=${currentPage}`)
            .then(response => {
                return response.data;
            });
    },
}

export const profileAPI ={
    getProfile(userId) {
        return client.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
    }
}