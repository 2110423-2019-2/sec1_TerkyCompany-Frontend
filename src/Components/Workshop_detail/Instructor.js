import React from 'react';
import './Instructor.css'

class Instructor extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            isLoading: false,
        }
    }

    render() {
        return (
            <div className='instructor'>
                <div className='instructor-image-div'>
                    <img className='instructor-image' src={this.props.workshop.instructorImageSrc} />
                </div>
                <div className='instructor-detail'>
                    <div className='instructor-name'>
                        {this.props.workshop.instructorName}
                    </div>
                </div>
            </div>
        );
    }
}

export default Instructor;