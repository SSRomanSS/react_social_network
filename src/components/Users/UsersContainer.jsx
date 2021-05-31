
import {connect} from "react-redux";
import Users from "./Users";
import {followUserAction, unfollowUserAction, setUsersAction, setCurrentPageAction, setTotalUsersAction} from "../../redux/usersReducer";





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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;