import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPosts } from '../../../actions/posts';

import AdminPostForm from './AdminPostForm/AdminPostForm';
import AdminPost from './AdminPost/AdminPost';

import './AdminPosts.css';

const AdminPosts = ({ currentPostId, setCurrentPostId }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts());
    }, [currentPostId, dispatch]);
    

    const posts = useSelector((state) => state.posts);

    return (
        <React.Fragment>
        <div className="row" id="posts">
        <div className="col-md-4">
            <AdminPostForm currentPostId={ currentPostId } setCurrentPostId={ setCurrentPostId } />
        </div>
        {posts.map((post) => (
            <div className="col-md-4" key={post._id}>
                <AdminPost post={post} setCurrentPostId={ setCurrentPostId }/>
            </div>
        ))}
        </div>
        </React.Fragment>   
    );
};

export default AdminPosts;