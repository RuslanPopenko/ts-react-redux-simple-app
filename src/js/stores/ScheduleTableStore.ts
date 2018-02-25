import { createStore } from 'redux';
import { scheduleTableReducer } from '../reducers/ScheduleTableReducer';
import { devToolsEnhancer } from 'redux-devtools-extension';

export interface ScheduleTableStoreState {
    rowsCount: number;
}

export const scheduleTableStore = createStore<ScheduleTableStoreState>(
    scheduleTableReducer,
    { rowsCount: 1 },
    devToolsEnhancer({})
);