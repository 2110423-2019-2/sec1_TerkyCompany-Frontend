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
        console.log('okkkkk');
        const { ID } = this.props.match.params
        console.log(ID)
        axios.get(`http://localhost:3001/workshops/${ID}`).then(res => {
            console.log("from workshop > ", res.data)
            //all workshop data is contain in json key "0"
            let initData = res.data
            this.setState({
                workshop: {
                    id : initData.id,
                    name: initData.name,
                    place: initData.place,
                    startTime: this.convertTimeStampToTime(initData.startTime).time,
                    endTime: this.convertTimeStampToTime(initData.endTime).time,
                    pictureUrl: '/test.jpg',
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
            axios.get(`http://localhost:3001/tags/findbyid/${ID}`).then(res => {
            let initTag = res.data 
            let initState = this.state
            Object.values(initTag).forEach(element => {
                initState.workshop.tags = initState.workshop.tags.concat(`${element.tag}`)
            })
            this.setState(initState)
            //console.log(this.state.workshop.id)
        })
        })
        //format cookie
        let spl = document.cookie.split(';')
        let ck = {}
        let s=0
        for(let i=0 ;i< spl.length ; i++)
        {
            let temp = spl[i].split('=')
            // console.log('temp: ',temp)
            ck[temp[0].trim()]=temp[1]
            if(temp[0].trim() == 'username' || temp[0].trim() == 'userType')
                s+=1 

        }
        
        if(s==2) {
            this.setState({
                isLoading: false,
                username: ck['username'],
                role: ck['userType']
            })
        }

    }
    render() {
        console.log(this.state);
        if (this.state.isLoading) return null;
        console.log("hello Workshop-Detail page");
        return (
            <div>
                <WorkshopDetailHeader workshop={this.state.workshop} role={this.state.role} username={this.state.username} workshopID = {this.state.workshop.id}/>
                <WorkshopDetailBody workshop={this.state.workshop} />
                <WorkshopDetailBottom workshop={this.state.workshop} username={this.state.username}/>
            </div>
        );
    }
}

export default WorkshopDetail;