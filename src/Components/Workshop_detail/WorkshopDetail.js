import React from 'react';
import './WorkshopDetail.css';
import WorkshopDetailHeader from './WorkshopDetailHeader';
import WorkshopDetailBody from './WorksopDeatailBody';
import axios from 'axios';

class WorkshopDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state =
        {
            isLoading: false,
            workshop: {
                id: -1,
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
                tags: ['skill', 'tech', 'SE']
            }
        }
    }
    convertTimeStampToTime = (timeStamp) => {
        let time = timeStamp.slice(11, 16)
        let date = timeStamp.slice(0, 10)
        let timeAndDate = { "time": time, "date": date }
        return timeAndDate
    }
    componentDidMount() {
        console.log('okkkkk');
        const { ID } = this.props.match.params
        axios.get('http://localhost:3001/workshops/' + ID).then(res => {
            console.log("from workshop > ", res.data)
            this.setState({
                workshop: {
                    id : res.data.id,
                    name: res.data.name,
                    place: res.data.place,
                    startTime: this.convertTimeStampToTime(res.data.startTime).time,
                    endTime: this.convertTimeStampToTime(res.data.endTime).time,
                    pictureUrl: '/test.jpg',
                    cost: res.data.cost,
                    notAvailableSeat: 0,
                    totalSeat: res.data.capacity,
                    description: res.data.description,
                    instructorName: res.data.speakerName,
                    instructorImageSrc: '/test.jpg',
                    tags: ['finance','design','programming']
                }
            })
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