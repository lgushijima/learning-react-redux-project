import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({component: Component, isAuthenticated, ...rest}) => {
    return (
        <Route {...rest} render={(props) => (
            isAuthenticated ? 
            <Redirect to="/dashboard" /> : 
            <Component {...props} />
        )} />
    );
};

export default PublicRoute;