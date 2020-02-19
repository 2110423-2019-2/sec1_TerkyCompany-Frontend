import React from 'react';
import './WorkshopDetailHeader.css';
import Button from './Button';

class WorkshopDetailHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
        }
    }

    componentDidMount() {
    }

    render() {
        const workshop = this.props.workshop;
        return(
            <div className='header'>
                <div className='header-image' id='box'>
                    <img src={workshop.pictureUrl} width='1000em' height='400em' />
                </div>
                <div className='header-details' id='box'>
                    <div className='header-detail' id='name'>{workshop.name}</div>
                    <div className='header-detail' id='location'>{workshop.place}</div>
                    <div className='header-detail' id='time'>{workshop.startTime} - {workshop.endTime}</div>
                    <div className='header-detail' id='seat'>{workshop.notAvailableSeat}/{workshop.totalSeat}</div>
                    <div className='header-detail' id='cost'>{workshop.cost} Baht</div>
                    <Button />
                </div>
            </div>
        );
    }
}

export default WorkshopDetailHeader;
