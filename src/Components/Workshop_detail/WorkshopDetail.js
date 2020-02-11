import React from 'react';
import './WorkshopDetail.css';
import WorkshopDetailHeader from './WorkshopDetailHeader';
import WorkshopDetailBody from './WorksopDeatailBody';

class WorkshopDetail extends React.Component {
    constructor(props){
        super(props);
        this.state = {
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

    componentDidMount() {
    }

    render() {
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