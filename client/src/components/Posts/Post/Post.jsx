import React from 'react';
import moment from 'moment';

const Post = ({post}) => {
    return(
        <div className="card">
            <img className="card-img-top" src={ post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png' } alt="post display"></img>
            <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{moment(post.createdAt).fromNow()}</h6>
                <p className="card-text">{post.message}</p>
                <a className="btn btn-primary" href={post.link} target="blank">
                    <svg id="play-icon" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-play" viewBox="0 0 16 16">
  <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
</svg> Watch</a>
            </div>
        </div>
    );
};

export default Post;