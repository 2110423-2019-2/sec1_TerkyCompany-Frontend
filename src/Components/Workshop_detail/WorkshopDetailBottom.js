import React from 'react'
import './WorkshopDetailBottom.css';
import ReviewButton from './ReviewButton'
import ReviewItem from './ReviewItem'
import axios from 'axios'

class WorkshopDetailBottom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            reviews : [],
            //oldReview from this user
            oldReview : {},
        }
    }
    async componentWillReceiveProps(nextProps) {
        // let allReview = []
        // let initReviews = this.state.reviews
        // let oldReview = this.state.oldReview
        if (this.props.workshop.id !== nextProps.workshop.id) {
            // console.log(nextProps.workshop.id)
            
            await axios.get(`${process.env.REACT_APP_URL}/reviews/findcomment/${nextProps.workshop.id}/${nextProps.username}`).then(res => {
                //console.log(res.data)
                this.setState({oldReview:res.data[0]})
            })
            await axios.get(`${process.env.REACT_APP_URL}/reviews/findbyworkshop/${nextProps.workshop.id}`).then(res => {
                //allReview = res.data
                this.setState({reviews:res.data})
            })
        }
        // console.log(this.state.oldReview)
        

    }

    showReview = (review) => {
        return (
            <div className="col-md">
                <ReviewItem item={review}/>
            </div>
        )
    }

    render() {
        return(
            <div className='comment'>
                <h3 id="comment-title">Comments</h3>
                <ReviewButton oldReview={this.state.oldReview} workshop={this.props.workshop} username={this.props.username}/>
                <div>
                    {this.state.reviews.map(this.showReview)}
                </div>
            </div>
        );
    }
}

export default WorkshopDetailBottom;
