import React from 'react' ;
import { Multiselect } from 'multiselect-react-dropdown';
import './InputBox.css' ;

class InputBox extends React.Component {
    render() {
 
        if(this.props.type === "input") {
            return (
                <div id={this.props.id}>
                    <label className={this.props.labelStyle}>{this.props.label}</label>
                    <input  type={this.props.inputType} placeholder={this.props.placeholder} min={this.props.min} onChange={this.props.onChange} name={this.props.name} class="form-control" required/>
                    {(this.props.errMsg.length === 0 && <br /> ) || (this.props.errMsg.length > 0 && <span className="errMsg">{this.props.errMsg}</span>)}
                </div>
            )
        }
        if(this.props.type === "text") {
            return (
                <div id={this.props.id}>
                    <label>{this.props.label}</label>
                    <br />
                    <textarea rows={this.props.row} cols={this.props.col} placeholder={this.props.placeholder} name={this.props.name} onChange={this.props.onChange} class="form-control"/>
                    {(this.props.errMsg.length === 0 && <br /> ) || (this.props.errMsg.length > 0 && <span className="errMsg">{this.props.errMsg}</span>)}
                </div>
            )
        }
        if(this.props.type === "file") {
            return (
                <div>
                    <label >{this.props.label}</label>
                    <br />
                    <input  type={this.props.inputType} value={this.props.value} min={this.props.min} onChange={this.props.onChange} name={this.props.name} class="form-control-file"/>
                    {(this.props.errMsg.length === 0 && <br /> ) || (this.props.errMsg.length > 0 && <span className="errMsg">{this.props.errMsg}</span>)}
                </div>
            )
        }
        if(this.props.type === "dropD") {
            return (
                <div id={this.props.id}>
                    <label>{this.props.label}</label>
                    <Multiselect options={this.props.options} onSelect={this.props.onSelect} onRemove={this.props.onRemove} selectedValues={this.props.tags} displayValue="name" closeIcon="cancel" style={this.props.style} placeholder={this.props.placeholder}/>
                    {(this.props.errMsg.length === 0 && <br /> ) || (this.props.errMsg.length > 0 && <span className="errMsg">{this.props.errMsg}</span>)}
                </div>
            )
        }
        return null
    }
}
export default InputBox ;