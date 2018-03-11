import { combineReducers, createStore } from 'redux';
import { todoListReducer } from '../reducers/TodoReducer';
import { statusReducer } from '../reducers/StatusReducer';

export interface TodoState {
    id: number;
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
            {id: 1, text: 'New TODO'},
            {id: 2, text: 'Even newer TODO'},
            {id: 3, text: 'One more TODO'},
        ],
        status: Status.ALL
    }
);
