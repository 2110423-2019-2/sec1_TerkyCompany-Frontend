import React from 'react';
import './Button.css';

class Button extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
        }
    }

    render() {
        return(
            <button className='button'>Join</button>
        );
    }
}

export default Button;