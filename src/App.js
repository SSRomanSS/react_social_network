import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/Navbar";

import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";


function App(props) {

    return (

            <div className="app-wrapper">
                <Header/>
                <NavBar state={props.store.getState().sidebar}/>
                <div className={"app-wrapper-content"}>
                    <Route path={'/profile/:userId?'}
                           render={() => <ProfileContainer />}/>
                    <Route path={'/dialogs'}
                           render={() => <DialogsContainer />}/>
                    <Route path={'/users'}
                           render={() => <UsersContainer />}/>
                </div>
            </div>

    );
}

export default App;