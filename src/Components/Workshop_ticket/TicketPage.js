import React from 'react' ;
import ReactToPDF from 'react-to-print' ;
import Ticket from './Ticket';
import './TicketPage.css' ;
import axios from "axios";
import cookie from "cookie" ;

class TicketPage extends React.Component {
    constructor(props) {
        super(props) ;
        this.state = {
            isLoading:false,
            data :{
                workShopName : 'Workshop\'s name',
                workShopPic : 'Picture URL',
                stime : 'start',
                etime : 'end',
                place : 'place',
                holderName : 'holder name',
                }
        }
    }
    componentDidMount() {
        console.log('okkkkk');
        const { ID } = this.props.match.params
        axios.get('http://localhost:3001/workshops/' + ID).then(res => {
            console.log("from workshop > ", res.data)
            this.setState({
                data: {
                    workShopName : res.data.name,
                    workShopPic : res.data.pictureURL,
                    stime : this.convertTimeStampToTime(res.data.startTime).time,
                    etime : this.convertTimeStampToTime(res.data.endTime).time,
                    place : res.data.place,
                    holderName : "Miw",//read cookie,
                }
            })
        })
    }
    convertTimeStampToTime = (timeStamp) => {
        let time = timeStamp.slice(11, 16)
        let date = timeStamp.slice(0, 10)
        let timeAndDate = { "time": time, "date": date }
        return timeAndDate
    }

    render() {
        return (
            <div id='container'>
                <h1>This is your FUCKING ticket</h1>
                <div id='ticket-wrapper'><Ticket    workShopName={this.state.data.workShopName}
                                                    workShopPic={this.state.data.workShopPic}
                                                    stime={this.state.data.stime}
                                                    etime={this.state.data.etime}
                                                    place={this.state.data.place}
                                                    holderName={this.state.data.holderName}
                                                    ref={el => (this.componentRef = el)}></Ticket></div>
                <div id='button-wrapper'>
                    <ReactToPDF trigger={() => <button id='button'>print</button>}
                                content={() => this.componentRef}/>
                </div>
            </div>
        )
    }
}

export default TicketPage;