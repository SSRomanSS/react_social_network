import classes from './Profile.module.css'
import Posts from './Posts/Posts.jsx'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile() {
    return (
        <div className={classes.profile}>
            <ProfileInfo/>
            <Posts/>
        </div>
    )
}

export default Profile;