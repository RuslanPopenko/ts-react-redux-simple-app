import * as React from 'react';

export interface AddTodoProps {
    submit?: (input: HTMLInputElement) => void;
}

export class AddTodo extends React.Component<AddTodoProps, {}> {

    private input: HTMLInputElement;

    constructor(props: AddTodoProps) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <div className="add-todo">
                <input
                    className="add-todo__input"
                    placeholder="New Todo"
                    ref={(node) => this.input = node || new HTMLInputElement()}
                    onKeyUp={(e) => this.props.submit && e.keyCode === 13 && this.props.submit(this.input)}
                />
                <button className="add-todo__button" onClick={() => this.props.submit && this.props.submit(this.input)}>
                    Add Todo
                </button>
            </div>
        );
    }
}