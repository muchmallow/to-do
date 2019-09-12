import React from "react";

const TodoInput = ({value, onChange, addTask}) => {
    return (
      <div>
        <i/>
        <input placeholder="Add a task" value={value} onChange={onChange} onKeyPress={addTask}/>
      </div>
    );
}
  
  export default TodoInput;