import React, {Fragment} from "react";
import Header from "./components/Header";
import styles from './App.module.css';
import TodoApp from "./containers/TodoApp";


const App = (props) => {
  return (
    <Fragment>
      <Header title="To do list"/>
      <TodoApp/>
    </Fragment>
  );
};

export default App;
