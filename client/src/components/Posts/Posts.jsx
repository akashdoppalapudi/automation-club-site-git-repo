import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPosts } from '../../actions/posts';

import Post from './Post/Post';

import './Posts.css';

const Posts = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    const posts = useSelector((state) => state.posts);

    return(
        !posts.length ? (<div className="spinner-border" role="status"></div>) : 
        (<div className="row" id="posts">
            {posts.map((post) => (
                <div key={post._id} className="col-md-4">
                    <Post post={post} />
                </div>
            ))}
        </div>)
    );
};

export default Posts;