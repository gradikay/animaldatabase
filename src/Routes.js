// React required
import React from "react";
import { Route, Switch } from "react-router-dom";
// Containers
import Home from "./containers/Home";
import Blog from "./containers/Blog";
import NotFound from "./containers/NotFound";
// -------------- Application Begins Bellow ------------ \\

// Main Route Function
export default function Routes() {

    // Return UI
    return (
        <Switch>

            {/* Routes / Pages */}
            <Route path="/" exact component={Home} />
            <Route path="/blog" exact component={Blog} />

            {/* None Existing Links */}
            <Route component={NotFound} />

        </Switch>
    );
}