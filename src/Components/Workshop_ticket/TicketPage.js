import React from 'react' ;
import ReactToPDF from 'react-to-print' ;
import Ticket from './Ticket';
import './TicketPage.css' ;
import axios from "axios";

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
    componentDidMount() {
        console.log('okkkkk');
        const { ID } = this.props.match.params
        axios.get('http://localhost:3001/workshops/' + ID).then(res => {
            console.log("from workshop > ", res.data)
            this.setState({
                data: {
                    workShopName : res.data.name,
                    workShopPic : res.data.pictureURL,
                    date : "",
                    stime : this.convertTimeStampToTime(res.data.startTime).time,
                    etime : this.convertTimeStampToTime(res.data.endTime).time,
                    place : res.data.place,
                    holderName : "Miw",//read cookie,
                    description : "dasdasas"
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