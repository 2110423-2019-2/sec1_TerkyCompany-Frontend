import React from 'react' ;
import ReactToPDF from 'react-to-print' ;
import Ticket from './Ticket';
import './TicketPage.css' ;

class TicketPage extends React.Component {
    constructor(props) {
        super(props) ;
        this.state = {
            isLoading:false,
            data :{
                workShopName : '',
                workShopPic : '',
                date : '',
                stime : '',
                etime : '',
                place : '',
                holderName : '',
                description : ''
                }
        }
    }

    render() {
        return (
            <div id='container'>
                <h1>HI</h1>
                <div id='ticket-wrap'><Ticket ref={el => (this.componentRef = el)}></Ticket></div>
                <div id='button'>
                    <ReactToPDF trigger={() => <button>print</button>}
                                content={() => this.componentRef}/>
                </div>
            </div>
        )
    }
}

export default TicketPage;