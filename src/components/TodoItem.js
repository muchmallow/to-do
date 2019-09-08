import React from "react";
import styles from "./TodoItem.module.css";

const TodoItem = (props) => {

    const onChange = () => {
        props.handleChange(props.task.id);
    };

    return (
        <div className={styles.todoItem}>
            <input id={props.task.id} type="checkbox" checked={props.task.completed} onChange={onChange}/>
            {
                (props.task.completed)
                ? <label htmlFor={props.task.id}><p className={styles.todoItemDone}>{props.task.text}</p></label> 
                : <label htmlFor={props.task.id}><p className={styles.todoItemDefault}>{props.task.text}</p></label>
            }
        </div>
    );
};

export default TodoItem;