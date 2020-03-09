import React from 'react'
import './ErrorMessage.css'
import PropTypes from 'prop-types';

class ErrorMessage extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        if(!this.props.show){
            return null;
        }
        return(
            <div className='error-box'><i className="fa fa-times-circle"></i> {this.props.children}</div>
        );
    }
}

ErrorMessage.propTypes = {
    show: PropTypes.bool.isRequired
};

export default ErrorMessage;