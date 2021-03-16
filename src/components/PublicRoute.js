import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({component: Component, restricted, isAuthenticated, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            isAuthenticated && restricted ?
                <Redirect to="/Dashboard" />
            : <Component {...props} />
        )} />
    );
};

export default PublicRoute;