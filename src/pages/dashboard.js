import React, { useEffect } from 'react';
import { navigate } from 'gatsby'; // a convenience build on @reach/router
import { Router } from '@reach/router'; // comes with Gatsby
import Layout from '../components/layout';
import Profile from '../components/profile';
import RouteBase from '../components/route-base';
import RouteSecret from '../components/route-secret';
import RouteLogin from '../components/route-login';

// location is Gatsby helper
const Dashboard = ({ location }) => {
    // when component changes, check what's going on and act accordingly
    useEffect(() => {
        if (location.pathname.match(/^\/dashboard\/?$/)) {
            navigate('/dashboard/login', { replace: true }); // when we get redirected, instead of returning to redirect, get back to homepage
        }
    }, []);
    return (
        <Layout>
        <Profile />
        <Router>
            <RouteBase path="/dashboard/base/" />
            <RouteSecret path="/dashboard/secret/" />
            <RouteLogin path="/dashboard/login/" />
        </Router>
        </Layout>
    );
}

export default Dashboard;
