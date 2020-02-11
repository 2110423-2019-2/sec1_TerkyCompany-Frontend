import React, { Component } from "react";
import ReactDOM from "react-dom";

class TextBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
        }
    }
    
    render() {
        if (this.state.isLoading) return null
        return (
            <div>
            <label>{this.props.titleName}</label>
            <input type={this.props.typeName} className={this.props.className} />
            </div>
        )
    }
}

export default TextBox;