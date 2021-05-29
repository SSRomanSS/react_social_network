import classes from './Sidebar.module.css'

import Friend from "./Friend/Friend";

function Sidebar(props) {
    let friendsList = props.state.friends.map((el) => <Friend state={el}/>)

    return (
        <div className={classes.sidebar}>
            <div>
                <h3>Friends</h3>
            </div>
            <div>
                {friendsList}
            </div>
        </div>
    )
}

export default Sidebar;
