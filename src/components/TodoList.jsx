import React from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";

const TodoList = ({tasks, completeTask, removeTask, updateTaskTextAC}) => (
    <ul className={styles.list}>
        <div>
        {tasks.map(({id, text, isCompleted}) => (
            <TodoItem key={id} id={id} text={text} isCompleted={isCompleted} completeTask={completeTask} removeTask={removeTask} updateTaskTextAC={updateTaskTextAC}/>
        ))}
        </div>
    </ul>
);

export default TodoList;