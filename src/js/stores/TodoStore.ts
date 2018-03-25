import todoApp, { ListByFilterType } from '../reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export interface TodoState {
    id: string;
    completed?: boolean;
    text?: string;
    onClick?: () => void;
}

export interface TodoListState {
    todos: Array<TodoState>;
    status: Status;
}

export enum Status {
    ALL = 'ALL',
    ACTIVE = 'ACTIVE',
    COMPLETED = 'COMPLETED'
}

export interface TodoStore {
    todos: Array<TodoState>;
    status: Status;
}

export const todoStore = createStore<ListByFilterType>(
    todoApp,
    applyMiddleware(thunk)
);
