import React from 'react'
import './WorkshopEditPage.css'
import EditForm from './EditForm' 
import SideBar from './SideBar' 

class WorkshopEditPage extends React.Component {
    constructor(props) {
        super(props) 
        this.state ={
            isLoading: false,
            content: [],
            username : "",
            role : "",
            workshopID : "",
            urlname : "",
        }
        
    }

    componentWillMount(){
        //format cookie
        const { workshopId,username} = this.props.match.params
        this.setState({
            workshopID:workshopId,
            urlname:username,
        })
        console.log("component did mount")  
        let spl = document.cookie.split(';')
        let ck = {}
        let s=0
        for(let i=0 ;i< spl.length ; i++)
        {
            let temp = spl[i].split('=')
            // console.log('temp: ',temp)
            ck[temp[0].trim()]=temp[1]
            if(temp[0].trim() === 'username' || temp[0].trim() === 'userType')
                s+=1 
        }
        if(s===2) {
            this.setState({
                isLoading: false,
                username: ck['username'],
                role: ck['userType']
            })
        }
    }
    componentDidMount() {
        console.log(this.state.workshopID)
    }

    render() {
        if(this.state.isLoading) return null
        if (document.cookie === ""){ 
            window.alert("Please login first");
            window.location.assign('/login');
            return null
        }
        if (this.state.role !== "owner") {
            console.log("cookie");
            console.log(this.state);
            window.alert("Participant can't edit a workshop, please login as an Owner");
            window.location.assign('/');
            return null
        }
        return (
            <div id="container">
                <div id="sidebar">
                    <SideBar content={this.state.content}/>
                </div>
                <div className="show-list">
                    <h1>Edit Workshop</h1>
                    <div className="dropdown-divider"></div>
                    <div>
                        <EditForm id="form" workshopid={this.state.workshopID} urlUsername={this.state.urlname}/>
                    </div>
                </div>
                <div id="sidebar">
                    <SideBar content={this.state.content}/>
                </div>
            </div>
        )
    }
}

export default WorkshopEditPage
