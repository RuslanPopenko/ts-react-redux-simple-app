export const SCHEDULE_TABLE_ADD_ROW = 'SCHEDULE_TABLE_ADD_ROW';
export type SCHEDULE_TABLE_ADD_ROW = typeof SCHEDULE_TABLE_ADD_ROW;

export interface ScheduleTableAddRow {
    type: SCHEDULE_TABLE_ADD_ROW;
}

export function addRow(): ScheduleTableAddRow {
    return {
        type: SCHEDULE_TABLE_ADD_ROW
    };
}