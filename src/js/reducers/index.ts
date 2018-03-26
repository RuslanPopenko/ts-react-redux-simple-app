import { combineReducers, Reducer } from 'redux';
import createList, * as fromList from './createList';
import { Status } from '../stores/TodoStore';

export interface ListByFilterType {
  ALL: fromList.CreateListState;
  ACTIVE: fromList.CreateListState;
  COMPLETED: fromList.CreateListState;
  current: Status;
}

// tslint:disable-next-line:no-any
const filterStatus = (state: any = 'ALL', action: fromList.TodoRequestAction) => {
  switch (action.type) {
      case fromList.TodoRequestActionType.CHANGE_FILTER_STATUS_SUCCESS:
          return action.payload.filter;
      default:
          return state;
  }
};

const todos: Reducer<ListByFilterType> = combineReducers({
  ALL: createList('ALL'),
  ACTIVE: createList('ACTIVE'),
  COMPLETED: createList('COMPLETED'),
  current: filterStatus
});

export default todos;

export const getVisibleTodos = (state: ListByFilterType, filter: Status) => 
  fromList.getTodos(state[filter]);

export const getIsFetching = (state: ListByFilterType, filter: Status) =>
  fromList.getIsFetching(state[filter]);

export const getErrorMessage =  (state: ListByFilterType, filter: Status) =>
  fromList.getErrorMessage(state[filter]);

export const getCurrentFilter = (state: ListByFilterType) => 
  state.current;
