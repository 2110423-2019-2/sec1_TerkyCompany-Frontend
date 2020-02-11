import React, { Component } from 'react';
import './Workshoplistpage.css';
import WorkshopItem from '../WorkshopItem/WorkshopItem';


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
                <div className="flex-container" id="flex-container">
                    <div className="side-menu">
                        <div id="textzone">
                            <ul id="link-side">
                                <li><a id="link-side" href="#">My Workshop</a></li>
                                <li><a id="link-side" href="#">Certificate</a></li>
                                <li><a id="link-side" href="#">Payment</a></li>
                                <li><a id="link-side" href="#">Confirmation</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="show-list">
                        <div className="list-header">
                            <h1 id = "my-workshop-title">My Workshop</h1>
                        </div>
                        <div className="dropdown-divider"></div>
                        <div className="flex-container" id="list-body" >
                            <WorkshopItem />
                            <WorkshopItem />
                            <WorkshopItem />
                            <WorkshopItem />
                            <WorkshopItem />
                            <WorkshopItem />
                            <WorkshopItem />
                            <WorkshopItem />
                            <WorkshopItem />
                            <WorkshopItem />
                            <WorkshopItem />
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Workshoplistpage;