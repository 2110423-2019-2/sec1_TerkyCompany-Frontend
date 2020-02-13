import React, { Component } from 'react';
import './WorkshopEditorPage.css';
import TextBox from './TextBox';
import { Multiselect } from 'multiselect-react-dropdown';

class WorkshopEditorPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            workshop :{
                name: this.props.name,
                pic: this.props.pic,
                date: this.props.date,
                startTime: this.props.startTime,
                endTime: this.props.endTime,
                capacity: this.props.capacity,
                cost: this.props.cost,
                place: this.props.place,
                daedlineDate: this.props.daedlineDate,
                daedlineTime: this.daedlineTime
                
            },
            options: [{name: 'Srigar', id: 1},{name: 'Sam', id: 2},{name: 'Johnny', id: 3}],
            selectedValue: [{name: 'Srigar', id: 1}],
        }
    }

    submitclick() {
        console.log("submit clicked")
        console.log(window.location.host)
        this.setState({
            workshop:{
                name:document.getElementsByClassName("workshopName")[0].value,
                pic:document.getElementsByClassName("workshopPic")[0].value,
                date:document.getElementsByClassName("date")[0].value,
                startTime:document.getElementsByClassName("startTime")[0].value,
                endTime:document.getElementsByClassName("endTime")[0].value,
                capacity:document.getElementsByClassName("capacity")[0].value,
                cost:document.getElementsByClassName("cost")[0].value,
                place:document.getElementsByClassName("place")[0].value,
                deadlineDate:document.getElementsByClassName("deadlineDate")[0].value,
                deadlineTime:document.getElementsByClassName("deadlineTime")[0].value,
            }
        })
        console.log(document.getElementsByClassName("workshopName")[0].value)
        console.log(this.state);
    }

    cancelclick() {
        console.log("cancel clicked")
        console.log(window.location.host)
    }

    onSelect(selectedList, selectedItem) {
        console.log(selectedItem);
        
    }
    
    onRemove(selectedList, removedItem) {
        console.log(removedItem);
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
                            <TextBox titleName="Workshop's Name" typeName="text" className="workshopName" />               
                            <TextBox titleName="Workshop's Profile Picture's Name" typeName="file" className="workshopPic" />
                            <TextBox titleName="Date" typeName="date" className="date" />
                            <label>Start Time</label>
                            <input type="Time" className="startTime" />
                            <label>End Time</label>
                            <input type="Time" className="endTime" />
                            <br />
                            <label>Capacity</label>
                            <input type="number" min = "1" className="capacity" />
                            <label>Cost</label>
                            <input type="number" className="cost" />
                            <label>THB</label>
                            <br />
                            <label>Place</label>
                            <br />
                            <textarea className="place" rows="4" cols="50"/>
                            <br />
                            <label>Daedline Date</label>
                            <input type="date" className="deadlineDate" />
                            <label>Deadline Time</label>
                            <input type="time" className="deadlineTime" />
                            <br />
                            <label>Description</label>
                            <br />
                            <textarea name="description" rows="4" cols="50" />
                            <br />
                            <label>Tags</label>
                            <Multiselect 
                            options={this.state.options}
                            selectedValues={this.state.selectedValue} 
                            displayValue="name"
                            onSelect={this.onSelect()}
                            onRemove={this.onRemove()}
                            closeIcon="close"
                            />
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
