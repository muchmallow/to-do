import React from "react";
import styles from "./TodoItem.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircle, faCheckCircle, faTimesCircle} from "@fortawesome/free-regular-svg-icons";

class TodoItem extends React.PureComponent {
    state = {
        editMode: false,
        taskText: this.props.text,
        id: null
    };

    timer = 0;

    activateEditMode = (id) => {
        this.setState({
            editMode: true,
            id
        });
    };

    deactivateEditMode = () => {
        this.props.updateTaskTextAC(this.state.id, this.state.taskText);
        this.setState({
            editMode: false
        });
    };

    onTaskTextChange = (e) => {
        this.setState({
            taskText: e.currentTarget.value
        })
    };

    updateTaskText = ({key}) => {
        if(key === "Enter") {
            this.props.updateTaskTextAC(this.state.id, this.state.taskText);
            this.setState({
                editMode: false
            });
        }
    };

    mouseDownHandler = (id) => {
        this.timer = setTimeout(this.activateEditMode, 800, id);
    };

    mouseUpHandler = () => {
        clearTimeout(this.timer);
    };

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.text !== this.props.text) {
            this.setState({
                taskText: this.props.text
            });
        }
    }

    render() {
        const {id, isCompleted, completeTask, removeTask} = this.props;
        const {editMode, taskText} = this.state;
        return (
            <li>
                <div className={styles.todoItem}>
                    <FontAwesomeIcon icon={isCompleted ? faCheckCircle : faCircle} size="lg" onClick={() => completeTask(id)} className={styles.iconDone}/>
                    {!editMode && 
                        <span className={isCompleted ? styles.todoItemDone : styles.todoItemDefault} onMouseDown={() => this.mouseDownHandler(id)} onMouseUp={this.mouseUpHandler}>
                            {taskText}
                        </span>
                    }
                    {editMode &&
                        <input className={isCompleted ? styles.updateTaskTextDone : styles.updateTaskTextDefault} onKeyPress={this.updateTaskText} onChange={this.onTaskTextChange} onBlur={this.deactivateEditMode} autoFocus={true} value={taskText}/>
                    }
                    <FontAwesomeIcon icon={faTimesCircle} size="lg" onClick={() => removeTask(id)} className={styles.iconDel}/>
                </div>
            </li>
        );
    }
}

export default TodoItem;

