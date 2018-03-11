import { TodoStore } from '../stores/TodoStore';
import { Store } from 'redux';
import { addTodo, toggleTodo } from '../actions/TodoActions';

export function initStore(todoStore: Store<TodoStore>): void {
    todoStore.dispatch(addTodo('New TODO'));
    todoStore.dispatch(addTodo('Even newer TODO'));
    todoStore.dispatch(addTodo('One more TODO'));
    todoStore.dispatch(toggleTodo(0));
}