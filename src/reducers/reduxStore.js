import {combineReducers, createStore} from "redux";
import tasksReducer from "./tasksReducer";
//import {save} from "redux-localstorage-simple";

const reducers = combineReducers({
    tasksReducer
});

let store = createStore(reducers);

export default store;