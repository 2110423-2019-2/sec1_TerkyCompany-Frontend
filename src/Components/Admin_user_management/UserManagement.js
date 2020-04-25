import React, { Component } from 'react';
import axios from 'axios';
import UserItem from './UserItem'
import Button from 'react-bootstrap/Button';
import AdminSidebar from '../Admin/AdminSidebar';
// import Cookies from 'universal-cookie';


class UserManagement extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            users: [{username:"user1",role:"Owner",isBanned:false},{username:"user2",role:"Participant",isBanned:true}],
            username: '',
            role: ''
            
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3001/members-t/').then(res => {
            //console.log(res.data)
            let initUsers = res.data
            let initState = this.state
                Object.values(initUsers).forEach(element => {
                    let getUser = {
                        "username":element.username,
                        "role":element.userType,
                        "isBanned":element.isSuspended
                        }
                    //console.log(getUser)
                    console.log(initState.users)
                    initState.users.push(getUser)
                    //console.log(initState.users)
                })
                this.setState(initState)

        })
    }

    showUser = (user) => {
        return (
            <div className="col-md">
                <UserItem user={user}/>
            </div>
        )
    }

    handleAdd = () => {
        window.location.assign('/register');
    }
    render() {
        // if(this.state.isLoading) return null
        // if (document.cookie === ""){ 
        //     window.alert("Please login first");
        //     window.location.assign('/login');
        //     return null
        // }
        // if (this.state.role != "admin") {
        //     console.log("cookie");
        //     console.log(this.state);
        //     window.alert("Permission Denied");
        //     window.location.assign('/');
        //     return null
        // }
        return (
            <div>
                <div className="flex-container" id="flex-container">
                    <AdminSidebar />
                    <div className="show-list">
                        <div className="list-header">
                            <h1 id="my-workshop-title">User Management
                            <Button variant="primary" className="plus-button" size="sm" onClick={() => this.handleAdd()}>+</Button>
                            </h1>
                        </div>
                        <div className="dropdown-divider"></div>
                        <div className="flex-container" id="list-body" >
                            {this.state.users.map(this.showUser)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserManagement;