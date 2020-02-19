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
            <div className="footer" >
                <div className="flex-container">
                    <div id="col-1">
                        <div>
                            <h3>Our Workshops</h3>
                            <div id="link-footer">
                                <div><a id="link-footer" href="#">Tech</a></div>
                                <div><a id="link-footer" href="#">Art</a></div>
                                <div><a id="link-footer" href="#">Economic</a></div>
                            </div>
                        </div>
                    </div>

                    <div id="col-1">
                        <div>
                            <h3>Collaborating with us</h3>
                            <div id="link-footer">
                                <div><a id="link-footer" href="#">Collaborating with Matcher</a></div>
                                <div><a id="link-footer" href="#">About us</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;