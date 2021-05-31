
import {connect} from "react-redux";
import Users from "./Users";
import {followUserAction, unfollowUserAction, setUsersAction} from "../../redux/usersReducer";





const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        followUser: (userId) => dispatch(followUserAction(userId)),
        unfollowUser: (userId) => dispatch(unfollowUserAction(userId)),
        setUsers: (users) => dispatch(setUsersAction(users))
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;