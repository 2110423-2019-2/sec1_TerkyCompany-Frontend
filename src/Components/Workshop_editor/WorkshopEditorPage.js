import React, { Component } from 'react';
import './WorkshopEditorPage.css';
import InputBox from './InputBox';
import { Multiselect } from 'multiselect-react-dropdown';

class WorkshopEditorPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
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
                tags:null
            },
            options: [{name: 'Srigar', id: 1},{name: 'Sam', id: 2},{name: 'Johnny', id: 3}],
            selectedValues: [{name: 'Srigar', id: 1},],
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        e.preventDefault() ;
        const {name,value} = e.target; 
        let err = this.state.errMsg ;
        let content = this.state.content ;
        switch(name) {
            case "workshopName":
                err.workshopName = value.length < 5 ? "Workshop's name must be at least 5 character" : '' ;
                content.workshopName = value ;
                break
            case "workshopPic" :
                content.workshopPic = value ;
                break
            case "date" :
                content.date = value ;
                break
            case "sTime" :
                content.sTime = value ;
                break
            case "eTime" :
                content.eTime = value ;
                break
            case "cap":
                err.cap = (value < 0 || value > 1000) ? "Capacity must be number between 0-1000" : '' ;
                content.cap = value ;
                break
            case "cost":
                err.cost = value < 0 ? "Cost must be positive number" : '' ;
                content.cost = value ;
                break
            case "place" :
                content.place = value ;
                break
            case "ddate" :
                content.ddate = value ;
                break
            case "dtime" :
                content.dtime = value ;
                break
            case "description" :
                content.description = value ;
                break
            case "tags" :
                content.tags = e.selectedValue;
                break
            default:
                console.log(name)
                break;
        }
        this.setState({errMsg:err, content:content});
    }

    onSelect = (selectedList, selectedItem) => {
        console.log(this);
        let err = this.state.errMsg ;
        let content = this.state.content ;
        content.tags = selectedList;
        this.setState({errMsg:err, content:content});
    }

    onRemove(selectedList, removedItem) {
        if (selectedList.length == 0) {
            console.log("No Tags!!");
        }
    }

    submitclick() {
        console.log("submit clicked")
        console.log(window.location.host)
        console.log(this.state);
    }

    cancelclick() {
        console.log("cancel clicked")
        console.log(window.location.host)
    }

    componentDidMount() {
        
    }

    render() {
        if (this.state.isLoading) return null
        console.log("hello Workshopeditor")
        return (
            <div>
                <div class="flex-container" id="flex-container">
                    <div className="side-menu">
                        <div id="textzone">
                            <ul id="link-side">
                                <li><a id="link-side" href="#">Title1</a></li>
                                <li><a id="link-side" href="#">Title2</a></li>
                                <li><a id="link-side" href="#">Title3</a></li>
                                <li><a id="link-side" href="#">Title4</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="show-list">
                        <div className="list-header">
                            <h1 id = "my-workshop-title">Edit Workshop</h1>
                        </div>
                        <div className="dropdown-divider"></div>
                        <div className="form-body">
                        <form>
                            <InputBox label="Workshop's Name"               name="workshopName" type="input" inputType="text"   onChange={this.handleChange} errMsg={this.state.errMsg.workshopName} value="Workshop's name" />
                            <InputBox label="Workshop's profile picture"    name="workshopPic"  type="file"  inputType="file"   onChange={this.handleChange} errMsg="" />
                            <InputBox label="Date"                          name="date"         type="input" inputType="date"   onChange={this.handleChange} errMsg="" />
                            <InputBox label="Start time"                    name="sTime"        type="input" inputType="time"   onChange={this.handleChange} errMsg="" />
                            <InputBox label="End time"                      name="eTime"        type="input" inputType="time"   onChange={this.handleChange} errMsg="" />
                            <InputBox label="Capacity"                      name="cap"          type="input" inputType="number" onChange={this.handleChange} errMsg={this.state.errMsg.cap} min="1" />
                            <InputBox label="Cost"                          name="cost"         type="input" inputType="number" onChange={this.handleChange} errMsg={this.state.errMsg.cost} min="1" />
                            <InputBox label="Place"                         name="place"        type="text"  row={4} col={50}   onChange={this.handleChange} />
                            <InputBox label="Deadline date"                 name="ddate"        type="input" inputType="date"   onChange={this.handleChange} errMsg="" />
                            <InputBox label="Deadline time"                 name="dtime"        type="input" inputType="time"   onChange={this.handleChange} errMsg="" />
                            <InputBox label="Description"                   name="description"  type="text"  row={4} col={50}   onChange={this.handleChange} />
                            <InputBox label="Tags"                          type="dropD" options={this.state.options} onSelect = {this.onSelect} selectedValues={this.state.selectedValues} errMsg=""/>
                            </form>
                        </div>
                        <div id="button-body">
                            <button className="myButton" onClick={() => this.submitclick()}>Submit</button>
                            <button className="myButton" onClick={() => this.cancelclick()}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default WorkshopEditorPage;
