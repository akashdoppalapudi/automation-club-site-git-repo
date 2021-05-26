import express from 'express';
import { getPosts, createPost, updatePost, deletePost } from '../controllers/posts.js';

const postsRouter = express.Router();

postsRouter.get('/', getPosts);
postsRouter.post('/', createPost);
postsRouter.patch('/:id', updatePost);
postsRouter.delete('/:id', deletePost);

export default postsRouter;