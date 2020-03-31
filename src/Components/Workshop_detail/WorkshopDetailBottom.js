import React from 'react'
import ReviewButton from './ReviewButton'
import ReviewItem from './ReviewItem'
import axios from 'axios'

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

    async componentWillReceiveProps(nextProps) {
        let allReview = []
        let initReview = this.state.reviews
        if (this.props.workshop.id !== nextProps.workshop.id) {
            //console.log(nextProps.workshop.id)
            await axios.get(`http://localhost:3001/reviews/findbyworkshop/${nextProps.workshop.id}`).then(res => {
                console.log(res.data)
                allReview = res.data
            })
        }
        await allReview.forEach(Element => {
            console.log(Element)
            initReview.push(Element)
        })
        this.setState(initReview)
    

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
