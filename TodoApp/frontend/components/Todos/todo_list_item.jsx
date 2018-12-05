import React from 'react';

export const TodoListItem = (props)=>{
  console.log(props);
  return(
    <div>
      
      {props.todo.title}
      
    
    </div>
  );
};
// <li key={todo.to.id}>{todo.title}</li>
