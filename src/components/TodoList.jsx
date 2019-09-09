import React from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";

const TodoList = ({tasks, completeTask, removeTask}) => (
    <ul className={styles.list}>
        {tasks.map(({id, text, isCompleted}) => (
            <TodoItem key={id} id={id} text={text} isCompleted={isCompleted} completeTask={completeTask} removeTask={removeTask}/>
        ))}
    </ul>
);

export default TodoList;