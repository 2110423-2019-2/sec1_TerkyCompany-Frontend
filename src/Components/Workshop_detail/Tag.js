import React from 'react';
import './Tag.css';
class Tag extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            isLoading: false,
        }
    }

    render() {
        return (
            <div className='Tag topic'>
                <a className='link' href=''>{this.props.tag}</a>
            </div>
        );
        
    }
}

export default Tag;