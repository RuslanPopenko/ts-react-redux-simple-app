import { TodoState } from '../stores/TodoStore';

export interface TodoAction {
    type: TodoActionType;
    payload: TodoState;
}

export enum TodoActionType {
    ADD_TODO = 'ADD_TODO',
    TOGGLE_TODO = 'TOGGLE_TODO',
    REMOVE_TODO = 'REMOVE_TODO'
}

let nextTodoId = 0;

export function addTodo (text: string): TodoAction {
    return {
        type: TodoActionType.ADD_TODO,
        payload: {
            id: nextTodoId++,
            text
        }
    };
}

export function toggleTodo (id: number): TodoAction {
    return {
        type: TodoActionType.TOGGLE_TODO,
        payload: {
            id
        }
    };
}

// export function removeTodo (id: number): TodoAction {
//     return {
//         type: TodoActionType.REMOVE_TODO,
//         payload: {
//             id
//         }
//     };
// }