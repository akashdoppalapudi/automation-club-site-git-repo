import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getContacts } from '../../actions/contacts';

import Contact from './Contact/Contact';

import './Contacts.css';

const Contacts = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getContacts());
    }, [dispatch]);

    const contacts = useSelector((state) => state.contacts);
    return (
        !contacts.length ? (<div className="spinner-border" role="status"></div>) : (
        <div id="contacts">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Automation Club</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Automation Club Core Team</h6>
                            <p id="contactmail" className="card-text">E-Mail : automationclubvvit@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                {contacts.map((contact) => (
                    <div className="col-md-6" key={contact._id}>
                        <Contact contact={contact} />
                    </div>
                ))}
            </div>
        </div>
        )
    );
};

export default Contacts;