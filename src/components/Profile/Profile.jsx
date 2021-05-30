import classes from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";

function Profile(props) {
    return (
        <div className={classes.profile}>
            <ProfileInfo/>
            <PostsContainer store={props.store}/>
        </div>
    )
}

export default Profile;