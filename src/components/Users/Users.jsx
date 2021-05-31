import React from "react";
import User from "./User/User";
const axios = require('axios')

class Users extends React.Component {

    constructor(props) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then((data) => this.props.setUsers(data.data.items))
    }


    UsersData = () => this.props.users.map(el => <User user={el}
                                                followUser={this.props.followUser}
                                                unfollowUser={this.props.unfollowUser}/>);

    render() {
        return (
        <div>
            {this.UsersData()}
        </div>
    )
    }


}

// function Users(props) {
//
//     let getUsers = () => {
//         if (props.users.length === 0) {
//         axios.get('https://social-network.samuraijs.com/api/1.0/users').then((data) => props.setUsers(data.data.items))
//     }
//     }
//
//
//     let UsersData = props.users.map(el => <User user={el}
//                                                 followUser={props.followUser}
//                                                 unfollowUser={props.unfollowUser}/>);
//     debugger
//     return (
//         <div>
//             <button onClick={getUsers}>Get Users</button>
//             {UsersData}
//         </div>
//     )
// }

export default Users;