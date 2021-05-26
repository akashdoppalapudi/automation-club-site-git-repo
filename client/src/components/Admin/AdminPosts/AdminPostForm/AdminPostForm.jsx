import React, { useState, useEffect } from 'react';
import FileBase from 'react-file-base64';
import { useSelector, useDispatch } from 'react-redux';

import { createPost, updatePost } from '../../../../actions/posts';

import './AdminPostForm.css';

const AdminPostForm = ({ currentPostId, setCurrentPostId }) => {
    const [postData, setPostData] = useState({
        'title':'',
        'message':'',
        'link':'',
        'selectedFile':''
    });
    const post = useSelector((state) => currentPostId ? state.posts.find((p) => p._id === currentPostId) : null);
    const dispatch = useDispatch();

    useEffect(() => {
        if(post) setPostData(post);
    }, [post]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentPostId){
            dispatch(updatePost(currentPostId, postData));
        } else{
            dispatch(createPost(postData));
        }
        clear();

    };

    const clear = () => {
        setCurrentPostId(null);
        setPostData({
            'title':'',
            'message':'',
            'link':'',
            'selectedFile':''
        });

    };

    return (
        <div className="postform">
        <h2 className="formtitle">{ currentPostId ? 'Edit ' : 'Create a '}Post</h2>
        <form onSubmit={ handleSubmit }>
            <input type="text" className="form-control" placeholder="Title" value={postData.title} onChange={(e) => setPostData({ ...postData, title:e.target.value })}></input>
            <textarea id="message" type="text" className="form-control" placeholder="Message" value={postData.message} onChange={(e) => setPostData({ ...postData, message:e.target.value })}></textarea>
            <input type="text" className="form-control" placeholder="Link" value={postData.link} onChange={(e) => setPostData({ ...postData, link:e.target.value })}></input>
            <div className="fileInput"><FileBase type="file" multiple={ false } onDone={({ base64 }) => setPostData({...postData, selectedFile:base64})}></FileBase></div>
            <button type="submit" className="btn btn-primary">Submit</button>
            <button type="button" className="btn btn-warning" onClick={ clear }>Clear</button>
        </form>
        </div>
    );
};

export default AdminPostForm;