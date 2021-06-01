import React from "react";
import User from "./User/User";
import classes from './Users.module.css'


let Users = (props) => {

    let usersData = props.users.map(el => <User user={el}
                                                followUser={props.followUser}
                                                unfollowUser={props.unfollowUser}/>);

    let pageCount = Math.ceil(props.totalUsers / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }


    return (
        <div>
            <div>
                {
                    pages.map(p => {
                        return <span onClick={() => props.getCurrentPageUsers(p)}
                                     className={props.currentPage === p && classes.activePage}>{p}</span>
                    })
                }
            </div>
            {usersData}
        </div>
    )
}

export default Users;