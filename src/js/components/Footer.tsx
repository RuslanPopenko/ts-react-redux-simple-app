import * as React from 'react';
import StatusContainer from '../containers/StatusContainer';
import { Status } from '../stores/TodoStore';

export class Footer extends React.Component<{}, {}> {

    render(): React.ReactNode {
        return (
            <fieldset className="filters">
                <legend className="filters__title">Show:</legend>
                <StatusContainer status={Status.ALL}>All</StatusContainer>
                <StatusContainer status={Status.ACTIVE}>Active</StatusContainer>
                <StatusContainer status={Status.COMPLETED}>Completed</StatusContainer>
            </fieldset>
        );
    }
}