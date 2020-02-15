import React from 'react' ;
import InputBox from './InputBox' ;
import './CreateForm.css'

class Form extends React.Component {
    constructor(props) {
        super(props) ;
        this.state = {
            isLoading : false,
            errMsg: {
                workshopName:'',
                workshopPic:'',
                date:'',
                sTime:'',
                eTime:'',
                cap:'',
                cost:'',
                place:'',
                ddate:'',
                dtime:'',
                description:'',
                tags:''
            },
            content:{
                workshopName:'',
                workshopPic:'',
                date:'',
                sTime:'',
                eTime:'',
                cap:'',
                cost:'',
                place:'',
                ddate:'',
                dtime:'',
                description:'',
                tags:[]
            },
            options: [{name: 'Srigar', id: 1},{name: 'Sam', id: 2},{name: 'Johnny', id: 3}]
        }
        this.handleChange = this.handleChange.bind(this) ;
        this.handleSelect = this.handleSelect.bind(this) ;
        this.handleRemove = this.handleRemove.bind(this) ;
        this.handleSubmit = this.handleSubmit.bind(this) ;
        this.handleCancel = this.handleCancel.bind(this) ;
    }

    handleChange = (e) => {
        e.preventDefault() ;
        const {name,value} = e.target; 
        let err = this.state.errMsg ;
        let content = this.state.content ;
        switch(name) {
            case "workshopName":
                if (value.length < 5) {
                    err.workshopName = "must be at least 5 character"
                }
                else {
                    err.workshopName = ""
                    content.workshopName = value ;
                }
                
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
                if (value < 0 || value > 1000) {
                    err.cap = "must be number between 0-1000"
                }
                else {
                    content.cap = value ;
                    err.cap = ""
                }
                break;
            case "cost":
                if (value < 0) {
                    err.cost = "must be positive number"
                }
                else {
                    err.cost = "" 
                    content.cost = value
                }
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
        let err = this.state.errMsg ;
        let content = this.state.content ;
        content.tags = selectedList;
        this.setState({errMsg:err, content:content});
        console.log(this.state.content)
    }

    handleRemove(selectedList, removedItem) {
        console.log(this.state.content)
    }
    handleSubmit() {
        console.log("submit clicked")        
    }

    handleCancel() {
        console.log("cancel clicked")
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
                        <InputBox label="Workshop's profile picture"    name="workshopPic"  type="file" inputType="file"   onChange={this.handleChange} errMsg="" />
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
                        <InputBox label="Tags"                          name="tags"         type="dropD" options={this.state.options} tags={this.state.content.tags} onSelect={this.handleSelect} onRemove={this.handleRemove} style={style} errMsg="" placeholder="Choose tags"/>
                    </form>
                </div>
                <div id="button-body">
                            <button className="myButton" onClick={() => this.handleSubmit}>Submit</button>
                            <button onClick={() => this.handleCancel}>Cancel</button>
                </div>
            </div>
        )
    }
}

export default Form ;