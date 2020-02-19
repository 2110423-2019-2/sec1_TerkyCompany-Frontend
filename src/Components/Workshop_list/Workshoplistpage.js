import React, { Component } from 'react';
import './Workshoplistpage.css';
import WorkshopItem from '../WorkshopItem/WorkshopItem';
import axios from 'axios';


class Workshoplistpage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            workshops : []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3001/workshops')
            .then(res => {
                console.log(res)
                this.setState({
                    workshops: res.data
                })
            })
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
                            <h1 id="my-workshop-title">My Workshop</h1>
                        </div>
                        <div className="dropdown-divider"></div>
                        <div className="flex-container" id="list-body" >
                            {
                                this.state.workshops.map(workshop =>
                                    <WorkshopItem item={workshop} />
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Workshoplistpage;