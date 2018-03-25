import * as React from 'react';

export interface TodoProps {
    id: string;
    completed?: boolean;
    text?: string;
    onClick?: () => void;
}

export class Todo extends React.Component<TodoProps, {}> {

    render(): React.ReactNode {
        return (
            <li
                onClick={this.props.onClick}
                className={this.props.completed ? 'todo-list__item--completed' : 'todo-list__item--active'}
            >
            {this.props.text}
            </li>);
    }
}