import React from 'react';
import { Link } from 'gatsby';

const Profile = () => {
    return (
        <div className="dashboard-header">
            <nav>
                <Link to="/dashboard/secret" activeClassName="active">
                    Secret Page
                </Link>
                <Link to="/dashboard/base" activeClassName="active">
                    Base Page
                </Link>
            </nav>
            <span>TODO: show login status</span>
        </div>   
    );
}

export default Profile;
