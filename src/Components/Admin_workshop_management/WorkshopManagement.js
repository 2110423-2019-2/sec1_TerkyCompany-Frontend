import React from 'react'
import AdminSidebar from '../Admin/AdminSidebar' 
import FilterForm from '../Workshop_filter/FilterForm'
import Button from 'react-bootstrap/Button';

let ck = {}

class WorkshopManagement extends React.Component {
    constructor(props) {
        super(props) 
        this.state ={
            isLoading: false,
            content: [],
            username: '',
            role:''
        }
    }

    componentWillMount() {
        let spl = document.cookie.split(';')
        
        let s=0
        for(let i=0 ;i< spl.length ; i++)
        {
            let temp = spl[i].split('=')
            // // console.log('temp: ',temp)
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

    handleAdd = () => {
        window.location.assign('/workshopCreatePage');
    }
    render() {
        if(this.state.isLoading) return null
        // console.log(ck);
        if (document.cookie === ""){ 
            window.alert("Please login first");
            window.location.assign('/login');
            return null
        }
        if (ck['userType'] !== "admin") {
            // console.log("cookie");
            
            window.alert("Permission Denied");
            window.location.assign('/');
            return null
        }
        else {
            return (
                <div className="flex-container" id="flex-container">
                    <AdminSidebar />
                    <div className="show-list">
                        <div className="list-header">
                            <h1 id="my-workshop-title">Workshop Management
                            <Button variant="primary" className="plus-button" size="sm" onClick={() => this.handleAdd()}>+</Button>
                            </h1>
                        </div>
                        <div className="dropdown-divider"></div>
                        <div className="flex-container" id="list-body" >
                            <FilterForm />
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default WorkshopManagement