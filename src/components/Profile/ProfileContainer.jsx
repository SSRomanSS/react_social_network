import {connect} from "react-redux";
import React from "react";
import {withRouter} from "react-router-dom";
import Profile from "./Profile";
import {updateProfileInfo} from "../../redux/profileReducer";
const axios = require('axios')



class ProfileAPIContainer extends React.Component {

    componentDidMount() {
        debugger
        let userId = (this.props.match.params.userId) ? this.props.match.params.userId : 2


        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then((data) => {

                this.props.updateProfileInfo(data.data);
            })
    }

    render() {
        debugger
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
    updateProfileInfo,
})(WithUrlProfileContainer)

export default ProfileContainer;


