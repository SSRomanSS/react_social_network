import {connect} from "react-redux";
import Users from "./Users";
import {
    followUserAction,
    unfollowUserAction,
    setUsersAction,
    setCurrentPageAction,
    setTotalUsersAction
} from "../../redux/usersReducer";
import React from "react";



const axios = require('axios')


class UsersAPIContainer extends React.Component {


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


    render() {

        return (
            <Users  followUser={this.props.followUser}
                    unfollowUser={this.props.unfollowUser}
                    getCurrentPageUsers={this.getCurrentPageUsers}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    pageSize={this.props.pageSize}
                    totalUsers={this.props.totalUsers}
            />
        )
    }

}


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsers: state.usersPage.totalUsers,
        currentPage: state.usersPage.currentPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        followUser: (userId) => dispatch(followUserAction(userId)),
        unfollowUser: (userId) => dispatch(unfollowUserAction(userId)),
        setUsers: (users) => dispatch(setUsersAction(users)),
        setCurrentPage: (currentPage) => dispatch(setCurrentPageAction(currentPage)),
        setTotalUsers: (totalUsers) => dispatch(setTotalUsersAction(totalUsers)),
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer)

export default UsersContainer;