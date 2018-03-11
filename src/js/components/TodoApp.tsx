import * as React from 'react';
import { Footer } from './Footer';
import TodoContainer from '../containers/TodoContainer';
import TodoListContainer from '../containers/TodoListContainer';

export class TodoApp extends React.Component<{}, {}> {

    render(): React.ReactNode {
        return (
            <div className="app">
                <TodoContainer />
                <TodoListContainer />
                <Footer />
            </div>);
    }

}