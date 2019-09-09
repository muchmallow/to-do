import React from "react";
import {connect} from "react-redux";
import styles from './TodoApp.module.css';
import TodoInput from "../components/TodoInput";
import {addTaskAC, removeTaskAC, completeTaskAC} from "../actionCreators/actionCreator";
import TodoList from "../components/TodoList";


class TodoApp extends React.Component {
  state = {
    taskText: ""
  };
  
  handleChange = ({target: {value}}) => {
    this.setState({
      taskText: value
    });
  };

  addTask = ({key}) => {
    const {taskText} = this.state;
    if(taskText.length > 3 && key === "Enter"){
      const {addTaskAC} = this.props;
      addTaskAC((new Date()).getTime(), taskText, false);
      this.setState({
        taskText: ""
      });
    }
  };

  render() {
    return (
      <div className={styles.todoContainer}>
        <TodoInput onChange={this.handleChange} onKeyPress={this.addTask} value={this.state.taskText}/>
        <TodoList tasks={this.props.tasks} completeTask={this.props.completeTaskAC} removeTask={this.props.removeTaskAC}/>
      </div>
    );
  };
}

export default connect(state => ({
  tasks: state.tasksReducer.tasks
}), {addTaskAC, removeTaskAC, completeTaskAC})(TodoApp);