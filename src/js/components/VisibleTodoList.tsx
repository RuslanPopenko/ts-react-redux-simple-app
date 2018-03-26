import * as React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { getVisibleTodos, getErrorMessage, getIsFetching } from '../reducers';
import { TodoList } from './TodoList';
import { Status, TodoState } from '../stores/TodoStore';

type VisibleTodoListProps = {
    filter: Status,
    errorMessage: string,
    todos: Array<TodoState>,
    isFetching: boolean,
    fetchTodos?: (status: Status) => void,
    toggleTodo?: () => void,
  };

class VisibleTodoList extends React.Component<VisibleTodoListProps, {}> {
  componentDidMount() {
    this.fetchData();
  }

  // tslint:disable-next-line:no-any
  componentDidUpdate(prevProps: any) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData();
    }
  }

  fetchData() {
    const { filter, fetchTodos } = this.props;
    if (fetchTodos) {
        fetchTodos(filter);
    }
  }

  render() {
    const { isFetching, errorMessage, toggleTodo, todos } = this.props;
    if (isFetching && !todos.length) {
      return <p>Loading...</p>;
    }
    if (errorMessage && !todos.length) {
        confirm('Press a button!'); 
    }

    return (
      <TodoList
        todos={todos}
        onTodoClick={toggleTodo}
      />
    );
  }
}

// tslint:disable-next-line:no-any
const mapStateToProps = (state: any, obj: any) => {
  const { params } = obj;  
  const filter = (params && params.filter) || Status.ALL;
  return {
    isFetching: getIsFetching(state, filter),
    errorMessage: getErrorMessage(state, filter),
    todos: getVisibleTodos(state, filter),
    filter,
  };
};

const VisibleTodoListContainer = connect<VisibleTodoListProps>(
  mapStateToProps,
  actions
)(VisibleTodoList);

export default VisibleTodoListContainer;
