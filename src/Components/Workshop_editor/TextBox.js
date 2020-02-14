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
                <div>
                    <label >{this.props.label}</label>
                    <br />
                    <input  type={this.props.inputType} value={this.props.value} min={this.props.min} onChange={this.props.onChange} name={this.props.name} class="form-control"/>
                    {this.props.errMsg.length > 0 && <span>{this.props.errMsg}</span>}
                    <br />
                </div>
            )
        }
        else if(this.props.type === "file") {
            return (
                <div>
                    <label >{this.props.label}</label>
                    <br />
                    <input  type={this.props.inputType} value={this.props.value} min={this.props.min} onChange={this.props.onChange} name={this.props.name} class="form-control-file"/>
                    {this.props.errMsg.length > 0 && <span>{this.props.errMsg}</span>}
                    <br />
                </div>
            )
        }
        else if(this.props.type === "text") {
            return (
                <div>
                    <label>{this.props.label}</label>
                    <br />
                    <textarea rows={this.props.row} cols={this.props.col} onChange={this.props.onChange} name={this.props.name} class="form-control"/>
                </div>
            )
        }
    }
}

export default TextBox;