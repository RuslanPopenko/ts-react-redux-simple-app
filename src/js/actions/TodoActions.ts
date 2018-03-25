import { TodoState } from '../stores/TodoStore';
import { v4 } from 'uuid';

export interface TodoAction {
    type: TodoActionType;
    payload: TodoState;
}

export enum TodoActionType {
    ADD_TODO = 'ADD_TODO',
    TOGGLE_TODO = 'TOGGLE_TODO',
    REMOVE_TODO = 'REMOVE_TODO'
}

export function addTodo (text: string): TodoAction {
    return {
        type: TodoActionType.ADD_TODO,
        payload: {
            id: v4(),
            text
        }
    };
}

export function toggleTodo (id: string): TodoAction {
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