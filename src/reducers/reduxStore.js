import {combineReducers, createStore, applyMiddleware} from "redux";
import tasksReducer from "./tasksReducer";
import filtersReducer from "./filtersReducer";
import newsReducer from "./newsReducer";
import {save, load} from "redux-localstorage-simple";
import thunkMiddleware from "redux-thunk";

const reducers = combineReducers({
    tasksReducer,
    filtersReducer,
    newsReducer
});

const createStoreWithMiddleware = applyMiddleware(save({namespace: "todo-app"}), thunkMiddleware)(createStore);
const store = createStoreWithMiddleware(reducers, load({namespace: "todo-app"}));

//let store = createStore(reducers, applyMiddleware(save({namespace: "todo-list"})));

export default store;