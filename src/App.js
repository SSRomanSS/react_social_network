import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";


function App(props) {

    return (

            <div className="app-wrapper">
                <Header/>
                <NavBar state={props.state.sidebar}/>
                <div className={"app-wrapper-content"}>
                    <Route path={'/profile'}
                           render={() => <Profile state={props.state.profilePage}
                                                  dispatch={props.dispatch}/>}/>
                    <Route path={'/dialogs'}
                           render={() => <Dialogs state={props.state.messagesPage}/>}/>
                </div>

            </div>

    );
}

export default App;