import React from "react";
import User from "./User/User";


function Users(props) {

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