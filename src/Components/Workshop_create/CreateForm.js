import React from 'react' ;
import InputBox from './InputBox' ;
import './CreateForm.css'

class Form extends React.Component {
    constructor(props) {
        super(props) ;
        this.state = {
            isLoading : false,
            errMsg: {
                workshopName: '',
                cap: '',
                cost: '',
            },
            content:{
                workshopName:null,
                workshopPic:null,
                date:null,
                sTime:null,
                eTime:null,
                cap:0,
                cost:0,
                place:null,
                ddate:null,
                dtime:null,
                description:null,
                tags:[]
            },
            options: [{name: 'Srigar', id: 1},{name: 'Sam', id: 2},{name: 'Johnny', id: 3}],
        }
        this.handleChange = this.handleChange.bind(this) ;
        this.handleChoose = this.handleChoose.bind(this) ;
    }

    handleChange = (e) => {
        e.preventDefault() ;
        const {name,value} = e.target; 
        let err = this.state.errMsg ;
        let content = this.state.content ;
        switch(name) {
            case "workshopName":
                err.workshopName = value.length < 5 ? "must be at least 5 character" : '' ;
                content.workshopName = value ;
                break;
            case "workshopPic" :
                content.workshopPic = value ;
                break;
            case "date" :
                content.date = value ;
                break;
            case "sTime" :
                content.sTime = value ;
                break;
            case "eTime" :
                content.eTime = value ;
                break;
            case "cap":
                err.cap = (value < 0 || value > 1000) ? "must be number between 0-1000" : '' ;
                content.cap = value ;
                break;
            case "cost":
                err.cost = value < 0 ? "must be positive number" : '' ;
                content.cost = value ;
                break;
            case "place" :
                content.place = value ;
                break;
            case "ddate" :
                content.ddate = value ;
                break;
            case "dtime" :
                content.dtime = value ;
                break;
            case "description" :
                content.description = value ;
                break;
            case "tags" :
                content.tags = value ;
                break;
            default:
                console.log(name)
                break;
        }
        this.setState({errMsg:err, content:content});
    }

    handleSelect = (selectedList, selectedItem) => {
        console.log(this);
        let err = this.state.errMsg ;
        let content = this.state.content ;
        content.tags = selectedList;
        this.setState({errMsg:err, content:content});
    }

    submitclick() {
        console.log("submit clicked")
        console.log(window.location.host)
        console.log(this.state);
        let errMsg = this.state.errMsg ;
        if(errMsg.workshopName.length > 0 || errMsg.cap.length > 0 || errMsg.cost.length > 0) {
            alert("Invalid input")
        }
        else {
            alert("Submitted")
        }
        
    }

    cancelclick() {
        console.log("cancel clicked")
        console.log(window.location.host)
    }

    handleChoose = (e) => {
        let val = e.target.value ;
        var ctag = this.state.choseTag ;
        var tag = this.state.tags ;
        if(!ctag.includes(val)){
            ctag.push(val)
            tag = tag.filter(e => e !== val)
        }
        this.setState({choseTag:ctag, tags:tag}) ;
    }

    removeTag(tagName) {
        var tag = this.state.choseTag 
        if(tag.includes(tagName)){
            tag = tag.filter(e => e !== tagName)
        }
    }
    render() {
        if (this.state.isLoading) return null
        console.log("hello Create form")
        const style = {chips: { background: "#cc670a" }, searchBox: {background: "white" } }
        return (
            <div id="flex-container">
                <div className="form-body">
                    <form>
                        <InputBox label="Workshop's Name"               name="workshopName" type="input" inputType="text"   onChange={this.handleChange} errMsg={this.state.errMsg.workshopName} placeholder="Workshop's name" />
                        <br/>
                        <InputBox label="Workshop's profile picture"    name="workshopPic"  type="input" inputType="file"   onChange={this.handleChange} errMsg="" />
                        <br/>
                        <InputBox label="Date"                          name="date"         type="input" inputType="date"   onChange={this.handleChange} errMsg="" />
                        <br/>
                        <InputBox label="Start time"                    name="sTime"        type="input" inputType="time"   onChange={this.handleChange} errMsg="" />
                        <InputBox label="End time"                      name="eTime"        type="input" inputType="time"   onChange={this.handleChange} errMsg="" />
                        <br/>
                        <InputBox label="Capacity"                      name="cap"          type="input" inputType="number" onChange={this.handleChange} errMsg={this.state.errMsg.cap}  onChange={this.handleChange} min="1" placeholder="Number"/>
                        <br/>
                        <InputBox label="Cost"                          name="cost"         type="input" inputType="number" onChange={this.handleChange} errMsg={this.state.errMsg.cost} onChange={this.handleChange} min="1" placeholder="Baht"/>
                        <br/>
                        <InputBox label="Place"                         name="place"        type="text"  row={4} col={50}   onChange={this.handleChange} placeholder="Location of the workshop"/>
                        <InputBox label="Deadline date"                 name="ddate"        type="input" inputType="date"   onChange={this.handleChange} errMsg="" />
                        <InputBox label="Deadline time"                 name="dtime"        type="input" inputType="time"   onChange={this.handleChange} errMsg="" />
                        <br/>
                        <InputBox label="Description"                   name="description"  type="text"  row={4} col={50}   onChange={this.handleChange} placeholder="Briefly explain the workshop"/>
                        <InputBox label="Tags"                          name="tags"         type="dropD" options={this.state.options} tags={this.state.content.tags} onSelect={this.handleSelect} style={style}/>
                    </form>
                </div>
                <div id="button-body">
                            <button className="myButton" onClick={() => this.submitclick()}>Submit</button>
                            <button onClick={() => this.cancelclick()}>Cancel</button>
                </div>
            </div>
        )
    }
}

export default Form ;