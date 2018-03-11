import { Status } from '../stores/TodoStore';
import { StatusAction, StatusActionType } from '../actions/StatusActions';

export function statusReducer(state: Status = Status.ALL, action: StatusAction) {
    switch (action.type) {
        case StatusActionType.SET_NEW:
            return action.payload;
        default:
            return state;
    }
}