import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import sidebarReducer from "./sidebarReducer";

let reducers = combineReducers({
    profileReducer,
    dialogReducer,
    sidebarReducer,

})

let store = createStore(reducers);

export default store;