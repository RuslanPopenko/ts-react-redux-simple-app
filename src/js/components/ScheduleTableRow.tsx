import * as React from 'react';

interface ScheduleTableRowProps {
}

interface ScheduleTableRowState {
}

export class ScheduleTableRow extends React.Component<ScheduleTableRowProps, ScheduleTableRowState> {

    render() {
        const date = new Date();
        return (
            <tr>
                <td>Some task</td>
                <td>{this.getDate(date)}</td>
                <td>{this.getTime(date)}</td>
            </tr>
        );
    }

    private getDate(date: Date): string {
        return [
            this.addOptionallyZero(date.getDate()),
            this.addOptionallyZero(date.getMonth() + 1),
            date.getFullYear()
        ].join('/');
    }

    private getTime(date: Date): string {
        return this.addOptionallyZero(date.getHours()) + ':' + this.addOptionallyZero(date.getMinutes());
    }

    private addOptionallyZero(num: number): string {
        return num < 10 ? '0' + num : num.toString();
    }

}