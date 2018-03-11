import {TodoAction, TodoActionType} from "../actions/TodoActions";
import {TodoState} from "../stores/TodoStore";

function todo(state: TodoState, action: TodoAction) {
    switch (action.type) {
        case TodoActionType.ADD_TODO:
            return {
                id: action.payload.id,
                text: action.payload.text,
                completed: false
            };
        case TodoActionType.TOGGLE_TODO:
            if (state.id !== action.payload.id) {
                return state;
            }

            return {
                ...state,
                completed: !state.completed
            };
        default:
            return state;
    }
}

export function todoListReducer(state: Array<TodoState>, action: TodoAction) {
    switch (action.type) {
        case TodoActionType.ADD_TODO:
            return [
                ...state,
                todo({id: -1}, action)
            ];
        case TodoActionType.TOGGLE_TODO:
            return state.map(t =>
                todo(t, action)
            );
        case TodoActionType.REMOVE_TODO:
            return state.filter(item => item.id !== action.payload.id);
        default:
            return state;
    }
}



