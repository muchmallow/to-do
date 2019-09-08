import React from "react";
import styles from './App.module.css';
import TodoItem from "./components/TodoItem";
import tasksData from "./components/todosData";
import TodoInput from "./components/TodoInput";


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      tasks: tasksData
    };
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(id) {
    this.setState(prevState => {
      const updatedTasks = prevState.tasks.map(task => {
        if(task.id === id) {
          task.completed = !task.completed;
        }
        return task;
      });
      return updatedTasks;
    });
  }

  render() {
    const items = this.state.tasks.map(t => <TodoItem key={t.id} task={t} handleChange={this.handleChange}/>);
    return (
      <div className={styles.todoList}>
        <TodoInput/>
        {items}
      </div>
    );
  };
}

export default App;
