import React from "react";

const TodoInput = ({value, onChange, onKeyPress}) => {
    return (
      <div>
        <i/>
        <input placeholder="Add a task" value={value} onChange={onChange} onKeyPress={onKeyPress}/>
      </div>
    );
}
  
  export default TodoInput;