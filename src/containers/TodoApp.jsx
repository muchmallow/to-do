import React from "react";
import {connect} from "react-redux";
import styles from './TodoApp.module.css';
import TodoInput from "../components/TodoInput";
import {addTaskAC, removeTaskAC, completeTaskAC, changeFilterAC, updateTaskTextAC} from "../actionCreators/actionCreator";
import TodoList from "../components/TodoList";
import Footer from "../components/Footer";


class TodoApp extends React.Component {
  state = {
    editMode: false,
    taskText: "",
    id: null
  };
  
  handleChange = ({target: {value}}) => {
    this.setState({
      taskText: value
    });
  };

  onTaskTextChange = (e) => {
      this.setState({
          taskText: e.currentTarget.value
      })
  }

  addTask = ({key}) => {
    const {taskText} = this.state;
    if(taskText.length > 3 && key === "Enter") {
      const {addTaskAC} = this.props;
      addTaskAC((new Date()).getTime(), taskText, false);
      this.setState({
        taskText: ""
      });
    }
  };

  updateTaskText = ({key}) => {
    const {taskText, id} = this.state;
    if(taskText.length > 3 && key === "Enter") {
        const {updateTaskTextAC} = this.props;
        updateTaskTextAC(id, taskText);
        this.setState({
            editMode: false,
            taskText: "",
            id: null
        });
    }
  }

  activateEditMode = (id) => {
      this.setState({
          editMode: true,
          id
      });
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
        <TodoInput onChange={this.handleChange} addTask={this.addTask} value={this.state.taskText}/>
        <TodoList tasks={filteredTasks} completeTask={this.props.completeTaskAC} removeTask={this.props.removeTaskAC} updateTaskText={this.updateTaskText} onTaskTextChange={this.onTaskTextChange} activateEditMode={this.activateEditMode} editMode={this.state.editMode}/>
        <Footer amount={tasksAmount} activeFilter={this.props.filters} changeFilter={this.props.changeFilterAC}/>
      </div>
    );
  };
}

export default connect(state => ({
  tasks: state.tasksReducer.tasks,
  filters: state.filtersReducer
}), {addTaskAC, removeTaskAC, completeTaskAC, changeFilterAC, updateTaskTextAC})(TodoApp);