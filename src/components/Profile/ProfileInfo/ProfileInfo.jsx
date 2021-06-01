import classes from './ProfileInfo.module.css'
import defaultLogo from './../../../assets/images/img.png'
import Preloader from "../../common/Preloader/Preloader";

function ProfileInfo(props) {

    if (!props.profile) {
        return <Preloader />
    }

    let photo;

    if (props.profile.photos.large) {
        photo = <img src={props.profile.photos.large}/>
    } else {
        photo = <img src={defaultLogo}/>
    }

    return (
        <div className={classes.profileInfo}>
            <div>
                {photo}
            </div>
            <div>
                {props.profile.aboutMe}
            </div>
            <div>
                {props.profile.fullName}
            </div>
        </div>
    )
}

export default ProfileInfo;

