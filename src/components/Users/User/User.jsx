import classes from './User.module.css'
import defaultLogo from'../../../assets/images/img.png'

function User(props) {

    let follow = () => props.unfollowUser(props.user.id)
    let unfollow = () => props.followUser(props.user.id)

    return (
        <div className={classes.user}>
            <div>
                <img src={props.user.photos.small || defaultLogo}/>
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