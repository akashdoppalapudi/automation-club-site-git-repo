import React from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { deletePost } from '../../../../actions/posts';

import './AdminPost.css';

const AdminPost = ({ post, setCurrentPostId }) => {
    const dispatch = useDispatch();
    return(
        <div className="card">
            <img className="card-img-top" src={ post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png' } alt="post display"></img>
            <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{moment(post.createdAt).fromNow()}</h6>
                <p className="card-text">{post.message}</p>
                <a className="card-link" href={post.link} target="blank">Watch</a>
                <button className="btn btn-primary" onClick={() => setCurrentPostId(post._id)}>Edit</button>
                <button className="btn btn-danger" onClick={() => dispatch(deletePost(post._id))}>Delete</button>
            </div>
        </div>
    );
};

export default AdminPost;