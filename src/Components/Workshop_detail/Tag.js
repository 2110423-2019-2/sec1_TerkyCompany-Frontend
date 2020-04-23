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
        console.log("here8")
        return (
            <div className='Tag topic'>
                <a className='link' href='/browse'>{this.props.tag}</a>
            </div>
        );
        
    }
}

export default Tag;