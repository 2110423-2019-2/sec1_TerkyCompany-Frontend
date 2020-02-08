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
                            <h1 id = "my-workshop-title">My Workshop</h1>
                        </div>
                        <div className="dropdown-divider"></div>
                        <div className="list-body">
                            <h1>helloboy</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Workshoplistpage;