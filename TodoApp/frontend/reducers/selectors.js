
  
export const allTodos =(state) =>{
  let keys = Object.keys(state.todos).map(id => state.todos[id]);
  return keys;  
};