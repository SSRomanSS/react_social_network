import React from "react";
import User from "./User/User";
const axios = require('axios')



function Users(props) {
    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then((data) => props.setUsers(data.data.items))
    }

    let UsersData = props.users.map(el => <User user={el}
                                                followUser={props.followUser}
                                                unfollowUser={props.unfollowUser}/>);
    debugger
    return (
        <div>
            {UsersData}
        </div>
    )
}

export default Users;