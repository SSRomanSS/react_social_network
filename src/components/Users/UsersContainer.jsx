import {connect} from "react-redux";
import Users from "./Users";
import {
    followUser,
    unfollowUser,
    getUsers
} from "../../redux/usersReducer";
import React from "react";
import Preloader from "../common/Preloader/Preloader";


class UsersAPIContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.currentPage)
    }


    getCurrentPageUsers = (currentPage) => {
        this.props.getUsers(this.props.pageSize, currentPage)
    }

    // getCurrentPageUsers (currentPage)  {
    //     this.props.getUsers(this.props.pageSize, currentPage)
    // }


    render() {

        if (this.props.isFetched) {
            return (
                <Users followUser={this.props.followUser}
                       unfollowUser={this.props.unfollowUser}
                       getCurrentPageUsers={this.getCurrentPageUsers}
                    // getCurrentPageUsers={this.getCurrentPageUsers.bind(this)}
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

const UsersContainer = connect(mapStateToProps, {
    followUser,
    unfollowUser,
    getUsers,
})(UsersAPIContainer)

export default UsersContainer;