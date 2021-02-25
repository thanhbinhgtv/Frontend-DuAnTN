import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";

import LayoutMain from "../pages/layouts/LayoutMain";
import LayoutAdmin from "../pages/layouts/LayoutAdmin";
import LayoutSidenavTable from '../pages/views/Admin/LayoutSidenavTable';
import Home from '../pages/views/Main/Home';
import Booking from '../pages/views/Main/Booking';
import ListStaffs from '../pages/views/Admin/ListStaffs';

const routers = () => {
    
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <Redirect to="/admin"></Redirect>
                    </Route>

                    <Route path="/admin/:path?" exact>
                        <LayoutAdmin >
                            <Switch>
                                <Route path="/admin" exact>
                                   <LayoutSidenavTable />
                                </Route>

                                <Route path="/admin/listStaffs" exact>
                                   <ListStaffs />
                                </Route>

                            </Switch>
                        </LayoutAdmin>
                    </Route>

                    <Route>
                        <LayoutMain>
                            <Switch>
                                <Route path="/booking" exact>
                                   <Booking/>
                                </Route>
                                <Route path="/home" exact>
                                   <Home />
                                </Route>
                            </Switch>
                        </LayoutMain>
                    </Route>
                </Switch>
            </Router>

        </div>
    )
}

export default routers
