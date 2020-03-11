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