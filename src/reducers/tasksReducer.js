import {ADD_TASK, REMOVE_TASK, COMPLETE_TASK} from "../constants";

const tasksData = [
    {
        id: 1,
        text: "Take out the trash",
        isCompleted: true
    },
    {
        id: 2,
        text: "Grocery shopping",
        isCompleted: false
    },
    {
        id: 3,
        text: "Clean gecko tank",
        isCompleted: false
    },
    {
        id: 4,
        text: "Mow lawn",
        isCompleted: true
    },
    {
        id: 5,
        text: "Catch up on Arrested Development",
        isCompleted: false
    }
];

const tasksReducer = (state = tasksData, action) => {
    switch(action.type) {
        case ADD_TASK: {
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    isCompleted: action.isCompleted
                }
            ];
        }
        case REMOVE_TASK: {
            return [...state].filter(task => task.id !== action.id);
        }
        case COMPLETE_TASK: {
            return [...state].map(task => {
                return (task.id === action.id) && !task.isCompleted;
            });
        }
        default:
            return state;
    }
}

export default tasksReducer;