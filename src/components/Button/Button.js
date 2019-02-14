import React, { Component } from 'react';
import './Button.scss';

class Button extends Component {
    render() {
        return (
            <button onClick={this.props.onClick} className={'Button ' + this.props.className} style={ { backgroundImage: `url(${this.props.backgroundImage})`} } > {this.props.name} </button>
        )
    }
}
export default Button;
