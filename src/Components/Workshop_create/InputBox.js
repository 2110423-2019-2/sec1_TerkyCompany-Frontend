import React from 'react' ;
import { Multiselect } from 'multiselect-react-dropdown';

class InputBox extends React.Component {
    render() {
 
        if(this.props.type === "input") {
            return (
                <span id={this.props.id}>
                    <label className={this.props.labelStyle}>{this.props.label}</label>
                    <input  type={this.props.inputType} placeholder={this.props.placeholder} min={this.props.min} onChange={this.props.onChange} name={this.props.name}/>
                    {this.props.errMsg.length > 0 && <span style={{color:"red"}}>{this.props.errMsg}</span>}
                </span>
            )
        }
        if(this.props.type === "text") {
            return (
                <div id={this.props.id}>
                    <label>{this.props.label}</label>
                    <br />
                    <textarea rows={this.props.row} cols={this.props.col} placeholder={this.props.placeholder}/>
                </div>
            )
        }
        if(this.props.type === "dropD") {
            return (
                <div id={this.props.id}>
                    <label>{this.props.label}</label>
                    <Multiselect options={this.props.options} onSelect={this.props.onSelect} selectedValues={this.props.tags} displayValue="name" closeIcon="cancel" style={this.props.style}/>
                </div>
            )
        }
        return null
    }
}
export default InputBox ;