import React from "react";
import User from "./User/User";
import classes from './Users.module.css'

const axios = require('axios')


class Users extends React.Component {



    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then((data) => {

                this.props.setUsers(data.data.items);
                this.props.setTotalUsers(data.data.totalCount)
            })
    }

    getCurrentPageUsers(currentPage) {
        this.props.setCurrentPage(currentPage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${currentPage}`)
            .then((data) => {
                this.props.setUsers(data.data.items)
            })
    }

    UsersData = () => this.props.users.map(el => <User user={el}
                                                followUser={this.props.followUser}
                                                unfollowUser={this.props.unfollowUser}/>);

    render() {
        debugger
        let pageCount = Math.ceil(this.props.totalUsers / this.props.pageSize);

        let pages = [];

        for (let i = 1; i <= pageCount; i++) {
            pages.push(i)
        }
        debugger
        return (
        <div>
            <div>
                {
                    pages.map(p => {
                        return <span onClick={() => this.getCurrentPageUsers(p)} className={this.props.currentPage === p && classes.activePage}>{p}</span>
                    })

                }

            </div>
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