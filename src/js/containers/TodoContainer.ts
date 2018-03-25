import { connect } from 'react-redux';
import { addTodo } from '../actions';
import { AddTodo, AddTodoProps } from '../components/AddTodo';

// tslint:disable-next-line:no-any
function mapDispatchToProps(dispatch: any): AddTodoProps {
    return {
        submit: (input: HTMLInputElement) => {
            dispatch(addTodo(input.value));
            input.value = '';
        }
    };
}

export default connect<AddTodoProps>(null, mapDispatchToProps)(AddTodo);