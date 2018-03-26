import { combineReducers, Reducer } from 'redux';
import createList, * as fromList from './createList';
import { Status } from '../stores/TodoStore';

export interface ListByFilterType {
  ALL: fromList.CreateListState;
  ACTIVE: fromList.CreateListState;
  COMPLETED: fromList.CreateListState;
}

const todos: Reducer<ListByFilterType> = combineReducers({
  ALL: createList('ALL'),
  ACTIVE: createList('ACTIVE'),
  COMPLETED: createList('COMPLETED'),
});

export default todos;

export const getVisibleTodos = (state: ListByFilterType, filter: Status) => 
  fromList.getTodos(state[filter]);

export const getIsFetching = (state: ListByFilterType, filter: Status) =>
  fromList.getIsFetching(state[filter]);

export const getErrorMessage =  (state: ListByFilterType, filter: Status) =>
  fromList.getErrorMessage(state[filter]);
