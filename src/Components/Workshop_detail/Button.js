import React from 'react';
import './Button.css';
import Script from 'react-load-script';
import Axios from 'axios';


let OmiseCard

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            join: false
        }
    }

    componentDidMount() {
        Axios.get('http://localhost:3001/books/findbyparticipant/'+this.props.username)
            .then(res => {
                console.log('test')
                console.log(res.data)
                res.data.map(i => {
                    if (i.id === this.props.workshopID)
                    {
                        this.setState({join:true})
                    }
                        
                })
            })
    }

    creditCardConfigure = () => {
        OmiseCard.configure({
            defaultPaymentMethod: 'credit_card',
            otherPaymentMethods: [],
        });
        OmiseCard.configureButton('#credit-card');
        OmiseCard.attach();

    }

    handleLoad = () => {
        console.log(window.OmiseCard)
        OmiseCard = window.OmiseCard
        OmiseCard.configure({
            publicKey: 'pkey_test_5jat0453twxxl7wh47y',
            currency: 'thb',
            image: 'YOUR_LOGO_URL',
            frameLabel: 'Matcher',
            submitLabel: 'PAY ',
            buttonLabel: 'Pay with Omise',
        })
    }

    omiseCardHandler = () => {
        OmiseCard.open({
            amount: this.props.workshop['cost'] * 100,
            submitFormTarget: '#credit-card',
            onCreateTokenSuccess: (token) => {
                console.log(token)
                Axios.post("http://localhost:3001/payment/create", { 'email': 'test@gmail.com', 'name': this.props.username, 'amount': this.props.workshop['cost'], 'token': token }).then(res => {

                    if (res.data.status === 'successful') {
                        console.log(res.data.status)
                        return Axios.post("http://localhost:3001/books/create", {
                            "workshop": this.props.workshop['id'],
                            "memberT": this.props.username,
                            "hasParticipated": false,
                            "transactionDetail": "success",
                            "ticketURL": ""
                        })
                    }
                })
                    .then(res => {
                        console.log(res.data)
                        var workshopID = res.data.workshop
                        window.location.assign("/ticket/" + workshopID)
                    })
            },
            onFormClosed: () => {

            },
        })
    }

    handleClick = e => {
        e.preventDefault()
        if (this.props.role === '') {
            alert('Please login first')
            window.location.assign('/login')
        }
        else if (this.props.role === 'participant') {
            this.creditCardConfigure()
            this.omiseCardHandler()
        }
        else if (this.props.role === 'admin') {
            window.location.assign("/management/workshop/" + this.props.workshop.id + "/edit")
        }
        else {
            //goto edit page
            ///workshopeditor/:username/:workshopId
            window.location.assign("/workshopeditor/" + this.props.workshop.id)
        }
    }

    deleteClick = e => {
        //del workshop
        Axios.delete(`http://localhost:3001/workshops/${this.props.workshopID}/delete`).then(window.location.assign('/management/workshop'))
    }


    render() {
        if (this.props.role === 'admin') {
            return <div className="flex-containter" id="button-wrap">
                <button className='detail-button' onClick={this.handleClick} >Edit</button>
                <button className='detail-button' id='delete-button' onClick={this.deleteClick} >Delete</button>
            </div>
        }
        else if (this.props.role === 'owner') {
            return <div>
                <button className='detail-button' onClick={this.handleClick} >Edit</button>
            </div>
        }
        else {
            return (
                <div>
                    <Script
                        url="https://cdn.omise.co/omise.js.gz"

                        onLoad={this.handleLoad}
                    />
                    <form >
                        {!this.state.join && <button id='credit-card' className='detail-button' onClick={this.handleClick} >Join</button>}
                    </form>
                    {this.state.join && <button className='detail-button' id='delete-button' onClick={()=> {
                        Axios.delete(`http://localhost:3001/books/${this.props.workshopID}/${this.props.username}/delete`).then(res=> {
                            console.log(res.data)
                            alert('Already Unbooked, Your money will refund in 5 days')
                            window.location.reload()
                        })
                    }} >Unbook</button>}
                </div>
            );
        }

    }
}

export default Button;