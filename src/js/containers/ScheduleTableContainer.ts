import { ScheduleTable, ScheduleTableProps } from '../components/ScheduleTable';
import * as actions from '../actions/ScheduleTableActions';
import { connect, Dispatch } from 'react-redux';
import { ScheduleTableStoreState } from '../stores/ScheduleTableStore';

export function mapStateToProps({ rowsCount }: ScheduleTableStoreState) {
    return {
        nameColumnName: 'Name ',
        dateColumnName: 'Date',
        timeColumnName: 'Time',
        addRowButtonName: 'Add row',
        rowsCount
    };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.ScheduleTableAddRow>) {
    return {
        onAddRow: () => dispatch(actions.addRow())
    };
}

export default connect<ScheduleTableProps>(mapStateToProps, mapDispatchToProps)(ScheduleTable);