import * as React from 'react';
import { StoreState } from '../types/StoreState';

export interface Props {
    name: string;
    enthusiasmLevel?: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
}

export default class Hello extends React.Component<Props, StoreState> {

    constructor(props: Props) {
        super(props);
    }

    render() {

        const enthusiasmLevel = this.props.enthusiasmLevel;
        if (!enthusiasmLevel || enthusiasmLevel < 1) {
            throw new Error('You could be a little more enthusiastic. :D');
        }

        return (
            <div className="hello">
                <div className="greeting">
                    Hello {this.props.name + this.getExclamationMarks(enthusiasmLevel)}
                </div>
                <div>
                    <button onClick={this.props.onDecrement}>-</button>
                    <button onClick={this.props.onIncrement}>+</button>
                </div>
            </div>
        );
    }

    private getExclamationMarks(numChars: number) {
        return Array(numChars + 1).join('!');
    }

}
