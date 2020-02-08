import React from 'react';
import './WorkshopDetailHeader.css';

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
            <div>
                <div className='header' id='container'>
                    <div className='header-image' id='box'>
                        <img src={workshop.pictureUrl} width='1000em' height='400em' />
                    </div>
                    <div className='header-details' id='box'>
                        <div className='header-detail'>{workshop.name}</div>
                        <div className='header-detail'>{workshop.place}</div>
                        <div className='header-detail'>{workshop.startTime} - {workshop.endTime}</div>
                        <div className='header-detail'>{workshop.notAvailableSeat}/{workshop.totalSeat}</div>
                        <div className='header-detail'>{workshop.cost}</div>
                    </div>
                </div>
                <div className='body' id='container'>
                    <div className='body-details' id='box'>
                        <div className='description'>
                            <strong className='topic'>Description</strong><br/>
                            &emsp;&emsp;&emsp;{workshop.description}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WorkshopDetailHeader;
