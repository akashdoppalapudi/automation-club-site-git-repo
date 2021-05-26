import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { createContact, updateContact } from '../../../../actions/contacts';

import './AdminContactForm.css';

const AdminContactForm = ({ currentContactId, setCurrentContactId }) => {
    const [contactData, setContactData] = useState({
        'designation': '',
        'name': '',
        'mail': ''
    });
    const contact = useSelector((state) => currentContactId ? state.contacts.find((p) => p._id === currentContactId) : null);
    const dispatch = useDispatch();

    useEffect(() => {
        if(contact) setContactData(contact);
    }, [contact]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentContactId){
            dispatch(updateContact(currentContactId, contactData));
        } else{
            dispatch(createContact(contactData));
        }
        clear();

    };

    const clear = () => {
        setCurrentContactId(null);
        setContactData({
            'designation': '',
            'name': '',
            'mail': ''
        });

    };

    return (
        <div className="contactform">
        <h2 className="formtitle">{ currentContactId ? 'Edit ' : 'Create a '}Contact</h2>
        <form onSubmit={ handleSubmit }>
            <input type="text" className="form-control" placeholder="Designation" value={contactData.designation} onChange={(e) => setContactData({ ...contactData, designation:e.target.value })}></input>
            <input type="text" className="form-control" placeholder="Name" value={contactData.name} onChange={(e) => setContactData({ ...contactData, name:e.target.value })}></input>
            <input type="text" className="form-control" placeholder="Mail" value={contactData.mail} onChange={(e) => setContactData({ ...contactData, mail:e.target.value })}></input>
            <button type="submit" className="btn btn-primary">Submit</button>
            <button type="button" className="btn btn-warning" onClick={ clear }>Clear</button>
        </form>
        </div>
    );
};

export default AdminContactForm; 