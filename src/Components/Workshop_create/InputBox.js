import React from 'react' ;

class InputBox extends React.Component {

    render() {
        if(this.props.type === "input") {
            return (
                <div>
                    <label>{this.props.label}</label>
                    <input  type={this.props.inputType} placeholder={this.props.placeholder} min={this.props.min} onChange={this.props.onChange} name={this.props.name}/>
                    {this.props.errMsg.length > 0 && <span>{this.props.errMsg}</span>}
                </div>
            )
        }
        if(this.props.type === "text") {
            return (
                <div>
                    <label>{this.props.label}</label>
                    <textarea rows={this.props.row} cols={this.props.col}/>
                </div>
            )
        }
        if(this.props.type === "dropD") {
            return (
                <div>
                    <label>{this.props.label}</label>
                    <select onChange={this.props.onChange} >
                        <option value="" disabled selected hidden>Please choose...</option>
                        {this.props.tags.map(tag=>{
                return <option value={tag}>{tag}</option>
            })}
                    </select>
                </div>
            )
        }
        return null
    }
}
export default InputBox ;