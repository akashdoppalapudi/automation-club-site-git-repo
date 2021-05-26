import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getContacts } from '../../../actions/contacts';

import AdminContactForm from './AdminContactForm/AdminContactForm';
import AdminContact from './AdminContact/AdminContact';

import './AdminContacts.css';

const AdminContacts = ({ currentContactId, setCurrentContactId }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getContacts());
    }, [currentContactId, dispatch]);

    const contacts = useSelector((state) => state.contacts);
    
    return (
        <React.Fragment>
            <div className="row" id="contacts">
                <div className="col-md-4">
                    <AdminContactForm currentContactId={ currentContactId } setCurrentContactId={ setCurrentContactId } />
                </div>
                {contacts.map((contact) => (
                    <div className="col-md-4" key={contact._id}>
                        <AdminContact contact={contact} setCurrentContactId={ setCurrentContactId } />
                    </div>
                ))}
            </div>
        </React.Fragment>
        
    );
};

export default AdminContacts;