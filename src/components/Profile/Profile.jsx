import classes from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";

function Profile(props) {
    debugger
    return (
        <div className={classes.profile}>
            <ProfileInfo profile={props.profile}/>
            <PostsContainer />
        </div>
    )
}

export default Profile;