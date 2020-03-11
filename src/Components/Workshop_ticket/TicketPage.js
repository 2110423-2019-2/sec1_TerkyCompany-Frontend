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
                workShopName : 'workShopName',
                workShopPic : 'PicURL',
                stime : 'start time',
                etime : 'end time',
                place : 'place',
                holderName : 'holder',
                description : 'descs'
                }
        }
    }

    render() {
        return (
            <div id='container'>
                <h1>HI</h1>
                <div id='ticket-wrap'><Ticket   wsName={this.state.data.workShopName} 
                                                wsP={this.state.data.workShopPic} 
                                                sTime={this.state.data.stime}
                                                eTime={this.state.data.etime}
                                                place={this.state.data.place}
                                                holderName={this.state.data.holderName}
                                                desc={this.state.data.description}
                                                ref={el => (this.componentRef = el)}></Ticket></div>
                <div id='button'>
                    <ReactToPDF trigger={() => <button>print</button>}
                                content={() => this.componentRef}/>
                </div>
            </div>
        )
    }
}

export default TicketPage;