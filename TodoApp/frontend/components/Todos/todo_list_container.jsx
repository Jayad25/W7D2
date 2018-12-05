import { allTodos } from '../../reducers/selectors';
import { connect } from 'react-redux';
import TodoList from './todo_list';

const mapStateToProps = state => ({
  todos: allTodos(state),
  state
});

const mapDispatchToProps = dispatch =>({
  receiveToDo: (todo) => dispatch(receiveToDo(todo))
});

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);

