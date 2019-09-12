import {ADD_TASK, REMOVE_TASK, COMPLETE_TASK, CHANGE_FILTER, UPDATE_TASK_TEXT} from "../constants";

export const addTaskAC = (id, text, isCompleted) => ({
    type: ADD_TASK,
    id,
    text,
    isCompleted
});

export const removeTaskAC = id => ({
    type: REMOVE_TASK,
    id
});

export const completeTaskAC = id => ({
    type: COMPLETE_TASK,
    id
});

export const changeFilterAC = currentFilter => ({
    type: CHANGE_FILTER,
    currentFilter
});

export const updateTaskTextAC = (id, text) => ({
    type: UPDATE_TASK_TEXT,
    id,
    text
});