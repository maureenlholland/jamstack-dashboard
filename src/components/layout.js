import React from 'react';
import { Link } from 'gatsby';
import { IdentityContextProvider } from 'react-netlify-identity-widget';

import './layout.css';

const Layout = ({ children }) => (
    <IdentityContextProvider url="https://jamstack-dashboard-auth.netlify.com">
        <header>
            <Link to ="/">Main Page</Link>
        </header>
        <main>
            {children}
        </main>
    </IdentityContextProvider>
);

export default Layout;
