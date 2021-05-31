import classes from './User.module.css'

function User(props) {

    let follow = () => props.unfollowUser(props.user.id)
    let unfollow = () => props.followUser(props.user.id)

    return (
        <div className={classes.user}>
            <div>
                <img src={props.user.avatarUrl}/>
            </div>
            <div>
                {props.user.status}
            </div>
            <div>
                {props.user.location.country}
            </div>
            <div>
                {props.user.fullName}
            </div>
            <div></div>
            <div>
                {props.user.location.city}
            </div>
            <div>
                {props.user.followed ?
                    <button onClick={follow}>Unfollow</button> : <button onClick={unfollow}>Follow</button>}
            </div>

        </div>
    )
}

export default User;