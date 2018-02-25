import { SCHEDULE_TABLE_ADD_ROW, ScheduleTableAddRow } from '../actions/ScheduleTableActions';
import { ScheduleTableStoreState } from '../stores/ScheduleTableStore';

export function scheduleTableReducer(state: ScheduleTableStoreState,
                                     action: ScheduleTableAddRow): ScheduleTableStoreState {
    switch (action.type) {
        case SCHEDULE_TABLE_ADD_ROW:
            return {
                ...state,
                rowsCount: state.rowsCount + 1
            };
        default:
            return state;
    }
}