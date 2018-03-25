import { combineReducers, createStore } from 'redux';
import { todoListReducer } from '../reducers/TodoReducer';
import { statusReducer } from '../reducers/StatusReducer';
import { v4 } from 'uuid';

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

export const todoStore = createStore<TodoStore>(
    combineReducers({
        todos: todoListReducer,
        status: statusReducer
    }),
    {
        todos: [
            {id: v4(), text: 'New TODO'},
            {id: v4(), text: 'Even newer TODO'},
            {id: v4(), text: 'One more TODO'},
        ],
        status: Status.ALL
    }
);
