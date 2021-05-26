import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import AdminNavBar from './AdminNavBar/AdminNavBar';
import AdminRecents from './AdminRecents/AdminRecents';
import AdminPosts from './AdminPosts/AdminPosts';
import AdminContacts from './AdminContacts/AdminContacts';

import './Admin.css';

const Admin = ({ authorized, currentPostId, setCurrentPostId, currentRecentId, setCurrentRecentId, currentContactId, setCurrentContactId }) => {
    if (!authorized){
        return(
            <Redirect to='/login' />
        );
    }
    return(
        <BrowserRouter>
        <div className="Admin">
            <AdminNavBar />
            <Switch>
                <Route path='/admin-recents' exact component={() => <AdminRecents currentRecentId={ currentRecentId } setCurrentRecentId={ setCurrentRecentId } /> } />
                <Route path='/admin-posts' exact component={() => <AdminPosts currentPostId={ currentPostId } setCurrentPostId={ setCurrentPostId } /> } />
                <Route path='/admin-contacts' exact component={() => <AdminContacts currentContactId={ currentContactId } setCurrentContactId={ setCurrentContactId } /> } />
            </Switch>
        </div>
        </BrowserRouter>
    );
};

export default Admin;