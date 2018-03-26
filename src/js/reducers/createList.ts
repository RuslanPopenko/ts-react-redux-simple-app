import { combineReducers } from 'redux';
import { Status, TodoState } from '../stores/TodoStore';

export interface CreateListState {
    getTodos: Array<TodoState>;
    isFetching: boolean;
    errorMessage: string; 
    filterStatus: Status;
}

export enum TodoRequestActionType {
    FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
    ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS',
    TOGGLE_TODO_SUCCESS = 'TOGGLE_TODO_SUCCESS',
    FETCH_TODOS_REQUEST = 'FETCH_TODOS_REQUEST',
    FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE',
    CHANGE_FILTER_STATUS_SUCCESS = 'CHANGE_FILTER_STATUS_SUCCESS' 
}

export interface TodoRequestAction {
    type: TodoRequestActionType;
    payload: {
      actionTodo: TodoState,
      todos: Array<TodoState>,
      filter: Status,
      message: string
    };
}

const createList = (filter: string) => {
  const handleToggle = (state: Array<TodoState>, action: TodoRequestAction) => {
    // tslint:disable-next-line:no-shadowed-variable
    const { actionTodo: toogle } = action.payload;
    const shouldRemove =  toogle && (
      (toogle.completed && filter === Status.ACTIVE) ||
      (!toogle.completed && filter === Status.COMPLETED)
    );
    const distinct = (todo: TodoState) => todo.id !== toogle.id;
    return shouldRemove ?
      state.filter(distinct) :
      state.map(todo => distinct(todo) ? todo : toogle );
  };

  // tslint:disable-next-line:no-shadowed-variable
  const getTodos = (state = [], action: TodoRequestAction) => {
    switch (action.type) {
      case TodoRequestActionType.FETCH_TODOS_SUCCESS:
        return filter === action.payload.filter ?
          action.payload.todos :
          state;
      case TodoRequestActionType.ADD_TODO_SUCCESS:
        return filter !== Status.COMPLETED ?
          [...state, action.payload.actionTodo] :
          state;
      case TodoRequestActionType.TOGGLE_TODO_SUCCESS:
        return handleToggle(state, action);
      default:
        return state;
    }
  };

  const isFetching = (state = false, action: TodoRequestAction) => {
    if (!action.payload || filter !== action.payload.filter) {
      return state;
    }
    switch (action.type) {
      case TodoRequestActionType.FETCH_TODOS_REQUEST:
        return true;
      case TodoRequestActionType.FETCH_TODOS_SUCCESS:
      case TodoRequestActionType.FETCH_TODOS_FAILURE:
        return false;
      default:
        return state;
    }
  };

  const errorMessage = (state = null, action: TodoRequestAction) => {
    if (!action.payload || filter !== action.payload.filter) {
      return state;
    }
    switch (action.type) {
      case TodoRequestActionType.FETCH_TODOS_FAILURE:
        return action.payload.message;
      case TodoRequestActionType.FETCH_TODOS_REQUEST:
      case TodoRequestActionType.FETCH_TODOS_SUCCESS:
        return null;
      default:
        return state;
    }
  };

  return combineReducers({
    getTodos,
    isFetching,
    errorMessage,
  });
};

export default createList;

export const getTodos = (state: CreateListState) => state.getTodos;
export const getIsFetching = (state: CreateListState) => state.isFetching;
export const getErrorMessage = (state: CreateListState) => state.errorMessage;
