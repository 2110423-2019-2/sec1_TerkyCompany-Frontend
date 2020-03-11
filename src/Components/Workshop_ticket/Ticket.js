import React from 'react' ;
import './Ticket.css' ;
import Qrcode from 'qrcode.react' ;
import axios from "axios";

class Ticket extends React.Component {
    constructor(props) {
        super(props) ;
        this.state = {
            isLoading : false,
        }
    }
    // componentDidMount() {
    //     console.log('okkkkk');
    //     const { ID } = this.props.match.params
        // axios.get('http://localhost:3001/workshops/' + ID).then(res => {
        //     console.log("from workshop > ", res.data)
        //     this.setState({
        //         data: {
        //             workShopName : res.data.name,
        //             workShopPic : res.data.pictureURL,
        //             date : "",
        //             stime : this.convertTimeStampToTime(res.data.startTime).time,
        //             etime : this.convertTimeStampToTime(res.data.endTime).time,
        //             place : res.data.place,
        //             holderName : "Miw",//read cookie,
        //             description : "dasdasas"
        //         }
        //     })
        // })
    // }
    convertTimeStampToTime = (timeStamp) => {
        let time = timeStamp.slice(11, 16)
        let date = timeStamp.slice(0, 10)
        let timeAndDate = { "time": time, "date": date }
        return timeAndDate
    }

    render() {
        return (
        <div id='ticket'>
            <div id='workshopPic'>
            </div>
            <div id='text-box'>
                <div id='workshopName'>{this.props.wsName}</div>
                <div className='desc'>
                    <div>
                        <span>{this.props.sTime}</span> - <span>{this.props.eTime}</span>
                    </div>
                    <div>{this.props.place}</div>
                    <div>{this.props.desc}</div>
                    <div id="holderName">{this.props.holderName}</div>
                </div>
            </div>
            <div id='qrCode'>
                <Qrcode value="pitaratethi" size={150}  bgColor="#E48D26" />
            </div>
        </div>
        )
    }
}
export default Ticket ;