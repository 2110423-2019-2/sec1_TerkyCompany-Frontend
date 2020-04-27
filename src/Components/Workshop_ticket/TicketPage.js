import React from 'react';
import ReactToPDF from 'react-to-print';
import Ticket from './Ticket';
import './TicketPage.css';
import axios from "axios";

class TicketPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            data: {
                workShopName: 'Workshop\'s name',
                workShopPic: 'Picture URL',
                stime: 'start',
                etime: 'end',
                place: 'place',
                holderName: 'holder name',
            },
            cookie: {
                username: "",
                role: ""
            }
        }
    }
    componentDidMount() {
        // console.log('ticket page did mount');
        //format cookie
        let spl = document.cookie.split(';')
        let ck = {}
        let s = 0
        for (let i = 0; i < spl.length; i++) {
            let temp = spl[i].split('=')
            // // console.log('temp: ',temp)
            ck[temp[0].trim()] = temp[1]
            if (temp[0].trim() === 'username' || temp[0].trim() === 'userType')
                s += 1
        }
        if (s === 2) {
            this.setState({
                isLoading: false,
                cookie: {
                    username: ck['username'],
                    role: ck['userType']
                }
            })
        }
        const { ID } = this.props.match.params
        axios.get(`${process.env.REACT_APP_URL}/books/findone/` + ID + '/' + ck['username']).then(res => {
            //console.log("from book > ", res.data)
            this.setState({
                data: {
                    holderName : res.data.memberT
                }
            })
            return axios.get(`${process.env.REACT_APP_URL}/workshops/` + ID)
        }).then(res2 => {
            // console.log("from workshop > ", res2.data)
            this.setState({
                data: {
                    workShopName: res2.data.name,
                    workShopPic: res2.data.pictureURL,
                    stime: this.convertTimeStampToTime(res2.data.startTime).time,
                    etime: this.convertTimeStampToTime(res2.data.endTime).time,
                    place: res2.data.place,
                    holderName : this.state.data.holderName
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
                <h1>This is your ticket</h1>
                <div id='ticket-wrapper'><Ticket workShopName={this.state.data.workShopName}
                    workShopPic={this.state.data.workShopPic}
                    stime={this.state.data.stime}
                    etime={this.state.data.etime}
                    place={this.state.data.place}
                    holderName={this.state.data.holderName}
                    ref={el => (this.componentRef = el)}></Ticket></div>
                <div id='button-wrapper'>
                    <ReactToPDF trigger={() => <button id='button'>Print it</button>}
                        content={() => this.componentRef} />
                </div>
            </div>
        )
    }
}

export default TicketPage;