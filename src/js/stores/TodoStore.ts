import todoApp, { ListByFilterType } from '../reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

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
    todoApp: ListByFilterType;
    status: Status;
}

export const todoStore = createStore<ListByFilterType>(
    todoApp,
    composeWithDevTools(applyMiddleware(thunk))
);
