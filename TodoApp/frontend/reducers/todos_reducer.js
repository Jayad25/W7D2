
import {RECEIVE_TODO,RECEIVE_TODOS} from '../actions/todo_actions';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};


export const todosReducer = (state = initialState, action) => {

  switch(action.type){
    case RECEIVE_TODOS:
      const newState = {};
      action.todos.forEach( todo => newState[todo.id] = todo);
      return newState;
        
    case RECEIVE_TODO:
      return Object.assign({}, state, {[action.todo.id]: action.todo });
    
    default:
      return state;
  }
};

