import {combineReducers, createStore} from "redux";
import {todoListReducer} from "../reducers/TodoReducer";
import {statusReducer} from "../reducers/StatusReducer";
import {initStore} from "../util/Initializers";

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
    ALL = "ALL",
    ACTIVE = "ACTIVE",
    COMPLETED = "ACTIVE"
}

export interface TodoStore {
    todos: Array<TodoState>;
    status: Status;
}

export const todoStore = createStore<TodoStore>(
    combineReducers({
        todos: todoListReducer,
        status: statusReducer
    })
);

initStore(todoStore);


