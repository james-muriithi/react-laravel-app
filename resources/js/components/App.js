import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./Home";
import SearchResults from "./SearchResults";
import TripDetails from "./TripDetails";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />

                    <Route exact path="/results" component={SearchResults} />
                    <Route
                        exact
                        path="/trip-details/:id"
                        component={TripDetails}
                    />
                </Switch>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
