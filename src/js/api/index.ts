import { v4 } from 'uuid';
import { Status, TodoState } from '../stores/TodoStore';

const fakeDatabase: Array<TodoState> = [{
    id: v4(),
    text: 'hey',
    completed: true,
}, {
    id: v4(),
    text: 'ho',
    completed: true,
}, {
    id: v4(),
    text: 'let’s go',
    completed: false,
}];

const delay = (ms: number) =>
    new Promise(resolve => setTimeout(resolve, ms));

export const fetchTodos = (filter: Status) =>
    delay(500).then(() => {
        switch (filter) {
            case Status.ALL:
                return fakeDatabase;
            case Status.ACTIVE:
                return fakeDatabase.filter(t => !t.completed);
            case Status.COMPLETED:
                return fakeDatabase.filter(t => t.completed);
            default:
                throw new Error(`Unknown filter: ${filter}`);
        }
    });

export const addTodo = (text: string) =>
    delay(500).then(() => {
        const todo = {
            id: v4(),
            text,
            completed: false,
        };
        fakeDatabase.push(todo);
        return todo;
    });

export const toggleTodo = (id: string) =>
    delay(500).then(() => {
        const todo = fakeDatabase.find(t => t.id === id);
        if (!todo) { 
            throw new Error(`Todo with id=${todo} doesn't exist.`);
        }
        todo.completed = !todo.completed;
        return todo;
    });
