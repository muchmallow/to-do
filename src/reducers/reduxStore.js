import {combineReducers, createStore, applyMiddleware} from "redux";
import tasksReducer from "./tasksReducer";
import filtersReducer from "./filtersReducer";
import {save, load} from "redux-localstorage-simple";

const reducers = combineReducers({
    tasksReducer,
    filtersReducer
});

const createStoreWithMiddleware = applyMiddleware(save({namespace: "todo-app"}))(createStore);
const store = createStoreWithMiddleware(reducers, load({namespace: "todo-app"}));

//let store = createStore(reducers, applyMiddleware(save({namespace: "todo-list"})));

export default store;