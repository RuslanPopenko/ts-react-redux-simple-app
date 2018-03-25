import { Status, TodoListState, TodoState } from '../stores/TodoStore';
import { connect, Dispatch } from 'react-redux';
import { TodoAction, toggleTodo } from '../actions/TodoActions';
import { TodoList, TodoListProps } from '../components/TodoList';
import { TodoProps } from '../components/Todo';

function getVisibleTodos (todos: Array<TodoState>, status: Status): Array<TodoProps> {
    switch (status) {
        case Status.ALL:
            return todos;
        case Status.COMPLETED:
            return todos.filter(
                t => t.completed
            );
        case Status.ACTIVE:
            return todos.filter(
                t => !t.completed
            );
        default:
            return [];
    }
}

function mapStateToProps(state: TodoListState) {
    return {
        todos: getVisibleTodos(state.todos, state.status)
    };
}

function mapDispatchToProps(dispatch: Dispatch<TodoAction>) {
    return {
        onTodoClick: (id: string) => {
            dispatch(toggleTodo(id));
        }
    };
}

export default connect<TodoListProps>(mapStateToProps, mapDispatchToProps)(TodoList);