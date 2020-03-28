import React from 'react'
import ReviewButton from './ReviewButton'
import ReviewItem from './ReviewItem'

class WorkshopDetailBottom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            reviews : [{
                    username: "terk",
                    comment: "good",
                    rating: "3.5",
                    timeWritten: "yesterday"
                },
                {
                    username: "miw",
                    comment: "bad",
                    rating: "0.5",
                    timeWritten: "today"
                },
            ]
        }
    }

    componentDidMount() {
        
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
            <div>
                <h3>Comments</h3>
                <ReviewButton />
                <div>
                    {this.state.reviews.map(this.showReview)}
                </div>
            </div>
        );
    }
}

export default WorkshopDetailBottom;
