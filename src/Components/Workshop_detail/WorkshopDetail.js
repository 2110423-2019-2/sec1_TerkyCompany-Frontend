import React from 'react';
import './WorkshopDetail.css';
import WorkshopDetailHeader from './WorkshopDetailHeader';
import WorkshopDetailBody from './WorkshopDetailBody';
import WorkshopDetailBottom from './WorkshopDetailBottom';
import axios from 'axios';

class WorkshopDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state =
        {
            isLoading: false,
            ID : this.props.match.params.ID,
            username: '',
            role: '',
            workshop: {
                id: -1,
                name: "Scrum workshop",
                place: 'Chula',
                startTime: '10.00',
                endTime: '12.00',
                pictureUrl: 'test.jpg',
                cost: 5000,
                notAvailableSeat: 20,
                totalSeat: 50,
                description: 'Id volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean et tortor at risus viverra adipiscing at in tellus integer feugiat scelerisque',
                instructorName: 'Mr.SSS SSSSSSS',
                instructorImageSrc: 'test.jpg',
                tags: ['skill', 'tech', 'SE']
            }
        }
    }
    convertTimeStampToTime = (timeStamp) => {
        let time = timeStamp.slice(11, 16)
        let date = timeStamp.slice(0, 10)
        let timeAndDate = { "time": time, "date": date }
        return timeAndDate
    }
    componentWillMount() {
        // console.log('okkkkk');
        
        // console.log(ID)
        axios.get(`${process.env.REACT_APP_URL}/workshops/${this.state.ID}`).then(res => {
            //console.log("from workshop > ", res.data)
            //all workshop data is contain in json key "0"
            let initData = res.data
            this.setState({
                workshop: {
                    id: initData.id,
                    name: initData.name,
                    place: initData.place,
                    startTime: this.convertTimeStampToTime(initData.startTime).time,
                    endTime: this.convertTimeStampToTime(initData.endTime).time,
                    pictureUrl: res.data.pictureURL,
                    cost: res.data.cost,
                    notAvailableSeat: res.data.reservedSeat,
                    totalSeat: res.data.capacity,
                    description: res.data.description,
                    instructorName: res.data.speakerName,
                    instructorImageSrc: '/test.jpg',
                    tags: []
                }
            })
            //console.log(this.state)
            axios.get(`${process.env.REACT_APP_URL}/tags/findbyid/${this.state.ID}`).then(res => {
                let initTag = res.data
                let initState = this.state
                Object.values(initTag).forEach(element => {
                    initState.workshop.tags = initState.workshop.tags.concat(`${element.tag}`)
                })
                this.setState(initState)
                // console.log(this.state.workshop.id)
            })
        })
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
                username: ck['username'],
                role: ck['userType']
            })
        }

    }
    render() {
        // console.log(this.state);
        if (this.state.isLoading) return null;
        // console.log("hello Workshop-Detail page");
        return (
            <div>
                <WorkshopDetailHeader workshop={this.state.workshop} role={this.state.role} username={this.state.username} workshopID={this.state.ID} />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#ACBFE6" fill-opacity="1" d="M0,96L80,101.3C160,107,320,117,480,154.7C640,192,800,256,960,250.7C1120,245,1280,171,1360,133.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                </svg>
                <WorkshopDetailBody workshop={this.state.workshop} />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#ACBFE6" fill-opacity="1" d="M0,224L48,202.7C96,181,192,139,288,117.3C384,96,480,96,576,117.3C672,139,768,181,864,202.7C960,224,1056,224,1152,202.7C1248,181,1344,139,1392,117.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                </svg>
                <WorkshopDetailBottom workshop={this.state.workshop} username={this.state.username} />

            </div>
        );
    }
}

export default WorkshopDetail;