import { Switch, Route, BrowserRouter } from 'react-router-dom';
import App from './Components/Homepage/App';
import About from './Components/About';
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import WorkshopDetail from './Components/Workshop_detail/WorkshopDetail';

import Menubar from './Components/Menubar/Menubar';
import Workshoplistpage from './Components/Workshop_list/Workshoplistpage';
import WorkshopeditPage from './Components/Workshop_editor/WorkshopEditPage';
import WorkshopfilterPage from './Components/Workshop_filter/WorkshopFilterPage';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import WorkshopCreatePage from './Components/Workshop_create/WorkshopCreatepage';
import TicketPage from './Components/Workshop_ticket/TicketPage';
import Register from './Components/Register/Register';
import Edit from './Components/Edit/Edit';
import Report from './Components/Report/Report';
import UserManagement from './Components/Admin_user_management/UserManagement';
import WorkshopManagement from './Components/Admin_workshop_management/WorkshopManagement';


class Routes extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Matcher</title>
                </Helmet>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
                <Menubar />
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={App} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/workshoplist" component={Workshoplistpage} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/browse" component={WorkshopfilterPage} />
                        <Route exact path="/ticket" component={TicketPage} />
                        <Route path="/ticket/:ID" component={TicketPage} />
                        <Route path="/workshopeditor/:workshopId" component={WorkshopeditPage} />
                        <Route exact path="/workshopCreatePage" component={WorkshopCreatePage} />
                        <Route path="/workshop-detail/:ID" component={WorkshopDetail} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/report" component={Report} />
                        <Route exact path="/management/user" component={UserManagement} />
                        <Route exact path="/management/workshop" component={WorkshopManagement} />
                        <Route exact path="/management/user/:username/edit" component={Edit} />
                        <Route exact path="/management/workshop/:workshopId/edit" component={WorkshopeditPage} />
                    </Switch>
                </BrowserRouter>
                <Footer />
                
            </div>
        )
    }
}

export default Routes;