import { Status } from '../stores/TodoStore';
import { connect, Dispatch } from 'react-redux';
import { StatusAction } from '../actions/StatusActions';
import { Radio, RadioProps } from '../components/Radio';
import { TodoRequestActionType } from '../reducers/createList';

export interface StatusOwnProps {
    status: Status;
}

function mapStateToProps(state: Status, ownProps: StatusOwnProps) {
    return {
        active: ownProps.status === state
    };
}
function  mapDispatchToProps(dispatch: Dispatch<StatusAction>, ownProps: StatusOwnProps) {
    return {
        onChange: () => {
            dispatch({
                type: TodoRequestActionType.CHANGE_FILTER_STATUS_SUCCESS,
                payload: {
                    filter: ownProps.status
                }
            });
        }
    };
}

export default connect<RadioProps>(mapStateToProps, mapDispatchToProps)(Radio);