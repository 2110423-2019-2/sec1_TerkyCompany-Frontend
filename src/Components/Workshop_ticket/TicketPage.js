import React from 'react' ;
import ReactToPDF from 'react-to-print' ;
import Ticket from './Ticket'

class TicketPage extends React.Component {
    constructor(props) {
        super(props) ;
        this.state = {
            isLoading:false
        }
    }

    render() {
        return (
            <div>
            <div>HI</div>
            <div><Ticket ref={el => (this.componentRef = el)}></Ticket></div>
            <ReactToPDF trigger={() => <button>print</button>}
                        content={() => this.componentRef}/>
            </div>
        )
    }
}

export default TicketPage;