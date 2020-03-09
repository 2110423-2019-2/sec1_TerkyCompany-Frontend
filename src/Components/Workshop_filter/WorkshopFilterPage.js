import React from 'react'
import './WorkshopFilterPage.css'
import SideBar from './SideBar' 

class WorkshopFilterPage extends React.Component {
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
                    <h1>Workshop</h1>
                    <div className="dropdown-divider"></div>
                    <div>
                        
                    </div>
                </div>
                <div id="sidebar">
                    <SideBar content={this.state.content}/>
                </div>
            </div>
        )
    }
}

export default WorkshopFilterPage