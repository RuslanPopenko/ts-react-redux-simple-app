import * as React from "react";
import {StatusOwnProps} from "../containers/StatusContainer";

export interface RadioProps {
    active: boolean;
    onChange?: () => void;
}

export class Radio extends React.Component<RadioProps & StatusOwnProps, {}> {

    render(): React.ReactNode {
        return (<label className="filter">
            <input checked={this.props.active}
                   type="radio"
                   name="filter"
                   className="filter__radio"
                   onChange={this.props.onChange}
            />
            {this.props.children &&
            <span className={`filter__label--${this.props.children.toString().toLowerCase()}`}>{this.props.children}</span>}
        </label>);
    }
}