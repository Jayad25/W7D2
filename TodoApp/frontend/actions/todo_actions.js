export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';

export const receiveToDo = (todo) => {
  return {
    type: RECEIVE_TODO,
    todo
    // todo: todo
  };
};

export const receiveToDos = (todos) => {
  return {
    type: RECEIVE_TODOS,
    todos: todos
  };
};

