import classes from './Profile.module.css'
import Posts from './Posts/Posts.jsx'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {
    return (
        <div className={classes.profile}>
            <ProfileInfo/>
            <Posts posts={props.state.posts}
                   dispatch={props.dispatch}
                   textAreaData={props.state.textAreaData}/>
        </div>
    )
}

export default Profile;