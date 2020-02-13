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
        if(this.props.type === "input") {
            return (
                <span>
                    <label>{this.props.label}</label>
                    <input  type={this.props.inputType} placeholder={this.props.placeholder} min={this.props.min} onChange={this.props.onChange} name={this.props.name}/>
                    {this.props.errMsg.length > 0 && <span>{this.props.errMsg}</span>}
                </span>
            )
        }
        if(this.props.type === "text") {
            return (
                <div>
                    <label>{this.props.label}</label>
                    <br />
                    <textarea rows={this.props.row} cols={this.props.col} onChange={this.props.onChange} name={this.props.name}/>
                </div>
            )
        }
    }
}

export default TextBox;