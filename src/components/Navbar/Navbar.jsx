import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";

function NavBar(props) {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}><NavLink to={'/profile'} activeClassName={classes.active}>Profile</NavLink></div>
            <div className={classes.item}><NavLink to={'/dialogs'} activeClassName={classes.active}>Messages</NavLink></div>
            <div className={classes.item}><a href={'#'}>News</a></div>
            <div className={classes.item}><a href={'#'}>Settings</a></div>
            <Sidebar state={props.state} />
        </nav>
    )
}

export default NavBar;
