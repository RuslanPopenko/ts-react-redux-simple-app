import {Status} from "../stores/TodoStore";

export interface StatusAction {
    type: StatusActionType;
    payload: Status
}

export enum StatusActionType {
    SET_NEW = "SET_NEW"
}

export function setNewStatus(status: Status): StatusAction {
    return {
        type: StatusActionType.SET_NEW,
        payload: status
    };
}