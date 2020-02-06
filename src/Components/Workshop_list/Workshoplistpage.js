import React, { Component } from 'react';
import './Workshoplistpage.css';


class Workshoplistpage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,

        }
    }

    componentDidMount() {
    }

    render() {
        if (this.state.isLoading) return null
        console.log("hello Workshoplist")
        return (
            <div>
                <div class="flex-container" id="flex-container">
                    <div class="side-menu">1</div>
                    <div class="show-list">2</div>
                </div>
            </div>
        )
    }
}

export default Workshoplistpage;