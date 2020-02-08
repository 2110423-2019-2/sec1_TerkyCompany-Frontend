import React, { Component } from 'react';
import './WorkshopEditorPage.css';


class Workshoplistpage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,

        }
    }

    submitclick() {
        console.log("submit clicked")
        console.log(window.location.host)
    }

    cancelclick() {
        console.log("cancel clicked")
        console.log(window.location.host)
    }


    componentDidMount() {
    }

    render() {
        if (this.state.isLoading) return null
        console.log("hello Workshoplist")
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
                            <label>Workshop's Name</label>
                            <input type="text" name="workshopname" />
                            <br />
                            <label>Date</label>
                            <input type="date" name="date" />
                            <br />
                            <label>Start Time</label>
                            <input type="Time" name="starttime" />
                            <label>End Time</label>
                            <input type="Time" name="endtime" />
                            <br />
                            <label>Capacity</label>
                            <input type="number" min = "1" name="starttime" />
                            <label>Cost</label>
                            <input type="number" name="cost" />
                            <label>THB</label>
                            <br />
                            <label>Place</label>
                            <br />
                            <textarea name="place" rows="4" cols="50"/>
                            <br />
                            <label>Deadline Date</label>
                            <input type="date" name="daedlinedead" />
                            <br />
                            <label>Deadline Time</label>
                            <input type="time" name="daedlinetime" />
                            <br />
                            <label>Description</label>
                            <br />
                            <textarea name="description" rows="4" cols="50"/>
                            <br />
                            <label>Tags</label>
                            <br />
                            <textarea name="tags" rows="2" cols="50"/>
                            <br />
                            </form>
                        </div>
                        <div id="button-body">
                            <button className="mybutton" onClick={() => this.submitclick()}>Submit</button>
                            <button className="mybutton" onClick={() => this.cancelclick()}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Workshoplistpage;