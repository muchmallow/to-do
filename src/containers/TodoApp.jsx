import React from "react";
import {connect} from "react-redux";
import styles from './TodoApp.module.css';
import TodoInput from "../components/TodoInput";
import {addTaskAC, removeTaskAC, completeTaskAC, changeFilterAC} from "../actionCreators/actionCreator";
import TodoList from "../components/TodoList";
import Footer from "../components/Footer";


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

  getActiveTasksCounter = tasks => tasks.filter(task => !task.isCompleted).length;

  getFilteredTasks = (tasks, currentFilter) => {
    switch (currentFilter) {
        case "active": {
            return this.props.tasks.filter(task => ((!task.isCompleted) && task));
        }
        case "completed": {
            return this.props.tasks.filter(task => ((task.isCompleted) && task));
        }
        default:
            return tasks;
    }
  };

  render() {
      const tasksAmount = this.getActiveTasksCounter(this.props.tasks);
      const filteredTasks = this.getFilteredTasks(this.props.tasks, this.props.filters);
    return (
      <div className={styles.todoContainer}>
        <TodoInput onChange={this.handleChange} onKeyPress={this.addTask} value={this.state.taskText}/>
        <TodoList tasks={filteredTasks} completeTask={this.props.completeTaskAC} removeTask={this.props.removeTaskAC}/>
        <Footer amount={tasksAmount} activeFilter={this.props.filters} changeFilter={this.props.changeFilterAC}/>
      </div>
    );
  };
}

export default connect(state => ({
  tasks: state.tasksReducer.tasks,
  filters: state.filtersReducer
}), {addTaskAC, removeTaskAC, completeTaskAC, changeFilterAC})(TodoApp);