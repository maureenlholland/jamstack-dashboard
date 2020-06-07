import React, { useEffect, useState } from 'react';
import { navigate } from 'gatsby'; // a convenience build on @reach/router
import { Router } from '@reach/router'; // comes with Gatsby
import IdentityModal from 'react-netlify-identity-widget';
import Layout from '../components/layout';
import Profile from '../components/profile';
import RouteBase from '../components/route-base';
import RouteSecret from '../components/route-secret';
import RouteLogin from '../components/route-login';
import PrivateRoute from '../components/private-route';

import 'react-netlify-identity-widget/styles.css';

// location is Gatsby helper
const Dashboard = ({ location }) => {
    const [modalIsVisible, setModalVisibility] = useState(false);
    // when component changes, check what's going on and act accordingly
    useEffect(() => {
        if (location.pathname.match(/^\/dashboard\/?$/)) {
            navigate('/dashboard/login', { replace: true }); // when we get redirected, instead of returning to redirect, get back to homepage
        }
    }, []);

    const showModal = () => setModalVisibility(true);
    return (
        <Layout>
        <Profile showModal={showModal} />
        <Router>
            <PrivateRoute component={RouteBase} path="/dashboard/base/" />
            <PrivateRoute component={RouteSecret} path="/dashboard/secret/" />
            <RouteLogin path="/dashboard/login/" showModal={showModal} />
        </Router>
        <IdentityModal
            showDialog={modalIsVisible}
            onCloseDialog={() => setModalVisibility(false)}
        />
        </Layout>
    );
}

export default Dashboard;
