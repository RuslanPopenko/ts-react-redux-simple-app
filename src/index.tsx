import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './js/config/registerServiceWorker';
import './styles/scss/index.css';
import { scheduleTableStore } from './js/stores/ScheduleTableStore';
import ScheduleTableContainer from './js/containers/ScheduleTableContainer';

ReactDOM.render(
    <Provider store={scheduleTableStore}>
        <ScheduleTableContainer/>
    </Provider>,
    document.getElementById('root') as HTMLElement
);

registerServiceWorker();
