import React from 'react' ;
import './Ticket.css' ;
import Qrcode from 'qrcode.react' ;
import axios from "axios";


class Ticket extends React.Component {
    constructor(props) {
        super(props) ;
        this.state = {
            isLoading : false,
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

    // componentDidMount() {
    //     console.log('okkkkk');
    //     const { ID } = this.props.match.params
    //     axios.get('http://localhost:3001/workshops/' + ID).then(res => {
    //         console.log("from workshop > ", res.data)
    //         this.setState({
    //             data: {
    //                 workShopName : res.data.name,
    //                 workShopPic : res.data.pictureURL,
    //                 date : "",
    //                 stime : this.convertTimeStampToTime(res.data.startTime).time,
    //                 etime : this.convertTimeStampToTime(res.data.endTime).time,
    //                 place : res.data.place,
    //                 holderName : "Miw",//read cookie,
    //                 description : "dasdasas"
    //             }
    //         })
    //     })
    // }
    // convertTimeStampToTime = (timeStamp) => {
    //     let time = timeStamp.slice(11, 16)
    //     let date = timeStamp.slice(0, 10)
    //     let timeAndDate = { "time": time, "date": date }
    //     return timeAndDate
    // }
    render() {
        return (
        <div id='ticket'>
            <div id='workshopPic'><img src={this.state.data.workShopPic}></img></div>
            <div id='text-box'>
                <div id='workshopName'><h2>{this.state.data.workShopName}</h2></div>
                <div className='desc'>
                    <p>from {this.state.data.stime} to {this.state.data.etime}</p>
                    <p>{this.state.data.place}</p>
                </div>
                <div id="holderName"><h3>{this.state.data.holderName}</h3></div>
            </div>
            <div id='qrCode'>
                <Qrcode value="FUCK U" size={150}  bgColor="#E48D26" fgColor="#FFF0D9" />
            </div>
        </div>
        )
    }
}
export default Ticket ;