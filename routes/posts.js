import express from 'express';

import { getPosts, getPostByUHID, createPost,deletePost } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.get('/:id', getPostByUHID);
router.delete('/:id', deletePost);

export default router;