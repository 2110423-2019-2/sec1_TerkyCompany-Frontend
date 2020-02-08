import React from 'react';
import './WorkshopDetailBody.css';
import Instructor from './Instructor';

class WorkshopDetailBody extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
        }
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className='body'>
                <div className='body-details'>
                    <div className='description'>
                        <strong className='topic'>Description</strong><br/>
                        &emsp;&emsp;&emsp;{this.props.workshop.description}
                    </div>
                </div>
                <div className='body-instructors'>
                    <div className='topic'>
                        Instructor<br/><br/>
                    </div>
                    <Instructor workshop={this.props.workshop}/>
                </div>
            </div>

        );
    }
}

export default WorkshopDetailBody;