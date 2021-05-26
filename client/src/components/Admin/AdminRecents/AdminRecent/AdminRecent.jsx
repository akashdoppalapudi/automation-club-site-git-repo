import React from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { deleteRecent } from '../../../../actions/recents';

import './AdminRecent.css';

const AdminRecent = ({ recent, setCurrentRecentId }) => {
    const dispatch = useDispatch();
    return(
        <div className="card">
            <img className="card-img-top" src={ recent.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png' } alt="Recent display"></img>
            <div className="card-body">
                <h5 className="card-title">{recent.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{moment(recent.createdAt).fromNow()}</h6>
                <p className="card-text">{recent.message}</p>
                <a className="card-link" href={recent.link} target="blank">Watch</a>
                <button className="btn btn-primary" onClick={() => setCurrentRecentId(recent._id)}>Edit</button>
                <button className="btn btn-danger" onClick={() => dispatch(deleteRecent(recent._id))}>Delete</button>
            </div>
        </div>
    );
};

export default AdminRecent;