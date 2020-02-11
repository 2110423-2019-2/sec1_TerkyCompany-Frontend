import React, { Component } from 'react';


class Menubar extends Component {
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
        console.log("hello Menubar")
        return (
            <div className="Menubar">
                <nav class="navbar navbar-expand-sm bg-light navbar-light">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="/">Matcher</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/browse">Browse</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/about">About</a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Menubar;