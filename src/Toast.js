import React, { Component } from 'react';
import "./Toast.css"

class Toast extends Component {

    render() {
        return (
            <div key={this.props.id.toString()} className="Toast"> {this.props.text} </div>
        );
    }
}

export default Toast;