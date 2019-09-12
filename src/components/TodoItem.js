import React from "react";
import styles from "./TodoItem.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircle, faCheckCircle, faTimesCircle} from "@fortawesome/free-regular-svg-icons";

const TodoItem = React.memo(({id, text, isCompleted, completeTask, removeTask}) => (
    <li>
        <div className={styles.todoItem}>
            <FontAwesomeIcon icon={isCompleted ? faCheckCircle : faCircle} size="lg" onClick={() => completeTask(id)} className={styles.iconDone}/>
            <span className={isCompleted ? styles.todoItemDone : styles.todoItemDefault}>{text}</span>
            <FontAwesomeIcon icon={faTimesCircle} size="lg" onClick={() => removeTask(id)} className={styles.iconDel}/>
        </div>
    </li>
));

export default TodoItem;