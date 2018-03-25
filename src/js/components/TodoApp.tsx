import * as React from 'react';
import { Footer } from './Footer';
import TodoContainer from '../containers/TodoContainer';
import VisibleTodoListContainer from './VisibleTodoList';

export class TodoApp extends React.Component {

    render(): React.ReactNode {
        return (
            <div className="app">
                <TodoContainer />
                <VisibleTodoListContainer />
                <Footer />
            </div>);
    }

}