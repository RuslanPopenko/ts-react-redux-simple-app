import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './js/config/registerServiceWorker';
import './styles/css/index.css';
import { todoStore } from './js/stores/TodoStore';
import { TodoApp } from './js/components/TodoApp';

ReactDOM.render(
    <Provider store={todoStore}>
        <TodoApp />
    </Provider>,
    document.getElementById('root') as HTMLElement
);

registerServiceWorker();
