import {combineReducers, createStore, applyMiddleware} from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    form: formReducer,

})

let store = createStore(reducers, applyMiddleware(thunk));

export default store;