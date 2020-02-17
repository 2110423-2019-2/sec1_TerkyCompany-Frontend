import React, { Component } from "react"
import ReactDOM from "react-dom"
import './InputBox.css'
import { Multiselect } from 'multiselect-react-dropdown'

class InputBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
        }
        this.style = {
            chips: {
              background: "#cc670a"
            },
            searchBox: {
                background: "#ffffff"
            },
            optionContainer: {
                background: "white",
            },
        };
    }
    
    render() {
        if (this.state.isLoading) return null
        if(this.props.type === "input") {
            return (
                <div>
                    <label >{this.props.label}</label>
                    <br />
                    <input  type={this.props.inputType} value={this.props.value} min={this.props.min} onChange={this.props.onChange} name={this.props.name} class="form-control"/>
                    {(this.props.errMsg.length == 0 && <br /> ) || (this.props.errMsg.length > 0 && <span className="errMsg">{this.props.errMsg}</span>)}
                </div>
            )
        }
        else if(this.props.type === "file") {
            return (
                <div>
                    <label >{this.props.label}</label>
                    <br />
                    <input  type={this.props.inputType} value={this.props.value} min={this.props.min} onChange={this.props.onChange} name={this.props.name} class="form-control-file"/>
                    {(this.props.errMsg.length == 0 && <br /> ) || (this.props.errMsg.length > 0 && <span className="errMsg">{this.props.errMsg}</span>)}
                </div>
            )
        }
        else if(this.props.type === "text") {
            return (
                <div>
                    <label>{this.props.label}</label>
                    <br />
                    <textarea rows={this.props.row} cols={this.props.col} onChange={this.props.onChange} name={this.props.name} class="form-control"/>
                    {(this.props.errMsg.length == 0 && <br /> ) || (this.props.errMsg.length > 0 && <span className="errMsg">{this.props.errMsg}</span>)}
                </div>
            )
        }
        else if(this.props.type === "dropD") {
            return (
                <div>
                    <label>{this.props.label}</label>
                    <Multiselect options={this.props.options} onSelect = {this.props.onSelect} onRemove = {this.props.onRemove} 
                    selectedValues={this.props.selectedValues} displayValue="name" closeIcon="close"
                    style={this.style}/>
                    {(this.props.errMsg.length == 0 && <br /> ) || (this.props.errMsg.length > 0 && <span className="errMsg">{this.props.errMsg}</span>)}
                </div>
            )
        }
    }
}

export default InputBox