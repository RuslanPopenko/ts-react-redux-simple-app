import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Hello from './js/containers/Hello';
import { Provider } from 'react-redux';
import registerServiceWorker from './js/config/registerServiceWorker';
import { createStore } from 'redux';
import { enthusiasm } from './js/reducers/index';
import { StoreState }   from './js/types/StoreState';
import './styles/scss/index.css';

const store = createStore<StoreState>(enthusiasm, {
    enthusiasmLevel: 1,
    languageName: 'TypeScript',
});

ReactDOM.render(
    <Provider store={store}>
        <Hello />
    </Provider>,
    document.getElementById('root') as HTMLElement
);

registerServiceWorker();
