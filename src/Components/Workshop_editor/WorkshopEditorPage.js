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
                            <label>
                                Workshop's Name
                                <input type="text" name="workshopname" />
                            </label>
                            <br />
                            <label>
                                Date
                                <input type="date" name="date" />
                            </label>
                            <br />
                            <label>
                                Start Time
                                <input type="Time" name="starttime" />
                            </label>
                            <label>
                                End Time
                                <input type="Time" name="endtime" />
                            </label>
                            <br />
                            <label>
                                Capacity
                                <input type="number" min = "1" name="starttime" />
                            </label>
                            <label>
                                Cost
                                <input type="number" name="cost" />
                                THB
                            </label>
                            <br />
                            <label>
                                Place 
                                <br />
                                <textarea name="place" rows="4" cols="50"/>
                            </label>
                            <br />
                            <label>
                            Deadline Date
                                <input type="date" name="daedlinedead" />
                            </label>
                            <br />
                            <label>
                            Deadline Time
                                <input type="time" name="daedlinetime" />
                            </label>
                            <br />
                            <label>
                                Description
                                <br />
                                <textarea name="description" rows="4" cols="50"/>
                            </label>
                            <br />
                            <label>
                                Tags
                                <br />
                                <textarea name="tags" rows="2" cols="50"/>
                            </label>
                            <br />
                            </form>
                        </div>
                        <div className="button-body">
                                <button onClick={() => this.cancelclick()}>Cancel</button>
                                <button onClick={() => this.submitclick()}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Workshoplistpage;