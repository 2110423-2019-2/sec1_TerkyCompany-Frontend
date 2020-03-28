import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import './Review.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios'
import ReactStars from 'react-rating-stars-component'

const Review  = () => {
    const [show, setShow, rating] = useState(false);
    
    const handleClose = () => {
        setShow(false);
    }
    const handleShow = () => {
        setShow(true);
    }
    const ratingChanged = (newRating) => {
        console.log(newRating)
    }
    
    return (
        <div>
        <Button variant="primary" onClick={handleShow}>
        Review
        </Button>
    
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Review Workshop</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <textarea id="w3mission" rows="4" cols="60"></textarea>
                <ReactStars
                count={5}
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
            <Button variant="primary" onClick={handleClose}>
                Submit
            </Button>
            </Modal.Footer>
        </Modal>
        </div>
    );
}


export default Review;