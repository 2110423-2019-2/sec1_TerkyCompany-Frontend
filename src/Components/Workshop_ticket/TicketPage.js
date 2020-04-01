import React from 'react' ;
import ReactToPDF from 'react-to-print' ;
import Ticket from './Ticket';
import './TicketPage.css' ;

class TicketPage extends React.Component {
    constructor(props) {
        super(props) ;
        this.state = {
            isLoading:false,

        }
    }
    

    render() {
        return (
            <div id='container'>
                <h1>This is your FUCKING ticket</h1>
                <div id='ticket-wrapper'><Ticket  ref={el => (this.componentRef = el)}></Ticket></div>
                <div id='button-wrapper'>
                    <ReactToPDF trigger={() => <button id='button'>print</button>}
                                content={() => this.componentRef}/>
                </div>
            </div>
        )
    }
}

export default TicketPage;