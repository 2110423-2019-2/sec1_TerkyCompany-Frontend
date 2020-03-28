import React, { Component } from 'react';
import "./ReviewItem.css";
import ReactStars from 'react-rating-stars-component'

class ReviewItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            username: this.props.item.username,
            comment: this.props.item.comment,
            rating: this.props.item.rating,
            timeWritten: this.props.item.timeWritten
        }
    }

    convertTimeStampToTime = (timeStamp) => {
        let time = timeStamp.slice(11, 16)
        let date = timeStamp.slice(0, 10)
        let timeAndDate = { "time": time, "date": date }
        return timeAndDate
    }

    componentDidMount() {
        
    }

    render() {
        if (this.state.isLoading) return null
        return(
            <div className="review-item" >
                <h5>{this.state.username}</h5>
                <p>{this.state.timeWritten}</p>
                <ReactStars
                value={this.state.rating}
                count={5}
                edit={false}
                size={20}
                half={true}
                emptyIcon={<i className='far fa-star'></i>}
                halfIcon={<i className='fa fa-star-half-alt'></i>}
                fullIcon={<i className='fa fa-star'></i>}
                color2={'#ffd700'} />
                <p>{this.state.comment}</p>
            </div>
        );
    }
}

export default ReviewItem;
