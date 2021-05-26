import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getRecents } from '../../../actions/recents';

import AdminRecentForm from './AdminRecentForm/AdminRecentForm';
import AdminRecent from './AdminRecent/AdminRecent';

import './AdminRecents.css';

const AdminRecents = ({ currentRecentId, setCurrentRecentId }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getRecents());
    }, [currentRecentId, dispatch]);
    

    const recents = useSelector((state) => state.recents);

    return (
        <React.Fragment>
        <div className="row" id="recents">
        <div className="col-md-4">
            <AdminRecentForm currentRecentId={ currentRecentId } setCurrentRecentId={ setCurrentRecentId } />
        </div>
        {recents.map((recent) => (
            <div className="col-md-4" key={recent._id}>
                <AdminRecent recent={recent} setCurrentRecentId={ setCurrentRecentId }/>
            </div>
        ))}
        </div>
        </React.Fragment>    
    );
};

export default AdminRecents;