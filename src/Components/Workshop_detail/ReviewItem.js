import React from 'react';
import "./ReviewItem.css";
import ReactStars from 'react-rating-stars-component'


class ReviewItem extends React.Component {
    constructor(props) {
        super(props);
        

        this.state = {
            isLoading: false,
            username: this.props.item.memberT,
            comment: this.props.item.comment,
            rating: this.props.item.rating,
            timeWritten: `${this.convertTimeStampToTime(this.props.item.timeWritten).date}`
        }
    }

    convertTimeStampToTime = (timeStamp) => {
        // console.log('in convert')
        var temp = new Date(timeStamp)
        let time = timeStamp.slice(11, 16)
        time = temp.getHours()+time.slice(2,)
        let date = timeStamp.slice(0, 10)
        let timeAndDate = { "time": time, "date": date }
        return timeAndDate
    }

    componentDidMount() {
        const moment = require('moment');
        const today = moment();
        let writeTime = this.convertTimeStampToTime(this.props.item.timeWritten)
        let timeDiff = today.diff(this.props.item.timeWritten,'days')
        this.setState({timeWritten:`${writeTime.date} ${writeTime.time} (${timeDiff} days ago)`})
        
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
