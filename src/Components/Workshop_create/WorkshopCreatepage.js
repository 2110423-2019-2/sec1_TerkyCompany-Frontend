import React from 'react';
import './WorkshopCreatepage.css';
import CreateForm from './CreateForm' ;
import SideBar from './SideBar' ;

class WorkshopCreatePage extends React.Component {
    constructor(props) {
        super(props) ;
        this.state ={
            isLoading: false,
            tags:["A","B","C"],
            content: ["Li1","Li2"]
        }
    }
    render() {
        if(this.state.isLoading) return null
        return (
            <div>
                <div>
                    <h1>Create workshop</h1>
                </div>
                <div>
                    <CreateForm tags={this.state.tags}/>
                    <SideBar content={this.state.content}/>
                </div>
            </div>
        )
    }
}

export default WorkshopCreatePage;