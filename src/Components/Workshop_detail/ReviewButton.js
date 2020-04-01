import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import './ReviewButton.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios'
import ReactStars from 'react-rating-stars-component'


const ReviewButton  = (props) => {
    const [show, setShow, rating] = useState(false);
    let oldRating,oldComment;
    let title;
    let rate=0;
    const moment = require('moment');
    const today = moment();
    //print string of today
    console.log(today.format());
    console.log(props.workshop)
    if (props.oldReview) {
        oldComment = props.oldReview.comment
        oldRating = props.oldReview.rating
        rate = oldRating
        title = "Edit Review"
    }
    else {
        oldComment = ""
        oldRating = 0
        title = "Review Workshop"
    }
    const handleClose = () => {
        setShow(false);
    }
    const handleSubmit = () => {
        setShow(false);
        const moment = require('moment');
        const today = moment();
        console.log(rate)
        console.log(document.getElementById("comment").value);
        let sendData = {
            id : props.workshop.id,
            workshop: props.workshop.id,
            memberT : props.username,
            rating : rate,
            timeWritten : today.format(),
            comment : document.getElementById("comment").value,
            workshopId : props.workshop.id,
            memberTUsername : props.username
        }
        console.log(sendData)
        if (props.oldReview) {
            console.log("put")
            axios.delete(`http://localhost:3001/reviews/${props.workshop.id}/${props.workshop.id}/${props.username}/delete`)
            axios.post(`http://localhost:3001/reviews/create`, sendData ).then(res => {
                console.log(res.data)
            })
        }
        else {
            console.log("post")
            axios.post(`http://localhost:3001/reviews/create`, sendData ).then(res => {
                console.log(res.data)
            })
        }
        // axios.put(`http://localhost:3001/reviews/create`, sendData ).then(res => {
        //     console.log(res);
        //     console.log(res.data);
        // })
    }
    const handleShow = () => {
        setShow(true);
    }
    const ratingChanged = (newRating) => {
        rate = newRating
        //console.log(rate)
    }
    
    return (
        <div>
        <Button variant="warning" onClick={handleShow}>
        {title}
        </Button>
    
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Review Workshop</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <textarea rows="4" cols="60" id='comment' defaultValue={oldComment} placeholder="Tell about your experience."></textarea>
                <ReactStars
                count={5}
                value = {oldRating}
                onChange={ratingChanged}
                size={40}
                half={true}
                emptyIcon={<i className='far fa-star'></i>}
                halfIcon={<i className='fa fa-star-half-alt'></i>}
                fullIcon={<i className='fa fa-star'></i>}
                color2={'#ffd700'} />
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Cancel
            </Button>
            <Button variant="warning" onClick={handleSubmit}>
                Submit
            </Button>
            </Modal.Footer>
        </Modal>
        </div>
    );
}


export default ReviewButton;