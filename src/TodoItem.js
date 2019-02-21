import React from 'react';

function TodoItem(props) {
  let completed = props.item.completed ? 'completed' : ''
  return (
    <div className="todo-item">
        <input 
            type="checkbox" 
            checked={props.item.completed} 
            onChange={() => props.handleChange(props.item.id)}
        />
        <p className={completed}>{props.item.text}</p>
    </div>
  )
}

export default TodoItem