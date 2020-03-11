import React from 'react' ;
import './Ticket.css' ;
import Qrcode from 'qrcode.react' ;

class Ticket extends React.Component {
    constructor(props) {
        super(props) ;
        this.state = {
            isLoading : false,
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
        <div id='ticket'>
            <div id='workshopPic'>
                <img id='workshopPic' src=""></img>
            </div>
            <div id='text-box'>
                <div id='workshopName'>workShopName</div>
                <div className='desc'>
                <div>date time</div>
                <div>locaton</div>
                <div>contact</div>
                <div>holderName</div>
                </div>
            </div>
            <div id='qrCode'>
                <Qrcode value="ddd" size={30} bgColor="#E48D26" />
            </div>
        </div>
        )
    }
}
export default Ticket ;