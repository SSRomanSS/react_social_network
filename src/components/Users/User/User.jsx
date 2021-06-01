import classes from './User.module.css'
import defaultLogo from'../../../assets/images/img.png'
import {NavLink} from "react-router-dom";

function User(props) {

    let follow = () => props.unfollowUser(props.user.id)
    let unfollow = () => props.followUser(props.user.id)

    return (
        <div className={classes.user}>
            <div>
                <NavLink to={`/profile/${props.user.id}`}>
                    <img src={props.user.photos.small || defaultLogo}/>
                </NavLink>
            </div>
            <div>
                {props.user.status || 'Life is good!!!'}
            </div>
            <div>

            </div>
            <div>
                {props.user.name}
            </div>
            <div></div>
            <div>

            </div>
            <div>
                {props.user.followed ?
                    <button onClick={follow}>Unfollow</button> : <button onClick={unfollow}>Follow</button>}
            </div>

        </div>
    )
}

export default User;