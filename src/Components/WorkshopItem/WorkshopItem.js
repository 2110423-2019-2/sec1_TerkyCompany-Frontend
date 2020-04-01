import React, { Component } from 'react';
import "./WorkshopItem.css";

class WorkshopItem extends Component {
    constructor(props) {
        super(props)
        console.log("check item >", this.props.item.id)
        this.state = {
            workshop_id: this.props.item.id,
            image_name: "test.jpg",
            workshop_name: this.props.item.name,
            workshop_detail: this.props.item.description.slice(0, 90),
            start: this.convertTimeStampToTime(this.props.item.startTime),
            place: this.props.item.place,
            end: this.convertTimeStampToTime(this.props.item.endTime),
            owner: this.props.item.speakerName,

            isLoading: false,

        }
        this.goto = this.goto.bind(this)
    }

    convertTimeStampToTime = (timeStamp) => {
        let time = timeStamp.slice(11, 16)
        let date = timeStamp.slice(0, 10)
        let timeAndDate = { "time": time, "date": date }
        return timeAndDate
    }

    goto() {
        // let check = this.props.item.id
        // console.log(this.state.workshop_id)
        window.location.assign('/workshop-detail/' + this.state.workshop_id)
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
                <h6>{this.state.start.date} {this.state.start.time} to {this.state.end.date} {this.state.end.time}</h6>
                <h6>@{this.state.place}</h6>
                <h5>Speaker : {this.state.owner}</h5>
            </div>
        )
    }
}

export default WorkshopItem;