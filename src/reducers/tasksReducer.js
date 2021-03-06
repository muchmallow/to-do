import {ADD_TASK, REMOVE_TASK, COMPLETE_TASK, UPDATE_TASK_TEXT} from "../constants";

const initialState = {
    tasks: [
        {
            id: 322,
            text: "Это захардкодженая таска, добавляй свои плз",
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
            };
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
        case UPDATE_TASK_TEXT: {
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    if(task.id === action.id) {
                        return {...task, text: action.text}
                    }
                    return task;
                })
            }
        }
        default:
            return state;
    }
};

export default tasksReducer;