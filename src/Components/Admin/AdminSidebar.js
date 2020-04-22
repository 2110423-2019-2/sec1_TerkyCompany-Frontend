import React, { Component } from 'react';

class AdminSidebar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
        }
    }

    componentDidMount() {

    }

    showUser = () => {
        
    }

    render() {
        return (
            <div className="side-menu">
                <div id="textzone">
                    <ul id="link-side">
                        <li><a id="link-side" href='/management/user'>Workshop Management</a></li>
                        <li><a id="link-side" href='/management/workshop'>User Management</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default AdminSidebar;
