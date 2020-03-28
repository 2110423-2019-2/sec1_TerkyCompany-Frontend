import React from 'react';
import './WorkshopDetailBody.css';
import Instructor from './Instructor';
import TagList from './TagList';

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
                        Instructor
                    </div>
                    <Instructor workshop={this.props.workshop}/>
                </div>
                <div className='body-tag'>
                    <div className='topic' id='tag-topic'>Tags:</div>
                    <TagList tags={this.props.workshop.tags} />
                </div>
            </div>

        );
    }
}

export default WorkshopDetailBody;