import React from 'react';
import './Button.css';
import Script from 'react-load-script';


let OmiseCard

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
        }
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
            frameLabel : 'Matcher',
            submitLabel : 'PAY ',
            buttonLabel : 'Pay with Omise',
        })
    }

    omiseCardHandler = () => {
        OmiseCard.open({
            amount: this.props.workshop['cost'] ,
            submitFormTarget: '#credit-card',
            onCreateTokenSuccess: (token) => {
                console.log(token)
            },
            onFormClosed: () => {

            },
          })
    }

    handleClick = e => {
        e.preventDefault()
        if (this.props.role == '') {
            alert('Please login first')
            window.location.assign('/login')
        }
        else if (this.props.role == 'participant') {
            this.creditCardConfigure()
            this.omiseCardHandler()
        }
        else {
            alert('Your role is workshop-owner. You cannot join any workshop!')
        }
    }


    render() {
        return (
            <div>
                <Script
                    url="https://cdn.omise.co/omise.js.gz"
                    
                    onLoad={this.handleLoad}
                />
                <form >
                    <button id='credit-card' className='button' onClick={this.handleClick} >Join</button>
                </form>
            </div>
        );
    }
}

export default Button;