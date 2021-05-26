import React from 'react';
import { useDispatch } from 'react-redux';

import { deleteContact } from '../../../../actions/contacts';

const AdminPost = ({ contact, setCurrentContactId }) => {
    const dispatch = useDispatch();
    return(
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{contact.designation}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{contact.name}</h6>
                <p id="contactmail" className="card-text">E-Mail : </p>
                <p id="contactmail" className="card-text">{contact.mail}</p>
                <div className="adminoptions">
                <button className="btn btn-primary" onClick={() => setCurrentContactId(contact._id)}>Edit</button>
                <button className="btn btn-danger" onClick={() => dispatch(deleteContact(contact._id))}>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default AdminPost;