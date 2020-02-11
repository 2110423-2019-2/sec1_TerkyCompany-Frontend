import React, { Component } from 'react';
import "./WorkshopItem.css";

class WorkshopItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            image_name: "test.jpg",
            workshop_name: "dummyname",
            workshop_detail: "lorem dddddddddd ddddddddddddd dddddddddddd ddd dddddddddd",
            isLoading: false,

        }
    }

    componentDidMount() {
    }

    render() {
        if (this.state.isLoading) return null
        return (
            <div className="workshop-item" >
                <img src={this.state.image_name} height="200" width="300"></img>
                <h3>{this.state.workshop_name}</h3>
                <p>{this.state.workshop_detail}</p>
            </div>
        )
    }
}

export default WorkshopItem;