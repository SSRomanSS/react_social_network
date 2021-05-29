import classes from './Friend.module.css'


function Friend(props) {
    return (
        <div className={classes.friend}>
            <img src={props.state.avatar_url}/>
            {props.state.name}
        </div>
    )
}

export default Friend;
