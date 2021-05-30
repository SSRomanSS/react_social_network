import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


function App(props) {

    return (

            <div className="app-wrapper">
                <Header/>
                <NavBar state={props.store.getState().sidebar}/>
                <div className={"app-wrapper-content"}>
                    <Route path={'/profile'}
                           render={() => <Profile />}/>
                    <Route path={'/dialogs'}
                           render={() => <DialogsContainer />}/>
                </div>

            </div>

    );
}

export default App;