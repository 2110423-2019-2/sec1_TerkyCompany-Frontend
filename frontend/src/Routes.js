import { Switch, Route, BrowserRouter } from 'react-router-dom';
import App from './App';
import About from './Components/About';
import React, { Component } from 'react';

class Routes extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={App} />
                        <Route exact path="/about" component={About} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default Routes;