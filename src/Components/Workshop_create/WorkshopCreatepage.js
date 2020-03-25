import React from 'react';
import './WorkshopCreatepage.css';
import CreateForm from './CreateForm' ;
import SideBar from './SideBar' ;

class WorkshopCreatePage extends React.Component {
    constructor(props) {
        super(props) ;
        this.state ={
            isLoading: false,
            content: []
        }
    }
    render() {
        if(this.state.isLoading) return null
        if (document.cookie === ""){ 
            window.alert("Please login first");
            window.location.assign('/login');
            return null
        }
        if (this.state.role != "owner") {
            window.alert("Participant can't create a workshop, please login as an Owner");
            window.location.assign('/');
            return null
        }
        return (
            <div id="container">
                <div id="sidebar">
                    <SideBar content={this.state.content}/>
                </div>
                <div className="show-list">
                    <h1>Create workshop</h1>
                    <div className="dropdown-divider"></div>
                    <div>
                        <CreateForm id="form" tags={this.state.tags}/>
                    </div>
                </div>
                <div id="sidebar">
                    <SideBar content={this.state.content}/>
                </div>
            </div>
        )
    }
}

export default WorkshopCreatePage;