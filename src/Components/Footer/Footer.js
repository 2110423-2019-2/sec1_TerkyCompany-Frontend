import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
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
        console.log("hello footer")
        return (
            <div class="footer" >
                <div class="flex-container">
                    <div id="col-1">
                        <div>
                            <h4>Our Workshops</h4>
                            <ul id="link-footer">
                                <li><a id="link-footer" href="#">Tech</a></li>
                                <li><a id="link-footer" href="#">Art</a></li>
                                <li><a id="link-footer" href="#">Economic</a></li>
                            </ul>
                        </div>
                    </div>

                    <div id="col-1">
                        <div>
                            <h4>Collaberating with us</h4>
                            <ul id="link-footer">
                                <li><a id="link-footer" href="#">Collaborating with Matcher</a></li>
                                <li><a id="link-footer" href="#">About us</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;