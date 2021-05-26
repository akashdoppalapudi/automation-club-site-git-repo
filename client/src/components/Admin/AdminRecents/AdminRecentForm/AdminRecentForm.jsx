import React, { useState, useEffect } from 'react';
import FileBase from 'react-file-base64';
import { useSelector, useDispatch } from 'react-redux';

import { createRecent, updateRecent } from '../../../../actions/recents';

import './AdminRecentForm.css';

const AdminRecentForm = ({ currentRecentId, setCurrentRecentId }) => {
    const [recentData, setRecentData] = useState({
        'title':'',
        'message':'',
        'link':'',
        'selectedFile':''
    });
    const recent = useSelector((state) => currentRecentId ? state.recents.find((p) => p._id === currentRecentId) : null);
    const dispatch = useDispatch();

    useEffect(() => {
        if(recent) setRecentData(recent);
    }, [recent]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentRecentId){
            dispatch(updateRecent(currentRecentId, recentData));
        } else{
            dispatch(createRecent(recentData));
        }
        clear();

    };

    const clear = () => {
        setCurrentRecentId(null);
        setRecentData({
            'title':'',
            'message':'',
            'link':'',
            'selectedFile':''
        });

    };

    return (
        <div className="recentform">
        <h2 className="formtitle">{ currentRecentId ? 'Edit ' : 'Create a '}Recent</h2>
        <form onSubmit={ handleSubmit }>
            <input type="text" className="form-control" placeholder="Title" value={recentData.title} onChange={(e) => setRecentData({ ...recentData, title:e.target.value })}></input>
            <textarea id="message" type="text" className="form-control" placeholder="Message" value={recentData.message} onChange={(e) => setRecentData({ ...recentData, message:e.target.value })}></textarea>
            <input type="text" className="form-control" placeholder="Link" value={recentData.link} onChange={(e) => setRecentData({ ...recentData, link:e.target.value })}></input>
            <div className="fileInput"><FileBase type="file" multiple={ false } onDone={({ base64 }) => setRecentData({...recentData, selectedFile:base64})}></FileBase></div>
            <button type="submit" className="btn btn-primary">Submit</button>
            <button type="button" className="btn btn-warning" onClick={ clear }>Clear</button>
        </form>
        </div>
    );
};

export default AdminRecentForm;