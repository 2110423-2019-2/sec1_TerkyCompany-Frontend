import React from 'react';
import './WorkshopCreatepage.css';
import CreateForm from './CreateForm' ;
import SideBar from './SideBar' ;

class WorkshopCreatePage extends React.Component {
    constructor(props) {
        super(props) ;
        this.state ={
            isLoading: false,
            content: ["Li1","Li2"]
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
                    <h1>Create workshop</h1>
                    <div className="dropdown-divider"></div>
                    <div>
                        <CreateForm id="form" tags={this.state.tags}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default WorkshopCreatePage;