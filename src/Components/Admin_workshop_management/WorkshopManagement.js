import React from 'react'
import AdminSidebar from '../Admin/AdminSidebar' 
import FilterForm from '../Workshop_filter/FilterForm'
import Button from 'react-bootstrap/Button';

class WorkshopManagement extends React.Component {
    constructor(props) {
        super(props) 
        this.state ={
            isLoading: false,
            content: []
        }
    }

    handleAdd = () => {
        window.location.assign('/workshopCreatePage');
    }
    render() {
        if(this.state.isLoading) return null
        if (document.cookie === ""){ 
            window.alert("Please login first");
            window.location.assign('/login');
            return null
        }
        if (this.state.role != "admin") {
            console.log("cookie");
            console.log(this.state);
            window.alert("Permission Denied");
            window.location.assign('/');
            return null
        }
        if(this.state.isLoading) return null
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

export default WorkshopManagement