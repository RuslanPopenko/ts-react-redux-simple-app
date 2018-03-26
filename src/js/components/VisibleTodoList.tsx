import * as React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { getVisibleTodos, getErrorMessage, getIsFetching, getCurrentFilter } from '../reducers';
import { TodoList } from './TodoList';
import { Status, TodoState } from '../stores/TodoStore';

type VisibleTodoListProps = {
    filter: Status,
    errorMessage: string,
    todos: Array<TodoState>,
    isFetching: boolean,
    fetchTodos?: (status: Status) => void,
    toggleTodo?: (id: string) => void,
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
        confirm(`There is an error: ${errorMessage}`);
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
const mapStateToProps = (state: any) => {
  const filter = getCurrentFilter(state);
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
