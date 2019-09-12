import React from "react";
import styles from "./TodoItem.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircle, faCheckCircle, faTimesCircle} from "@fortawesome/free-regular-svg-icons";

class TodoItem extends React.PureComponent {
    state = {
        editMode: false,
        taskText: this.props.text,
        id: null,
        timer: 0
    }

    mouseDownHandler = (id) => {
        this.setState({
            timer: setTimeout(this.activateEditMode(id), 800)
        });
    };

    mouseUpHandler = () => {
        clearTimeout(this.state.timer);
    };

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
    }

    onTaskTextChange = (e) => {
        this.setState({
            taskText: e.currentTarget.value
        })
    }

    updateTaskText = ({key}) => {
        if(key === "Enter") {
            this.props.updateTaskTextAC(this.state.id, this.state.taskText);
            this.setState({
                editMode: false
            });
        }
    }

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
                        <span className={isCompleted ? styles.todoItemDone : styles.todoItemDefault} onDoubleClick={() => this.activateEditMode(id)}>
                            {taskText}
                        </span>
                    }
                    {editMode &&
                        <input className={isCompleted ? styles.updateTaskTextDone : styles.updateTaskText} onKeyPress={this.updateTaskText} onChange={this.onTaskTextChange} onBlur={this.deactivateEditMode} autoFocus={true} value={taskText}/>
                    }
                    <FontAwesomeIcon icon={faTimesCircle} size="lg" onClick={() => removeTask(id)} className={styles.iconDel}/>
                </div>
            </li>
        );
    }
}

export default TodoItem;

