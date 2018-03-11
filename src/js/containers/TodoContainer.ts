import {connect, Dispatch} from "react-redux";
import {addTodo, TodoAction} from "../actions/TodoActions";
import {AddTodo, AddTodoProps} from "../components/AddTodo";

function mapDispatchToProps(dispatch: Dispatch<TodoAction>): AddTodoProps {
    return {
        submit: (input: HTMLInputElement) => {
            dispatch(addTodo(input.value));
            input.value = '';
        }
    }
}

export default connect<AddTodoProps>(null, mapDispatchToProps)(AddTodo);