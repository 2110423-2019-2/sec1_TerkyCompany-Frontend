import React from 'react';
import './WorkshopDetail.css';
import WorkshopDetailHeader from './WorkshopDetailHeader';
import WorkshopDetailBody from './WorksopDeatailBody';
import axios from 'axios';

class WorkshopDetail extends React.Component {
    constructor(props){
        super(props);
        this.state = 
        {
            isLoading: false,
            workshop: {
                name: "Scrum workshop",
                place: 'Chula',
                startTime: '10.00',
                endTime: '12.00',
                pictureUrl: 'test.jpg',
                cost: 5000,
                notAvailableSeat: 20,
                totalSeat: 50,
                description: 'dddddddslkvmfgkbnlvkngltkbmflkbgmld bml mlkdfbglfkbm;elfm lfdmblekfb lrbkm lrblkrmhvvrrhrgjrgrjbgn hetftyel;vkhye;dyvhlyhhyyyhygtgtgtgtgtgtdddddddddddddddddddddd ddddddddddddddd ddddddddddddddddddd d d ddddddddddd ddddddddddddddddddddddddcfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc',
                instructorName: 'Mr.SSS SSSSSSS',
                instructorImageSrc: 'test.jpg',
                tags: ['skill','tech','SE']
            }
        }
    }
    convertTimeStampToTime = (timeStamp) => {
        let time = timeStamp.slice(11,16)
        let date = timeStamp.slice(0,10)
        let timeAndDate = {"time":time, "date":date}
        return timeAndDate
    }
    componentDidMount() {
        console.log('okkkkk');
        var detail;
        var detailT;
        axios.get('http://localhost:3001/workshops/workshop').then(res => {
            detail = res.data[0];
          })
        
        axios.get('http://localhost:3001/tags/workshop').then(res => {
            detailT = res.data[0];
            console.log(detailT)
            console.log(detail['speakerName'])
            this.setState({
                workshop: {
                    name: detail['name'],
                    place: detail['place'],
                    startTime: this.convertTimeStampToTime(detail['startTime']).time,
                    endTime: this.convertTimeStampToTime(detail['endTime']).time,
                    pictureUrl: 'test.jpg',
                    cost: detail['cost'],
                    notAvailableSeat: 0,
                    totalSeat: detail['capacity'],
                    description: detail['description'],
                    instructorName: detail['speakerName'],
                    instructorImageSrc: 'test.jpg',
                    tags: [detailT['tag']]
                }});
          })


}
    render() {
        console.log(this.state);
        if (this.state.isLoading) return null;
        console.log("hello Workshop-Detail page");
        return (
            <div>
                <WorkshopDetailHeader workshop={this.state.workshop} />
                <WorkshopDetailBody workshop={this.state.workshop} />
            </div>
        );
    }
}

export default WorkshopDetail;