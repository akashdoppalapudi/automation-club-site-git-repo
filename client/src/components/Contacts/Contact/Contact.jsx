import React from 'react';

const Contact = ({ contact }) => {
    return(
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{contact.designation}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{contact.name}</h6>
                <p id="contactmail" className="card-text">E-Mail : </p>
                <p id="contactmail" className="card-text">{contact.mail}</p>
            </div>
        </div>
    );
};

export default Contact;