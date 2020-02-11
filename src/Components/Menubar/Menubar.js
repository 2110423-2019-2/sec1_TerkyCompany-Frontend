import React, { Component } from 'react';
import './Menubar.css'

class Menubar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,

        }
    }

    registerclick() {
        console.log("register clicked")
        console.log(window.location.host)
    }

    componentDidMount() {
    }

    render() {
        if (this.state.isLoading) return null
        console.log("hello Menubar")
        return (
            <div className="Menubar">
                <nav className="navbar navbar-expand-sm navbar-light justify-content-between">
                    <a class="navbar-brand" href="/">
                        {/* <img src="./../Homepage/logo.svg" width="30" height="30" class="d-inline-block align-top" alt="" /> */}
                        Matcher
                    </a>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Workshop</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/browse">Browse</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/login">Login</a>
                        </li>
                        <form class="form-inline my-2 my-lg-0">
                            <button class="btn btn-outline-warning my-2 my-sm-0" onClick={() => this.registerclick()}>Register</button>
                        </form>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Menubar;