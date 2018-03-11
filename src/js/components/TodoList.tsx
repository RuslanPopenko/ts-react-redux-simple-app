import * as React from 'react';
import { Todo, TodoProps } from './Todo';
import * as ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export class TodoListProps {
    todos: Array<TodoProps>;
    onTodoClick?: (id: number) => void;
}

export class TodoList extends React.Component<TodoListProps, {}> {
    render(): React.ReactNode {
        return (
            <ReactCSSTransitionGroup
                component="ul"
                className="todo-list"
                transitionName="todo-transition"
                transitionEnterTimeout={70}
                transitionLeaveTimeout={70}
            >
                {this.props.todos.map(todo =>
                    <Todo
                        key={todo.id}
                        {...todo}
                        onClick={() => this.props.onTodoClick && this.props.onTodoClick(todo.id)}
                    />
                )}
            </ReactCSSTransitionGroup>
        );
    }
}