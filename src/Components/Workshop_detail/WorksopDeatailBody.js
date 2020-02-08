import React from 'react';

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
        const workshop = this.props.workshop;
        return (
            <div className='body' id='container'>
                    <div className='body-details' id='box'>
                        <div className='description'>
                            <strong className='topic'>Description</strong><br/>
                            &emsp;&emsp;&emsp;{workshop.description}
                        </div>
                    </div>
                </div>
        );
    }
}

export default WorkshopDetailBody;