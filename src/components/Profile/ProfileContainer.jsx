import {connect} from "react-redux";
import React from "react";
import {withRouter} from "react-router-dom";
import Profile from "./Profile";
import {getProfile} from "../../redux/profileReducer";


class ProfileAPIContainer extends React.Component {

    componentDidMount() {

        let userId = (this.props.match.params.userId) ? this.props.match.params.userId : 2
        this.props.getProfile(userId)

    }

    render() {
        return <Profile profile={this.props.profile}/>
    }
}


const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
}


const WithUrlProfileContainer = withRouter(ProfileAPIContainer)

const ProfileContainer = connect(mapStateToProps, {
    getProfile,
})(WithUrlProfileContainer)

export default ProfileContainer;
