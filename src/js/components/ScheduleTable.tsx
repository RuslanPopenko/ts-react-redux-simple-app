import * as React from 'react';
import { ScheduleTableRow } from './ScheduleTableRow';
import { ScheduleTableStoreState } from '../stores/ScheduleTableStore';

export interface ScheduleTableProps {
    nameColumnName: string;
    dateColumnName: string;
    timeColumnName: string;
    addRowButtonName: string;
    onAddRow?: () => void;
    rowsCount?: number;
}

export class ScheduleTable extends React.Component<ScheduleTableProps, ScheduleTableStoreState> {

    render() {
        const rows = [];
        const rowsCount = this.props.rowsCount || 1;
        for (let i = 0; i < rowsCount; i++) {
            rows.push(<ScheduleTableRow key={i} />);
        }
        return (
            <div className="ScheduleTableWrapper">
                <table className="ScheduleTable">
                    <thead>
                        <tr>
                            <th>{this.props.nameColumnName}</th>
                            <th>{this.props.dateColumnName}</th>
                            <th>{this.props.timeColumnName}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
                <button onClick={this.props.onAddRow}>{this.props.addRowButtonName}</button>
            </div>
        );
    }

}