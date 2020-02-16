import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Multiselect } from 'multiselect-react-dropdown';

class InputBox extends Component {
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
                    <span>{this.props.errMsg}</span>
                </div>
            )
        }
        else if(this.props.type === "dropD") {
            return (
                <div>
                    <label>{this.props.label}</label>
                    <Multiselect options={this.props.options} onSelect = {this.props.onSelect} selectedValues={this.props.selectedValues} displayValue="name" closeIcon="close"/>
                    <span>{this.props.errMsg}</span>
                </div>
            )
        }
    }
}

export default InputBox;