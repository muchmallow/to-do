import {ADD_TASK, REMOVE_TASK, COMPLETE_TASK} from "../constants";
//import {load} from "redux-localstorage-simple";

//let initialState = load({namespace: "todo-list"});

// if(!initialState || !initialState.tasks ||!initialState.tasks.length) {
//     initialState = {
//         tasksReducer: {
//             tasks: []
//         }
//     }
// }

let initialState = {
    tasks: [
        {
            id: 1,
            text: "Take out the trash",
            isCompleted: true
        },
        {
            id: 2,
            text: "Grocery shopping",
            isCompleted: false
        }
    ]
};

const tasksReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TASK: {
            let newTask = {
                id: action.id,
                text: action.text,
                isCompleted: action.isCompleted
            }
            return {
                ...state,
                tasks: [...state.tasks, newTask]
            }
        }
        case COMPLETE_TASK: {
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    if(task.id === action.id) {
                        return {...task, isCompleted: !task.isCompleted}
                    }
                    return task;
                })
                // tasks: state.tasks.map(task => ((task.id === action.id) && {...task, isCompleted: true}))
            }
        }
        case REMOVE_TASK: {
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.id)
            }
        }
        default:
            return state;
    }
}

export default tasksReducer;