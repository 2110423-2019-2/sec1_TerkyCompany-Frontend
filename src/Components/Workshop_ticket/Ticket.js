import React from 'react' ;
import './Ticket.css' ;
import Qrcode from 'qrcode.react' ;



class Ticket extends React.Component {
    constructor(props) {
        super(props) ;
        this.state = {
            isLoading : false,

        }
    }


    render() {
        return (
        <div id='ticket'>
            <div id='workshopPic'><img alt='' src={this.props.workShopPic}></img></div>
            <div id='text-box'>
                <div id='workshopName'><h2>{this.props.workShopName}</h2></div>
                <div className='desc'>
                    <p>from {this.props.stime} to {this.props.etime}</p>
                    <p>{this.props.place}</p>
                </div>
                <div id="holderName"><h3>{this.props.holderName}</h3></div>
            </div>
            <div id='qrCode'>
                <Qrcode value="Checked" size={150}  bgColor="#182978" fgColor="#ffffff" />
            </div>
        </div>
        )
    }
}
export default Ticket ;