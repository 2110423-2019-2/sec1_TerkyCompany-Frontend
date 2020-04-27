import React from 'react'
import './WorkshopFilterPage.css'
import FilterForm from './FilterForm'

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
                <div className="show-list" id="show-list-id">
                    <h1>Workshop</h1>
                    <div className="dropdown-divider"></div>
                    <div className="flex-container" id="list-body-filter" >
                        <FilterForm />
                    </div>
                </div>
            </div>
        )
    }
}

export default WorkshopFilterPage