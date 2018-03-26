import * as api from '../api';
import { getIsFetching } from '../reducers';
import { Status } from '../stores/TodoStore';
import { TodoRequestActionType } from '../reducers/createList';

// tslint:disable-next-line:no-any
export const fetchTodos = (filter: Status) => (dispatch: any, getState: any) => {
  if (getIsFetching(getState(), filter)) {
    return Promise.resolve();
  }

  dispatch({
    type: TodoRequestActionType.FETCH_TODOS_REQUEST,
    payload: {
        filter
    }
  });

  return api.fetchTodos(filter).then(
    fetchedTodos => {
      dispatch({
        type: TodoRequestActionType.FETCH_TODOS_SUCCESS,
        payload: {
            filter,
            todos: fetchedTodos,
        }
      });
    },
    error => {
      dispatch({
        type: TodoRequestActionType.FETCH_TODOS_FAILURE,
        filter,
        message: error.message || 'Something went wrong.',
      });
    }
  );
};

// tslint:disable-next-line:no-any
export const addTodo = (text: string) => (dispatch: any) =>
  api.addTodo(text).then(addedTodo => {
    dispatch({
      type: TodoRequestActionType.ADD_TODO_SUCCESS,
      payload: {
        actionTodo: addedTodo,
      }
    });
  });

// tslint:disable-next-line:no-any
export const toggleTodo = (id: string) => (dispatch: any) =>
  api.toggleTodo(id).then(toogledTodo => {
    dispatch({
      type: TodoRequestActionType.TOGGLE_TODO_SUCCESS,
      payload: {
        actionTodo: toogledTodo,
      }
    });
  });
