import {Status} from "../stores/TodoStore";
import {connect, Dispatch} from "react-redux";
import {setNewStatus, StatusAction} from "../actions/StatusActions";
import {Radio, RadioProps} from "../components/Radio";

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
            dispatch(setNewStatus(ownProps.status));
        }
    };
}

export default connect<RadioProps>(mapStateToProps, mapDispatchToProps)(Radio);