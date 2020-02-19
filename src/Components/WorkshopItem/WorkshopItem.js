import React, { Component } from 'react';
import "./WorkshopItem.css";

class WorkshopItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            workshop_id: this.props.item.id,
            image_name: "test.jpg",
            workshop_name: this.props.item.name,
            workshop_detail: this.props.item.description.slice(0,60),
            start: this.props.item.startTime,
            place: this.props.item.place,
            end: this.props.item.endTime,
            owner: this.props.item.speakerName,
            
            isLoading: false,

        }
    }

    goto() {
        window.location.assign('/workshop-detail')
    }

    componentDidMount() {
    }

    render() {
        if (this.state.isLoading) return null
        return (
            <div onClick={this.goto} className="workshop-item" >
                <img src={this.state.image_name} height="200" width="300"></img>
                <h3>{this.state.workshop_name}</h3>
                <p>{this.state.workshop_detail}</p>
                <h6>{this.state.start} - {this.state.end}</h6>
                <h6>@{this.state.place}</h6>
                <h5>Create by {this.state.owner}</h5>
            </div>
        )
    }
}

export default WorkshopItem;