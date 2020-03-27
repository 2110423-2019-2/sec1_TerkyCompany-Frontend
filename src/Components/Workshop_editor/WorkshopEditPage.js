import React from 'react'
import './WorkshopEditPage.css'
import EditForm from './EditForm' 
import SideBar from './SideBar' 

class WorkshopEditPage extends React.Component {
    constructor(props) {
        super(props) 
        this.state ={
            isLoading: false,
            content: []
        }
        
    }
    
    render() {
        if(this.state.isLoading) return null
        return (
            <div id="container">
                <div id="sidebar">
                    <SideBar content={this.state.content}/>
                </div>
                <div className="show-list">
                    <h1>Edit Workshop</h1>
                    <div className="dropdown-divider"></div>
                    <div>
                        <EditForm id="form"/>
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
