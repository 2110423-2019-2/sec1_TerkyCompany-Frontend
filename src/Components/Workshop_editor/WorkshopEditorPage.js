import React, { Component } from 'react';
import './WorkshopEditorPage.css';


class Workshoplistpage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,

        }
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
                        <div className="list-body">
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
                                <textarea name="place" />
                            </label>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Workshoplistpage;