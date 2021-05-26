import React from 'react';
import { Link } from 'react-router-dom';

import './AdminNavBar.css';

const AdminNavBar = () => {
    return (
        <nav className="row">
            <div className="col-md">
                <Link className="btn btn-primary" role="button" to='/admin-recents'>Recents</Link>
            </div>
            <div className="col-md">
                <Link className="btn btn-primary" role="button" to='/admin-posts'>Posts</Link>
            </div>
            <div className="col-md">
                <Link className="btn btn-primary" role="button" to='/admin-contacts'>Contacts</Link>
            </div>
        </nav>
    );
};


export default AdminNavBar;