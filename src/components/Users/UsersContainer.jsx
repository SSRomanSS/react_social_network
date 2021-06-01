import {connect} from "react-redux";
import Users from "./Users";
import {
    followUserAction,
    unfollowUserAction,
    setUsersAction,
    setCurrentPageAction,
    setTotalUsersAction,
    setIsFetchedAction
} from "../../redux/usersReducer";
import React from "react";
import Preloader from "../common/Preloader/Preloader";


const axios = require('axios')


class UsersAPIContainer extends React.Component {


    componentDidMount() {
        this.props.setIsFetched(false)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then((data) => {

                this.props.setUsers(data.data.items);
                this.props.setTotalUsers(data.data.totalCount)
                this.props.setIsFetched(true)
            })
    }

    getCurrentPageUsers(currentPage) {
        this.props.setIsFetched(false)
        this.props.setCurrentPage(currentPage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${currentPage}`)
            .then((data) => {
                this.props.setUsers(data.data.items)
                this.props.setIsFetched(true)
            })
    }


    render() {
        if (this.props.isFetched) {
            return (
                <Users followUser={this.props.followUser}
                       unfollowUser={this.props.unfollowUser}
                       getCurrentPageUsers={this.getCurrentPageUsers}
                       currentPage={this.props.currentPage}
                       users={this.props.users}
                       pageSize={this.props.pageSize}
                       totalUsers={this.props.totalUsers}
                />
            )
        } else {
            return <Preloader/>
        }
    }
}


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsers: state.usersPage.totalUsers,
        currentPage: state.usersPage.currentPage,
        isFetched: state.usersPage.isFetched,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        followUser: (userId) => dispatch(followUserAction(userId)),
        unfollowUser: (userId) => dispatch(unfollowUserAction(userId)),
        setUsers: (users) => dispatch(setUsersAction(users)),
        setCurrentPage: (currentPage) => dispatch(setCurrentPageAction(currentPage)),
        setTotalUsers: (totalUsers) => dispatch(setTotalUsersAction(totalUsers)),
        setIsFetched: (isFetched) => dispatch(setIsFetchedAction(isFetched))
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer)

export default UsersContainer;