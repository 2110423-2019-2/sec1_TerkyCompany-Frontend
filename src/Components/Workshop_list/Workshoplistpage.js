import React, { Component } from 'react';
import './Workshoplistpage.css';
import WorkshopItem from '../WorkshopItem/WorkshopItem';
import axios from 'axios';
// import Cookies from 'universal-cookie';


class Workshoplistpage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            workshops: [],
            username: '',
            role: ''
            
        }
    }

    componentDidMount() {

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

        console.log("state >> ",ck['username'])

        if(ck['userType'] === "owner")
        {
            axios.get('http://localhost:3001/workshops/findbyowner/'+ck['username'])
            .then(res => {
                console.log(res)
                this.setState({
                    workshops: res.data
                })
            })
        }
        else if(ck['userType'] === "participant")
        {
            axios.get('http://localhost:3001/books/findbyparticipant/'+ck['username'])
            .then(res => {
                console.log(res)
                this.setState({
                    workshops: res.data
                })
            })
        }
    }

    render() {
        if (document.cookie === '') return window.location.assign('/login')
        console.log("hello Workshoplist")
        return (
            <div>
                <div className="flex-container" id="flex-container">
                    <div className="side-menu">
                        <div id="textzone">
                            <ul id="link-side">
                                <li><a id="link-side" href="#">My Workshop</a></li>
                                <li><a id="link-side" href="#">Certificate</a></li>
                                <li><a id="link-side" href="#">Payment</a></li>
                                <li><a id="link-side" href="#">Confirmation</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="show-list">
                        <div className="list-header">
                            <h1 id="my-workshop-title">My Workshop</h1>
                        </div>
                        <div className="dropdown-divider"></div>
                        <div className="flex-container" id="list-body" >
                            {
                                this.state.workshops.map(workshop =>
                                    <WorkshopItem item={workshop} />
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Workshoplistpage;